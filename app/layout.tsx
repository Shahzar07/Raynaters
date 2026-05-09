import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
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
  metadataBase: new URL('https://raynaters.com'),
  title: 'Raynaters Tech — Agentic Forces that pay for themselves in 90 days',
  description:
    'We deploy AI agents that pay for themselves within 90 days — or we keep building until they do. 47,000+ operational hours reclaimed across UK, US and EU deployments.',
  openGraph: {
    title: 'Raynaters Tech — Agentic Forces',
    description:
      'AI agents that pay for themselves in 90 days — or we keep building until they do.',
    type: 'website',
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
        {children}
      </body>
    </html>
  );
}
