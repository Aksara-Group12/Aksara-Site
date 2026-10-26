export interface TechLayer {
  group: string;
  note: string;
  items: string[];
}

export const techLayers: TechLayer[] = [
  {
    group: 'Frontend',
    note: 'Dipakai untuk website dan dashboard',
    items: ['Astro', 'Next.js', 'React', 'Vue', 'TypeScript', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    note: 'Runtime dan API',
    items: ['Node.js', 'Express', 'Laravel', 'Go', 'Python', 'REST / GraphQL'],
  },
  {
    group: 'Data',
    note: 'Penyimpanan dan antrean',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Supabase'],
  },
  {
    group: 'Mobile',
    note: 'Satu kode, dua platform',
    items: ['Flutter', 'Dart', 'React Native', 'Kotlin', 'Swift'],
  },
  {
    group: 'Infrastruktur',
    note: 'Deploy dan pemantauan',
    items: ['Docker', 'Cloudflare', 'Vercel', 'GitHub Actions', 'VPS Lokal', 'Sentry'],
  },
  {
    group: 'Integrasi',
    note: 'Layanan yang sering dipakai klien',
    items: ['Midtrans', 'Xendit', 'WhatsApp Cloud API', 'Google Workspace', 'RajaOngkir'],
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const heroStats: Stat[] = [
  // { value: '32+', label: 'project dikirim' },
  // { value: '94%', label: 'klien kembali' },
  // { value: '4', label: 'tahun beroperasi' },
];
