import axios, { AxiosResponse } from 'axios';
import type { Client, Project, Task, TimeEntry } from '@/types';

// Configure axios defaults for Sanctum SPA authentication
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true; // Important for Sanctum SPA authentication

// Add request interceptor to include CSRF token
axios.interceptors.request.use(
    (config) => {
        // Get CSRF token from meta tag
        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (token) {
            config.headers['X-CSRF-TOKEN'] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor for error handling
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized - redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// API Response types
interface ApiResponse<T> {
    data: T;
    message?: string;
}

interface PaginatedResponse<T> {
    data: T[];
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

// Client API Service
export class ClientService {
    private static baseUrl = '/clients';

    static async getAll(params?: {
        page?: number;
        per_page?: number;
        search?: string;
        relationship_status?: string;
        company_size?: string;
        sort_by?: string;
        sort_order?: 'asc' | 'desc';
    }): Promise<PaginatedResponse<Client>> {
        const response: AxiosResponse<PaginatedResponse<Client>> = await axios.get(this.baseUrl, { params });
        return response.data;
    }

    static async getById(id: string | number): Promise<Client> {
        const response: AxiosResponse<ApiResponse<Client>> = await axios.get(`${this.baseUrl}/${id}`);
        return response.data.data;
    }

    static async create(data: Partial<Client>): Promise<Client> {
        const response: AxiosResponse<ApiResponse<Client>> = await axios.post(this.baseUrl, data);
        return response.data.data;
    }

    static async update(id: string | number, data: Partial<Client>): Promise<Client> {
        const response: AxiosResponse<ApiResponse<Client>> = await axios.put(`${this.baseUrl}/${id}`, data);
        return response.data.data;
    }

    static async delete(id: string | number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`);
    }

    static async getStats(): Promise<{
        total_clients: number;
        active_clients: number;
        prospects: number;
        total_revenue: number;
        average_satisfaction: number;
    }> {
        const response = await axios.get('/clients-stats');
        return response.data.data;
    }
}

// Project API Service
export class ProjectService {
    private static baseUrl = '/projects';

    static async getAll(params?: {
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
    }): Promise<PaginatedResponse<Project>> {
        const response: AxiosResponse<PaginatedResponse<Project>> = await axios.get(this.baseUrl, { params });
        return response.data;
    }

    static async getById(id: string | number): Promise<Project> {
        const response: AxiosResponse<ApiResponse<Project>> = await axios.get(`${this.baseUrl}/${id}`);
        return response.data.data;
    }

    static async create(data: Partial<Project>): Promise<Project> {
        const response: AxiosResponse<ApiResponse<Project>> = await axios.post(this.baseUrl, data);
        return response.data.data;
    }

    static async update(id: string | number, data: Partial<Project>): Promise<Project> {
        const response: AxiosResponse<ApiResponse<Project>> = await axios.put(`${this.baseUrl}/${id}`, data);
        return response.data.data;
    }

    static async delete(id: string | number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`);
    }

    static async getStats(): Promise<{
        total_projects: number;
        active_projects: number;
        completed_projects: number;
        overdue_projects: number;
        total_budget: number;
        average_completion: number;
        projects_by_status: Record<string, number>;
        projects_by_priority: Record<string, number>;
    }> {
        const response = await axios.get('/projects-stats');
        return response.data.data;
    }

    static async analyze(id: string | number): Promise<{
        predicted_risk: string;
        risk_factors: string[];
        suggested_buffer_hours: number;
        suggested_deadline: string;
        confidence_score: number;
        market_insights: string;
    }> {
        const response = await axios.post(`${this.baseUrl}/${id}/analyze`);
        return response.data.data;
    }
}

// Task API Service
export class TaskService {
    private static baseUrl = '/tasks';

    static async getAll(params?: {
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
    }): Promise<PaginatedResponse<Task>> {
        const response: AxiosResponse<PaginatedResponse<Task>> = await axios.get(this.baseUrl, { params });
        return response.data;
    }

    static async getById(id: string | number): Promise<Task> {
        const response: AxiosResponse<ApiResponse<Task>> = await axios.get(`${this.baseUrl}/${id}`);
        return response.data.data;
    }

    static async create(data: Partial<Task>): Promise<Task> {
        const response: AxiosResponse<ApiResponse<Task>> = await axios.post(this.baseUrl, data);
        return response.data.data;
    }

    static async update(id: string | number, data: Partial<Task>): Promise<Task> {
        const response: AxiosResponse<ApiResponse<Task>> = await axios.put(`${this.baseUrl}/${id}`, data);
        return response.data.data;
    }

    static async delete(id: string | number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`);
    }

    static async getStats(): Promise<{
        total_tasks: number;
        completed_tasks: number;
        in_progress_tasks: number;
        overdue_tasks: number;
        critical_path_tasks: number;
        average_completion_time: number;
        tasks_by_status: Record<string, number>;
        tasks_by_priority: Record<string, number>;
        tasks_by_project: Record<string, number>;
    }> {
        const response = await axios.get('/tasks-stats');
        return response.data.data;
    }

    static async updateOrder(tasks: Array<{
        id: string | number;
        order_index: number;
        status?: string;
    }>): Promise<void> {
        await axios.post('/tasks/update-order', { tasks });
    }
}

// TimeEntry API Service
export class TimeEntryService {
    private static baseUrl = '/time-entries';

    static async getAll(params?: {
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
    }): Promise<PaginatedResponse<TimeEntry>> {
        const response: AxiosResponse<PaginatedResponse<TimeEntry>> = await axios.get(this.baseUrl, { params });
        return response.data;
    }

    static async getById(id: string | number): Promise<TimeEntry> {
        const response: AxiosResponse<ApiResponse<TimeEntry>> = await axios.get(`${this.baseUrl}/${id}`);
        return response.data.data;
    }

    static async create(data: Partial<TimeEntry>): Promise<TimeEntry> {
        const response: AxiosResponse<ApiResponse<TimeEntry>> = await axios.post(this.baseUrl, data);
        return response.data.data;
    }

    static async update(id: string | number, data: Partial<TimeEntry>): Promise<TimeEntry> {
        const response: AxiosResponse<ApiResponse<TimeEntry>> = await axios.put(`${this.baseUrl}/${id}`, data);
        return response.data.data;
    }

    static async delete(id: string | number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`);
    }

    static async getStats(): Promise<{
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
    }> {
        const response = await axios.get('/time-entries-stats');
        return response.data.data;
    }

    static async startTimer(data: {
        project_id: string | number;
        task_id?: string | number;
        description: string;
        is_billable?: boolean;
        hourly_rate?: number;
    }): Promise<TimeEntry> {
        const response: AxiosResponse<ApiResponse<TimeEntry>> = await axios.post('/time-entries/start', data);
        return response.data.data;
    }

    static async stopTimer(id: string | number): Promise<TimeEntry> {
        const response: AxiosResponse<ApiResponse<TimeEntry>> = await axios.post(`${this.baseUrl}/${id}/stop`);
        return response.data.data;
    }
}

// Error handling utility
export class ApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public errors?: Record<string, string[]>
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

// Generic API error handler
export const handleApiError = (error: any): ApiError => {
    if (error.response) {
        const { status, data } = error.response;
        return new ApiError(
            data.message || 'An error occurred',
            status,
            data.errors
        );
    } else if (error.request) {
        return new ApiError('Network error - please check your connection', 0);
    } else {
        return new ApiError(error.message || 'An unexpected error occurred', 0);
    }
};
