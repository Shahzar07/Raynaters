'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { bookHref } from '@/lib/seo/utm';

export default function FinalCTA() {
  return (
    <Section className="relative overflow-hidden border-b border-border">
      {/* Subtle radial — single accent glow, low opacity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[140%] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[600px] md:w-[1100px]"
          style={{
            background:
              'radial-gradient(closest-side, rgba(211,251,163,0.16), rgba(211,251,163,0.05) 45%, transparent 70%)',
          }}
        />
      </div>

      <Container width="text">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">{CONTENT.finalCta.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-8 max-w-[16ch] font-display text-[34px] leading-[1.04] tracking-[-0.035em] text-text-primary sm:text-[48px] md:text-[60px] md:leading-[1.02] lg:text-[72px]">
              {CONTENT.finalCta.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-7 max-w-[58ch] text-pretty text-[16px] leading-relaxed text-text-secondary md:text-[18px]">
              {CONTENT.finalCta.sub}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-11 flex justify-center">
              <Button
                href={bookHref({ campaign: 'homepage', content: 'final_cta' })}
                size="xl"
                withArrow
                fullWidthOnMobile
              >
                {CONTENT.finalCta.cta}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-7 flex flex-col items-center justify-center gap-x-6 gap-y-2 text-[13px] text-text-muted sm:flex-row sm:text-[14px]">
              {['Free 30-minute session', 'ROI projection in 48 hours', 'No pitch deck'].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
