import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useSocialMedia } from '../../providers/social-media-provider';
import { SocialCard } from '../ui/social-button';

/**
 * SocialTemplateSelector - Template selection component
 * Migrated from original TemplateSelector with Themer styling
 */
export function SocialTemplateSelector() {
    const { templates, selectedTemplate, setSelectedTemplate } = useSocialMedia();

    return (
        <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {templates.map((template, index) => (
                    <motion.div
                        key={template.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div
                            onClick={() => setSelectedTemplate(template)}
                            className={`
                                relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                                ${selectedTemplate?.id === template.id
                                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                                }
                            `}
                        >
                            {/* Selection Indicator */}
                            {selectedTemplate?.id === template.id && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                                >
                                    <Check className="w-4 h-4 text-white" />
                                </motion.div>
                            )}

                            {/* Template Content */}
                            <div className="space-y-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    {template.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {template.description}
                                </p>
                                <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                                    "{template.example}"
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Selected Template Info */}
            {selectedTemplate && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800"
                >
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                            <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-1">
                                Selected: {selectedTemplate.name}
                            </h4>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                                Tone: {selectedTemplate.tone}
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

/**
 * SocialPlatformSelector - Platform selection component
 * Migrated from original PlatformSelector with Themer styling
 */
export function SocialPlatformSelector() {
    const { selectedPlatform, setSelectedPlatform } = useSocialMedia();

    const platforms = [
        {
            id: 'instagram',
            name: 'Instagram',
            icon: '📸',
            description: 'Visual and engaging, 150-300 words',
            color: 'from-pink-500 to-purple-600'
        },
        {
            id: 'twitter',
            name: 'Twitter/X',
            icon: '🐦',
            description: 'Concise and punchy, max 280 characters',
            color: 'from-blue-400 to-blue-600'
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            icon: '💼',
            description: 'Professional and insightful, 150-400 words',
            color: 'from-blue-600 to-blue-800'
        },
        {
            id: 'facebook',
            name: 'Facebook',
            icon: '👥',
            description: 'Friendly and conversational, 150-300 words',
            color: 'from-blue-500 to-indigo-600'
        }
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {platforms.map((platform, index) => (
                <motion.div
                    key={platform.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div
                        onClick={() => setSelectedPlatform(platform.id)}
                        className={`
                            relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center
                            ${selectedPlatform === platform.id
                                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                            }
                        `}
                    >
                        {/* Selection Indicator */}
                        {selectedPlatform === platform.id && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-2 right-2 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center"
                            >
                                <Check className="w-3 h-3 text-white" />
                            </motion.div>
                        )}

                        {/* Platform Content */}
                        <div className="space-y-2">
                            <div className="text-2xl">{platform.icon}</div>
                            <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                                {platform.name}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                {platform.description}
                            </p>
                        </div>

                        {/* Gradient Accent */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.color} rounded-b-lg opacity-60`}></div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
