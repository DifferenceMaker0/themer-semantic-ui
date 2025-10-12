import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ProjectLayout from '@/layouts/project-layout';
import { Breadcrumbs, BreadcrumbItem } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, TrendingUp, Users, Clock, Download } from 'lucide-react';

// Import analytics components
import ProductivityHeatmap from '@/components/analytics/ProductivityHeatmap';
import ProjectProfitability from '@/components/analytics/ProjectProfitability';
import TimeDistributionChart from '@/components/analytics/TimeDistributionChart';

// Import types
import type {
    Project as ProjectType,
    Task as TaskType,
    TimeEntry as TimeEntryType
} from '@/types/entities';

interface AnalyticsProps {
    projects?: ProjectType[];
    tasks?: TaskType[];
    timeEntries?: TimeEntryType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Analytics',
        href: '/analytics',
    },
];

export default function Analytics({ projects = [], tasks = [], timeEntries = [] }: AnalyticsProps) {
    const [activeTab, setActiveTab] = useState('productivity');

    const handleExportReport = () => {
        console.log('Exporting analytics report...');
        // TODO: Implement report export functionality
    };

    return (
        <ProjectLayout>
            <Head title="Analytics & Reports" />
            
            <div className="space-y-6">
                <Breadcrumbs items={breadcrumbs} />
                
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Analytics & Reports
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Gain insights into your business performance and productivity.
                        </p>
                    </div>
                    <Button onClick={handleExportReport} className="gap-2">
                        <Download className="w-4 h-4" />
                        Export Report
                    </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="productivity" className="gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Productivity
                        </TabsTrigger>
                        <TabsTrigger value="profitability" className="gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Profitability
                        </TabsTrigger>
                        <TabsTrigger value="time" className="gap-2">
                            <Clock className="w-4 h-4" />
                            Time Analysis
                        </TabsTrigger>
                        <TabsTrigger value="team" className="gap-2">
                            <Users className="w-4 h-4" />
                            Team Performance
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="productivity" className="space-y-6">
                        <ProductivityHeatmap 
                            timeEntries={timeEntries}
                            tasks={tasks}
                        />
                    </TabsContent>

                    <TabsContent value="profitability" className="space-y-6">
                        <ProjectProfitability 
                            projects={projects}
                            timeEntries={timeEntries}
                        />
                    </TabsContent>

                    <TabsContent value="time" className="space-y-6">
                        <TimeDistributionChart 
                            timeEntries={timeEntries}
                            projects={projects}
                        />
                    </TabsContent>

                    <TabsContent value="team" className="space-y-6">
                        <div className="text-center py-12">
                            <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-900 mb-2">
                                Team Performance Analytics
                            </h3>
                            <p className="text-slate-600">
                                Team performance metrics and collaboration insights coming soon.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </ProjectLayout>
    );
}
