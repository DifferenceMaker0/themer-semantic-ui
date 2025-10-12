import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
export function AppSidebarHeader({ breadcrumbs = [], }) {
    return (_jsx("header", { className: "flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Breadcrumbs, { breadcrumbs: breadcrumbs })] }) }));
}
//# sourceMappingURL=app-sidebar-header.js.map