# Aksara Developer — Company Profile

Situs company profile untuk Aksara Developer, software house yang melayani UMKM dan startup Indonesia. Dibangun dengan Astro dan Tailwind CSS, output statis murni.

## Stack

| Bagian | Teknologi |
| --- | --- |
| Framework | Astro 7 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Bahasa | TypeScript |
| SEO | `@astrojs/sitemap`, JSON-LD `ProfessionalService` |
| Deploy | Static hosting apa pun |

## Kebutuhan

- Node.js **>= 22.23.4** (dibatasi di `package.json` → `engines.node`)
- npm 10+

Kalau `node -v` menampilkan versi di bawah 22, kemungkinan ada Node lain yang lebih dulu di `PATH` (misalnya dari Laragon). Cek dengan:

```powershell
where.exe node
```

Pastikan `C:\Program Files\nodejs\node.exe` muncul paling atas.

## Perintah

```sh
npm install       # pasang dependensi
npm run dev       # dev server di http://localhost:4321
npm run build     # build produksi ke ./dist/
npm run preview   # preview hasil build
```

## Struktur

```text
src/
├── components/          17 komponen UI
├── data/                semua konten terpusat di sini
│   ├── site.ts          identitas, kontak, sosial, statistik, navigasi
│   ├── services.ts      4 layanan + harga awal, timeline, deliverables
│   ├── projects.ts      1 studi kasus live + preview screenshot, stack
│   ├── content.ts       testimoni, prinsip, alur proses, FAQ
│   └── stack.ts         daftar tech stack
├── layouts/
│   └── Base.astro       shell HTML, SEO meta, JSON-LD, reveal on scroll
├── pages/
│   ├── index.astro
│   ├── layanan.astro
│   ├── portfolio/index.astro
│   ├── tentang.astro
│   └── kontak.astro
└── styles/global.css    design token + kelas utilitas
```

## Mengubah Konten

Hampir semua teks ada di `src/data/`, bukan di komponen. Alur yang paling sering dipakai:

- **Ganti nomor WhatsApp / email / sosial media** → `src/data/site.ts`
- **Tambah layanan** → `src/data/services.ts`
- **Tambah studi kasus** → `src/data/projects.ts`. Kartu portfolio otomatis menampilkan preview dan tombol ke website live
- **Ubah testimoni / FAQ / alur proses** → `src/data/content.ts`
- **Ubah tech stack** → `src/data/stack.ts`

Saat ini 5 halaman: home, layanan, portfolio, tentang, kontak. Untuk preview, simpan screenshot 1280×800 (rasio 16:10) di `public/preview/` lalu isi `url`, `domain`, dan `preview` di `projects.ts`.

## Design Token

Ada di `src/styles/global.css`:

```css
--color-ink-950: #05080d;   /* background utama */
--color-fog-200: #cfd8e6;   /* teks utama */
--color-lime-400: #c4f24a;  /* aksen utama */
--color-cyan-400: #62d9f0;
--color-violet-400: #9b8cff;
--font-sans: "Inter", ...
--font-mono: "JetBrains Mono", ...
```

Kelas komponen yang bisa dipakai ulang: `.shell`, `.eyebrow`, `.card`, `.btn`, `.chip`, `.grid-lines`, `.glow`, `.reveal`.

## Domain

Domain produksi diatur di satu tempat: `url` pada `src/data/site.ts`. Nilai ini dipakai untuk canonical URL, Open Graph, JSON-LD, dan sitemap. `astro.config.mjs` mengimpor nilai yang sama, jadi tidak perlu diubah di dua tempat.

Kalau domain berubah, `public/robots.txt` juga perlu disesuaikan pada baris `Sitemap:`.

## Deploy

Build menghasilkan folder `dist/` statis, tanpa server Node.

**Vercel / Netlify**

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22

**Hosting statis lain (cPanel, Nginx, S3)**

Upload isi `dist/` ke document root. Situs memakai path absolut (`/_astro/...`), jadi harus disajikan lewat web server — jangan dibuka langsung dengan `file://`.

## Aset

- `public/favicon.svg`, `public/favicon.ico`
- `public/og.png` — 1200×630, dipakai untuk Open Graph dan Twitter Card
- `public/robots.txt`

## Status Konten

Data klien, testimoni, nama tim, dan angka statistik di `src/data/` masih berupa contoh. Ganti dengan data asli sebelum situs dipublikasikan.
