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
          manualChunks: {
            vendor: ['react', 'react-dom'],
            icons: ['lucide-react'],
          },
        },
      },
    },
  };
});
