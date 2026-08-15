'use client';

import Script from 'next/script';

const AGENT_ID = 'agent_01k0mtrhaxfe7thgt52805tsvn';
const WIDGET_SRC = 'https://elevenlabs.io/convai-widget/index.js';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { 'agent-id': string };
    }
  }
}

/**
 * ElevenLabs conversational voice agent.
 *
 * Rendered site-wide from the root layout. The agent ID is a public
 * identifier — the widget authenticates itself, so no API key is needed
 * (and none should ever be committed to this repo).
 */
export default function ConvaiWidget() {
  return (
    <>
      <elevenlabs-convai agent-id={AGENT_ID} />
      <Script src={WIDGET_SRC} strategy="afterInteractive" />
    </>
  );
}
