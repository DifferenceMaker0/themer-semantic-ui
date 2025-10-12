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
    Users,
    Building,
    Mail,
    Phone,
    Globe
} from "lucide-react";

// Import components
import ClientCard from "@/components/clients/ClientCard";
import ClientFilters from "@/components/clients/ClientFilters";
import ClientCreationModal from "@/components/clients/ClientCreationModal";

// Import types
import type {
    Client as ClientType
} from "@/types/entities";

interface ClientsProps {
    clients?: ClientType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
];

export default function Clients({ clients = [] }: ClientsProps) {
    const [filteredClients, setFilteredClients] = useState<ClientType[]>(clients);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        relationship_status: undefined as string | undefined,
        company_size: undefined as string | undefined,
        industry: undefined as string | undefined
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);

    // Filter clients based on search and filters
    useEffect(() => {
        let filtered = [...clients];

        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(client =>
                client.company_name.toLowerCase().includes(query) ||
                client.primary_contact_name.toLowerCase().includes(query) ||
                client.primary_contact_email?.toLowerCase().includes(query) ||
                client.industry?.toLowerCase().includes(query)
            );
        }

        // Apply relationship status filter
        if (filters.relationship_status) {
            filtered = filtered.filter(client => client.relationship_status === filters.relationship_status);
        }

        // Apply company size filter
        if (filters.company_size) {
            filtered = filtered.filter(client => client.company_size === filters.company_size);
        }

        // Apply industry filter
        if (filters.industry) {
            filtered = filtered.filter(client => client.industry === filters.industry);
        }

        setFilteredClients(filtered);
    }, [clients, searchQuery, filters]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleFiltersChange = (newFilters: any) => {
        setFilters(newFilters);
    };

    const getClientStats = () => {
        const total = clients.length;
        const active = clients.filter(c => c.relationship_status === 'active').length;
        const prospects = clients.filter(c => c.relationship_status === 'prospect').length;
        const inactive = clients.filter(c => c.relationship_status === 'inactive').length;

        return { total, active, prospects, inactive };
    };

    const stats = getClientStats();

    const handleCreateClient = (clientData: any) => {
        console.log('Creating client:', clientData);
        setShowCreateModal(false);
        // TODO: Implement actual client creation logic
    };

    return (
        <ProjectLayout breadcrumbs={breadcrumbs}>
            <Head title="Clients" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Clients
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Manage your client relationships and contacts.
                        </p>
                    </div>
                    <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                        <Plus className="w-4 h-4" />
                        New Client
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Users className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Total Clients</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <Building className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Active</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.active}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <Globe className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Prospects</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.prospects}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <Mail className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Inactive</p>
                                <p className="text-2xl font-bold text-slate-900">{stats.inactive}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <Input
                            placeholder="Search clients..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="pl-10"
                        />
                    </div>
                    <ClientFilters
                        filters={filters}
                        onFiltersChange={handleFiltersChange}
                        clients={clients}
                    />
                </div>

                {/* Clients Grid */}
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
                            </div>
                        ))
                    ) : filteredClients.length > 0 ? (
                        filteredClients.map((client) => (
                            <ClientCard
                                key={client.id}
                                client={client}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-900 mb-2">No clients found</h3>
                            <p className="text-slate-600 mb-4">
                                {searchQuery || Object.values(filters).some(f => f)
                                    ? "Try adjusting your search or filters"
                                    : "Get started by adding your first client"
                                }
                            </p>
                            <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                                <Plus className="w-4 h-4" />
                                New Client
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Client Creation Modal */}
            <ClientCreationModal
                isOpen={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                onSubmit={handleCreateClient}
            />
        </ProjectLayout>
    );
}
