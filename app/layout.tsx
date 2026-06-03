import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import LiveAvatar from '@/components/ui/LiveAvatar';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/seo/schema';
import { SITE_URL, SITE_NAME } from '@/lib/seo/meta';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AI Automation Agency UK | Raynaters Tech',
    template: '%s | Raynaters Tech',
  },
  description:
    'AI automation agency deploying agents for UK businesses that pay for themselves in 90 days — or we keep building until they do. Book a free Agent Audit.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI Automation Agency UK | Raynaters Tech',
    description:
      'AI agents that pay for themselves in 90 days — or we keep building until they do. 47,000+ operational hours reclaimed across the UK, US and EU.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/raynaters-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency UK | Raynaters Tech',
    description:
      'AI agents that pay for themselves in 90 days — or we keep building until they do.',
    images: ['/raynaters-logo.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans bg-bg text-text-primary antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <LiveAvatar />
        <Analytics />
      </body>
    </html>
  );
}
