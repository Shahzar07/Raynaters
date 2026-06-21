'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';

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
            <h2 className="mt-8 font-display text-[40px] leading-[1.02] tracking-[-0.04em] text-text-primary sm:text-[56px] md:text-[72px] lg:text-[96px] lg:leading-[1.0]">
              {CONTENT.finalCta.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 inline-flex items-center gap-3 text-[16px] text-text-secondary md:text-[18px]">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(211,251,163,0.8)]" />
              {CONTENT.finalCta.sub}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-12 flex justify-center">
              <Button href={CONTENT.brand.bookHref} size="lg" withArrow>
                {CONTENT.finalCta.cta}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-8 text-[13px] text-text-muted">
              {CONTENT.finalCta.smallprint}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
