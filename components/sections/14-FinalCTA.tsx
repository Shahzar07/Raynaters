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
          className="absolute left-1/2 top-1/2 h-[600px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full"
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
            <h2 className="mt-7 sm:mt-8 font-display text-balance text-[38px] leading-[1.04] tracking-[-0.04em] text-text-primary sm:text-[56px] md:text-[80px] lg:text-[96px] md:leading-[1.0]">
              {CONTENT.finalCta.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 sm:mt-6 inline-flex items-center gap-3 text-pretty text-[14px] text-text-secondary sm:text-[16px] md:text-[18px]">
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(211,251,163,0.8)]" />
              {CONTENT.finalCta.sub}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 sm:mt-12 flex justify-center px-4 sm:px-0">
              <Button href={CONTENT.brand.bookHref} size="lg" withArrow className="w-full sm:w-auto">
                {CONTENT.finalCta.cta}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-7 sm:mt-8 text-[12px] sm:text-[13px] text-text-muted">
              {CONTENT.finalCta.smallprint}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
