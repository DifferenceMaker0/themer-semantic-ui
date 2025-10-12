import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [
        laravel({
            input: ['src/cshop/js/jquery.min.js', 'resources/css/app.css', 'resources/css/main.css', 'resources/js/app.tsx', 'src/cshop/js/contact-form.js', 'src/cshop/js/main.js', 'src/cshop/js/materialize.min.js', 'resources/css/custom.css'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
