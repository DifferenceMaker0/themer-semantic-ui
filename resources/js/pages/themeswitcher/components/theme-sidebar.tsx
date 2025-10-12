import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, Palette, Monitor, Sun, Moon } from 'lucide-react';

// Theme configuration
const THEME_MODES = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'theme-a', label: 'Theme A', icon: Palette },
    { value: 'theme-b', label: 'Theme B', icon: Palette }
];

const STORAGE_KEY = 'app-color-scheme-mode';

interface ThemeSwitcherSidebarProps {
    className?: string;
}

export function ThemerSidebar({ className }: ThemeSwitcherSidebarProps) {
    const [currentMode, setCurrentMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(STORAGE_KEY) || 'light';
        }
        return 'light';
    });
    
    const [isOpen, setIsOpen] = useState(false);

    // Core theme application logic
    const applyTheme = useCallback((mode: string) => {
        if (!THEME_MODES.find(theme => theme.value === mode)) {
            console.warn(`Attempted to set an invalid theme mode: ${mode}`);
            return;
        }
        
        setCurrentMode(mode);
        
        // Apply to document body
        if (typeof document !== 'undefined') {
            document.body.setAttribute('data-color-scheme-mode', mode);
            localStorage.setItem(STORAGE_KEY, mode);
        }
        
        console.log(`Theme set to: ${mode}`);
    }, []);

    // Initialize theme on mount
    useEffect(() => {
        applyTheme(currentMode);
    }, [currentMode, applyTheme]);

    const handleThemeChange = (mode: string) => {
        applyTheme(mode);
        setIsOpen(false); // Close the collapsible after selection
    };

    const currentTheme = THEME_MODES.find(theme => theme.value === currentMode);
    const CurrentIcon = currentTheme?.icon || Palette;

    return (
        <div className={`px-3 py-2 ${className || ''}`}>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Appearance
            </div>
            <div className="space-y-1">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <CurrentIcon className="h-4 w-4" />
                    <span className="flex-1 text-left">Theme: {currentTheme?.label}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {isOpen && (
                    <div className="ml-6 space-y-1">
                        {THEME_MODES.map((theme) => {
                            const ThemeIcon = theme.icon;
                            const isActive = currentMode === theme.value;
                            
                            return (
                                <button
                                    key={theme.value}
                                    onClick={() => handleThemeChange(theme.value)}
                                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                                        isActive 
                                            ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100' 
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    <ThemeIcon className="h-4 w-4" />
                                    <span className="flex-1 text-left">{theme.label}</span>
                                    {isActive && (
                                        <div className="h-2 w-2 rounded-full bg-current" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
