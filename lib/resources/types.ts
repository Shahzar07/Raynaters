// ============================================================
// RAYNATERS TECH — Resource (article) content model
// Long-form content authored as typed blocks — no MDX toolchain.
// ============================================================
import type { FAQ } from '@/lib/landing-pages/types';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'table'; columns: string[]; rows: string[][] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface Resource {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  featured?: boolean;

  /** Feature hero image shown on article page + card thumbnail. */
  coverImage?: { src: string; alt: string };

  /** AIO-magnet answer rendered at the top of the article. */
  directAnswer: string;
  body: Block[];
  faqs?: FAQ[];

  /** Descriptive internal links UP to related money pages. */
  related?: { label: string; href: string }[];

  metadata: { title: string; description: string };
}
