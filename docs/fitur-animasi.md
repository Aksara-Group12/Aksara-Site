# Fitur animasi — lokasi kode per halaman

Semua animasi situs ini **bukan library React**. Mesinnya satu file TypeScript plus CSS. Halaman cuma menempelkan class atau atribut.

## File yang mengatur semua halaman

| File | Fungsi |
| --- | --- |
| `src/scripts/motion.ts` | Scroll reveal, angka naik, progress bar, parallax, tirai pindah halaman |
| `src/styles/global.css` | Tampilan animasi: `.reveal`, `.page-veil`, `.service-rail`, `.marquee`, `.glow-drift` |
| `src/layouts/Base.astro` | Memuat `motion.ts`, progress bar, tirai. Dipakai semua halaman |

`Base.astro` baris 96–103: markup tirai (`#page-veil`).
`Base.astro` baris 94–96: `<script> import '../scripts/motion'`.
`motion.ts` baris 144–166: logika tirai (`astro:before-preparation`, `astro:after-swap`).
`global.css` baris 580–655: durasi masuk (0,72 detik) dan keluar (1,05 detik).

Kalau pengguna mematikan animasi di sistem (`prefers-reduced-motion`), tirai, marquee, dan drift dimatikan di `global.css` baris 463–480.

## Per halaman

### Beranda — `src/pages/index.astro`

Halaman ini hanya merangkai komponen. Animasi ada di komponen di bawah.

| Yang terlihat | Komponen | Cara mematikannya |
| --- | --- | --- |
| Teks hero masuk bertahap | `src/components/Hero.astro` baris 23, atribut `data-hero` | Hapus `data-hero` |
| Angka 32+, 94%, 4 menghitung | `Hero.astro` baris 62, `data-count` | Hapus `data-count` dan `data-suffix` |
| Kartu studi kasus bergeser pelan saat scroll | `Hero.astro` baris 76, `data-parallax="-0.045"` | Hapus `data-parallax` |
| Cahaya kanan hero naik-turun | `Hero.astro` baris 19, class `glow-drift` | Hapus `glow-drift` |
| Logo teknologi berjalan pelan, satu baris tanpa kartu | `src/components/TechStack.astro`, class `marquee marquee--tech` | Hapus class `marquee`, atau ubah daftar di `src/data/techLogos.ts` |
| Kartu layanan melebar saat diklik (akordeon ada tombol "Selengkapnya") | `src/components/ServicesGrid.astro`, class `service-rail`, logika klik di `<script>` bawah file | CSS-nya di `global.css`, cari `.service-rail`; ganti aktif pertama lewat atribut `data-active` |
| Kartu portfolio naik saat discroll | `src/components/FeaturedWork.astro` baris 30, class `reveal` | Hapus class `reveal` |
| Kartu testimoni naik saat discroll | `src/components/Testimonials.astro` baris 22, class `reveal` | Hapus class `reveal` |
| Poin "kenapa Aksara" naik saat discroll | `src/components/WhyUs.astro` baris 21, class `reveal` | Hapus class `reveal` |

### Layanan — `src/pages/layanan.astro`

Baris 41: `class="card reveal ..."`. Setiap kartu layanan naik saat masuk viewport.

### Portfolio — `src/pages/portfolio/index.astro`

Baris 47: `class="card reveal ..."`. Kartu proyek naik saat discroll.

Halaman detail `src/pages/portfolio/[slug].astro` tidak punya animasi khusus. Yang tetap jalan: progress bar dan tirai pindah halaman, karena keduanya ada di `Base.astro`.

### Tentang — `src/pages/tentang.astro`

Tidak ada class animasi sendiri. Hanya progress bar dan tirai dari layout.

### Kontak — `src/pages/kontak.astro`

Tidak ada class animasi sendiri. Script di baris 182–191 hanya mengubah tombol jadi "Mengirim…" saat form dikirim. Bukan animasi scroll.

## Class yang bisa ditempel di elemen mana pun

Tulis di class atau atribut elemen. Mesinnya sudah di `motion.ts` dan `global.css`.

| Class / atribut | Efek |
| --- | --- |
| `reveal` | Naik + fade saat masuk layar. Delay otomatis per saudara di parent yang sama |
| `data-reveal="left"` | Masuk dari kiri |
| `data-reveal="right"` | Masuk dari kanan |
| `data-reveal="scale"` | Membesar pelan |
| `data-hero` | Anak langsungnya masuk berurutan saat halaman dibuka (maks. 5) |
| `data-count="32" data-suffix="+"` | Angka menghitung dari 0 |
| `data-parallax="-0.045"` | Geser vertikal pelan saat scroll. Jangan dipakai di elemen yang sudah punya `translate` Tailwind |
| `glow-drift` | Naik-turun pelan, untuk cahaya dekoratif |
