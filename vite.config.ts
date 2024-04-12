import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-FO56G4OD.js'],
  },

  server: {
    https: false,
    port: 5173,

    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  alias: [
    {
      find: '../fonts',
      replacement: path.resolve(__dirname, './src/assets/fonts/'),
    },
  ],
});
