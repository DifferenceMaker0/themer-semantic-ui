import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    className?: string;
}

/**
 * LoadingSpinner - Reusable loading spinner component
 */
export function LoadingSpinner({ 
    size = 'md', 
    color = 'text-blue-600', 
    className = '' 
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12'
    };

    return (
        <div className={`animate-spin rounded-full border-b-2 ${sizeClasses[size]} ${color} ${className}`}>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

interface LoadingCardProps {
    title?: string;
    message?: string;
}

/**
 * LoadingCard - Loading state for card components
 */
export function LoadingCard({ 
    title = 'Loading...', 
    message = 'Please wait while we load the content.' 
}: LoadingCardProps) {
    return (
        <div className="themer-card">
            <div className="flex items-center justify-center p-8">
                <div className="text-center">
                    <LoadingSpinner size="lg" className="mx-auto mb-4" />
                    <h3 className="themer-heading-responsive font-semibold mb-2">
                        {title}
                    </h3>
                    <p className="themer-text-responsive text-gray-600 dark:text-gray-400">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
}
