// ============================================================
// RAYNATERS TECH — SEO metadata helpers
// Single source of truth for the canonical host + per-page metadata.
// ============================================================
import type { Metadata } from 'next';

export const SITE_URL = 'https://www.raynaters.tech';
export const SITE_NAME = 'Raynaters Tech';
export const DEFAULT_OG_IMAGE = '/raynaters-logo.png';

/** Absolute, canonical www URL for a given path. */
export function absUrl(path = '/'): string {
  if (path.startsWith('http')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${clean.replace(/\/$/, '')}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: 'website' | 'article';
}

/**
 * Builds a complete Metadata object with a self-referencing canonical,
 * Open Graph and Twitter tags. `title.absolute` is used so the root
 * `title.template` never double-suffixes "| Raynaters Tech".
 */
export function pageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
}: PageMetaInput): Metadata {
  const url = absUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
