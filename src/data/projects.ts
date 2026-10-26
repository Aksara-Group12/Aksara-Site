export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  service: string;
  serviceSlug: string;
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
    summary:
      'Portal informasi Bandara Abdurachman Saleh Malang: jadwal penerbangan, peta rute, transportasi, panduan penumpang, dan profil bandara dalam dua bahasa.',
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
];

export const featuredProject = projects[0];
