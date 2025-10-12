import AppBungholeOutTemplate from '@/layouts/app/app-bungholeout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface BungholeOutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: BungholeOutProps) => (
    <AppBungholeOutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppBungholeOutTemplate>
);
