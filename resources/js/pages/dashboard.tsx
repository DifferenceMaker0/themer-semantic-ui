import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard, themer, petstore } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Palette, Store, Settings, BarChart3 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                {/* Welcome Section */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Welcome to your application dashboard. Use the sidebar to navigate and customize your theme.
                    </p>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="cursor-pointer transition-colors hover:bg-accent/50">
                        <Link href={themer()} className="block">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Theme Switcher</CardTitle>
                                <Palette className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">4 Themes</div>
                                <p className="text-xs text-muted-foreground">
                                    Customize your application appearance
                                </p>
                            </CardContent>
                        </Link>
                    </Card>

                    <Card className="cursor-pointer transition-colors hover:bg-accent/50">
                        <Link href={petstore()} className="block">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pet Store</CardTitle>
                                <Store className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">API Demo</div>
                                <p className="text-xs text-muted-foreground">
                                    Laravel + React integration example
                                </p>
                            </CardContent>
                        </Link>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">System Status</CardTitle>
                            <BarChart3 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">Online</div>
                            <p className="text-xs text-muted-foreground">
                                All systems operational
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Area */}
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Theme Integration</CardTitle>
                            <CardDescription>
                                The sidebar now includes a theme switcher that applies dynamic CSS variables
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium">Features:</h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Collapsible theme selector in sidebar</li>
                                    <li>• Persistent theme selection</li>
                                    <li>• SASS-powered dynamic variables</li>
                                    <li>• Radix UI integration</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Navigation</CardTitle>
                            <CardDescription>
                                Enhanced sidebar with theme controls and quick access
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="relative aspect-video overflow-hidden rounded-lg border">
                                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Settings className="h-8 w-8 text-muted-foreground" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
