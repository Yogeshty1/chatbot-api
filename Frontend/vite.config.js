import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      if (key.startsWith('VITE_')) {
        prev[`process.env.${key}`] = JSON.stringify(val);
      }
      return prev;
    },
    {}
  );

  return defineConfig({
    plugins: [react()],
    define: envWithProcessPrefix,
    server: {
      port: 3000,
      open: true,
      cors: true,
    },
    preview: {
      port: 3000,
      open: true
    },
    base: '/', // Ensure base is set to root
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor and app code
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  });
};