import React, { useState } from 'react';
import { useSettings, useTheme } from '../components/settings-provider';
import { ErrorBoundary } from '../semantic/components/ui/error-boundary';
import { LoadingCard } from '../semantic/components/ui/loading-spinner';

// Social Media Components
import { SocialMediaGeneratorPage } from './components/pages/generator-page';
import { SocialMediaSavedPostsPage } from './components/pages/saved-posts-page';

// Data Provider
import { SocialMediaProvider } from './providers/social-media-provider';

/**
 * ThemerSocialMediaWidget - Main parent component for Social Media Generator
 * 
 * Integrates the social media generator application into the Themer Dashboard.
 * Provides navigation between Generator and Saved Posts views.
 */
export function ThemerSocialMediaWidget() {
    const { settings, loading } = useSettings();
    const { theme } = useTheme();
    const [activeView, setActiveView] = useState<'generator' | 'saved-posts'>('generator');

    if (loading) {
        return (
            <LoadingCard 
                title="Loading Social Media Generator..." 
                message="Initializing AI-powered content creation tools"
            />
        );
    }

    return (
        <ErrorBoundary>
            <SocialMediaProvider>
                <div className="space-y-6">
                    {/* Header with Navigation */}
                    <div className="themer-card">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h1 className="themer-heading-responsive font-bold mb-2">
                                    🚀 Social Media Generator
                                </h1>
                                <p className="themer-text-responsive text-gray-600 dark:text-gray-400">
                                    Create engaging social media content with AI-powered tools
                                </p>
                            </div>
                            
                            {/* Navigation Tabs */}
                            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                                <button
                                    onClick={() => setActiveView('generator')}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                        activeView === 'generator'
                                            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    ✨ Generator
                                </button>
                                <button
                                    onClick={() => setActiveView('saved-posts')}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                        activeView === 'saved-posts'
                                            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    💾 Saved Posts
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[600px]">
                        <ErrorBoundary>
                            {activeView === 'generator' && <SocialMediaGeneratorPage />}
                            {activeView === 'saved-posts' && <SocialMediaSavedPostsPage />}
                        </ErrorBoundary>
                    </div>

                    {/* Status Footer */}
                    <div className="themer-card bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    AI Service Ready
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Theme: {theme}
                                </span>
                            </div>
                            <div className="text-xs">
                                Current View: {activeView === 'generator' ? 'Content Generator' : 'Saved Posts'}
                            </div>
                        </div>
                    </div>
                </div>
            </SocialMediaProvider>
        </ErrorBoundary>
    );
}
