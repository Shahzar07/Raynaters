import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'missed-calls-cost-uk-trades',
  category: 'Playbook',
  title: 'What missed calls really cost a UK trades business',
  excerpt:
    'Missed calls are the most expensive line item most trades never track. Here is how to put a real number on it — and what to do about it.',
  readingTime: '6 min',
  datePublished: '2026-03-04',
  dateModified: '2026-06-10',
  featured: false,
  coverImage: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155014_c5adbbda-27d2-4b04-a110-a30e2d61d491.png',
    alt: 'UK trades van parked outside a job while the owner is unable to answer a ringing phone',
  },

  directAnswer:
    'A missed call for a UK trades business is rarely a lost message — it is usually a lost job, because most callers simply ring the next firm rather than leave voicemail. To size the cost, multiply your missed calls a week by your average job value and your typical win rate. For many trades that is hundreds to thousands of pounds a month walking out the door.',

  body: [
    {
      type: 'p',
      text: 'Missed calls are the most expensive thing most trades businesses never measure. There is no invoice for them, no line in the accounts — the work simply never arrives, and it is impossible to miss money you never knew you nearly had. But the cost is real, and once you put a number on it, the case for fixing it becomes obvious.',
    },
    { type: 'h2', text: 'Why a missed call is usually a lost job' },
    {
      type: 'p',
      text: 'When someone needs a plumber, electrician or builder, they are rarely browsing — they have a problem now. If your phone rings out or hits voicemail, the overwhelming majority do not leave a message. They hang up and dial the next firm on the list. The job is not delayed; it is gone, to whoever happened to pick up.',
    },
    { type: 'h2', text: 'How to put a real number on it' },
    {
      type: 'p',
      text: 'You do not need perfect data — a back-of-the-envelope figure is enough to make the decision. Work through three numbers:',
    },
    {
      type: 'ul',
      items: [
        'Missed or unanswered calls in a typical week (check your phone log — most owners are surprised).',
        'Your average job value.',
        'The share of enquiries you would normally win.',
      ],
    },
    {
      type: 'p',
      text: 'Multiply them together and annualise. Even at a handful of missed calls a week and a modest job value, the number lands in the thousands of pounds a month for most trades — far more than the cost of fixing it.',
    },
    { type: 'h2', text: 'The hidden multipliers' },
    {
      type: 'ul',
      items: [
        'Emergency and out-of-hours calls are worth the most — and are exactly the ones that hit voicemail.',
        'You often pay for the lead twice: once for the ad or referral, then again by missing the call it generated.',
        'A lost first job is also a lost repeat customer and the reviews and referrals they would have brought.',
      ],
    },
    { type: 'h2', text: 'What actually fixes it' },
    {
      type: 'p',
      text: 'Voicemail does not fix it — callers do not use it. A traditional call centre helps with coverage but does not know your services, your pricing or your diary. An AI receptionist answers every call 24/7, triages the job, and books it straight into your calendar — so the emergency callout at 9pm becomes a booking instead of a competitor’s windfall.',
    },
    {
      type: 'p',
      text: 'One of our trades clients, a two-van plumbing firm, was quietly losing around £4,100 of booked work a month to voicemail before every call started getting answered. The fix paid for itself in the first few weeks.',
    },
    {
      type: 'callout',
      text: 'Want your own number? A free 30-minute Agent Audit reviews your call patterns and tells you roughly what missed calls are costing you — with a written projection within 48 hours.',
    },
  ],

  faqs: [
    {
      q: 'How much does a missed call cost a trades business?',
      a: 'It depends on your average job value and win rate, but because most callers do not leave voicemail and simply ring the next firm, a missed call is usually a fully lost job. For many UK trades that adds up to thousands of pounds a month.',
    },
    {
      q: 'Do people leave a voicemail if I miss their call?',
      a: 'Usually not. When someone has an urgent trade problem they tend to hang up and call the next business rather than leave a message — which is why voicemail does so little to recover missed work.',
    },
    {
      q: 'How can I stop missing calls without hiring someone?',
      a: 'An AI receptionist answers every call 24/7, triages the job and books it into your diary on your existing number — recovering the work a missed call would otherwise lose, for a fraction of the cost of a hire.',
    },
  ],

  related: [
    { label: 'See our AI receptionist for UK trades', href: '/ai-receptionist-for-trades-uk' },
    { label: 'What to automate first in a trades business', href: '/resources/automate-first-trades-uk' },
  ],

  metadata: {
    title: 'What Missed Calls Cost a UK Trades Business',
    description:
      'How to put a real number on missed calls for a UK trades business — why they are usually lost jobs, and what actually fixes it. Practical, no fluff.',
  },
};

export default resource;
