import { BlogContent } from './blog-content';
import { BlogShell } from './blog-shell';
import { BlogSidebar } from './blog-sidebar';
import { BlogSidebarHeader } from './blog-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function BlogSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <BlogShell variant="sidebar">
            <BlogSidebar />
            <BlogContent variant="sidebar" className="overflow-x-hidden">
                <BlogSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </BlogContent>
        </BlogShell>
    );
}
