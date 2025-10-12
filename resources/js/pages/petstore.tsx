import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- Type Definitions (Matching PetResource) ---

type Tag = {
  id: number;
  name: string;
  pivot: {
    pet_id: number;
    tag_id: number;
    kinds: string[];
  };
};

type Pet = {
  id: number;
  name: string;
  age: number;
  species: 'reptile' | 'bird' | 'fish' | 'cat' | 'dog' | null;
  tags: Tag[]; 
};

// --- STATIC DATA DEFINITION ---
// This data is used as the initial state for local CRUD operations.
const STATIC_PET_DATA: Pet[] = [
    {
        id: 101,
        name: 'Apollo',
        age: 3,
        species: 'dog',
        tags: [{
            id: 1, name: 'Friendly',
            pivot: { pet_id: 101, tag_id: 1, kinds: ['loyal', 'playful'] }
        }]
    },
    {
        id: 102,
        name: 'Zelda',
        age: 5,
        species: 'cat',
        tags: [{
            id: 2, name: 'Independent',
            pivot: { pet_id: 102, tag_id: 2, kinds: ['snooty', 'sleepy'] }
        }]
    },
    {
        id: 103,
        name: 'Nemo',
        age: 1,
        species: 'fish',
        tags: []
    }
];
// ------------------------------

const SpeciesOptions = ['dog', 'cat', 'fish', 'bird', 'reptile'];
let nextNewPetId = 500; // Counter for new pets created in this session


// --- Component: Pet Registration Form (Create) ---

interface PetFormProps {
    onPetCreated: (pet: Pet) => void;
}

