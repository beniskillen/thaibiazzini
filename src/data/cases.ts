export type ClaimVisibility = 'public' | 'internal';

export interface CaseMetric {
  value: string;
  label: string;
  claimId?: string;
  visibility: ClaimVisibility;
}

export interface ProofImage {
  kind: 'image';
  src: string;
  alt: string;
  title: string;
  caption: string;
  credit?: string;
}

export interface ProofPlaceholder {
  kind: 'placeholder';
  title: string;
  caption: string;
}

export type ProofAsset = ProofImage | ProofPlaceholder;

export interface CaseStudy {
  slug: 'red-dust' | 'sean-bell' | 'shiv-nair';
  eyebrow: string;
  title: string;
  cardTitle: string;
  summary: string;
  cardSummary: string;
  proofLine: string;
  coverImage: ProofImage;
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
    coverImage: {
      kind: 'image',
      src: '/images/work/red-dust-community.jpg',
      alt: 'Red Dust Role Models community program photograph from the organisation’s public site.',
      title: 'Community presence',
      caption: 'Public Red Dust photography used to show the organisation’s existing trust base.',
      credit: 'Red Dust Role Models',
    },
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
        kind: 'image',
        src: '/images/work/red-dust-community.jpg',
        alt: 'Red Dust Role Models community photograph published on reddust.org.au.',
        title: 'Existing community trust',
        caption: 'The campaign started with people already close to the mission, not a cold audience.',
        credit: 'Red Dust Role Models',
      },
      {
        kind: 'image',
        src: '/images/work/red-dust-fundraising.png',
        alt: 'Red Dust community fundraising graphic from the official website.',
        title: 'A public reason to give',
        caption: 'Fundraising was already a recognised part of the organisation’s public presence.',
        credit: 'Red Dust Role Models',
      },
      {
        kind: 'image',
        src: '/images/work/red-dust-map.png',
        alt: 'Red Dust 2023 community map showing where programs run across Australia.',
        title: 'A known footprint',
        caption: 'The activation used an organisation with an established geographic and community presence.',
        credit: 'Red Dust Role Models',
      },
      {
        kind: 'image',
        src: '/images/work/red-dust-donate.jpg',
        alt: 'Red Dust donate call-to-action image from the official website.',
        title: 'A clear next action',
        caption: 'The public site already asked supporters to act. The campaign made that action immediate.',
        credit: 'Red Dust Role Models',
      },
      {
        kind: 'placeholder',
        title: 'Campaign total screenshot',
        caption: 'Space reserved for the cleared Red Dust campaign-page screenshot showing the final total.',
      },
      {
        kind: 'placeholder',
        title: 'Donation record',
        caption: 'Space reserved for a redacted donation-total crop. Do not publish private donor data.',
      },
      {
        kind: 'placeholder',
        title: 'Direct messages',
        caption: 'Space reserved for a redacted Instagram outreach screenshot once permission is confirmed.',
      },
    ],
    claimStatus: 'approved-working',
    servicesUsed: ['Warm Market Map', 'Revenue-Driven Brand Activation', 'Campaign Creative', 'CRM attribution'],
    ctaTitle: 'Before you buy more reach, activate the trust you already have.',
    ctaLabel: 'Get My Brand Equity Valuation',
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
    coverImage: {
      kind: 'image',
      src: '/images/work/sean-bell-portrait.jpg',
      alt: 'Sean Bell photographed during his Run Around Australia mission, published by Make-A-Wish Australia.',
      title: 'A face the market could follow',
      caption: 'The public could recognise the person at the centre of the mission.',
      credit: 'Make-A-Wish Australia',
    },
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
        kind: 'image',
        src: '/images/work/sean-bell-portrait.jpg',
        alt: 'Sean Bell in endurance kit during the Run Around Australia project.',
        title: 'The person at the centre',
        caption: 'The brand repeated one recognisable face and one mission.',
        credit: 'Make-A-Wish Australia',
      },
      {
        kind: 'image',
        src: '/images/work/sean-bell-run.jpg',
        alt: 'Sean Bell running on the road during the public endurance mission.',
        title: 'Visible sacrifice',
        caption: 'Progress was public. The market could see the work as it happened.',
        credit: 'Make-A-Wish Australia',
      },
      {
        kind: 'image',
        src: '/images/work/sean-bell-mcg.jpg',
        alt: 'Sean Bell after closing the Run Around Australia loop, published by Make-A-Wish Australia.',
        title: 'A finish the public could share',
        caption: 'The close of the loop gave the community a moment to gather around.',
        credit: 'Make-A-Wish Australia',
      },
      {
        kind: 'image',
        src: '/images/work/sean-bell-ig-1.jpg',
        alt: 'Public Instagram still from @seanbellruns showing Sean Bell’s ongoing mission presence.',
        title: 'Daily presence',
        caption: 'The Instagram graph was used as a relationship surface, not just a broadcast channel.',
        credit: '@seanbellruns',
      },
      {
        kind: 'image',
        src: '/images/work/sean-bell-ig-3.jpg',
        alt: 'Public Instagram still from @seanbellruns showing endurance-brand storytelling.',
        title: 'Repeatable visual cues',
        caption: 'The same person, the same mission, shown often enough to become memorable.',
        credit: '@seanbellruns',
      },
      {
        kind: 'placeholder',
        title: 'Direct activation crop',
        caption: 'Space reserved for a cleared, redacted example of the daily Instagram outreach layer.',
      },
    ],
    claimStatus: 'mechanism-led',
    servicesUsed: ['Revenue-Driven Brand Activation', 'Thought Leader Content', 'Campaign Creative'],
    ctaTitle: 'Give the people closest to your work a reason to act.',
    ctaLabel: 'Get My Brand Equity Valuation',
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
    coverImage: {
      kind: 'image',
      src: '/images/work/shiv-nair-portrait.jpg',
      alt: 'Official Ray White portrait of Shiv Nair, founding partner of Ray White TNG.',
      title: 'The expert stays visible',
      caption: 'The person is the repeated source of local confidence, not only the listing.',
      credit: 'Ray White United Group',
    },
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
        kind: 'image',
        src: '/images/work/shiv-nair-portrait.jpg',
        alt: 'Official Ray White United Group portrait of Shiv Nair.',
        title: 'A recognisable local expert',
        caption: 'Buyers and sellers can attach the category to a specific person.',
        credit: 'Ray White United Group',
      },
      {
        kind: 'image',
        src: '/images/work/shiv-nair-listing.jpg',
        alt: 'Public listing photograph associated with Shiv Nair’s Ray White TNG market presence.',
        title: 'Proof beside the person',
        caption: 'Listings stay visible, but they sit next to a repeated expert brand.',
        credit: 'view.com.au listing photography',
      },
      {
        kind: 'image',
        src: '/images/work/shiv-nair-ig-1.jpg',
        alt: 'Public Instagram still from @shivnairrealestate showing Shiv Nair’s market presence.',
        title: 'Face-to-camera presence',
        caption: 'Repeated personal visibility makes the agent harder to interchange.',
        credit: '@shivnairrealestate',
      },
      {
        kind: 'image',
        src: '/images/work/shiv-nair-ig-2.jpg',
        alt: 'Public Instagram still from @shivnairrealestate showing proof-led local content.',
        title: 'Local proof in public',
        caption: 'Market commentary and visible results reduce perceived risk before contact.',
        credit: '@shivnairrealestate',
      },
      {
        kind: 'image',
        src: '/images/work/shiv-nair-ig-3.jpg',
        alt: 'Public Instagram still from @shivnairrealestate showing Ray White TNG brand activity.',
        title: 'Consistent category association',
        caption: 'The same person, market and proof appear often enough to build recognition.',
        credit: '@shivnairrealestate',
      },
      {
        kind: 'placeholder',
        title: 'Market-content still',
        caption: 'Space reserved for an additional cleared face-to-camera or sold-board example.',
      },
    ],
    claimStatus: 'mechanism-led',
    servicesUsed: ['Thought Leader Content', 'Revenue-Driven Brand Activation'],
    ctaTitle: 'Make the next commercial conversation easier to start.',
    ctaLabel: 'Get My Brand Equity Valuation',
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
