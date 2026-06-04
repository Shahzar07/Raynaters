import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ImageCard } from '@/components/ui/ImageCard';
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
              <ImageCard
                href={`/${v.slug}`}
                image={v.image}
                category={v.navLabel}
                title={v.navLabel}
                body={v.navBlurb}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
