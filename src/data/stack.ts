import type { Locale } from './i18n';

export interface TechLayer {
  group: string;
  note: string;
  items: string[];
}

export const techLayersId: TechLayer[] = [
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

export const techLayersEn: TechLayer[] = [
  {
    group: 'Frontend',
    note: 'Used for websites and high-performance dashboards',
    items: ['Astro', 'Next.js', 'React', 'Vue', 'TypeScript', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    note: 'Runtimes and scalable APIs',
    items: ['Node.js', 'Express', 'Laravel', 'Go', 'Python', 'REST / GraphQL'],
  },
  {
    group: 'Data',
    note: 'Persistent storage and caching queues',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Supabase'],
  },
  {
    group: 'Mobile',
    note: 'Unified codebase, dual-platform native feel',
    items: ['Flutter', 'Dart', 'React Native', 'Kotlin', 'Swift'],
  },
  {
    group: 'Infrastructure',
    note: 'Automated CI/CD and observability',
    items: ['Docker', 'Cloudflare', 'Vercel', 'GitHub Actions', 'Linux VPS', 'Sentry'],
  },
  {
    group: 'Integrations',
    note: 'Industry APIs and payment gateways',
    items: ['Midtrans', 'Xendit', 'WhatsApp Cloud API', 'Google Workspace', 'RajaOngkir'],
  },
];

export const techLayers = techLayersId;

export function getTechLayers(locale: Locale = 'id'): TechLayer[] {
  return locale === 'en' ? techLayersEn : techLayersId;
}

export interface Stat {
  value: string;
  label: string;
}

export const heroStats: Stat[] = [];
