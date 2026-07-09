import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { MediaFrame } from '@/components/ui/MediaFrame';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata, absUrl } from '@/lib/seo/meta';
import { breadcrumbSchema, articleSchema, reviewSchema } from '@/lib/seo/schema';
import { CASE_STUDIES, getCaseStudy } from '@/lib/case-studies';
import type { CaseStudy } from '@/lib/case-studies/types';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return pageMetadata({
    title: study.metadata.title,
    description: study.metadata.description,
    path: `/case-studies/${study.slug}`,
    type: 'article',
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const related = study.related
    .map((s) => getCaseStudy(s))
    .filter((s): s is CaseStudy => Boolean(s));

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Case studies', path: '/case-studies' },
    { name: study.client, path: `/case-studies/${study.slug}` },
  ];

  return (
    <main className="relative grain min-h-screen overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            headline: study.headlineResult,
            description: study.metadata.description,
            url: absUrl(`/case-studies/${study.slug}`),
            datePublished: '2026-01-15',
          }),
          reviewSchema({
            body: study.quote.text,
            author: study.quote.author,
            itemName: 'Raynaters Tech',
          }),
        ]}
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
        <Container width="grid">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border border-border bg-surface-hover text-[14px] font-medium text-text-primary">
              {study.monogram}
            </span>
            <div>
              <p className="text-[14px] font-medium tracking-[-0.01em] text-text-primary">
                {study.client}
              </p>
              <p className="text-[12px] uppercase tracking-[0.16em] text-text-muted">
                {study.category}
              </p>
            </div>
          </div>
          <Reveal delay={0.05}>
            <h1 className="mt-7 max-w-[18ch] font-display text-balance text-[32px] leading-[1.08] tracking-tightest text-text-primary sm:text-[44px] md:text-[56px] md:leading-[1.03]">
              {study.headlineResult}
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 block">
            <MediaFrame
              src={study.image.src}
              alt={study.image.alt}
              aspectClass="aspect-[21/9]"
              priority
              overlay
              glow
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </Reveal>
        </Container>
      </section>

      {/* Story */}
      <section className="border-b border-border py-14 sm:py-20 md:py-24">
        <Container width="text">
          <Reveal>
            <Eyebrow>The full story</Eyebrow>
          </Reveal>
          <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-16">
            {study.story.map((s, i) => (
              <Reveal key={s.heading} delay={Math.min(i * 0.04, 0.2)}>
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden
                    className="font-display text-[14px] tracking-[0.12em] text-accent sm:text-[15px]"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-[24px] leading-[1.12] tracking-[-0.02em] text-text-primary sm:text-[30px]">
                    {s.heading}
                  </h2>
                </div>
                <p className="mt-4 text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[18px] sm:leading-[1.75]">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="border-b border-border py-14 sm:py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>The results</Eyebrow>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {study.results.map((r, i) => (
              <Reveal key={i} delay={Math.min(i * 0.06, 0.3)}>
                <div className="rounded-[16px] border border-border bg-surface p-7 text-center">
                  <p className="font-display text-[48px] leading-none tracking-[-0.04em] text-accent sm:text-[56px]">
                    {r.metric}
                  </p>
                  <p className="mt-3 text-[13px] uppercase tracking-[0.14em] text-text-muted">
                    {r.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quote */}
          <Reveal delay={0.1} className="mt-12 block">
            <blockquote className="mx-auto max-w-[760px] rounded-[18px] border border-border bg-surface p-7 sm:p-9">
              <p className="font-display text-pretty text-[22px] italic leading-[1.4] tracking-[-0.01em] text-text-primary sm:text-[26px]">
                &ldquo;{study.quote.text}&rdquo;
              </p>
              <footer className="mt-5 text-[14px] text-text-muted">
                — {study.quote.author}, {study.quote.role}
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-b border-border py-14 sm:py-20 md:py-24">
          <Container>
            <Reveal>
              <Eyebrow>More results</Eyebrow>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {related.map((r) => (
                <CaseStudyCard key={r.slug} study={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <LandingFinalCTA
        title="Want a result like this?"
        sub="Book a free 30-minute Agent Audit. We'll map your workflows and send a written ROI projection within 48 hours."
        utmCampaign={`case-study-${study.slug}`}
      />

      <Footer />
    </main>
  );
}
