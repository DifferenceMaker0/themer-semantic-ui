import { BlogSidebarInset } from './ui/bsidebar';
import * as React from 'react';

interface BlogContentProps extends React.ComponentProps<'main'> {
    variant?: 'header' | 'sidebar';
}

export function BlogContent({
    variant = 'header',
    children,
    ...props
}: BlogContentProps) {
    if (variant === 'sidebar') {
        return <BlogSidebarInset {...props}>{children}</BlogSidebarInset>;
    }

    return (
        <main
            className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
            {...props}
        >
            {children}
        </main>
    );
}
