import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/portfolio-2026/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
