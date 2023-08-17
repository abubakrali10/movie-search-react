import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    VitePluginFonts({
      google: {
        families: [
          'Roboto:400,500',
        ],
      },
    }),
    react(),
  ],
});