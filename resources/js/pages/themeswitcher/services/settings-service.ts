// Settings Service for persistent configuration management

export interface UserSettings {
    theme: 'light' | 'dark' | 'theme-a' | 'theme-b';
    settings: {
        sidebar_collapsed: boolean;
        notifications_enabled: boolean;
        auto_save: boolean;
        language: string;
        timezone: string;
    };
}

export interface BootstrapData {
    user_type: 'guest' | 'user' | 'admin';
    theme: string;
    settings: Record<string, any>;
    permissions: Record<string, boolean>;
    features: Record<string, boolean>;
    timestamp: string;
}

export interface SettingsResponse {
    success: boolean;
    data?: UserSettings | BootstrapData;
    message?: string;
    errors?: Record<string, string[]>;
    user_type?: string;
}

class SettingsService {
    private readonly API_BASE = '/api/settings';
    private readonly STORAGE_KEY = 'app-color-scheme';
    private cache: UserSettings | null = null;
    private bootstrapData: BootstrapData | null = null;

    /**
     * Get user settings from API with caching
     */
    async getUserSettings(): Promise<UserSettings> {
        if (this.cache) {
            return this.cache;
        }

        try {
            const response = await fetch(this.API_BASE, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'same-origin'
            });

            const result: SettingsResponse = await response.json();

            if (!result.success || !result.data) {
                throw new Error(result.message || 'Failed to fetch settings');
            }

            this.cache = result.data as UserSettings;
            return this.cache;
        } catch (error) {
            console.error('Failed to fetch user settings:', error);
            // Fallback to localStorage or defaults
            return this.getFallbackSettings();
        }
    }

    /**
     * Update user settings
     */
    async updateSettings(settings: Partial<UserSettings>): Promise<UserSettings> {
        try {
            const response = await fetch(this.API_BASE, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'same-origin',
                body: JSON.stringify(settings)
            });

            const result: SettingsResponse = await response.json();

            if (!result.success || !result.data) {
                throw new Error(result.message || 'Failed to update settings');
            }

            // Update cache
            this.cache = result.data as UserSettings;
            
            // Update localStorage for immediate theme application
            if (settings.theme) {
                localStorage.setItem(this.STORAGE_KEY, settings.theme);
            }

            return this.cache;
        } catch (error) {
            console.error('Failed to update settings:', error);
            throw error;
        }
    }

    /**
     * Reset settings to defaults
     */
    async resetSettings(): Promise<UserSettings> {
        try {
            const response = await fetch(`${this.API_BASE}/reset`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'same-origin'
            });

            const result: SettingsResponse = await response.json();

            if (!result.success || !result.data) {
                throw new Error(result.message || 'Failed to reset settings');
            }

            // Clear cache
            this.cache = null;
            this.cache = result.data as UserSettings;

            // Update localStorage
            localStorage.setItem(this.STORAGE_KEY, this.cache.theme);

            return this.cache;
        } catch (error) {
            console.error('Failed to reset settings:', error);
            throw error;
        }
    }

    /**
     * Get bootstrap data for application initialization
     */
    async getBootstrapData(): Promise<BootstrapData> {
        if (this.bootstrapData) {
            return this.bootstrapData;
        }

        try {
            const response = await fetch(`${this.API_BASE}/bootstrap`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'same-origin'
            });

            const result: SettingsResponse = await response.json();

            if (!result.success || !result.data) {
                throw new Error(result.message || 'Failed to fetch bootstrap data');
            }

            this.bootstrapData = result.data as BootstrapData;
            return this.bootstrapData;
        } catch (error) {
            console.error('Failed to fetch bootstrap data:', error);
            // Return fallback bootstrap data
            return this.getFallbackBootstrapData();
        }
    }

    /**
     * Apply theme to document
     */
    applyTheme(theme: string): void {
        if (typeof document !== 'undefined') {
            document.body.setAttribute('data-color-scheme-mode', theme);
            localStorage.setItem(this.STORAGE_KEY, theme);
        }
    }

    /**
     * Get current theme from localStorage or settings
     */
    getCurrentTheme(): string {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(this.STORAGE_KEY) || 'light';
        }
        return 'light';
    }

    /**
     * Initialize settings on application mount
     */
    async initialize(): Promise<BootstrapData> {
        try {
            const bootstrapData = await this.getBootstrapData();
            
            // Apply theme immediately
            this.applyTheme(bootstrapData.theme);
            
            return bootstrapData;
        } catch (error) {
            console.error('Failed to initialize settings:', error);
            
            // Fallback initialization
            const fallbackTheme = this.getCurrentTheme();
            this.applyTheme(fallbackTheme);
            
            return this.getFallbackBootstrapData();
        }
    }

    /**
     * Verify settings integrity
     */
    async verifySettings(): Promise<boolean> {
        try {
            const settings = await this.getUserSettings();
            
            // Check theme validity
            const validThemes = ['light', 'dark', 'theme-a', 'theme-b'];
            if (!validThemes.includes(settings.theme)) {
                return false;
            }

            // Check settings structure
            const requiredKeys = ['sidebar_collapsed', 'notifications_enabled', 'auto_save'];
            for (const key of requiredKeys) {
                if (!(key in settings.settings)) {
                    return false;
                }
            }

            return true;
        } catch (error) {
            console.error('Settings verification failed:', error);
            return false;
        }
    }

    /**
     * Clear cache (useful for logout or user switching)
     */
    clearCache(): void {
        this.cache = null;
        this.bootstrapData = null;
    }

    /**
     * Get fallback settings when API fails
     */
    private getFallbackSettings(): UserSettings {
        const theme = this.getCurrentTheme() as UserSettings['theme'];
        
        return {
            theme,
            settings: {
                sidebar_collapsed: false,
                notifications_enabled: true,
                auto_save: true,
                language: 'en',
                timezone: 'UTC'
            }
        };
    }

    /**
     * Get fallback bootstrap data when API fails
     */
    private getFallbackBootstrapData(): BootstrapData {
        const theme = this.getCurrentTheme();
        
        return {
            user_type: 'guest',
            theme,
            settings: {
                sidebar_collapsed: false,
                notifications_enabled: true,
                auto_save: true,
                language: 'en',
                timezone: 'UTC'
            },
            permissions: {
                can_manage_users: false,
                can_manage_settings: false,
                can_view_analytics: false,
                can_export_data: false
            },
            features: {
                petstore: true,
                themer: true,
                analytics: false,
                user_management: false,
                settings: false
            },
            timestamp: new Date().toISOString()
        };
    }
}

// Export singleton instance
export const settingsService = new SettingsService();
export default settingsService;
