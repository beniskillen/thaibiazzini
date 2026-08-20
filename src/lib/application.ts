export const applyStartOptions = [
  { value: 'map', label: 'Warm Market Map' },
  { value: 'activation', label: '90-Day Activation' },
  { value: 'content', label: 'Thought Leader Content' },
  { value: 'campaign', label: 'Campaign Creative' },
  { value: 'unsure', label: 'Not Sure' },
] as const;

export const audienceSources = [
  { value: 'customers', label: 'Customers' },
  { value: 'crm', label: 'CRM / database' },
  { value: 'email', label: 'Email list' },
  { value: 'social', label: 'Social followers' },
  { value: 'referrals', label: 'Referral partners' },
  { value: 'community', label: 'Community' },
  { value: 'dream', label: 'Top 100 target accounts' },
] as const;

export type ApplicationPayload = {
  name: string;
  company: string;
  email: string;
  profile: string;
  offer: string;
  audience: string[];
  marketSize: string;
  result90: string;
  proof: string;
  owner: string;
  blocker: string;
  startingPoint: string;
  consent: boolean;
};

export type FieldErrors = Partial<Record<keyof ApplicationPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateApplication(payload: ApplicationPayload): FieldErrors {
  const errors: FieldErrors = {};

  if (!payload.name.trim()) errors.name = 'Enter your name.';
  if (!payload.company.trim()) errors.company = 'Enter your company.';
  if (!payload.email.trim()) errors.email = 'Enter your email.';
  else if (!emailPattern.test(payload.email)) errors.email = 'Enter a valid email address.';
  if (!payload.profile.trim()) errors.profile = 'Add a website or primary social profile.';
  if (!payload.offer.trim()) errors.offer = 'Describe what you sell, to whom, and the typical value.';
  if (!payload.audience.length) errors.audience = 'Select at least one existing audience source.';
  if (!payload.marketSize.trim()) errors.marketSize = 'Estimate the size of your immediate market.';
  if (!payload.result90.trim()) errors.result90 = 'Describe the commercial result that matters in 90 days.';
  if (!payload.proof.trim()) errors.proof = 'Describe the proof NARA can use.';
  if (!payload.owner.trim()) errors.owner = 'Say who handles qualified replies and sales calls.';
  if (!payload.blocker.trim()) errors.blocker = 'Describe what has stopped this from working so far.';
  if (!payload.startingPoint) errors.startingPoint = 'Choose a preferred starting point.';
  if (!payload.consent) errors.consent = 'Consent is required before we can review your application.';

  return errors;
}

export function applicationToSafeEventProps(payload: ApplicationPayload): Record<string, string> {
  return {
    startingPoint: payload.startingPoint,
    audienceCount: String(payload.audience.length),
  };
}
