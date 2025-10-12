import React, { useState } from 'react';
import { CheckboxCards, Box, Text } from "@radix-ui/themes";
import { useTheme } from '../../components/settings-provider';

/**
 * SemanticCheckboxCard - Migrated from cshop/MenuHtml/checkbox-card.tsx
 * 
 * Interactive checkbox card component with theme integration.
 * Preserves original functionality while adding state management.
 */
export function SemanticCheckboxCard() {
    const { theme } = useTheme();
    const [selectedValues, setSelectedValues] = useState(["1"]);

    // Map theme to accent colors
    const getAccentColor = (currentTheme: string) => {
        switch (currentTheme) {
            case 'dark':
                return 'crimson';
            case 'theme-a':
                return 'blue';
            case 'theme-b':
                return 'green';
            default:
                return 'crimson';
        }
    };

    const accentColor = getAccentColor(theme);

    return (
        <div className="themer-card">
            <h3 className="themer-heading-responsive font-semibold mb-4">
                Checkbox Cards Demo
            </h3>
            
            <Box p="15px" width={{ sm: '100px', lg: '10vw' }}>
                <CheckboxCards.Root 
                    value={selectedValues}
                    onValueChange={setSelectedValues}
                    color={accentColor}
                >
                    <CheckboxCards.Item value="1">
                        Agree to Terms
                    </CheckboxCards.Item>
                    <CheckboxCards.Item value="2">
                        Subscribe to Newsletter
                    </CheckboxCards.Item>
                    <CheckboxCards.Item value="3">
                        Enable Notifications
                    </CheckboxCards.Item>
                </CheckboxCards.Root>
            </Box>

            {/* Selection Status */}
            <Box mt="3">
                <Text size="2" color="gray">
                    Selected: {selectedValues.length} item{selectedValues.length !== 1 ? 's' : ''}
                </Text>
                {selectedValues.length > 0 && (
                    <div className="mt-2 text-xs text-gray-500">
                        Values: {selectedValues.join(', ')}
                    </div>
                )}
            </Box>
        </div>
    );
}
