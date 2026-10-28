export type Locale = 'id' | 'en';

export const routeMap: Record<string, { id: string; en: string }> = {
  home: { id: '/', en: '/en' },
  services: { id: '/layanan', en: '/en/services' },
  portfolio: { id: '/portfolio', en: '/en/portfolio' },
  about: { id: '/tentang', en: '/en/about' },
  contact: { id: '/kontak', en: '/en/contact' },
};

export function getLocaleFromPath(pathname: string): Locale {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized === '/en' || normalized.startsWith('/en/')) {
    return 'en';
  }
  return 'id';
}

export function getEquivalentPath(pathname: string, targetLocale: Locale): string {
  const normalized = pathname.replace(/\/+$/, '') || '/';

  // Check direct mapped routes
  for (const entry of Object.values(routeMap)) {
    if (normalized === entry.id || normalized === entry.en) {
      return targetLocale === 'en' ? entry.en : entry.id;
    }
  }

  // Fallbacks for sub-paths or query hashes
  if (targetLocale === 'en') {
    if (normalized.startsWith('/en')) return normalized;
    if (normalized === '/') return '/en';
    if (normalized === '/layanan') return '/en/services';
    if (normalized === '/tentang') return '/en/about';
    if (normalized === '/kontak') return '/en/contact';
    return `/en${normalized}`;
  } else {
    if (normalized === '/en' || normalized === '/en/') return '/';
    if (normalized.startsWith('/en/services')) return normalized.replace('/en/services', '/layanan');
    if (normalized.startsWith('/en/about')) return normalized.replace('/en/about', '/tentang');
    if (normalized.startsWith('/en/contact')) return normalized.replace('/en/contact', '/kontak');
    if (normalized.startsWith('/en/')) return normalized.replace('/en', '') || '/';
    return normalized;
  }
}

