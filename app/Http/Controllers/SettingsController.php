<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use App\Models\UserSetting;
use App\Services\SettingsService;

class SettingsController extends Controller
{
    protected $settingsService;

    public function __construct(SettingsService $settingsService)
    {
        $this->settingsService = $settingsService;
    }

    /**
     * Get user settings
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $userType = $this->getUserType();
            $settings = $this->settingsService->getUserSettings($userType);
            
            return response()->json([
                'success' => true,
                'data' => $settings,
                'user_type' => $userType
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to fetch settings: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch settings'
            ], 500);
        }
    }

    /**
     * Update user settings
     */
    public function update(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'theme' => 'required|string|in:light,dark,theme-a,theme-b',
            'settings' => 'sometimes|array',
            'settings.sidebar_collapsed' => 'sometimes|boolean',
            'settings.notifications_enabled' => 'sometimes|boolean',
            'settings.auto_save' => 'sometimes|boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $userType = $this->getUserType();
            $settingsData = [
                'theme' => $request->input('theme'),
                'settings' => $request->input('settings', [])
            ];

            $settings = $this->settingsService->updateUserSettings($userType, $settingsData);
            
            return response()->json([
                'success' => true,
                'data' => $settings,
                'message' => 'Settings updated successfully'
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to update settings: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to update settings'
            ], 500);
        }
    }

    /**
     * Reset settings to defaults
     */
    public function reset(Request $request): JsonResponse
    {
        try {
            $userType = $this->getUserType();
            $settings = $this->settingsService->resetUserSettings($userType);
            
            return response()->json([
                'success' => true,
                'data' => $settings,
                'message' => 'Settings reset to defaults'
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to reset settings: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to reset settings'
            ], 500);
        }
    }

    /**
     * Get bootstrap data for application initialization
     */
    public function bootstrap(Request $request): JsonResponse
    {
        try {
            $userType = $this->getUserType();
            $bootstrapData = $this->settingsService->getBootstrapData($userType);
            
            return response()->json([
                'success' => true,
                'data' => $bootstrapData
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to fetch bootstrap data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch bootstrap data'
            ], 500);
        }
    }

    /**
     * Determine user type based on authentication status
     */
    private function getUserType(): string
    {
        if (Auth::check()) {
            $user = Auth::user();
            
            // Check if user has admin role (assuming you have a role system)
            if (method_exists($user, 'hasRole') && $user->hasRole('admin')) {
                return 'admin';
            }
            
            return 'user';
        }
        
        return 'guest';
    }
}
