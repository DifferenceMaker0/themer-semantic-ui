import React from 'react';
import { Theme, Box, Section, Flex, Container } from "@radix-ui/themes";
import { useSettings, useTheme } from '../components/settings-provider';

// UI Components
import { ErrorBoundary } from './components/ui/error-boundary';
import { LoadingCard } from './components/ui/loading-spinner';

// Child Components (to be migrated)
import { SemanticNoteablePeopleApp } from './components/noteable-app';
import { SemanticCardsGrid, SemanticRecipeCardsGrid } from './components/cards-grid';
import { SemanticSendFeedback } from './components/send-feedback';
import { SemanticStyledComponents } from './components/theme-provider';
import { SemanticCheckboxCard } from './components/checkbox-card';
import { SemanticSideMenuThemeTree } from './components/radix-list';

// Shared data and utilities
import { useSemanticData } from './hooks/use-semantic-data';
import { SemanticDataProvider } from './providers/semantic-data-provider';

/**
 * ThemerSemanticWidget - Parent component for semantic UI demonstrations
 * 
 * This component serves as the main container for various React UI components
 * that demonstrate semantic patterns, Radix UI usage, and interactive widgets.
 * 
 * Features:
 * - Integrates with Themer Dashboard theme system
 * - Provides shared data context to child components
 * - Maintains original React logic from cshop components
 * - Uses Themer responsive classes for consistent styling
 */
export function ThemerSemanticWidget() {
    const { settings, loading } = useSettings();
    const { theme } = useTheme();

    // Map Themer themes to Radix UI themes
    const getRadixTheme = (themerTheme: string) => {
        switch (themerTheme) {
            case 'dark':
                return { appearance: 'dark' as const, accentColor: 'crimson' as const };
            case 'theme-a':
                return { appearance: 'light' as const, accentColor: 'blue' as const };
            case 'theme-b':
                return { appearance: 'dark' as const, accentColor: 'green' as const };
            default:
                return { appearance: 'light' as const, accentColor: 'crimson' as const };
        }
    };

    const radixTheme = getRadixTheme(theme);

    if (loading) {
        return (
            <LoadingCard
                title="Loading Semantic Widget..."
                message="Initializing React components and Radix UI integration"
            />
        );
    }

    return (
        <ErrorBoundary>
            <SemanticDataProvider>
                <div className="space-y-6">
                {/* Header */}
                <div className="themer-card">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="themer-title-responsive font-bold">
                                Semantic UI Components
                            </h2>
                            <p className="themer-text-responsive text-gray-600 dark:text-gray-400">
                                Interactive React components demonstrating semantic patterns and Radix UI integration
                            </p>
                        </div>
                        <div className="text-sm text-gray-500">
                            Theme: {theme} | Settings: {settings ? 'Loaded' : 'Default'}
                        </div>
                    </div>
                </div>

                {/* Radix UI Theme Container */}
                <Theme 
                    appearance={radixTheme.appearance} 
                    accentColor={radixTheme.accentColor} 
                    panelBackground="solid" 
                    radius="large"
                >
                    <div className="themer-card">
                        {/* Side Menu Theme Tree */}
                        <Section className="mb-6">
                            <ErrorBoundary>
                                <SemanticSideMenuThemeTree />
                            </ErrorBoundary>
                        </Section>

                        <Container>
                            {/* Styled Components Section */}
                            <Section className="mb-6">
                                <Container>
                                    <ErrorBoundary>
                                        <SemanticStyledComponents />
                                    </ErrorBoundary>
                                </Container>
                            </Section>

                            {/* Notable People App Section */}
                            <Section className="mb-6">
                                <ErrorBoundary>
                                    <SemanticNoteablePeopleApp />
                                </ErrorBoundary>
                            </Section>

                            {/* Cards Grid Section */}
                            <Section className="mb-6">
                                <ErrorBoundary>
                                    <SemanticCardsGrid />
                                </ErrorBoundary>
                            </Section>

                            {/* Send Feedback Section */}
                            <Section className="mb-6">
                                <ErrorBoundary>
                                    <SemanticSendFeedback />
                                </ErrorBoundary>
                            </Section>

                            {/* Recipe Cards and Checkbox Section */}
                            <Section className="mb-6">
                                <div className="themer-grid-2 gap-6">
                                    <div>
                                        <ErrorBoundary>
                                            <SemanticRecipeCardsGrid />
                                        </ErrorBoundary>
                                    </div>
                                    <div>
                                        <ErrorBoundary>
                                            <SemanticCheckboxCard />
                                        </ErrorBoundary>
                                    </div>
                                </div>
                            </Section>
                        </Container>
                    </div>
                </Theme>

                {/* Component Status */}
                <div className="themer-card">
                    <h3 className="themer-heading-responsive font-semibold mb-4">
                        Component Status
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span>Notable People App</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span>Cards Grid</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span>Send Feedback</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span>Styled Components</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span>Checkbox Card</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span>Radix List</span>
                        </div>
                    </div>
                </div>
            </div>
            </SemanticDataProvider>
        </ErrorBoundary>
    );
}

export default ThemerSemanticWidget;
