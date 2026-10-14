import { asset } from "./asset";

export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/thai-nara/brand-equity-valuation";

export const NAV = [
  { name: "Method", path: "/method", testId: "nav-link-method" },
  { name: "Services", path: "/services", testId: "nav-link-services" },
  { name: "Work", path: "/work", testId: "nav-link-work" },
  { name: "About", path: "/about", testId: "nav-link-about" },
];

export const LOGOS = [
  { name: "Goodfields", src: asset("/images/logos/goodfields.svg") },
  { name: "Table Manners", src: asset("/images/logos/table-manners.png") },
  { name: "Ray White", src: asset("/images/logos/ray-white.png") },
  { name: "Sean Bell", src: asset("/images/logos/sean-bell.png") },
  { name: "Fortem Media", src: asset("/images/logos/fortem-media.png") },
  { name: "Red Dust", src: asset("/images/logos/red-dust.png") },
  { name: "Cali Press", src: asset("/images/logos/cali-press.png") },
];

export const FUNNEL = [
  { level: "01", title: "People you know", detail: "Customers, followers, referrals, past buyers", width: 100 },
  { level: "02", title: "Replies", detail: "A message, a call, or an introduction", width: 78 },
  { level: "03", title: "People ready to buy", detail: "Fit, timing, and a reason to talk", width: 56 },
  { level: "04", title: "Money", detail: "Calls, sales, donations", width: 36 },
];

export const METHOD_STEPS = [
  {
    step: "01", tag: "Evaluate", name: "Evaluate the equity in the brand",
    desc: "Look at the assets the brand already owns, and the potential sitting in them.",
    output: "A clear read of what the brand can put to work.",
  },
  {
    step: "02", tag: "Activate", name: "Activate those assets",
    desc: "Put that equity to work with a proven method, aimed at the people closest to the business.",
    output: "The assets in market, with a reason to respond.",
  },
  {
    step: "03", tag: "Iterate", name: "Iterate on what responds",
    desc: "Keep what leads to a reply, a call, or a sale. Change what does not.",
    output: "A tighter version of what is already working.",
  },
  {
    step: "04", tag: "Vision", name: "Hold the creative vision",
    desc: "Scale revenue in line with the creative vision, so the brand looks right and brings in work.",
    output: "Growth that still looks like the brand you want.",
  },
];

export const BUILDS = [
  { n: "01", title: "The list", desc: "Who to contact first." },
  { n: "02", title: "The message", desc: "What to say, taken from replies you have already had." },
  { n: "03", title: "The outreach", desc: "A way to reach those people again." },
  { n: "04", title: "The content", desc: "Posts and stories taken from those conversations." },
  { n: "05", title: "The record", desc: "Replies, calls, and sales, next to the message that led to them." },
];

export const SERVICES = [
  {
    n: "01", slug: "map", title: "Who to contact first",
    for: "You have customers, followers, or a list, and no order to contact them in.",
    verb: "You get", items: ["People already close to a purchase", "A shorter list of accounts you want", "Who you already know", "What to say to each group", "The order to contact them", "A starting count"],
    result: "Who hears from you first, and why.", cta: "Start with the list",
  },
  {
    n: "02", slug: "activation", title: "Ninety days of contact",
    for: "You want conversations, and a record of what they lead to.",
    verb: "We run", items: ["Messages to people you already know", "A place to log replies", "The line you lead with", "A weekly change to that line", "One view of calls and sales", "A weekly review"],
    result: "A path from people you know to calls and sales.", cta: "Talk about 90 days",
  },
  {
    n: "03", slug: "content", title: "Content from the conversations",
    for: "You know the subject, and the public posts do not show it.",
    verb: "We make", items: ["One point of view", "Stories from real replies", "Interviews with you", "Posts ready to publish", "A line that asks for the next step", "A monthly look at what got a response"],
    result: "Posts that match what people already answer.", cta: "Plan the content",
  },
  {
    n: "04", slug: "campaign", title: "One campaign",
    for: "A launch, an offer, or a fundraiser that needs one reason to act.",
    verb: "We direct", items: ["One message", "One main story", "One lead asset", "Direction for the page", "Proof you can show", "Cuts for each channel"],
    result: "One message, one piece of proof, and one next step.", cta: "Plan a campaign",
  },
  {
    n: "05", slug: "custom", title: "Something else in the way",
    for: "The block is the CRM, the site, the offer, or how you follow up.",
    verb: "The scope names", items: ["The goal", "Who does what", "Hours and what gets delivered", "What is left out", "The dates", "What we will count"],
    result: "A scope for the next block, written for this business.", cta: "Find the block",
  },
];

