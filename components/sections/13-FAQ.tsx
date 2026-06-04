'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Accordion } from '@/components/ui/Accordion';

export default function FAQ() {
  return (
    <Section id="faq" className="border-b border-border">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <Reveal>
              <Eyebrow>{CONTENT.faq.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-balance text-[32px] leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-[40px] md:text-[52px] md:leading-[1.05]">
                {CONTENT.faq.title}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-text-secondary sm:text-[16px] md:text-[17px]">
                Still curious? Send Shahzar a note —{' '}
                <a
                  className="text-text-primary underline underline-offset-4 decoration-border hover:decoration-accent"
                  href="mailto:contact@raynaters.tech"
                >
                  contact@raynaters.tech
                </a>
                .
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <Accordion items={CONTENT.faq.items} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
