import React from 'react';
import { useSidebar } from './sidebar-provider';
import { ThemerSidebar } from './theme-sidebar';
import {
    LayoutGrid,
    Store,
    Palette,
    FileText,
    Settings,
    ChevronLeft,
    Menu,
    ArrowLeft
} from 'lucide-react';

interface NavigationItem {
    title: string;
    href: string;
    icon: any;
    isActive: boolean;
}

interface AppSidebarProps {
    activeView?: string;
    onNavigate?: (view: string) => void;
}

const getNavigationItems = (activeView: string): NavigationItem[] => [
    {
        title: 'Dashboard',
        href: 'dashboard',
        icon: LayoutGrid,
        isActive: activeView === 'dashboard'
    },
    {
        title: 'Pet Store',
        href: 'petstore',
        icon: Store,
        isActive: activeView === 'petstore'
    },
    {
        title: 'Semantic UI',
        href: 'semantic',
        icon: Palette,
        isActive: activeView === 'semantic'
    },
    {
        title: 'Social Media',
        href: 'social-media',
        icon: Palette,
        isActive: activeView === 'social-media'
    },
    {
        title: 'Theme Demo',
        href: 'themer',
        icon: Palette,
        isActive: activeView === 'themer'
    },
    {
        title: 'Documentation',
        href: 'docs',
        icon: FileText,
        isActive: activeView === 'docs'
    },
    {
        title: 'Settings',
        href: 'settings',
        icon: Settings,
        isActive: activeView === 'settings'
    }
];

export function AppSidebar({ activeView = 'dashboard', onNavigate }: AppSidebarProps) {
    const { isOpen, setIsOpen } = useSidebar();
    const navigationItems = getNavigationItems(activeView);

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
            
            {/* Sidebar */}
            <div className={`
                fixed lg:static inset-y-0 left-0 z-50 w-64 
                transform transition-transform duration-200 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
                flex flex-col
            `}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Palette className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-lg">Themer Dashboard</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto">
                    {/* Back to Studio Manager */}
                    <div className="p-3 border-b border-gray-200 dark:border-gray-800">
                        <button
                            onClick={() => window.location.href = '/dashboard'}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Studio Manager</span>
                        </button>
                    </div>

                    <div className="p-3">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Themer Dashboard
                        </div>
                        <nav className="space-y-1">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.title}
                                        onClick={() => onNavigate?.(item.href)}
                                        className={`
                                            w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors
                                            ${item.isActive
                                                ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }
                                        `}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Themer Section */}
                    <ThemerSidebar />
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">U</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                User
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                user@example.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
