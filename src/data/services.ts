export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  number: string;
  icon: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string;
  features: ServiceFeature[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  stack: string[];
}

export const services: Service[] = [
  {
    slug: 'website-bisnis',
    number: '01',
    icon: 'layout',
    title: 'Website Bisnis & Landing Page',
    shortTitle: 'Website Bisnis',
    tagline: 'Website yang bekerja sebagai sales, bukan sekadar kartu nama digital.',
    summary: 'Company profile, landing page kampanye, dan katalog produk yang cepat, rapi, dan siap bersaing di pencarian.',
    description:
      'Banyak bisnis punya website, tapi tidak menghasilkan apa-apa. Kami mulai dari pertanyaan sederhana: apa yang harus dilakukan pengunjung setelah mendarat di halaman Anda? Dari situ kami susun struktur, copy, dan alur yang mengarahkan orang untuk menghubungi Anda.',
    features: [
      {
        title: 'Struktur & copy yang menjual',
        description: 'Kami tulis ulang pesan bisnis Anda jadi bahasa yang dipahami calon pembeli, bukan jargon industri.',
      },
      {
        title: 'Cepat di jaringan Indonesia',
        description: 'Target skor PageSpeed di atas 90 dengan ukuran halaman di bawah 500KB. Penting untuk pengunjung yang pakai kuota.',
      },
      {
        title: 'SEO dasar yang benar',
        description: 'Metadata, sitemap, structured data, dan heading yang sesuai kaidah. Bukan trik, tapi fondasi.',
      },
      {
        title: 'Anda bisa edit sendiri',
        description: 'Konten disimpan di markdown atau CMS ringan, jadi update teks dan gambar tidak perlu tunggu developer.',
      },
    ],
    deliverables: ['Desain custom (bukan template)', 'Responsive mobile-first', 'Domain + hosting 1 tahun', 'Google Analytics & Search Console', 'Dokumentasi pengelolaan'],
    timeline: '2–4 minggu',
    startingPrice: 'Rp 200 ribu',
    stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'Cloudflare Pages'],
  },
  {
    slug: 'aplikasi-web',
    number: '02',
    icon: 'app',
    title: 'Aplikasi Web & Sistem Internal',
    shortTitle: 'Aplikasi Web',
    tagline: 'Ganti tumpukan spreadsheet dan chat WhatsApp dengan satu sistem yang jelas.',
    summary: 'Dashboard, POS, sistem antrean, portal B2B, dan alur kerja operasional lain yang disesuaikan dengan cara bisnis Anda berjalan.',
    description:
      'Sistem internal yang baik menghilangkan pekerjaan berulang, bukan menambah beban. Kami memetakan alur kerja Anda yang sebenarnya, cari titik yang paling bocor, lalu bangun modul yang menyelesaikannya satu per satu.',
    features: [
      {
        title: 'Dimulai dari alur kerja nyata',
        description: 'Workshop singkat dengan orang yang setiap hari menjalankan prosesnya. Bukan asumsi.',
      },
      {
        title: 'Hak akses bertingkat',
        description: 'Sales, gudang, keuangan, dan owner melihat hal berbeda. Setiap perubahan tercatat siapa dan kapan.',
      },
      {
        title: 'Laporan yang bisa langsung dipakai',
        description: 'Export Excel/PDF, grafik ringkas, dan rekap otomatis yang menghemat waktu tutup buku.',
      },
      {
        title: 'Integrasi yang dibutuhkan',
        description: 'WhatsApp Gateway, payment gateway, printer thermal, atau API pihak ketiga lain yang sudah Anda pakai.',
      },
    ],
    deliverables: ['Analisis alur kerja & dokumen scope', 'Desain UI tiap modul', 'Sistem siap produksi', 'Migrasi data lama', 'Pelatihan tim Anda'],
    timeline: '6–12 minggu',
    startingPrice: 'Rp 750 ribu',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    slug: 'aplikasi-mobile',
    number: '03',
    icon: 'phone',
    title: 'Aplikasi Mobile Android & iOS',
    shortTitle: 'Aplikasi Mobile',
    tagline: 'Satu basis kode, dua platform, performa native.',
    summary: 'Aplikasi untuk pelanggan atau tim lapangan, lengkap dengan mode offline dan sinkronisasi otomatis.',
    description:
      'Untuk tim lapangan, sinyal sering hilang di tempat paling penting. Kami membangun aplikasi yang tetap berfungsi penuh tanpa internet, lalu menyinkronkan data begitu koneksi kembali. Tidak ada catatan hilang.',
    features: [
      {
        title: 'Offline-first',
        description: 'Data tersimpan di perangkat, sinkronisasi dua arah dengan resolusi konflik otomatis.',
      },
      {
        title: 'Peforma native',
        description: 'Flutter dengan rendering engine modern. Animasi halus, hemat baterai, tidak lemot di HP kelas menengah.',
      },
      {
        title: 'Distribusi resmi',
        description: 'Kami bantu proses rilis ke Play Store dan App Store, termasuk requirement dan review guidelines.',
      },
      {
        title: 'Update tanpa drama',
        description: 'Arsitektur modular supaya penambahan fitur berikutnya tidak perlu bongkar ulang.',
      },
    ],
    deliverables: ['Desain mobile-native', 'Build APK & iOS', 'Proses submit ke store', 'Backend API & dokumentasi', 'Panduan rilis versi'],
    timeline: '8–14 minggu',
    startingPrice: 'Rp 1,5 juta',
    stack: ['Flutter', 'Dart', 'REST API', 'SQLite', 'Firebase'],
  },
  {
    slug: 'perawatan-website',
    number: '04',
    icon: 'shield',
    title: 'Perawatan & Dukungan Bulanan',
    shortTitle: 'Perawatan',
    tagline: 'Website yang dibiarkan tanpa perawatan adalah aset yang menyusut.',
    summary: 'Update keamanan, backup harian, monitoring uptime, dan kuota jam kerja tiap bulan untuk perubahan kecil.',
    description:
      'Setelah proyek selesai, kebanyakan vendor hilang. Kami tidak. Paket perawatan bulanan memastikan situs Anda tetap aman, cepat, dan terus diperbarui sesuai kebutuhan bisnis yang berubah.',
    features: [
      {
        title: 'Backup harian otomatis',
        description: 'Retensi 30 hari, disimpan di lokasi berbeda dari server produksi.',
      },
      {
        title: 'Monitoring uptime 24/7',
        description: 'Notifikasi dalam 1 menit bila situs down, dengan tindak lanjut tim kami.',
      },
      {
        title: 'Update keamanan',
        description: 'Patch rutin untuk framework, dependensi, dan sertifikat SSL tanpa downtime.',
      },
      {
        title: 'Kuota jam kerja',
        description: 'Bebas dipakai untuk perubahan konten, penambahan halaman, atau perbaikan kecil.',
      },
    ],
    deliverables: ['Backup harian & retensi 30 hari', 'Monitoring uptime + alert', 'Update keamanan bulanan', 'Laporan performa bulanan', 'Kuota jam kerja sesuai paket'],
    timeline: 'Bulanan',
    startingPrice: 'Rp 150 ribu/bulan',
    stack: ['UptimeRobot', 'Cloudflare', 'GitHub Actions', 'Sentry'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
