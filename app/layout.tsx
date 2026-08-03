import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import ConvaiWidget from '@/components/ui/ConvaiWidget';
import MetaPixel from '@/components/analytics/MetaPixel';
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
      'AI agents that pay for themselves in 90 days — or we keep building until they do. 47,000+ hours of manual work saved across the UK and Australia.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155053_5eceb174-bd85-4e5b-8715-10d0673aacf4.png', width: 2752, height: 1536, alt: 'Raynaters Tech — AI agents that pay for themselves in 90 days' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency UK | Raynaters Tech',
    description:
      'AI agents that pay for themselves in 90 days — or we keep building until they do.',
    images: ['https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155053_5eceb174-bd85-4e5b-8715-10d0673aacf4.png'],
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
        {/* Google tag (gtag.js) — Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G2HE3PDF0E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G2HE3PDF0E');
          `}
        </Script>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <ConvaiWidget />
        <MetaPixel />
        <Analytics />
      </body>
    </html>
  );
}
