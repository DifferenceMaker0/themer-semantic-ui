import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Trash2, Copy, Edit, Calendar, Hash, Filter, Search } from 'lucide-react';
import { useSocialMedia } from '../../providers/social-media-provider';
import { SocialButton, SocialCard, SocialInput, SocialBadge } from '../ui/social-button';

/**
 * SocialMediaSavedPostsPage - Saved posts management page
 * Migrated from original SavedPostsPage with Themer styling and enhanced functionality
 */
export function SocialMediaSavedPostsPage() {
    const { savedPosts, setSavedPosts, deleteSavedPost, loadSavedPosts } = useSocialMedia();
    const [searchQuery, setSearchQuery] = useState('');
    const [filterPlatform, setFilterPlatform] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    // Filter and sort posts
    const filteredPosts = savedPosts
        .filter(post => {
            const matchesSearch = post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                post.hashtags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesPlatform = filterPlatform === 'all' || post.platform === filterPlatform;
            return matchesSearch && matchesPlatform;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                case 'oldest':
                    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                case 'platform':
                    return a.platform.localeCompare(b.platform);
                default:
                    return 0;
            }
        });

    // Delete post from database
    const deletePost = async (postId: string) => {
        if (confirm('Are you sure you want to delete this post?')) {
            try {
                await deleteSavedPost(postId);
                // Post is automatically removed from state by the provider
            } catch (error) {
                console.error('Failed to delete post:', error);
                alert('Failed to delete post. Please try again.');
            }
        }
    };

    // Copy post content
    const copyPost = (post: any) => {
        const content = `${post.content}\n\n${post.hashtags.map(tag => `#${tag}`).join(' ')}`;
        navigator.clipboard.writeText(content);
        // You could replace this with a toast notification
        alert('Post copied to clipboard!');
    };

    // Format date
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Get platform emoji
    const getPlatformEmoji = (platform: string) => {
        switch (platform) {
            case 'instagram': return '📸';
            case 'twitter': return '🐦';
            case 'linkedin': return '💼';
            case 'facebook': return '👥';
            default: return '📱';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-4">
                    <Save className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        Your Content Library
                    </span>
                </div>
                <h1 className="themer-heading-responsive font-bold mb-4">
                    Saved Posts ({savedPosts.length})
                </h1>
                <p className="themer-text-responsive text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Manage and organize your generated social media content
                </p>
            </motion.div>

            {/* Filters and Search */}
            <SocialCard>
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <SocialInput
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                    placeholder="Search posts and hashtags..."
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        {/* Platform Filter */}
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-gray-500" />
                            <select
                                value={filterPlatform}
                                onChange={(e) => setFilterPlatform(e.target.value)}
                                className="themer-input min-w-[120px]"
                            >
                                <option value="all">All Platforms</option>
                                <option value="instagram">Instagram</option>
                                <option value="twitter">Twitter</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="facebook">Facebook</option>
                            </select>
                        </div>

                        {/* Sort */}
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="themer-input min-w-[120px]"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="platform">By Platform</option>
                            </select>
                        </div>
                    </div>
                </div>
            </SocialCard>

            {/* Posts Grid */}
            <AnimatePresence>
                {filteredPosts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <SocialCard className="text-center py-12">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                <Save className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="themer-heading-responsive font-semibold mb-2">
                                {savedPosts.length === 0 ? 'No saved posts yet' : 'No posts match your search'}
                            </h3>
                            <p className="themer-text-responsive text-gray-500 dark:text-gray-400">
                                {savedPosts.length === 0 
                                    ? 'Generate some content to see your saved posts here'
                                    : 'Try adjusting your search or filter criteria'
                                }
                            </p>
                        </SocialCard>
                    </motion.div>
                ) : (
                    <div className="grid gap-6">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <SocialCard className="hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">
                                                    {getPlatformEmoji(post.platform)}
                                                </span>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <SocialBadge variant="default">
                                                            {post.platform}
                                                        </SocialBadge>
                                                        {post.template_name && (
                                                            <SocialBadge variant="success">
                                                                {post.template_name}
                                                            </SocialBadge>
                                                        )}
                                                    </div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                        {formatDate(post.created_at)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => copyPost(post)}
                                                    className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                                    title="Copy post"
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => deletePost(post.id)}
                                                    className="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                                                    title="Delete post"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="mb-4">
                                            <div className="text-gray-900 dark:text-white leading-relaxed">
                                                {post.content}
                                            </div>
                                        </div>

                                        {/* Hashtags */}
                                        {post.hashtags.length > 0 && (
                                            <div className="flex items-start gap-2 mb-4">
                                                <Hash className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                                <div className="flex flex-wrap gap-1">
                                                    {post.hashtags.map((hashtag, idx) => (
                                                        <SocialBadge key={idx} size="sm">
                                                            #{hashtag}
                                                        </SocialBadge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {post.hashtags.length} hashtags
                                            </div>
                                            <SocialButton
                                                onClick={() => copyPost(post)}
                                                variant="secondary"
                                                size="sm"
                                            >
                                                <Copy className="w-3 h-3 mr-1" />
                                                Copy
                                            </SocialButton>
                                        </div>
                                    </div>
                                </SocialCard>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
