import { jsx as _jsx } from "react/jsx-runtime";
import '../css/app.css';
import '../css/main.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
const appName = import.meta.env.VITE_APP_NAME || 'Docudom';
createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(_jsx(App, { ...props }));
    },
    progress: {
        color: '#4B5563',
    },
});
// This will set light / dark mode on load...
initializeTheme();
//# sourceMappingURL=app.js.map