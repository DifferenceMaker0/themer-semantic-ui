import { motion } from 'framer-motion';
import { Sparkles, Wand2, Save, Loader2 } from 'lucide-react';
import { useSocialMedia } from '../../providers/social-media-provider';
import { InvokeLLM } from '@/integrations/Core';

// Components
import { SocialTemplateSelector, SocialPlatformSelector } from '../generator/template-selector';
import { SocialHashtagGenerator } from '../generator/hashtag-generator';
import { SocialPostPreview } from '../generator/post-preview';
import { SocialButton, SocialCard, SocialInput, SocialLabel } from '../ui/social-button';

/**
 * SocialMediaGeneratorPage - Main generator page component
 * Migrated from original GeneratorPage with Themer styling and preserved React logic
 */
export function SocialMediaGeneratorPage() {
    const {
        topic,
        setTopic,
        selectedTemplate,
        selectedPlatform,
        generatedContent,
        setGeneratedContent,
        hashtags,
        isGenerating,
        setIsGenerating,
        isSaving,
        setIsSaving,
        addSavedPost
    } = useSocialMedia();

    // Generate post content using AI
    const generatePost = async () => {
        if (!topic || !selectedTemplate) return;

        setIsGenerating(true);
        try {
            const platformGuidelines: Record<string, string> = {
                instagram: "Keep it visual and engaging, 150-300 words with line breaks for readability",
                twitter: "Keep it concise and punchy, max 280 characters",
                linkedin: "Professional and insightful, 150-400 words with clear structure",
                facebook: "Friendly and conversational, 150-300 words"
            };

            const response = await InvokeLLM({
                prompt: `Create an engaging ${selectedPlatform} post about: ${topic}
                Style: ${selectedTemplate.tone}
                Platform: ${platformGuidelines[selectedPlatform]}
                Make it authentic, relatable, and optimized for engagement. Do not include hashtags in the content.
                Include emojis where appropriate.`,
                add_context_from_internet: true
            });

            // Handle response - InvokeLLM returns LLMResponse object
            if (response && typeof response === 'object' && 'response' in response) {
                setGeneratedContent(response.response as string);
            } else if (typeof response === 'string') {
                // Fallback for direct string response
                setGeneratedContent(response);
            } else {
                setGeneratedContent('Generated content not available');
            }
        } catch (error) {
            console.error("Error generating post:", error);
        }
        setIsGenerating(false);
    };

    // Save post to database
    const savePost = async () => {
        if (!generatedContent) return;

        setIsSaving(true);
        try {
            await addSavedPost({
                content: generatedContent,
                platform: selectedPlatform,
                hashtags: hashtags,
                template_name: selectedTemplate?.name,
                tone: selectedTemplate?.tone
            });

            // Show success message (you could replace with a toast notification)
            alert("Post saved successfully to database!");

            // Optionally clear the form
            // clearForm();
        } catch (error) {
            console.error("Error saving post:", error);
            alert("Failed to save post. Please try again.");
        }
        setIsSaving(false);
    };

    return (
        <div className="space-y-6">
            {/* Hero Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        AI-Powered Content Creation
                    </span>
                </div>
                <h1 className="themer-heading-responsive font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                    Create Engaging Posts in Seconds
                </h1>
                <p className="themer-text-responsive text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Generate viral-worthy content with AI-powered templates and trending hashtags
                </p>
            </motion.div>

            <div className="themer-grid-2 gap-8">
                {/* Left Column - Input & Settings */}
                <div className="space-y-6">
                    <SocialCard className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Wand2 className="w-5 h-5 text-purple-600" />
                                <h2 className="themer-heading-responsive font-semibold">
                                    Configure Your Post
                                </h2>
                            </div>
                            
                            <div className="space-y-6">
                                {/* Topic Input */}
                                <div className="space-y-2">
                                    <SocialLabel htmlFor="topic" required>
                                        What's your post about?
                                    </SocialLabel>
                                    <SocialInput
                                        value={topic}
                                        onChange={setTopic}
                                        placeholder="e.g., launching a new product, sharing a tip, celebrating a milestone..."
                                        className="text-lg"
                                    />
                                </div>

                                {/* Platform Selection */}
                                <div className="space-y-2">
                                    <SocialLabel>Choose Platform</SocialLabel>
                                    <SocialPlatformSelector />
                                </div>

                                {/* Template Selection */}
                                <div className="space-y-2">
                                    <SocialLabel>Select Writing Style</SocialLabel>
                                    <SocialTemplateSelector />
                                </div>

                                {/* Generate Button */}
                                <SocialButton
                                    onClick={generatePost}
                                    disabled={!topic || !selectedTemplate || isGenerating}
                                    loading={isGenerating}
                                    variant="primary"
                                    className="w-full text-lg py-6"
                                >
                                    {isGenerating ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Generating Magic...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="w-5 h-5 mr-2" />
                                            Generate Post
                                        </>
                                    )}
                                </SocialButton>
                            </div>
                        </div>
                    </SocialCard>

                    {/* Edit Section */}
                    {generatedContent && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <SocialCard className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                <div className="p-6">
                                    <h2 className="themer-heading-responsive font-semibold mb-4">
                                        Edit Your Post
                                    </h2>
                                    
                                    <div className="space-y-4">
                                        <SocialInput
                                            value={generatedContent}
                                            onChange={setGeneratedContent}
                                            rows={10}
                                            className="font-medium"
                                        />

                                        <SocialHashtagGenerator />

                                        <SocialButton
                                            onClick={savePost}
                                            disabled={isSaving}
                                            loading={isSaving}
                                            variant="success"
                                            className="w-full"
                                        >
                                            {isSaving ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Saving...
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="w-4 h-4 mr-2" />
                                                    Save Post
                                                </>
                                            )}
                                        </SocialButton>
                                    </div>
                                </div>
                            </SocialCard>
                        </motion.div>
                    )}
                </div>

                {/* Right Column - Preview */}
                <div className="lg:sticky lg:top-8 h-fit">
                    <SocialPostPreview />
                </div>
            </div>
        </div>
    );
}
