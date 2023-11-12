import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  vite: {
        server: {
            fs: {
                allow: [// search up for workspace root
        searchForWorkspaceRoot(process.cwd()),"C:/Users/hp/Documents/node_modules/@mdi/font/fonts/materialdesignicons-webfont.ttf"]
            }
        }
    }
})

