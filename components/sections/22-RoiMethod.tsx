'use client';

import { motion } from 'framer-motion';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * How the guarantee is actually measured.
 *
 * A guarantee that is only asserted reads as marketing. Showing the five steps
 * — and that step four is measurement against the number we wrote down in step
 * two — makes it read as method.
 */
export default function RoiMethod() {
  const { eyebrow, title, sub, steps } = CONTENT.roiMethod;

  return (
    <Section id="roi-method" className="relative overflow-hidden border-b border-border bg-bg">
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

        {/* Vertical spine — each step hangs off a single continuous rule */}
        <ol className="relative mt-14 md:mt-16">
          <span
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[27px]"
          />
          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-5 pb-10 last:pb-0 md:gap-7"
            >
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-surface font-display text-[13px] tracking-[0.1em] text-accent md:h-14 md:w-14 md:text-[15px]">
                {step.n}
              </span>
              <div className="pt-1 md:pt-2.5">
                <h3 className="font-display text-[21px] leading-[1.15] tracking-[-0.02em] text-text-primary sm:text-[25px]">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[58ch] text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
