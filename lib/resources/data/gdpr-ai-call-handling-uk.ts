import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'gdpr-ai-call-handling-uk',
  category: 'Guide',
  title: 'GDPR and AI call handling in the UK: what businesses need to know',
  excerpt:
    'How to use an AI receptionist for calls and bookings while staying GDPR-compliant — lawful basis, data location, retention and the questions to ask any vendor.',
  readingTime: '8 min',
  datePublished: '2026-04-02',
  dateModified: '2026-06-15',
  featured: false,

  directAnswer:
    'Using an AI receptionist in the UK is GDPR-compliant when you have a lawful basis for processing call data, tell callers their data is handled, keep that data on infrastructure you control, and set a clear retention period. The biggest risk is not AI itself — it is vendors who hold your callers’ data in a black box you cannot govern.',

  body: [
    {
      type: 'p',
      text: 'AI call handling raises a fair question for any UK business, and a pressing one for clinics and law firms: can you use an AI receptionist and still meet your GDPR obligations? The short answer is yes — but how you set it up matters. This guide covers the principles in plain English. It is general guidance, not legal advice; check specifics with your DPO or solicitor.',
    },
    { type: 'h2', text: 'You are the data controller' },
    {
      type: 'p',
      text: 'When a customer calls your business, you decide why and how their information is used — which makes you the data controller under UK GDPR. Any AI receptionist you use is a processor acting on your instructions. That distinction drives everything else: you set the rules, and your vendor must follow them and be able to prove it.',
    },
    { type: 'h2', text: 'The five things to get right' },
    { type: 'h3', text: '1. Lawful basis' },
    {
      type: 'p',
      text: 'Most call handling relies on legitimate interests (running your business and responding to enquiries) or taking steps to enter a contract. Document which basis applies. For special-category data — health information at a clinic, for example — apply the extra care that data demands.',
    },
    { type: 'h3', text: '2. Transparency' },
    {
      type: 'p',
      text: 'Callers should be able to find out how their data is used. A short line in your privacy notice covering call handling and, where appropriate, a brief notice that calls are answered by an automated assistant keeps things transparent.',
    },
    { type: 'h3', text: '3. Data location and security' },
    {
      type: 'p',
      text: 'This is where most vendors fall short. Ask where call data is stored and processed, whether it leaves the UK or EU, and who can access it. The cleanest answer is data that stays on infrastructure you control rather than pooled inside a vendor’s platform.',
    },
    { type: 'h3', text: '4. Retention' },
    {
      type: 'p',
      text: 'Do not keep call recordings or transcripts forever. Set a defined retention period appropriate to why you hold the data, and make sure the system actually deletes it on schedule.',
    },
    { type: 'h3', text: '5. A processor agreement' },
    {
      type: 'p',
      text: 'You need a data processing agreement with any AI vendor, setting out what they can do with the data, their security measures, and their obligations if something goes wrong. No DPA, no deal.',
    },
    { type: 'h2', text: 'Questions to ask any AI receptionist vendor' },
    {
      type: 'ul',
      items: [
        'Where is call data stored and processed, and does it leave the UK/EU?',
        'Can the system run on infrastructure we own and control?',
        'What is the default retention period, and can we set our own?',
        'Will you sign a data processing agreement?',
        'How is access to recordings and transcripts restricted and logged?',
      ],
    },
    { type: 'h2', text: 'Why we build on infrastructure you own' },
    {
      type: 'p',
      text: 'We deploy agents on infrastructure you control rather than holding your callers’ data ourselves. For clinics handling patient information and law firms handling client matters, that ownership is the difference between a compliance headache and a clean answer to “where does our data live?”',
    },
    {
      type: 'callout',
      text: 'Handling sensitive calls? A free 30-minute Agent Audit covers how an AI receptionist would fit your data-protection requirements — with a written projection within 48 hours.',
    },
  ],

  faqs: [
    {
      q: 'Is using an AI receptionist GDPR-compliant in the UK?',
      a: 'Yes, when you have a lawful basis for processing call data, are transparent with callers, keep the data secure with a defined retention period, and have a data processing agreement with your vendor. Running the agent on infrastructure you control makes compliance considerably easier.',
    },
    {
      q: 'Where is my callers’ data stored with an AI receptionist?',
      a: 'It depends on the vendor — which is exactly what you should ask. The safest setup keeps call data on infrastructure you own and control, rather than pooled inside a third-party platform you cannot govern.',
    },
    {
      q: 'Do I need to tell callers they are speaking to an AI?',
      a: 'Being transparent is good practice. A brief notice that calls are answered by an automated assistant, plus a line in your privacy notice about call handling, keeps callers properly informed.',
    },
  ],

  related: [
    { label: 'AI receptionist for UK dental & medical clinics', href: '/ai-receptionist-for-clinics-uk' },
    { label: 'AI receptionist & automation for UK law firms', href: '/ai-automation-for-law-firms-uk' },
  ],

  metadata: {
    title: 'GDPR & AI Call Handling in the UK: What to Know',
    description:
      'How to use an AI receptionist in the UK while staying GDPR-compliant — lawful basis, data location, retention and the questions to ask any vendor.',
  },
};

export default resource;
