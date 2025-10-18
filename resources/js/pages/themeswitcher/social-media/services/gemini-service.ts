// Gemini AI integration service
import { GoogleGenAI, type GenerateContentRequest } from "@google/genai";

// Types
interface LLMRequest {
    prompt: string;
    response_json_schema?: {
        type: string;
        properties?: {
            hashtags?: {
                type: string;
                items?: { type: string };
            };
        };
    };
    add_context_from_internet?: boolean;
}

interface HashtagResponse {
    hashtags: string[];
}

// Initialize Gemini AI client
const initializeGeminiClient = () => {
    const apiKey = import.meta.env?.VITE_GEMINI_API_KEY;
    if (!apiKey) {
        console.warn('VITE_GEMINI_API_KEY not found in environment variables. Using fallback responses.');
        return null;
    }
    try {
        return new GoogleGenAI({ apiKey });
    } catch (error) {
        console.error('Failed to initialize Gemini client:', error);
        return null;
    }
};

// Convert response schema to Gemini format
const convertToGeminiSchema = (schema: any) => {
    if (!schema) return null;
    
    if (schema.type === "object" && schema.properties?.hashtags) {
        return {
            type: "object",
            properties: {
                hashtags: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
            },
            propertyOrdering: ["hashtags"],
        };
    }
    
    return null;
};

// Main LLM invocation function
export async function InvokeLLM({ 
    prompt, 
    response_json_schema, 
    add_context_from_internet = false 
}: LLMRequest): Promise<string | HashtagResponse> {
    const ai = initializeGeminiClient();
    
    // If no API key or client initialization failed, use fallback
    if (!ai) {
        return await fallbackMockResponse({ prompt, response_json_schema });
    }
    
    try {
        // Prepare the base request
        const baseRequest: GenerateContentRequest = {
            model: "gemini-2.0-flash-exp",
            contents: [{ parts: [{ text: prompt }] }],
        };
        
        // Add structured response configuration if schema is provided
        if (response_json_schema) {
            const geminiSchema = convertToGeminiSchema(response_json_schema);
            if (geminiSchema) {
                // Use structured response format
                const response = await ai.models.generateContent({
                    ...baseRequest,
                    generationConfig: {
                        responseMimeType: "application/json",
                        responseSchema: geminiSchema,
                    }
                });
                
                try {
                    const text = response.response?.text() || '{}';
                    const jsonResponse = JSON.parse(text);
                    return jsonResponse;
                } catch (parseError) {
                    console.error('Failed to parse JSON response:', parseError);
                    return response.response?.text() || '';
                }
            }
        }
        
        // Make regular API call for text response
        const response = await ai.models.generateContent(baseRequest);
        return response.response?.text() || '';
        
    } catch (error) {
        console.error('Gemini API Error:', error);
        
        // Fallback to mock responses in case of API failure
        return await fallbackMockResponse({ prompt, response_json_schema });
    }
}

// Fallback mock responses for when API fails or no API key
async function fallbackMockResponse({ 
    prompt, 
    response_json_schema 
}: Omit<LLMRequest, 'add_context_from_internet'>): Promise<string | HashtagResponse> {
    console.log('Using fallback mock response');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock responses based on the prompt content
    if (response_json_schema && response_json_schema.properties?.hashtags) {
        // Mock hashtag generation
        const sampleHashtags = [
            "socialmedia", "contentcreator", "digitalmarketing", "branding", "engagement",
            "viral", "trending", "marketing", "business", "entrepreneur", "success",
            "motivation", "inspiration", "growth", "innovation", "creativity", "community",
            "networking", "influence", "strategy", "content", "social", "media", "online",
            "digital", "brand", "audience", "followers", "likes", "shares", "comments"
        ];
        
        // Return random selection of hashtags
        const selectedHashtags = sampleHashtags
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);
        
        return { hashtags: selectedHashtags };
    }
    
    // Mock post content generation based on platform
    const samplePosts = {
        instagram: [
            "🌟 Just launched something amazing! Can't wait to share this journey with all of you. The process has been incredible and I'm so grateful for the support. ✨\n\nWhat's your biggest goal this month? Drop it in the comments! 👇",
            "💡 Here's a quick tip that changed everything for me: Focus on progress, not perfection. Every small step counts toward your bigger vision.\n\nRemember, consistency beats intensity every single time! 🚀",
            "✨ Behind the scenes moment: Sometimes the magic happens when you least expect it. Today was one of those days where everything just clicked.\n\nWhat unexpected moment made your day better? 💫"
        ],
        twitter: [
            "Just shipped something I'm really proud of 🚀\n\nThe key? Starting before you feel ready.\n\nProgress > Perfection",
            "Quick reminder: Your biggest competitor is who you were yesterday.\n\nKeep pushing forward! 💪",
            "Hot take: The best time to start was yesterday. The second best time is now.\n\nWhat are you starting today? 🔥"
        ],
        linkedin: [
            "I've been reflecting on what makes the difference between good and great in our industry. Here are 3 key principles that separate high performers:\n\n1. They ask 'why' before 'how'\n2. They measure what matters, not just what's easy\n3. They invest in relationships, not just results\n\nWhat would you add to this list?",
            "The best advice I ever received: 'Your network is your net worth.' When you focus on helping others succeed, opportunities naturally follow.\n\nHow has networking changed your career trajectory?",
            "After 5 years in this industry, here's what I wish I knew when I started:\n\n• Perfectionism is the enemy of progress\n• Feedback is a gift, even when it stings\n• Your reputation is built one interaction at a time\n\nWhat would you tell your younger professional self?"
        ],
        facebook: [
            "Hey everyone! 👋 Take a moment today to celebrate a small win—you deserve it! 🎉 What's one thing you're proud of this week?",
            "Coffee thoughts ☕️ Sometimes the best moments are the unplanned ones. Today was one of those days where everything just clicked.\n\nWhat small moment made you smile today? 😊",
            "Weekend vibes! 🌈 Grateful for this community and all the amazing people in it. You all inspire me every day.\n\nWhat's everyone up to this weekend? Drop your plans below! 👇"
        ]
    };
    
    // Get platform from prompt
    const platform = prompt.toLowerCase().includes('instagram') ? 'instagram' :
        prompt.toLowerCase().includes('twitter') ? 'twitter' :
            prompt.toLowerCase().includes('linkedin') ? 'linkedin' : 'facebook';
    
    // Return random sample post for the platform
    const posts = samplePosts[platform] || samplePosts.instagram;
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    
    return randomPost;
}

// Utility function to check if API is available
export function isGeminiAPIAvailable(): boolean {
    return !!import.meta.env?.VITE_GEMINI_API_KEY;
}

// Utility function to get API status
export function getAPIStatus(): { available: boolean; message: string } {
    const hasApiKey = !!import.meta.env?.VITE_GEMINI_API_KEY;
    
    if (hasApiKey) {
        return {
            available: true,
            message: 'Gemini API is configured and ready'
        };
    } else {
        return {
            available: false,
            message: 'Using fallback responses. Add VITE_GEMINI_API_KEY to enable AI generation.'
        };
    }
}
