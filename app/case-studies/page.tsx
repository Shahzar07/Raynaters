import type { Metadata } from 'next';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorityStrip } from '@/components/landing/AuthorityStrip';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo/meta';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { CASE_STUDIES } from '@/lib/case-studies';

export const metadata: Metadata = pageMetadata({
  title: 'Case Studies | Raynaters Tech',
  description:
    'Real UK AI agent deployments and the results they delivered — recovered revenue, reclaimed hours and booked work across trades, clinics and law firms.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <main className="relative grain min-h-screen overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Case studies', path: '/case-studies' },
        ])}
      />
      <Navigation />

      <section className="relative overflow-hidden border-b border-border pt-10 pb-14 sm:pt-12 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-[-25%] h-[520px] w-[1000px] -translate-x-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(211,251,163,0.12), transparent 72%)',
            }}
          />
        </div>
        <Container>
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Case studies', path: '/case-studies' }]} />
          <div className="mt-8 max-w-[760px]">
            <Reveal>
              <Eyebrow>Case studies</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-balance text-[34px] leading-[1.06] tracking-tightest text-text-primary sm:text-[50px] md:text-[62px] md:leading-[1.02]">
                Real UK deployments. Real recovered revenue.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[58ch] text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[19px]">
                A selection of agents we&apos;ve deployed across UK service businesses — what
                they were losing, what we built, and the result it delivered.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14 sm:py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {CASE_STUDIES.map((study, i) => (
              <Reveal key={study.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <AuthorityStrip />

      <LandingFinalCTA
        title="Your business could be the next case study."
        sub="Book a free 30-minute Agent Audit. We'll map your workflows and send a written ROI projection within 48 hours."
        utmCampaign="case-studies"
      />

      <Footer />
    </main>
  );
}
