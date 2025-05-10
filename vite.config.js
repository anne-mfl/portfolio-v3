import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      layout: "/src/layout",
      assets: "/src/assets",
    },
  },
})
