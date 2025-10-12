<?php

namespace App\Services;

use App\Models\UserSetting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;

class SettingsService
{
    protected const CACHE_TTL = 3600; // 1 hour
    protected const CACHE_PREFIX = 'user_settings_';

    /**
     * Get user settings with caching
     */
    public function getUserSettings(string $userType): array
    {
        $identifier = $this->getUserIdentifier($userType);
        $cacheKey = $this->getCacheKey($userType, $identifier);

        return Cache::remember($cacheKey, self::CACHE_TTL, function () use ($userType, $identifier) {
            $userSetting = UserSetting::getForUserType($userType, $identifier);
            
            if (!$userSetting) {
                return $this->getDefaultSettingsForUserType($userType);
            }

            return [
                'theme' => $userSetting->theme,
                'settings' => $userSetting->settings ?: []
            ];
        });
    }

    /**
     * Update user settings
     */
    public function updateUserSettings(string $userType, array $data): array
    {
        $identifier = $this->getUserIdentifier($userType);
        
        // Merge with existing settings
        $existingSettings = $this->getUserSettings($userType);
        $mergedData = [
            'theme' => $data['theme'] ?? $existingSettings['theme'],
            'settings' => array_merge($existingSettings['settings'] ?? [], $data['settings'] ?? [])
        ];

        // Update in database
        UserSetting::updateForUserType($userType, $mergedData, $identifier);

        // Clear cache
        $cacheKey = $this->getCacheKey($userType, $identifier);
        Cache::forget($cacheKey);

        return $mergedData;
    }

    /**
     * Reset user settings to defaults
     */
    public function resetUserSettings(string $userType): array
    {
        $identifier = $this->getUserIdentifier($userType);
        $defaultSettings = $this->getDefaultSettingsForUserType($userType);

        // Update in database
        UserSetting::updateForUserType($userType, $defaultSettings, $identifier);

        // Clear cache
        $cacheKey = $this->getCacheKey($userType, $identifier);
        Cache::forget($cacheKey);

        return $defaultSettings;
    }

    /**
     * Get bootstrap data for application initialization
     */
    public function getBootstrapData(string $userType): array
    {
        $settings = $this->getUserSettings($userType);
        
        return [
            'user_type' => $userType,
            'theme' => $settings['theme'],
            'settings' => $settings['settings'],
            'permissions' => $this->getUserPermissions($userType),
            'features' => $this->getAvailableFeatures($userType),
            'timestamp' => now()->toISOString()
        ];
    }

    /**
     * Get user identifier based on user type
     */
    protected function getUserIdentifier(string $userType)
    {
        switch ($userType) {
            case 'user':
            case 'admin':
                return Auth::id();
            case 'guest':
                return Session::getId();
            default:
                return null;
        }
    }

    /**
     * Get cache key for user settings
     */
    protected function getCacheKey(string $userType, $identifier): string
    {
        return self::CACHE_PREFIX . $userType . '_' . ($identifier ?: 'anonymous');
    }

    /**
     * Get default settings for user type
     */
    protected function getDefaultSettingsForUserType(string $userType): array
    {
        $baseSettings = UserSetting::getDefaultSettings();

        // Customize defaults based on user type
        switch ($userType) {
            case 'admin':
                $baseSettings['settings']['notifications_enabled'] = true;
                $baseSettings['settings']['auto_save'] = true;
                break;
            case 'user':
                $baseSettings['settings']['notifications_enabled'] = true;
                break;
            case 'guest':
                $baseSettings['settings']['notifications_enabled'] = false;
                $baseSettings['settings']['auto_save'] = false;
                break;
        }

        return $baseSettings;
    }

    /**
     * Get user permissions based on user type
     */
    protected function getUserPermissions(string $userType): array
    {
        switch ($userType) {
            case 'admin':
                return [
                    'can_manage_users' => true,
                    'can_manage_settings' => true,
                    'can_view_analytics' => true,
                    'can_export_data' => true
                ];
            case 'user':
                return [
                    'can_manage_users' => false,
                    'can_manage_settings' => false,
                    'can_view_analytics' => false,
                    'can_export_data' => false
                ];
            case 'guest':
                return [
                    'can_manage_users' => false,
                    'can_manage_settings' => false,
                    'can_view_analytics' => false,
                    'can_export_data' => false
                ];
            default:
                return [];
        }
    }

    /**
     * Get available features based on user type
     */
    protected function getAvailableFeatures(string $userType): array
    {
        switch ($userType) {
            case 'admin':
                return [
                    'petstore' => true,
                    'themer' => true,
                    'analytics' => true,
                    'user_management' => true,
                    'settings' => true
                ];
            case 'user':
                return [
                    'petstore' => true,
                    'themer' => true,
                    'analytics' => false,
                    'user_management' => false,
                    'settings' => true
                ];
            case 'guest':
                return [
                    'petstore' => true,
                    'themer' => true,
                    'analytics' => false,
                    'user_management' => false,
                    'settings' => false
                ];
            default:
                return [];
        }
    }

    /**
     * Verify user settings integrity
     */
    public function verifySettings(string $userType): bool
    {
        try {
            $settings = $this->getUserSettings($userType);
            
            // Check if theme is valid
            $validThemes = ['light', 'dark', 'theme-a', 'theme-b'];
            if (!in_array($settings['theme'], $validThemes)) {
                return false;
            }

            // Check if settings structure is valid
            $requiredKeys = ['sidebar_collapsed', 'notifications_enabled', 'auto_save'];
            foreach ($requiredKeys as $key) {
                if (!array_key_exists($key, $settings['settings'])) {
                    return false;
                }
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
