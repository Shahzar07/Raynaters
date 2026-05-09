// ============================================================
// RAYNATERS TECH — AGENTIC FORCES FUNNEL
// Design Tokens / Single Source of Truth
// ============================================================

type Bezier = [number, number, number, number];

export const TOKENS = {
  colors: {
    bg: '#0A0A0B',
    surface: '#131316',
    surfaceHover: '#18181C',
    border: '#1F1F23',
    textPrimary: '#FAFAFA',
    textSecondary: '#A1A1AA',
    textMuted: '#71717A',
    accent: '#D3FBA3',
    accentHover: '#BFEF8A',
    accentMuted: '#D3FBA30D',
    success: '#4ADE80',
    successMuted: '#4ADE8014',
  },
  motion: {
    ease: [0.22, 1, 0.36, 1] as Bezier,
    easeIn: [0.4, 0, 1, 1] as Bezier,
    easeOut: [0, 0, 0.2, 1] as Bezier,
    durationFast: 0.3,
    durationNormal: 0.6,
    durationSlow: 1.0,
    durationCountUp: 2.0,
    staggerWord: 0.04,
    staggerCard: 0.08,
  },
};

export type ColorToken = keyof typeof TOKENS.colors;
