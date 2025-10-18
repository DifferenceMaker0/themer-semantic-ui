import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface SocialButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

/**
 * SocialButton - Animated button component for social media widget
 * Integrates with Themer classes and framer-motion animations
 */
export function SocialButton({
    children,
    onClick,
    disabled = false,
    loading = false,
    variant = 'primary',
    size = 'md',
    className = '',
    type = 'button'
}: SocialButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variantClasses = {
        primary: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white focus:ring-purple-500',
        secondary: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white focus:ring-gray-500',
        success: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white focus:ring-green-500',
        danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white focus:ring-red-500'
    };
    
    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };
    
    const disabledClasses = disabled || loading 
        ? 'opacity-50 cursor-not-allowed' 
        : 'cursor-pointer hover:scale-105 active:scale-95';
    
    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
    
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={buttonClasses}
            whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
            whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {loading && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            )}
            {children}
        </motion.button>
    );
}

interface SocialCardProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
}

/**
 * SocialCard - Animated card component for social media widget
 */
export function SocialCard({ children, className = '', animate = true }: SocialCardProps) {
    const cardClasses = `themer-card ${className}`;
    
    if (!animate) {
        return <div className={cardClasses}>{children}</div>;
    }
    
    return (
        <motion.div
            className={cardClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -2 }}
        >
            {children}
        </motion.div>
    );
}

interface SocialInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    rows?: number;
    maxLength?: number;
}

/**
 * SocialInput - Input component for social media widget
 */
export function SocialInput({
    value,
    onChange,
    placeholder = '',
    disabled = false,
    className = '',
    rows,
    maxLength
}: SocialInputProps) {
    const baseClasses = 'themer-input w-full';
    const inputClasses = `${baseClasses} ${className}`;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };
    
    if (rows) {
        return (
            <textarea
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
                maxLength={maxLength}
                className={inputClasses}
            />
        );
    }
    
    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            className={inputClasses}
        />
    );
}

interface SocialLabelProps {
    children: React.ReactNode;
    htmlFor?: string;
    required?: boolean;
    className?: string;
}

/**
 * SocialLabel - Label component for social media widget
 */
export function SocialLabel({ children, htmlFor, required = false, className = '' }: SocialLabelProps) {
    return (
        <label 
            htmlFor={htmlFor}
            className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${className}`}
        >
            {children}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
    );
}

interface SocialBadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md';
    className?: string;
    onClick?: () => void;
}

/**
 * SocialBadge - Badge component for hashtags and labels
 */
export function SocialBadge({ 
    children, 
    variant = 'default', 
    size = 'sm', 
    className = '',
    onClick 
}: SocialBadgeProps) {
    const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors';
    
    const variantClasses = {
        default: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
        success: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
        warning: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
        danger: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
    };
    
    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm'
    };
    
    const clickableClasses = onClick ? 'cursor-pointer hover:opacity-80' : '';
    
    const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${clickableClasses} ${className}`;
    
    return (
        <span className={badgeClasses} onClick={onClick}>
            {children}
        </span>
    );
}
