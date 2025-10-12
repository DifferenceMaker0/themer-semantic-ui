import React from 'react';
import {
    gray,
    blue,
    red,
    green,
    grayDark,
    blueDark,
    redDark,
    greenDark,
} from "@radix-ui/colors";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from '../../components/settings-provider';

// Sample poem data (migrated from original)
const poem = {
    lines: [
        'Twas brillig, and the slithy toves',
        'Did gyre and gimble in the wabe:',
        'All mimsy were the borogoves,',
        'And the mome raths outgrabe.'
    ]
};

// Create light theme
const lightTheme = {
    colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,
    },
};

// Create dark theme
const darkTheme = {
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
    },
};

// Styled button component using theme colors
const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.blue4};
    color: ${(props) => props.theme.colors.blue11};
    border: 1px solid ${(props) => props.theme.colors.blue7};
    border-radius: 6px;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: ${(props) => props.theme.colors.blue5};
        border-color: ${(props) => props.theme.colors.blue8};
    }
    
    &:active {
        background-color: ${(props) => props.theme.colors.blue6};
    }
`;

/**
 * Poem Component - Displays a poem with styled separators
 */
function Poem() {
    let output = [];
    
    // Fill the output array
    poem.lines.forEach((line, i) => {
        output.push(
            <hr key={i + '-separator'} style={{ 
                border: 'none', 
                borderTop: '1px solid #ccc', 
                margin: '8px 0' 
            }} />
        );
        output.push(
            <p key={i + '-text'} style={{ margin: '4px 0' }}>
                {line}
            </p>
        );
    });
    
    // Remove the first <hr />
    output.shift();
    
    return (
        <article>
            {output}
            <hr style={{ 
                border: 'none', 
                borderTop: '1px solid #ccc', 
                margin: '8px 0' 
            }} />
        </article>
    );
}

/**
 * SemanticStyledComponents - Migrated from cshop/MenuHtml/theme-provider.tsx
 * 
 * Demonstrates styled-components integration with Radix UI colors.
 * Adapts theme based on current Themer dashboard theme.
 */
export function SemanticStyledComponents() {
    const { theme: currentTheme } = useTheme();
    
    // Select theme based on current Themer theme
    const selectedTheme = currentTheme === 'dark' || currentTheme === 'theme-b' 
        ? darkTheme 
        : lightTheme;

    return (
        <ThemeProvider theme={selectedTheme}>
            <div className="space-y-4">
                <div className="themer-card">
                    <h3 className="themer-heading-responsive font-semibold mb-4">
                        Styled Components Demo
                    </h3>
                    <div className="space-y-4">
                        <Poem />
                        <div className="flex gap-2">
                            <StyledButton>Radix Colors</StyledButton>
                            <StyledButton>Themed Button</StyledButton>
                        </div>
                    </div>
                </div>
                
                <div className="themer-card">
                    <h4 className="font-medium mb-2">Theme Information</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p>Current Theme: <strong>{currentTheme}</strong></p>
                        <p>Styled Components Theme: <strong>{selectedTheme === darkTheme ? 'Dark' : 'Light'}</strong></p>
                        <p>Color Palette: Radix UI Colors</p>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
