// Live Gemini AI integration
import type { LLMRequest, LLMResponse } from '@/types';
import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini AI client
const initializeGeminiClient = () => {
  const apiKey = import.meta.env?.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error('VITE_GEMINI_API_KEY not found in environment variables');
    throw new Error('Gemini API key is required');
  }
  return new GoogleGenAI({ apiKey });
};

// Convert our response schema format to Gemini's Type format
const convertToGeminiSchema = (schema: any) => {
  if (!schema) return null;

  if (schema.type === "object" && schema.properties?.hashtags) {
    return {
      type: Type.OBJECT,
      properties: {
        hashtags: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING,
          },
        },
      },
      propertyOrdering: ["hashtags"],
    };
  }

  return null;
};

export async function InvokeLLM({ prompt, response_json_schema, add_context_from_internet = false }: LLMRequest): Promise<LLMResponse> {
  try {
    const ai = initializeGeminiClient();

    // Prepare the base request
    const baseRequest = {
      model: "gemini-2.0-flash-exp",
      contents: prompt,
    };

    // Add structured response configuration if schema is provided
    if (response_json_schema) {
      const geminiSchema = convertToGeminiSchema(response_json_schema);
      if (geminiSchema) {
        // Use structured response format
        const response = await ai.models.generateContent({
          ...baseRequest,
          config: {
            responseMimeType: "application/json",
            responseSchema: geminiSchema,
          }
        });

        try {
          const jsonResponse = JSON.parse(response.text || '{}');
          return jsonResponse;
        } catch (parseError) {
          console.error('Failed to parse JSON response:', parseError);
          return { response: response.text || '', error: 'JSON parse failed' };
        }
      }
    }

    // Make regular API call for text response
    const response = await ai.models.generateContent(baseRequest);
    return { response: response.text || '', confidence: 0.9, tokens_used: response.usageMetadata?.totalTokenCount || 100 };

  } catch (error) {
    console.error('Gemini API Error:', error);

    // Fallback to mock responses in case of API failure
    return await fallbackMockResponse({ prompt, response_json_schema });
  }
}

// Fallback mock responses for when API fails
async function fallbackMockResponse({ prompt, response_json_schema }: { prompt: string; response_json_schema?: any }): Promise<LLMResponse> {
  console.log('Using fallback mock response due to API failure');

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock responses based on the prompt content
  if (response_json_schema && response_json_schema.properties?.hashtags) {
    // Mock hashtag generation
    const sampleHashtags = [
      "socialmedia", "contentcreator", "digitalmarketing", "branding", "engagement",
      "viral", "trending", "marketing", "business", "entrepreneur", "success",
      "motivation", "inspiration", "growth", "innovation", "creativity", "community",
      "networking", "influence", "strategy"
    ];

    // Return random selection of hashtags
    const selectedHashtags = sampleHashtags
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);

    return { hashtags: selectedHashtags };
  }

  // Mock post content generation
  const samplePosts = {
    instagram: [
      "🌟 Just launched something amazing! Can't wait to share this journey with all of you. The process has been incredible and I'm so grateful for the support. ✨\n\nWhat's your biggest goal this month? Drop it in the comments! 👇",
      "💡 Here's a quick tip that changed everything for me: Focus on progress, not perfection. Every small step counts toward your bigger vision.\n\nRemember, consistency beats intensity every single time! 🚀"
    ],
    twitter: [
      "Just shipped something I'm really proud of 🚀\n\nThe key? Starting before you feel ready.\n\nProgress > Perfection",
      "Quick reminder: Your biggest competitor is who you were yesterday.\n\nKeep pushing forward! 💪"
    ],
    linkedin: [
      "I've been reflecting on what makes the difference between good and great in our industry. Here are 3 key principles that separate high performers:\n\n1. They ask 'why' before 'how'\n2. They measure what matters, not just what's easy\n3. They invest in relationships, not just results",
      "The best advice I ever received: 'Your network is your net worth.' When you focus on helping others succeed, opportunities naturally follow."
    ],
    facebook: [
      "Hey everyone! 👋 Take a moment today to celebrate a small win—you deserve it! 🎉 What's one thing you're proud of this week?",
      "Coffee thoughts ☕️ Sometimes the best moments are the unplanned ones. What small moment made you smile today? 😊"
    ]
  };

  // Get platform from prompt
  const platform = prompt.toLowerCase().includes('instagram') ? 'instagram' :
    prompt.toLowerCase().includes('twitter') ? 'twitter' :
      prompt.toLowerCase().includes('linkedin') ? 'linkedin' : 'facebook';

  // Return random sample post for the platform
  const posts = samplePosts[platform as keyof typeof samplePosts] || samplePosts.instagram;
  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  return { response: randomPost, confidence: 0.8, tokens_used: 120 };
}

export async function InvokeLLMWithContext(
  prompt: string,
  context: Record<string, any> = {},
  options: Partial<LLMRequest> = {}
): Promise<LLMResponse> {
  const enhancedPrompt = `
Context: ${JSON.stringify(context, null, 2)}

User Request: ${prompt}
  `;

  return InvokeLLM({
    prompt: enhancedPrompt,
    ...options
  });
}
