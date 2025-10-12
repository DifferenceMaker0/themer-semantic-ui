import axios, { AxiosResponse } from 'axios';
import type { Client, Project, Task, TimeEntry } from '@/types';

// Configure axios defaults
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add request interceptor to include auth token
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token') || document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
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

// Project API Service (placeholder for future implementation)
export class ProjectService {
    private static baseUrl = '/projects';

    static async getAll(params?: any): Promise<PaginatedResponse<Project>> {
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
}

// Task API Service (placeholder for future implementation)
export class TaskService {
    private static baseUrl = '/tasks';

    static async getAll(params?: any): Promise<PaginatedResponse<Task>> {
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
}

// Time Entry API Service (placeholder for future implementation)
export class TimeEntryService {
    private static baseUrl = '/time-entries';

    static async getAll(params?: any): Promise<PaginatedResponse<TimeEntry>> {
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
