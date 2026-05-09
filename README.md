# Raynaters Tech — Agentic Forces Funnel

High-conversion B2B sales funnel for Raynaters Tech, an AI automation agency.
Single long-scroll Next.js page with 15 sections.

## Stack

- **Next.js 14** (App Router) + **TypeScript** strict mode
- **Tailwind CSS 3** with custom token-driven config
- **Framer Motion** for restrained, purposeful motion
- **Instrument Serif** (display) + **Inter** (UI), via `next/font`
- **lucide-react** for icons

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing copy

All copy lives in [`lib/content.ts`](lib/content.ts). Edit there — never touch JSX
to change a word.

## Editing design tokens

Colors, motion timings, and typography rules live in
[`lib/design-tokens.ts`](lib/design-tokens.ts) and [`tailwind.config.ts`](tailwind.config.ts).
Keep them in sync.

## Structure

```
app/
├── layout.tsx          # Fonts, metadata, viewport
├── page.tsx            # Imports the 15 sections in order
├── globals.css         # Base styles, scrollbar, grain, marquee mask
└── book/page.tsx       # /book — Calendly placeholder

components/
├── ui/                 # Container, Button, Reveal, CountUp, Marquee, Eyebrow
└── sections/
    ├── 01-AnnouncementBar.tsx
    ├── 02-Navigation.tsx
    ├── 03-Hero.tsx
    ├── 04-StatHero.tsx
    ├── 05-EvolutionStory.tsx
    ├── 06-IndustryAgnostic.tsx
    ├── 07-DashboardWall.tsx
    ├── 08-PersonalNote.tsx
    ├── 09-WhyDoingThis.tsx
    ├── 10-AuthorityNumber.tsx
    ├── 11-Guarantee.tsx
    ├── 12-Testimonials.tsx
    ├── 13-FAQ.tsx
    ├── 14-FinalCTA.tsx
    └── 15-Footer.tsx

lib/
├── content.ts          # All copy (single source of truth)
├── design-tokens.ts    # Color/motion tokens
└── utils.ts            # cn() classname helper
```

## Content swap (after first build)

- Replace placeholder dashboard tiles with real n8n / Make exports
- Swap the founder portrait placeholder with a real photo via `next/image`
- Update testimonials with real anonymized client quotes
- Wire `/book` to a real Calendly inline widget (`react-calendly`)
- Update the `47,283` and `$2.4M+` numbers with current figures in `lib/content.ts`

## Anti-slop guarantees baked into the design

- One accent color (`#FF5C2C`), used only on CTAs, key numbers, and accent details
- No gradients on backgrounds (one allowed: subtle hero radial glow at ~10% opacity)
- No glassmorphism (no backdrop-blur on cards; sticky nav uses a light backdrop on scroll only)
- No emoji icons in UI chrome — `lucide-react` only
- Every section has a unique layout — never a repeated three-column-feature-grid
- Numbers count up on scroll-into-view (not on mount)
- Hero text staggers word-by-word on mount with a subtle blur-out
- Mobile typography scales down independently (tested at 375px)
