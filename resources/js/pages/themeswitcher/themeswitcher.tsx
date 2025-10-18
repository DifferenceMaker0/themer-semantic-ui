import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import './widget/tswitch.css';

// Import the complete Themer Dashboard system
import { AppSidebar } from './components/app-sidebar';
import { MainContent } from './components/main-content';
import { SidebarProvider } from './components/sidebar-provider';
import { SettingsProvider } from './components/settings-provider';
import { ArrowLeft } from 'lucide-react';
// Removed CSRF utilities - using Sanctum authentication instead

export const ThemerDashboard = () => {
    const [activeView, setActiveView] = useState('dashboard');

    // Sanctum authentication is handled automatically via session cookies

    const handleNavigate = (view: string) => {
        setActiveView(view);
    };

    const handleBackToStudioManager = () => {
        // Navigate back to Studio Manager
        window.location.href = '/dashboard';
    };

    return (
        <>
            <Head title="Themer Dashboard - Studio Manager" />
            <SettingsProvider>
                <SidebarProvider>
                    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                        {/* Back to Studio Manager Button */}
                        <div className="fixed top-4 right-4 z-50">
                            <button
                                onClick={handleBackToStudioManager}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Studio Manager
                            </button>
                        </div>

                        {/* Themer Dashboard Layout */}
                        <div className="flex h-screen">
                            <AppSidebar
                                activeView={activeView}
                                onNavigate={handleNavigate}
                            />
                            <MainContent activeView={activeView} />
                        </div>
                    </div>
                </SidebarProvider>
            </SettingsProvider>
        </>
    );
};

export default ThemerDashboard;