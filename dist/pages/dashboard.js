import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { Head } from '@inertiajs/react';
const breadcrumbs = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];
export default function Dashboard() {
    return (_jsxs(AppLayout, { breadcrumbs: breadcrumbs, children: [_jsx(Head, { title: "Dashboard" }), _jsxs("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: [_jsxs("div", { className: "grid auto-rows-min gap-4 md:grid-cols-3", children: [_jsx("div", { className: "relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border", children: _jsx(PlaceholderPattern, { className: "absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" }) }), _jsx("div", { className: "relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border", children: _jsx(PlaceholderPattern, { className: "absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" }) }), _jsx("div", { className: "relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border", children: _jsx(PlaceholderPattern, { className: "absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" }) })] }), _jsx("div", { className: "relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border", children: _jsx(PlaceholderPattern, { className: "absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" }) })] })] }));
}
//# sourceMappingURL=dashboard.js.map