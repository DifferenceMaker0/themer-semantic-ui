// Social Media API Service for database operations
import { createCSRFHeaders } from '../../utils/csrf-utils';

export interface SocialMediaPost {
    id?: string;
    content: string;
    platform: string;
    hashtags: string[];
    template_name?: string;
    tone?: string;
    created_at?: string;
    updated_at?: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    errors?: Record<string, string[]>;
}

class SocialMediaApiService {
    private readonly API_BASE = '/api/social-media-posts';

    /**
     * Make API request with CSRF protection
     */
    private async makeRequest<T>(
        url: string,
        options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
        const response = await fetch(url, {
            ...options,
            headers: {
                ...createCSRFHeaders(),
                ...options.headers,
            },
            credentials: 'same-origin',
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const result: ApiResponse<T> = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'API request failed');
        }

        return result;
    }

    /**
     * Fetch all saved posts
     */
    async fetchPosts(): Promise<SocialMediaPost[]> {
        try {
            const response = await this.makeRequest<SocialMediaPost[]>(this.API_BASE);
            return response.data || [];
        } catch (error) {
            console.error('Error fetching social media posts:', error);
            throw error;
        }
    }

    /**
     * Save a new post
     */
    async savePost(postData: Omit<SocialMediaPost, 'id' | 'created_at' | 'updated_at'>): Promise<SocialMediaPost> {
        try {
            const response = await this.makeRequest<SocialMediaPost>(this.API_BASE, {
                method: 'POST',
                body: JSON.stringify(postData),
            });

            if (!response.success || !response.data) {
                throw new Error(response.message || 'Failed to save post');
            }

            return response.data;
        } catch (error) {
            console.error('Error saving social media post:', error);
            throw error;
        }
    }

    /**
     * Update an existing post
     */
    async updatePost(id: string, postData: Partial<SocialMediaPost>): Promise<SocialMediaPost> {
        try {
            const response = await this.makeRequest<SocialMediaPost>(`${this.API_BASE}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(postData),
            });

            if (!response.success || !response.data) {
                throw new Error(response.message || 'Failed to update post');
            }

            return response.data;
        } catch (error) {
            console.error('Error updating social media post:', error);
            throw error;
        }
    }

    /**
     * Delete a post
     */
    async deletePost(id: string): Promise<void> {
        try {
            const response = await this.makeRequest<void>(`${this.API_BASE}/${id}`, {
                method: 'DELETE',
            });

            if (!response.success) {
                throw new Error(response.message || 'Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting social media post:', error);
            throw error;
        }
    }

    /**
     * Get a specific post by ID
     */
    async getPost(id: string): Promise<SocialMediaPost> {
        try {
            const response = await this.makeRequest<SocialMediaPost>(`${this.API_BASE}/${id}`);

            if (!response.success || !response.data) {
                throw new Error(response.message || 'Post not found');
            }

            return response.data;
        } catch (error) {
            console.error('Error fetching social media post:', error);
            throw error;
        }
    }
}

// Export singleton instance
export const socialMediaApiService = new SocialMediaApiService();
export default socialMediaApiService;
