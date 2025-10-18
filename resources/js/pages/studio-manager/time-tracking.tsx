import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ProjectLayout from '@/layouts/project-layout';
import { Breadcrumbs, BreadcrumbItem } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Plus, Clock, BarChart3 } from 'lucide-react';

// Import time tracking components
import LiveTimer from '@/components/time-tracking/LiveTimer';
import RecentTimeEntries from '@/components/time-tracking/RecentTimeEntries';
import TimeTrackingStats from '@/components/time-tracking/TimeTrackingStats';
import ManualTimeEntryForm from '@/components/time-tracking/ManualTimeEntryForm';

// Import hooks and services
import { useTimeEntries } from '@/hooks/useTimeEntries';
import { useProjects } from '@/hooks/useProjects';
import { useTasks } from '@/hooks/useTasks';

// Import types
import type {
    TimeEntry as TimeEntryType,
    Project as ProjectType,
    Task as TaskType
} from '@/types'; 

interface TimeTrackingProps {
    timeEntries?: TimeEntryType[];
    projects?: ProjectType[];
    tasks?: TaskType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Time Tracking',
        href: '/time-tracking',
    },
];

export default function TimeTracking({ timeEntries: initialTimeEntries = [], projects: initialProjects = [], tasks: initialTasks = [] }: TimeTrackingProps) {
    const [activeTab, setActiveTab] = useState('timer');
    const [showManualEntry, setShowManualEntry] = useState(false);

    // Use the real API hooks
    const {
        timeEntries,
        loading: timeEntriesLoading,
        error: timeEntriesError,
        createTimeEntry,
        startTimer,
        stopTimer,
        refetch: refetchTimeEntries
    } = useTimeEntries({
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

    return (
        <ProjectLayout>
            <Head title="Time Tracking" />
            
            <div className="space-y-6">
                <Breadcrumbs items={breadcrumbs} />
                
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Time Tracking
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Track your time across projects and tasks with precision.
                        </p>
                    </div>
                    <Button onClick={() => setShowManualEntry(true)} className="gap-2">
                        <Plus className="w-4 h-4" />
                        Manual Entry
                    </Button>
                </div>

                {/* Time Tracking Stats */}
                <TimeTrackingStats 
                    timeEntries={timeEntries}
                    projects={projects}
                /> 
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="timer" className="gap-2">
                            <Play className="w-4 h-4" />
                            Live Timer
                        </TabsTrigger>
                        <TabsTrigger value="entries" className="gap-2">
                            <Clock className="w-4 h-4" />
                            Time Entries
                        </TabsTrigger>
                        <TabsTrigger value="reports" className="gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Reports
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="timer" className="space-y-6">
                        <LiveTimer
                            projects={projects}
                            tasks={tasks}
                            onTimeEntryCreated={async (entry) => {
                                try {
                                    const newEntry = await createTimeEntry(entry);
                                    if (newEntry) {
                                        console.log('Time entry created successfully:', newEntry);
                                        refetchTimeEntries();
                                    }
                                } catch (error) {
                                    console.error('Error creating time entry:', error);
                                    alert('Failed to create time entry. Please try again.');
                                }
                            }}
                            onTimerStart={startTimer}
                            onTimerStop={stopTimer}
                        />
                    </TabsContent>

                    <TabsContent value="entries" className="space-y-6">
                        <RecentTimeEntries 
                            timeEntries={timeEntries}
                            projects={projects}
                            tasks={tasks}
                            onEntryUpdate={(entryId, updates) => {
                                console.log('Updating entry:', entryId, updates);
                            }}
                        />
                    </TabsContent>

                    <TabsContent value="reports" className="space-y-6">
                        <div className="text-center py-12">
                            <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-900 mb-2">
                                Time Reports
                            </h3>
                            <p className="text-slate-600">
                                Detailed time tracking reports and analytics coming soon.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Manual Time Entry Modal */}
                {showManualEntry && (
                    <ManualTimeEntryForm
                        projects={projects}
                        tasks={tasks}
                        onClose={() => setShowManualEntry(false)}
                        onSubmit={async (entryData) => {
                            try {
                                const newEntry = await createTimeEntry(entryData);
                                if (newEntry) {
                                    console.log('Manual time entry created successfully:', newEntry);
                                    setShowManualEntry(false);
                                    refetchTimeEntries();
                                }
                            } catch (error) {
                                console.error('Error creating manual time entry:', error);
                                alert('Failed to create time entry. Please try again.');
                            }
                        }}
                    />
                )}
            </div>
        </ProjectLayout>
    );
}
