import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Link } from '@inertiajs/react';
import { Fragment } from 'react';

export function Breadcrumbs({
    breadcrumbs,
    items,
}: {
    breadcrumbs?: BreadcrumbItemType[];
    items?: BreadcrumbItemType[];
}) {
    // Support both breadcrumbs and items props for backward compatibility
    const breadcrumbItems = breadcrumbs || items || [];

    return (
        <>
            {breadcrumbItems.length > 0 && (
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumbItems.map((item, index) => {
                            const isLast = index === breadcrumbItems.length - 1;
                            return (
                                <Fragment key={index}>
                                    <BreadcrumbItem>
                                        {isLast ? (
                                            <BreadcrumbPage>
                                                {item.title}
                                            </BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink asChild>
                                                <Link href={item.href}>
                                                    {item.title}
                                                </Link>
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                    {!isLast && <BreadcrumbSeparator />}
                                </Fragment>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            )}
        </>
    );
}

// Export the type for use in pages
export type { BreadcrumbItem } from '@/types';