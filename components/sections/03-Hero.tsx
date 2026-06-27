'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Marquee } from '@/components/ui/Marquee';
import { TOKENS } from '@/lib/design-tokens';

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
            aria-label="Agentic Forces in action"
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

const OPENAI_PATH =
  'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z';

const SLACK_PATH =
  'M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z';

const TRUST_LOGOS: { name: string; slug: string; inline?: string }[] = [
  { name: 'n8n', slug: 'n8n' },
  { name: 'Make', slug: 'make' },
  { name: 'LangChain', slug: 'langchain' },
  { name: 'Zapier', slug: 'zapier' },
  { name: 'OpenAI', slug: 'openai', inline: OPENAI_PATH },
  { name: 'Anthropic', slug: 'anthropic' },
  { name: 'Slack', slug: 'slack', inline: SLACK_PATH },
  { name: 'HubSpot', slug: 'hubspot' },
];

function TrustLogoIcon({ logo }: { logo: (typeof TRUST_LOGOS)[number] }) {
  if (logo.inline) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#A1A1AA"
        aria-hidden
        className="h-[22px] w-[22px] shrink-0"
      >
        <path d={logo.inline} />
      </svg>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${logo.slug}/A1A1AA`}
      alt={logo.name}
      width={22}
      height={22}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
      className="h-[22px] w-[22px] shrink-0"
    />
  );
}

function TrustStrip() {
  return (
    <div className="mt-20 md:mt-28">
      <p className="text-center text-[12px] uppercase tracking-[0.22em] text-text-muted">
        {CONTENT.hero.trustLabel}
      </p>
      <div className="mt-8">
        <Marquee speed="slow">
          {TRUST_LOGOS.map((logo) => (
            <div
              key={logo.slug}
              className="group flex h-10 items-center gap-2.5 px-4 opacity-60 transition-opacity duration-300 hover:opacity-100"
              title={logo.name}
            >
              <TrustLogoIcon logo={logo} />
              <span className="text-[15px] tracking-[-0.01em] text-text-secondary/90 font-medium whitespace-nowrap">
                {logo.name}
              </span>
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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: TOKENS.motion.ease, delay: 0.75 }}
        >
          <HeroShowcase />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: TOKENS.motion.ease, delay: 0.95 }}
        >
          <TrustStrip />
        </motion.div>
      </Container>
    </section>
  );
}
