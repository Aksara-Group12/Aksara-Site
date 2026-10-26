export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  service: string;
  serviceSlug: string;
  shortSummary: string;
  summary: string;
  url: string;
  domain: string;
  preview: string;
  previewAlt: string;
  highlights: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: 'bandara-abdurachman-saleh',
    title: 'Website Bandara Abdurachman Saleh',
    client: 'UPT Pelayanan Jasa Kebandarudaraan Abdurachman Saleh',
    industry: 'Transportasi & Penerbangan',
    year: '2026',
    service: 'Website Bisnis',
    serviceSlug: 'website-bisnis',
    shortSummary:
      'Portal informasi resmi penerbangan, jadwal harian, dan panduan penumpang Bandara Abdurachman Saleh Malang.',
    summary:
      'Portal informasi lengkap Bandara Abdurachman Saleh Malang yang menyajikan jadwal penerbangan real-time, estimasi penumpang, peta rute udara, panduan transportasi darat, profil kebandarudaraan, serta regulasi penumpang dalam dua bahasa (Indonesia & Inggris).',
    url: 'https://abdurachmansaleh-airport.my.id/',
    domain: 'abdurachmansaleh-airport.my.id',
    preview: '/preview/bandara-abdurachman-saleh.webp',
    previewAlt: 'Tampilan beranda website Bandara Abdurachman Saleh Malang',
    highlights: [
      'Jadwal penerbangan dan estimasi penumpang harian',
      'Peta rute, transportasi, dan panduan penumpang',
      'Profil, sejarah, dan struktur organisasi bandara',
      'Pilihan bahasa Indonesia dan Inggris',
    ],
    stack: ['Laravel', 'Tailwind CSS', 'AOS'],
  },
  {
    slug: 'faraysz-portfolio',
    title: 'Website Portfolio Faraysz',
    client: 'Faraytodi Atmajaya — Personal',
    industry: 'Personal Portfolio',
    year: '2026',
    service: 'Website Bisnis',
    serviceSlug: 'website-bisnis',
    shortSummary:
      'Website portfolio personal fullstack developer yang mencakup ekosistem Laravel, aplikasi mobile, hingga IoT.',
    summary:
      'Portfolio personal Faraytodi Atmajaya (Faraysz), mahasiswa D4 Teknik Informatika Politeknik Negeri Jember. Menampilkan rekam jejak pembuatan sistem fullstack dari perancangan database, backend Laravel, antarmuka mobile React Native & Flutter, hingga integrasi perangkat IoT.',
    url: 'https://faraysz.my.id',
    domain: 'faraysz.my.id',
    preview: '/preview/faraysz.webp',
    previewAlt: 'Tampilan beranda website portfolio Faraysz — Faraytodi Atmajaya',
    highlights: [
      'Showcase proyek fullstack dari database sampai antarmuka',
      'Portofolio Laravel, React Native, Flutter, dan eksperimen IoT',
      'Desain dark mode minimalis dengan animasi modern',
      'Fully responsive di semua ukuran layar',
    ],
    stack: ['Laravel', 'React Native', 'Flutter', 'IoT'],
  },
];

export const featuredProject = projects[0];
