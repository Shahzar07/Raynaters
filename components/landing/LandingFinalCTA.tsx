import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { bookHref } from '@/lib/seo/utm';

export function LandingFinalCTA({
  title,
  sub,
  utmCampaign,
}: {
  title: string;
  sub: string;
  utmCampaign: string;
}) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(211,251,163,0.14), rgba(211,251,163,0.04) 45%, transparent 72%)',
          }}
        />
      </div>
      <Container width="text">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">Your next step</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-balance text-[32px] leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-[48px] md:text-[64px] md:leading-[1.02]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[52ch] text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[18px]">
              {sub}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 flex justify-center px-4 sm:px-0">
              <Button
                href={bookHref({ campaign: utmCampaign, content: 'final_cta' })}
                size="lg"
                withArrow
                className="w-full sm:w-auto"
              >
                Book Your Business On Autopilot Session™
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-7 text-[12px] sm:text-[13px] text-text-muted">
              Free 30-minute Agent Audit · Written ROI projection within 48 hours · No pitch deck
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
