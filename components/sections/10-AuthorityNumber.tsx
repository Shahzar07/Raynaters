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

export default function AuthorityNumber() {
  return (
    <Section className="border-b border-border">
      <Container>
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">Authority anchor</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              aria-label={`${CONTENT.authority.display} in operational cost cut`}
              className="font-display mt-8 text-[88px] leading-[0.95] tracking-[-0.05em] text-text-primary md:text-[200px] md:leading-[0.95]"
            >
              <CountUp
                to={CONTENT.authority.value}
                duration={2.4}
                format={formatMillions}
                className="tabular-nums"
              />
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-[44ch] text-[18px] leading-relaxed text-text-secondary md:text-[20px]">
              {CONTENT.authority.label}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-[12px] uppercase tracking-[0.22em] text-text-muted">
              {CONTENT.authority.footnote}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
