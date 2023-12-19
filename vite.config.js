import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Hotel/',
  plugins: [vue()],
      alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url))
    }

})
