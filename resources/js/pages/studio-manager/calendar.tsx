import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ProjectLayout from '@/layouts/project-layout';
import { Breadcrumbs, BreadcrumbItem } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Calendar as CalendarIcon, Clock, Zap } from 'lucide-react';

// Import calendar components
import CalendarView from '@/components/calendar/CalendarView';
import CalendarHeader from '@/components/calendar/CalendarHeader';
import EventModal from '@/components/calendar/EventModal';
import AITimeSuggest from '@/components/calendar/AITimeSuggest';

// Import types
import type {
    Event as EventType
} from '@/types/entities';

interface CalendarProps {
    events?: EventType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Calendar',
        href: '/calendar',
    },
];

export default function Calendar({ events = [] }: CalendarProps) {
    const [activeTab, setActiveTab] = useState('calendar');
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');

    const handleCreateEvent = (eventData: any) => {
        console.log('Creating event:', eventData);
        setShowEventModal(false);
        // TODO: Implement actual event creation logic
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setShowEventModal(true);
    };

    return (
        <ProjectLayout>
            <Head title="Calendar" />
            
            <div className="space-y-6">
                <Breadcrumbs items={breadcrumbs} />
                
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Calendar
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Schedule and manage your appointments, meetings, and deadlines.
                        </p>
                    </div>
                    <Button onClick={() => setShowEventModal(true)} className="gap-2">
                        <Plus className="w-4 h-4" />
                        New Event
                    </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="calendar" className="gap-2">
                            <CalendarIcon className="w-4 h-4" />
                            Calendar
                        </TabsTrigger>
                        <TabsTrigger value="schedule" className="gap-2">
                            <Clock className="w-4 h-4" />
                            Schedule
                        </TabsTrigger>
                        <TabsTrigger value="ai-suggest" className="gap-2">
                            <Zap className="w-4 h-4" />
                            AI Suggestions
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="calendar" className="space-y-6">
                        <CalendarHeader 
                            currentDate={selectedDate}
                            viewMode={viewMode}
                            onDateChange={setSelectedDate}
                            onViewModeChange={setViewMode}
                        />
                        <CalendarView 
                            events={events}
                            currentDate={selectedDate}
                            viewMode={viewMode}
                            onDateSelect={handleDateSelect}
                            onEventClick={(event) => {
                                console.log('Event clicked:', event);
                                // TODO: Open event details modal
                            }}
                        />
                    </TabsContent>

                    <TabsContent value="schedule" className="space-y-6">
                        <div className="text-center py-12">
                            <Clock className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-900 mb-2">
                                Schedule View
                            </h3>
                            <p className="text-slate-600">
                                Detailed schedule and agenda view coming soon.
                            </p>
                        </div>
                    </TabsContent>

                    <TabsContent value="ai-suggest" className="space-y-6">
                        <AITimeSuggest 
                            events={events}
                            onSuggestionAccept={(suggestion) => {
                                console.log('AI suggestion accepted:', suggestion);
                                // TODO: Create event from AI suggestion
                            }}
                        />
                    </TabsContent>
                </Tabs>

                {/* Event Creation Modal */}
                {showEventModal && (
                    <EventModal 
                        selectedDate={selectedDate}
                        onClose={() => setShowEventModal(false)}
                        onSubmit={handleCreateEvent}
                    />
                )}
            </div>
        </ProjectLayout>
    );
}
