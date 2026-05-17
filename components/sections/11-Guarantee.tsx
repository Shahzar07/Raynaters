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
            <h2 className="mt-6 sm:mt-7 font-display text-balance text-[32px] leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-[42px] md:text-[56px] md:leading-[1.05]">
              {CONTENT.guarantee.title}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-10 sm:mt-14">
            {/* Outer card */}
            <div className="relative rounded-[20px] border border-border bg-surface p-1.5 sm:p-2 md:p-3">
              <div className="rounded-[14px] border border-border bg-bg p-5 sm:p-7 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10">
                    <ShieldCheck className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-accent leading-tight">
                    Pay-back-or-we-keep-building
                  </p>
                </div>

                <RevealStagger
                  stagger={0.1}
                  delay={0.1}
                  className="mt-8 sm:mt-10 grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 md:gap-10"
                >
                  {CONTENT.guarantee.layers.map((layer) => (
                    <motion.div
                      key={layer.n}
                      variants={staggerItem}
                      className="relative"
                    >
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="font-display text-[40px] leading-none tracking-[-0.04em] text-text-muted sm:text-[44px] md:text-[56px]">
                          {layer.n}
                        </span>
                        <span className="text-[13px] sm:text-[15px] uppercase tracking-[0.18em] text-text-primary">
                          {layer.label}
                        </span>
                      </div>
                      <p className="mt-4 sm:mt-5 max-w-[44ch] text-pretty text-[15px] leading-relaxed text-text-secondary sm:text-[16px] md:text-[17px]">
                        {layer.body}
                      </p>
                    </motion.div>
                  ))}
                </RevealStagger>

                <div className="mt-10 sm:mt-12 border-t border-border pt-6 text-center">
                  <p className="font-display text-balance text-[18px] italic tracking-[-0.02em] text-text-primary sm:text-[22px] md:text-[26px]">
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
                  'radial-gradient(closest-side, rgba(211,251,163,0.16), transparent 70%)',
              }}
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
