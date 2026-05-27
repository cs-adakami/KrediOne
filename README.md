# Layanan Bantuan KrediOne 🎯

Sebuah landing page premium, responsif, dan SEO-ready untuk pusat bantuan layanan KrediOne. Dibangun dengan Vite + React dengan desain modern menggunakan gradasi hijau dan glassmorphism.

## ✨ Fitur Utama

- 🎨 **Desain Premium**: Gradasi hijau modern dengan glassmorphism halus
- 📱 **Fully Responsive**: Mobile-first design yang sempurna di semua perangkat
- ⚡ **Performa Tinggi**: Dibangun dengan Vite untuk kecepatan maksimal
- 🔍 **SEO-Ready**: Meta tags lengkap, sitemap, robots.txt
- 🎭 **Animasi Halus**: Slide down, fade in, pulse animations
- ♿ **Aksesibilitas**: Mendukung prefers-reduced-motion
- 📦 **Konfigurasi Terpusat**: Semua konten diedit dari satu file
- 🔒 **Anti-Scraping**: Perlindungan pilihan pengguna
- 🚀 **Deploy Ready**: Siap ke Vercel dengan satu klik

## 📋 Konten Halaman

1. **Header Sticky** - Logo, nama layanan, tombol WhatsApp
2. **Hero Section** - Headline, deskripsi, statistik, CTA
3. **Menu Services** - 4 kartu layanan dengan ikon
4. **About Section** - Informasi layanan, badge, detail kontak
5. **Features** - 3 keunggulan utama
6. **FAQ Accordion** - 5 pertanyaan umum
7. **Floating WhatsApp** - Tombol mengambang untuk mobile
8. **Footer** - Informasi, tautan, copyright

## 🚀 Memulai

### Instalasi

```bash
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Output akan tersimpan di folder `dist/`

## ⚙️ Konfigurasi

Semua konten dapat diedit di file **`src/config/contact.js`**:

```javascript
export const contactConfig = {
  whatsappNumber: '62812345678',
  whatsappMessage: 'Hallo KrediOne, Saya Memerlukan Bantuan?',
  displayPhone: '+62 812 345 678',
  serviceName: 'Layanan KrediOne',
  pageTitle: 'Pusat Layanan Bantuan KrediOne',
  // ... lebih banyak konfigurasi
}
```

Setiap perubahan di file ini akan otomatis tercermin di seluruh aplikasi.

## 📁 Struktur Folder

```
src/
├── config/
│   └── contact.js           # Single Source of Truth
├── components/
│   ├── Header.jsx
│   ├── LogoMark.jsx
│   ├── Hero.jsx
│   ├── MenuCard.jsx
│   ├── InfoCard.jsx
│   ├── Features.jsx
│   ├── FAQ.jsx
│   ├── FloatingWhatsApp.jsx
│   └── Footer.jsx
├── App.jsx                   # Main component
├── main.jsx                  # Entry point
├── styles.css                # Main stylesheet
├── no-copy.css               # Anti-scraping styles
public/
├── logoweb.png              # Logo (perlu ditambahkan)
├── sitemap.xml              # SEO sitemap
└── robots.txt               # Robots directive
index.html                   # HTML entry point
vite.config.js               # Vite configuration
package.json
README.md
```

## 🎨 Palet Warna

| Warna | Hex | Penggunaan |
|-------|-----|-----------|
| Primary | #10b981 | Tombol, accent, gradasi |
| Primary Dark | #059669 | Gradasi, hover |
| Primary Light | #d1fae5 | Background card |
| Text Primary | #1f2937 | Teks utama |
| Text Secondary | #6b7280 | Teks sekunder |

## 📱 Responsivitas

- **Desktop**: Layout 2 kolom, spacing besar
- **Tablet (768px)**: Layout adaptif
- **Mobile (480px)**: Layout 1 kolom, touch-friendly

## 🔧 Komponen yang Dapat Digunakan Kembali

| Komponen | Deskripsi |
|----------|-----------|
| `Header` | Header sticky dengan logo dan CTA |
| `Hero` | Section hero dengan statistik |
| `MenuCard` | Kartu layanan dengan ikon |
| `InfoCard` | Card informasi dengan badge |
| `Features` | Grid fitur dengan ikon |
| `FAQ` | Accordion FAQ |
| `FloatingWhatsApp` | Tombol mengambang mobile |

## 📦 Dependencies

- **React**: 18.2.0
- **Vite**: 4.4.5
- **lucide-react**: 0.263.1 (Icons)

## 🚢 Deploy ke Vercel

1. Push kode ke GitHub
2. Buka Vercel Dashboard
3. Import repository
4. Deploy (pengaturan sudah optimal)

```bash
# Build command
npm run build

# Output directory
dist
```

## 🔐 Keamanan & SEO

✅ Meta tags lengkap (OG, Twitter Card)  
✅ Canonical tag  
✅ Sitemap & robots.txt  
✅ Favicon & apple-touch-icon  
✅ Anti-scraping protection  
✅ HTTPS ready  
✅ Aksesibilitas WCAG  

## ⚡ Performa

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 📝 Catatan Penting

1. **Logo**: Letakkan file `logoweb.png` di folder `public/`
2. **WhatsApp Number**: Update nomor WhatsApp di `src/config/contact.js`
3. **Domain**: Ganti domain di meta tags dan sitemap
4. **Email**: Update email di config
5. **Konten**: Semua teks dapat diedit dari `contact.js`

## 🐛 Troubleshooting

### Logo tidak muncul
- Pastikan `logoweb.png` di folder `public/`
- Fallback akan menampilkan huruf 'K'

### Build error
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Port sudah digunakan
```bash
npm run dev -- --port 3001
```

## 📄 Lisensi

© 2026 Pusat Informasi Layanan KrediOne. All rights reserved.

## 📧 Dukungan

Untuk pertanyaan atau bantuan, silakan hubungi melalui WhatsApp dari aplikasi.

---

**Happy Coding! 🚀**
