'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  const g = CONTENT.guarantee;
  return (
    <Section id="guarantee" className="relative overflow-hidden border-b border-border">
      <Container width="grid">
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <Eyebrow className="justify-center">{g.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-7 font-display text-[34px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[44px] md:text-[56px]">
              {g.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-relaxed text-text-secondary md:text-[18px]">
              {g.sub}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          {/* Two layer cards */}
          <RevealStagger
            stagger={0.1}
            className="grid grid-cols-1 gap-5 md:col-span-8 md:grid-cols-2 md:gap-6"
          >
            {g.layers.map((layer) => (
              <motion.div
                key={layer.n}
                variants={staggerItem}
                className="group flex h-full flex-col rounded-[18px] border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/30 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-accent/40 bg-accent/10">
                    <ShieldCheck className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-[40px] leading-none tracking-[-0.04em] text-text-muted/50">
                    {layer.n}
                  </span>
                </div>

                <p className="mt-7 text-[19px] tracking-[-0.02em] text-text-primary">
                  {layer.label}
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-secondary">
                  {layer.body}
                </p>

                <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(211,251,163,0.7)]" />
                  <span className="text-[12.5px] font-medium tracking-[-0.01em] text-text-primary">
                    {layer.proof}
                  </span>
                </div>
              </motion.div>
            ))}
          </RevealStagger>

          {/* The "0 times invoked" anchor */}
          <Reveal delay={0.15} className="md:col-span-4">
            <div className="flex h-full flex-col justify-between rounded-[18px] border border-accent/25 bg-accent/[0.05] p-7 md:p-8">
              <p className="font-display text-[88px] leading-none tracking-[-0.05em] text-accent md:text-[104px]">
                {g.stat.value}
              </p>
              <div className="mt-6">
                <p className="text-[14px] leading-relaxed text-text-primary">
                  {g.stat.label}
                </p>
                <p className="font-display mt-4 text-[19px] italic tracking-[-0.02em] text-text-secondary">
                  {g.closer}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button href={CONTENT.brand.bookHref} size="lg" withArrow>
              {g.cta}
            </Button>
          </div>
        </Reveal>
      </Container>

      {/* Soft underglow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-48 w-[140%] max-w-[1000px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(closest-side, rgba(211,251,163,0.12), transparent 70%)',
        }}
      />
    </Section>
  );
}
