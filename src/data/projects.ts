import type { Locale } from './i18n';

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

export const projectsId: Project[] = [
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

export const projectsEn: Project[] = [
  {
    slug: 'faraysz-portfolio',
    title: 'Faraysz Portfolio Website',
    client: 'Faraytodi Atmajaya — Personal',
    industry: 'Personal Portfolio',
    year: '2026',
    service: 'Business Website',
    serviceSlug: 'website-bisnis',
    shortSummary:
      'Personal full-stack engineering portfolio spanning Laravel systems, mobile apps, and IoT hardware.',
    summary:
      'Personal portfolio of Faraytodi Atmajaya (Faraysz), Software Engineering student at Politeknik Negeri Jember. Demonstrating end-to-end fullstack systems: database schema design, Laravel backends, React Native & Flutter mobile clients, and IoT telemetry.',
    url: 'https://faraysz.my.id',
    domain: 'faraysz.my.id',
    preview: '/preview/faraysz.webp',
    previewAlt: 'Home view of Faraysz personal portfolio website',
    highlights: [
      'Fullstack showcase from schema architecture to UI',
      'Laravel, React Native, Flutter, and IoT engineering highlights',
      'Minimalist dark mode aesthetic with fluid motion',
      'Fully responsive across all screen viewports',
    ],
    stack: ['Laravel', 'React Native', 'Flutter', 'IoT'],
  },
];

export const projects = projectsId;

export function getProjects(locale: Locale = 'id'): Project[] {
  return locale === 'en' ? projectsEn : projectsId;
}

export const featuredProject = projects[0];

export function getFeaturedProject(locale: Locale = 'id'): Project {
  return getProjects(locale)[0];
}
