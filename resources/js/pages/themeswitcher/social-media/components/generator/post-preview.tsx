import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, User } from 'lucide-react';
import { useSocialMedia } from '../../providers/social-media-provider';
import { SocialCard } from '../ui/social-button';

/**
 * SocialPostPreview - Post preview component showing platform-specific layouts
 * Migrated from original PostPreview with Themer styling and animations
 */
export function SocialPostPreview() {
    const { generatedContent, hashtags, selectedPlatform } = useSocialMedia();

    if (!generatedContent) {
        return (
            <SocialCard className="border-2 border-dashed border-purple-200 dark:border-purple-800 bg-white/40 dark:bg-gray-800/40">
                <div className="p-12 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 to-pink-900 rounded-full flex items-center justify-center">
                        <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Your Post Will Appear Here
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Fill in the details and click generate to see your content come to life
                    </p>
                </div>
            </SocialCard>
        );
    }

    const renderPreview = () => {
        switch (selectedPlatform) {
            case 'instagram':
                return <InstagramPreview />;
            case 'twitter':
                return <TwitterPreview />;
            case 'linkedin':
                return <LinkedInPreview />;
            case 'facebook':
                return <FacebookPreview />;
            default:
                return <InstagramPreview />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            {renderPreview()}
        </motion.div>
    );
}

// Instagram Preview Component
function InstagramPreview() {
    const { generatedContent, hashtags } = useSocialMedia();
    
    return (
        <SocialCard className="max-w-md mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">your_account</div>
                    <div className="text-xs text-gray-500">Just now</div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>

            {/* Image Placeholder */}
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 to-pink-900 flex items-center justify-center">
                <span className="text-4xl opacity-50">📸</span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <Heart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    <MessageCircle className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    <Share className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <Bookmark className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
                <div className="text-sm text-gray-900 dark:text-white mb-2">
                    <span className="font-semibold mr-2">your_account</span>
                    {generatedContent}
                </div>
                {hashtags.length > 0 && (
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                        {hashtags.slice(0, 10).map(tag => `#${tag}`).join(' ')}
                    </div>
                )}
            </div>
        </SocialCard>
    );
}

// Twitter Preview Component
function TwitterPreview() {
    const { generatedContent, hashtags } = useSocialMedia();
    
    return (
        <SocialCard className="max-w-lg mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <div className="p-4">
                <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                            <span className="font-bold text-gray-900 dark:text-white">Your Name</span>
                            <span className="text-gray-500">@youraccount</span>
                            <span className="text-gray-500">·</span>
                            <span className="text-gray-500">now</span>
                        </div>
                        <div className="text-gray-900 dark:text-white mb-3">
                            {generatedContent}
                            {hashtags.length > 0 && (
                                <div className="text-blue-500 mt-2">
                                    {hashtags.slice(0, 2).map(tag => `#${tag}`).join(' ')}
                                </div>
                            )}
                        </div>
                        <div className="flex items-center justify-between max-w-md">
                            <div className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 cursor-pointer">
                                <MessageCircle className="w-5 h-5" />
                                <span className="text-sm">12</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500 hover:text-green-500 cursor-pointer">
                                <Share className="w-5 h-5" />
                                <span className="text-sm">3</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500 hover:text-red-500 cursor-pointer">
                                <Heart className="w-5 h-5" />
                                <span className="text-sm">24</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 cursor-pointer">
                                <Bookmark className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SocialCard>
    );
}

// LinkedIn Preview Component
function LinkedInPreview() {
    const { generatedContent, hashtags } = useSocialMedia();
    
    return (
        <SocialCard className="max-w-lg mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <div className="p-4">
                <div className="flex items-start space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white">Your Name</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Your Professional Title</div>
                        <div className="text-xs text-gray-500">Just now</div>
                    </div>
                </div>
                
                <div className="text-gray-900 dark:text-white mb-4 leading-relaxed">
                    {generatedContent}
                </div>
                
                {hashtags.length > 0 && (
                    <div className="text-blue-600 dark:text-blue-400 mb-4">
                        {hashtags.slice(0, 5).map(tag => `#${tag}`).join(' ')}
                    </div>
                )}
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">Like</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm">Comment</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600">
                            <Share className="w-5 h-5" />
                            <span className="text-sm">Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </SocialCard>
    );
}

// Facebook Preview Component
function FacebookPreview() {
    const { generatedContent, hashtags } = useSocialMedia();
    
    return (
        <SocialCard className="max-w-lg mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white">Your Name</div>
                        <div className="text-xs text-gray-500">Just now · 🌍</div>
                    </div>
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="text-gray-900 dark:text-white mb-4">
                    {generatedContent}
                    {hashtags.length > 0 && (
                        <div className="text-blue-600 dark:text-blue-400 mt-2">
                            {hashtags.slice(0, 3).map(tag => `#${tag}`).join(' ')}
                        </div>
                    )}
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                    <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 flex-1 justify-center py-2">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm">Like</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 flex-1 justify-center py-2">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">Comment</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 flex-1 justify-center py-2">
                        <Share className="w-5 h-5" />
                        <span className="text-sm">Share</span>
                    </button>
                </div>
            </div>
        </SocialCard>
    );
}
