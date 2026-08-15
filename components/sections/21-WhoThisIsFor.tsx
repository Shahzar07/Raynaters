'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * ICP qualifier.
 *
 * Naming the avatar and openly disqualifying the wrong-fit reader does two
 * jobs at once: the right reader recognises themselves immediately, and the
 * willingness to turn work away reads as confidence rather than sales.
 */
export default function WhoThisIsFor() {
  const { eyebrow, title, sub, forLabel, notForLabel, forItems, notForItems, closer } =
    CONTENT.icp;

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

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {/* Fit */}
          <Reveal className="h-full">
            <div className="h-full rounded-[20px] border border-accent/25 bg-surface p-7 shadow-[0_0_50px_-22px_rgba(211,251,163,0.35)] sm:p-9">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
                {forLabel}
              </p>
              <ul className="mt-7 space-y-4">
                {forItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3.5 text-[15px] leading-relaxed text-text-primary sm:text-[16px]"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15">
                      <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Not a fit */}
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-[20px] border border-border bg-surface/40 p-7 sm:p-9">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-text-muted">
                {notForLabel}
              </p>
              <ul className="mt-7 space-y-4">
                {notForItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3.5 text-[15px] leading-relaxed text-text-muted sm:text-[16px]"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-text-muted/10">
                      <X className="h-3 w-3 text-text-muted" strokeWidth={3} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-10 max-w-[56ch] text-center text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
            {closer}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
