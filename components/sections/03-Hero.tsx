'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Marquee } from '@/components/ui/Marquee';
import { TOKENS } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

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
      <div
        className="absolute left-1/2 top-[-10%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(211,251,163,0.16), rgba(211,251,163,0.05) 45%, transparent 70%)',
        }}
      />
      <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function HeroVideo() {
  const [canPlay, setCanPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Delay playback by 5 seconds
    const timer = setTimeout(() => {
      setCanPlay(true);
      if (videoRef.current) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: TOKENS.motion.ease, delay: 0.5 }}
      className="group relative mx-auto mt-16 max-w-[1000px] overflow-hidden rounded-[32px] border-[4px] border-accent/20 bg-surface shadow-[0_0_50px_-12px_rgba(211,251,163,0.3)] cursor-pointer"
      onClick={togglePlay}
    >
      <div className="aspect-video w-full overflow-hidden">
        <video
          ref={videoRef}
          muted={isMuted}
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/raynaterstech (1).mp4" type="video/mp4" />
        </video>
      </div>

      {/* Custom Minimal Controls — Parrot Green Accent */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          onClick={toggleMute}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-bg/60 text-accent backdrop-blur-md transition-all hover:bg-bg/80 hover:scale-110"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <button
          onClick={togglePlay}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-bg shadow-[0_0_20px_rgba(211,251,163,0.4)] transition-all hover:scale-110 hover:shadow-accent/60"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={22} fill="currentColor" />
          ) : (
            <Play size={22} fill="currentColor" className="ml-1" />
          )}
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/[0.03]" />
    </motion.div>
  );
}

function TrustStrip() {
  return (
    <div className="mt-20 md:mt-28">
      <p className="text-center text-[12px] uppercase tracking-[0.22em] text-text-muted">
        {CONTENT.hero.trustLabel}
      </p>
      <div className="mt-8 overflow-hidden marquee-mask">
        <Marquee speed="slow">
          {CONTENT.hero.trustLogos.map((item) => {
            // ONLY target logos that are monochrome black (or need to be white for visibility)
            const shouldBeWhite = 
              item.name === 'Anthropic' || 
              item.name === 'Github' || 
              item.name === 'Notion' || 
              item.name === 'OpenAI' || 
              item.name === 'Vercel' ||
              item.name === 'Pipedream' ||
              item.name === 'Zapier' ||
              item.name === 'LangChain' ||
              item.name === 'Make';

            // Some SVGs/PNGs have large internal padding or thin lines and need scaling up
            const getScale = (name: string) => {
              if (name === 'Vercel') return 'scale-[2.8]';
              if (name === 'OpenAI') return 'scale-[2.5]';
              if (name === 'Notion') return 'scale-[2.2]';
              if (name === 'Pipedream') return 'scale-[2.0]';
              if (name === 'Bubble') return 'scale-[1.8]';
              if (name === 'HeyGen') return 'scale-[1.1]';
              if (name === 'GoHighLevel') return 'scale-[1.1]';
              if (name === 'Claude') return 'scale-[1.5]';
              if (name === 'Relevance AI') return 'scale-[1.2]';
              if (name === 'Make') return 'scale-[1.6]';
              if (name === 'Zapier') return 'scale-[1.4]';
              if (name === 'LangChain') return 'scale-[1.7]';
              return 'scale-100';
            };

            return (
              <div
                key={item.name}
                className="flex h-20 items-center px-12"
              >
                <div className={cn("flex items-center justify-center transition-transform duration-500", getScale(item.name))}>
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className={cn(
                      "h-9 w-auto object-contain opacity-85 transition-all duration-500 hover:opacity-100",
                      shouldBeWhite && "brightness-0 invert"
                    )}
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
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

        <HeroVideo />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: TOKENS.motion.ease, delay: 0.7 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
