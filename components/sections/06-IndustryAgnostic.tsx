'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { motion } from 'framer-motion';
import {
  LifeBuoy,
  LineChart,
  Receipt,
  UserPlus,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  support: LifeBuoy,
  revops: LineChart,
  finance: Receipt,
  onboarding: UserPlus,
};

type Suite = (typeof CONTENT.suites.items)[number];

function SuiteCard({ suite }: { suite: Suite }) {
  const Icon = ICONS[suite.icon] ?? LifeBuoy;
  return (
    <motion.article
      variants={staggerItem}
      className="group relative flex flex-col overflow-hidden rounded-[18px] border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/30 md:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-[12px] border border-border bg-bg text-accent transition-colors duration-300 group-hover:border-accent/40">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <ArrowUpRight className="h-5 w-5 text-text-muted transition-colors duration-300 group-hover:text-accent" />
      </div>

      <h3 className="mt-7 text-[22px] tracking-[-0.02em] text-text-primary md:text-[24px]">
        {suite.name}
      </h3>
      <p className="mt-3 max-w-[42ch] text-[16px] leading-relaxed text-text-secondary">
        {suite.desc}
      </p>

      {/* Metric chip */}
      <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(211,251,163,0.7)]" />
        <span className="text-[13px] font-medium tracking-[-0.01em] text-text-primary">
          {suite.metric}
        </span>
      </div>

      {/* Integration chips */}
      <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-6 md:mt-8">
        <span className="text-[11px] uppercase tracking-[0.18em] text-text-muted">
          Builds on
        </span>
        {suite.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-border bg-bg px-2 py-0.5 text-[12px] text-text-secondary"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function IndustryAgnostic() {
  return (
    <Section id="industry" className="border-b border-border">
      <Container width="grid">
        <div className="max-w-[640px]">
          <Reveal>
            <Eyebrow>{CONTENT.suites.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-[34px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[44px] md:text-[56px]">
              {CONTENT.suites.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-text-secondary md:text-[19px]">
              {CONTENT.suites.sub}
            </p>
          </Reveal>
        </div>

        <RevealStagger
          stagger={0.08}
          className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6"
        >
          {CONTENT.suites.items.map((suite, i) => (
            <SuiteCard key={i} suite={suite} />
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
