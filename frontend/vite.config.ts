import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { svgSpritePlugin } from './vite-plugins/svg-sprite.ts';


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
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
