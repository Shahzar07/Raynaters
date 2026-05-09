'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function EvolutionStory() {
  const stages = CONTENT.evolution.stages;
  return (
    <Section id="evolution" className="border-b border-border">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{CONTENT.evolution.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[36px] leading-[1.05] tracking-[-0.03em] text-text-primary md:text-[56px]">
                {CONTENT.evolution.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[36ch] text-[17px] leading-relaxed text-text-secondary md:text-[19px]">
                {CONTENT.evolution.sub}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <RevealStagger className="relative">
              {/* Vertical timeline rail */}
              <div
                aria-hidden
                className="absolute left-[10px] top-3 bottom-3 w-px bg-gradient-to-b from-border via-border to-transparent md:left-[14px]"
              />
              <ul className="space-y-10 md:space-y-14">
                {stages.map((s, idx) => (
                  <motion.li
                    key={s.marker}
                    variants={staggerItem}
                    className="relative pl-12 md:pl-16"
                  >
                    {/* Timeline dot */}
                    <span
                      aria-hidden
                      className={cn(
                        'absolute left-[3px] top-[6px] grid h-[18px] w-[18px] place-items-center rounded-full border md:left-[5px]',
                        idx === stages.length - 1
                          ? 'border-accent bg-accent/15'
                          : 'border-border bg-surface',
                      )}
                    >
                      <span
                        className={cn(
                          'block h-1.5 w-1.5 rounded-full',
                          idx === stages.length - 1
                            ? 'bg-accent shadow-[0_0_10px_rgba(255,92,44,0.7)]'
                            : 'bg-text-muted',
                        )}
                      />
                    </span>

                    <div className="flex items-baseline gap-3">
                      <span className="text-[12px] uppercase tracking-[0.22em] text-text-muted">
                        {s.marker}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      <span
                        className={cn(
                          'tabular-nums text-[14px] tracking-[-0.01em] font-medium',
                          idx === stages.length - 1
                            ? 'text-accent'
                            : 'text-text-secondary',
                        )}
                      >
                        {s.metric}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[22px] tracking-[-0.02em] text-text-primary md:text-[26px]">
                      {s.headline}
                    </h3>
                    <p className="mt-3 max-w-[55ch] text-[16px] leading-relaxed text-text-secondary">
                      {s.body}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </RevealStagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}
