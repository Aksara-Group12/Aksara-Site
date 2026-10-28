import type { Locale } from './i18n';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonialsId: Testimonial[] = [
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

export const testimonialsEn: Testimonial[] = [
  {
    quote:
      'Before using Aksara’s system, our clinic queues were chaotic and WhatsApp was flooded every morning. Now patients register online and get live queue estimates. Our waiting lounge is far calmer.',
    name: 'dr. Hendra Pratama',
    role: 'Clinic Owner & Director',
    company: 'Klinik Pratama Sehat Bersama',
    initials: 'HP',
  },
  {
    quote:
      'We had bad experiences with previous agencies: spaghetti code and vanishing acts when bugs surfaced. With Aksara, source code handover was completely transparent with thorough documentation and swift warranty support.',
    name: 'Budi Wicaksono',
    role: 'Operations Manager',
    company: 'PT Mitra Logam Sejahtera',
    initials: 'BW',
  },
  {
    quote:
      'Our exam platform once crashed under 1,000 simultaneous users. Aksara redesigned our backend architecture. Recently, 3,500 students took tests simultaneously without a single stutter.',
    name: 'Amanda Safira',
    role: 'Head of Learning Product',
    company: 'Akademi Cerdas Nusantara',
    initials: 'AS',
  },
];

export const testimonials = testimonialsId;

export function getTestimonials(locale: Locale = 'id'): Testimonial[] {
  return locale === 'en' ? testimonialsEn : testimonialsId;
}

export interface Principle {
  title: string;
  description: string;
}

export const principlesId: Principle[] = [
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

export const principlesEn: Principle[] = [
  {
    title: 'Fixed pricing agreed upfront, no surprises',
    description:
      'Every scope detail is documented prior to contracts. Out-of-scope requests are estimated and approved first. No unexpected invoices at project completion.',
  },
  {
    title: 'Source code is 100% your property',
    description:
      'Repositories, servers, domains, and cloud accounts are registered in your name. We never hold code hostage or charge recurring hidden licenses.',
  },
  {
    title: 'Direct communication with engineers',
    description:
      'No layers of non-technical account managers. You speak directly to the engineers building your software. Faster decisions, clearer communication.',
  },
  {
    title: '30-day post-launch warranty',
    description:
      'Any bug or discrepancy with agreed specifications is fixed promptly at zero extra cost. Not out of courtesy, but because it is our professional responsibility.',
  },
];

export const principles = principlesId;

export function getPrinciples(locale: Locale = 'id'): Principle[] {
  return locale === 'en' ? principlesEn : principlesId;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  output: string;
}

export const processStepsId: ProcessStep[] = [
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

export const processStepsEn: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Mapping',
    description: 'A 45-minute discovery session to understand business goals, technical constraints, and current bottlenecks.',
    output: 'Requirements summary',
  },
  {
    number: '02',
    title: 'Scope & Fixed Proposal',
    description: 'Detailed modular breakdown, milestone timeline, and fixed fee. You know exactly what you are paying for.',
    output: 'Proposal + timeline',
  },
  {
    number: '03',
    title: 'Design & Prototype',
    description: 'Wireframes first, then high-fidelity designs. Review user flows before production code is written.',
    output: 'Approved design',
  },
  {
    number: '04',
    title: 'Weekly Build & Demo',
    description: 'Track real progress every week on a staging server. Continuous feedback directly into the next sprint.',
    output: 'Staging deployment',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description: 'Data migration, end-to-end user testing, team onboarding, and complete repository/account transfers.',
    output: 'Live production system',
  },
  {
    number: '06',
    title: 'Optional Maintenance',
    description: 'Automatic 30-day warranty included. Flexible ongoing monthly maintenance plans available as needed.',
    output: 'Extended support',
  },
];

export const processSteps = processStepsId;

export function getProcessSteps(locale: Locale = 'id'): ProcessStep[] {
  return locale === 'en' ? processStepsEn : processStepsId;
}

export interface Faq {
  question: string;
  answer: string;
}

export const faqsId: Faq[] = [
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

export const faqsEn: Faq[] = [
  {
    question: 'How long does a website or application project take?',
    answer:
      'Landing pages and corporate websites typically take 2–4 weeks. Web applications with custom operational modules take 6–12 weeks. Mobile apps or multi-platform systems take 8–14 weeks. Exact milestones are locked in the proposal with weekly live staging demos.',
  },
  {
    question: 'Do I get full ownership of the source code?',
    answer:
      'Yes, 100%. Upon handover, we transfer repository ownership, server credentials, and full technical documentation. No recurring licensing fees and no code is ever withheld.',
  },
  {
    question: 'What happens if a bug is discovered after launch?',
    answer:
      'Every project includes a 30-day post-launch warranty. Bugs departing from agreed specifications are resolved immediately at no cost. Beyond warranty, we offer flexible monthly maintenance plans or per-task support.',
  },
  {
    question: 'Do I have to purchase domain and hosting independently?',
    answer:
      'Not necessarily. We handle setup and configuration, but all domain and cloud accounts are registered using your corporate email and credentials. You own the assets from day one.',
  },
  {
    question: 'Can we add new features midway through development?',
    answer:
      'Yes. We evaluate scope, timeline, and cost implications first, and only proceed after your approval. We never perform extra work unannounced and invoice you afterwards.',
  },
  {
    question: 'What is the payment milestone structure?',
    answer:
      'Progress-based milestones: usually 40% upfront deposit, 30% upon functional demo, and 30% upon final acceptance and system handover. For compact projects under IDR 10M, a 50/50 model is standard.',
  },
];

export const faqs = faqsId;

export function getFaqs(locale: Locale = 'id'): Faq[] {
  return locale === 'en' ? faqsEn : faqsId;
}
