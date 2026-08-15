// ============================================================
// RAYNATERS TECH — Meta (Facebook) Pixel helpers
// Thin, type-safe wrappers around fbq so conversion events can be
// fired from anywhere without repeating window/undefined guards.
// ============================================================

export const META_PIXEL_ID = '1358524779119896';

type FbqFn = (
  command: 'init' | 'track' | 'trackCustom' | 'consent',
  eventOrId: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
  }
}

/** Fire a Meta *standard* event (PageView, Lead, Schedule, Contact…). */
export function metaTrack(event: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  window.fbq('track', event, params);
}

/** Fire a Meta *custom* event for anything outside the standard set. */
export function metaTrackCustom(
  event: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  window.fbq('trackCustom', event, params);
}
