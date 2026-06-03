import Link from 'next/link';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { CORE_VERTICALS } from '@/lib/landing-pages';

export default function WhoWeBuildFor() {
  return (
    <Section id="solutions" className="border-b border-border">
      <Container>
        <div className="max-w-[760px]">
          <Reveal>
            <Eyebrow>Who we build for</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-balance text-[32px] leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-[42px] md:text-[56px] md:leading-[1.05]">
              AI automation for UK service businesses.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[58ch] text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[18px]">
              We deploy agents tuned to the way specific industries actually work — answering
              calls, booking jobs and taking admin off your team. Find your vertical:
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {CORE_VERTICALS.map((v, i) => (
            <Reveal key={v.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
              <Link href={`/${v.slug}`} className="group block h-full">
                <article className="flex h-full flex-col rounded-[16px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-text-muted/40 sm:p-7">
                  <h3 className="text-[19px] tracking-[-0.01em] text-text-primary sm:text-[20px]">
                    {v.navLabel}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-[15px] leading-relaxed text-text-secondary">
                    {v.navBlurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
                    Explore
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
