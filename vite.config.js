import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  // Vercel menyediakan environment variable VERCEL_URL secara otomatis saat proses build.
  // Jika VERCEL_URL tidak ada (misalnya saat dijalankan di lokal), kita gunakan URL default.
  const vercelUrl = process.env.VERCEL_URL;
  const appUrl = vercelUrl ? `https://${vercelUrl}` : 'https://bantuan.kredione.com';

  return {
    plugins: [
      react(),
      // Plugin kustom untuk mengganti teks dinamis di index.html
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
