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
    title: "An A$40k target became about A$175k raised.",
    short: "Creative direction for the public ask, social management of the mission, and more than 500 personal notes on Double the Impact Day.",
    proof: "4.4× the stated target · 500+ personalised messages",
    lead: "Thai led the creative direction, the social presence, and the outreach. People already close to Red Dust were asked, in their own context, to give on a day when a donation would be doubled. The organisation recorded about A$175k against a stated A$40k target, more than 4.4 times that target.",
    stat: "A$175k", statLabel: "approximate total", image: asset("/images/work/red-dust-community.jpg"),
    stats: [
      { v: "A$175k", l: "approximate funds raised" },
      { v: "A$40k", l: "stated campaign target" },
      { v: "500+", l: "personalised Instagram messages" },
      { v: ">4.4×", l: "the stated target" },
    ],
    constraint: "Red Dust had a public mission, existing supporters, and years of trust. Earlier marketing leaned on campaign content, ads, and broad awareness. The closer opportunity was the people who already followed, donated, partnered, or had a message history with the cause.",
    mechanismTitle: "One look, a familiar presence, then a personal note.",
    mechanism: [
      "Creative direction set the public look: community photographs, a map of where the programmes run, and a donate prompt people could recognise. Social management kept that mission in view between campaigns, so the organisation was familiar before the ask.",
      "The result came from the outreach. On Double the Impact Day, Thai worked through more than 500 Instagram relationships. She read the earlier context and wrote to that person. The note said a donation would be doubled that day. Names in the fundraising system let the organisation match gifts back to the work.",
      "That is the promise. Evaluate the equity already sitting with people who know the brand. Activate it. Iterate on the note that gets a reply. Hold the creative vision so the campaign still looks like Red Dust, while the money comes in.",
    ],
    work: [
      ["Creative direction", "The public assets gave the day a look people already knew: the community, the map, and a clear ask."],
      ["Social management", "The accounts kept the mission familiar, so the note did not arrive from a stranger."],
      ["The outreach", "More than 500 notes, each tied to that person's earlier contact with Red Dust, on the day a gift was doubled."],
      ["The record", "Donor details in the fundraising system matched responses back to the activation. About A$175k against a A$40k target."],
    ],
    results: [
      "About A$175k raised against a A$40k stated target.",
      "More than 4.4 times that target.",
      "500+ personalised Instagram messages during the activation.",
    ],
    programmeProof: {
      note: "These are supporting programme outcomes from Thai's Red Dust role. They are not all direct results of Double the Impact Day.",
      items: [
        "Short video clips passed 500k Facebook views.",
        "Facebook video monetisation reached roughly A$300 per week at peak.",
        "YouTube videos reached 100k to 200k views and generated platform revenue.",
        "SEO helped grow live-event viewers from roughly 100 to 3,000.",
      ],
    },
    why: "The look made the organisation recognisable. The social presence kept it familiar. The messages gave people who already knew the work one reason to give that day. Personal branding that works is that intersection: it looks right, and it brings the result in.",
    gallery: [
      { src: asset("/images/work/red-dust-community.jpg"), t: "The community already in view", c: "Red Dust Role Models", caption: "Creative direction started from a public the organisation already had." },
      { src: asset("/images/work/red-dust-fundraising.png"), t: "A public reason to give", c: "Red Dust Role Models", caption: "Fundraising was already part of the public presence. The day made it immediate." },
      { src: asset("/images/work/red-dust-map.png"), t: "A known footprint", c: "Red Dust Role Models", caption: "The programmes had a place. The outreach spoke to people who already knew that place." },
      { src: asset("/images/work/red-dust-donate.jpg"), t: "A clear next action", c: "Red Dust Role Models", caption: "The site already asked supporters to act. The messages pointed at that action on one day." },
    ],
    services: "Creative direction, social management, and direct outreach. Prior work in Thai's Red Dust role. This is not a NARA Studio client engagement.",
    closing: "Start with the people|who already know the work.",
  },
  {
    slug: "sean-bell", client: "Sean Bell", tag: "A public mission",
    attribution: "Selected prior work supported by Thai.",
    title: "A mission people could follow and act on.",
    short: "Creative direction around one run, social posts that repeated the same person and mission, and messages from his Instagram to people who already knew him.",
    proof: "One public mission · direct outreach · a story people could repeat",
    lead: "The run gave Sean Bell a story people could see. Thai supported the layer around it: the look of the mission, the social presence that repeated it, and notes from his Instagram to people already connected to him.",
    stat: "Run", statLabel: "around Australia", image: asset("/images/work/sean-bell-portrait.jpg"),
    stats: [
      { v: "1", l: "public mission" },
      { v: "Direct", l: "messages from his Instagram" },
      { v: "Run", l: "around Australia" },
      { v: "Public", l: "progress people could see" },
    ],
    constraint: "A long run can draw attention and still leave people unsure what it is for, or what they can do. The public needs one story, visible progress, and a way to take part.",
    mechanismTitle: "Repeat the mission. Show the work. Give people a way to reply.",
    mechanism: [
      "Creative direction held one picture: Sean Bell running around Australia for a cause and keeping going. Social management posted that same face and mission often enough to be recognised, including the public finish and the posts that carried the story between miles.",
      "Thai supported the outreach from his Instagram to people already in his circle. The public story gave them something to recognise. The message gave them a way to reply.",
      "The promise is the same shape. Evaluate the story the brand already owns. Activate the people closest to it. Iterate on what they answer. Hold the creative vision so the work still looks like him, and still asks for something.",
    ],
    work: [
      ["Creative direction", "One mission, one face, and a line a person could repeat: he runs for a cause and keeps going."],
      ["Social management", "The same cues, posted often enough that the run stayed recognisable in public."],
      ["The outreach", "Notes from his Instagram to people already connected to him, so the story had a reply."],
      ["A way to act", "Someone could explain the mission in one sentence and know there was a next step."],
    ],
    why: "People could see who was running, what it was for, and that they could answer. A brand works when the market can repeat the story and knows what to do next. That is personal branding that looks right and brings the work in.",
    gallery: [
      { src: asset("/images/work/sean-bell-portrait.jpg"), t: "The person at the centre", c: "Make-A-Wish Australia", caption: "Creative direction kept one recognisable face on the mission." },
      { src: asset("/images/work/sean-bell-run.jpg"), t: "The work, in public", c: "Make-A-Wish Australia", caption: "Progress was visible. People could see the run as it happened." },
      { src: asset("/images/work/sean-bell-mcg.jpg"), t: "A finish people could share", c: "Make-A-Wish Australia", caption: "Closing the loop gave the community a moment to gather around." },
      { src: asset("/images/work/sean-bell-ig-3.jpg"), t: "The same person, still posting", c: "@seanbellruns", caption: "Social management kept him in frame between the miles, in his own voice." },
      { src: asset("/images/work/sean-bell-ig-1.jpg"), t: "A designed next step", c: "@seanbellruns", caption: "Creative direction turned the person into a clear offer: ways to work with him." },
    ],
    services: "Creative direction, social management, and direct messages. Selected prior work supported by Thai. This is not a NARA Studio client engagement.",
    closing: "Give the people closest|to the work a way to reply.",
  },
  {
    slug: "shiv-nair", client: "Shiv Nair", tag: "A local agent",
    attribution: "Selected prior work supported by Thai.",
    title: "Trust, before the listing conversation.",
    short: "Creative direction that kept Shiv Nair in frame, social posts on a repeated format, and proof sitting next to the person.",
    proof: "Face to camera · sales in view · the same local format",
    lead: "In a crowded property market, buyers and sellers need to recognise the person before they make contact. Thai's work put Shiv Nair in the frame with the sales and the local notes, and kept that format going.",
    stat: "On camera", statLabel: "with the sales", image: asset("/images/work/shiv-nair-portrait.jpg"),
    stats: [
      { v: "Face", l: "to camera" },
      { v: "Sales", l: "shown next to him" },
      { v: "Local", l: "market notes" },
      { v: "Often", l: "the same format" },
    ],
    constraint: "Most property marketing shows the listing. The agent is easy to swap for another name. Recognition has to happen before the appraisal conversation.",
    mechanismTitle: "The expert, the proof, and a format people can recognise.",
    mechanism: [
      "Creative direction put Shiv Nair in the same frame as the work: face to camera, sold boards, client notes, and a layout a viewer could recognise. Social management kept that format going, so the person and the local market stayed associated.",
      "The posts did the job of a first conversation. Someone could see who he was, what had sold, and how he talked about the market before they got in touch. That is outreach carried by the content, aimed at people already watching.",
      "The promise is a brand that looks right and shortens the distance to the work. Evaluate the proof already on hand. Activate it in public. Iterate the format that gets recognised. Hold the vision so the agent stays in the picture.",
    ],
    work: [
      ["Creative direction", "He appears in the same frame as the listings, the boards, and the local comment."],
      ["Social management", "One post shape, repeated often enough to be recognised as his."],
      ["Proof in public", "Completed sales and client notes sit beside him, so the expertise is visible."],
      ["The first conversation", "A viewer can judge the person before they ask about a property."],
    ],
    why: "His face, the sales, and the local comment sat in the same posts. That is how creative direction and social management produce a commercial result: the next conversation starts with someone who already knows who he is.",
    gallery: [
      { src: asset("/images/work/shiv-nair-portrait.jpg"), t: "A recognisable local expert", c: "Ray White United Group", caption: "The portrait keeps one person attached to the category." },
      { src: asset("/images/work/shiv-nair-listing.jpg"), t: "The property, next to the person", c: "view.com.au", caption: "Listings stay visible. They sit beside a repeated expert, not a blank agency name." },
      { src: asset("/images/work/shiv-nair-ig-1.jpg"), t: "The sale, with him in it", c: "@shivnairrealestate", caption: "Social posts put the sold board and the agent in the same frame." },
      { src: asset("/images/work/shiv-nair-ig-2.jpg"), t: "Local proof in public", c: "@shivnairrealestate", caption: "Market notes and visible results give someone something to judge before contact." },
      { src: asset("/images/work/shiv-nair-ig-3.jpg"), t: "A format people can recognise", c: "@shivnairrealestate", caption: "Creative direction repeats the board, the name, and the person often enough to stick." },
    ],
    services: "Creative direction and social management, with the person in frame. Selected prior work supported by Thai. This is not a NARA Studio client engagement.",
    closing: "Make the next conversation|easier to start.",
  },
];

export const FIT = [
  "The offer solves a problem people pay for",
  "You have proof to show",
  "You will be in the messages or on camera",
  "Someone answers replies quickly",
  "Sales can be traced to the source",
];