export const CASES = [
  {
    slug: "red-dust", client: "Red Dust", tag: "Fundraising",
    attribution: "Selected prior work led by Thai in her Red Dust role.",
    title: "About A$175k raised against a A$40k target.",
    short: "More than 500 personal Instagram messages on Double the Impact Day. The campaign total is approximate.",
    stat: "A$175k", statLabel: "approximate total", image: asset("/images/work/red-dust-community.jpg"),
    stats: [
      { v: "A$175k", l: "approximate funds raised" },
      { v: "A$40k", l: "stated campaign target" },
      { v: "500+", l: "personalised Instagram messages" },
      { v: ">4.4×", l: "the stated target" },
    ],
    constraint: "Red Dust already had supporters and a public mission. Earlier marketing leaned on content, ads, and broad awareness. The people closest to the organisation were followers, past donors, partners, and anyone with an existing message history.",
    mechanismTitle: "Personal notes on the day gifts were doubled.",
    mechanism: "On Double the Impact Day, Thai sent more than 500 Instagram messages to people who already had a relationship with Red Dust. She read the earlier context and wrote to that person. The note said a donation would be doubled that day. The organisation recorded about A$175k against a stated A$40k target, more than 4.4 times that target.",
    work: [
      ["The list", "Followers, earlier donors, programme contacts, and people with an existing message history."],
      ["The messages", "Each note referred to that person's earlier contact with Red Dust."],
      ["The day", "Double the Impact Day, when a donation was doubled."],
      ["The record", "The approximate total sat in the organisation's fundraising system."],
    ],
    why: "The notes went to people who already knew Red Dust, on a day with one reason to give.",
    gallery: [
      { src: asset("/images/work/red-dust-community.jpg"), t: "Community photograph", c: "Red Dust Role Models" },
      { src: asset("/images/work/red-dust-fundraising.png"), t: "A public ask for gifts", c: "Red Dust Role Models" },
      { src: asset("/images/work/red-dust-map.png"), t: "Where the programmes run", c: "Red Dust Role Models" },
      { src: asset("/images/work/red-dust-donate.jpg"), t: "The donate prompt", c: "Red Dust Role Models" },
    ],
    services: "List, direct messages, one campaign reason. Prior work in Thai's Red Dust role.",
    closing: "Start with people who already know the work.",
  },
  {
    slug: "sean-bell", client: "Sean Bell", tag: "A public mission",
    attribution: "Selected prior work supported by Thai.",
    title: "One mission people could follow.",
    short: "A repeated public story, and messages from his Instagram to people who already knew him.",
    stat: "Run", statLabel: "around Australia", image: asset("/images/work/sean-bell-portrait.jpg"),
    stats: [
      { v: "1", l: "public mission" },
      { v: "Direct", l: "messages from his Instagram" },
      { v: "Run", l: "around Australia" },
      { v: "Public", l: "progress people could see" },
    ],
    constraint: "A long run can draw attention and still leave people unsure what it is for, or what they can do.",
    mechanismTitle: "The same mission, said often, with a way to reply.",
    mechanism: "The public story was Sean Bell running around Australia for a cause and keeping going. Thai supported messages from his Instagram to people already connected to him.",
    work: [
      ["One mission", "A run around Australia for a cause, with the person visible."],
      ["The same cues", "The same face and the same mission, posted often enough to be recognised."],
      ["Messages", "Notes from his Instagram to people already in his circle."],
      ["A line to pass on", "Something a person could explain in one sentence."],
    ],
    why: "People could see who was running, what it was for, and that they could reply.",
    gallery: [
      { src: asset("/images/work/sean-bell-portrait.jpg"), t: "Sean Bell", c: "Make-A-Wish Australia" },
      { src: asset("/images/work/sean-bell-run.jpg"), t: "The run", c: "Make-A-Wish Australia" },
      { src: asset("/images/work/sean-bell-mcg.jpg"), t: "A public finish", c: "Make-A-Wish Australia" },
      { src: asset("/images/work/sean-bell-ig-3.jpg"), t: "The same visual cues", c: "@seanbellruns" },
    ],
    services: "Direct messages and a repeated story. Selected prior work.",
    closing: "Say the mission in one sentence, then give people a way to reply.",
  },
  {
    slug: "shiv-nair", client: "Shiv Nair", tag: "A local agent",
    attribution: "Selected prior work.",
    title: "The agent stayed in the picture.",
    short: "Posts with Shiv Nair on camera, next to sales and local market notes.",
    stat: "On camera", statLabel: "with the sales", image: asset("/images/work/shiv-nair-portrait.jpg"),
    stats: [
      { v: "Face", l: "to camera" },
      { v: "Sales", l: "shown next to him" },
      { v: "Local", l: "market notes" },
      { v: "Often", l: "the same format" },
    ],
    constraint: "Listing ads usually show the property. The agent is easy to swap for another name.",
    mechanismTitle: "Put the person next to the sales.",
    mechanism: "The posts kept Shiv Nair on camera, with sales, local comment, and a format a viewer could recognise.",
    work: [
      ["The person in frame", "He appears in the same frame as the listings."],
      ["Local notes", "Commentary on the market he works in."],
      ["Sales in view", "Completed sales shown beside him."],
      ["The same format", "A post shape repeated often enough to be recognised."],
    ],
    why: "His face, the sales, and the local comment sat in the same posts.",
    gallery: [
      { src: asset("/images/work/shiv-nair-portrait.jpg"), t: "Shiv Nair", c: "Ray White United Group" },
      { src: asset("/images/work/shiv-nair-listing.jpg"), t: "A listing beside the person", c: "view.com.au" },
      { src: asset("/images/work/shiv-nair-ig-1.jpg"), t: "On camera", c: "@shivnairrealestate" },
      { src: asset("/images/work/shiv-nair-ig-2.jpg"), t: "Local notes in public", c: "@shivnairrealestate" },
    ],
    services: "Founder content with the person in frame. Selected prior work.",
    closing: "Put the person next to the proof.",
  },
];

export const FIT = [
  "The offer solves a problem people pay for",
  "You have proof to show",
  "You will be in the messages or on camera",
  "Someone answers replies quickly",
  "Sales can be traced to the source",
];
