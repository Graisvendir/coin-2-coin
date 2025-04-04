import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin(),
        createSvgSpritePlugin({
            exportType: 'vue', // or 'react' or 'vue'
            include: '**/icons/*.svg',
        }),
    ],
    resolve: {
        alias: [
            { find: '~', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        ],
    },
});
