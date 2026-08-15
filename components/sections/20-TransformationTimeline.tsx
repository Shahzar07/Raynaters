'use client';

import { motion } from 'framer-motion';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Before → After transformation spine.
 *
 * Two columns on desktop separated by a centre rule; on mobile the "before"
 * list stacks above the "after" list so the narrative still reads top-down.
 * Paired by index — each before line has a matching after line.
 */
export default function TransformationTimeline() {
  const { eyebrow, title, sub, beforeLabel, afterLabel, before, after } =
    CONTENT.timeline;

  return (
    <Section className="relative overflow-hidden border-b border-border bg-bg">
      <Container width="grid">
        <div className="max-w-[680px]">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-[34px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[44px] md:text-[56px]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-text-secondary md:text-[19px]">
              {sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-0">
          {/* Before */}
          <div className="md:pr-10 lg:pr-14">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-text-muted">
              {beforeLabel}
            </p>
            <ul className="mt-6 space-y-3">
              {before.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-3 rounded-[12px] border border-border bg-surface/40 px-5 py-4 text-[15px] leading-snug text-text-muted"
                >
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted/60"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* After — centre rule lives on this column's left edge */}
          <div className="relative md:border-l md:border-border md:pl-10 lg:pl-14">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
              {afterLabel}
            </p>
            <ul className="mt-6 space-y-3">
              {after.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.06 + 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-3 rounded-[12px] border border-border bg-surface px-5 py-4 text-[15px] leading-snug text-text-primary"
                >
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(211,251,163,0.6)]"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
