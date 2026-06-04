// ============================================================
// RAYNATERS TECH — UTM-tagged booking links
// Makes every organic-page CTA attributable in Vercel Analytics / GA4.
// ============================================================
import { CONTENT } from '@/lib/content';

/**
 * Returns the /book href with organic-SEO UTM params.
 * e.g. bookHref({ campaign: 'ai-receptionist-for-trades-uk', content: 'hero_cta' })
 */
export function bookHref({
  campaign,
  content,
}: {
  campaign: string;
  content: string;
}): string {
  const params = new URLSearchParams({
    utm_source: 'organic',
    utm_medium: 'seo',
    utm_campaign: campaign,
    utm_content: content,
  });
  return `${CONTENT.brand.bookHref}?${params.toString()}`;
}
