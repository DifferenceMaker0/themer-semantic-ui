import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// Data types for semantic components
export interface Person {
    id: number;
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
}

export interface Recipe {
    id: string;
    name: string;
    ingredients: string[];
}

export interface FeedbackData {
    rating: number;
    comment: string;
    email?: string;
}

export interface SemanticDataContextType {
    // People data
    people: Person[];
    chemists: Person[];
    everyoneElse: Person[];
    
    // Recipe data
    recipes: Recipe[];
    
    // Feedback data
    feedbackList: FeedbackData[];
    addFeedback: (feedback: FeedbackData) => void;
    
    // UI state
    selectedPerson: Person | null;
    setSelectedPerson: (person: Person | null) => void;
    
    // Utility functions
    getImageUrl: (person: Person) => string;
    filterPeopleByProfession: (profession: string) => Person[];
}

const SemanticDataContext = createContext<SemanticDataContextType | undefined>(undefined);

// Sample data (migrated from original cshop data)
const samplePeople: Person[] = [
    {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3exx3HmI'
    },
    {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa3GAM'
    },
    {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7bjCSAMN'
    },
    {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71Tg'
    },
    {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQOB7MWm'
    }
];

const sampleRecipes: Recipe[] = [
    {
        id: 'greek-salad',
        name: 'Greek Salad',
        ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
    },
    {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
    },
    {
        id: 'hummus',
        name: 'Hummus',
        ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
    }
];

interface SemanticDataProviderProps {
    children: ReactNode;
}

export function SemanticDataProvider({ children }: SemanticDataProviderProps) {
    const [people] = useState<Person[]>(samplePeople);
    const [recipes] = useState<Recipe[]>(sampleRecipes);
    const [feedbackList, setFeedbackList] = useState<FeedbackData[]>([]);
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    // Derived data
    const chemists = people.filter(person => person.profession === 'chemist');
    const everyoneElse = people.filter(person => person.profession !== 'chemist');

    const addFeedback = useCallback((feedback: FeedbackData) => {
        setFeedbackList(prev => [...prev, { ...feedback, id: Date.now() }]);
    }, []);

    const getImageUrl = useCallback((person: Person) => {
        return `https://i.imgur.com/${person.imageId}s.jpg`;
    }, []);

    const filterPeopleByProfession = useCallback((profession: string) => {
        return people.filter(person => person.profession === profession);
    }, [people]);

    const contextValue: SemanticDataContextType = {
        // People data
        people,
        chemists,
        everyoneElse,
        
        // Recipe data
        recipes,
        
        // Feedback data
        feedbackList,
        addFeedback,
        
        // UI state
        selectedPerson,
        setSelectedPerson,
        
        // Utility functions
        getImageUrl,
        filterPeopleByProfession
    };

    return (
        <SemanticDataContext.Provider value={contextValue}>
            {children}
        </SemanticDataContext.Provider>
    );
}

export function useSemanticData(): SemanticDataContextType {
    const context = useContext(SemanticDataContext);
    if (context === undefined) {
        throw new Error('useSemanticData must be used within a SemanticDataProvider');
    }
    return context;
}
