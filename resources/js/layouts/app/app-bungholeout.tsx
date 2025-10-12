import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppBungholeOut({
    children, 
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (  
        <div>
            {children}
    </div> 
    );
}
