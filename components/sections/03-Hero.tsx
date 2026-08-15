'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TOKENS } from '@/lib/design-tokens';
import { bookHref } from '@/lib/seo/utm';

function HeroShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="relative mx-auto mt-16 max-w-[1040px] md:mt-20">
      {/* green glow behind the showcase */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-6 -top-6 bottom-0 -z-10 rounded-[40px]"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 0%, rgba(211,251,163,0.28), transparent 70%)',
        }}
      />
      <div className="group/video relative overflow-hidden rounded-[20px] border-2 border-accent/50 bg-surface shadow-[0_0_0_1px_rgba(211,251,163,0.15),0_0_60px_-12px_rgba(211,251,163,0.45),0_30px_120px_-30px_rgba(0,0,0,0.85)]">
        {/* chrome bar */}
        <div className="flex items-center gap-2 border-b border-border bg-bg/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
          <span className="ml-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Live agent build
          </span>
        </div>

        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Raynaters AI systems in action"
            onClick={togglePlay}
            className="block aspect-video h-full w-full cursor-pointer object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* controls */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? 'Pause video' : 'Play video'}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-bg/70 text-text-primary backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-bg/70 text-text-primary backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      className="font-display text-[40px] leading-[1.02] tracking-tightest text-text-primary sm:text-[56px] md:text-[72px] lg:text-[88px] lg:leading-[1.0]"
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
            'radial-gradient(closest-side, rgba(211,251,163,0.16), rgba(211,251,163,0.05) 45%, transparent 70%)',
        }}
      />
      {/* Hairline horizon — thin border line that grounds the hero */}
      <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
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
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button
            href={bookHref({ campaign: 'homepage', content: 'hero_cta' })}
            size="xl"
            withArrow
            fullWidthOnMobile
          >
            {CONTENT.hero.primaryCta}
          </Button>
          <Button href="#industry" size="xl" variant="ghost" fullWidthOnMobile>
            {CONTENT.hero.secondaryCta}
          </Button>
        </motion.div>

        {/* Risk reversal directly under the primary CTA — the objection people
            have at the exact moment they consider clicking. */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: TOKENS.motion.ease, delay: 0.75 }}
          className="mt-6 flex flex-col items-center justify-center gap-x-6 gap-y-2 text-[13px] text-text-muted sm:flex-row sm:text-[14px]"
        >
          {['Free 30-minute session', 'ROI projection in 48 hours', 'No pitch deck'].map(
            (t) => (
              <li key={t} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t}
              </li>
            ),
          )}
        </motion.ul>

        {/* Proof bar — the numbers sit with the CTA, where the doubt is,
            rather than several screens further down. */}
        <motion.dl
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: TOKENS.motion.ease, delay: 0.85 }}
          className="mx-auto mt-10 flex max-w-[620px] flex-col items-stretch justify-center gap-px overflow-hidden rounded-[14px] border border-border bg-border sm:flex-row"
        >
          {CONTENT.hero.proofBar.map((p) => (
            <div
              key={p.label}
              className="flex flex-1 flex-col items-center gap-1 bg-bg px-5 py-4"
            >
              <dt className="font-display text-[24px] leading-none tracking-[-0.03em] text-accent sm:text-[28px]">
                {p.value}
              </dt>
              <dd className="text-[12px] uppercase tracking-[0.14em] text-text-muted">
                {p.label}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: TOKENS.motion.ease, delay: 0.75 }}
        >
          <HeroShowcase />
        </motion.div>
      </Container>
    </section>
  );
}
