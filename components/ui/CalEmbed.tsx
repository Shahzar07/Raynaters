'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { metaTrack } from "@/lib/analytics/meta";

/**
 * CalEmbed Component
 *
 * Integrates Cal.com booking form with custom theme variables
 * matching the Raynaters design system.
 *
 * Also reports the booking funnel to the Meta Pixel: InitiateCheckout when
 * the calendar is opened, and Schedule + Lead on a confirmed booking — the
 * conversions Meta optimises ad delivery against.
 */
export default function CalEmbed() {
  useEffect(() => {
    // Reaching the calendar is a strong booking-intent signal.
    metaTrack('InitiateCheckout', { content_name: 'Agent Audit booking' });

    (async function () {
      const cal = await getCalApi({"namespace":"in-20mins"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#000000" },
          "dark": { "cal-brand": "#d5faa9" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });

      // Confirmed booking — the conversion that matters.
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          metaTrack('Schedule', { content_name: 'Agent Audit booking' });
          metaTrack('Lead', { content_name: 'Agent Audit booking' });
        },
      });
    })();
  }, []);

  return (
    <div className="h-full w-full overflow-hidden rounded-[12px] bg-bg">
      <Cal
        namespace="in-20mins"
        calLink="automate-with-raynaters/in-20mins"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
      />
    </div>
  );
}
