import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginAeo from './scripts/generate-aeo-files.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginAeo()],
  server: {
    host: 'localhost',
    port: 3100,
    historyApiFallback: true
  },
  preview: {
    host: 'localhost',
    port: 3100,
    historyApiFallback: true
  }
})
