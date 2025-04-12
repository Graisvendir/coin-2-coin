import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import { svgSpritePlugin } from './vite-plugins/svg-sprite.ts';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslintPlugin(),
        svgSpritePlugin({
            include: 'assets/sprite',
            output: {
                dir: 'public/assets',
                spriteName: 'icon-sprite.svg',
            },
        }),
    ],
    resolve: {
        alias: [
            { find: '~', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        ],
    },
});
