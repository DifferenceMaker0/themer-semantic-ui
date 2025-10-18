import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, Plus, X, Sparkles, Loader2 } from 'lucide-react';
import { useSocialMedia } from '../../providers/social-media-provider';
import { InvokeLLM } from '@/integrations/Core';
import { SocialButton, SocialBadge, SocialInput } from '../ui/social-button';

/**
 * SocialHashtagGenerator - Hashtag generation and management component
 * Migrated from original HashtagGenerator with Themer styling and AI integration
 */
export function SocialHashtagGenerator() {
    const { 
        topic, 
        selectedPlatform, 
        hashtags, 
        setHashtags, 
        addHashtags,
        generatedContent 
    } = useSocialMedia();
    
    const [isGenerating, setIsGenerating] = useState(false);
    const [customHashtag, setCustomHashtag] = useState('');

    // Generate hashtags using AI
    const generateHashtags = async () => {
        if (!topic && !generatedContent) return;
        
        setIsGenerating(true);
        try {
            const content = generatedContent || topic;
            const response = await InvokeLLM({
                prompt: `Generate 15 relevant and trending hashtags for this ${selectedPlatform} post: "${content}".
                Focus on hashtags that are:
                - Relevant to the content
                - Popular but not oversaturated
                - Mix of broad and niche hashtags
                - Appropriate for ${selectedPlatform}
                Return only the hashtags without the # symbol.`,
                add_context_from_internet: true,
                response_json_schema: {
                    type: "object",
                    properties: {
                        hashtags: {
                            type: "array",
                            items: { type: "string" }
                        }
                    }
                }
            });

            // Handle structured response from InvokeLLM
            if (response && typeof response === 'object' && 'hashtags' in response) {
                addHashtags(response.hashtags as string[]);
            } else {
                console.warn('Unexpected response format from InvokeLLM:', response);
            }
        } catch (error) {
            console.error("Error generating hashtags:", error);
        }
        setIsGenerating(false);
    };

    // Add custom hashtag
    const addCustomHashtag = () => {
        if (customHashtag.trim() && !hashtags.includes(customHashtag.trim())) {
            addHashtags([customHashtag.trim()]);
            setCustomHashtag('');
        }
    };

    // Remove hashtag
    const removeHashtag = (hashtagToRemove: string) => {
        setHashtags(hashtags.filter(tag => tag !== hashtagToRemove));
    };

    // Clear all hashtags
    const clearAllHashtags = () => {
        setHashtags([]);
    };

    // Handle Enter key for custom hashtag
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addCustomHashtag();
        }
    };

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Hash className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                        Hashtags ({hashtags.length})
                    </h3>
                </div>
                
                {hashtags.length > 0 && (
                    <button
                        onClick={clearAllHashtags}
                        className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {/* Generate Hashtags Button */}
            <SocialButton
                onClick={generateHashtags}
                disabled={(!topic && !generatedContent) || isGenerating}
                loading={isGenerating}
                variant="secondary"
                className="w-full"
            >
                {isGenerating ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating Hashtags...
                    </>
                ) : (
                    <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate AI Hashtags
                    </>
                )}
            </SocialButton>

            {/* Custom Hashtag Input */}
            <div className="flex gap-2">
                <div className="flex-1">
                    <SocialInput
                        value={customHashtag}
                        onChange={setCustomHashtag}
                        placeholder="Add custom hashtag..."
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <SocialButton
                    onClick={addCustomHashtag}
                    disabled={!customHashtag.trim() || hashtags.includes(customHashtag.trim())}
                    variant="secondary"
                    size="md"
                >
                    <Plus className="w-4 h-4" />
                </SocialButton>
            </div>

            {/* Hashtags Display */}
            <AnimatePresence>
                {hashtags.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                    >
                        {/* Hashtag Grid */}
                        <div className="flex flex-wrap gap-2">
                            {hashtags.map((hashtag, index) => (
                                <motion.div
                                    key={hashtag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <SocialBadge
                                        variant="default"
                                        className="group hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
                                    >
                                        <span className="mr-1">#</span>
                                        {hashtag}
                                        <button
                                            onClick={() => removeHashtag(hashtag)}
                                            className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X className="w-3 h-3 text-red-500" />
                                        </button>
                                    </SocialBadge>
                                </motion.div>
                            ))}
                        </div>

                        {/* Hashtag Copy Text */}
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Copy Hashtags:
                                </span>
                                <button
                                    onClick={() => {
                                        const hashtagText = hashtags.map(tag => `#${tag}`).join(' ');
                                        navigator.clipboard.writeText(hashtagText);
                                    }}
                                    className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                                >
                                    Copy All
                                </button>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 break-all">
                                {hashtags.map(tag => `#${tag}`).join(' ')}
                            </div>
                        </div>

                        {/* Platform Guidelines */}
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1 mb-1">
                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                <span>
                                    {selectedPlatform === 'instagram' && 'Instagram: Use 5-10 hashtags for best engagement'}
                                    {selectedPlatform === 'twitter' && 'Twitter: Use 1-2 hashtags to avoid looking spammy'}
                                    {selectedPlatform === 'linkedin' && 'LinkedIn: Use 3-5 professional hashtags'}
                                    {selectedPlatform === 'facebook' && 'Facebook: Use 1-3 hashtags sparingly'}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Empty State */}
            {hashtags.length === 0 && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <Hash className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No hashtags yet. Generate some or add your own!</p>
                </div>
            )}
        </div>
    );
}
