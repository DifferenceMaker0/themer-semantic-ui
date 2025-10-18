import React, { useState, useEffect } from "react";
import { Head } from '@inertiajs/react';
import ProjectLayout from '@/layouts/project-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Search,
    Filter,
    Plus,
    CheckSquare,
    Calendar,
    Clock,
    AlertCircle,
    BarChart3
} from "lucide-react";

// Import components
import KanbanBoard from "@/components/tasks/KanbanBoard";
import TaskList from "@/components/tasks/TaskList";
import TaskGantt from "@/components/tasks/TaskGantt";
import TaskFilters from "@/components/tasks/TaskFilters";
import TaskCreationModal from "@/components/tasks/TaskCreationModal";

// Import hooks and services
import { useTasks } from '@/hooks/useTasks';
import { useProjects } from '@/hooks/useProjects';

// Import types
import type {
    Task as TaskType,
    Project as ProjectType,
    TaskFilters as TaskFiltersType
} from "@/types";

interface TasksProps {
    tasks?: TaskType[];
    projects?: ProjectType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tasks',
        href: '/tasks',
    },
];

export default function Tasks({ tasks: initialTasks = [], projects: initialProjects = [] }: TasksProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState<TaskFiltersType>({
        status: undefined,
        priority: undefined,
        project_id: undefined,
        assigned_to: undefined
    });
    const [activeView, setActiveView] = useState<'kanban' | 'list' | 'gantt'>('kanban');
    const [showCreateModal, setShowCreateModal] = useState(false);

    // Use the real API hooks
    const {
        tasks,
        loading: isLoading,
        error: taskError,
        createTask,
        refetch: refetchTasks
    } = useTasks({
        search: searchQuery,
        status: filters.status?.[0], // Take first status if array
        priority: filters.priority?.[0], // Take first priority if array
        project_id: filters.project_id,
        assignee: filters.assigned_to,
        autoFetch: true
    });

    const {
        projects,
        loading: projectsLoading
    } = useProjects({
        autoFetch: true
    });

    const [filteredTasks, setFilteredTasks] = useState<TaskType[]>(tasks);

    // Handle task creation
    const handleCreateTask = async (taskData: any) => {
        try {
            const newTask = await createTask(taskData);
            if (newTask) {
                setShowCreateModal(false);
                // Show success message
                console.log('Task created successfully:', newTask);
                // Optionally refetch data
                refetchTasks();
            }
        } catch (error) {
            console.error('Error creating task:', error);
            // Show error message to user
            alert('Failed to create task. Please try again.');
        }
    };

    // Filter tasks based on search and filters
    useEffect(() => {
        let filtered = [...tasks];

        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(task =>
                task.title.toLowerCase().includes(query) ||
                task.description?.toLowerCase().includes(query) ||
                projects.find(p => p.id === task.project_id)?.title.toLowerCase().includes(query)
            );
        }

        // Apply status filter
        if (filters.status && filters.status.length > 0) {
            filtered = filtered.filter(task => filters.status!.includes(task.status));
        }

        // Apply priority filter
        if (filters.priority && filters.priority.length > 0) {
            filtered = filtered.filter(task => filters.priority!.includes(task.priority));
        }

        // Apply project filter
        if (filters.project_id) {
            filtered = filtered.filter(task => task.project_id === filters.project_id);
        }

        // Apply assignee filter
        if (filters.assigned_to) {
            filtered = filtered.filter(task => task.assignee === filters.assigned_to);
        }

        setFilteredTasks(filtered);
    }, [tasks, searchQuery, filters, projects]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleFiltersChange = (newFilters: TaskFiltersType) => {
        setFilters(newFilters);
    };

    const getTaskStats = () => {
        const total = tasks.length;
        const todo = tasks.filter(t => t.status === 'todo').length;
        const inProgress = tasks.filter(t => t.status === 'in_progress').length;
        const completed = tasks.filter(t => t.status === 'completed').length;
        const overdue = tasks.filter(t => {
            if (!t.due_date) return false;
            return new Date(t.due_date) < new Date() && t.status !== 'completed';
        }).length;

        return { total, todo, inProgress, completed, overdue };
    };

    const stats = getTaskStats();

    return (
        <ProjectLayout breadcrumbs={breadcrumbs}>
            <Head title="Tasks" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Tasks
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Organize and track your tasks across all projects.
                        </p>
                    </div>
                    <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                        <Plus className="w-4 h-4" />
                        New Task
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <CheckSquare className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Total Tasks</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <Clock className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">To Do</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.todo}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <BarChart3 className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">In Progress</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.inProgress}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <CheckSquare className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Completed</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.completed}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Overdue</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.overdue}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <Input
                            placeholder="Search tasks..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="pl-10"
                        />
                    </div>
                    <TaskFilters
                        filters={filters}
                        onFiltersChange={handleFiltersChange}
                        projects={projects}
                    />
                </div>

                {/* Task Views */}
                <Tabs value={activeView} onValueChange={(value) => setActiveView(value as any)} className="flex-1">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
                        <TabsTrigger value="list">List View</TabsTrigger>
                        <TabsTrigger value="gantt">Gantt Chart</TabsTrigger>
                    </TabsList>

                    <TabsContent value="kanban" className="flex-1 mt-6">
                        <KanbanBoard
                            tasks={filteredTasks}
                            projects={projects}
                            isLoading={isLoading}
                        />
                    </TabsContent>

                    <TabsContent value="list" className="flex-1 mt-6">
                        <TaskList
                            tasks={filteredTasks}
                            projects={projects}
                            isLoading={isLoading}
                        />
                    </TabsContent>

                    <TabsContent value="gantt" className="flex-1 mt-6">
                        <TaskGantt
                            tasks={filteredTasks}
                            projects={projects}
                            isLoading={isLoading}
                        />
                    </TabsContent>
                </Tabs>

                {/* Task Creation Modal */}
                <TaskCreationModal
                    isOpen={showCreateModal}
                    onClose={() => setShowCreateModal(false)}
                    onSubmit={handleCreateTask}
                    projects={projects}
                />
            </div>
        </ProjectLayout>
    );
}
