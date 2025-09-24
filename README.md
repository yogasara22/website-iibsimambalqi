# Website Pesantren

Website landing page untuk pesantren menggunakan Next.js dan Netlify CMS.

## Fitur

- Landing page modern dan responsif
- Panel admin dengan Netlify CMS
- Halaman berita dan artikel
- Galeri foto
- Informasi program dan fasilitas
- Halaman kontak

## Teknologi

- Next.js - Framework React untuk SSR dan SSG
- Netlify CMS - Headless CMS untuk manajemen konten
- Tailwind CSS - Framework CSS untuk styling
- Markdown - Format konten untuk artikel dan halaman

## Cara Menjalankan

1. Clone repository
2. Install dependencies:
   ```
   npm install
   ```
3. Jalankan development server:
   ```
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser

## Struktur Project

- `public/` - Aset statis dan konfigurasi CMS
- `src/components/` - Komponen React
- `src/pages/` - Halaman Next.js
- `src/lib/` - Utilitas dan fungsi helper
- `src/styles/` - File CSS dan styling
- `src/content/` - Konten markdown dari CMS

## Deployment

Website ini dapat di-deploy ke Netlify dengan mudah menggunakan konfigurasi `netlify.toml` yang sudah disediakan.