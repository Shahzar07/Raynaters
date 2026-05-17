'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { motion } from 'framer-motion';

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface-hover text-[14px] font-medium tracking-[-0.01em] text-text-primary">
      {initials}
    </div>
  );
}

export default function IndustryAgnostic() {
  return (
    <Section id="industry" className="border-b border-border">
      <Container>
        <div className="max-w-[760px]">
          <Reveal>
            <Eyebrow>{CONTENT.industry.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-balance text-[32px] leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-[42px] md:text-[56px] md:leading-[1.05]">
              {CONTENT.industry.title}
            </h2>
          </Reveal>
        </div>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {CONTENT.industry.cards.map((c, idx) => (
            <motion.article
              key={c.name}
              variants={staggerItem}
              className="group relative flex flex-col rounded-[16px] border border-border bg-surface p-6 sm:p-7 transition-colors duration-300 hover:border-text-muted/40"
            >
              {/* Index marker */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-text-muted tabular-nums">
                  Case · {String(idx + 1).padStart(2, '0')}
                </span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
              </div>

              {/* Big metric */}
              <div className="mt-8 sm:mt-10 flex items-baseline gap-3 flex-wrap">
                <span className="font-display text-[52px] leading-none tracking-[-0.04em] text-accent sm:text-[64px] md:text-[72px]">
                  {c.metric}
                </span>
                <span className="text-[13px] uppercase tracking-[0.18em] text-text-muted">
                  {c.metricLabel}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 text-[16px] leading-relaxed text-text-primary">
                <span aria-hidden className="text-text-muted">“</span>
                {c.quote}
                <span aria-hidden className="text-text-muted">”</span>
              </blockquote>

              {/* Person */}
              <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <Avatar initials={c.initials} />
                <div className="leading-tight">
                  <p className="text-[14px] font-medium text-text-primary">
                    {c.name}
                  </p>
                  <p className="text-[13px] text-text-secondary">
                    {c.role} <span className="text-text-muted">·</span>{' '}
                    {c.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
