import { useContext } from 'react';
import { SemanticDataContextType } from '../providers/semantic-data-provider';

// Re-export the hook from the provider for convenience
export { useSemanticData } from '../providers/semantic-data-provider';

// Additional semantic-specific hooks can be added here
export function useSemanticPeople() {
    const { people, chemists, everyoneElse, selectedPerson, setSelectedPerson, getImageUrl, filterPeopleByProfession } = useSemanticData();
    
    return {
        people,
        chemists,
        everyoneElse,
        selectedPerson,
        setSelectedPerson,
        getImageUrl,
        filterPeopleByProfession
    };
}

export function useSemanticRecipes() {
    const { recipes } = useSemanticData();
    
    return {
        recipes
    };
}

export function useSemanticFeedback() {
    const { feedbackList, addFeedback } = useSemanticData();
    
    return {
        feedbackList,
        addFeedback
    };
}

// Import the context type for external use
import { useSemanticData } from '../providers/semantic-data-provider';
export type { SemanticDataContextType } from '../providers/semantic-data-provider';
