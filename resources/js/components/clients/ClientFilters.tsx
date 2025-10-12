import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ClientFilters({ filters, onFilterChange, clients = [] }) {
  const industries = [...new Set(clients.map(c => c.industry).filter(Boolean))];

  const handleFilterChange = (type, value) => {
    onFilterChange({
      ...filters,
      [type]: value
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      tier: "all",
      status: "all",
      industry: "all"
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== "all");

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-sm border-0">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Filters:</span>

            <Select value={filters.tier} onValueChange={(value) => handleFilterChange("tier", value)}>
              <SelectTrigger className="w-32 h-9">
                <SelectValue placeholder="Tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="A">Tier A</SelectItem>
                <SelectItem value="B">Tier B</SelectItem>
                <SelectItem value="C">Tier C</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger className="w-32 h-9">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="prospect">Prospect</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.industry} onValueChange={(value) => handleFilterChange("industry", value)}>
              <SelectTrigger className="w-40 h-9">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
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
                  if (key === "tier") {
                    displayValue = `Tier ${value}`;
                  }

                  return (
                    <Badge key={key} variant="secondary" className="gap-1">
                      <span className="capitalize">{key}: {displayValue}</span>
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