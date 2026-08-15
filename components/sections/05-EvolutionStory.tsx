'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

type Step = (typeof CONTENT.howItWorks.steps)[number];

function StepCard({ step, index, featured }: { step: Step; index: number; featured: boolean }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'flex h-full flex-col rounded-[18px] border p-6 md:p-7',
        featured
          ? 'border-accent bg-accent'
          : 'border-border bg-surface transition-colors duration-300 hover:border-accent/40',
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'grid h-10 w-10 place-items-center rounded-[11px] text-[14px] font-semibold tabular-nums',
            featured ? 'bg-[#0A0A0B] text-accent' : 'bg-accent text-[#0A0A0B]',
          )}
        >
          {num}
        </span>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'text-[11px] uppercase tracking-[0.2em]',
              featured ? 'text-[#0A0A0B]/60' : 'text-text-muted',
            )}
          >
            {step.week}
          </span>
        </div>
      </div>

      <span
        className={cn(
          'mt-6 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] uppercase tracking-[0.18em]',
          featured
            ? 'bg-[#0A0A0B]/10 text-[#0A0A0B]'
            : 'border border-border text-accent',
        )}
      >
        {step.tag}
      </span>

      <h3
        className={cn(
          'mt-4 text-[20px] tracking-[-0.02em] md:text-[21px]',
          featured ? 'text-[#0A0A0B]' : 'text-text-primary',
        )}
      >
        {step.title}
      </h3>
      <p
        className={cn(
          'mt-3 flex-1 text-[15px] leading-relaxed',
          featured ? 'text-[#0A0A0B]/75' : 'text-text-secondary',
        )}
      >
        {step.body}
      </p>

      {featured && (
        <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0A0A0B] px-3 py-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
          <span className="text-[12px] font-medium tracking-[-0.01em] text-accent">
            {CONTENT.howItWorks.guaranteeChip}
          </span>
        </div>
      )}
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
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 md:gap-6"
        >
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} featured={i === steps.length - 1} />
          ))}
        </RevealStagger>

        {/* Authority strip */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-2.5 text-center text-[13px] tracking-[-0.01em] text-text-secondary">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {CONTENT.howItWorks.trust}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
