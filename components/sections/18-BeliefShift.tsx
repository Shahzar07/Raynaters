'use client';

import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * The centre of gravity for the whole page: one belief, stated once, with
 * enough space around it that it reads as a position rather than a claim.
 * Deliberately sparse — the whitespace is doing the work here.
 */
export default function BeliefShift() {
  const { eyebrow, lead, strike, trail, emphasis, sub } = CONTENT.belief;

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg py-24 sm:py-32 md:py-40">
      {/* Accent bloom behind the statement */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(211,251,163,0.10), transparent 70%)',
          }}
        />
      </div>

      <Container width="text">
        <div className="text-center">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-8 max-w-[20ch] font-display text-[36px] leading-[1.06] tracking-tightest text-text-primary sm:text-[52px] md:text-[68px] md:leading-[1.02]">
              {lead}{' '}
              <span className="relative inline-block text-text-muted">
                {strike}
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-text-muted/70"
                />
              </span>{' '}
              {trail} <span className="text-accent">{emphasis}</span>
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-8 max-w-[48ch] text-[16px] leading-relaxed text-text-secondary sm:text-[18px]">
              {sub}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
