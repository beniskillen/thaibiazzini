export const site = {
  name: 'NARA Studio',
  shortName: 'NARA',
  founder: 'Thai Biazzini',
  category: 'Revenue-Driven Personal Branding',
  mechanism: 'The Warm Market Activation Method',
  primaryCta: 'Map My Warm Market',
  primaryCtaHref: '/apply',
  description:
    'NARA Studio activates your warmest market, proves what creates conversations and revenue, then builds the founder brand around that evidence.',
  locale: 'en',
  year: new Date().getFullYear(),
} as const;

export const nav = [
  { href: '/method', label: 'Method' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
] as const;

export const footerNav = [
  ...nav,
  { href: '/apply', label: 'Apply' },
  { href: '/privacy', label: 'Privacy' },
] as const;

export function siteUrl(): string {
  return (import.meta.env.PUBLIC_SITE_URL || 'https://beniskillen.github.io/thaibiazzini').replace(
    /\/$/,
    '',
  );
}

export function absoluteUrl(path = '/'): string {
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl()}${normalised === '/' ? '/' : normalised}`;
}
