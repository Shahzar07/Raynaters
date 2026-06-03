import type { LandingPage } from './types';
import aiAutomationAgencyUk from './data/ai-automation-agency-uk';
import aiReceptionistForTradesUk from './data/ai-receptionist-for-trades-uk';
import aiReceptionistForClinicsUk from './data/ai-receptionist-for-clinics-uk';
import aiAutomationForLawFirmsUk from './data/ai-automation-for-law-firms-uk';
import aiReceptionistForCosmeticClinicsUk from './data/ai-receptionist-for-cosmetic-clinics-uk';
import aiReceptionistCostUk from './data/ai-receptionist-cost-uk';

/** Order here drives the nav dropdown, footer Solutions column and homepage cards. */
export const LANDING_PAGES: LandingPage[] = [
  aiAutomationAgencyUk,
  aiReceptionistForTradesUk,
  aiReceptionistForClinicsUk,
  aiReceptionistForCosmeticClinicsUk,
  aiAutomationForLawFirmsUk,
  aiReceptionistCostUk,
];

/** The five core verticals shown in the homepage "Who we build for" section. */
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
