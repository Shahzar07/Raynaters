import type { Resource } from './types';
import aiReceptionistCostUk2026 from './data/ai-receptionist-cost-uk-2026';
import automateFirstTradesUk from './data/automate-first-trades-uk';

export const RESOURCES: Resource[] = [
  aiReceptionistCostUk2026,
  automateFirstTradesUk,
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
