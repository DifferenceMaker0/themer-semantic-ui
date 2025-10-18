import BlogLayoutTemplate from './blog-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface BlogLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: BlogLayoutProps) => (
    <BlogLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </BlogLayoutTemplate>
);