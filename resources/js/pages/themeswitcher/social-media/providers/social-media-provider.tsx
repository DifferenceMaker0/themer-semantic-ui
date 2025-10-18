import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { socialMediaApiService, SocialMediaPost as ApiSocialMediaPost } from '../services/social-media-api-service';

// Types
export interface SocialMediaTemplate {
    id: string;
    name: string;
    tone: string;
    description: string;
    example: string;
}

export interface SavedPost extends ApiSocialMediaPost {
    id: string;
    created_at: string;
}

export interface SocialMediaContextType {
    // Templates
    templates: SocialMediaTemplate[];
    selectedTemplate: SocialMediaTemplate | null;
    setSelectedTemplate: (template: SocialMediaTemplate | null) => void;
    
    // Platform
    selectedPlatform: string;
    setSelectedPlatform: (platform: string) => void;
    
    // Content Generation
    topic: string;
    setTopic: (topic: string) => void;
    generatedContent: string;
    setGeneratedContent: (content: string) => void;
    hashtags: string[];
    setHashtags: (hashtags: string[]) => void;
    
    // UI State
    isGenerating: boolean;
    setIsGenerating: (loading: boolean) => void;
    isSaving: boolean;
    setIsSaving: (saving: boolean) => void;
    
    // Saved Posts
    savedPosts: SavedPost[];
    setSavedPosts: (posts: SavedPost[]) => void;
    addSavedPost: (post: Omit<SavedPost, 'id' | 'created_at'>) => Promise<void>;
    loadSavedPosts: () => Promise<void>;
    deleteSavedPost: (id: string) => Promise<void>;
    
    // Utility Functions
    addHashtags: (newHashtags: string[]) => void;
    clearForm: () => void;
}

const SocialMediaContext = createContext<SocialMediaContextType | undefined>(undefined);

// Default templates
const defaultTemplates: SocialMediaTemplate[] = [
    {
        id: 'professional',
        name: 'Professional',
        tone: 'Professional and authoritative',
        description: 'Perfect for business updates and industry insights',
        example: 'Sharing insights from our latest project...'
    },
    {
        id: 'casual',
        name: 'Casual & Friendly',
        tone: 'Casual, friendly, and approachable',
        description: 'Great for personal stories and community building',
        example: 'Hey everyone! Just wanted to share...'
    },
    {
        id: 'inspirational',
        name: 'Inspirational',
        tone: 'Motivational and uplifting',
        description: 'Motivate your audience with inspiring content',
        example: 'Remember, every small step counts...'
    },
    {
        id: 'educational',
        name: 'Educational',
        tone: 'Informative and educational',
        description: 'Share knowledge and teach your audience',
        example: 'Here are 3 key tips that will help you...'
    },
    {
        id: 'promotional',
        name: 'Promotional',
        tone: 'Exciting and promotional',
        description: 'Promote products, services, or events',
        example: 'Exciting news! We\'re launching something amazing...'
    },
    {
        id: 'storytelling',
        name: 'Storytelling',
        tone: 'Narrative and engaging',
        description: 'Tell compelling stories that connect',
        example: 'Let me tell you about a moment that changed everything...'
    }
];

interface SocialMediaProviderProps {
    children: ReactNode;
}

export function SocialMediaProvider({ children }: SocialMediaProviderProps) {
    // Template state
    const [templates] = useState<SocialMediaTemplate[]>(defaultTemplates);
    const [selectedTemplate, setSelectedTemplate] = useState<SocialMediaTemplate | null>(null);
    
    // Platform state
    const [selectedPlatform, setSelectedPlatform] = useState<string>('instagram');
    
    // Content state
    const [topic, setTopic] = useState<string>('');
    const [generatedContent, setGeneratedContent] = useState<string>('');
    const [hashtags, setHashtags] = useState<string[]>([]);
    
    // UI state
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    
    // Saved posts state
    const [savedPosts, setSavedPosts] = useState<SavedPost[]>([]);

    // Load saved posts from API on mount
    useEffect(() => {
        loadSavedPosts();
    }, []);

    // Utility functions
    const addHashtags = (newHashtags: string[]) => {
        setHashtags(prev => [...new Set([...prev, ...newHashtags])]);
    };

    const loadSavedPosts = async () => {
        try {
            const posts = await socialMediaApiService.fetchPosts();
            setSavedPosts(posts.map(post => ({
                ...post,
                id: post.id!,
                created_at: post.created_at!
            })));
        } catch (error) {
            console.error('Failed to load saved posts:', error);
        }
    };

    const addSavedPost = async (postData: Omit<SavedPost, 'id' | 'created_at'>) => {
        try {
            const savedPost = await socialMediaApiService.savePost(postData);
            const newPost: SavedPost = {
                ...savedPost,
                id: savedPost.id!,
                created_at: savedPost.created_at!
            };
            setSavedPosts(prev => [newPost, ...prev]);
        } catch (error) {
            console.error('Failed to save post:', error);
            throw error;
        }
    };

    const deleteSavedPost = async (id: string) => {
        try {
            await socialMediaApiService.deletePost(id);
            setSavedPosts(prev => prev.filter(post => post.id !== id));
        } catch (error) {
            console.error('Failed to delete post:', error);
            throw error;
        }
    };
    
    const clearForm = () => {
        setTopic('');
        setGeneratedContent('');
        setHashtags([]);
        setSelectedTemplate(null);
    };
    
    const contextValue: SocialMediaContextType = {
        // Templates
        templates,
        selectedTemplate,
        setSelectedTemplate,
        
        // Platform
        selectedPlatform,
        setSelectedPlatform,
        
        // Content
        topic,
        setTopic,
        generatedContent,
        setGeneratedContent,
        hashtags,
        setHashtags,
        
        // UI State
        isGenerating,
        setIsGenerating,
        isSaving,
        setIsSaving,
        
        // Saved Posts
        savedPosts,
        setSavedPosts,
        addSavedPost,
        loadSavedPosts,
        deleteSavedPost,

        // Utilities
        addHashtags,
        clearForm
    };
    
    return (
        <SocialMediaContext.Provider value={contextValue}>
            {children}
        </SocialMediaContext.Provider>
    );
}

// Custom hook to use the social media context
export function useSocialMedia(): SocialMediaContextType {
    const context = useContext(SocialMediaContext);
    if (context === undefined) {
        throw new Error('useSocialMedia must be used within a SocialMediaProvider');
    }
    return context;
}
