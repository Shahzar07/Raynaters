'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <Section id="guarantee" className="border-b border-border">
      <Container width="text">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">{CONTENT.guarantee.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-7 font-display text-[36px] leading-[1.05] tracking-[-0.03em] text-text-primary md:text-[56px]">
              {CONTENT.guarantee.title}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-14">
            {/* Outer card */}
            <div className="relative rounded-[20px] border border-border bg-surface p-2 md:p-3">
              <div className="rounded-[14px] border border-border bg-bg p-7 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/40 bg-accent/10">
                    <ShieldCheck className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                  <p className="text-[12px] uppercase tracking-[0.22em] text-accent">
                    Pay-back-or-we-keep-building
                  </p>
                </div>

                <RevealStagger
                  stagger={0.1}
                  delay={0.1}
                  className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
                >
                  {CONTENT.guarantee.layers.map((layer) => (
                    <motion.div
                      key={layer.n}
                      variants={staggerItem}
                      className="relative"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-[44px] leading-none tracking-[-0.04em] text-text-muted md:text-[56px]">
                          {layer.n}
                        </span>
                        <span className="text-[15px] uppercase tracking-[0.18em] text-text-primary">
                          {layer.label}
                        </span>
                      </div>
                      <p className="mt-5 max-w-[44ch] text-[16px] leading-relaxed text-text-secondary md:text-[17px]">
                        {layer.body}
                      </p>
                    </motion.div>
                  ))}
                </RevealStagger>

                <div className="mt-12 border-t border-border pt-6 text-center">
                  <p className="font-display text-[22px] italic tracking-[-0.02em] text-text-primary md:text-[26px]">
                    {CONTENT.guarantee.closer}
                  </p>
                </div>
              </div>
            </div>

            {/* Soft underglow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-12 -bottom-12 -z-10 h-40"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(255,92,44,0.10), transparent 70%)',
              }}
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
