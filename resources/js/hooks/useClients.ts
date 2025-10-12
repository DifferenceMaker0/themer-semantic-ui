import { useState, useEffect, useCallback } from 'react';
import { ClientService, handleApiError, ApiError } from '@/services/api';
import type { Client } from '@/types';

interface UseClientsOptions {
    page?: number;
    per_page?: number;
    search?: string;
    relationship_status?: string;
    company_size?: string;
    sort_by?: string;
    sort_order?: 'asc' | 'desc';
    autoFetch?: boolean;
}

interface UseClientsReturn {
    clients: Client[];
    loading: boolean;
    error: string | null;
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    } | null;
    refetch: () => Promise<void>;
    createClient: (data: Partial<Client>) => Promise<Client | null>;
    updateClient: (id: string | number, data: Partial<Client>) => Promise<Client | null>;
    deleteClient: (id: string | number) => Promise<boolean>;
}

export const useClients = (options: UseClientsOptions = {}): UseClientsReturn => {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [meta, setMeta] = useState<UseClientsReturn['meta']>(null);

    const {
        page = 1,
        per_page = 15,
        search,
        relationship_status,
        company_size,
        sort_by = 'company_name',
        sort_order = 'asc',
        autoFetch = true
    } = options;

    const fetchClients = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await ClientService.getAll({
                page,
                per_page,
                search,
                relationship_status,
                company_size,
                sort_by,
                sort_order
            });

            setClients(response.data);
            setMeta(response.meta);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching clients:', apiError);
        } finally {
            setLoading(false);
        }
    }, [page, per_page, search, relationship_status, company_size, sort_by, sort_order]);

    const createClient = useCallback(async (data: Partial<Client>): Promise<Client | null> => {
        setError(null);

        try {
            const newClient = await ClientService.create(data);
            
            // Add to local state
            setClients(prev => [newClient, ...prev]);
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total + 1 } : null);
            }

            return newClient;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error creating client:', apiError);
            return null;
        }
    }, [meta]);

    const updateClient = useCallback(async (id: string | number, data: Partial<Client>): Promise<Client | null> => {
        setError(null);

        try {
            const updatedClient = await ClientService.update(id, data);
            
            // Update local state
            setClients(prev => 
                prev.map(client => 
                    client.id === id ? updatedClient : client
                )
            );

            return updatedClient;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error updating client:', apiError);
            return null;
        }
    }, []);

    const deleteClient = useCallback(async (id: string | number): Promise<boolean> => {
        setError(null);

        try {
            await ClientService.delete(id);
            
            // Remove from local state
            setClients(prev => prev.filter(client => client.id !== id));
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total - 1 } : null);
            }

            return true;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error deleting client:', apiError);
            return false;
        }
    }, [meta]);

    // Auto-fetch on mount and when dependencies change
    useEffect(() => {
        if (autoFetch) {
            fetchClients();
        }
    }, [fetchClients, autoFetch]);

    return {
        clients,
        loading,
        error,
        meta,
        refetch: fetchClients,
        createClient,
        updateClient,
        deleteClient
    };
};

// Hook for single client
interface UseClientOptions {
    id: string | number;
    autoFetch?: boolean;
}

interface UseClientReturn {
    client: Client | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useClient = (options: UseClientOptions): UseClientReturn => {
    const [client, setClient] = useState<Client | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { id, autoFetch = true } = options;

    const fetchClient = useCallback(async () => {
        if (!id) return;

        setLoading(true);
        setError(null);

        try {
            const clientData = await ClientService.getById(id);
            setClient(clientData);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching client:', apiError);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (autoFetch && id) {
            fetchClient();
        }
    }, [fetchClient, autoFetch, id]);

    return {
        client,
        loading,
        error,
        refetch: fetchClient
    };
};

// Hook for client statistics
interface UseClientStatsReturn {
    stats: {
        total_clients: number;
        active_clients: number;
        prospects: number;
        total_revenue: number;
        average_satisfaction: number;
    } | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useClientStats = (): UseClientStatsReturn => {
    const [stats, setStats] = useState<UseClientStatsReturn['stats']>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const statsData = await ClientService.getStats();
            setStats(statsData);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching client stats:', apiError);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    return {
        stats,
        loading,
        error,
        refetch: fetchStats
    };
};
