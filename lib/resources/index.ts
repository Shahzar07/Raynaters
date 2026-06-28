import type { Resource } from './types';
import aiReceptionistCostUk2026 from './data/ai-receptionist-cost-uk-2026';
import missedCallsCostUkTrades from './data/missed-calls-cost-uk-trades';
import aiReceptionistVsVoicemailVsAnsweringService from './data/ai-receptionist-vs-voicemail-vs-answering-service';
import gdprAiCallHandlingUk from './data/gdpr-ai-call-handling-uk';
import whatAnAiReceptionistSaysCallScripts from './data/what-an-ai-receptionist-says-call-scripts';
import aiReceptionistForDentistsNhsVsPrivate from './data/ai-receptionist-for-dentists-nhs-vs-private';
import aiReceptionistSetupWeekOne from './data/ai-receptionist-setup-week-one';
import automateFirstTradesUk from './data/automate-first-trades-uk';

export const RESOURCES: Resource[] = [
  aiReceptionistCostUk2026,
  missedCallsCostUkTrades,
  aiReceptionistVsVoicemailVsAnsweringService,
  gdprAiCallHandlingUk,
  whatAnAiReceptionistSaysCallScripts,
  aiReceptionistForDentistsNhsVsPrivate,
  aiReceptionistSetupWeekOne,
  automateFirstTradesUk,
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