function PetRegistrationForm({ onPetCreated }: PetFormProps) {
    const [formData, setFormData] = useState({ name: '', age: '', species: 'dog' });
    const [loading, setLoading] = useState(false); // Simulate loading state for user experience

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const petData = {
            name: formData.name,
            age: Number(formData.age),
            species: formData.species as Pet['species'],
        };
        
        // Simulate successful local creation and delay
        // *** NO API CALLS HERE - NO 'response.data.data' ***
        await new Promise(resolve => setTimeout(resolve, 500)); 

        const newPet: Pet = {
            ...petData,
            id: nextNewPetId++, // Assign unique local ID
            tags: []
        };
        
        onPetCreated(newPet);
        
        // Clear form on successful submission
        setFormData({ name: '', age: '', species: 'dog' });
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-2xl space-y-4 w-full max-w-sm">
            <h2 className="text-xl font-bold text-pink-300">Register New Pet (Local Mode)</h2>
            <p className="text-xs text-yellow-500 mb-2">Frontend only. Data is not saved to a server.</p>

            {/* Name Field */}
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

            {/* Age Field */}
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
            
            {/* Species Field */}
            <div>
                <label htmlFor="species" className="block text-sm font-medium text-pink-200">Species</label>
                <select
                    id="species"
                    name="species"
                    value={formData.species}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white p-2 focus:ring-pink-500 focus:border-pink-500"
                >
                    {SpeciesOptions.map(s => (
                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 transition ease-in-out duration-150"
            >
                {loading ? 'Creating Locally...' : 'Register Pet'}
            </button>
        </form>
    );
}

// --- Component: Pet Edit Form (Update) ---

interface EditPetFormProps {
    pet: Pet;
    onPetUpdated: (pet: Pet) => void;
    onCancel: () => void;
}

function EditPetForm({ pet, onPetUpdated, onCancel }: EditPetFormProps) {
    const [formData, setFormData] = useState({ 
        name: pet.name, 
        age: String(pet.age), 
        species: pet.species || 'dog' 
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const petData = {
            name: formData.name,
            age: Number(formData.age),
            species: formData.species as Pet['species'],
        };

        // Simulate successful local update and delay
        await new Promise(resolve => setTimeout(resolve, 500)); 

        const updatedPet: Pet = {
            ...pet, // Keep existing ID and tags
            ...petData
        };
        
        onPetUpdated(updatedPet);
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-2xl space-y-4 w-full max-w-sm border border-yellow-500">
            <h2 className="text-xl font-bold text-yellow-300">Editing Pet: {pet.name}</h2>
            
            {/* Name Field */}
            <div>
                <label htmlFor="edit-name" className="block text-sm font-medium text-yellow-200">Pet's Name</label>
                <input
                    id="edit-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white p-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
            </div>

            {/* Age Field */}
            <div>
                <label htmlFor="edit-age" className="block text-sm font-medium text-yellow-200">Age</label>
                <input
                    id="edit-age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="1"
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white p-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
            </div>
            
            {/* Species Field */}
            <div>
                <label htmlFor="edit-species" className="block text-sm font-medium text-yellow-200">Species</label>
                <select
                    id="edit-species"
                    name="species"
                    value={formData.species}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white p-2 focus:ring-yellow-500 focus:border-yellow-500"
                >
                    {SpeciesOptions.map(s => (
                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                    ))}
                </select>
            </div>
            
            <div className="flex gap-2">
                <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 transition ease-in-out duration-150"
                >
                    {loading ? 'Saving Locally...' : 'Save Changes'}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={loading}
                    className="py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 transition ease-in-out duration-150"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

// --- Component: Delete Confirmation Modal ---

interface DeleteConfirmationModalProps {
    pet: Pet;
    onConfirm: (petId: number) => Promise<void>;
    onCancel: () => void;
}

function DeleteConfirmationModal({ pet, onConfirm, onCancel }: DeleteConfirmationModalProps) {
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        await onConfirm(pet.id);
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-sm w-full border border-red-600">
                <h3 className="text-xl font-bold text-red-400 mb-3">
                    Confirm Deletion
                </h3>
                <p className="text-gray-300 mb-6">
                    Are you sure you want to permanently delete **{pet.name} (ID: {pet.id})**?
                </p>
                
                <div className="flex gap-4 justify-end">
                    <button
                        onClick={onCancel}
                        disabled={loading}
                        className="py-2 px-4 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 transition disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={loading}
                        className="py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition disabled:opacity-50"
                    >
                        {loading ? 'Deleting Locally...' : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    );
}


// --- Component: Pet Detail Dialog (Read) ---

interface DetailDialogProps {
    petId: number | null;
    pets: Pet[]; // Details are looked up from the local array
    onClose: () => void;
}

function PetDetailDialog({ petId, pets, onClose }: DetailDialogProps) {
    // Look up the pet details from the local state array
    const detailedPet = petId !== null ? pets.find(p => p.id === petId) : null;
    
    // Safety check: if no ID is selected or pet isn't found, don't render the modal
    if (petId === null || !detailedPet) return null; 

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-full border border-pink-600">
                <h3 className="text-2xl font-bold text-pink-300 border-b pb-2 mb-4">
                    Pet Details: {detailedPet.name}
                </h3>
                
                <div className="space-y-3 text-gray-200">
                    <p><strong>ID:</strong> {detailedPet.id}</p>
                    <p><strong>Name:</strong> {detailedPet.name}</p>
                    <p><strong>Age:</strong> {detailedPet.age}</p>
                    <p><strong>Species:</strong> {detailedPet.species || 'Not Specified'}</p>

                    <div className="pt-4 border-t border-gray-700 mt-4">
                        <h4 className="text-lg font-semibold text-pink-400 mb-2">Tags</h4>
                        {detailedPet.tags && detailedPet.tags.length > 0 ? (
                            <ul className="list-disc pl-5 space-y-1">
                                {detailedPet.tags.map(tag => (
                                    // Use tag ID as key, assuming they are unique within the static data
                                    <li key={tag.id} className="bg-gray-700 p-2 rounded-lg"> 
                                        <span className="font-medium">{tag.name}</span>
                                        {tag.pivot.kinds && Array.isArray(tag.pivot.kinds) && (
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


// --- Main Application Component (CRUD Logic) ---

export default function PetStoreDemo() {
    // Initialize state directly with static data
    const [pets, setPets] = useState<Pet[]>(STATIC_PET_DATA);
    const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
    const [editingPet, setEditingPet] = useState<Pet | null>(null); 
    const [petToDelete, setPetToDelete] = useState<Pet | null>(null); 
    
    // Handler for successful form submission (Create)
    const handlePetCreated = useCallback((newPet: Pet) => {
        setPets(prevPets => [...prevPets, newPet]);
        setSelectedPetId(newPet.id);
    }, []);
    
    // Handler for successful pet update (Update)
    const handlePetUpdated = useCallback((updatedPet: Pet) => {
        setPets(prevPets => 
            prevPets.map(p => p.id === updatedPet.id ? updatedPet : p)
        );
        setEditingPet(null); // Close the edit form
        setSelectedPetId(updatedPet.id); // Show details after update
    }, []);
    
    // Handler for actual pet deletion (Delete)
    const confirmDelete = useCallback(async (petId: number) => {
        // Simulate delay for user experience
        await new Promise(resolve => setTimeout(resolve, 500)); 

        // Perform local deletion
        setPets(prevPets => prevPets.filter(p => p.id !== petId));
        
        // Close the confirmation modal and detail view
        setPetToDelete(null); 
        if (selectedPetId === petId) {
            setSelectedPetId(null);
        }
    }, [selectedPetId]);

    // Determine which form/component to show in the left column
    const FormComponent = useMemo(() => {
        if (editingPet) {
            return <EditPetForm pet={editingPet} onPetUpdated={handlePetUpdated} onCancel={() => setEditingPet(null)} />;
        }
        return <PetRegistrationForm onPetCreated={handlePetCreated} />;
    }, [editingPet, handlePetUpdated, handlePetCreated]);

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-pink-500 shadow-md">Pet Store Registry (Local CRUD Test)</h1>
                <p className="text-gray-400 mt-2">Static Data / Frontend Only Mode</p>
            </header>
            
            <main className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                {/* Registration/Edit Form Column */}
                <div className="lg:w-1/3 flex justify-center">
                    {FormComponent}
                </div>

                {/* Pet List Column */}
                <div className="lg:w-2/3 bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
                    <h2 className="text-2xl font-bold text-pink-300 mb-4 border-b border-gray-700 pb-2">
                        Registered Pets ({pets.length})
                    </h2>
                    
                    {pets.length > 0 ? (
                        <ul className="space-y-3">
                            {pets.map(pet => (
                                <li 
                                    // Removed complex conditional rendering to simplify the list item structure
                                    key={pet.id} 
                                    className="flex flex-wrap gap-2 justify-between items-center bg-gray-700 p-3 rounded-lg shadow-inner hover:bg-gray-600 transition duration-150"
                                >
                                    <div>
                                        <p className="text-lg font-semibold text-white">{pet.name}</p>
                                        <p className="text-sm text-gray-400">{pet.age} yrs old, Species: {pet.species || 'N/A'}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setPetToDelete(pet)}
                                            className="py-1 px-3 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition duration-150 shadow-md"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => setEditingPet(pet)}
                                            className="py-1 px-3 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700 transition duration-150 shadow-md"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => setSelectedPetId(pet.id)}
                                            className="py-1 px-3 bg-pink-600 text-white text-sm rounded-md hover:bg-pink-700 transition duration-150 shadow-md"
                                        >
                                            View
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

            {/* Detail Dialog (Read) */}
            <PetDetailDialog 
                petId={selectedPetId} 
                pets={pets} 
                onClose={() => setSelectedPetId(null)} 
            />
            
            {/* Delete Confirmation Modal */}
            {petToDelete && (
                <DeleteConfirmationModal
                    pet={petToDelete}
                    onConfirm={confirmDelete}
                    onCancel={() => setPetToDelete(null)}
                />
            )}
        </div>
    );
}

// Ensure the application runs if loaded directly
if (typeof document !== 'undefined') {
    const container = document.getElementById('root');
    if (container && !container.hasChildNodes()) {
        const root = createRoot(container);
        root.render(<PetStoreDemo />);
    }
}
