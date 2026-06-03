import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

/**
 * The AEO/GEO extraction target — a crisp, quotable answer rendered in a
 * visually distinct accent card directly under the hero. This is what
 * Google AI Overviews and answer engines lift.
 */
export function DirectAnswerBlock({ text }: { text: string }) {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[860px] rounded-[18px] border border-accent/30 bg-accent/[0.05] p-6 sm:p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
              The short answer
            </p>
            <p className="mt-3 text-pretty text-[19px] leading-[1.5] text-text-primary sm:text-[23px] sm:leading-[1.45]">
              {text}
            </p>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
