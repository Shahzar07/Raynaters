'use client';

import { motion } from 'framer-motion';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * The wall every growing business hits.
 *
 * Renders the escalation chain (More customers → More employees → …) as a
 * vertical sequence that visibly tightens and dims as it descends, so the
 * section *feels* like things slowing down before the copy says so.
 */
export default function ProblemCascade() {
  const { eyebrow, title, sub, chain, outcome, closer } = CONTENT.problem;

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

        <div className="mt-14 md:mt-16">
          <ol className="mx-auto flex max-w-[560px] flex-col items-center">
            {chain.map((step, i) => (
              <li key={step} className="flex w-full flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full rounded-[14px] border border-border bg-surface px-6 py-4 text-center"
                  // Each rung is fractionally narrower and dimmer than the one
                  // above it — the squeeze is the point.
                  style={{
                    width: `${100 - i * 6}%`,
                    opacity: 1 - i * 0.11,
                  }}
                >
                  <span className="text-[16px] tracking-[-0.01em] text-text-primary sm:text-[18px]">
                    {step}
                  </span>
                </motion.div>

                <motion.span
                  aria-hidden
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.3, delay: i * 0.09 + 0.25 }}
                  style={{ transformOrigin: 'top' }}
                  className="my-2 block h-6 w-px bg-border"
                />
              </li>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <p className="mt-4 text-center font-display text-[28px] leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[36px] md:text-[42px]">
              {outcome}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-[46ch] border-t border-border pt-8 text-center text-[17px] leading-relaxed text-text-secondary sm:text-[19px]">
              {closer}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
