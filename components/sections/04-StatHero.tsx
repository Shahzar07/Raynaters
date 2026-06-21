'use client';

import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { motion } from 'framer-motion';

type Stat = (typeof CONTENT.proof.stats)[number];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[18px] border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/30 md:p-7"
    >
      {/* top hairline that fills with accent on scroll-in */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-border">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: stat.level }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
          className="h-full w-full bg-accent shadow-[0_0_12px_rgba(211,251,163,0.6)]"
        />
      </div>

      <div>
        <p className="font-display text-[44px] leading-none tracking-[-0.04em] text-text-primary md:text-[60px]">
          <CountUp
            to={stat.to}
            prefix={stat.prefix}
            suffix={stat.suffix}
            duration={2.2}
            className="tabular-nums"
          />
        </p>
      </div>

      <div className="mt-8">
        <p className="text-[15px] font-medium tracking-[-0.01em] text-text-primary">
          {stat.label}
        </p>
        <p className="mt-1.5 text-[13px] leading-snug text-text-muted">
          {stat.context}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatHero() {
  return (
    <Section className="overflow-hidden border-b border-border bg-bg">
      <Container width="grid">
        <div className="max-w-[640px]">
          <Reveal>
            <Eyebrow>{CONTENT.proof.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-[34px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[44px] md:text-[56px]">
              {CONTENT.proof.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-text-secondary md:text-[19px]">
              {CONTENT.proof.sub}
            </p>
          </Reveal>
        </div>

        <RevealStagger
          stagger={0.08}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-5 lg:grid-cols-4"
        >
          {CONTENT.proof.stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </RevealStagger>

        <Reveal delay={0.15}>
          <p className="mt-10 flex items-center gap-2.5 text-[12px] uppercase tracking-[0.18em] text-text-muted">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {CONTENT.proof.footnote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
