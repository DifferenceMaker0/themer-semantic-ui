import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import BungholeOut from '@/layouts/bungholeout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bunghole',
        href: dashboard().url,
    },
];

export default function Bunghole() {
  return (
    <BungholeOut breadcrumbs={breadcrumbs}>
      <Head title="Bunghole" />
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="relative aspect-video overflow-hidden rounded-xl border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
            <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border">
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            </div>
        </div>
    </BungholeOut>
    );
} 