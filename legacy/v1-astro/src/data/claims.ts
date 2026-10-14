export type ClaimStatus = 'approved-working' | 'unverified' | 'internal-only';

export interface Claim {
  id: string;
  subject: 'red-dust' | 'sean-bell' | 'shiv-nair' | 'programme' | 'attribution';
  publicCopy?: string;
  status: ClaimStatus;
  internalNote: string;
  source: string;
}

export const claims: Claim[] = [
  {
    id: 'red-dust-raised',
    subject: 'red-dust',
    publicCopy: 'Approximately A$175k raised',
    status: 'approved-working',
    internalNote: 'Meeting transcript gives A$170k–A$180k. Use approximately A$175k until campaign page or Kila export confirms the exact number.',
    source: 'NARA Studio Website v2 brief / meeting transcript',
  },
  {
    id: 'red-dust-target',
    subject: 'red-dust',
    publicCopy: 'A$40k stated campaign target',
    status: 'approved-working',
    internalNote: 'Meeting transcript supports A$40k. Confirm against campaign page before calling it final.',
    source: 'NARA Studio Website v2 brief / meeting transcript',
  },
  {
    id: 'red-dust-messages',
    subject: 'red-dust',
    publicCopy: '500+ personalised Instagram messages',
    status: 'approved-working',
    internalNote: 'Working campaign input. Redacted outreach screenshot still required.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'red-dust-multiple',
    subject: 'red-dust',
    publicCopy: 'More than 4.4 times the stated target',
    status: 'approved-working',
    internalNote: 'Derived from approximately A$175k / A$40k. Keep as more than 4.4× rather than an exact percentage of channel mix.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'red-dust-role',
    subject: 'attribution',
    publicCopy: 'Selected prior work led by Thai in her Red Dust role',
    status: 'approved-working',
    internalNote: 'Do not present this as a NARA Studio client engagement.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'red-dust-prior-result',
    subject: 'red-dust',
    status: 'unverified',
    internalNote:
      'User direction states prior fundraising was below A$50k. Do not publish until source proof is present. Do not use the 3× prior-result comparison until this is verified.',
    source: 'NARA Studio Website v2 brief claim notes',
  },
  {
    id: 'red-dust-channel-mix',
    subject: 'attribution',
    status: 'internal-only',
    internalNote:
      'In-role reporting attributed the majority of campaign uplift to direct Instagram activation, with AFL player calls and broadcast exposure contributing supporting shares. Keep exact percentages out of live copy until donor and campaign reports are checked.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'programme-facebook-views',
    subject: 'programme',
    publicCopy: 'Short video clips passed 500k Facebook views',
    status: 'approved-working',
    internalNote: 'Supporting programme outcome. Present separately from the Double the Impact fundraising result.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'programme-facebook-revenue',
    subject: 'programme',
    publicCopy: 'Facebook video monetisation reached roughly A$300 per week at peak',
    status: 'approved-working',
    internalNote: 'Supporting programme outcome. Do not imply it came from the fundraising day.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'programme-youtube-views',
    subject: 'programme',
    publicCopy: 'YouTube videos reached 100k–200k views and generated platform revenue',
    status: 'approved-working',
    internalNote: 'Supporting programme outcome. Present in a separate evidence band.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'programme-live-audience',
    subject: 'programme',
    publicCopy: 'SEO helped grow live-event viewers from roughly 100 to 3,000',
    status: 'approved-working',
    internalNote: 'Supporting programme outcome. Do not mix into the homepage fundraising proof strip.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'shiv-award',
    subject: 'shiv-nair',
    status: 'unverified',
    internalNote:
      'Working line was “3× Real Estate Agent of the Year”. Exact award title, awarding body and years are required before public use.',
    source: 'NARA Studio Website v2 brief',
  },
  {
    id: 'sean-metrics',
    subject: 'sean-bell',
    status: 'unverified',
    internalNote:
      'Audience before/after, fundraising total, named press/partners, Thai’s exact role and a campaign screenshot are still required. Use mechanism-led copy until sourced.',
    source: 'NARA Studio Website v2 brief',
  },
];

export function publicCopyFor(id: string): string | undefined {
  const claim = claims.find((item) => item.id === id);
  if (!claim || claim.status !== 'approved-working') return undefined;
  return claim.publicCopy;
}

export function isPublicClaim(claim: Claim): boolean {
  return claim.status === 'approved-working' && Boolean(claim.publicCopy);
}
