import React from 'react';
import { Button, Flex, Avatar } from "@radix-ui/themes";
import { useSemanticRecipes } from '../hooks/use-semantic-data';

/**
 * SemanticCardsGrid - Migrated from cshop/MenuHtml/cards-grid.tsx
 * 
 * Displays a grid of documentation cards with links and descriptions.
 * Preserves original styling and layout structure.
 */
export function SemanticCardsGrid() {
    return (
        <div className="rt-Grid rt-r-gtc-1 xs:rt-r-gtc-2 rt-r-gap-4 rt-r-my-6">
            <a href="/themes/docs/overview/styling" className="rt-reset rt-BaseCard shadow-3 rt-Card rt-r-size-2 rt-variant-surface">
                <div className="rt-Text rt-r-size-2 rt-r-weight-bold rt-r-mb-1">Styling</div> 
                <p data-accent-color="gray" className="rt-Text rt-r-size-2">Learn how to approach styling and overrides with Radix Themes.</p>
            </a>
            <a href="/themes/docs/overview/layout" className="rt-reset rt-BaseCard shadow-3 rt-Card rt-r-size-2 rt-variant-surface">
                <div className="rt-Text rt-r-size-2 rt-r-weight-bold rt-r-mb-1">Layout</div>
                <p data-accent-color="gray" className="rt-Text rt-r-size-2">Get to know the layout primitives and their available properties.</p>
            </a>
            <a href="/themes/docs/theme/overview" className="rt-reset rt-BaseCard shadow-3 rt-Card rt-r-size-2 rt-variant-surface">
                <div className="rt-Text rt-r-size-2 rt-r-weight-bold rt-r-mb-1">Theme overview</div>
                <p data-accent-color="gray" className="rt-Text rt-r-size-2">Anatomy of a theme and how to create the perfect style for your app.</p>
            </a>
            <a href="/themes/docs/theme/color" className="rt-reset rt-BaseCard shadow-3 rt-Card rt-r-size-2 rt-variant-surface">
                <div className="rt-Text rt-r-size-2 rt-r-weight-bold rt-r-mb-1">Color</div>
                <p data-accent-color="gray" className="rt-Text rt-r-size-2">Understand the color system and its application in your theme.</p>
            </a>
            <a href="/themes/docs/theme/dark-mode" className="rt-reset rt-BaseCard shadow-3 rt-Card rt-r-size-2 rt-variant-surface">
                <div className="rt-Text rt-r-size-2 rt-r-weight-bold rt-r-mb-1">Dark mode</div>
                <p data-accent-color="gray" className="rt-Text rt-r-size-2">Integrate a great looking dark mode into your app using appearances.</p>
            </a>
            <a href="/themes/docs/theme/typography" className="rt-reset rt-BaseCard shadow-3 rt-Card rt-r-size-2 rt-variant-surface">
                <div className="rt-Text rt-r-size-2 rt-r-weight-bold rt-r-mb-1">Typography</div>
                <p data-accent-color="gray" className="rt-Text rt-r-size-2">Add custom typefaces and fine tune typographic details. </p>
            </a>
        </div> 
    );
}

/**
 * SemanticRecipeCardsGrid - Migrated from cshop/MenuHtml/cards-grid.tsx
 * 
 * Displays a grid of recipe cards with ingredients and actions.
 * Uses semantic data provider for recipe information.
 */
export function SemanticRecipeCardsGrid() {
    const { recipes } = useSemanticRecipes();

    return (
        <div className="rt-Grid rt-r-gtc-1 xs:rt-r-gtc-2 rt-r-gap-4 rt-r-my-6">  
            {recipes.map(recipe => 
                <a href="/themes/docs/overview/styling" className="rt-reset rt-BaseCard shadow-3 rt-Card rt-r-size-2 rt-variant-surface" key={recipe.id}>
                    <Flex gap="2" pb="12px">
                        <Avatar
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                            fallback="A"
                        />
                        <div className="rt-Text rt-r-size-2 rt-r-weight-bold rt-r-mb-1">{recipe.name}</div>
                    </Flex>
                    
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                        )} 
                    </ul>
                    <Button className="rt-Text rt-r-size-2">Get The Recipe</Button> 
                </a>
            )}
        </div> 
    );
}
