import type { Locale } from './i18n';

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

export const servicesId: Service[] = [
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
    slug: 'sistem-tertanam-iot',
    number: '04',
    icon: 'cpu',
    title: 'Sistem Tertanam atau Internet of Things (IoT)',
    shortTitle: 'Sistem Tertanam / IoT',
    tagline: 'Integrasi hardware pintar, sensor presisi, dan dashboard cloud untuk otomasi nyata.',
    summary: 'Pengembangan firmware mikrokontroler, akuisisi data sensor, kontrol aktuator, dan dashboard telemetri real-time.',
    description:
      'Solusi hardware terhubung untuk bisnis, industri, atau riset. Kami merancang firmware andal, rangkaian skematik yang stabil, serta sistem komunikasi cloud dua arah yang hemat daya dan siap bekerja di lapangan.',
    features: [
      {
        title: 'Firmware stabil & real-time',
        description: 'Pemrograman mikrokontroler (ESP32, STM32, Arduino) dengan protokol MQTT, HTTP, WebSocket, atau Modbus yang teruji.',
      },
      {
        title: 'Integrasi sensor & kontrol',
        description: 'Akuisisi data presisi tinggi dari sensor lingkungan, suhu, flow meter, hingga kontrol otomatis relay dan motor.',
      },
      {
        title: 'Dashboard monitoring & alert',
        description: 'Visualisasi grafik metrik real-time, log histori data, serta notifikasi instan via WhatsApp atau Telegram jika ada anomali.',
      },
      {
        title: 'Desain rangkaian handal',
        description: 'Penyusunan skematik, layout PCB, dan wiring yang aman dari gangguan kelistrikan industri serta hemat konsumsi daya.',
      },
    ],
    deliverables: [
      'Source code firmware & arsitektur modul',
      'Skematik rangkaian & panduan wiring',
      'Integrasi backend API / dashboard monitoring',
      'Pengujian fungsional unit & kalibrasi',
      'Dokumentasi teknis & panduan instalasi',
    ],
    timeline: '4–8 minggu',
    startingPrice: 'Rp 2 juta',
    stack: ['ESP32', 'STM32', 'C/C++', 'MQTT', 'Node.js', 'PostgreSQL', 'WebSockets'],
  },
  {
    slug: 'perawatan-website',
    number: '05',
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

export const servicesEn: Service[] = [
  {
    slug: 'website-bisnis',
    number: '01',
    icon: 'layout',
    title: 'Business Websites & Landing Pages',
    shortTitle: 'Business Website',
    tagline: 'Websites that perform as 24/7 sales engines, not static digital cards.',
    summary: 'Fast, elegant company profiles, campaign landing pages, and product catalogs engineered to rank and convert.',
    description:
      'Many businesses have websites that produce zero leads. We start with a foundational question: what specific action must a visitor take upon arriving? From there, we architect the layout, copy, and friction-free conversion paths to drive inquiries.',
    features: [
      {
        title: 'High-converting copy & layout',
        description: 'We rewrite your value proposition in clear customer language, ditching obscure industry jargon.',
      },
      {
        title: 'Engineered for speed',
        description: 'Targeting 90+ Google PageSpeed scores with asset payloads under 500KB for instant mobile loading.',
      },
      {
        title: 'Rigorous foundational SEO',
        description: 'Structured metadata, dynamic sitemaps, Open Graph, and semantic hierarchies for solid indexing.',
      },
      {
        title: 'Frictionless content editing',
        description: 'Content managed via Markdown or lightweight headless CMS so non-technical staff can publish easily.',
      },
    ],
    deliverables: ['Bespoke custom design', 'Mobile-first responsiveness', '1-year domain & fast cloud hosting', 'Google Analytics & Search Console', 'Admin handover guide'],
    timeline: '2–4 weeks',
    startingPrice: 'From Rp 200k',
    stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'Cloudflare Pages'],
  },
  {
    slug: 'aplikasi-web',
    number: '02',
    icon: 'app',
    title: 'Web Applications & Internal Systems',
    shortTitle: 'Web Applications',
    tagline: 'Replace scattered spreadsheets and chat groups with a unified, robust software system.',
    summary: 'Operational dashboards, POS, queue management, and B2B portals custom-tailored to your exact business workflows.',
    description:
      'Good internal systems eliminate repetitive bottlenecks rather than adding overhead. We map your actual operational steps, locate friction points, and engineer modular tools to solve them step by step.',
    features: [
      {
        title: 'Ground-up workflow mapping',
        description: 'Hands-on discovery workshops with team members running daily operations, eliminating false assumptions.',
      },
      {
        title: 'Role-based access controls',
        description: 'Fine-grained permissions for sales, warehouse, finance, and admins with comprehensive audit logs.',
      },
      {
        title: 'Actionable real-time reporting',
        description: 'One-click Excel/PDF exports, clear telemetry charts, and automated reconciliations that save hours.',
      },
      {
        title: 'Seamless API integrations',
        description: 'WhatsApp notifications, payment gateways, thermal printers, and third-party accounting APIs.',
      },
    ],
    deliverables: ['Workflow analysis & scope specification', 'UI module prototypes', 'Production-ready system', 'Legacy data migration', 'Team onboarding training'],
    timeline: '6–12 weeks',
    startingPrice: 'From Rp 750k',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    slug: 'aplikasi-mobile',
    number: '03',
    icon: 'phone',
    title: 'Mobile Applications (Android & iOS)',
    shortTitle: 'Mobile Apps',
    tagline: 'One clean codebase, dual platforms, native performance.',
    summary: 'Customer-facing apps or field team solutions complete with offline-first synchronization.',
    description:
      'Field personnel often face zero signal in critical locations. We build offline-first applications that operate smoothly without connectivity and sync reliably once signal returns.',
    features: [
      {
        title: 'Offline-first architecture',
        description: 'Local caching and 2-way background synchronization with conflict-resolution algorithms.',
      },
      {
        title: 'Fluid native performance',
        description: 'Built with Flutter for high framerates, low battery draw, and smooth responsiveness across all devices.',
      },
      {
        title: 'Store distribution support',
        description: 'End-to-end guidance through Google Play Store and Apple App Store review and publishing guidelines.',
      },
      {
        title: 'Modular scalability',
        description: 'Clean layered architecture ensuring future features can be shipped without rewrites.',
      },
    ],
    deliverables: ['Native-feel UX/UI design', 'Production APK & iOS builds', 'App Store submission assistance', 'API endpoints & documentation', 'Release guide'],
    timeline: '8–14 weeks',
    startingPrice: 'From Rp 1.5M',
    stack: ['Flutter', 'Dart', 'REST API', 'SQLite', 'Firebase'],
  },
  {
    slug: 'sistem-tertanam-iot',
    number: '04',
    icon: 'cpu',
    title: 'Embedded Systems & IoT Solutions',
    shortTitle: 'Embedded / IoT',
    tagline: 'Smart hardware integration, precision telemetry, and cloud automation.',
    summary: 'Microcontroller firmware development, sensor data acquisition, actuator control, and real-time dashboards.',
    description:
      'Connected hardware solutions for commercial, industrial, or research requirements. We engineer robust firmware, noise-resistant schematics, and low-power telemetry designed for 24/7 field operation.',
    features: [
      {
        title: 'Reliable real-time firmware',
        description: 'ESP32, STM32, and Arduino programming with battle-tested MQTT, HTTP, WebSocket, or Modbus protocols.',
      },
      {
        title: 'Precision sensors & actuators',
        description: 'High-accuracy data collection for temperature, flow, and environmental metrics, plus relay/motor automation.',
      },
      {
        title: 'Live telemetry & anomaly alerts',
        description: 'Real-time telemetry charting, historic logs, and instant alert dispatches via WhatsApp or Telegram.',
      },
      {
        title: 'Rugged hardware design',
        description: 'Schematic architecture, PCB layouts, and industrial surge protections optimized for energy efficiency.',
      },
    ],
    deliverables: [
      'Firmware source code & modular architecture',
      'Schematic diagrams & wiring specifications',
      'Backend telemetry API & monitoring dashboard',
      'Functional calibration and hardware bench testing',
      'Complete technical documentation & installation guide',
    ],
    timeline: '4–8 weeks',
    startingPrice: 'From Rp 2M',
    stack: ['ESP32', 'STM32', 'C/C++', 'MQTT', 'Node.js', 'PostgreSQL', 'WebSockets'],
  },
  {
    slug: 'perawatan-website',
    number: '05',
    icon: 'shield',
    title: 'Maintenance & Monthly Support',
    shortTitle: 'Maintenance',
    tagline: 'Neglected software becomes an accumulating business liability.',
    summary: 'Security hardening, automated backups, 24/7 uptime monitoring, and dedicated monthly hours for updates.',
    description:
      'Many vendors vanish once final payment clears. Our ongoing retainer plans ensure your digital platform remains secure, lightning-fast, and adapted to evolving business requirements.',
    features: [
      {
        title: 'Automated daily backups',
        description: '30-day retention stored securely offsite, completely separate from production servers.',
      },
      {
        title: '24/7 uptime monitoring',
        description: 'Immediate alert notifications within 1 minute of downtime with priority engineering intervention.',
      },
      {
        title: 'Proactive security patching',
        description: 'Zero-downtime updates for underlying frameworks, dependencies, and SSL certificate renewals.',
      },
      {
        title: 'Dedicated monthly hours',
        description: 'Flexible hours for design adjustments, landing page additions, or performance improvements.',
      },
    ],
    deliverables: ['Daily automated backups with 30-day retention', '24/7 uptime monitoring & alerting', 'Monthly security patching', 'Performance health audits', 'Dedicated engineering hours'],
    timeline: 'Monthly',
    startingPrice: 'From Rp 150k/mo',
    stack: ['UptimeRobot', 'Cloudflare', 'GitHub Actions', 'Sentry'],
  },
];

export const services = servicesId;

export function getServices(locale: Locale = 'id'): Service[] {
  return locale === 'en' ? servicesEn : servicesId;
}

export const getService = (slug: string, locale: Locale = 'id') => {
  const list = getServices(locale);
  return list.find((s) => s.slug === slug);
};
