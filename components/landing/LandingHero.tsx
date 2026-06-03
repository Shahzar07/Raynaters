import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs';
import { bookHref } from '@/lib/seo/utm';

export function LandingHero({
  eyebrow,
  h1,
  hook,
  crumbs,
  utmCampaign,
}: {
  eyebrow: string;
  h1: string;
  hook: string;
  crumbs: Crumb[];
  utmCampaign: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-10 pb-16 sm:pt-12 sm:pb-20 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-25%] h-[560px] w-[1000px] -translate-x-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(211,251,163,0.14), rgba(211,251,163,0.04) 45%, transparent 72%)',
          }}
        />
      </div>
      <Container>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 max-w-[820px]">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-balance text-[34px] leading-[1.06] tracking-tightest text-text-primary sm:text-[50px] md:text-[64px] md:leading-[1.02]">
              {h1}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[60ch] text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[19px]">
              {hook}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button
                href={bookHref({ campaign: utmCampaign, content: 'hero_cta' })}
                size="lg"
                withArrow
                className="w-full sm:w-auto"
              >
                Book your free Agent Audit
              </Button>
              <Button href="/case-studies" size="lg" variant="ghost" className="w-full sm:w-auto">
                See case studies
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
