export interface Service {
  slug: string;
  number: string;
  title: string;
  forWho: string;
  actionLabel: string;
  items: string[];
  result: string;
  cta: string;
  startParam: string;
}

export const services: Service[] = [
  {
    slug: 'warm-market-map',
    number: '01',
    title: 'Warm Market Map',
    forWho: 'Founders with an underused database, network or follower base.',
    actionLabel: 'We build',
    items: [
      'immediate serviceable market;',
      'Top 100 Dream Prospect map;',
      'relationship and fit tiers;',
      'proof and message angles;',
      'activation order;',
      'KPI baseline.',
    ],
    result: 'A clear answer to who should hear from you first and why.',
    cta: 'Map My Market',
    startParam: 'map',
  },
  {
    slug: 'revenue-driven-brand-activation',
    number: '02',
    title: 'Revenue-Driven Brand Activation',
    forWho: 'Founders who need conversations and proof, not another static strategy deck.',
    actionLabel: 'We run',
    items: [
      'warm and selected direct activation;',
      'CRM and response tracking;',
      'founder positioning;',
      'weekly message and creative iteration;',
      'one commercial scoreboard;',
      'weekly work-in-progress review.',
    ],
    result: 'A measurable route from current relationships and market attention into pipeline.',
    cta: 'Discuss a 90-Day Activation',
    startParam: 'activation',
  },
  {
    slug: 'thought-leader-content',
    number: '03',
    title: 'Thought Leader Content',
    forWho: 'Founders with real expertise whose public presence is weaker than the work.',
    actionLabel: 'We create',
    items: [
      'one clear thesis;',
      'proof-led content pillars;',
      'founder interviews and idea capture;',
      'channel-ready content;',
      'campaign hooks and calls to action;',
      'monthly performance learning.',
    ],
    result: 'Content that prepares the market for a commercial conversation.',
    cta: 'Build My Content System',
    startParam: 'content',
  },
  {
    slug: 'campaign-creative',
    number: '04',
    title: 'Campaign Creative',
    forWho: 'Offers, launches and fundraising moments that need a clear reason to act now.',
    actionLabel: 'We direct',
    items: [
      'campaign message;',
      'flagship story;',
      'hero asset;',
      'landing-page direction;',
      'case-study and proof assets;',
      'cutdown and channel adaptation.',
    ],
    result: 'A focused campaign with one message, one proof argument and one next action.',
    cta: 'Scope a Campaign',
    startParam: 'campaign',
  },
  {
    slug: 'custom-growth-scope',
    number: '05',
    title: 'Custom Growth Scope',
    forWho:
      'When the constraint includes CRM, website, automation, offer design or a wider acquisition system, NARA scopes the work around the commercial bottleneck.',
    actionLabel: 'Every custom scope states',
    items: [
      'the objective;',
      'inputs;',
      'owners;',
      'hours;',
      'deliverables;',
      'exclusions;',
      'timeline;',
      'KPI.',
    ],
    result: 'A scope built around the next commercial bottleneck, not a generic package.',
    cta: 'Diagnose the Constraint',
    startParam: 'custom',
  },
];

export const homepageServices = [
  {
    title: 'Warm Market Map',
    body: 'A clear view of the people and accounts already closest to a decision.',
  },
  {
    title: 'Revenue-Driven Positioning',
    body: 'A founder message built around a real market problem, a clear point of view and proof that matters.',
  },
  {
    title: 'Activation System',
    body: 'Relevant outreach, relationship-building and database reactivation that turn passive attention into conversations.',
  },
  {
    title: 'Founder Content',
    body: 'Content shaped by live objections, stories and proof instead of generic topic calendars.',
  },
  {
    title: 'Commercial Scoreboard',
    body: 'Impressions → click-through rate → booked-conversation rate → close rate → revenue.',
  },
];
