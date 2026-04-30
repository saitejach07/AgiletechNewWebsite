import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    proxy: {
      '/npi': {
        target: 'https://npiregistry.cms.hhs.gov',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/npi/, ''),
      },
    },
  },
})