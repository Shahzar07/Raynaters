import type { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'northgate-plumbing-heating',
    client: 'Northgate Plumbing & Heating',
    monogram: 'NP',
    category: 'Trades',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185107_b12336d4-cdf5-40a2-91bc-a4d5331e2c9a.png',
      alt: 'Heating engineer working on a modern combi boiler in a British home utility room',
    },
    headlineResult: 'Recovered ~£4,100 of booked work a month that used to go to voicemail.',
    metric: '£4,100/mo',
    metricLabel: 'Recovered booked work',
    summary:
      'A two-van plumbing firm was losing emergency and out-of-hours jobs to voicemail. An AI receptionist now answers, triages and books every call.',
    challenge:
      'Northgate is a two-van plumbing and heating firm. With both engineers on the tools all day, calls went to voicemail — especially the after-hours emergencies that are worth the most. Callers rarely left a message; they simply rang the next plumber. The owner was reviewing missed-call logs at night and watching obvious work disappear.',
    solution:
      'We deployed an AI receptionist on their existing business number. It answers every call 24/7 in a natural voice, triages for urgency, captures the job and address, and books non-emergency work straight into the shared diary. Emergencies are logged and the on-call engineer is alerted immediately, so genuine call-outs are never missed.',
    story: [
      {
        heading: 'Where it started',
        body: 'Northgate is a two-van plumbing and heating firm built on word of mouth — the kind of business where the owner, Gary, still knows most customers by name. Both engineers spend the day on the tools, under sinks and inside airing cupboards, which meant one thing for the phone: nobody could ever answer it. Every call rolled to voicemail, and in a trade where a boiler failure feels like an emergency to the person shivering at home, voicemail is where jobs go to die.',
      },
      {
        heading: 'The breaking point',
        body: 'The moment it became unignorable was a Tuesday night in January. Gary scrolled through the missed-call log after dinner and counted the evening\'s calls — then rang two of them back the next morning. Both had already booked another plumber. He started doing the maths on what a winter of unanswered evenings was costing, and stopped counting when the number got uncomfortable. The emergencies that pay the most were exactly the calls the business was least able to answer.',
      },
      {
        heading: 'The Agent Audit',
        body: 'The engagement started with a free 30-minute audit. We pulled apart how calls actually flowed through the business: when they came in, how many were urgent, what a typical boiler call-out was worth, and what happened after voicemail picked up (almost nothing — fewer than one caller in five left a message). Within 48 hours Gary had a written ROI projection that made the decision straightforward: even a fraction of the missed evening work would cover the system several times over.',
      },
      {
        heading: 'What we built',
        body: 'We deployed an AI receptionist directly on Northgate\'s existing business number — no new number, nothing for customers to learn. It answers every call in a natural voice within a couple of rings, asks the questions Gary himself would ask — what\'s the problem, where are you, is water coming through the ceiling right now — and triages accordingly. Routine work is booked straight into the shared diary with the job details and address captured. Genuine emergencies page the on-call engineer immediately, so a burst pipe at 11pm reaches a human in minutes.',
      },
      {
        heading: 'The first weeks live',
        body: 'The system went live inside three weeks, and the first booking it took was an after-hours boiler diagnostic that would previously have rung out. In the early days Gary listened back to call summaries each evening, and we tuned the scripts around what he heard — how it described call-out fees, how it handled tenants ringing on behalf of landlords, when it should escalate. By the end of the first month, checking the overnight bookings had replaced checking the missed-call log.',
      },
      {
        heading: 'Where they are now',
        body: 'Today every call to Northgate is answered, day and night, and the firm banks around £4,100 a month in booked work that used to vanish into voicemail. Nothing about how Gary and his engineer work has changed — they are still on the tools all day. The difference is that the phone finally works as hard as they do.',
      },
    ],
    results: [
      { metric: '£4,100', label: 'Recovered booked work per month' },
      { metric: '100%', label: 'Of calls answered, day and night' },
      { metric: '0', label: 'Calls left to voicemail' },
    ],
    persona: { name: 'Gary Whitfield', role: 'Owner' },
    quote: {
      text: "We were quietly losing thousands a month to voicemail and never knew the full scale of it. Now every call gets answered and the emergencies actually reach me. It paid for itself in the first few weeks.",
      author: 'Gary Whitfield',
      role: 'Owner, Northgate Plumbing & Heating',
    },
    metadata: {
      title: 'Northgate Plumbing & Heating — AI Receptionist Case Study',
      description:
        'How a two-van UK plumbing firm recovered ~£4,100 of booked work a month by replacing voicemail with a 24/7 AI receptionist.',
    },
    related: ['riverside-dental', 'lumiere-aesthetics'],
  },
  {
    slug: 'riverside-dental',
    client: 'Riverside Dental Practice',
    monogram: 'RD',
    category: 'Clinics',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185109_eecfc50e-27d1-41ea-9508-3d56d5b07c81.png',
      alt: 'Receptionist answering the phone at the front desk of a modern UK dental practice',
    },
    headlineResult: 'Lifted captured new-patient bookings by 22% across two sites.',
    metric: '+22%',
    metricLabel: 'New-patient bookings captured',
    summary:
      'A two-site dental practice was missing a third of calls at peak times. An AI receptionist now answers, books and reschedules around the clock.',
    challenge:
      'Riverside runs two busy dental sites. At peak times and after hours, roughly a third of calls went unanswered, sending would-be new patients to a full voicemail box — and often to a competing practice with a live phone line. The front-desk team was constantly interrupted mid-task.',
    solution:
      'We deployed an AI receptionist connected to their practice calendar. It answers every call, books and reschedules appointments in real time, handles routine questions about treatments and availability, and captures new-patient enquiries out of hours. The front desk now handles the patients in front of them, not a ringing phone.',
    story: [
      {
        heading: 'Where it started',
        body: 'Riverside runs two busy dental sites, each with a small front-desk team doing the impossible: checking patients in, taking payments, answering treatment questions — and fielding a phone that never stops. At peak times, roughly a third of calls simply could not be picked up. After hours it was worse: the voicemail box filled, and would-be new patients moved down their search results to a practice that answered.',
      },
      {
        heading: 'The breaking point',
        body: 'Practice Manager Hannah Clarke knew calls were being missed; what changed things was measuring it. A month of call-log analysis showed the scale — hundreds of unanswered calls across the two sites, clustered exactly at the times the desk was busiest. Worse, a mystery-shopper exercise showed that a new patient who reached voicemail almost never rang back. The practice was paying to attract patients its phone line was quietly turning away.',
      },
      {
        heading: 'The Agent Audit',
        body: 'Our audit mapped the full journey of a Riverside phone call: what patients rang about, which calls genuinely needed a human, and how bookings flowed into the practice calendar. Around two-thirds of call volume turned out to be bookable or answerable without touching the front desk — appointments, reschedules, opening hours, treatment basics. That became the deployment target, with a written projection delivered within 48 hours.',
      },
      {
        heading: 'What we built',
        body: 'We deployed an AI receptionist connected directly to the practice calendar across both sites. It answers every call in a calm, professional voice, books and reschedules appointments in real time against live availability, answers routine questions about treatments and pricing, and captures new-patient enquiries at any hour. Anything clinical or sensitive is routed to the team with a full summary — the receptionist handles reception, not dentistry.',
      },
      {
        heading: 'The first weeks live',
        body: 'Go-live was staged: the AI took overflow and after-hours calls first, so the team could review its work before handing over more. Hannah\'s team read the call summaries each morning — including the Sunday-evening new-patient bookings that had simply never existed before — and within a fortnight the receptionist was answering front-line calls at both sites, with the desk free to look after the patients physically in front of them.',
      },
      {
        heading: 'Where they are now',
        body: 'Captured new-patient bookings are up 22% across both sites, appointment cover runs around the clock, and the third of calls that used to go unanswered now gets picked up on the first ring. The front-desk team hasn\'t been replaced — it has been relieved. The phones stopped winning.',
      },
    ],
    results: [
      { metric: '+22%', label: 'New-patient bookings captured' },
      { metric: '24/7', label: 'Appointment booking cover' },
      { metric: '1/3', label: 'Of calls previously missed — now answered' },
    ],
    persona: { name: 'Hannah Clarke', role: 'Practice Manager' },
    quote: {
      text: 'The phones used to win. Now every patient gets answered and booked, even on a Sunday evening, and our reception team can actually focus on the practice. The new-patient numbers speak for themselves.',
      author: 'Hannah Clarke',
      role: 'Practice Manager, Riverside Dental',
    },
    metadata: {
      title: 'Riverside Dental — AI Receptionist Case Study',
      description:
        'How a two-site UK dental practice lifted captured new-patient bookings by 22% with a 24/7 AI receptionist.',
    },
    related: ['northgate-plumbing-heating', 'carter-vance-solicitors'],
  },
  {
    slug: 'carter-vance-solicitors',
    client: 'Carter & Vance Solicitors',
    monogram: 'CV',
    category: 'Law Firms',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185111_d538cc1f-e1fb-4d6a-b209-a96cc5e91f8a.png',
      alt: 'Senior solicitor reviewing case documents at a mahogany desk in a traditional British law office',
    },
    headlineResult: 'Returned ~9 billable hours a week per fee-earner.',
    metric: '9 hrs/wk',
    metricLabel: 'Billable time recovered per fee-earner',
    summary:
      'Fee-earners were losing hours to intake, scheduling and chasing. Agents now qualify enquiries, book consultations and chase documents automatically.',
    challenge:
      'At this mid-sized firm, fee-earners were spending hours each week on work that should never have reached them: first-line intake calls, scheduling consultations, and chasing clients for outstanding documents. Valuable enquiries arriving after hours were frequently missed entirely.',
    solution:
      'We deployed agents that capture and qualify intake 24/7 against the firm’s criteria and matter types, book consultations around fee-earner availability, and chase outstanding documents on a schedule. The firm retains full oversight of client communication; the agents handle the administrative load around it.',
    story: [
      {
        heading: 'Where it started',
        body: 'Carter & Vance is a mid-sized firm with a healthy flow of enquiries — conveyancing, family, private client. The problem wasn\'t demand; it was where the demand landed. First-line intake calls, consultation scheduling and document chasing all flowed straight to fee-earners, the most expensive people in the building. Hours that should have been billed were spent playing telephone tag and sending \'gentle reminder\' emails.',
      },
      {
        heading: 'The breaking point',
        body: 'Practice Manager Priya Sharma ran a simple time audit across the fee-earners: nearly a full working day per person, per week, was going on administrative intake and chasing. At charge-out rates, the number was painful to look at. Meanwhile, enquiries that arrived after 5:30pm — often the most valuable, from people who had spent the day deciding to act — sat unanswered overnight, and a measurable share never called back.',
      },
      {
        heading: 'The Agent Audit',
        body: 'The audit mapped intake from first contact to opened matter: what information each matter type needed, which questions qualified an enquiry in or out, where documents stalled, and where fee-earner time was leaking. We designed the deployment around the firm\'s own criteria and matter types — and around a hard rule from the partners: the firm keeps full oversight of every client communication.',
      },
      {
        heading: 'What we built',
        body: 'We deployed a set of agents around the firm\'s existing systems. Intake is captured and qualified 24/7 against the firm\'s criteria, with conflict-check information gathered up front. Consultations are booked directly around each fee-earner\'s availability. Outstanding documents are chased on a polite, persistent schedule that never forgets and never sounds irritated. Every interaction is logged for review, and anything unusual escalates to a human.',
      },
      {
        heading: 'The first weeks live',
        body: 'The document-chasing agent earned its keep first — matters that had been stalled for weeks on a missing form started moving within days. Intake followed, and the quality surprised the sceptics: fee-earners began receiving enquiries as clean, pre-qualified summaries rather than cold calls mid-drafting. The 9am scramble through the overnight enquiry inbox disappeared, because the overnight enquiries had already been handled.',
      },
      {
        heading: 'Where they are now',
        body: 'Each fee-earner has recovered roughly nine billable hours a week — close to a full working day returned to actual legal work. After-hours enquiries are captured instead of lost, and intake runs to the firm\'s standards around the clock. The agents didn\'t replace anyone; they took back the time the admin had been stealing.',
      },
    ],
    results: [
      { metric: '9 hrs/wk', label: 'Billable time recovered per fee-earner' },
      { metric: '24/7', label: 'Intake capture and qualification' },
      { metric: '0', label: 'After-hours enquiries lost' },
    ],
    persona: { name: 'Priya Sharma', role: 'Practice Manager' },
    quote: {
      text: 'Our fee-earners were doing admin we couldn’t bill for. The agents took intake, scheduling and chasing off their desks entirely — and gave us back the better part of a day each, every week.',
      author: 'Priya Sharma',
      role: 'Practice Manager, Carter & Vance Solicitors',
    },
    metadata: {
      title: 'Carter & Vance Solicitors — AI Automation Case Study',
      description:
        'How a UK law firm returned ~9 billable hours a week per fee-earner by automating intake, scheduling and document chasing.',
    },
    related: ['riverside-dental', 'brookline-lettings'],
  },
  {
    slug: 'lumiere-aesthetics',
    client: 'Lumière Aesthetics',
    monogram: 'LA',
    category: 'Cosmetic Clinics',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185113_8290cb86-e188-46cb-a80a-1133e407c2ce.png',
      alt: 'Practitioner preparing equipment in a premium aesthetics clinic treatment room',
    },
    headlineResult: 'Recovered around £6,800 of booked treatments a month.',
    metric: '+£6,800/mo',
    metricLabel: 'Booked treatments recovered',
    summary:
      'A single-site aesthetic clinic was missing high-value enquiries while treating clients. An AI receptionist now captures and books every one.',
    challenge:
      'Lumière’s practitioners couldn’t answer the phone or messages while mid-treatment — and in aesthetics, each missed enquiry can be a £150+ booking. High-intent leads from ads and social were slipping away to faster-responding competitors.',
    solution:
      'We deployed an AI receptionist across their phone and enquiry channels, connected to their booking system. It answers instantly, qualifies against suitability rules, books consultations and treatments, and follows up on enquiries with reminders and deposit prompts to protect high-value slots.',
    story: [
      {
        heading: 'Where it started',
        body: 'Lumière is a single-site aesthetics clinic with a strong social following and a diary driven by high-value treatments. Its bottleneck was structural: practitioners can\'t answer a phone mid-treatment, and in aesthetics the enquiries don\'t wait. A missed call or an Instagram DM answered four hours late is a £150+ booking made somewhere else — often with the competitor who replied in ninety seconds.',
      },
      {
        heading: 'The breaking point',
        body: 'Clinic owner Sophie Bennett was spending on ads and social content that demonstrably worked — the enquiries were coming in. But when she traced them end to end, the leak was obvious: enquiries arriving during treatment hours and evenings converted at a fraction of the rate of the ones that happened to land when someone was free. The clinic was paying to generate demand and then losing it in the gap between ping and reply.',
      },
      {
        heading: 'The Agent Audit',
        body: 'The audit followed every enquiry channel — phone, website form, Instagram — and timed the response gaps against booking outcomes. It also looked at the diary itself: no-shows on high-value slots were compounding the problem. The projection was built on two levers: capture the enquiries currently going cold, and protect the bookings already made.',
      },
      {
        heading: 'What we built',
        body: 'We deployed an AI receptionist across the clinic\'s phone and enquiry channels, connected to its booking system. It answers instantly at any hour, qualifies enquiries against the clinic\'s suitability rules, books consultations and treatments straight into the diary, and follows up warm enquiries that haven\'t yet committed. Around the diary, it sends reminders and deposit prompts that quietly protect the most valuable slots.',
      },
      {
        heading: 'The first weeks live',
        body: 'The late-night enquiries were the revelation — people research treatments at 10pm, and Lumière became the clinic that answered. Sophie reviewed conversations weekly as we tuned tone and phrasing to sound like the clinic\'s own voice rather than a call centre. Deposit prompts, introduced gently in week three, cut no-shows without a single complaint.',
      },
      {
        heading: 'Where they are now',
        body: 'The clinic banks around £6,800 a month in treatments that would previously have slipped away, enquiry capture runs 24/7 across every channel, and no-shows are down thanks to reminders and deposits. The practitioners\' day looks exactly as it did before — fully focused on clients — while the front of house never sleeps.',
      },
    ],
    results: [
      { metric: '+£6,800', label: 'Booked treatments recovered per month' },
      { metric: '24/7', label: 'Enquiry capture and follow-up' },
      { metric: '↓', label: 'No-shows reduced with reminders & deposits' },
    ],
    persona: { name: 'Sophie Bennett', role: 'Clinic Owner' },
    quote: {
      text: 'Every missed call was a treatment booking walking out the door. Now nothing gets missed — calls, DMs, late-night enquiries — and the recovered bookings have been transformational for the clinic.',
      author: 'Sophie Bennett',
      role: 'Clinic Owner, Lumière Aesthetics',
    },
    metadata: {
      title: 'Lumière Aesthetics — AI Receptionist Case Study',
      description:
        'How a UK aesthetic clinic recovered ~£6,800 of booked treatments a month by capturing every call and enquiry with an AI receptionist.',
    },
    related: ['northgate-plumbing-heating', 'riverside-dental'],
  },
  {
    slug: 'brookline-lettings',
    client: 'Brookline Lettings',
    monogram: 'BL',
    category: 'Property',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185115_97cf72af-7636-4f92-b795-76d92d76e31c.png',
      alt: 'Property agent reviewing listings at a UK high-street lettings agency office at dusk',
    },
    headlineResult: 'Freed 31 hours a week of lettings admin.',
    metric: '31 hrs/wk',
    metricLabel: 'Admin time reclaimed',
    summary:
      'A lettings team lost a day a week to referencing, document chasing and re-keying across three systems. An agent now runs it end to end.',
    challenge:
      'Brookline’s lettings team was losing a full day every week to manual tenant referencing, chasing documents, and re-keying the same information across three disconnected systems. Move-ins were being delayed by avoidable admin bottlenecks.',
    solution:
      'We deployed an agent that handles referencing intake, chases outstanding documents automatically, and keeps their CRM and systems in sync end to end. The team stepped out of the copy-paste loop and into managing exceptions only.',
    story: [
      {
        heading: 'Where it started',
        body: 'Brookline manages a growing lettings book, and growth had a hidden tax: admin. Every new tenancy meant referencing, right-to-rent checks, document collection and the same details keyed into three systems that didn\'t talk to each other — CRM, referencing platform, property software. The team\'s week was disappearing into copy-paste, and tenants felt it as slow, stop-start move-ins.',
      },
      {
        heading: 'The breaking point',
        body: 'Operations Director Daniel Pearce added it up: across the team, a full working day per person per week was going on referencing admin and document chasing. Move-ins were being delayed not by anything difficult, but by a missing payslip nobody had chased on Tuesday. The team was hiring to keep up with admin rather than to grow the book — the clearest sign that the process, not the people, was the problem.',
      },
      {
        heading: 'The Agent Audit',
        body: 'We mapped a tenancy from applicant to move-in and marked every manual touch: seventeen steps, most of them chasing or re-keying. The audit identified which steps were pure process (automatable end to end) and which genuinely needed judgement (exceptions for humans). The written projection targeted the biggest block first: referencing intake and document chase.',
      },
      {
        heading: 'What we built',
        body: 'We deployed an agent that runs the referencing pipeline end to end. It takes applicants through intake, requests and collects documents, chases outstanding items automatically — politely, repeatedly, at sensible hours — and writes everything once into all three systems, keeping them in sync without a human re-keying anything. The team\'s job changed from doing the pipeline to supervising its exceptions.',
      },
      {
        heading: 'The first weeks live',
        body: 'The first thing the team noticed was silence — the background hum of \'has anyone chased the guarantor form?\' stopped. Documents that used to take a week of intermittent chasing started landing in a day or two, because the agent asks the same day, every day, until they arrive. We spent the early weeks tuning edge cases with the team: self-employed applicants, overseas guarantors, the odd hand-written payslip.',
      },
      {
        heading: 'Where they are now',
        body: 'Brookline has reclaimed around 31 hours of admin a week, three systems now behave like one, and move-in delays caused by paperwork have largely disappeared. The team spends its time on landlords, tenants and growing the book — the work they were actually hired to do.',
      },
    ],
    results: [
      { metric: '31 hrs/wk', label: 'Admin time reclaimed' },
      { metric: '3→1', label: 'Systems kept in sync automatically' },
      { metric: '↓', label: 'Move-in delays reduced' },
    ],
    persona: { name: 'Daniel Pearce', role: 'Operations Director' },
    quote: {
      text: 'We were drowning in referencing and document chasing across three systems. The agent runs all of it now. Getting 31 hours a week back changed what our team could actually focus on.',
      author: 'Daniel Pearce',
      role: 'Operations Director, Brookline Lettings',
    },
    metadata: {
      title: 'Brookline Lettings — AI Automation Case Study',
      description:
        'How a UK lettings agency reclaimed 31 hours a week by automating tenant referencing, document chasing and CRM sync.',
    },
    related: ['carter-vance-solicitors', 'meridian-commerce'],
  },
  {
    slug: 'meridian-commerce',
    client: 'Meridian Commerce',
    monogram: 'MC',
    category: 'E-commerce',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185117_53ef947b-319a-465e-a1f8-56a8ddbfdfdc.png',
      alt: 'E-commerce founder checking orders on a laptop inside a small fulfilment warehouse',
    },
    headlineResult: 'Auto-resolved 85% of support tickets within seconds.',
    metric: '85%',
    metricLabel: 'Of tickets auto-resolved',
    summary:
      'A growing e-commerce brand’s inbox couldn’t keep up. A support agent now resolves the bulk of tickets instantly and routes the rest.',
    challenge:
      'Meridian’s small team was buried under repetitive "where is my order?", returns and product questions. Response times were climbing, and hiring more support staff to cope was eating the margin growth was supposed to create.',
    solution:
      'We deployed a customer-support agent connected to their order, returns and helpdesk systems. It resolves tier-one tickets instantly in the brand’s voice — order status, returns, product questions — and routes genuinely complex cases to a human with full context attached.',
    story: [
      {
        heading: 'Where it started',
        body: 'Meridian is a growing e-commerce brand with the support inbox to prove it. Most tickets were the same handful of questions in different clothes — where is my order, how do I return this, does it fit — but each one still needed a human to open it, look up the order and type an answer. As sales grew, response times stretched, and the team faced the classic scaling trap: hire more people to answer the same questions, or watch satisfaction slide.',
      },
      {
        heading: 'The breaking point',
        body: 'Head of Operations Amara Okeke had the budget request on her desk: two more support hires just to hold response times where they were. The economics grated — margin earned on growth being handed straight back to answer \'where is my order?\' for the thousandth time. Meanwhile weekend tickets sat for two days, and the first thing the Monday team did was apologise.',
      },
      {
        heading: 'The Agent Audit',
        body: 'The audit classified a month of tickets by type, resolution path and systems touched. The pattern was stark: the overwhelming majority were tier-one queries resolvable from data already sitting in their order, returns and helpdesk systems. We scoped an agent around exactly that set, with a hard rule — anything ambiguous, emotional or high-value goes to a human, with context attached.',
      },
      {
        heading: 'What we built',
        body: 'We deployed a customer-support agent wired into Meridian\'s order, returns and helpdesk systems. It resolves tier-one tickets in seconds, in the brand\'s own voice — pulling live order status, issuing returns labels, answering product questions from the catalogue. Complex cases route to the team with the full history and a suggested next step, so the human starts at the middle of the problem rather than the beginning.',
      },
      {
        heading: 'The first weeks live',
        body: 'The agent went live on a slice of ticket volume, shadowed by the team who reviewed every response before expanding its remit. The tone took a week of tuning — Meridian\'s voice is warm and a little informal, and the agent had to earn that. By week three it was handling nights and weekends alone, and Monday mornings stopped starting with apologies.',
      },
      {
        heading: 'Where they are now',
        body: 'Eighty-five per cent of tickets are resolved automatically with a median first response under a minute, around the clock, with no new hires. The support team didn\'t shrink — it moved up a level, spending its time on the genuinely hard cases and on turning complaints into repeat customers.',
      },
    ],
    results: [
      { metric: '85%', label: 'Of tickets auto-resolved' },
      { metric: '<60s', label: 'Median first response time' },
      { metric: '24/7', label: 'Support cover with no new hires' },
    ],
    persona: { name: 'Amara Okeke', role: 'Head of Operations' },
    quote: {
      text: 'We were about to hire two more support people. Instead the agent handles the bulk of our tickets in seconds, around the clock, and the team only sees the cases that actually need a human.',
      author: 'Amara Okeke',
      role: 'Head of Operations, Meridian Commerce',
    },
    metadata: {
      title: 'Meridian Commerce — AI Support Agent Case Study',
      description:
        'How a UK e-commerce brand auto-resolved 85% of support tickets in seconds with an AI customer-support agent — without new hires.',
    },
    related: ['brookline-lettings', 'northgate-plumbing-heating'],
  },
  {
    slug: 'harbourline-electrical',
    client: 'Harbourline Electrical',
    monogram: 'HE',
    category: 'Trades · Australia',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185127_44879934-f33a-498d-8356-25362c7704b7.png',
      alt: 'Australian electrician in hi-vis testing a residential switchboard outside a suburban Sydney home',
    },
    headlineResult: 'Recovered ~A$5,900 of booked call-out work a month in Sydney.',
    metric: 'A$5,900/mo',
    metricLabel: 'Recovered booked work',
    summary:
      'A Sydney electrical contractor was losing after-hours fault call-outs to voicemail. An AI receptionist now answers, triages and books every call.',
    challenge:
      'Harbourline runs three electricians across Sydney. On the tools all day, they sent nearly every call to voicemail — including the after-hours fault call-outs that pay the most. Callers simply rang the next sparkie, and the owner only saw the scale of it when he checked the missed-call log.',
    solution:
      'We deployed an AI receptionist on their existing business number. It answers every call 24/7, recognises urgent faults — no power, a tripping switchboard — books routine work into the shared diary, and alerts the on-call electrician the moment a genuine emergency comes in.',
    story: [
      {
        heading: 'Where it started',
        body: 'Harbourline runs three electricians across Sydney\'s suburbs — switchboards, fault-finding, the after-hours emergencies that keep a household up at night. Like every sparkie on the tools, they physically couldn\'t answer the phone mid-job: up ladders, in ceilings, elbow-deep in a switchboard. Nearly every call went to voicemail, and Sydney callers with no power don\'t leave messages; they ring the next number on the list.',
      },
      {
        heading: 'The breaking point',
        body: 'Owner Mitch Doran finally sat down with the missed-call log after a mate mentioned he\'d tried to ring twice and given up. The log was worse than he\'d guessed — evenings and weekends full of numbers that never called back, exactly the no-power and tripping-switchboard jobs that pay the most. He could either put someone in an office to answer phones, or find a better way.',
      },
      {
        heading: 'The Agent Audit',
        body: 'The audit went through Harbourline\'s call patterns, job values and diary flow: when calls landed, how many were genuine emergencies, and what an average after-hours call-out was worth. The written projection showed that recovering even a modest slice of the missed evening work would pay for the system many times over — and that the biggest wins were the calls arriving between 6pm and 10pm.',
      },
      {
        heading: 'What we built',
        body: 'We deployed an AI receptionist on Harbourline\'s existing number. It answers every call within seconds, day or night, and asks the questions that matter: what\'s happening, is anything sparking or smelling of burning, is the power off entirely. Urgent faults page the on-call electrician immediately. Routine work — fan installs, extra points, safety checks — is booked straight into the shared diary with the address and job details captured.',
      },
      {
        heading: 'The first weeks live',
        body: 'The first after-hours emergency it caught was a tripping switchboard at 9:40pm — answered, triaged and with the on-call sparkie on the phone to the customer inside ten minutes. Mitch reviewed the call summaries from his ute between jobs, and we tuned the triage questions around real Sydney call-outs: strata jobs, tenants ringing for landlords, the difference between \'no power\' and \'one dead outlet\'.',
      },
      {
        heading: 'Where they are now',
        body: 'Every call to Harbourline is now answered around the clock, and the business books roughly A$5,900 a month in work that used to ring out. The crew still spends all day on the tools — the difference is that the phone is no longer the weakest tool in the kit. It covered its own cost in the first month.',
      },
    ],
    results: [
      { metric: 'A$5,900', label: 'Recovered booked work per month' },
      { metric: '100%', label: 'Of calls answered, day and night' },
      { metric: '0', label: 'After-hours call-outs missed' },
    ],
    persona: { name: 'Mitch Doran', role: 'Owner' },
    quote: {
      text: "We had no idea how much work was ringing out while we were up in ceilings. Now every call gets answered, the urgent ones reach whoever's on call, and the diary fills itself. It covered its own cost in the first month.",
      author: 'Mitch Doran',
      role: 'Owner, Harbourline Electrical',
    },
    metadata: {
      title: 'Harbourline Electrical — AI Receptionist Case Study (Sydney)',
      description:
        'How a Sydney electrical contractor recovered ~A$5,900 of booked call-out work a month by replacing voicemail with a 24/7 AI receptionist.',
    },
    related: ['northgate-plumbing-heating', 'coastal-smiles-dental'],
  },
  {
    slug: 'coastal-smiles-dental',
    client: 'Coastal Smiles Dental',
    monogram: 'CS',
    category: 'Clinics · Australia',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185129_ef1aab6d-c9f7-4429-aa1d-2264433c21a7.png',
      alt: 'Receptionist welcoming a patient at a bright modern coastal dental clinic on the Gold Coast',
    },
    headlineResult: 'Lifted captured new-patient bookings by 19% on the Gold Coast.',
    metric: '+19%',
    metricLabel: 'New-patient bookings captured',
    summary:
      'A Gold Coast dental clinic was missing peak-time and after-hours calls. An AI receptionist now answers, books and reschedules around the clock.',
    challenge:
      'Coastal Smiles runs a busy single-site practice on the Gold Coast. At peak times the front desk simply could not keep up, and evening enquiries — often new patients comparing clinics — went straight to voicemail and on to a competitor with a live line.',
    solution:
      'We deployed an AI receptionist connected to their practice calendar. It answers every call, books and reschedules appointments in real time, handles routine questions about treatments and health-fund cover, and captures new-patient enquiries out of hours so the morning starts with a fuller book.',
    story: [
      {
        heading: 'Where it started',
        body: 'Coastal Smiles is a busy single-site practice on the Gold Coast with a front desk that runs flat out from open to close. At peak times the team simply couldn\'t answer everything, and evenings were a black hole: patients comparing clinics after work would ring at 6:30pm, reach voicemail, and book with whoever answered. The practice never even knew those patients existed.',
      },
      {
        heading: 'The breaking point',
        body: 'Practice Manager Renee Walcott started auditing the after-hours voicemail box and found it mostly empty — not because nobody rang, but because nobody left messages. Cross-checking the phone system\'s logs told the real story: a steady stream of evening calls, many from new numbers, going nowhere. For a practice investing in local marketing, it meant the most motivated patients were being lost at the final step.',
      },
      {
        heading: 'The Agent Audit',
        body: 'Our audit mapped call volume against the front desk\'s actual capacity hour by hour, and traced what patients rang about — bookings, reschedules, price and health-fund questions, directions. Most of it was answerable without a human. The projection targeted two windows: the peak-time overflow the desk couldn\'t reach, and the evening enquiries nobody was there for.',
      },
      {
        heading: 'What we built',
        body: 'We deployed an AI receptionist connected to the practice calendar. It answers every call in a warm, natural voice, books and reschedules against live availability, answers routine questions about treatments and health-fund cover, and captures new-patient enquiries at any hour. Clinical questions and anxious patients are routed to the team with a summary — it handles the reception work, not the dentistry.',
      },
      {
        heading: 'The first weeks live',
        body: 'The first Monday morning after go-live set the tone: the team arrived to find the weekend\'s enquiries already answered and three new patients already in the book. Renee reviewed call transcripts through the first fortnight as we tuned Australian health-fund terminology and the practice\'s preferred booking rules, then handed over peak-time overflow as confidence grew.',
      },
      {
        heading: 'Where they are now',
        body: 'Captured new-patient bookings are up 19%, evening enquiries no longer disappear into voicemail, and booking cover runs 24/7. The front desk finally gets to give the patients in the room its full attention — while the phone looks after the ones who haven\'t walked in yet.',
      },
    ],
    results: [
      { metric: '+19%', label: 'New-patient bookings captured' },
      { metric: '24/7', label: 'Appointment booking cover' },
      { metric: '0', label: 'Evening enquiries lost to voicemail' },
    ],
    persona: { name: 'Renee Walcott', role: 'Practice Manager' },
    quote: {
      text: 'Evenings used to be a black hole — people would ring after work, get nothing, and book somewhere else. Now those calls turn into appointments overnight and my front desk finally gets to look after the patients in the room.',
      author: 'Renee Walcott',
      role: 'Practice Manager, Coastal Smiles Dental',
    },
    metadata: {
      title: 'Coastal Smiles Dental — AI Receptionist Case Study (Gold Coast)',
      description:
        'How a Gold Coast dental clinic lifted captured new-patient bookings by 19% with a 24/7 AI receptionist answering every call.',
    },
    related: ['riverside-dental', 'harbourline-electrical'],
  },
  {
    slug: 'southbank-property-group',
    client: 'Southbank Property Group',
    monogram: 'SP',
    category: 'Property · Australia',
    image: {
      src: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260709_185131_683f5273-17bd-4811-826d-e946052c4aa7.png',
      alt: 'Melbourne property manager with a tablet inspecting a modern apartment with city skyline views',
    },
    headlineResult: 'Freed 26 hours a week of property-management admin in Melbourne.',
    metric: '26 hrs/wk',
    metricLabel: 'Admin time reclaimed',
    summary:
      'A Melbourne property manager lost days to inspection bookings, application chasing and re-keying data. An agent now runs it end to end.',
    challenge:
      'Southbank manages several hundred rentals across Melbourne. The team was buried in inspection scheduling, tenant application chasing and copying the same details between their CRM, trust accounting and inspection apps — while out-of-hours enquiries from realestate.com.au sat unanswered until morning.',
    solution:
      'We deployed an agent that books inspections around the team’s calendar, chases application documents automatically, answers out-of-hours portal enquiries in minutes, and keeps their three systems in sync — leaving the team to manage exceptions instead of copy-paste.',
    story: [
      {
        heading: 'Where it started',
        body: 'Southbank manages several hundred rentals across Melbourne, and property management at that scale is an admin machine: inspection scheduling, application processing, document chasing, and the same tenant details keyed into a CRM, trust accounting software and an inspections app that don\'t talk to each other. Out-of-hours enquiries from realestate.com.au piled up overnight, and the first hour of every morning was triage.',
      },
      {
        heading: 'The breaking point',
        body: 'Head of Property Management Lauren Considine watched her best property managers spend whole afternoons on scheduling and chasing rather than on landlords and tenants. Application turnaround was stretching — not from difficult decisions, but from waiting on documents nobody had time to chase. And portal enquiries answered the next day were converting visibly worse than the ones answered within the hour.',
      },
      {
        heading: 'The Agent Audit',
        body: 'We mapped the tenancy pipeline end to end — enquiry, inspection, application, approval, move-in — and marked every manual touch and every point where data was re-keyed between the three systems. The audit put numbers on the two biggest leaks: hours lost to scheduling-and-chasing, and enquiries decaying overnight. The written projection targeted both.',
      },
      {
        heading: 'What we built',
        body: 'We deployed an agent that runs the routine pipeline. It answers portal enquiries within minutes at any hour, books inspections around the team\'s calendars, takes applicants through document collection and chases outstanding items automatically, and writes everything once across all three systems so they stay in sync without human re-keying. Exceptions — a tricky application, a sensitive tenant situation — escalate to a property manager with full context.',
      },
      {
        heading: 'The first weeks live',
        body: 'The overnight enquiry queue vanished in the first week: prospective tenants enquiring at 9pm got useful replies at 9:02pm and inspection slots before breakfast. The team spent the early weeks reviewing the agent\'s chasing tone — professional, persistent, never pushy — and feeding it the edge cases Melbourne rentals produce: break-leases, pet applications, overseas applicants.',
      },
      {
        heading: 'Where they are now',
        body: 'Southbank has reclaimed around 26 hours of admin a week, portal enquiries are answered in under five minutes around the clock, and three systems now behave like one. The property managers manage properties again — the pipeline runs itself, and only the judgement calls reach a human.',
      },
    ],
    results: [
      { metric: '26 hrs/wk', label: 'Admin time reclaimed' },
      { metric: '<5 min', label: 'Response to portal enquiries' },
      { metric: '3→1', label: 'Systems kept in sync automatically' },
    ],
    persona: { name: 'Lauren Considine', role: 'Head of Property Management' },
    quote: {
      text: 'The team used to spend whole afternoons on inspections and application chasing. The agent handles it all now, and enquiries get answered in minutes instead of the next day. It changed what a normal week looks like here.',
      author: 'Lauren Considine',
      role: 'Head of Property Management, Southbank Property Group',
    },
    metadata: {
      title: 'Southbank Property Group — AI Automation Case Study (Melbourne)',
      description:
        'How a Melbourne property management team reclaimed 26 hours a week by automating inspections, application chasing and system sync.',
    },
    related: ['brookline-lettings', 'harbourline-electrical'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
