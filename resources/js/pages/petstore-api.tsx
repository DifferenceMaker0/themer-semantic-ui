import React, { useState, useCallback, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import { Pet, PetStorePageProps } from '@/types';

// API utility functions
const API_BASE = '/api/petstore';

const fetchPets = async (): Promise<Pet[]> => {
    const response = await fetch(API_BASE);
    if (!response.ok) {
        throw new Error('Failed to fetch pets');
    }
    const data = await response.json();
    return Array.isArray(data) ? data : data.data || [];
};

const createPet = async (petData: { name: string; age: number; species?: string }): Promise<Pet> => {
    const queryParams = new URLSearchParams({
        name: petData.name,
        age: petData.age.toString(),
        ...(petData.species && { species: petData.species })
    });
    
    const response = await fetch(`${API_BASE}?${queryParams}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create pet');
    }
    
    const result = await response.json();
    return result.data;
};

const fetchPetDetails = async (id: number): Promise<Pet> => {
    const response = await fetch(`${API_BASE}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch pet details');
    }
    const result = await response.json();
    return result.data;
};

// Pet Registration Form Component
interface PetFormProps {
    onPetCreated: (pet: Pet) => void;
}

function PetRegistrationForm({ onPetCreated }: PetFormProps) {
    const [formData, setFormData] = useState({ name: '', age: '', species: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const petData = {
                name: formData.name,
                age: Number(formData.age),
                species: formData.species || undefined,
            };
            
            const newPet = await createPet(petData);
            onPetCreated(newPet);
            
            // Clear form on successful submission
            setFormData({ name: '', age: '', species: '' });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create pet');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-2xl space-y-4 w-full max-w-sm">
            <h2 className="text-xl font-bold text-pink-300">Register New Pet</h2>
            
            {error && (
                <div className="bg-red-600 text-white p-3 rounded-md text-sm">
                    {error}
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-pink-200">Pet's Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white p-2 focus:ring-pink-500 focus:border-pink-500"
                />
            </div>

            <div>
                <label htmlFor="age" className="block text-sm font-medium text-pink-200">Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="1"
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white p-2 focus:ring-pink-500 focus:border-pink-500"
                />
            </div>
            
            <div>
                <label htmlFor="species" className="block text-sm font-medium text-pink-200">Species (Optional)</label>
                <input
                    id="species"
                    name="species"
                    type="text"
                    value={formData.species}
                    onChange={handleChange}
                    placeholder="e.g., dog, cat, bird"
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white p-2 focus:ring-pink-500 focus:border-pink-500"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 transition ease-in-out duration-150"
            >
                {loading ? 'Creating...' : 'Register Pet'}
            </button>
        </form>
    );
}

// Pet Detail Dialog Component
interface DetailDialogProps {
    petId: number | null;
    onClose: () => void;
}

function PetDetailDialog({ petId, onClose }: DetailDialogProps) {
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (petId !== null) {
            setLoading(true);
            setError(null);
            
            fetchPetDetails(petId)
                .then(setPet)
                .catch(err => setError(err instanceof Error ? err.message : 'Failed to load pet details'))
                .finally(() => setLoading(false));
        }
    }, [petId]);

    if (petId === null) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-full border border-pink-600">
                <h3 className="text-2xl font-bold text-pink-300 border-b pb-2 mb-4">
                    Pet Details
                </h3>
                
                {loading && (
                    <div className="text-center py-4">
                        <div className="text-gray-400">Loading pet details...</div>
                    </div>
                )}
                
                {error && (
                    <div className="bg-red-600 text-white p-3 rounded-md text-sm mb-4">
                        {error}
                    </div>
                )}
                
                {pet && (
                    <div className="space-y-3 text-gray-200">
                        <p><strong>ID:</strong> {pet.id}</p>
                        <p><strong>Name:</strong> {pet.name}</p>
                        <p><strong>Age:</strong> {pet.age}</p>
                        <p><strong>Species:</strong> {pet.species || 'Not specified'}</p>

                        <div className="pt-4 border-t border-gray-700 mt-4">
                            <h4 className="text-lg font-semibold text-pink-400 mb-2">Tags</h4>
                            {pet.tags && pet.tags.length > 0 ? (
                                <ul className="list-disc pl-5 space-y-1">
                                    {pet.tags.map(tag => (
                                        <li key={tag.id} className="bg-gray-700 p-2 rounded-lg">
                                            <span className="font-medium">{tag.name}</span>
                                            {tag.description && (
                                                <span className="ml-2 text-sm text-gray-400">
                                                    - {tag.description}
                                                </span>
                                            )}
                                            {tag.pivot?.kinds && Array.isArray(tag.pivot.kinds) && (
                                                <span className="ml-2 text-sm text-gray-400">
                                                    (Kinds: {tag.pivot.kinds.join(', ')})
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400">No tags found for this pet.</p>
                            )}
                        </div>
                    </div>
                )}
                
                <button
                    onClick={onClose}
                    className="mt-6 w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

// Main PetStore Component
export default function PetStoreAPI() {
    const { pets: initialPets } = usePage<PetStorePageProps>().props;
    const [pets, setPets] = useState<Pet[]>(() => {
        // Ensure we always have an array, even if initialPets is undefined or not an array
        if (Array.isArray(initialPets)) {
            return initialPets;
        }
        return [];
    });
    const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Refresh pets list from API
    const refreshPets = useCallback(async () => {
        setLoading(true);
        setError(null);
        
        try {
            const updatedPets = await fetchPets();
            setPets(updatedPets);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load pets');
        } finally {
            setLoading(false);
        }
    }, []);

    // Handler for successful pet creation
    const handlePetCreated = useCallback((newPet: Pet) => {
        setPets(prevPets => {
            // Ensure prevPets is always an array
            const currentPets = Array.isArray(prevPets) ? prevPets : [];
            return [...currentPets, newPet];
        });
        setSelectedPetId(newPet.id);
    }, []);

    return (
        <>
            <Head title="Pet Store API" />
            
            <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-pink-500 shadow-md">Pet Store API</h1>
                    <p className="text-gray-400 mt-2">Connected to Laravel Backend</p>
                </header>
                
                {error && (
                    <div className="max-w-7xl mx-auto mb-4">
                        <div className="bg-red-600 text-white p-4 rounded-md">
                            {error}
                            <button 
                                onClick={refreshPets}
                                className="ml-4 underline hover:no-underline"
                            >
                                Retry
                            </button>
                        </div>
                    </div>
                )}
                
                <main className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                    {/* Registration Form Column */}
                    <div className="lg:w-1/3 flex justify-center">
                        <PetRegistrationForm onPetCreated={handlePetCreated} />
                    </div>

                    {/* Pet List Column */}
                    <div className="lg:w-2/3 bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-pink-300 border-b border-gray-700 pb-2">
                                Registered Pets ({pets.length})
                            </h2>
                            <button
                                onClick={refreshPets}
                                disabled={loading}
                                className="py-2 px-4 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition duration-150 disabled:opacity-50"
                            >
                                {loading ? 'Refreshing...' : 'Refresh'}
                            </button>
                        </div>
                        
                        {pets.length > 0 ? (
                            <ul className="space-y-3">
                                {pets.map(pet => (
                                    <li 
                                        key={pet.id} 
                                        className="flex flex-wrap gap-2 justify-between items-center bg-gray-700 p-3 rounded-lg shadow-inner hover:bg-gray-600 transition duration-150"
                                    >
                                        <div>
                                            <p className="text-lg font-semibold text-white">{pet.name}</p>
                                            <p className="text-sm text-gray-400">
                                                {pet.age} yrs old
                                                {pet.species && `, Species: ${pet.species}`}
                                                {pet.tags.length > 0 && `, Tags: ${pet.tags.length}`}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setSelectedPetId(pet.id)}
                                                className="py-1 px-3 bg-pink-600 text-white text-sm rounded-md hover:bg-pink-700 transition duration-150 shadow-md"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-400">No pets registered yet. Use the form to add one!</p>
                        )}
                    </div>
                </main>

                {/* Detail Dialog */}
                <PetDetailDialog 
                    petId={selectedPetId} 
                    onClose={() => setSelectedPetId(null)} 
                />
            </div>
        </>
    );
}
