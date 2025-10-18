<?php

namespace App\Services;

use App\Models\UserSetting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class SettingsService
{
    /**
     * Get user settings for a specific user type
     */
    public function getUserSettings(string $userType, $identifier = null): array
    {
        try {
            // Get identifier based on user type
            $actualIdentifier = $this->getIdentifier($userType, $identifier);
            
            // Try to get from cache first
            $cacheKey = "user_settings_{$userType}_{$actualIdentifier}";
            $cached = Cache::get($cacheKey);
            
            if ($cached) {
                return $cached;
            }
            
            // Get from database
            $userSetting = UserSetting::getForUserType($userType, $actualIdentifier);
            
            if (!$userSetting) {
                // Create default settings if none exist
                $defaultSettings = UserSetting::getDefaultSettings();
                $userSetting = $this->createUserSettings($userType, $actualIdentifier, $defaultSettings);
            }
            
            $settings = [
                'theme' => $userSetting->theme,
                'settings' => $userSetting->settings
            ];
            
            // Cache for 1 hour
            Cache::put($cacheKey, $settings, 3600);
            
            return $settings;
            
        } catch (\Exception $e) {
            Log::error('Error getting user settings: ' . $e->getMessage());
            return UserSetting::getDefaultSettings();
        }
    }
    
    /**
     * Update user settings
     */
    public function updateUserSettings(string $userType, array $settingsData, $identifier = null): array
    {
        try {
            $actualIdentifier = $this->getIdentifier($userType, $identifier);
            
            // Get existing settings or create new
            $userSetting = UserSetting::getForUserType($userType, $actualIdentifier);
            
            if (!$userSetting) {
                $userSetting = $this->createUserSettings($userType, $actualIdentifier, UserSetting::getDefaultSettings());
            }
            
            // Update settings
            if (isset($settingsData['theme'])) {
                $userSetting->theme = $settingsData['theme'];
            }
            
            if (isset($settingsData['settings'])) {
                // Merge with existing settings
                $currentSettings = $userSetting->settings ?? [];
                $userSetting->settings = array_merge($currentSettings, $settingsData['settings']);
            }
            
            $userSetting->save();
            
            // Clear cache
            $cacheKey = "user_settings_{$userType}_{$actualIdentifier}";
            Cache::forget($cacheKey);
            
            return [
                'theme' => $userSetting->theme,
                'settings' => $userSetting->settings
            ];
            
        } catch (\Exception $e) {
            Log::error('Error updating user settings: ' . $e->getMessage());
            throw $e;
        }
    }
    
    /**
     * Reset user settings to defaults
     */
    public function resetUserSettings(string $userType, $identifier = null): array
    {
        try {
            $actualIdentifier = $this->getIdentifier($userType, $identifier);
            
            // Get existing settings or create new
            $userSetting = UserSetting::getForUserType($userType, $actualIdentifier);
            
            $defaultSettings = UserSetting::getDefaultSettings();
            
            if (!$userSetting) {
                $userSetting = $this->createUserSettings($userType, $actualIdentifier, $defaultSettings);
            } else {
                // Reset to defaults
                $userSetting->theme = $defaultSettings['theme'];
                $userSetting->settings = $defaultSettings['settings'];
                $userSetting->save();
            }
            
            // Clear cache
            $cacheKey = "user_settings_{$userType}_{$actualIdentifier}";
            Cache::forget($cacheKey);
            
            return [
                'theme' => $userSetting->theme,
                'settings' => $userSetting->settings
            ];
            
        } catch (\Exception $e) {
            Log::error('Error resetting user settings: ' . $e->getMessage());
            throw $e;
        }
    }
    
    /**
     * Get bootstrap data for application initialization
     */
    public function getBootstrapData(string $userType, $identifier = null): array
    {
        try {
            // Get user settings
            $settings = $this->getUserSettings($userType, $identifier);
            
            // Get permissions based on user type
            $permissions = $this->getPermissions($userType);
            
            // Get features based on user type
            $features = $this->getFeatures($userType);
            
            return [
                'user_type' => $userType,
                'theme' => $settings['theme'],
                'settings' => $settings['settings'],
                'permissions' => $permissions,
                'features' => $features,
                'timestamp' => now()->toISOString()
            ];
            
        } catch (\Exception $e) {
            Log::error('Error getting bootstrap data: ' . $e->getMessage());
            
            // Return fallback bootstrap data
            return $this->getFallbackBootstrapData($userType);
        }
    }
    
    /**
     * Get identifier for the user type
     */
    private function getIdentifier(string $userType, $identifier = null)
    {
        switch ($userType) {
            case 'user':
            case 'admin':
                return $identifier ?? (Auth::check() ? Auth::user()->email : null);
            case 'guest':
                return $identifier ?? session()->getId();
            default:
                return $identifier;
        }
    }
    
    /**
     * Create new user settings
     */
    private function createUserSettings(string $userType, $identifier, array $settingsData): UserSetting
    {
        $userSetting = new UserSetting();
        $userSetting->user_type = $userType;
        
        switch ($userType) {
            case 'user':
            case 'admin':
                $userSetting->user_email = $identifier;
                break;
            case 'guest':
                $userSetting->session_id = $identifier;
                break;
        }
        
        $userSetting->theme = $settingsData['theme'];
        $userSetting->settings = $settingsData['settings'];
        $userSetting->save();
        
        return $userSetting;
    }
    
    /**
     * Get permissions based on user type
     */
    private function getPermissions(string $userType): array
    {
        switch ($userType) {
            case 'admin':
                return [
                    'can_manage_users' => true,
                    'can_manage_settings' => true,
                    'can_view_analytics' => true,
                    'can_export_data' => true,
                    'can_manage_studio' => true,
                ];
            case 'user':
                return [
                    'can_manage_users' => false,
                    'can_manage_settings' => true,
                    'can_view_analytics' => true,
                    'can_export_data' => true,
                    'can_manage_studio' => true,
                ];
            case 'guest':
            default:
                return [
                    'can_manage_users' => false,
                    'can_manage_settings' => false,
                    'can_view_analytics' => false,
                    'can_export_data' => false,
                    'can_manage_studio' => false,
                ];
        }
    }
    
    /**
     * Get features based on user type
     */
    private function getFeatures(string $userType): array
    {
        switch ($userType) {
            case 'admin':
            case 'user':
                return [
                    'petstore' => true,
                    'themer' => true,
                    'social_media' => true,
                    'analytics' => true,
                    'user_management' => $userType === 'admin',
                    'settings' => true,
                    'studio_manager' => true,
                ];
            case 'guest':
            default:
                return [
                    'petstore' => true,
                    'themer' => true,
                    'social_media' => false,
                    'analytics' => false,
                    'user_management' => false,
                    'settings' => false,
                    'studio_manager' => false,
                ];
        }
    }
    
    /**
     * Get fallback bootstrap data when errors occur
     */
    private function getFallbackBootstrapData(string $userType): array
    {
        $defaultSettings = UserSetting::getDefaultSettings();
        
        return [
            'user_type' => $userType,
            'theme' => $defaultSettings['theme'],
            'settings' => $defaultSettings['settings'],
            'permissions' => $this->getPermissions($userType),
            'features' => $this->getFeatures($userType),
            'timestamp' => now()->toISOString()
        ];
    }
}
