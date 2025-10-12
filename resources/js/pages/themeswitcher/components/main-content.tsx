import React, { useState, useEffect, useCallback } from 'react';
import { useSidebar } from './sidebar-provider';
import { Menu, Palette, Store, BarChart3, Settings, Sun, Moon } from 'lucide-react';
import { PetstoreWidget } from './petstore-widget';
import { useSettings, useTheme } from './settings-provider';
import { ThemerSemanticWidget } from '../semantic/themer-semantic-widget';
import { ThemerSocialMediaWidget } from '../social-media/themer-social-media-widget';

// Theme configuration
const THEME_MODES = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'theme-a', label: 'Theme A', icon: Palette },
    { value: 'theme-b', label: 'Theme B', icon: Palette }
];

const STORAGE_KEY = 'app-color-scheme';

interface MainContentProps {
    activeView?: string;
}

export function MainContent({ activeView = 'dashboard' }: MainContentProps) {
    const { setIsOpen } = useSidebar();
    const { settings, loading: settingsLoading, error: settingsError } = useSettings();
    const { theme: currentMode, setTheme } = useTheme();

    // Core theme application logic
    const applyTheme = useCallback(async (mode: string) => {
        if (!THEME_MODES.find(theme => theme.value === mode)) {
            console.warn(`Attempted to set an invalid theme mode: ${mode}`);
            return;
        }

        try {
            await setTheme(mode);
            console.log(`Theme set to: ${mode}`);
        } catch (error) {
            console.error('Failed to apply theme:', error);
        }
    }, [setTheme]);

    // Initialize theme on mount
    useEffect(() => {
        if (currentMode) {
            // Apply theme from settings service
            if (typeof document !== 'undefined') {
                document.body.setAttribute('data-color-scheme-mode', currentMode);
            }
        }
    }, [currentMode]);

    const currentTheme = THEME_MODES.find(theme => theme.value === currentMode);
    const CurrentIcon = currentTheme?.icon || Palette;

    // View titles and descriptions
    const getViewInfo = (view: string) => {
        switch (view) {
            case 'petstore':
                return {
                    title: 'Pet Store Management',
                    description: 'Manage your pet store inventory and customer data'
                };
            case 'semantic':
                return {
                    title: 'Semantic UI Components',
                    description: 'Interactive React components with Radix UI integration'
                };
            case 'social-media':
                return {
                    title: 'Social Media Generator',
                    description: 'AI-powered social media content creation and management'
                };
            case 'themer':
                return {
                    title: 'Theme Management',
                    description: 'Customize and manage application themes'
                };
            case 'docs':
                return {
                    title: 'Documentation',
                    description: 'Browse application documentation and guides'
                };
            case 'settings':
                return {
                    title: 'Settings',
                    description: 'Configure application settings and preferences'
                };
            default:
                return {
                    title: 'Dashboard',
                    description: 'Welcome to your theme-enabled dashboard'
                };
        }
    };

    const viewInfo = getViewInfo(activeView);

    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {viewInfo.title}
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {viewInfo.description}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-950">
                <div className="themer-container space-y-6">
                    {activeView === 'petstore' && <PetstoreWidget />}
                    {activeView === 'semantic' && <ThemerSemanticWidget />}
                    {activeView === 'social-media' && <ThemerSocialMediaWidget />}
                    {activeView === 'dashboard' && (
                        <>
                            {/* Dashboard Content */}
                    {/* Welcome Section */}
                    <div className="themer-card">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="themer-title-responsive font-bold mb-2">
                                    Welcome to Themer Dashboard
                                </h2>
                                <p className="themer-text-responsive">
                                    Standalone dashboard with integrated theme management.
                                    Use the sidebar to switch themes site-wide.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <CurrentIcon className="h-5 w-5 text-blue-600" />
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Current Theme</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                        {currentTheme?.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="themer-grid-4 gap-6">
                        <div className="themer-card">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Active Themes
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        4
                                    </p>
                                </div>
                                <Palette className="h-8 w-8 text-blue-600" />
                            </div>
                        </div>

                        <div className="themer-card">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Components
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        12
                                    </p>
                                </div>
                                <Store className="h-8 w-8 text-green-600" />
                            </div>
                        </div>

                        <div className="themer-card">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Performance
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        98%
                                    </p>
                                </div>
                                <BarChart3 className="h-8 w-8 text-purple-600" />
                            </div>
                        </div>

                        <div className="themer-card">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Status
                                    </p>
                                    <p className="text-2xl font-bold text-green-600">
                                        Online
                                    </p>
                                </div>
                                <Settings className="h-8 w-8 text-gray-600" />
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="themer-grid-2 gap-6">
                        {/* Theme Control Center */}
                        <div className="themer-card">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                Theme Control Center
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Site-wide theme management integrated into the dashboard:
                            </p>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    {THEME_MODES.map((theme) => {
                                        const ThemeIcon = theme.icon;
                                        const isActive = currentMode === theme.value;

                                        return (
                                            <button
                                                key={theme.value}
                                                onClick={() => applyTheme(theme.value)}
                                                className={`
                                                    flex items-center gap-2 p-3 rounded-lg border transition-all
                                                    ${isActive
                                                        ? 'bg-blue-100 border-blue-300 text-blue-900 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-100'
                                                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
                                                    }
                                                `}
                                            >
                                                <ThemeIcon className="h-4 w-4" />
                                                <span className="text-sm font-medium">{theme.label}</span>
                                                {isActive && (
                                                    <div className="ml-auto h-2 w-2 rounded-full bg-current" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Theme Variables Demo */}
                        <div className="themer-card">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                Live Theme Variables
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Elements using CSS variables that respond to theme changes:
                            </p>
                            <div className="space-y-3">
                                <div
                                    className="p-4 rounded-lg border"
                                    style={{
                                        backgroundColor: 'var(--color-background)',
                                        color: 'var(--color-text)',
                                        borderColor: 'var(--color-border)'
                                    }}
                                >
                                    This element uses CSS variables that update with theme changes
                                </div>
                                <button className="themer-button">
                                    Themed Button Component
                                </button>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Current mode: <span className="font-mono font-medium">{currentMode}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="themer-card">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Dashboard Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    Isolated Development
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    This dashboard is completely isolated within the themeswitcher directory, 
                                    independent of the root application.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    Theme Integration
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Full theme switching with SASS-powered CSS variables and 
                                    persistent localStorage settings.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    Responsive Design
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Mobile-friendly sidebar with collapsible navigation and 
                                    responsive grid layouts.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    Future Ready
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Ready to integrate petstore and docs components when 
                                    this replaces the main dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                        </>
                    )}

                    {activeView === 'themer' && (
                        <div className="themer-card">
                            <h3 className="themer-heading-responsive font-semibold mb-4">
                                Theme Demo
                            </h3>
                            <p className="themer-text-responsive mb-4">
                                This is where the original theme switcher demo would be displayed.
                            </p>
                        </div>
                    )}

                    {activeView === 'docs' && (
                        <div className="themer-card">
                            <h3 className="themer-heading-responsive font-semibold mb-4">
                                Documentation
                            </h3>
                            <p className="themer-text-responsive mb-4">
                                Documentation content will be displayed here.
                            </p>
                        </div>
                    )}

                    {activeView === 'settings' && (
                        <div className="themer-card">
                            <h3 className="themer-heading-responsive font-semibold mb-4">
                                Settings
                            </h3>
                            <p className="themer-text-responsive mb-4">
                                Application settings will be displayed here.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
