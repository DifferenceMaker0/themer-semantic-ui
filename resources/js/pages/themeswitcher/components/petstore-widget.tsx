import React, { useState, useCallback, useEffect } from 'react';
import { Store, Plus, RotateCcw, Eye, X } from 'lucide-react';
import { csrfApiRequest, createCSRFHeaders } from '../utils/csrf-utils';

// Pet interface
interface Pet { 
    id?: number;
    name: string;
    age: number;
    species?: string;  
}

// API utility functions
const API_BASE = '/api/petstore';

const fetchPets = async (): Promise<Pet[]> => {
    const response = await fetch(API_BASE, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'same-origin', // Include session cookies for Sanctum
    });
    if (!response.ok) {
        throw new Error('Failed to fetch pets');
    }
    const data = await response.json();
    return Array.isArray(data) ? data : data.data || [];
};

const createPet = async (petData: { name: string; age: number; species?: string }): Promise<Pet> => {
    const response = await fetch(API_BASE, {
        method: 'POST',
        headers: createCSRFHeaders() as HeadersInit,
        credentials: 'same-origin',
        body: JSON.stringify(petData)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create pet');
    }

    const result = await response.json();
    return result;
};

const fetchPetDetails = async (id: number): Promise<Pet> => {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'same-origin', // Include session cookies for Sanctum
    });
    if (!response.ok) {
        throw new Error('Failed to fetch pet details');
    }
    const result = await response.json();
    return result.data;
};

// Pet Registration Form Component
const PetRegistrationForm: React.FC<{ onPetCreated: (pet: Pet) => void }> = ({ onPetCreated }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        species: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const petData = {
                name: formData.name,
                age: parseInt(formData.age),
                species: formData.species || undefined
            };

            const newPet = await createPet(petData);
            onPetCreated(newPet);
            setFormData({ name: '', age: '', species: '' });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create pet');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="themer-card w-full">
            <div className="flex items-center gap-2 mb-4">
                <Plus className="h-5 w-5" />
                <h3 className="themer-heading-responsive font-semibold">Add New Pet</h3>
            </div>
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-md text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Pet Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="themer-input"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="age" className="block text-sm font-medium mb-1">
                        Age *
                    </label>
                    <input
                        type="number"
                        id="age"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                        className="themer-input"
                        min="0"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="species" className="block text-sm font-medium mb-1">
                        Species
                    </label>
                    <input
                        type="text"
                        id="species"
                        value={formData.species}
                        onChange={(e) => setFormData(prev => ({ ...prev, species: e.target.value }))}
                        className="themer-input"
                        placeholder="e.g., dog, cat, bird"
                        disabled={isSubmitting}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.age}
                    className="themer-button w-full"
                >
                    {isSubmitting ? 'Adding Pet...' : 'Add Pet'}
                </button>
            </form>
        </div>
    );
};

// Pet Detail Dialog Component
const PetDetailDialog: React.FC<{ petId: number | null; onClose: () => void }> = ({ petId, onClose }) => {
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (petId) {
            setLoading(true);
            setError(null);
            fetchPetDetails(petId)
                .then(setPet)
                .catch(err => setError(err instanceof Error ? err.message : 'Failed to load pet details'))
                .finally(() => setLoading(false));
        }
    }, [petId]);

    if (!petId) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="themer-card max-w-md w-full max-h-96 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="themer-heading-responsive font-semibold">Pet Details</h3>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {loading && <p className="text-center py-4">Loading pet details...</p>}
                {error && <p className="text-red-600 text-center py-4">{error}</p>}
                {pet && (
                    <div className="space-y-3">
                        <div>
                            <strong>Name:</strong> {pet.name}
                        </div>
                        <div>
                            <strong>Age:</strong> {pet.age} years old
                        </div>
                        {pet.species && (
                            <div>
                                <strong>Species:</strong> {pet.species}
                            </div>
                        )}
                        {/* {pet.tags && pet.tags.length > 0 && (
                            <div>
                                <strong>Tags:</strong>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {pet.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )} */}
                    </div>
                )}
            </div>
        </div>
    );
};

// Main Petstore Widget Component
export const PetstoreWidget: React.FC = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const loadPets = useCallback(async () => {
        try {
            setError(null);
            const petsData = await fetchPets();
            setPets(petsData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load pets');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadPets();
    }, [loadPets]);

    const handlePetCreated = useCallback((newPet: Pet) => {
        setPets(prevPets => {
            const currentPets = Array.isArray(prevPets) ? prevPets : [];
            return [...currentPets, newPet];
        });
        setSelectedPetId(newPet.id);
    }, []);

    const refreshPets = useCallback(() => {
        setLoading(true);
        loadPets();
    }, [loadPets]);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Store className="h-6 w-6 text-blue-600" />
                    <h2 className="themer-title-responsive font-bold">Pet Store</h2>
                </div>
                <button
                    onClick={refreshPets}
                    disabled={loading}
                    className="themer-button"
                >
                    <RotateCcw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                    {loading ? 'Loading...' : 'Refresh'}
                </button>
            </div>

            {error && (
                <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            {/* Content Grid */}
            <div className="themer-grid-3 gap-6">
                {/* Registration Form */}
                <div>
                    <PetRegistrationForm onPetCreated={handlePetCreated} />
                </div>

                {/* Pet List */}
                <div className="lg:col-span-2">
                    <div className="themer-card">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="themer-heading-responsive font-semibold">
                                Registered Pets ({pets.length})
                            </h3>
                        </div>
                        
                        {pets.length > 0 ? (
                            <div className="space-y-3 max-h-96 overflow-y-auto">
                                {pets.map(pet => (
                                    <div 
                                        key={pet.id} 
                                        className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <div>
                                            <p className="font-semibold">{pet.name}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {pet.age} yrs old
                                                {pet.species && `, ${pet.species}`}
                                                {/* {pet.tags.length > 0 && `, ${pet.tags.length} tags`} */}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedPetId(pet.id)}
                                            className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                                        >
                                            <Eye className="h-3 w-3" />
                                            View
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 text-center py-8">
                                No pets registered yet. Use the form to add one!
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Detail Dialog */}
            <PetDetailDialog 
                petId={selectedPetId} 
                onClose={() => setSelectedPetId(null)} 
            />
        </div>
    );
};
