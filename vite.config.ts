import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs'; // Assurez-vous d'importer fs

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-FO56G4OD.js'],
  },
  server: {
    https: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://api-hermes.yoannrouquie.fr',
        changeOrigin: true,
        secure: true,
        ws: true, 
      },
    },
  },
});
