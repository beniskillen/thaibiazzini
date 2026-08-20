export type ClaimVisibility = 'public' | 'internal';

export interface CaseMetric {
  value: string;
  label: string;
  claimId?: string;
  visibility: ClaimVisibility;
}

export interface ProofAsset {
  kind: 'placeholder';
  title: string;
  caption: string;
}

export interface CaseStudy {
  slug: 'red-dust' | 'sean-bell' | 'shiv-nair';
  eyebrow: string;
  title: string;
  cardTitle: string;
  summary: string;
  cardSummary: string;
  proofLine: string;
  attribution: string;
  metricStrip: CaseMetric[];
  constraintTitle: string;
  constraint: string[];
  mechanismTitle: string;
  mechanism: string[];
  workCompleted?: { title: string; body: string }[];
  results: string[];
  programmeProof?: { title: string; items: string[]; note: string };
  whyItWorkedTitle?: string;
  whyItWorked?: string[];
  naraLesson?: string;
  proofGallery: ProofAsset[];
  claimStatus: string;
  servicesUsed: string[];
  ctaTitle: string;
  ctaLabel: string;
  seo: {
    title: string;
    description: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'red-dust',
    eyebrow: 'Selected prior work · Fundraising activation',
    title: 'An A$40k target became approximately A$175k raised.',
    cardTitle: 'Red Dust — A$40k target became A$175k',
    summary:
      'By activating the people already closest to the cause, Thai helped Red Dust raise approximately A$175k against a A$40k stated campaign target — more than four times the campaign target.',
    cardSummary: 'Warm-donor activation turned existing trust into a time-bound fundraising result.',
    proofLine: '4.4× target · 500+ personalised DMs',
    attribution: 'Selected prior work led by Thai in her Red Dust role.',
    metricStrip: [
      { value: 'A$175k', label: 'approximate funds raised', claimId: 'red-dust-raised', visibility: 'public' },
      { value: 'A$40k', label: 'stated campaign target', claimId: 'red-dust-target', visibility: 'public' },
      { value: '500+', label: 'personalised Instagram messages', claimId: 'red-dust-messages', visibility: 'public' },
      { value: '4.4×', label: 'target achieved', claimId: 'red-dust-multiple', visibility: 'public' },
    ],
    constraintTitle: 'The constraint',
    constraint: [
      'Red Dust had a strong mission, existing supporters and years of public trust. Previous marketing relied heavily on campaign content, advertising and broad awareness.',
      'The missed opportunity was closer to the organisation: people who already followed, engaged, donated, partnered or had a visible relationship with the cause.',
    ],
    mechanismTitle: 'Activate existing trust around one clear reason to act now.',
    mechanism: [
      'On Double the Impact Day, Thai worked through more than 500 Instagram relationships. Instead of sending one generic message, she reviewed the existing context and made the outreach relevant to the person.',
      'The message was simple: today, the donation would be doubled. The deadline created urgency. The relationship context created trust. Direct donor records made attribution possible.',
    ],
    workCompleted: [
      {
        title: 'Identified the warm audience',
        body: 'Followers, prior engagers, influencers, programme contacts, supporters and people with existing message history.',
      },
      {
        title: 'Personalised the activation',
        body: 'Messages reflected the person’s prior relationship with Red Dust rather than treating the audience as a cold list.',
      },
      {
        title: 'Connected the message to a moment',
        body: 'Double the Impact Day gave the audience one clear reason to act immediately.',
      },
      {
        title: 'Tracked the result',
        body: 'Donor names, emails and phone numbers inside the fundraising system allowed responses to be matched back to the activation work.',
      },
    ],
    results: [
      'Approximately A$175k raised against a A$40k target.',
      'More than 4.4× the stated target.',
      '500+ personalised Instagram messages sent during the activation.',
    ],
    programmeProof: {
      title: 'Broader programme proof',
      items: [
        'Short video clips passed 500k Facebook views.',
        'Facebook video monetisation reached roughly A$300 per week at peak.',
        'YouTube videos reached 100k–200k views and generated platform revenue.',
        'SEO helped grow live-event viewers from roughly 100 to 3,000.',
      ],
      note: 'These are supporting programme outcomes, not all direct results of the Double the Impact activation.',
    },
    whyItWorkedTitle: 'The campaign did not wait for strangers to discover the cause.',
    whyItWorked: [
      'It began with people who already had context, gave them a personal reason to care and connected that trust to a specific action.',
      'That is the foundation of revenue-driven personal branding: activate the nearest market, measure the response and use the evidence to sharpen the next message.',
    ],
    proofGallery: [
      {
        kind: 'placeholder',
        title: 'Campaign total',
        caption: 'Replace with the cleared Red Dust campaign-page screenshot showing the final total.',
      },
      {
        kind: 'placeholder',
        title: 'Donation record',
        caption: 'Replace with a redacted donation-total crop. Do not publish private donor data.',
      },
      {
        kind: 'placeholder',
        title: 'Direct messages',
        caption: 'Replace with a redacted Instagram outreach screenshot once permission is confirmed.',
      },
    ],
    claimStatus: 'approved-working',
    servicesUsed: ['Warm Market Map', 'Revenue-Driven Brand Activation', 'Campaign Creative', 'CRM attribution'],
    ctaTitle: 'Before you buy more reach, activate the trust you already have.',
    ctaLabel: 'Build My Activation Plan',
    seo: {
      title: 'A$40k Target to Approximately A$175k Raised | NARA Studio',
      description:
        'Selected prior work led by Thai: a A$40k Red Dust fundraising target became approximately A$175k raised through warm-market activation.',
    },
  },
  {
    slug: 'sean-bell',
    eyebrow: 'Selected prior work · Mission-led personal brand',
    title: 'A mission people could understand, follow and act on.',
    cardTitle: 'Sean Bell — A mission people could act on',
    summary:
      'Sean Bell’s Run Around Australia project shows what happens when a personal story, visible sacrifice and direct community activation point in the same direction.',
    cardSummary:
      'Story, consistency and direct community activation turned endurance into a public movement.',
    proofLine: 'Daily direct outreach · mission-led storytelling · community activation',
    attribution: 'Selected prior work led or supported by Thai.',
    metricStrip: [],
    constraintTitle: 'The constraint',
    constraint: [
      'An endurance mission can generate attention without creating sustained action. The public needs a simple story, visible progress and a clear role to play.',
    ],
    mechanismTitle: 'Repeat the mission. Show the work. Activate the community.',
    mechanism: [
      'The brand centred on one memorable association: Sean Bell runs for a cause and keeps moving when the task is difficult.',
      'Thai supported the direct activation layer through Sean’s personal Instagram, using the existing relationship graph to start daily conversations rather than relying only on public reach.',
    ],
    whyItWorkedTitle: 'Why the brand worked',
    whyItWorked: [
      'one clear mission;',
      'visible sacrifice and progress;',
      'repeated story and visual cues;',
      'community participation;',
      'direct messages from the person at the centre of the mission; and',
      'a cause people could support and share.',
    ],
    results: [],
    naraLesson:
      'A founder brand becomes memorable when the market can repeat the story in one sentence and knows what action to take next.',
    proofGallery: [
      {
        kind: 'placeholder',
        title: 'Movement proof',
        caption: 'Replace with an approved Sean Bell movement or event image once usage rights are confirmed.',
      },
    ],
    claimStatus: 'mechanism-led',
    servicesUsed: ['Revenue-Driven Brand Activation', 'Thought Leader Content', 'Campaign Creative'],
    ctaTitle: 'Give the people closest to your work a reason to act.',
    ctaLabel: 'Build My Activation Plan',
    seo: {
      title: 'Sean Bell — A Mission People Could Act On | NARA Studio',
      description:
        'Selected prior work supported by Thai: a clear public mission, repeated story and direct community activation.',
    },
  },
  {
    slug: 'shiv-nair',
    eyebrow: 'Selected prior work · Local expert brand',
    title: 'Build trust before the listing conversation starts.',
    cardTitle: 'Shiv Nair — Local authority before the listing',
    summary:
      'In a crowded property market, buyers and sellers need to recognise the person, understand the expertise and see proof before they make contact.',
    cardSummary:
      'Repeated expertise and recognisable proof built trust before the property conversation.',
    proofLine: 'Local category authority · proof-led content',
    attribution: 'Selected prior work led or supported by Thai.',
    metricStrip: [],
    constraintTitle: 'The constraint',
    constraint: ['Most real-estate marketing makes the property visible but leaves the agent interchangeable.'],
    mechanismTitle: 'Make the expert the repeated source of local confidence.',
    mechanism: [
      'Shiv Nair’s brand used consistent market education, face-to-camera presence, sales proof, local commentary and recognisable content to build one association: trusted local real-estate expertise.',
    ],
    whyItWorkedTitle: 'What made it commercially useful',
    whyItWorked: [
      'the person stayed visible alongside the listings;',
      'repeated market commentary made expertise easier to judge;',
      'sales proof reduced perceived risk;',
      'local relevance kept the content useful; and',
      'consistency built recognition before an appraisal or listing decision.',
    ],
    results: [],
    naraLesson:
      'A personal brand should shorten the distance between “I have seen this person” and “I trust this person with the decision.”',
    proofGallery: [
      {
        kind: 'placeholder',
        title: 'Market presence',
        caption: 'Replace with an approved face-to-camera or market-content image once usage rights are confirmed.',
      },
    ],
    claimStatus: 'mechanism-led',
    servicesUsed: ['Thought Leader Content', 'Revenue-Driven Brand Activation'],
    ctaTitle: 'Make the next commercial conversation easier to start.',
    ctaLabel: 'Build My Activation Plan',
    seo: {
      title: 'Shiv Nair — Local Authority Before the Listing | NARA Studio',
      description:
        'Selected prior work supported by Thai: repeated expertise and recognisable proof built local trust before the listing conversation.',
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

export function publicMetrics(study: CaseStudy): CaseMetric[] {
  return study.metricStrip.filter((metric) => metric.visibility === 'public');
}
