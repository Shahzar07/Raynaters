import type { LandingPage } from './types';
import aiAutomationAgencyUk from './data/ai-automation-agency-uk';

export const LANDING_PAGES: LandingPage[] = [aiAutomationAgencyUk];

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}
