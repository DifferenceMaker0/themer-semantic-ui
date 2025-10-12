import React from 'react';
import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

// Laravel/Inertia specific types
export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

// Component prop types
export interface LayoutProps {
  children: React.ReactNode;
  currentPageName: string;
}

export interface NavigationItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Form and UI types
export interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export interface SelectOption {
  value: string;
  label: string;
}

// API and Integration types
export interface LLMRequest {
  prompt: string;
  add_context_from_internet?: boolean;
  response_json_schema?: Record<string, any>;
}

export interface LLMResponse {
  [key: string]: any;
}

// Statistics and Dashboard types
export interface DashboardStats {
  activeProjects: number;
  dueToday: number;
  hoursThisWeek: number;
}

export interface ProjectStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalRevenue: number;
  totalHours: number;
}

// Filter and Search types
import { TaskStatus, Priority, ProjectStatus, ProjectType } from './entities';

export interface TaskFilters {
  status?: TaskStatus[];
  priority?: Priority[];
  project_id?: string;
  assigned_to?: string;
  due_date_range?: {
    start: string;
    end: string;
  };
}

export interface ProjectFilters {
  status?: ProjectStatus[];
  client_id?: string;
  project_type?: ProjectType[];
  priority?: Priority[];
}
