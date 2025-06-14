import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,           // Automatically open the report
          filename: 'stats.html',
          gzipSize: true,
          brotliSize: true,
        })
      ],
       external: [
        'react',
        'react-dom/client'
       ],
       output: {
        globals: {
          react: 'React',
          'react-dom/client': 'ReactDOM.client',
        },
      },
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})