'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

export default function WhyDoingThis() {
  return (
    <Section className="border-b border-border">
      <Container width="text">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">{CONTENT.why.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-7 font-display text-[36px] leading-[1.05] tracking-[-0.03em] text-text-primary md:text-[64px] md:leading-[1.0]">
              {CONTENT.why.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-8 max-w-[58ch] text-[18px] leading-[1.7] text-text-secondary md:text-[20px]">
              {CONTENT.why.body}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
