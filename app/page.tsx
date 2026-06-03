import AnnouncementBar from '@/components/sections/01-AnnouncementBar';
import Navigation from '@/components/sections/02-Navigation';
import Hero from '@/components/sections/03-Hero';
import StatHero from '@/components/sections/04-StatHero';
import EvolutionStory from '@/components/sections/05-EvolutionStory';
import IndustryAgnostic from '@/components/sections/06-IndustryAgnostic';
import WhoWeBuildFor from '@/components/sections/16-WhoWeBuildFor';
import DashboardWall from '@/components/sections/07-DashboardWall';
import PersonalNote from '@/components/sections/08-PersonalNote';
import WhyDoingThis from '@/components/sections/09-WhyDoingThis';
import AuthorityNumber from '@/components/sections/10-AuthorityNumber';
import Guarantee from '@/components/sections/11-Guarantee';
import Testimonials from '@/components/sections/12-Testimonials';
import FAQ from '@/components/sections/13-FAQ';
import FinalCTA from '@/components/sections/14-FinalCTA';
import Footer from '@/components/sections/15-Footer';

export default function Page() {
  return (
    <main className="relative grain min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <StatHero />
      <EvolutionStory />
      <IndustryAgnostic />
      <WhoWeBuildFor />
      <DashboardWall />
      <PersonalNote />
      <WhyDoingThis />
      <AuthorityNumber />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
