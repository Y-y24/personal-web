import { defineConfig } from 'vite';

export default defineConfig({
  base: '/personal-web/',
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});
