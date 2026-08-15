import type { Metadata } from 'next';
import { CONTENT } from '@/lib/content';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo/meta';
import { faqPageSchema } from '@/lib/seo/schema';
import AnnouncementBar from '@/components/sections/01-AnnouncementBar';
import Navigation from '@/components/sections/02-Navigation';
import Hero from '@/components/sections/03-Hero';
import ProblemCascade from '@/components/sections/17-ProblemCascade';
import BeliefShift from '@/components/sections/18-BeliefShift';
import WhoThisIsFor from '@/components/sections/21-WhoThisIsFor';
import GrowthOS from '@/components/sections/19-GrowthOS';
import StatHero from '@/components/sections/04-StatHero';
import IndustryAgnostic from '@/components/sections/06-IndustryAgnostic';
import TransformationTimeline from '@/components/sections/20-TransformationTimeline';
import RoiMethod from '@/components/sections/22-RoiMethod';
import DashboardWall from '@/components/sections/07-DashboardWall';
import PersonalNote from '@/components/sections/08-PersonalNote';
import Guarantee from '@/components/sections/11-Guarantee';
import Testimonials from '@/components/sections/12-Testimonials';
import FAQ from '@/components/sections/13-FAQ';
import FinalCTA from '@/components/sections/14-FinalCTA';
import Footer from '@/components/sections/15-Footer';
import { CTABlock } from '@/components/ui/CTABlock';
import StickyCTA from '@/components/ui/StickyCTA';

export const metadata: Metadata = pageMetadata({
  title: 'Raynaters Tech | AI Automation Agency — Systems That Pay For Themselves',
  description:
    'AI automation agency for UK and Australian service businesses. We build Business Operating Systems that remove bottlenecks and pay for themselves in 90 days — or we keep building until they do.',
  path: '/',
});

export default function Page() {
  return (
    <main className="relative grain min-h-screen overflow-x-hidden">
      <JsonLd data={faqPageSchema(CONTENT.faq.items)} />
      <AnnouncementBar />
      <Navigation />
      <Hero />

      {/* 1. The problem, then the belief that reframes it */}
      <ProblemCascade />
      <BeliefShift />

      {/* 2. Who this is for — stated before we ask for anything, so the right
             reader self-selects and the wrong one leaves early */}
      <WhoThisIsFor />
      <CTABlock variant="band" {...CONTENT.ctaBands.afterBelief} />

      {/* 3. The solution, and the workforces that execute it */}
      <GrowthOS />
      <IndustryAgnostic />
      <CTABlock {...CONTENT.ctaBands.afterWorkforces} />

      {/* 4. Proof — the numbers, then the before/after they produced */}
      <StatHero />
      <TransformationTimeline />
      <CTABlock variant="band" {...CONTENT.ctaBands.afterProof} />

      {/* 5. Why the guarantee is method, not marketing */}
      <RoiMethod />
      <Guarantee />
      <CTABlock {...CONTENT.ctaBands.afterGuarantee} />

      {/* 6. Human close, then receipts */}
      <PersonalNote />
      <DashboardWall />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
