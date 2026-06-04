import type { Metadata } from 'next';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo/meta';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { RESOURCES } from '@/lib/resources';

export const metadata: Metadata = pageMetadata({
  title: 'Resources | Raynaters Tech',
  description:
    'Honest, practical guides on AI automation and AI receptionists for UK businesses — pricing, what to automate first, and how to get a return.',
  path: '/resources',
});

export default function ResourcesPage() {
  const featured = RESOURCES.find((r) => r.featured);
  const rest = RESOURCES.filter((r) => !r.featured);

  return (
    <main className="relative grain min-h-screen overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
        ])}
      />
      <Navigation />

      <section className="relative overflow-hidden border-b border-border pt-10 pb-14 sm:pt-12 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-[-25%] h-[520px] w-[1000px] -translate-x-1/2 rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgba(211,251,163,0.12), transparent 72%)' }}
          />
        </div>
        <Container>
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }]} />
          <div className="mt-8 max-w-[760px]">
            <Reveal>
              <Eyebrow>Resources</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-balance text-[34px] leading-[1.06] tracking-tightest text-text-primary sm:text-[50px] md:text-[62px] md:leading-[1.02]">
                Plain-English guides to automating your business.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[58ch] text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[19px]">
                No hype, no jargon — just practical answers on what AI automation costs, what
                to automate first, and how to make sure it pays for itself.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14 sm:py-20 md:py-24">
        <Container>
          {featured && (
            <Reveal className="block">
              <ResourceCard resource={featured} featured />
            </Reveal>
          )}
          {rest.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {rest.map((r, i) => (
                <Reveal key={r.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
                  <ResourceCard resource={r} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <LandingFinalCTA
        title="Stop reading about it. Start saving the hours."
        sub="Book a free 30-minute Agent Audit and we'll show you exactly what's worth automating first — with a written ROI projection within 48 hours."
        utmCampaign="resources"
      />

      <Footer />
    </main>
  );
}
