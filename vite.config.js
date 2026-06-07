import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    cssTarget: 'es2022',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Logika pemecahan aset vendor agar bundle tidak menumpuk dalam satu file
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
