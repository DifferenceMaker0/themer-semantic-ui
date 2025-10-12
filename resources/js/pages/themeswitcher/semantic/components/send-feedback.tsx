import React, { useState } from 'react';
import { Box, Card, Flex, Grid, Text, TextArea, Switch, Button } from "@radix-ui/themes";
import { useSemanticFeedback } from '../hooks/use-semantic-data';

/**
 * SemanticSendFeedback - Migrated from cshop/MenuHtml/send-feedback.tsx
 * 
 * Interactive feedback form component with rating and comment functionality.
 * Preserves original UI structure while adding data persistence.
 */
export function SemanticSendFeedback() {
    const { addFeedback, feedbackList } = useSemanticFeedback();
    const [comment, setComment] = useState('');
    const [isHelpful, setIsHelpful] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!comment.trim()) return;

        setIsSubmitting(true);
        
        try {
            await addFeedback({
                rating: isHelpful ? 5 : 2,
                comment: comment.trim()
            });
            
            // Reset form
            setComment('');
            setIsHelpful(true);
            
            // Show success (could be enhanced with toast notification)
            console.log('Feedback submitted successfully');
        } catch (error) {
            console.error('Failed to submit feedback:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box maxWidth="400px">
            <Card className="shadow-6" size="2">
                <Flex direction="column" gap="3">
                    <Grid gap="1">
                        <Text as="div" weight="bold" size="2" mb="1">
                            Feedback
                        </Text>
                        <TextArea 
                            placeholder="Write your feedback…" 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </Grid>
                    <Flex asChild justify="between">
                        <label>
                            <Text color="gray" size="2">
                                Did you find this helpful?
                            </Text>
                            <Switch 
                                size="1" 
                                checked={isHelpful}
                                onCheckedChange={setIsHelpful}
                                disabled={isSubmitting}
                            />
                        </label>
                    </Flex>
                    <Grid columns="2" gap="2">
                        <Button 
                            variant="surface"
                            onClick={() => {
                                setComment('');
                                setIsHelpful(true);
                            }}
                            disabled={isSubmitting}
                        >
                            Back
                        </Button>
                        <Button 
                            variant="classic"
                            onClick={handleSubmit}
                            disabled={isSubmitting || !comment.trim()}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </Button>
                    </Grid>
                </Flex>
            </Card>
            
            {/* Feedback Count Display */}
            {feedbackList.length > 0 && (
                <Box mt="3">
                    <Text size="1" color="gray">
                        {feedbackList.length} feedback{feedbackList.length !== 1 ? 's' : ''} submitted
                    </Text>
                </Box>
            )}
        </Box>
    );
}
