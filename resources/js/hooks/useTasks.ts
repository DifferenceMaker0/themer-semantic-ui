import { useState, useEffect, useCallback } from 'react';
import { TaskService, handleApiError } from '@/services/api';
import type { Task } from '@/types';

interface UseTasksOptions {
    page?: number;
    per_page?: number;
    search?: string;
    status?: string;
    priority?: string;
    project_id?: string;
    assignee?: string;
    overdue?: boolean;
    root_tasks_only?: boolean;
    critical_path?: boolean;
    sort_by?: string;
    sort_order?: 'asc' | 'desc';
    autoFetch?: boolean;
}

interface UseTasksReturn {
    tasks: Task[];
    loading: boolean;
    error: string | null;
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    } | null;
    refetch: () => Promise<void>;
    createTask: (data: Partial<Task>) => Promise<Task | null>;
    updateTask: (id: string | number, data: Partial<Task>) => Promise<Task | null>;
    deleteTask: (id: string | number) => Promise<boolean>;
    updateTaskOrder: (tasks: Array<{ id: string | number; order_index: number; status?: string }>) => Promise<boolean>;
}

export const useTasks = (options: UseTasksOptions = {}): UseTasksReturn => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [meta, setMeta] = useState<UseTasksReturn['meta']>(null);

    const {
        page = 1,
        per_page = 15,
        search,
        status,
        priority,
        project_id,
        assignee,
        overdue,
        root_tasks_only,
        critical_path,
        sort_by = 'created_at',
        sort_order = 'desc',
        autoFetch = true
    } = options;

    const fetchTasks = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await TaskService.getAll({
                page,
                per_page,
                search,
                status,
                priority,
                project_id,
                assignee,
                overdue,
                root_tasks_only,
                critical_path,
                sort_by,
                sort_order
            });

            setTasks(response.data);
            setMeta(response.meta);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching tasks:', apiError);
        } finally {
            setLoading(false);
        }
    }, [page, per_page, search, status, priority, project_id, assignee, overdue, root_tasks_only, critical_path, sort_by, sort_order]);

    const createTask = useCallback(async (data: Partial<Task>): Promise<Task | null> => {
        setError(null);

        try {
            const newTask = await TaskService.create(data);
            
            // Add to local state
            setTasks(prev => [newTask, ...prev]);
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total + 1 } : null);
            }

            return newTask;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error creating task:', apiError);
            return null;
        }
    }, [meta]);

    const updateTask = useCallback(async (id: string | number, data: Partial<Task>): Promise<Task | null> => {
        setError(null);

        try {
            const updatedTask = await TaskService.update(id, data);
            
            // Update local state
            setTasks(prev => 
                prev.map(task => 
                    task.id === id ? updatedTask : task
                )
            );

            return updatedTask;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error updating task:', apiError);
            return null;
        }
    }, []);

    const deleteTask = useCallback(async (id: string | number): Promise<boolean> => {
        setError(null);

        try {
            await TaskService.delete(id);
            
            // Remove from local state
            setTasks(prev => prev.filter(task => task.id !== id));
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total - 1 } : null);
            }

            return true;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error deleting task:', apiError);
            return false;
        }
    }, [meta]);

    const updateTaskOrder = useCallback(async (taskUpdates: Array<{ id: string | number; order_index: number; status?: string }>): Promise<boolean> => {
        setError(null);

        try {
            await TaskService.updateOrder(taskUpdates);
            
            // Update local state
            setTasks(prev => {
                const updated = [...prev];
                taskUpdates.forEach(update => {
                    const index = updated.findIndex(task => task.id === update.id);
                    if (index !== -1) {
                        updated[index] = {
                            ...updated[index],
                            order_index: update.order_index,
                            ...(update.status && { status: update.status })
                        };
                    }
                });
                return updated.sort((a, b) => a.order_index - b.order_index);
            });

            return true;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error updating task order:', apiError);
            return false;
        }
    }, []);

    // Auto-fetch on mount and when dependencies change
    useEffect(() => {
        if (autoFetch) {
            fetchTasks();
        }
    }, [fetchTasks, autoFetch]);

    return {
        tasks,
        loading,
        error,
        meta,
        refetch: fetchTasks,
        createTask,
        updateTask,
        deleteTask,
        updateTaskOrder
    };
};

// Hook for single task
interface UseTaskOptions {
    id: string | number;
    autoFetch?: boolean;
}

interface UseTaskReturn {
    task: Task | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useTask = (options: UseTaskOptions): UseTaskReturn => {
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { id, autoFetch = true } = options;

    const fetchTask = useCallback(async () => {
        if (!id) return;

        setLoading(true);
        setError(null);

        try {
            const taskData = await TaskService.getById(id);
            setTask(taskData);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching task:', apiError);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (autoFetch && id) {
            fetchTask();
        }
    }, [fetchTask, autoFetch, id]);

    return {
        task,
        loading,
        error,
        refetch: fetchTask
    };
};

// Hook for task statistics
interface UseTaskStatsReturn {
    stats: {
        total_tasks: number;
        completed_tasks: number;
        in_progress_tasks: number;
        overdue_tasks: number;
        critical_path_tasks: number;
        average_completion_time: number;
        tasks_by_status: Record<string, number>;
        tasks_by_priority: Record<string, number>;
        tasks_by_project: Record<string, number>;
    } | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useTaskStats = (): UseTaskStatsReturn => {
    const [stats, setStats] = useState<UseTaskStatsReturn['stats']>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const statsData = await TaskService.getStats();
            setStats(statsData);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching task stats:', apiError);
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
