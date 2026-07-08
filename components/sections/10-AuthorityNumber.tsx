'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { CountUp } from '@/components/ui/CountUp';
import { Eyebrow } from '@/components/ui/Eyebrow';

const formatMillions = (n: number) => {
  const m = n / 1_000_000;
  return `$${m.toFixed(1)}M+`;
};

const REGIONS = ['United Kingdom', 'Australia', 'United States', 'European Union'];

export default function AuthorityNumber() {
  return (
    <Section className="border-b border-border">
      <Container width="grid">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <Eyebrow className="justify-center">The bottom line</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              aria-label={`${CONTENT.authority.display} in operational cost cut`}
              className="font-display mt-8 text-[72px] leading-[0.9] tracking-[-0.05em] text-text-primary sm:text-[110px] md:text-[150px] lg:text-[180px]"
            >
              <CountUp
                to={CONTENT.authority.value}
                duration={2.6}
                format={formatMillions}
                className="tabular-nums"
              />
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-8 max-w-[40ch] text-[19px] leading-relaxed text-text-secondary md:text-[22px]">
              {CONTENT.authority.label}
            </p>
          </Reveal>

          {/* Region row — minimalist proof of reach */}
          <Reveal delay={0.18}>
            <div className="mx-auto mt-12 flex max-w-[680px] flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-border pt-8">
              {REGIONS.map((r) => (
                <span
                  key={r}
                  className="flex items-center gap-2 text-[13px] tracking-[-0.01em] text-text-secondary"
                >
                  <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                  {r}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-6 text-[12px] uppercase tracking-[0.22em] text-text-muted">
              {CONTENT.authority.footnote}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
