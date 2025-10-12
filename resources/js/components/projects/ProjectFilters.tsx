import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

const PROJECT_TYPES = [
    { value: "web_design", label: "Web Design" },
    { value: "web_development", label: "Web Development" },
    { value: "mobile_app", label: "Mobile App" },
    { value: "content_writing", label: "Content Writing" },
    { value: "copywriting", label: "Copywriting" },
    { value: "seo", label: "SEO" },
    { value: "social_media", label: "Social Media" },
    { value: "consulting", label: "Consulting" },
    { value: "branding", label: "Branding" },
    { value: "ui_ux_design", label: "UI/UX Design" },
    { value: "e_commerce", label: "E-commerce" },
    { value: "maintenance", label: "Maintenance" },
    { value: "other", label: "Other" }
];

export default function ProjectFilters({ filters, onFilterChange, clients = [] }) {
    const handleFilterChange = (type, value) => {
        onFilterChange({
            ...filters,
            [type]: value
        });
    };

    const clearAllFilters = () => {
        onFilterChange({
            status: "all",
            priority: "all",
            project_type: "all",
            client_id: "all"
        });
    };

    const hasActiveFilters = Object.values(filters).some(value => value !== "all");

    return (
        <Card className="bg-white/80 backdrop-blur-sm shadow-sm border-0">
            <CardContent className="p-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700">Filters:</span>

                        <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
                            <SelectTrigger className="w-32 h-9">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="planning">Planning</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="on_hold">On Hold</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={filters.priority} onValueChange={(value) => handleFilterChange("priority", value)}>
                            <SelectTrigger className="w-32 h-9">
                                <SelectValue placeholder="Priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Priority</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={filters.project_type} onValueChange={(value) => handleFilterChange("project_type", value)}>
                            <SelectTrigger className="w-40 h-9">
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                {PROJECT_TYPES.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={filters.client_id} onValueChange={(value) => handleFilterChange("client_id", value)}>
                            <SelectTrigger className="w-40 h-9">
                                <SelectValue placeholder="Client" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Clients</SelectItem>
                                {clients.map((client) => (
                                    <SelectItem key={client.id} value={client.id}>
                                        {client.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {hasActiveFilters && (
                        <>
                            <div className="flex items-center gap-2">
                                {Object.entries(filters).map(([key, value]) => {
                                    if (value === "all") return null;

                                    let displayValue = value;
                                    if (key === "project_type") {
                                        const type = PROJECT_TYPES.find(t => t.value === value);
                                        displayValue = type?.label || value;
                                    } else if (key === "client_id") {
                                        const client = clients.find(c => c.id === value);
                                        displayValue = client?.name || value;
                                    }

                                    return (
                                        <Badge key={key} variant="secondary" className="gap-1">
                                            <span className="capitalize">{key.replace('_', ' ')}: {displayValue}</span>
                                            <button
                                                onClick={() => handleFilterChange(key, "all")}
                                                className="hover:bg-slate-300 rounded-full p-0.5 ml-1"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </Badge>
                                    );
                                }).filter(Boolean)}
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={clearAllFilters}
                                className="h-9"
                            >
                                Clear All
                            </Button>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
