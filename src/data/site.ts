import type { Locale } from './i18n';

export const siteId = {
  name: 'Aksara Developer',
  shortName: 'Aksara',
  tagline: 'Software house untuk bisnis yang serius tumbuh.',
  description:
    'Aksara Developer membangun website, aplikasi web, dan aplikasi mobile untuk UMKM dan startup Indonesia. Tim kecil, komunikasi langsung, source code milik Anda sepenuhnya.',
  url: 'https://aksaradev.my.id',
  email: 'aksaradeveloper2026@gmail.com',
  phone: '+62 813-1355-613',
  whatsapp: '628131355613',
  whatsappMessage: 'Halo Aksara, saya mau diskusi soal project digital.',
  address: 'Jember, Indonesia',
  founded: 2026,
  socials: {
    instagram: 'https://instagram.com/aksara_developer',
  },
  stats: [
    { value: '2026', label: 'Mulai beroperasi' },
    { value: '2', label: 'Orang di tim' },
    { value: 'Jember', label: 'Basis kerja' },
  ],
} as const;

export const siteEn = {
  name: 'Aksara Developer',
  shortName: 'Aksara',
  tagline: 'A software house for businesses that are serious about growth.',
  description:
    'Aksara Developer builds websites, web applications, and mobile apps for Indonesian SMEs and startups. Small team, direct communication, full source code ownership.',
  url: 'https://aksaradev.my.id',
  email: 'aksaradeveloper2026@gmail.com',
  phone: '+62 813-1355-613',
  whatsapp: '628131355613',
  whatsappMessage: 'Hello Aksara, I would like to discuss a digital project.',
  address: 'Jember, Indonesia',
  founded: 2026,
  socials: {
    instagram: 'https://instagram.com/aksara_developer',
  },
  stats: [
    { value: '2026', label: 'Founded' },
    { value: '2', label: 'Team members' },
    { value: 'Jember', label: 'Home base' },
  ],
} as const;

// Default is Indonesian
export const site = siteId;

export function getSite(locale: Locale = 'id') {
  return locale === 'en' ? siteEn : siteId;
}

export const waLink = (message?: string, locale: Locale = 'id') => {
  const msg = message ?? (locale === 'en' ? siteEn.whatsappMessage : siteId.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
};

export const navId = [
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
];

export const navEn = [
  { label: 'Services', href: '/en/services' },
  { label: 'Portfolio', href: '/en/portfolio' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
];

export const nav = navId;

export function getNav(locale: Locale = 'id') {
  return locale === 'en' ? navEn : navId;
}
