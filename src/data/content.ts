export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Sebelum pakai sistem dari Aksara, antrean klinik kami selalu kacau dan WhatsApp admin jebol tiap pagi. Sekarang pasien daftar lewat web dan dapat estimasi giliran live. Ruang tunggu jauh lebih tenang.',
    name: 'dr. Hendra Pratama',
    role: 'Pemilik & Penanggung Jawab',
    company: 'Klinik Pratama Sehat Bersama',
    initials: 'HP',
  },
  {
    quote:
      'Pernah kapok dengan vendor sebelumnya: kode berantakan dan hilang begitu ada error. Di Aksara, serah terima source code transparan, dikasih dokumentasi lengkap, dan garansi bug benar-benar ditangani cepat.',
    name: 'Budi Wicaksono',
    role: 'Manajer Operasional',
    company: 'PT Mitra Logam Sejahtera',
    initials: 'BW',
  },
  {
    quote:
      'Tryout kami pernah down saat diakses seribu peserta. Tim Aksara bantu rombak arsitektur backend. Kemarin 3.500 siswa serentak berjalan mulus tanpa freeze sedikit pun.',
    name: 'Amanda Safira',
    role: 'Head of Learning Product',
    company: 'Akademi Cerdas Nusantara',
    initials: 'AS',
  },
];

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: 'Harga disepakati di awal, bukan di tengah jalan',
    description:
      'Scope ditulis rinci sebelum kontrak. Kalau ada permintaan di luar scope, kami hitung dan ajukan dulu. Tidak ada tagihan kejutan di akhir proyek.',
  },
  {
    title: 'Source code sepenuhnya milik Anda',
    description:
      'Repositori, server, domain, dan akun layanan didaftarkan atas nama Anda. Kami tidak menahan kode sebagai jaminan dan tidak memungut lisensi tersembunyi.',
  },
  {
    title: 'Komunikasi langsung dengan yang menulis kode',
    description:
      'Tanpa lapisan account manager. Anda bicara dengan engineer yang benar-benar mengerjakan proyek. Lebih cepat, lebih jelas.',
  },
  {
    title: 'Garansi 30 hari setelah peluncuran',
    description:
      'Bug yang tidak sesuai spesifikasi kami perbaiki gratis. Bukan karena sopan santun, tapi karena itu bagian dari pekerjaan yang belum selesai.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Diskusi & pemetaan',
    description: 'Satu sesi 45 menit untuk memahami bisnis Anda, target, dan kendala teknis yang ada sekarang.',
    output: 'Ringkasan kebutuhan',
  },
  {
    number: '02',
    title: 'Proposal & scope',
    description: 'Rincian modul, estimasi waktu per tahap, dan harga tetap. Anda tahu persis apa yang dibayar.',
    output: 'Proposal + timeline',
  },
  {
    number: '03',
    title: 'Desain & prototipe',
    description: 'Wireframe dulu, baru visual. Anda melihat alurnya sebelum satu baris kode produksi ditulis.',
    output: 'Desain disetujui',
  },
  {
    number: '04',
    title: 'Build & demo mingguan',
    description: 'Progres terlihat setiap minggu di staging. Masukan langsung masuk ke siklus berikutnya.',
    output: 'Build staging',
  },
  {
    number: '05',
    title: 'Peluncuran & serah terima',
    description: 'Migrasi data, uji coba bersama tim Anda, pelatihan singkat, lalu kode dan akun diserahkan.',
    output: 'Sistem live',
  },
  {
    number: '06',
    title: 'Perawatan opsional',
    description: 'Garansi 30 hari otomatis. Setelahnya opsional paket perawatan bulanan bila dibutuhkan.',
    output: 'Dukungan lanjutan',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Berapa lama pengerjaan sebuah website atau aplikasi?',
    answer:
      'Landing page atau company profile biasanya 2–4 minggu. Aplikasi web dengan modul operasional sekitar 6–12 minggu. Aplikasi mobile atau sistem multi-platform berkisar 8–14 minggu. Timeline tertulis kami cantumkan di proposal, dengan demo tiap minggu.',
  },
  {
    question: 'Apakah saya dapat semua source code?',
    answer:
      'Ya, sepenuhnya. Setelah serah terima kami berikan akses repositori privat, akun hosting, dan dokumentasi teknis. Tidak ada biaya lisensi dan tidak ada kode yang ditahan.',
  },
  {
    question: 'Bagaimana kalau ada bug setelah diluncurkan?',
    answer:
      'Setiap proyek mendapat garansi 30 hari setelah go-live. Bug yang tidak sesuai spesifikasi diperbaiki tanpa biaya tambahan. Setelah garansi habis, Anda bisa memakai paket perawatan bulanan atau bayar per perbaikan.',
  },
  {
    question: 'Domain dan hosting harus urus sendiri?',
    answer:
      'Tidak perlu. Kami siapkan domain dan hosting, tapi akunnya didaftarkan atas nama dan email Anda. Anda memegang kendali penuh atas aset digital ini sejak hari pertama.',
  },
  {
    question: 'Bisa tambah fitur di tengah proyek?',
    answer:
      'Bisa. Kami akan estimasi dampak waktu dan biayanya dulu, baru dikerjakan setelah Anda setuju. Yang tidak kami lakukan adalah mengerjakan dulu lalu menagih belakangan.',
  },
  {
    question: 'Bagaimana skema pembayarannya?',
    answer:
      'Bertahap sesuai progres. Umumnya 40% di awal, 30% saat demo fungsional, dan 30% saat sistem teruji dan serah terima. Untuk proyek di bawah 10 juta, skema bisa 50-50.',
  },
];
