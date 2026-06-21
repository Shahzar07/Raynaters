'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

type Step = (typeof CONTENT.howItWorks.steps)[number];

function StepCard({ step, index, total }: { step: Step; index: number; total: number }) {
  const isLast = index === total - 1;
  return (
    <motion.div variants={staggerItem} className="relative">
      {/* Node + connector (desktop) */}
      <div className="mb-6 hidden items-center md:flex">
        <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10 text-[13px] font-medium tabular-nums text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
        {!isLast && (
          <span aria-hidden className="ml-3 h-px flex-1 bg-gradient-to-r from-accent/40 to-border" />
        )}
      </div>

      <div className="flex h-full flex-col rounded-[18px] border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/30 md:rounded-[16px] md:bg-transparent md:p-0 md:hover:border-border">
        {/* Mobile node inline */}
        <div className="mb-4 flex items-center gap-3 md:hidden">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10 text-[12px] font-medium tabular-nums text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[12px] uppercase tracking-[0.2em] text-text-muted">
            {step.week}
          </span>
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <span className="text-[12px] uppercase tracking-[0.2em] text-text-muted">
            {step.week}
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-accent">
            {step.tag}
          </span>
        </div>

        <h3 className="mt-3 text-[20px] tracking-[-0.02em] text-text-primary md:text-[21px]">
          {step.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function EvolutionStory() {
  const steps = CONTENT.howItWorks.steps;
  return (
    <Section id="evolution" className="border-b border-border">
      <Container width="grid">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <Reveal>
              <Eyebrow>{CONTENT.howItWorks.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[34px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[44px] md:text-[56px]">
                {CONTENT.howItWorks.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-text-secondary md:text-[19px]">
                {CONTENT.howItWorks.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="hidden shrink-0 md:block">
            <Button href={CONTENT.brand.bookHref} size="md" variant="ghost" withArrow>
              Start with the audit
            </Button>
          </Reveal>
        </div>

        <RevealStagger
          stagger={0.1}
          className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-4 md:gap-6"
        >
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} total={steps.length} />
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
