import { BlogSidebarProvider } from './ui/bsidebar';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

interface BlogShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}

export function BlogShell({ children, variant = 'header' }: BlogShellProps) {
    const isOpen = usePage<SharedData>().props.blogSidebarOpen;

    if (variant === 'header') {
        return (
            <div className="flex min-h-screen w-full flex-col">{children}</div>
        );
    }

    return <BlogSidebarProvider defaultOpen={isOpen}>{children}</BlogSidebarProvider>;
}
