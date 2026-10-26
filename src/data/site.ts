export const site = {
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

export const waLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
];
