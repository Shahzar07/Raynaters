'use client';

import { motion } from 'framer-motion';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Marquee } from '@/components/ui/Marquee';
import { TOKENS } from '@/lib/design-tokens';

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: TOKENS.motion.staggerWord } },
};

const wordItem = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: TOKENS.motion.ease },
  },
};

function AnimatedHeadline() {
  const lines = CONTENT.hero.h1Lines;
  const allWords = lines.map((line) => line.split(' '));
  return (
    <motion.h1
      variants={wordContainer}
      initial="hidden"
      animate="visible"
      className="font-display text-[44px] leading-[1.02] tracking-tightest text-text-primary md:text-[88px] md:leading-[1.0]"
    >
      {allWords.map((words, lineIdx) => (
        <span key={lineIdx} className="block">
          {words.map((w, i) => (
            <motion.span
              key={`${lineIdx}-${i}`}
              variants={wordItem}
              className="inline-block whitespace-pre"
            >
              {w}
              {i < words.length - 1 && ' '}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

function HeroGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    >
      {/* Single subtle radial — orange at very low opacity. The ONE allowed gradient. */}
      <div
        className="absolute left-1/2 top-[-10%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,92,44,0.10), rgba(255,92,44,0.03) 45%, transparent 70%)',
        }}
      />
      {/* Hairline horizon — thin border line that grounds the hero */}
      <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function TrustStrip() {
  return (
    <div className="mt-20 md:mt-28">
      <p className="text-center text-[12px] uppercase tracking-[0.22em] text-text-muted">
        {CONTENT.hero.trustLabel}
      </p>
      <div className="mt-6">
        <Marquee speed="slow">
          {CONTENT.hero.trustLogos.map((logo) => (
            <div
              key={logo}
              className="flex h-8 items-center text-[18px] tracking-[-0.02em] text-text-secondary/80 font-medium"
            >
              {logo}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32">
      <HeroGlow />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: TOKENS.motion.ease, delay: 0.1 }}
          className="flex justify-center"
        >
          <Eyebrow>{CONTENT.hero.eyebrow}</Eyebrow>
        </motion.div>

        <div className="mx-auto mt-8 max-w-[1100px] text-center">
          <AnimatedHeadline />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: TOKENS.motion.ease, delay: 0.45 }}
          className="mx-auto mt-8 max-w-[680px] text-center text-[17px] leading-relaxed text-text-secondary md:text-[19px]"
        >
          {CONTENT.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: TOKENS.motion.ease, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href={CONTENT.brand.bookHref} size="lg" withArrow>
            {CONTENT.hero.primaryCta}
          </Button>
          <Button href="#industry" size="lg" variant="ghost">
            {CONTENT.hero.secondaryCta}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: TOKENS.motion.ease, delay: 0.85 }}
        >
          <TrustStrip />
        </motion.div>
      </Container>
    </section>
  );
}
