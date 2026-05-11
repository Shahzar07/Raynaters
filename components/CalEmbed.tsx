'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: 'in-20mins' });
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#000000' },
          dark: { 'cal-brand': '#d5faa9' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Cal
      namespace="in-20mins"
      calLink="automate-with-raynaters/in-20mins"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
    />
  );
}
