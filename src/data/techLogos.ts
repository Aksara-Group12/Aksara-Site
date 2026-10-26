import type { SimpleIcon } from 'simple-icons';
import {
  siAstro,
  siNextdotjs,
  siReact,
  siVuedotjs,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siLaravel,
  siPython,
  siPostgresql,
  siMysql,
  siRedis,
  siSupabase,
  siFlutter,
  siDart,
  siKotlin,
  siDocker,
  siCloudflare,
  siVercel,
  siGithubactions,
  siWhatsapp,
  siGoogle,
} from 'simple-icons';

export interface TechLogoItem {
  label: string;
  icon: SimpleIcon;
}

const picks: [string, SimpleIcon][] = [
  ['Astro', siAstro],
  ['Next.js', siNextdotjs],
  ['React', siReact],
  ['Vue', siVuedotjs],
  ['TypeScript', siTypescript],
  ['Tailwind CSS', siTailwindcss],
  ['Node.js', siNodedotjs],
  ['Express', siExpress],
  ['Laravel', siLaravel],
  ['Python', siPython],
  ['PostgreSQL', siPostgresql],
  ['MySQL', siMysql],
  ['Redis', siRedis],
  ['Supabase', siSupabase],
  ['Flutter', siFlutter],
  ['Dart', siDart],
  ['Kotlin', siKotlin],
  ['Docker', siDocker],
  ['Cloudflare', siCloudflare],
  ['Vercel', siVercel],
  ['GitHub Actions', siGithubactions],
  ['WhatsApp API', siWhatsapp],
  ['Google', siGoogle],
];

export const techLogos: TechLogoItem[] = picks.map(([label, icon]) => ({ label, icon }));