export const ui = {
  id: {
    nav: [
      { label: 'Layanan', href: '/layanan' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Tentang', href: '/tentang' },
      { label: 'Kontak', href: '/kontak' },
    ],
    navAria: 'Navigasi utama',
    mobileNavAria: 'Navigasi seluler',
    langSelectAria: 'Pilih bahasa',
    skipToContent: 'Lewati ke konten utama',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    lightMode: 'Aktifkan mode terang',
    darkMode: 'Aktifkan mode gelap',
    titleLightMode: 'Mode Terang',
    titleDarkMode: 'Mode Gelap',
    freeConsultation: 'Diskusi gratis',
    language: 'Bahasa',
    comingSoon: 'segera',

    // Hero
    heroEyebrow: 'Software Company',
    heroTitle1: 'Kode yang rapi.',
    heroTitle2: 'Bisnis yang',
    heroTitleHighlight: 'jalan lebih cepat.',
    heroDesc:
      'Aksara Developer membangun website, sistem operasional, dan aplikasi mobile untuk UMKM dan startup Indonesia yang sudah lelah menambal banyak tools. Satu tim, satu titik tanggung jawab.',
    heroCtaPrimary: 'Diskusi project Anda',
    heroCtaSecondary: 'Lihat hasil kerja',

    // Services Grid
    servicesEyebrow: 'Layanan',
    servicesTitle: 'Layanan yang kami kerjakan dengan baik.',
    servicesDesc:
      'Kami tidak mengerjakan semuanya. Fokus di lima area keahlian ini supaya hasilnya benar-benar matang, bukan sekadar bisa jalan.',
    servicesLearnMore: 'Selengkapnya',

    // Featured Work
    featuredEyebrow: 'Portfolio',
    featuredTitle: 'Hasil kerja, bukan janji di halaman depan.',
    featuredDesc:
      'Kami tidak memajang mockup. Kartu di bawah membawa Anda langsung ke website yang benar-benar berjalan.',
    featuredAll: 'Semua project',

    // Process
    processEyebrow: 'Cara kerja',
    processTitle: 'Transparan dari diskusi pertama sampai serah terima.',
    processDesc:
      'Anda selalu tahu ada di tahap mana, apa yang sedang dikerjakan, dan apa yang akan datang. Tidak ada fase gelap selama dua bulan.',
    processStagingNote:
      'Demo progres setiap minggu di environment staging yang bisa Anda akses sendiri.',

    // Why Us
    whyUsEyebrow: 'Kenapa Aksara',
    whyUsTitle: 'Hal-hal kecil yang sering bikin project gagal.',
    whyUsDesc:
      'Bukan soal teknologi. Kebanyakan masalah muncul dari ekspektasi yang tidak pernah ditulis dan komunikasi yang tersendat.',

    // Tech Stack
    techEyebrow: 'Teknologi & infrastruktur',
    techTitle: 'Dipilih karena cocok, bukan karena sedang tren.',

    // Testimonials
    testimonialsEyebrow: 'Testimoni',
    testimonialsTitle: 'Yang bicara seharusnya klien, bukan kami.',
    testimonialsDesc:
      'Kutipan di bawah dikutip apa adanya dari wawancara singkat setelah proyek selesai.',

    // FAQ
    faqEyebrow: 'FAQ',
    faqTitle: 'Pertanyaan yang paling sering muncul.',
    faqDesc: 'Tidak menemukan jawabannya? Kirim pertanyaan langsung, kami jawab tanpa jargon.',

    // CTA Band
    ctaNextStep: 'Langkah berikutnya',
    ctaDefaultTitle: 'Ceritakan project Anda. Kami dengarkan dulu sebelum menawarkan.',
    ctaDefaultDesc:
      'Sesi 45 menit tanpa biaya. Kami petakan kebutuhan, kendala, dan estimasi realistis. Kalau ternyata kami bukan pilihan yang tepat, kami akan bilang.',
    ctaPrimaryLabel: 'Mulai diskusi via WhatsApp',
    ctaSecondaryLabel: 'Lihat cara kerja kami',
    ctaResponseTime: 'Balasan rata-rata di bawah 2 jam pada hari kerja',

    // Footer
    footerDesc:
      'Software house kecil yang membangun website, aplikasi web, dan aplikasi mobile untuk bisnis Indonesia. Tim kecil, komunikasi langsung, kode milik Anda.',
    footerCta: 'Mulai diskusi',
    footerServices: 'Layanan',
    footerContact: 'Kontak',
    footerCopyright: 'Seluruh hak cipta dilindungi.',
    footerBuiltWith: 'Dibangun dengan Astro & Tailwind',

    // Whatsapp Float
    waFloatText: 'Chat WhatsApp',

    // Project Card
    projectOpenDetail: 'Buka detail',
    projectFullDetailBtn: 'Lihat Detail Lengkap',
    projectAboutTitle: 'Tentang Proyek',
    projectHighlightsTitle: 'Fitur Utama & Sorotan',
    projectStackTitle: 'Teknologi / Stack Digunakan',
    projectCloseBtn: 'Tutup',
    projectVisitBtn: 'Kunjungi Website',
  },
  en: {
    nav: [
      { label: 'Services', href: '/en/services' },
      { label: 'Portfolio', href: '/en/portfolio' },
      { label: 'About', href: '/en/about' },
      { label: 'Contact', href: '/en/contact' },
    ],
    navAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    langSelectAria: 'Select language',
    skipToContent: 'Skip to main content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    lightMode: 'Activate light mode',
    darkMode: 'Activate dark mode',
    titleLightMode: 'Light Mode',
    titleDarkMode: 'Dark Mode',
    freeConsultation: 'Free consultation',
    language: 'Language',
    comingSoon: 'soon',

    // Hero
    heroEyebrow: 'Software Company',
    heroTitle1: 'Clean code.',
    heroTitle2: 'Businesses that',
    heroTitleHighlight: 'move faster.',
    heroDesc:
      'Aksara Developer builds websites, operational software, and mobile apps for SMEs and startups tired of juggling disjointed tools. One dedicated team, one point of accountability.',
    heroCtaPrimary: 'Discuss your project',
    heroCtaSecondary: 'View our work',

    // Services Grid
    servicesEyebrow: 'Services',
    servicesTitle: 'Services we execute with excellence.',
    servicesDesc:
      'We do not build everything. We focus strictly on these core specializations so every deliverable is polished, robust, and production-ready.',
    servicesLearnMore: 'Learn more',

    // Featured Work
    featuredEyebrow: 'Portfolio',
    featuredTitle: 'Real deliverables, not homepage promises.',
    featuredDesc:
      'We never show fake mockups. The showcase below links directly to verified, live production websites.',
    featuredAll: 'All projects',

    // Process
    processEyebrow: 'How We Work',
    processTitle: 'Transparent from discovery to handover.',
    processDesc:
      'You always know current milestones, ongoing deliverables, and upcoming steps. No two-month blackout periods.',
    processStagingNote:
      'Weekly progress demos hosted on a private staging environment you can test anytime.',

    // Why Us
    whyUsEyebrow: 'Why Aksara',
    whyUsTitle: 'The minor details that usually derail software projects.',
    whyUsDesc:
      'It is rarely about the tech stack. Most problems stem from unwritten expectations and broken communication.',

    // Tech Stack
    techEyebrow: 'Tech & Infrastructure',
    techTitle: 'Chosen for reliability, not fleeting trends.',

    // Testimonials
    testimonialsEyebrow: 'Testimonials',
    testimonialsTitle: 'Let clients speak for us.',
    testimonialsDesc:
      'Verbatim feedback gathered directly from brief interviews following project completion.',

    // FAQ
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions.',
    faqDesc: 'Have a specific inquiry? Send us a direct message and we will respond clearly without jargon.',

    // CTA Band
    ctaNextStep: 'Next step',
    ctaDefaultTitle: 'Tell us about your project. We listen first before making an offer.',
    ctaDefaultDesc:
      'Complimentary 45-minute discovery session. We evaluate technical scope, bottlenecks, and realistic timelines. If we are not the right fit, we will tell you upfront.',
    ctaPrimaryLabel: 'Start discussion via WhatsApp',
    ctaSecondaryLabel: 'See how we work',
    ctaResponseTime: 'Average response time under 2 hours during business hours',

    // Footer
    footerDesc:
      'A focused software house building websites, web apps, and mobile applications. Small team, direct communication, full code ownership.',
    footerCta: 'Start a discussion',
    footerServices: 'Services',
    footerContact: 'Contact',
    footerCopyright: 'All rights reserved.',
    footerBuiltWith: 'Built with Astro & Tailwind',

    // Whatsapp Float
    waFloatText: 'Chat on WhatsApp',

    // Project Card
    projectOpenDetail: 'Open details',
    projectFullDetailBtn: 'View Full Details',
    projectAboutTitle: 'About The Project',
    projectHighlightsTitle: 'Key Features & Highlights',
    projectStackTitle: 'Technologies / Stack Used',
    projectCloseBtn: 'Close',
    projectVisitBtn: 'Visit Website',
  },
} as const;
