'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

export default function WhyDoingThis() {
  const why = CONTENT.why;
  return (
    <Section className="relative overflow-hidden border-b border-border">
      <Container width="text">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">{why.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-7 font-display text-[32px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[44px] md:text-[60px] md:leading-[1.0]">
              {why.title}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <figure className="relative mx-auto mt-12 max-w-[760px] overflow-hidden rounded-[22px] border border-border bg-surface p-8 md:mt-14 md:p-12">
            {/* oversized quote mark */}
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -left-2 -top-7 select-none text-[140px] leading-none text-accent/15 md:-top-10 md:text-[200px]"
            >
              &ldquo;
            </span>

            <blockquote className="relative">
              <p className="text-[19px] leading-[1.65] text-text-secondary md:text-[22px]">
                {why.body}
              </p>
              <p className="font-display mt-6 text-[24px] leading-[1.3] tracking-[-0.02em] text-text-primary md:text-[32px]">
                {why.punch}
              </p>
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10 text-[13px] font-medium text-accent">
                R
              </span>
              <span className="text-[13px] tracking-[-0.01em] text-text-secondary">
                {why.attribution}
              </span>
            </figcaption>

            {/* soft corner glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(211,251,163,0.12), transparent 70%)',
              }}
            />
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
