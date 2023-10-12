import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin(),
        vue()
    ],
    build: {
        lib: {
            entry: './src/component.vue',
            fileName: 'component',
            formats:['es']
        },
        rollupOptions: {
            external: ['vue']
        }
    }
})