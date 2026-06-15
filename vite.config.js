import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  const vercelUrl = process.env.VERCEL_URL;
  const appUrl = vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000';

  return {
    plugins: [
      react(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(/__APP_URL__/g, appUrl);
        },
      },
    ],
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'icons';
            }
          }
        },
      },
    },
  };
});
