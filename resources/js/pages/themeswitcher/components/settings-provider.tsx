import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { settingsService, UserSettings, BootstrapData } from '../services/settings-service';

interface SettingsContextType {
    // State
    settings: UserSettings | null;
    bootstrapData: BootstrapData | null;
    loading: boolean;
    error: string | null;
    
    // Actions
    updateTheme: (theme: string) => Promise<void>;
    updateSettings: (settings: Partial<UserSettings>) => Promise<void>;
    resetSettings: () => Promise<void>;
    refreshSettings: () => Promise<void>;
    
    // Utilities
    hasPermission: (permission: string) => boolean;
    hasFeature: (feature: string) => boolean;
    getUserType: () => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
    children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
    const [settings, setSettings] = useState<UserSettings | null>(null);
    const [bootstrapData, setBootstrapData] = useState<BootstrapData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Initialize settings on mount
    useEffect(() => {
        initializeSettings();
    }, []);

    const initializeSettings = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const bootstrap = await settingsService.initialize();
            setBootstrapData(bootstrap);
            
            const userSettings = await settingsService.getUserSettings();
            setSettings(userSettings);
            
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to initialize settings';
            setError(errorMessage);
            console.error('Settings initialization error:', err);
        } finally {
            setLoading(false);
        }
    };

    const updateTheme = useCallback(async (theme: string) => {
        try {
            setError(null);
            
            // Apply theme immediately for better UX
            settingsService.applyTheme(theme);
            
            // Update settings in backend
            const updatedSettings = await settingsService.updateSettings({ theme: theme as UserSettings['theme'] });
            setSettings(updatedSettings);
            
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to update theme';
            setError(errorMessage);
            console.error('Theme update error:', err);
            throw err;
        }
    }, []);

    const updateSettings = useCallback(async (newSettings: Partial<UserSettings>) => {
        try {
            setError(null);
            
            const updatedSettings = await settingsService.updateSettings(newSettings);
            setSettings(updatedSettings);
            
            // If theme was updated, apply it
            if (newSettings.theme) {
                settingsService.applyTheme(newSettings.theme);
            }
            
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to update settings';
            setError(errorMessage);
            console.error('Settings update error:', err);
            throw err;
        }
    }, []);

    const resetSettings = useCallback(async () => {
        try {
            setError(null);
            
            const defaultSettings = await settingsService.resetSettings();
            setSettings(defaultSettings);
            
            // Apply default theme
            settingsService.applyTheme(defaultSettings.theme);
            
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to reset settings';
            setError(errorMessage);
            console.error('Settings reset error:', err);
            throw err;
        }
    }, []);

    const refreshSettings = useCallback(async () => {
        try {
            setError(null);
            
            // Clear cache to force fresh fetch
            settingsService.clearCache();
            
            const [bootstrap, userSettings] = await Promise.all([
                settingsService.getBootstrapData(),
                settingsService.getUserSettings()
            ]);
            
            setBootstrapData(bootstrap);
            setSettings(userSettings);
            
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to refresh settings';
            setError(errorMessage);
            console.error('Settings refresh error:', err);
            throw err;
        }
    }, []);

    const hasPermission = useCallback((permission: string): boolean => {
        return bootstrapData?.permissions?.[permission] ?? false;
    }, [bootstrapData]);

    const hasFeature = useCallback((feature: string): boolean => {
        return bootstrapData?.features?.[feature] ?? false;
    }, [bootstrapData]);

    const getUserType = useCallback((): string => {
        return bootstrapData?.user_type ?? 'guest';
    }, [bootstrapData]);

    const contextValue: SettingsContextType = {
        // State
        settings,
        bootstrapData,
        loading,
        error,
        
        // Actions
        updateTheme,
        updateSettings,
        resetSettings,
        refreshSettings,
        
        // Utilities
        hasPermission,
        hasFeature,
        getUserType
    };

    return (
        <SettingsContext.Provider value={contextValue}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings(): SettingsContextType {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
}

// Hook for theme-specific functionality
export function useTheme() {
    const { settings, updateTheme, loading } = useSettings();
    
    const currentTheme = settings?.theme ?? 'light';
    
    const setTheme = useCallback(async (theme: string) => {
        await updateTheme(theme);
    }, [updateTheme]);
    
    return {
        theme: currentTheme,
        setTheme,
        loading
    };
}

// Hook for permissions
export function usePermissions() {
    const { hasPermission, hasFeature, getUserType, bootstrapData } = useSettings();
    
    return {
        hasPermission,
        hasFeature,
        getUserType,
        permissions: bootstrapData?.permissions ?? {},
        features: bootstrapData?.features ?? {}
    };
}
