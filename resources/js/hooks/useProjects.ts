import { useState, useEffect, useCallback } from 'react';
import { ProjectService, handleApiError } from '@/services/api';
import type { Project } from '@/types';

interface UseProjectsOptions {
    page?: number;
    per_page?: number;
    search?: string;
    status?: string;
    priority?: string;
    project_type?: string;
    client_id?: string;
    overdue?: boolean;
    sort_by?: string;
    sort_order?: 'asc' | 'desc';
    autoFetch?: boolean;
}

interface UseProjectsReturn {
    projects: Project[];
    loading: boolean;
    error: string | null;
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    } | null;
    refetch: () => Promise<void>;
    createProject: (data: Partial<Project>) => Promise<Project | null>;
    updateProject: (id: string | number, data: Partial<Project>) => Promise<Project | null>;
    deleteProject: (id: string | number) => Promise<boolean>;
    analyzeProject: (id: string | number) => Promise<any>;
}

export const useProjects = (options: UseProjectsOptions = {}): UseProjectsReturn => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [meta, setMeta] = useState<UseProjectsReturn['meta']>(null);

    const {
        page = 1,
        per_page = 15,
        search,
        status,
        priority,
        project_type,
        client_id,
        overdue,
        sort_by = 'created_at',
        sort_order = 'desc',
        autoFetch = true
    } = options;

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await ProjectService.getAll({
                page,
                per_page,
                search,
                status,
                priority,
                project_type,
                client_id,
                overdue,
                sort_by,
                sort_order
            });

            setProjects(response.data);
            setMeta(response.meta);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching projects:', apiError);
        } finally {
            setLoading(false);
        }
    }, [page, per_page, search, status, priority, project_type, client_id, overdue, sort_by, sort_order]);

    const createProject = useCallback(async (data: Partial<Project>): Promise<Project | null> => {
        setError(null);

        try {
            const newProject = await ProjectService.create(data);
            
            // Add to local state
            setProjects(prev => [newProject, ...prev]);
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total + 1 } : null);
            }

            return newProject;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error creating project:', apiError);
            return null;
        }
    }, [meta]);

    const updateProject = useCallback(async (id: string | number, data: Partial<Project>): Promise<Project | null> => {
        setError(null);

        try {
            const updatedProject = await ProjectService.update(id, data);
            
            // Update local state
            setProjects(prev => 
                prev.map(project => 
                    project.id === id ? updatedProject : project
                )
            );

            return updatedProject;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error updating project:', apiError);
            return null;
        }
    }, []);

    const deleteProject = useCallback(async (id: string | number): Promise<boolean> => {
        setError(null);

        try {
            await ProjectService.delete(id);
            
            // Remove from local state
            setProjects(prev => prev.filter(project => project.id !== id));
            
            // Update meta if we have it
            if (meta) {
                setMeta(prev => prev ? { ...prev, total: prev.total - 1 } : null);
            }

            return true;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error deleting project:', apiError);
            return false;
        }
    }, [meta]);

    const analyzeProject = useCallback(async (id: string | number) => {
        setError(null);

        try {
            const analysis = await ProjectService.analyze(id);
            
            // Update the project in local state with the analysis
            setProjects(prev => 
                prev.map(project => 
                    project.id === id 
                        ? { ...project, ai_analysis: analysis }
                        : project
                )
            );

            return analysis;
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error analyzing project:', apiError);
            return null;
        }
    }, []);

    // Auto-fetch on mount and when dependencies change
    useEffect(() => {
        if (autoFetch) {
            fetchProjects();
        }
    }, [fetchProjects, autoFetch]);

    return {
        projects,
        loading,
        error,
        meta,
        refetch: fetchProjects,
        createProject,
        updateProject,
        deleteProject,
        analyzeProject
    };
};

// Hook for single project
interface UseProjectOptions {
    id: string | number;
    autoFetch?: boolean;
}

interface UseProjectReturn {
    project: Project | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useProject = (options: UseProjectOptions): UseProjectReturn => {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { id, autoFetch = true } = options;

    const fetchProject = useCallback(async () => {
        if (!id) return;

        setLoading(true);
        setError(null);

        try {
            const projectData = await ProjectService.getById(id);
            setProject(projectData);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching project:', apiError);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (autoFetch && id) {
            fetchProject();
        }
    }, [fetchProject, autoFetch, id]);

    return {
        project,
        loading,
        error,
        refetch: fetchProject
    };
};

// Hook for project statistics
interface UseProjectStatsReturn {
    stats: {
        total_projects: number;
        active_projects: number;
        completed_projects: number;
        overdue_projects: number;
        total_budget: number;
        average_completion: number;
        projects_by_status: Record<string, number>;
        projects_by_priority: Record<string, number>;
    } | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useProjectStats = (): UseProjectStatsReturn => {
    const [stats, setStats] = useState<UseProjectStatsReturn['stats']>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const statsData = await ProjectService.getStats();
            setStats(statsData);
        } catch (err) {
            const apiError = handleApiError(err);
            setError(apiError.message);
            console.error('Error fetching project stats:', apiError);
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
