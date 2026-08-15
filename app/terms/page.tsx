import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { pageMetadata } from '@/lib/seo/meta';
import terms from '@/lib/legal/terms';

export const metadata: Metadata = pageMetadata({
  title: terms.metadata.title,
  description: terms.metadata.description,
  path: '/terms',
});

export default function TermsPage() {
  return <LegalPage doc={terms} path="/terms" />;
}
