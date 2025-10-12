import React, { useState, useEffect, useCallback } from 'react';
import { 
    SidebarGroup, 
    SidebarGroupLabel, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton
} from '@/components/ui/sidebar';
import { 
    Collapsible, 
    CollapsibleContent, 
    CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { ChevronRight, Palette, Monitor, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

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

export function ThemeSwitcherSidebar({ className }: ThemeSwitcherSidebarProps) {
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
        <SidebarGroup className={cn("px-2 py-0", className)}>
            <SidebarGroupLabel>Appearance</SidebarGroupLabel>
            <SidebarMenu>
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton 
                                tooltip={{ children: "Theme Settings" }}
                                className="group/button"
                            >
                                <CurrentIcon className="h-4 w-4" />
                                <span>Theme: {currentTheme?.label}</span>
                                <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {THEME_MODES.map((theme) => {
                                    const ThemeIcon = theme.icon;
                                    const isActive = currentMode === theme.value;
                                    
                                    return (
                                        <SidebarMenuSubItem key={theme.value}>
                                            <SidebarMenuSubButton
                                                onClick={() => handleThemeChange(theme.value)}
                                                isActive={isActive}
                                                className={cn(
                                                    "cursor-pointer",
                                                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                                                )}
                                            >
                                                <ThemeIcon className="h-4 w-4" />
                                                <span>{theme.label}</span>
                                                {isActive && (
                                                    <div className="ml-auto h-2 w-2 rounded-full bg-current" />
                                                )}
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    );
                                })}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            </SidebarMenu>
        </SidebarGroup>
    );
}

// Export the original widget for backward compatibility
export { default as ThemeSwitcherWidget } from '../pages/themeswitcher/widget/tswitch-widget';
