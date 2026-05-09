// ============================================================
// RAYNATERS TECH — AGENTIC FORCES FUNNEL
// Design Tokens / Single Source of Truth
// ============================================================
//
// LOCATION IN YOUR PROJECT: lib/design-tokens.ts
//
// HOW TO USE:
//   import { TOKENS } from '@/lib/design-tokens';
//   <div style={{ background: TOKENS.colors.bg }}>...</div>
//
// Every section component MUST import from here. Never hardcode
// hex values, font names, or spacing values inside JSX. This is
// what keeps the page from drifting into AI-slop territory.
// ============================================================

export const TOKENS = {
  colors: {
    // Backgrounds
    bg: '#0A0A0B',           // Page background (near-black with warmth)
    surface: '#131316',      // Card / elevated surface
    surfaceHover: '#18181C', // Card hover state
    border: '#1F1F23',       // Subtle dividers — never harsh

    // Text
    textPrimary: '#FAFAFA',   // Headings, primary copy
    textSecondary: '#A1A1AA', // Sub-copy, captions, labels
    textMuted: '#71717A',     // Footer, fine print

    // Brand
    accent: '#FF5C2C',        // Electric orange — CTAs + key numbers ONLY
    accentHover: '#FF7A52',   // CTA hover state
    accentMuted: '#FF5C2C0D', // 5% opacity for hero radial glow

    // Proof / Success
    success: '#4ADE80',       // Stat callouts, testimonial stars
    successMuted: '#4ADE8014', // Background tint for proof badges
  },

  fonts: {
    display: 'var(--font-instrument-serif)',  // Hero H1 only
    ui: 'var(--font-inter)',                  // Everything else
  },

  fontSize: {
    // Hero / Display
    h1Desktop: '88px',
    h1Mobile: '48px',
    h2Desktop: '56px',
    h2Mobile: '36px',
    h3Desktop: '32px',
    h3Mobile: '24px',

    // Body
    bodyLarge: '19px',
    body: '17px',
    bodySmall: '15px',
    caption: '13px',

    // Stats / Numbers
    statHero: '160px',  // The "47,283" massive numbers
    statHeroMobile: '88px',
  },

  fontWeight: {
    display: 500,    // Display serif — never use 700, looks heavy
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  letterSpacing: {
    tight: '-0.04em',   // H1 / display
    snug: '-0.02em',    // H2 / H3
    normal: '0em',      // Body
    wide: '0.02em',     // All-caps labels
  },

  lineHeight: {
    tight: 1.05,        // Display headlines
    snug: 1.2,          // H2 / H3
    normal: 1.5,        // Body
    relaxed: 1.7,       // Long-form paragraphs
  },

  spacing: {
    sectionDesktop: '160px',  // Vertical padding between sections
    sectionMobile: '96px',
    contentMax: '1200px',     // Hero / wide layouts
    gridMax: '1100px',        // Testimonial / dashboard grids
    textMax: '800px',         // Long-form text sections
    gridGap: '24px',          // Minimum grid gap — never less
    gridGapLarge: '32px',
  },

  radius: {
    sm: '8px',          // Buttons, badges
    md: '12px',         // Cards, images
    lg: '16px',         // Large cards
    xl: '24px',         // Hero elements
    pill: '999px',      // Pill buttons, badges
  },

  motion: {
    // Easings (Framer Motion cubic-bezier arrays)
    ease: [0.22, 1, 0.36, 1] as const,        // Expo ease-out — default for everything
    easeIn: [0.4, 0, 1, 1] as const,          // Element entering
    easeOut: [0, 0, 0.2, 1] as const,         // Element exiting

    // Durations (in seconds)
    durationFast: 0.3,
    durationNormal: 0.6,
    durationSlow: 1.0,
    durationCountUp: 2.0,    // For stat number count-up animations

    // Stagger delays
    staggerWord: 0.04,       // Hero text word-by-word fade
    staggerCard: 0.08,       // Testimonial / card grid reveal
  },

  zIndex: {
    base: 0,
    raised: 10,
    sticky: 100,             // Announcement bar, navigation
    overlay: 1000,           // Modals, drawers
  },

  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
} as const;

// ============================================================
// TYPE-SAFE HELPERS (optional but recommended)
// ============================================================

export type ColorToken = keyof typeof TOKENS.colors;
export type SpacingToken = keyof typeof TOKENS.spacing;

// Usage helper for CSS-in-JS / inline styles:
export const color = (key: ColorToken) => TOKENS.colors[key];
export const space = (key: SpacingToken) => TOKENS.spacing[key];

// ============================================================
// TAILWIND CONFIG INTEGRATION
// ============================================================
//
// Add this to your tailwind.config.ts to expose tokens as
// utility classes (bg-bg, text-accent, etc.):
//
// import { TOKENS } from './lib/design-tokens';
//
// export default {
//   theme: {
//     extend: {
//       colors: TOKENS.colors,
//       fontFamily: {
//         display: [TOKENS.fonts.display],
//         sans: [TOKENS.fonts.ui],
//       },
//       maxWidth: {
//         content: TOKENS.spacing.contentMax,
//         grid: TOKENS.spacing.gridMax,
//         text: TOKENS.spacing.textMax,
//       },
//     },
//   },
// };
//
// ============================================================
