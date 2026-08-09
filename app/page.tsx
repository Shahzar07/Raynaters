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
import GrowthOS from '@/components/sections/19-GrowthOS';
import StatHero from '@/components/sections/04-StatHero';
import EvolutionStory from '@/components/sections/05-EvolutionStory';
import IndustryAgnostic from '@/components/sections/06-IndustryAgnostic';
import TransformationTimeline from '@/components/sections/20-TransformationTimeline';
import DashboardWall from '@/components/sections/07-DashboardWall';
import PersonalNote from '@/components/sections/08-PersonalNote';
import WhyDoingThis from '@/components/sections/09-WhyDoingThis';
import Guarantee from '@/components/sections/11-Guarantee';
import Testimonials from '@/components/sections/12-Testimonials';
import FAQ from '@/components/sections/13-FAQ';
import FinalCTA from '@/components/sections/14-FinalCTA';
import Footer from '@/components/sections/15-Footer';

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
      {/* Belief arc: the wall → the belief → the system that answers it */}
      <ProblemCascade />
      <BeliefShift />
      <GrowthOS />
      {/* The execution layer inside Growth OS™ */}
      <IndustryAgnostic />
      {/* Proof: outcomes, then the before/after it produced */}
      <StatHero />
      <TransformationTimeline />
      {/* How we get there, and why you can trust it */}
      <EvolutionStory />
      <Guarantee />
      <PersonalNote />
      <WhyDoingThis />
      {/* Implementation receipts + tool logos — deliberately low */}
      <DashboardWall />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
