import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { pageMetadata } from '@/lib/seo/meta';
import privacy from '@/lib/legal/privacy';

export const metadata: Metadata = pageMetadata({
  title: privacy.metadata.title,
  description: privacy.metadata.description,
  path: '/privacy',
});

export default function PrivacyPage() {
  return <LegalPage doc={privacy} path="/privacy" />;
}
