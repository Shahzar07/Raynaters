import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/seo/schema';
import type { LegalDoc } from '@/lib/legal/types';

/** Shared layout for the privacy and terms pages — long-form, readable, quiet. */
export function LegalPage({ doc, path }: { doc: LegalDoc; path: string }) {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: doc.title, path },
  ];

  const formatted = new Date(doc.lastUpdated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="relative grain min-h-screen overflow-x-hidden">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-10 pb-12 sm:pt-12 sm:pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-[-30%] h-[420px] w-[900px] -translate-x-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(211,251,163,0.10), transparent 72%)',
            }}
          />
        </div>
        <Container width="text">
          <Breadcrumbs items={crumbs} />
          <Reveal>
            <h1 className="mt-8 font-display text-[34px] leading-[1.06] tracking-tightest text-text-primary sm:text-[44px] md:text-[54px]">
              {doc.title}
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-[62ch] text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[18px]">
              {doc.intro}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[13px] uppercase tracking-[0.16em] text-text-muted">
              Last updated {formatted}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-18 md:py-24">
        <Container width="text">
          <div className="space-y-12 sm:space-y-14">
            {doc.sections.map((s, i) => (
              <Reveal key={s.heading} delay={Math.min(i * 0.03, 0.15)}>
                <article>
                  <div className="flex items-baseline gap-4">
                    <span
                      aria-hidden
                      className="font-display text-[13px] tracking-[0.14em] text-accent"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-[22px] leading-[1.14] tracking-[-0.02em] text-text-primary sm:text-[27px]">
                      {s.heading}
                    </h2>
                  </div>

                  {s.body?.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-4 text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px] sm:leading-[1.75]"
                    >
                      {p}
                    </p>
                  ))}

                  {s.bullets && (
                    <ul className="mt-5 space-y-3">
                      {s.bullets.map((b) => (
                        <li
                          key={b.slice(0, 40)}
                          className="flex items-start gap-3 text-[16px] leading-relaxed text-text-secondary sm:text-[17px]"
                        >
                          <span
                            aria-hidden
                            className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 rounded-[16px] border border-border bg-surface p-7 sm:p-8">
              <Eyebrow>Questions</Eyebrow>
              <p className="mt-4 text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
                If anything here is unclear, email{' '}
                <a
                  href="mailto:team@raynaters.tech"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  team@raynaters.tech
                </a>{' '}
                and we will come back to you.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
