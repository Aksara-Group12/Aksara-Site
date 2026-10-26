# Rekomendasi deploy gratis

Situs ini hasil `astro build`: folder `dist/` statis, tanpa server Node di produksi. Hosting yang perlu Node hanya untuk **build**. Runtime cukup web server statis.

Butuh Node.js **>= 22.23.4** saat build (`package.json` → `engines.node`).

| Setting | Nilai |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 |
| Domain produksi | `https://aksaradev.my.id` |

Form kontak sudah ke [FormSubmit](https://formsubmit.co) (`aksaradeveloper2026@gmail.com`). Tidak perlu backend.

## Pilihan

### 1. Cloudflare Pages — rekomendasi

Cocok untuk domain `aksaradev.my.id`: SSL gratis, CDN, bandwidth longgar di plan Free.

1. Push repo ke GitHub.
2. [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: **Astro**.
4. Build command: `npm run build`. Output: `dist`.
5. Environment variable: `NODE_VERSION` = `22`.
6. Custom domain: tambahkan `aksaradev.my.id` di tab Custom domains, lalu arahkan nameserver domain ke Cloudflare (atau CNAME kalau DNS tetap di registrar).

### 2. Netlify

Paling cepat kalau repo sudah di GitHub.

1. [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Site settings → Environment variables → `NODE_VERSION` = `22`.
4. Domain management → Add domain → `aksaradev.my.id`, ikuti DNS yang diminta Netlify.

### 3. Vercel

1. [vercel.com/new](https://vercel.com/new) → import repo.
2. Framework terdeteksi Astro. Output `dist` otomatis.
3. Settings → General → Node.js Version: **22.x**.
4. Settings → Domains → tambah `aksaradev.my.id`.

### 4. GitHub Pages

Gratis, tapi domain custom dan path agak ribet. Pakai ini hanya kalau tidak mau akun hosting lain.

1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. Tambah workflow `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. Custom domain di Settings → Pages. CNAME `aksaradev.my.id` ke `<user>.github.io`.

## Sebelum go-live

1. Pastikan `url` di `src/data/site.ts` sama dengan domain yang benar-benar dipakai. Nilai ini jadi canonical, Open Graph, JSON-LD, dan sitemap. `astro.config.mjs` mengimpor dari situ.
2. Samakan baris `Sitemap:` di `public/robots.txt` kalau domain berubah.
3. Jangan buka `dist/index.html` lewat `file://`. Asset memakai path absolut (`/_astro/...`), CSS pecah. Preview lokal: `npm run preview`.
4. Setelah deploy, cek `/`, `/layanan`, `/portfolio`, `/tentang`, `/kontak`, dan `/sitemap-index.xml`.
5. Form kontak: submit sekali, lalu konfirmasi email aktivasi dari FormSubmit.
