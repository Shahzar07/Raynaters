import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'ai-receptionist-setup-week-one',
  category: 'Guide',
  title: 'Setting up an AI receptionist: what week one actually looks like',
  excerpt:
    'A day-by-day look at deploying an AI receptionist — from the free audit to a live agent answering your calls in under a week.',
  readingTime: '6 min',
  datePublished: '2026-05-22',
  dateModified: '2026-06-24',
  featured: false,

  directAnswer:
    'Setting up an AI receptionist takes about a week: a free audit and scoping call, a fixed-scope build configured to your services and diary, deployment on your existing number, and a short tuning period against real calls. You keep your number and software, and the agent is answering and booking before most hires would have finished their induction.',

  body: [
    {
      type: 'p',
      text: '“Sounds great, but how long and how painful is the setup?” It’s the question that stops most owners pulling the trigger. The honest answer: most businesses go from first call to a live AI receptionist in under a week, with very little lifting on your side. Here’s what that week looks like.',
    },
    { type: 'h2', text: 'Day 1 — The free Agent Audit' },
    {
      type: 'p',
      text: 'A 30-minute call to understand your call volume, the work you’re missing, your services and how you book. No commitment. Within 48 hours you get a written ROI projection — a realistic estimate of what the agent will recover or save, so the decision is based on numbers, not a sales pitch.',
    },
    { type: 'h2', text: 'Days 2–4 — Fixed-scope build' },
    {
      type: 'p',
      text: 'If it’s a fit, we configure the receptionist to your business: your services and pricing rules, how you qualify a job or appointment, your availability, and the tone you want. The price is fixed and scoped up front — no hourly meter. You review the call flow and wording and tell us what to adjust.',
    },
    { type: 'h2', text: 'Day 5 — Deploy on your number' },
    {
      type: 'p',
      text: 'The agent goes live on your existing business number and calendar. There’s nothing new for your customers to dial and nothing to rip out. You decide whether it answers everything, or just overflow and out-of-hours calls to start with.',
    },
    { type: 'h2', text: 'Days 6–7 — Tune against real calls' },
    {
      type: 'p',
      text: 'Once it’s handling live calls, we listen to how it performs on your real call types and fine-tune — the edge cases, the accents, the questions specific to your trade. By the end of the week it’s booking jobs cleanly and you’re seeing captured calls you’d previously have lost.',
    },
    { type: 'h2', text: 'What you actually have to do' },
    {
      type: 'ul',
      items: [
        'Turn up to a 30-minute audit call.',
        'Share how you currently qualify and book work.',
        'Review the call flow and tell us what to tweak.',
        'That’s it — we handle the build, deployment and tuning.',
      ],
    },
    { type: 'h2', text: 'And after week one?' },
    {
      type: 'p',
      text: 'You get full documentation and 90 days of support, and we keep measuring against the projection. If it hasn’t paid for itself within 90 days, we keep building until it does — that’s the guarantee.',
    },
    {
      type: 'callout',
      text: 'Ready to see your week one? Book a free 30-minute Agent Audit and we’ll map your setup and send a written ROI projection within 48 hours.',
    },
  ],

  faqs: [
    {
      q: 'How long does it take to set up an AI receptionist?',
      a: 'Most businesses go live in under a week: a free audit and scoping call, a fixed-scope build over a few days, deployment on your existing number, then a short tuning period against real calls.',
    },
    {
      q: 'Do I need to change my phone number or software?',
      a: 'No. The agent goes live on your existing business number and works with your current calendar or booking software, so there’s nothing for your customers to relearn.',
    },
    {
      q: 'How much work is the setup for me?',
      a: 'Very little. You join a 30-minute audit, share how you qualify and book work, and review the call flow. We handle the build, deployment and tuning, and support you for 90 days after launch.',
    },
  ],

  related: [
    { label: 'Book Your Business On Autopilot Session™', href: '/book' },
    { label: 'What does an AI automation agency do?', href: '/ai-automation-agency-uk' },
  ],

  metadata: {
    title: 'AI Receptionist Setup: What Week One Looks Like',
    description:
      'A day-by-day look at deploying an AI receptionist in the UK — from free audit to a live agent answering your calls in under a week, with minimal effort from you.',
  },
};

export default resource;
