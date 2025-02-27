import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Ensure this matches your GitHub repository or deployment subpath
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist', // Explicitly set output directory
  },
})
