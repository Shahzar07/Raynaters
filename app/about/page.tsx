import type { Metadata } from 'next';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { VismeForm } from '@/components/ui/VismeForm';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata, absUrl } from '@/lib/seo/meta';
import { breadcrumbSchema, personSchema } from '@/lib/seo/schema';
import { CONTENT } from '@/lib/content';

export const metadata: Metadata = pageMetadata({
  title: 'About Raynaters Tech | Founder-Led AI Automation Agency',
  description:
    'Meet the founders of Raynaters Tech — an AI automation agency building custom AI agents and receptionists for service businesses across the UK and Australia.',
  path: '/about',
});

const FOUNDER = {
  name: 'Shahzar',
  role: 'Founder & CEO',
  tagline: 'AI Revenue Architect & Growth Hacker',
  bio: 'Shahzar engineers agentic AI systems that compound revenue while your team sleeps. He has generated $1M+ for clients and built 4X scale playbooks for service businesses — the same playbooks Raynaters now deploys across the UK and Australia. Every system we ship carries his rule: if it doesn’t make you money, it doesn’t go live.',
  stats: [
    { value: '$1M+', label: 'Generated for clients' },
    { value: '4X', label: 'Scale playbooks built' },
    { value: 'UK · AU', label: 'Markets deployed' },
  ],
};

const CO_FOUNDER = {
  name: 'Sharib',
  role: 'Co-Founder',
  tagline: 'Business Analyst & Systems Operations',
  bio: 'Sharib is the analyst behind every build. Before a single agent is deployed, he maps how your business actually runs — where the hours leak, where enquiries die, where revenue stalls — and turns that into the system blueprint. Then he runs the operational backbone that keeps every deployment measured, documented and on time.',
  highlights: [
    'Maps and audits every business before we build',
    'Designs the workflows agents run on',
    'Keeps delivery measured, documented and on time',
  ],
};

const PRINCIPLES = [
  {
    title: 'Custom-built, not resold',
    body: 'We build systems around your business — your workflows, your data, your rules — rather than reselling a one-size-fits-all platform with your logo on it.',
  },
  {
    title: 'Proof over promises',
    body: 'Every engagement is measured against a written ROI projection. If a system does not pay for itself in 90 days, we keep building until it does.',
  },
  {
    title: 'You own what we build',
    body: 'Systems run on infrastructure you control, with full documentation and hand-off — so you are never locked inside someone else’s black box.',
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
            jobTitle: 'Founder & CEO',
            description:
              'Founder & CEO of Raynaters Tech. AI Revenue Architect & Growth Hacker who engineers agentic AI systems that compound revenue — $1M+ generated for clients and 4X scale playbooks for service businesses across the UK and Australia.',
            url: absUrl('/about'),
          }),
          personSchema({
            name: 'Sharib',
            jobTitle: 'Co-Founder — Business Analyst & Systems Operations',
            description:
              'Co-Founder of Raynaters Tech. Business analyst and systems-operations lead who maps client operations, designs the workflow blueprints behind every deployment, and runs delivery end to end.',
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
          <div className="mt-8 max-w-[780px]">
            <Reveal>
              <Eyebrow>About Raynaters Tech</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-balance text-[34px] leading-[1.06] tracking-tightest text-text-primary sm:text-[48px] md:text-[60px] md:leading-[1.02]">
                Two founders. One rule: the system must pay for itself.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[60ch] text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[19px]">
                Raynaters Tech builds custom AI agents and AI receptionists for service
                businesses — trades, clinics, salons, estate agents and law firms — across
                the UK and Australia. We engineer every system from first principles, and
                we put our fee behind the result.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={CONTENT.brand.bookHref} size="lg" withArrow>
                  Book Your Business On Autopilot Session™
                </Button>
                <Button href="/case-studies" size="lg" variant="ghost">
                  See case studies
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <Section className="border-b border-border">
        <Container width="grid">
          <div className="max-w-[640px]">
            <Eyebrow>The founders</Eyebrow>
            <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[40px] md:text-[48px]">
              The people who build your system.
            </h2>
          </div>

          {/* Founder — prominent editorial card */}
          <Reveal className="mt-12 block md:mt-14">
            <article className="relative overflow-hidden rounded-[24px] border border-border bg-surface p-7 shadow-[0_0_60px_-18px_rgba(211,251,163,0.18)] sm:p-10 md:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-15%] top-[-40%] h-[420px] w-[560px] rounded-full"
                style={{ background: 'radial-gradient(closest-side, rgba(211,251,163,0.09), transparent 72%)' }}
              />
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
                {FOUNDER.role}
              </p>
              <h3 className="mt-4 font-display text-[44px] leading-[1.0] tracking-tightest text-text-primary sm:text-[60px] md:text-[72px]">
                {FOUNDER.name}
              </h3>
              <p className="mt-3 text-[13px] uppercase tracking-[0.16em] text-text-muted">
                {FOUNDER.tagline}
              </p>
              <p className="mt-6 max-w-[62ch] text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[18px]">
                {FOUNDER.bio}
              </p>
              <div className="mt-9 grid max-w-[640px] grid-cols-3 gap-4 border-t border-border pt-8">
                {FOUNDER.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-[28px] leading-none tracking-[-0.03em] text-accent sm:text-[36px]">
                      {s.value}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-text-muted sm:text-[12px]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Co-Founder — beneath */}
          <Reveal delay={0.08} className="mt-6 block">
            <article className="rounded-[24px] border border-border bg-surface p-7 sm:p-9 md:p-11">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
                {CO_FOUNDER.role}
              </p>
              <h3 className="mt-4 font-display text-[32px] leading-[1.02] tracking-tightest text-text-primary sm:text-[40px] md:text-[44px]">
                {CO_FOUNDER.name}
              </h3>
              <p className="mt-3 text-[13px] uppercase tracking-[0.16em] text-text-muted">
                {CO_FOUNDER.tagline}
              </p>
              <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-[1fr_minmax(0,340px)] md:gap-12">
                <p className="max-w-[62ch] text-pretty text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
                  {CO_FOUNDER.bio}
                </p>
                <ul className="space-y-2.5 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  {CO_FOUNDER.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[14px] text-text-secondary">
                      <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </Container>
      </Section>

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

      {/* Contact */}
      <Section className="border-b border-border">
        <Container width="grid">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Get in touch</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[40px] md:text-[48px]">
                  Tell us about your business.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-[46ch] text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
                  Send us a message and one of the founders will come back to you
                  personally — usually within one working day. Prefer email?
                  Write to{' '}
                  <a
                    href="mailto:team@raynaters.tech"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    team@raynaters.tech
                  </a>
                  .
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-8 space-y-2.5 border-t border-border pt-7">
                  {[
                    'A reply from a founder, not a sales queue',
                    'Free 30-minute Agent Audit if it looks like a fit',
                    'Written ROI projection within 48 hours of the call',
                  ].map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2.5 text-[14px] text-text-secondary"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="block">
              <div className="overflow-hidden rounded-[20px] border border-border bg-surface p-3 sm:p-4 md:p-5">
                <VismeForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <LandingFinalCTA
        title="Work directly with the founders."
        sub="Book a free 30-minute Agent Audit with the people who engineer your system — with a written ROI projection within 48 hours."
        utmCampaign="about"
      />

      <Footer />
    </main>
  );
}
