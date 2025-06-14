import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/App.tsx'), // or index.jsx
      name: 'checkout-sdk',
      fileName: (format) => `index.${format}.js`,
    },
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