import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { LandingHero } from './LandingHero';
import { DirectAnswerBlock } from './DirectAnswerBlock';
import { WhatItDoes } from './WhatItDoes';
import { WhoItsFor } from './WhoItsFor';
import { FeatureShowcase } from './FeatureShowcase';
import { HowItWorks } from './HowItWorks';
import { ComparisonTable } from './ComparisonTable';
import { ExtraSections } from './ExtraSections';
import { PricingROI } from './PricingROI';
import { AuthorityStrip } from './AuthorityStrip';
import { MiniCaseStory } from './MiniCaseStory';
import { LandingFAQ } from './LandingFAQ';
import { LandingFinalCTA } from './LandingFinalCTA';
import type { LandingPage } from '@/lib/landing-pages/types';

export function VerticalLandingPage({ data }: { data: LandingPage }) {
  return (
    <main className="relative grain min-h-screen overflow-x-hidden pb-16 md:pb-0">
      <Navigation />

      <LandingHero
        eyebrow={data.eyebrow}
        h1={data.h1}
        hook={data.hook}
        utmCampaign={data.utmCampaign}
        image={data.image}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: data.navLabel, path: `/${data.slug}` },
        ]}
      />

      <DirectAnswerBlock text={data.directAnswer} link={data.relatedLink} />

      <WhatItDoes heading={data.headings.whatItDoes} items={data.whatItDoes} />

      {data.showcase && (
        <FeatureShowcase eyebrow={data.showcase.eyebrow} rows={data.showcase.rows} />
      )}

      <WhoItsFor heading={data.headings.whoItsFor} items={data.whoItsFor} />

      <HowItWorks steps={data.howItWorks} />

      <ComparisonTable heading={data.headings.comparison} data={data.comparison} />

      {data.extraSections && <ExtraSections group={data.extraSections} />}

      <PricingROI data={data.pricingROI} utmCampaign={data.utmCampaign} />

      <AuthorityStrip />

      <MiniCaseStory data={data.miniCase} />

      <LandingFAQ faqs={data.faqs} />

      <LandingFinalCTA
        title="Let an agent do the work you keep doing yourself."
        sub="Book a free 30-minute Agent Audit. We map your workflows, identify what's worth automating, and send a written ROI projection within 48 hours."
        utmCampaign={data.utmCampaign}
      />

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          href={`/book?utm_source=site&utm_medium=sticky-cta&utm_campaign=${data.utmCampaign}`}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-accent text-[15px] font-medium text-[#0A0A0B]"
        >
          Book Your Business On Autopilot Session™
        </a>
      </div>
    </main>
  );
}
