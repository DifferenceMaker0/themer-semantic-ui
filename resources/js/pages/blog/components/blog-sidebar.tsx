import { BNavFooter } from './bnav-footer';
import { BNavMain } from './bnav-main';
import { BNavUser } from './bnav-user';
import {
    BSidebar,
    BlogSidebarContent,
    BlogSidebarFooter,
    BlogSidebarHeader,
    BlogSidebarMenu,
    BlogSidebarMenuButton,
    BlogSidebarMenuItem,
} from './ui/bsidebar';
import { blog } from '@/routes';
import { type BNavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Palette, Users, Calendar, Clock, MessageSquare, DollarSign, BarChart3, FolderOpen } from 'lucide-react';
import BlogLogo from './blog-logo';

const mainNavItems: BNavItem[] = [
    {
        title: 'Blog',
        href: blog(),
        icon: LayoutGrid,
    },
    {
        title: 'Articles',
        href: '/blog/articles',
        icon: FolderOpen,
    },
    {
        title: 'User Dashboard',
        href: '/dashboard',
        icon: Users,
    },
    {
        title: 'Studio Manager',
        href: '/studio-manager',
        icon: Clock,
    },
    {
        title: 'Themer Dashboard',
        href: '/themer-dashboard',
        icon: Palette,
    },
];

const footerNavItems: BNavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/DifferenceMaker0/themer-semantic-ui',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'http://localhost:8000/docs',
        icon: BookOpen,
    },
];

export function BlogSidebar() {
    return (
        <BSidebar collapsible="icon" variant="inset">
            <BlogSidebarHeader>
                <BlogSidebarMenu>
                    <BlogSidebarMenuItem>
                        <BlogSidebarMenuButton size="lg" asChild>
                            <Link href={blog()} prefetch>
                                <BlogLogo />
                            </Link>
                        </BlogSidebarMenuButton>
                    </BlogSidebarMenuItem>
                </BlogSidebarMenu>
            </BlogSidebarHeader>

            <BlogSidebarContent>
                 <BNavMain items={mainNavItems} />
            </BlogSidebarContent>

            <BlogSidebarFooter>
                 <BNavFooter items={footerNavItems} className="mt-auto" />
                 <BNavUser />
            </BlogSidebarFooter>
        </BSidebar>
    );
}
