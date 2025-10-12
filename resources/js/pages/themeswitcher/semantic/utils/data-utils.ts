/**
 * Data utilities for Semantic Widget components
 * Provides helper functions for data manipulation and formatting
 */

import { Person, Recipe } from '../providers/semantic-data-provider';

/**
 * Generate image URL for a person
 */
export function getImageUrl(person: Person): string {
    return `https://i.imgur.com/${person.imageId}s.jpg`;
}

/**
 * Filter people by profession
 */
export function filterPeopleByProfession(people: Person[], profession: string): Person[] {
    return people.filter(person => person.profession === profession);
}

/**
 * Get unique professions from people array
 */
export function getUniqueProfessions(people: Person[]): string[] {
    const professions = people.map(person => person.profession);
    return [...new Set(professions)];
}

/**
 * Format person display name
 */
export function formatPersonName(person: Person): string {
    return `${person.name} (${person.profession})`;
}

/**
 * Get recipe by ID
 */
export function getRecipeById(recipes: Recipe[], id: string): Recipe | undefined {
    return recipes.find(recipe => recipe.id === id);
}

/**
 * Format ingredients list
 */
export function formatIngredients(ingredients: string[]): string {
    if (ingredients.length === 0) return 'No ingredients';
    if (ingredients.length === 1) return ingredients[0];
    if (ingredients.length === 2) return ingredients.join(' and ');
    
    const lastIngredient = ingredients[ingredients.length - 1];
    const otherIngredients = ingredients.slice(0, -1);
    return `${otherIngredients.join(', ')}, and ${lastIngredient}`;
}

/**
 * Search people by name or profession
 */
export function searchPeople(people: Person[], query: string): Person[] {
    const lowercaseQuery = query.toLowerCase();
    return people.filter(person => 
        person.name.toLowerCase().includes(lowercaseQuery) ||
        person.profession.toLowerCase().includes(lowercaseQuery) ||
        person.accomplishment.toLowerCase().includes(lowercaseQuery)
    );
}

/**
 * Search recipes by name or ingredients
 */
export function searchRecipes(recipes: Recipe[], query: string): Recipe[] {
    const lowercaseQuery = query.toLowerCase();
    return recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(lowercaseQuery) ||
        recipe.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(lowercaseQuery)
        )
    );
}

/**
 * Generate random ID
 */
export function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength - 3) + '...';
}

/**
 * Capitalize first letter of each word
 */
export function capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
    return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .substr(0, 2);
}
