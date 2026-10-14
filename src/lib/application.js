export const applyStartOptions = [
  { value: "map", label: "Who to contact first (01)" },
  { value: "activation", label: "Ninety days of contact (02)" },
  { value: "content", label: "Content from the conversations (03)" },
  { value: "campaign", label: "One campaign (04)" },
  { value: "custom", label: "Something else in the way (05)" },
  { value: "unsure", label: "Not sure yet" },
];

export const audienceSources = [
  { value: "customers", label: "Existing & prior customers" },
  { value: "crm", label: "CRM / contact database" },
  { value: "email", label: "Newsletter / email subscribers" },
  { value: "linkedin", label: "LinkedIn network & followers" },
  { value: "instagram", label: "Instagram audience & engagers" },
  { value: "referrals", label: "Active referral partners" },
  { value: "dream100", label: "Top 100 dream prospect list" },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateApplication(payload) {
  const errors = {};

  if (!payload.name?.trim()) errors.name = "Please enter your name.";
  if (!payload.company?.trim()) errors.company = "Please enter your company or brand name.";
  if (!payload.email?.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(payload.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!payload.profile?.trim()) errors.profile = "Add your website or primary social profile URL.";
  if (!payload.offer?.trim()) errors.offer = "Describe what you sell, to whom, and at what typical price point.";
  if (!payload.audience || !payload.audience.length) errors.audience = "Select at least one audience source you currently have.";
  if (!payload.marketSize?.trim()) errors.marketSize = "Estimate roughly how many people/accounts are in your immediate market.";
  if (!payload.result90?.trim()) errors.result90 = "Describe the commercial outcome that matters most in the next 90 days.";
  if (!payload.proof?.trim()) errors.proof = "What proof can NARA Studio use (results, testimonials, case studies)?";
  if (!payload.owner?.trim()) errors.owner = "Who handles qualified replies and sales conversations?";
  if (!payload.blocker?.trim()) errors.blocker = "What has stopped this from working so far?";
  if (!payload.startingPoint) errors.startingPoint = "Please choose a preferred starting service.";
  if (!payload.consent) errors.consent = "You must agree to the privacy policy before submitting.";

  return errors;
}

export function applicationToSafeEventProps(payload) {
  return {
    startingPoint: payload.startingPoint,
    audienceCount: String(payload.audience?.length || 0),
  };
}
