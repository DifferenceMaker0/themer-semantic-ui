import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

/**
 * ErrorBoundary - Catches JavaScript errors in child components
 */
export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Semantic Widget Error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="themer-card">
                    <div className="text-center p-8">
                        <div className="text-red-500 mb-4">
                            <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <h3 className="themer-heading-responsive font-semibold mb-2 text-red-700 dark:text-red-400">
                            Something went wrong
                        </h3>
                        <p className="themer-text-responsive text-gray-600 dark:text-gray-400 mb-4">
                            An error occurred while rendering this component.
                        </p>
                        {this.state.error && (
                            <details className="text-left text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 p-4 rounded">
                                <summary className="cursor-pointer font-medium mb-2">Error Details</summary>
                                <pre className="whitespace-pre-wrap">{this.state.error.message}</pre>
                            </details>
                        )}
                        <button
                            onClick={() => this.setState({ hasError: false, error: undefined })}
                            className="themer-button mt-4"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

/**
 * withErrorBoundary - HOC to wrap components with error boundary
 */
export function withErrorBoundary<P extends object>(
    Component: React.ComponentType<P>,
    fallback?: ReactNode
) {
    return function WrappedComponent(props: P) {
        return (
            <ErrorBoundary fallback={fallback}>
                <Component {...props} />
            </ErrorBoundary>
        );
    };
}
