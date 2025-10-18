import { useState, useEffect, useCallback } from 'react';
import { TimeEntryService, handleApiError } from '@/services/api';
import type { TimeEntry } from '@/types';

interface UseTimeEntriesOptions {
    page?: number;
    per_page?: number;
    search?: string;
    project_id?: string;
    task_id?: string;
    is_billable?: boolean;
    date_from?: string;
    date_to?: string;
    today?: boolean;
    this_week?: boolean;
    this_month?: boolean;
    running?: boolean;
    sort_by?: string;
    sort_order?: 'asc' | 'desc';
    autoFetch?: boolean;
}

interface UseTimeEntriesReturn {
    timeEntries: TimeEntry[];
    loading: boolean;
    error: string | null;
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    } | null;
    refetch: () => Promise<void>;
    createTimeEntry: (data: Partial<TimeEntry>) => Promise<TimeEntry | null>;
    updateTimeEntry: (id: string | number, data: Partial<TimeEntry>) => Promise<TimeEntry | null>;
    deleteTimeEntry: (id: string | number) => Promise<boolean>;
    startTimer: (data: { project_id: string | number; task_id?: string | number; description: string; is_billable?: boolean; hourly_rate?: number }) => Promise<TimeEntry | null>;
    stopTimer: (id: string | number) => Promise<TimeEntry | null>;
}

export const useTimeEntries = (options: UseTimeEntriesOptions = {}): UseTimeEntriesReturn => {
    const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [meta, setMeta] = useState<UseTimeEntriesReturn['meta']>(null);

    const {
        page = 1,
        per_page = 15,
        search,
        project_id,
        task_id,
        is_billable,
        date_from,
        date_to,
        today,
        this_week,
        this_month,
        running,
        sort_by = 'start_time',
        sort_order = 'desc',
        autoFetch = true
    } = options;

    const fetchTimeEntries = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await TimeEntryService.getAll({
                page,
                per_page,
                search,
                project_id,
                task_id,
                is_billable,
                date_from,
                date_to,
                today,
                this_week,
                this_month,
                running,
                sort_by,
                sort_order
            });

            setTimeEntries(response.data);
            setMeta(response.meta);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching time entries:', apiError);
        } finally {
            setLoading(false);
        }
    }, [page, per_page, search, project_id, task_id, is_billable, date_from, date_to, today, this_week, this_month, running, sort_by, sort_order]);

    const createTimeEntry = useCallback(async (data: Partial<TimeEntry>): Promise<TimeEntry | null> => {
        setError(null);

        try {
            const newTimeEntry = await TimeEntryService.create(data);
            
            // Add to local state
            setTimeEntries(prev => [newTimeEntry, ...prev]);
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total + 1 } : null);
            }

            return newTimeEntry;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error creating time entry:', apiError);
            return null;
        }
    }, [meta]);

    const updateTimeEntry = useCallback(async (id: string | number, data: Partial<TimeEntry>): Promise<TimeEntry | null> => {
        setError(null);

        try {
            const updatedTimeEntry = await TimeEntryService.update(id, data);
            
            // Update local state
            setTimeEntries(prev => 
                prev.map(entry => 
                    entry.id === id ? updatedTimeEntry : entry
                )
            );

            return updatedTimeEntry;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error updating time entry:', apiError);
            return null;
        }
    }, []);

    const deleteTimeEntry = useCallback(async (id: string | number): Promise<boolean> => {
        setError(null);

        try {
            await TimeEntryService.delete(id);
            
            // Remove from local state
            setTimeEntries(prev => prev.filter(entry => entry.id !== id));
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total - 1 } : null);
            }

            return true;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error deleting time entry:', apiError);
            return false;
        }
    }, [meta]);

    const startTimer = useCallback(async (data: { 
        project_id: string | number; 
        task_id?: string | number; 
        description: string; 
        is_billable?: boolean; 
        hourly_rate?: number 
    }): Promise<TimeEntry | null> => {
        setError(null);

        try {
            const timerEntry = await TimeEntryService.startTimer(data);
            
            // Add to local state
            setTimeEntries(prev => [timerEntry, ...prev]);
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total + 1 } : null);
            }

            return timerEntry;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error starting timer:', apiError);
            return null;
        }
    }, [meta]);

    const stopTimer = useCallback(async (id: string | number): Promise<TimeEntry | null> => {
        setError(null);

        try {
            const stoppedEntry = await TimeEntryService.stopTimer(id);
            
            // Update local state
            setTimeEntries(prev => 
                prev.map(entry => 
                    entry.id === id ? stoppedEntry : entry
                )
            );

            return stoppedEntry;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error stopping timer:', apiError);
            return null;
        }
    }, []);

    // Auto-fetch on mount and when dependencies change
    useEffect(() => {
        if (autoFetch) {
            fetchTimeEntries();
        }
    }, [fetchTimeEntries, autoFetch]);

    return {
        timeEntries,
        loading,
        error,
        meta,
        refetch: fetchTimeEntries,
        createTimeEntry,
        updateTimeEntry,
        deleteTimeEntry,
        startTimer,
        stopTimer
    };
};

// Hook for single time entry
interface UseTimeEntryOptions {
    id: string | number;
    autoFetch?: boolean;
}

interface UseTimeEntryReturn {
    timeEntry: TimeEntry | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useTimeEntry = (options: UseTimeEntryOptions): UseTimeEntryReturn => {
    const [timeEntry, setTimeEntry] = useState<TimeEntry | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { id, autoFetch = true } = options;

    const fetchTimeEntry = useCallback(async () => {
        if (!id) return;

        setLoading(true);
        setError(null);

        try {
            const entryData = await TimeEntryService.getById(id);
            setTimeEntry(entryData);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching time entry:', apiError);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (autoFetch && id) {
            fetchTimeEntry();
        }
    }, [fetchTimeEntry, autoFetch, id]);

    return {
        timeEntry,
        loading,
        error,
        refetch: fetchTimeEntry
    };
};

// Hook for time entry statistics
interface UseTimeEntryStatsReturn {
    stats: {
        total_entries: number;
        total_hours: number;
        billable_hours: number;
        non_billable_hours: number;
        total_revenue: number;
        today_hours: number;
        this_week_hours: number;
        this_month_hours: number;
        running_entries: number;
        hours_by_project: Record<string, number>;
        revenue_by_project: Array<{ project: string; revenue: number }>;
    } | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useTimeEntryStats = (): UseTimeEntryStatsReturn => {
    const [stats, setStats] = useState<UseTimeEntryStatsReturn['stats']>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const statsData = await TimeEntryService.getStats();
            setStats(statsData);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching time entry stats:', apiError);
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
