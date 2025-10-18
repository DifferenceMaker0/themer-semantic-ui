import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    BlogSidebarMenu,
    BlogSidebarMenuButton,
    BlogSidebarMenuItem,
    useBlogSidebar,
} from './ui/bsidebar';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';
import { useIsMobile } from '@/hooks/use-mobile';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { ChevronsUpDown } from 'lucide-react';

export function BNavUser() {
    const { auth } = usePage<SharedData>().props;
    const { state } = useBlogSidebar();
    const isMobile = useIsMobile();

    return (
        <BlogSidebarMenu>
            <BlogSidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <BlogSidebarMenuButton
                            size="lg"
                            className="group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent"
                            data-test="sidebar-menu-button"
                        >
                            <UserInfo user={auth.user} />
                            <ChevronsUpDown className="ml-auto size-4" />
                        </BlogSidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        align="end"
                        side={
                            isMobile
                                ? 'bottom'
                                : state === 'collapsed'
                                  ? 'left'
                                  : 'bottom'
                        }
                    >
                        <UserMenuContent user={auth.user} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </BlogSidebarMenuItem>
        </BlogSidebarMenu>
    );
}
