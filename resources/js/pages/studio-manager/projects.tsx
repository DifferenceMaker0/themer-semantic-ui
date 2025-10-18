import React, { useState, useEffect } from "react";
import { Head } from '@inertiajs/react';
import ProjectLayout from '@/layouts/project-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    Filter,
    Plus,
    FolderOpen,
    Calendar,
    DollarSign,
    Clock,
    Users
} from "lucide-react";

// Import components
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectCreationModal from "@/components/projects/ProjectCreationModal";

// Import hooks and services
import { useProjects } from '@/hooks/useProjects';
import { useClients } from '@/hooks/useClients';

// Import types
import type {
    Project as ProjectType,
    Client as ClientType,
    ProjectFilters as ProjectFiltersType
} from "@/types/entities";

interface ProjectsProps {
    projects?: ProjectType[];
    clients?: ClientType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

export default function Projects({ projects: initialProjects = [], clients: initialClients = [] }: ProjectsProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState<ProjectFiltersType>({
        status: undefined,
        priority: undefined,
        project_type: undefined,
        client_id: undefined
    });
    const [showCreateModal, setShowCreateModal] = useState(false);

    // Use the real API hooks
    const {
        projects,
        loading: isLoading,
        error: projectError,
        createProject,
        refetch: refetchProjects
    } = useProjects({
        search: searchQuery,
        status: filters.status?.[0], // Take first status if array
        priority: filters.priority?.[0], // Take first priority if array
        project_type: filters.project_type?.[0], // Take first type if array
        client_id: filters.client_id,
        autoFetch: true
    });

    const {
        clients,
        loading: clientsLoading
    } = useClients({
        autoFetch: true
    });

    const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

    // Filter projects based on search and filters
    useEffect(() => {
        let filtered = [...projects];

        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(query) ||
                project.description?.toLowerCase().includes(query) ||
                clients.find(c => c.id === project.client_id)?.company_name.toLowerCase().includes(query)
            );
        }

        // Apply status filter
        if (filters.status && filters.status.length > 0) {
            filtered = filtered.filter(project => filters.status!.includes(project.status));
        }

        // Apply priority filter
        if (filters.priority && filters.priority.length > 0) {
            filtered = filtered.filter(project => filters.priority!.includes(project.priority));
        }

        // Apply project type filter
        if (filters.project_type && filters.project_type.length > 0) {
            filtered = filtered.filter(project => filters.project_type!.includes(project.project_type));
        }

        // Apply client filter
        if (filters.client_id) {
            filtered = filtered.filter(project => project.client_id === filters.client_id);
        }

        setFilteredProjects(filtered);
    }, [projects, searchQuery, filters, clients]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleFiltersChange = (newFilters: ProjectFiltersType) => {
        setFilters(newFilters);
    };

    const getProjectStats = () => {
        const total = projects.length;
        const active = projects.filter(p => p.status === 'active').length;
        const completed = projects.filter(p => p.status === 'completed').length;
        const planning = projects.filter(p => p.status === 'planning').length;

        return { total, active, completed, planning };
    };

    const stats = getProjectStats();

    const handleCreateProject = async (projectData: any) => {
        try {
            const newProject = await createProject(projectData);
            if (newProject) {
                setShowCreateModal(false);
                // Show success message
                console.log('Project created successfully:', newProject);
                // Optionally refetch data
                refetchProjects();
            }
        } catch (error) {
            console.error('Error creating project:', error);
            // Show error message to user
            alert('Failed to create project. Please try again.');
        }
    };

    return (
        <ProjectLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Projects
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Manage and track all your projects in one place.
                        </p>
                    </div>
                    <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                        <Plus className="w-4 h-4" />
                        New Project
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <FolderOpen className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Total Projects</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <Clock className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Active</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.active}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Calendar className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Planning</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.planning}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 rounded-lg">
                                <Users className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Completed</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.completed}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <Input
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="pl-10"
                        />
                    </div>
                    <ProjectFilters
                        filters={filters}
                        onFiltersChange={handleFiltersChange}
                        clients={clients}
                    />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        // Loading skeleton
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-white rounded-lg border p-6 animate-pulse">
                                <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
                                <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
                                <div className="h-3 bg-slate-200 rounded w-2/3 mb-4"></div>
                                <div className="flex gap-2 mb-4">
                                    <div className="h-6 bg-slate-200 rounded w-16"></div>
                                    <div className="h-6 bg-slate-200 rounded w-20"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded w-full"></div>
                            </div>
                        ))
                    ) : filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                client={clients.find(c => c.id === project.client_id)}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <FolderOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-900 mb-2">No projects found</h3>
                            <p className="text-slate-600 mb-4">
                                {searchQuery || Object.values(filters).some(f => f && (Array.isArray(f) ? f.length > 0 : true))
                                    ? "Try adjusting your search or filters"
                                    : "Get started by creating your first project"
                                }
                            </p>
                            <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                                <Plus className="w-4 h-4" />
                                New Project
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Project Creation Modal */}
            <ProjectCreationModal
                isOpen={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                onSubmit={handleCreateProject}
                clients={clients}
            />
        </ProjectLayout>
    );
}
