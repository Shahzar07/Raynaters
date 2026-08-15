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
    'Honest, practical guides on AI automation and AI receptionists for businesses in the UK and Australia — pricing, what to automate first, and how to get a return.',
  path: '/resources',
});

const VIDEO_POINTS = [
  'A real system we built — not a mock-up',
  'How calls and enquiries turn into booked work',
  'What the hand-off to your team looks like',
];

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

      {/* Hero */}
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

      {/* Watch — real build video */}
      <section className="border-b border-border py-14 sm:py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="block lg:col-span-7">
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-6 -top-6 bottom-0 -z-10 rounded-[36px]"
                  style={{
                    background:
                      'radial-gradient(60% 55% at 50% 0%, rgba(211,251,163,0.22), transparent 70%)',
                  }}
                />
                <div className="overflow-hidden rounded-[18px] border-2 border-accent/40 bg-surface shadow-[0_0_50px_-12px_rgba(211,251,163,0.35),0_30px_100px_-30px_rgba(0,0,0,0.85)]">
                  <div className="flex items-center gap-2 border-b border-border bg-bg/60 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
                    <span className="ml-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Inside a real build
                    </span>
                  </div>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Walkthrough of a real Raynaters system"
                    className="block aspect-video h-full w-full bg-bg object-contain"
                  >
                    <source src="/resources-intro.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Watch first</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-text-primary sm:text-[36px] md:text-[42px]">
                  See a real system working before you read about one.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
                  Two minutes inside an actual deployment — the same kind of system the
                  guides below teach you to plan, price and get a return on.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-7 space-y-3">
                  {VIDEO_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] text-text-secondary">
                      <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section className="border-b border-border py-14 sm:py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <Eyebrow>The guides</Eyebrow>
                <h2 className="mt-4 font-display text-[26px] leading-[1.1] tracking-[-0.02em] text-text-primary sm:text-[32px]">
                  Start with what it costs. Then what to automate first.
                </h2>
              </div>
              <p className="hidden shrink-0 text-[13px] uppercase tracking-[0.16em] text-text-muted sm:block">
                {RESOURCES.length} guides
              </p>
            </div>
          </Reveal>

          {featured && (
            <Reveal className="mt-10 block">
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
