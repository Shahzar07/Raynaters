'use client';

import { motion } from 'framer-motion';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Introduces Growth OS™ — the four things a business already has, shown
 * converging into one system. Built with layout + CSS rather than an image so
 * it stays crisp at any size and costs nothing to load.
 */
export default function GrowthOS() {
  const { eyebrow, title, sub, layers, closer } = CONTENT.growthOS;

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

        <div className="mt-14 grid grid-cols-1 gap-4 md:mt-16 md:gap-5 lg:grid-cols-2">
          {layers.map((layer, i) => (
            <motion.article
              key={layer.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[18px] border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/30 md:p-8"
            >
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden
                  className="font-display text-[13px] tracking-[0.14em] text-accent"
                >
                  {layer.n}
                </span>
                <h3 className="font-display text-[24px] leading-[1.1] tracking-[-0.02em] text-text-primary sm:text-[28px]">
                  {layer.name}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
                {layer.body}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Convergence line — the four layers resolving into one system */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center">
            <span aria-hidden className="h-10 w-px bg-border" />
            <div className="rounded-full border border-accent/40 bg-accent/10 px-6 py-2.5">
              <span className="text-[13px] font-medium uppercase tracking-[0.16em] text-accent">
                Growth OS™
              </span>
            </div>
            <p className="mt-6 max-w-[46ch] text-center text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
              {closer}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
