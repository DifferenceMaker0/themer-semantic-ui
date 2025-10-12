import React, { useState, useEffect } from "react";
import { Link, usePage, router } from '@inertiajs/react';
import { type BreadcrumbItem, type SharedData } from '@/types';
import {
    LayoutDashboard,
    FolderOpen,
    CheckSquare,
    Target,
    Users,
    Timer,
    Plus,
    BarChart2,
    Calendar,
    FileArchive,
    MessageSquare,
    TrendingUp,
    DollarSign,
    Briefcase,
    Monitor,
    Settings,
    LogOut
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from '@/components/breadcrumbs';

interface NavigationItem {
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
}

const navigationItems: NavigationItem[] = [
    { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { title: "Project Dashboard", href: "/project-dashboard", icon: Monitor },
    { title: "Projects", href: "/projects", icon: FolderOpen },
    { title: "Tasks", href: "/tasks", icon: CheckSquare },
    { title: "Clients", href: "/clients", icon: Users },
    { title: "Communication", href: "/communication", icon: MessageSquare },
    { title: "Time Tracking", href: "/time-tracking", icon: Timer },
    { title: "Financials", href: "/financial-dashboard", icon: DollarSign },
    { title: "Analytics", href: "/analytics", icon: BarChart2 },
    { title: "Calendar", href: "/calendar", icon: Calendar },
];

interface QuickAction {
    title: string;
    action: () => void;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

const getQuickActions = (router: any): QuickAction[] => [
    {
        title: "New Project",
        action: () => router.visit('/projects'),
        icon: Plus,
        color: "text-blue-600 bg-blue-100"
    },
    {
        title: "New Task",
        action: () => router.visit('/tasks'),
        icon: CheckSquare,
        color: "text-emerald-600 bg-emerald-100"
    },
    {
        title: "New Client",
        action: () => router.visit('/clients'),
        icon: Users,
        color: "text-purple-600 bg-purple-100"
    }
];

interface ProjectLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function ProjectLayout({ children, breadcrumbs }: ProjectLayoutProps) {
    const { props, url } = usePage<SharedData>();
    const { auth } = props;
    const currentUser = auth?.user;

    const [stats, setStats] = useState({ activeProjects: 0, dueToday: 0, hoursThisWeek: 0 });
    const quickActions = getQuickActions(router);

    // Mock stats for now - in real implementation, these would come from the backend
    useEffect(() => {
        setStats({
            activeProjects: 5,
            dueToday: 3,
            hoursThisWeek: 32.5
        });
    }, []);

    const isActiveRoute = (href: string) => {
        return url === href || url.startsWith(href + '/');
    };

    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-slate-100">
                <Sidebar className="border-r border-slate-200/60 bg-white/90 backdrop-blur-sm">
                    <SidebarHeader className="border-b border-slate-200/60 p-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <CheckSquare className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="font-bold text-slate-900 text-lg tracking-tight">ProjectFlow</h2>
                                <p className="text-xs text-slate-500 font-medium">Professional Project Management</p>
                            </div>
                        </div>
                    </SidebarHeader>

                    <SidebarContent className="p-3">
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
                                Navigation
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {navigationItems.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton
                                                asChild
                                                className={`hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-xl mb-1 ${isActiveRoute(item.href)
                                                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-slate-900 shadow-sm border border-blue-100'
                                                    : 'text-slate-600'
                                                    }`}
                                            >
                                                <Link href={item.href} className="flex items-center gap-3 px-4 py-3 font-medium">
                                                    <item.icon className="w-5 h-5" />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>

                        {/* Quick Actions */}
                        <SidebarGroup className="mt-6">
                            <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
                                Quick Actions
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <div className="space-y-2 px-3">
                                    {quickActions.map((action) => (
                                        <button
                                            key={action.title}
                                            onClick={action.action}
                                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                        >
                                            <div className={`p-2 rounded-lg ${action.color} group-hover:scale-110 transition-transform`}>
                                                <action.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">{action.title}</span>
                                        </button>
                                    ))}
                                </div>
                            </SidebarGroupContent>
                        </SidebarGroup>

                        {/* Stats */}
                        <SidebarGroup className="mt-6">
                            <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
                                Quick Stats
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <div className="space-y-3 px-3">
                                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                                        <span className="text-sm font-medium text-blue-900">Active Projects</span>
                                        <span className="text-lg font-bold text-blue-600">{stats.activeProjects}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl">
                                        <span className="text-sm font-medium text-emerald-900">Due Today</span>
                                        <span className="text-lg font-bold text-emerald-600">{stats.dueToday}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                                        <span className="text-sm font-medium text-purple-900">Hours This Week</span>
                                        <span className="text-lg font-bold text-purple-600">{stats.hoursThisWeek}h</span>
                                    </div>
                                </div>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter className="border-t border-slate-200/60 p-4">
                        {currentUser && (
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-semibold">
                                        {currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-900 truncate">{currentUser.name}</p>
                                    <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                                </div>
                                <div className="flex gap-1">
                                    <Link href="/settings/profile">
                                        <Button variant="ghost" size="icon" className="w-8 h-8">
                                            <Settings className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-8 h-8"
                                    >
                                        <LogOut className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </SidebarFooter>
                </Sidebar>

                {/* Main Content */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Header */}
                    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 px-6 py-4">
                        <div className="flex items-center gap-4">
                            <SidebarTrigger className="lg:hidden" />
                            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
