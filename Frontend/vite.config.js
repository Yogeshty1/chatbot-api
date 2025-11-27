import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    define: {
      // Only include Vite prefixed env vars
      ...Object.entries(env).reduce((acc, [key, val]) => {
        if (key.startsWith('VITE_')) {
          acc[`import.meta.env.${key}`] = JSON.stringify(val);
          // For backward compatibility
          acc[`process.env.${key}`] = JSON.stringify(val);
        }
        return acc;
      }, {})
    },
    server: {
      port: 3000,
      open: true,
      cors: true,
    },
    preview: {
      port: 3000,
      open: true
    },
    base: './', // Changed to relative path
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      minify: 'esbuild', // Changed from terser to esbuild for better performance
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor and app code
            vendor: ['react', 'react-dom'],
            // Add other large dependencies here
          },
          // Ensure consistent hashing for better caching
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      }
    }
  });
};