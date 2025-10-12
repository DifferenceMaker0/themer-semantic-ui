import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ProjectLayout from '@/layouts/project-layout';
import { Breadcrumbs, BreadcrumbItem } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, MessageSquare, Users, Settings } from 'lucide-react';

// Import communication components
import UnifiedInbox from '@/components/communication/UnifiedInbox';
import ChannelManager from '@/components/communication/ChannelManager';
import CommunicationStats from '@/components/communication/CommunicationStats';
import MessageComposer from '@/components/communication/MessageComposer';

// Import types
import type {
    Message as MessageType,
    Channel as ChannelType
} from '@/types/entities';

interface CommunicationProps {
    messages?: MessageType[];
    channels?: ChannelType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Communication',
        href: '/communication',
    },
];

export default function Communication({ messages = [], channels = [] }: CommunicationProps) {
    const [activeTab, setActiveTab] = useState('inbox');
    const [showComposer, setShowComposer] = useState(false);

    return (
        <ProjectLayout>
            <Head title="Communication Hub" />

            <div className="space-y-6">
                <Breadcrumbs items={breadcrumbs} />

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Communication Hub
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Manage all your client and team communications in one place.
                        </p>
                    </div>
                    <Button onClick={() => setShowComposer(true)} className="gap-2">
                        <Plus className="w-4 h-4" />
                        New Message
                    </Button>
                </div>

                {/* Communication Stats */}
                <CommunicationStats
                    messages={messages}
                    channels={channels}
                />

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="inbox" className="gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Inbox
                        </TabsTrigger>
                        <TabsTrigger value="channels" className="gap-2">
                            <Users className="w-4 h-4" />
                            Channels
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="gap-2">
                            <Settings className="w-4 h-4" />
                            Settings
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="inbox" className="space-y-6">
                        <UnifiedInbox
                            messages={messages}
                            channels={channels}
                            clients={[]}
                            projects={[]}
                        />
                    </TabsContent>

                    <TabsContent value="channels" className="space-y-6">
                        <ChannelManager
                            channels={channels}
                            messages={messages}
                        />
                    </TabsContent>

                    <TabsContent value="settings" className="space-y-6">
                        <div className="text-center py-12">
                            <MessageSquare className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-900 mb-2">
                                Communication Settings
                            </h3>
                            <p className="text-slate-600">
                                Configure your communication preferences and integrations.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Message Composer Modal */}
                {showComposer && (
                    <MessageComposer
                        channels={channels}
                        clients={[]}
                        projects={[]}
                        onMessageSent={(messageData) => {
                            console.log('Sending message:', messageData);
                            setShowComposer(false);
                        }}
                    />
                )}
            </div>
        </ProjectLayout>
    );
}
