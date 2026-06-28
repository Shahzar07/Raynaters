import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata, absUrl } from '@/lib/seo/meta';
import { breadcrumbSchema, personSchema } from '@/lib/seo/schema';
import { CONTENT } from '@/lib/content';

export const metadata: Metadata = pageMetadata({
  title: 'About Raynaters Tech | Founder-Led UK AI Automation Agency',
  description:
    'Raynaters Tech is a founder-led UK AI automation agency building custom AI agents and receptionists from first principles — not resold off-the-shelf tools.',
  path: '/about',
});

const PRINCIPLES = [
  {
    title: 'Custom-engineered, not resold',
    body: 'We build agents from first principles around your business — your workflows, your data, your rules — rather than reselling a one-size-fits-all platform with your logo on it.',
  },
  {
    title: 'Proof over promises',
    body: 'Every engagement is measured against a written ROI projection. If an agent does not pay for itself in 90 days, we keep building until it does.',
  },
  {
    title: 'You own what we build',
    body: 'Agents run on infrastructure you control, with full documentation and hand-off — so you are never locked inside someone else’s black box.',
  },
];

export default function AboutPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <main className="relative grain min-h-screen overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          personSchema({
            name: 'Shahzar',
            jobTitle: 'Founder & Lead AI Engineer',
            description:
              'Founder of Raynaters Tech, a UK AI automation agency. Full-stack and agentic AI engineer who designs and deploys custom-built AI agents and AI receptionists for service businesses from first principles.',
            url: absUrl('/about'),
          }),
        ]}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-10 pb-14 sm:pt-12 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-[-25%] h-[520px] w-[1000px] -translate-x-1/2 rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgba(211,251,163,0.12), transparent 72%)' }}
          />
        </div>
        <Container width="grid">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow>About Raynaters Tech</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 font-display text-balance text-[34px] leading-[1.06] tracking-tightest text-text-primary sm:text-[48px] md:text-[60px] md:leading-[1.02]">
                  A founder-led AI automation agency, built on engineering.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-[58ch] text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[19px]">
                  Raynaters Tech is a UK AI automation agency that designs, builds and deploys
                  custom AI agents and AI receptionists for service businesses — trades, clinics,
                  cosmetic clinics, salons, estate agents and law firms. We engineer agents from
                  first principles, not resell off-the-shelf tools.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href={CONTENT.brand.bookHref} size="lg" withArrow>
                    Book your free audit
                  </Button>
                  <Button href="/case-studies" size="lg" variant="ghost">
                    See case studies
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Founder card */}
            <div className="md:col-span-5">
              <Reveal delay={0.1} className="block">
                <div className="rounded-[20px] border border-border bg-surface p-7">
                  <span className="grid h-16 w-16 place-items-center rounded-[16px] bg-accent">
                    <Image src="/raynaters-mark.png" alt="Raynaters Tech" width={48} height={48} className="h-11 w-11" />
                  </span>
                  <p className="mt-6 text-[18px] tracking-[-0.01em] text-text-primary">Shahzar</p>
                  <p className="text-[13px] text-text-secondary">Founder &amp; Lead AI Engineer</p>
                  <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
                    A full-stack and agentic-AI engineer who has built custom agent frameworks and
                    deployed them hands-on across UK service businesses. Raynaters exists to put that
                    same engineering — not a reskinned chatbot — to work for your operation.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <Section className="border-b border-border">
        <Container width="grid">
          <div className="max-w-[640px]">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[40px] md:text-[48px]">
              Engineering first. Hype never.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-[16px] border border-border bg-surface p-7">
                <p className="text-[18px] tracking-[-0.01em] text-text-primary">{p.title}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <LandingFinalCTA
        title="Work with the people who build the agents."
        sub="Book a free 30-minute Agent Audit with the team that engineers your system — with a written ROI projection within 48 hours."
        utmCampaign="about"
      />

      <Footer />
    </main>
  );
}
