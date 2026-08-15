import type { LegalDoc } from './types';

// TODO(shahzar): add the registered company number, registered office address
// and the governing-law jurisdiction you want to specify, then have a
// solicitor review these terms before relying on them commercially.

const terms: LegalDoc = {
  title: 'Terms & Conditions',
  intro:
    'These terms cover your use of this website and the basis on which Raynaters Tech Inc. provides free sessions, proposals and paid engagements. Please read them before booking or engaging us.',
  lastUpdated: '2026-08-15',
  sections: [
    {
      heading: 'About these terms',
      body: [
        'This website is operated by Raynaters Tech Inc. ("Raynaters Tech", "we", "us"). By using this website, booking a session or engaging us for work, you agree to these terms. If you do not agree with them, please do not use the site or engage our services.',
        'Where you engage us for paid work, a separate written proposal or statement of work will set out the scope, price and timeline. If anything in that document conflicts with these terms, that document takes precedence for that engagement.',
      ],
    },
    {
      heading: 'Using this website',
      body: [
        'You may use this website for lawful purposes only. You agree not to use it in any way that breaches applicable law, interferes with its operation or security, or attempts to gain unauthorised access to any part of it or any system connected to it.',
        'We may change, suspend or withdraw all or part of the site at any time without notice. We do not guarantee that the site will always be available or uninterrupted.',
      ],
    },
    {
      heading: 'The free session',
      body: [
        'We offer a free session to assess whether we can help your business. During the session we review your workflows and identify where a system could create measurable value. Following the session, where appropriate, we provide a written projection of the impact we believe a deployment could deliver.',
        'That projection is an estimate based on the information you provide and on our experience of comparable deployments. It is not a guarantee of any particular result, and business outcomes depend on factors outside our control, including the accuracy of the information supplied, your systems and processes, and how the deployed system is used.',
        'Booking a free session places you under no obligation to engage us, and places us under no obligation to accept an engagement.',
      ],
    },
    {
      heading: 'Engagements and fees',
      bullets: [
        'Work is scoped and priced in a written proposal or statement of work, which you accept before we begin.',
        'Fees, payment schedule and any expenses are as set out in that document. Unless it says otherwise, invoices are payable within the period stated on the invoice.',
        'Work outside the agreed scope is treated as a change and is scoped and priced separately before it is carried out.',
        'We may suspend work where invoices remain unpaid after their due date, having given you notice.',
      ],
    },
    {
      heading: 'Our guarantee',
      body: [
        'Where an engagement is offered with our published guarantee, the terms of that guarantee are set out in the applicable proposal or statement of work. In summary, where a deployment has not paid for itself within the stated period measured against the agreed projection, we continue to iterate on it at no additional fee for the period stated in that document.',
        'The guarantee depends on you providing the access, data and cooperation reasonably needed for us to measure and improve the deployment. It does not apply where the scope has materially changed, where the system has been altered by someone else, or where agreed measurement is not possible.',
      ],
    },
    {
      heading: 'Your responsibilities',
      bullets: [
        'Providing accurate information and giving us timely access to the people, systems and data we need.',
        'Holding the necessary rights and permissions for any data, content or credentials you give us access to.',
        'Ensuring your own use of any system we deliver complies with the laws and regulations that apply to your business and industry.',
        'Maintaining your own backups and reviewing deliverables within any review period stated in the proposal.',
      ],
    },
    {
      heading: 'Intellectual property and ownership',
      body: [
        'All content on this website — including text, design, graphics and logos — belongs to Raynaters Tech or its licensors and is protected by intellectual property law. You may not copy or reuse it commercially without our permission.',
        'For paid engagements, ownership of what we build is dealt with in the proposal or statement of work. Our normal position is that on full payment you own the configurations, workflows and documentation we deliver, and they run on infrastructure you control. We retain ownership of our own pre-existing tools, methods, templates and know-how, and of anything general we develop that is not specific to your business.',
        'Third-party platforms and models used within a deployment remain subject to their own licence terms.',
      ],
    },
    {
      heading: 'Confidentiality',
      body: [
        'Each of us may receive confidential information from the other. Both of us agree to keep that information confidential, to use it only for the purposes of the engagement, and to protect it with reasonable care. This does not apply to information that is already public, that is received legitimately from someone else, or that must be disclosed by law.',
      ],
    },
    {
      heading: 'Data protection',
      body: [
        'Our handling of personal information is described in our Privacy Policy. Where we process personal data on your behalf as part of an engagement, we will do so on your documented instructions, and we will put in place a data processing agreement where one is required.',
      ],
    },
    {
      heading: 'AI-generated output',
      body: [
        'Systems we build may use artificial intelligence to generate responses, summaries and other output. AI systems can produce results that are inaccurate or unexpected. We design, test and monitor deployments to reduce that risk, and we will agree escalation paths for cases a system should not handle.',
        'You remain responsible for decisions your business takes, and our systems are not a substitute for professional, legal, medical or financial advice. Where a deployment interacts with your customers, you are responsible for meeting any disclosure or regulatory requirements that apply in your sector.',
      ],
    },
    {
      heading: 'Limitation of liability',
      body: [
        'Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot lawfully be limited.',
        'Subject to that, we are not liable for loss of profit, loss of business, loss of anticipated savings, loss or corruption of data, or any indirect or consequential loss. Our total liability arising out of or in connection with an engagement is limited to the total fees paid by you to us for that engagement in the twelve months before the claim arose.',
        'Website content is provided for general information. It does not constitute advice, and you should not rely on it without taking appropriate professional advice for your circumstances.',
      ],
    },
    {
      heading: 'Testimonials and results shown on this site',
      body: [
        'Metrics, case studies and testimonials shown on this website reflect outcomes from our deployments. Results vary between businesses, and no particular result is promised or guaranteed to any client.',
      ],
    },
    {
      heading: 'Cancellation',
      body: [
        'Free sessions may be rescheduled or cancelled at any time through the link in your booking confirmation. Cancellation and termination terms for paid engagements are set out in the applicable proposal or statement of work. Where an engagement ends early, you remain liable for work properly carried out up to the date it ends.',
      ],
    },
    {
      heading: 'Changes to these terms',
      body: [
        'We may update these terms from time to time. The version published on this page at the time you use the site or enter into an engagement is the version that applies. When we make changes we will update the date at the top of this page.',
      ],
    },
    {
      heading: 'Contact',
      body: [
        'Questions about these terms can be sent to team@raynaters.tech and we will respond within a reasonable period.',
      ],
    },
  ],
  metadata: {
    title: 'Terms & Conditions | Raynaters Tech',
    description:
      'The terms covering use of the Raynaters Tech website, our free sessions, and the basis on which we scope, price and deliver paid engagements.',
  },
};

export default terms;
