import React from 'react';
import { Flex, Text, Button, Box, Container } from "@radix-ui/themes";

// Sample Radix UI data (migrated from original)
const radixui = [
    {
        id: 1,
        name: "Components",
        items: [
            { id: 1, name: "Avatar", href: "#avatar" },
            { id: 2, name: "Button", href: "#button" },
            { id: 3, name: "Card", href: "#card" },
            { id: 4, name: "Dialog", href: "#dialog" },
            { id: 5, name: "Flex", href: "#flex" }
        ]
    },
    {
        id: 2,
        name: "Primitives",
        items: [
            { id: 6, name: "Accordion", href: "#accordion" },
            { id: 7, name: "Checkbox", href: "#checkbox" },
            { id: 8, name: "Dropdown", href: "#dropdown" },
            { id: 9, name: "Popover", href: "#popover" }
        ]
    },
    {
        id: 3,
        name: "Utilities",
        items: [
            { id: 10, name: "Colors", href: "#colors" },
            { id: 11, name: "Icons", href: "#icons" },
            { id: 12, name: "Themes", href: "#themes" }
        ]
    }
];

/**
 * ItemComponent - Individual navigation item
 */
export const SemanticItemComponent = ({ item }) => (
    <li>
        <a className="DocsNav_DocsNavItem__VrHf6" href={item.href}>
            <div className="rt-Flex rt-r-ai-center rt-r-gap-2">
                <span className="rt-Text rt-r-size-3 md:rt-r-size-4">{item.name}</span>
            </div> 
        </a>  
    </li>
);

/**
 * CategoryComponent - Navigation category with items
 */
export const SemanticCategoryComponent = ({ category }) => (
    <div>
        <div className="rt-Box rt-r-px-3 rt-r-py-2">
            <h4 className="rt-Heading rt-r-size-4 md:rt-r-size-5">{category.name}</h4> 
        </div>
        <ul>
            {category.items.map((item) => (
                <SemanticItemComponent key={item.id} item={item} />
            ))}
        </ul>
    </div>
);

/**
 * Simple Toggle Group Demo (placeholder for original ToggleGroupDemo)
 */
function SimpleToggleDemo() {
    return (
        <div className="mb-4">
            <div className="flex gap-2">
                <Button size="1" variant="soft">View</Button>
                <Button size="1" variant="soft">Edit</Button>
                <Button size="1" variant="soft">Share</Button>
            </div>
        </div>
    );
}

/**
 * SemanticSideMenuThemeTree - Migrated from cshop/radix-list.tsx
 * 
 * Navigation tree component showing Radix UI features and components.
 * Preserves original styling and structure.
 */
export function SemanticSideMenuThemeTree() {
    return (
        <Box 
            height="100%" 
            className="md:width-350px" 
            width="200px" 
            py="20px" 
            px="30px" 
            style={{ 
                background: "var(--gray-a2)", 
                borderRadius: "var(--radius-3)" 
            }}
        > 
            <SimpleToggleDemo />
            <Flex direction="column">
                <Flex direction="row">
                    <Box py="10px">
                        <h1 className="rt-Heading rt-r-size-6">Radix-UI Features</h1>
                    </Box>
                </Flex>  
                {radixui.map((category) => (
                    <SemanticCategoryComponent key={category.id} category={category} />
                ))}
            </Flex> 
        </Box>
    );
}
