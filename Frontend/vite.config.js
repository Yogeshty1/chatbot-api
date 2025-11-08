import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default ({ mode }) => {
  // Load env file based on `mode` in the current directory and its parent directories
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    define: {
      'process.env': env
    },
    server: {
      port: 3000,
      open: true
    },
    preview: {
      port: 3000,
      open: true
    }
  });
};
