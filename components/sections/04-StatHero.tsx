'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

export default function StatHero() {
  return (
    <Section className="overflow-hidden border-y border-border bg-bg">
      <Container>
        <div className="grid grid-cols-1 items-end gap-10 sm:gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>The proof number</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 sm:mt-6 max-w-[20ch] text-[18px] leading-[1.4] text-text-secondary sm:text-[20px] md:text-[22px]">
                {CONTENT.statHero.label}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-text-muted">
                {CONTENT.statHero.footnote}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <Reveal>
                <h2
                  aria-label={`${CONTENT.statHero.display} hours reclaimed`}
                  className="font-display text-left md:text-right text-[64px] leading-[0.95] tracking-[-0.05em] text-text-primary sm:text-[88px] md:text-[120px] lg:text-[160px] md:leading-[0.95]"
                >
                  <CountUp
                    to={CONTENT.statHero.value}
                    duration={2.2}
                    className="tabular-nums"
                  />
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 flex items-center justify-start md:justify-end gap-2 text-[12px] sm:text-[13px] uppercase tracking-[0.22em] text-accent">
                  <span aria-hidden className="h-px w-8 bg-accent" />
                  hours reclaimed
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
