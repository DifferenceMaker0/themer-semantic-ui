import { jsx as _jsx } from "react/jsx-runtime";
import { SidebarProvider } from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';
export function AppShell({ children, variant = 'header' }) {
    const isOpen = usePage().props.sidebarOpen;
    if (variant === 'header') {
        return (_jsx("div", { className: "flex min-h-screen w-full flex-col", children: children }));
    }
    return _jsx(SidebarProvider, { defaultOpen: isOpen, children: children });
}
//# sourceMappingURL=app-shell.js.map