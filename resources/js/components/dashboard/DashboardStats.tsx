import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, FolderOpen, CheckSquare, Clock, Users } from "lucide-react";

interface DashboardStatsData {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  totalHours: number;
}

interface DashboardStatsProps {
  stats: DashboardStatsData;
  isLoading?: boolean;
}

export default function DashboardStats({ stats, isLoading = false }: DashboardStatsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
              <div className="h-8 bg-slate-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const statsCards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      icon: FolderOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      trend: `${stats.activeProjects} active`
    },
    {
      title: "Total Tasks",
      value: stats.totalTasks,
      icon: CheckSquare,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      trend: `${stats.completedTasks} completed`,
      isUrgent: stats.overdueTasks > 0
    },
    {
      title: "Overdue Tasks",
      value: stats.overdueTasks,
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
      trend: stats.overdueTasks > 0 ? "Needs attention" : "All on track",
      isUrgent: stats.overdueTasks > 0
    },
    {
      title: "Total Hours",
      value: `${stats.totalHours}h`,
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      trend: "This month"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCards.map((stat, index) => (
        <Card key={index} className="relative overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <div className={`absolute top-0 right-0 w-28 h-28 transform translate-x-6 -translate-y-6 rounded-full opacity-10 ${stat.bgColor}`} />
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">{stat.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                  {stat.isUrgent && <AlertTriangle className="w-5 h-5 text-red-500" />}
                </div>
                {stat.trend && (
                  <div className={`mt-3 text-sm font-medium ${stat.isUrgent ? 'text-red-600' : 'text-slate-600'}`}>
                    {stat.trend}
                  </div>
                )}
              </div>
              <div className={`p-3 rounded-xl bg-opacity-15 backdrop-blur-sm ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}