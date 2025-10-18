import { Icon } from '@/components/icon';
import {
    BlogSidebarGroup,
    BlogSidebarGroupContent,
    BlogSidebarMenu,
    BlogSidebarMenuButton,
    BlogSidebarMenuItem,
} from './ui/bsidebar';
import { type BNavItem } from '@/types';
import { type ComponentPropsWithoutRef } from 'react';

export function BNavFooter({
    items,
    className,
    ...props
}: ComponentPropsWithoutRef<typeof BlogSidebarGroup> & {
    items: BNavItem[];
}) {
    return (
        <BlogSidebarGroup
            {...props}
            className={`group-data-[collapsible=icon]:p-0 ${className || ''}`}
        >
            <BlogSidebarGroupContent>
                <BlogSidebarMenu>
                    {items.map((item) => (
                        <BlogSidebarMenuItem key={item.title}>
                            <BlogSidebarMenuButton
                                asChild
                                className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
                            >
                                <a
                                    href={
                                        typeof item.href === 'string'
                                            ? item.href
                                            : item.href.url
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.icon && (
                                        <Icon
                                            iconNode={item.icon}
                                            className="h-5 w-5"
                                        />
                                    )}
                                    <span>{item.title}</span>
                                </a>
                            </BlogSidebarMenuButton>
                        </BlogSidebarMenuItem>
                    ))}
                </BlogSidebarMenu>
            </BlogSidebarGroupContent>
        </BlogSidebarGroup>
    );
}
