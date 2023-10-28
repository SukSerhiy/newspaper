import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@rollup/plugin-eslint';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }),
      enforce: 'pre',
    },
    react(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@redux': path.resolve(__dirname, './src/redux'),
      'assets': path.resolve(__dirname, './src/assets'),
      'services': path.resolve(__dirname, './src/services'),
      'pages': path.resolve(__dirname, './src/pages'),
      'enums': path.resolve(__dirname, './src/enums'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'components': path.resolve(__dirname, './src/components'),
    },
  },
});
