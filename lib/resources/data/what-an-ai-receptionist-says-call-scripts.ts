import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'what-an-ai-receptionist-says-call-scripts',
  category: 'Guide',
  title: 'What an AI receptionist actually says: real call scripts',
  excerpt:
    'Worried an AI receptionist will sound robotic? Here are the call flows it follows — greeting, qualifying, booking and handover — and how it stays on-brand.',
  readingTime: '7 min',
  datePublished: '2026-04-20',
  dateModified: '2026-06-18',
  featured: false,

  directAnswer:
    'An AI receptionist follows a natural call flow: it greets the caller in your business name, finds out what they need, qualifies the job or appointment, books it into your diary or captures the details, and hands genuinely complex calls to a human. The wording is tuned to your brand, so most callers simply feel they reached a helpful receptionist.',

  body: [
    {
      type: 'p',
      text: 'The most common worry about an AI receptionist is simple: “Won’t it sound like a robot and annoy my customers?” It’s a fair question. The answer comes down to the call flow it follows and how well it’s tuned to your business. Here is what those calls actually sound like.',
    },
    { type: 'h2', text: 'The greeting' },
    {
      type: 'p',
      text: 'It answers in your business name, warmly and immediately — no hold music, no “press 1”. Something like: “Good afternoon, you’re through to Northgate Plumbing, how can I help?” The caller hears a professional first impression, not a menu.',
    },
    { type: 'h2', text: 'Understanding what they need' },
    {
      type: 'p',
      text: 'Rather than forcing options, it listens and responds. A caller might say “my boiler’s making a banging noise and there’s no hot water” — the agent recognises an urgent fault, expresses that it can help, and starts gathering the detail it needs without sounding like a form.',
    },
    { type: 'h2', text: 'Qualifying the job' },
    {
      type: 'p',
      text: 'It asks the questions you would: the nature of the problem, the address, how urgent it is, and anything specific to your trade or sector. For a clinic it might check whether the caller is a new or existing patient; for a salon, which service and stylist. It captures what you need to book or quote — nothing more.',
    },
    { type: 'h2', text: 'Booking or capturing' },
    {
      type: 'p',
      text: 'It checks your live availability and offers real slots: “I can get an engineer to you tomorrow between 8 and 10, or Thursday afternoon — which suits?” Once confirmed, it books the job into your diary and sends the caller a confirmation. If it can’t book there and then, it captures the detail and a callback time so nothing is lost.',
    },
    { type: 'h2', text: 'Handover to a human' },
    {
      type: 'p',
      text: 'When a call needs human judgement — a complaint, a sensitive matter, a complex quote — it doesn’t bluff. It captures the context and routes the caller to you with the detail attached, so you pick up a warm, informed handover rather than a cold call.',
    },
    { type: 'h2', text: 'How it stays on-brand' },
    {
      type: 'ul',
      items: [
        'Tone is tuned to your business — friendly trade, calm clinic, polished firm.',
        'It uses your business name, your service language and your pricing rules.',
        'It handles real-world callers: accents, background noise, people who ramble.',
        'You review and adjust the wording until it sounds the way you want.',
      ],
    },
    {
      type: 'p',
      text: 'The goal isn’t to trick anyone — it’s to give every caller a fast, helpful, consistent experience that ends in a booking. Most people simply feel they got through to a good receptionist.',
    },
    {
      type: 'callout',
      text: 'Want to hear it handle your real call types? A free 30-minute Agent Audit includes a walkthrough of how the agent would sound for your business — with a written projection within 48 hours.',
    },
  ],

  faqs: [
    {
      q: 'Will my customers know they’re talking to an AI?',
      a: 'It answers in a natural voice and represents your business by name, so most callers simply feel they reached a helpful receptionist. We tune the tone and script to match how you want your business to sound, and stay transparent where appropriate.',
    },
    {
      q: 'What does an AI receptionist do if it can’t answer something?',
      a: 'It captures the caller, the detail and a callback time, and routes anything needing human judgement straight to you with full context — so you never lose the lead, you just skip the time-wasting calls.',
    },
    {
      q: 'Can I change what the AI receptionist says?',
      a: 'Yes. The greeting, qualifying questions and tone are all configurable, and you review and adjust the wording until it sounds exactly the way you want your business represented.',
    },
  ],

  related: [
    { label: 'AI receptionist for UK trades', href: '/ai-receptionist-for-trades-uk' },
    { label: 'How to choose an AI receptionist in the UK', href: '/best-ai-receptionist-uk' },
  ],

  metadata: {
    title: 'What an AI Receptionist Actually Says (Real Call Flows)',
    description:
      'The call flows an AI receptionist follows — greeting, qualifying, booking and human handover — and how it stays on-brand and natural for UK businesses.',
  },
};

export default resource;
