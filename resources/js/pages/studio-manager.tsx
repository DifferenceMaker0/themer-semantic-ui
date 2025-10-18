import { Head } from '@inertiajs/react';
import ProjectLayout from '@/layouts/project-layout';
import { studioManager } from '@/routes';
import { Plus, Calendar, FolderOpen, CheckSquare, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import the dashboard components
import DashboardStats from "@/components/dashboard/DashboardStats";
import ActiveProjects from "@/components/dashboard/ActiveProjects";
import TaskOverview from "@/components/dashboard/TaskOverview";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import TimeTrackingSummary from "@/components/dashboard/TimeTrackingSummary";

// Import API hooks
import { useClients } from '@/hooks/useClients';
import { useProjects } from '@/hooks/useProjects';
import { useTasks } from '@/hooks/useTasks';
import { useTimeEntries } from '@/hooks/useTimeEntries';

// Import types
import type {
    Project as ProjectType,
    Task as TaskType,
    TimeEntry as TimeEntryType,
    Client as ClientType
} from "@/types/entities";

interface ProjectDashboardStatsData {
    totalClients: number;
    activeClients: number;
    totalProjects: number;
    activeProjects: number;
    totalTasks: number;
    completedTasks: number;
    overdueTasks: number;
    todaysTasks: number;
    thisWeekHours: number;
    totalHours: number;
}

interface ProjectDashboardProps {
    // Props are now optional since we'll fetch data via API hooks
}

const breadcrumbs = [
    {
        title: 'Studio Manager',
        href: studioManager().url,
    },
];

export default function ProjectDashboard({}: ProjectDashboardProps) {
    // Use real API hooks to fetch user-specific data
    const {
        clients,
        loading: clientsLoading
    } = useClients({
        autoFetch: true
    });

    const {
        projects,
        loading: projectsLoading
    } = useProjects({
        autoFetch: true
    });

    const {
        tasks,
        loading: tasksLoading
    } = useTasks({
        autoFetch: true
    });

    const {
        timeEntries,
        loading: timeEntriesLoading
    } = useTimeEntries({
        autoFetch: true
    });

    // Calculate loading state
    const isLoading = clientsLoading || projectsLoading || tasksLoading || timeEntriesLoading;

    // Calculate stats from real API data
    const projectDashboardStats: ProjectDashboardStatsData = {
        totalClients: clients.length,
        activeClients: clients.filter((c: ClientType) => c.relationship_status === 'active').length,
        totalProjects: projects.length,
        activeProjects: projects.filter((p: ProjectType) => p.status === 'active').length,
        totalTasks: tasks.length,
        completedTasks: tasks.filter((t: TaskType) => t.status === 'completed').length,
        overdueTasks: tasks.filter((t: TaskType) => {
            if (!t.due_date) return false;
            return new Date(t.due_date) < new Date() && t.status !== 'completed';
        }).length,
        todaysTasks: tasks.filter((t: TaskType) => {
            if (!t.due_date) return false;
            const today = new Date().toDateString();
            return new Date(t.due_date).toDateString() === today;
        }).length,
        thisWeekHours: timeEntries.reduce((total: number, entry: TimeEntryType) => {
            const entryDate = new Date(entry.start_time);
            const weekStart = new Date();
            weekStart.setDate(weekStart.getDate() - weekStart.getDay());
            weekStart.setHours(0, 0, 0, 0);

            if (entryDate >= weekStart) {
                return total + (entry.duration_minutes / 60);
            }
            return total;
        }, 0),
        totalHours: timeEntries.reduce((total: number, entry: TimeEntryType) => total + (entry.duration_minutes / 60), 0)
    };

    return (
        <ProjectLayout breadcrumbs={breadcrumbs}>
            <Head title="Project Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Project Dashboard
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Welcome back! Here's what's happening with your projects.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="gap-2">
                            <Calendar className="w-4 h-4" />
                            Schedule
                        </Button>
                        <Button className="gap-2">
                            <Plus className="w-4 h-4" />
                            New Project
                        </Button>
                    </div>
                </div>

                {/* Stats Overview */}
                <DashboardStats
                    stats={projectDashboardStats}
                    isLoading={isLoading}
                />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Projects and Tasks */}
                    <div className="lg:col-span-2 space-y-6">
                        <ActiveProjects
                            projects={projects.filter(p => p.status === 'active').slice(0, 6)}
                            isLoading={isLoading}
                        />

                        <TaskOverview
                            tasks={tasks}
                            isLoading={isLoading}
                        />
                    </div>

                    {/* Right Column - Deadlines and Time Tracking */}
                    <div className="space-y-6">
                        <UpcomingDeadlines
                            tasks={tasks.filter(t => t.due_date).slice(0, 8)}
                            projects={projects}
                            isLoading={isLoading}
                        />

                        <TimeTrackingSummary
                            timeEntries={timeEntries}
                            isLoading={isLoading}
                        />
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                    <Button variant="outline" className="h-20 flex-col gap-2">
                        <FolderOpen className="w-6 h-6" />
                        <span>New Project</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2">
                        <CheckSquare className="w-6 h-6" />
                        <span>Add Task</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2">
                        <Timer className="w-6 h-6" />
                        <span>Time Tracker</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2">
                        <Calendar className="w-6 h-6" />
                        <span>Schedule</span>
                    </Button>
                </div>
            </div>
        </ProjectLayout>
    );
}
