import {
    BlogSidebarGroup,
    BlogSidebarGroupLabel,
    BlogSidebarMenu,
    BlogSidebarMenuButton,
    BlogSidebarMenuItem,
} from './ui/bsidebar';
import { type BNavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function BNavMain({ items = [] }: { items: BNavItem[] }) {
    const page = usePage();
    return (
        <BlogSidebarGroup className="px-2 py-0">
            <BlogSidebarGroupLabel>Platform</BlogSidebarGroupLabel>
            <BlogSidebarMenu>
                {items.map((item) => (
                    <BlogSidebarMenuItem key={item.title}>
                        <BlogSidebarMenuButton
                            asChild
                            isActive={page.url.startsWith(
                                typeof item.href === 'string'
                                    ? item.href
                                    : item.href.url,
                            )}
                            tooltip={{ children: item.title }}
                        >
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </BlogSidebarMenuButton>
                    </BlogSidebarMenuItem>
                ))}
            </BlogSidebarMenu>
        </BlogSidebarGroup>
    );
}
