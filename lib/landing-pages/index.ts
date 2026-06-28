import type { LandingPage } from './types';
import aiAutomationAgencyUk from './data/ai-automation-agency-uk';
import aiReceptionistForTradesUk from './data/ai-receptionist-for-trades-uk';
import aiReceptionistForElectriciansUk from './data/ai-receptionist-for-electricians-uk';
import aiReceptionistForClinicsUk from './data/ai-receptionist-for-clinics-uk';
import aiReceptionistForDentistsUk from './data/ai-receptionist-for-dentists-uk';
import aiReceptionistForCosmeticClinicsUk from './data/ai-receptionist-for-cosmetic-clinics-uk';
import aiReceptionistForSalonsUk from './data/ai-receptionist-for-salons-uk';
import aiReceptionistForEstateAgentsUk from './data/ai-receptionist-for-estate-agents-uk';
import aiAutomationForLawFirmsUk from './data/ai-automation-for-law-firms-uk';
import aiReceptionistLondon from './data/ai-receptionist-london';
import aiReceptionistCostUk from './data/ai-receptionist-cost-uk';
import aiReceptionistVsHumanReceptionist from './data/ai-receptionist-vs-human-receptionist';
import bestAiReceptionistUk from './data/best-ai-receptionist-uk';

/** Order here drives the nav dropdown, footer Solutions column and homepage cards. */
export const LANDING_PAGES: LandingPage[] = [
  aiAutomationAgencyUk,
  aiReceptionistForTradesUk,
  aiReceptionistForElectriciansUk,
  aiReceptionistForClinicsUk,
  aiReceptionistForDentistsUk,
  aiReceptionistForCosmeticClinicsUk,
  aiReceptionistForSalonsUk,
  aiReceptionistForEstateAgentsUk,
  aiAutomationForLawFirmsUk,
  aiReceptionistLondon,
  aiReceptionistCostUk,
  aiReceptionistVsHumanReceptionist,
  bestAiReceptionistUk,
];

/** The core verticals shown in the homepage "Who we build for" section. */
export const CORE_VERTICALS: LandingPage[] = [
  aiAutomationAgencyUk,
  aiReceptionistForTradesUk,
  aiReceptionistForClinicsUk,
  aiAutomationForLawFirmsUk,
  aiReceptionistForCosmeticClinicsUk,
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}
