export const site = {
  name: 'NARA Studio',
  shortName: 'NARA',
  founder: 'Thai Biazzini',
  category: 'Revenue-Driven Personal Branding',
  mechanism: 'The Warm Market Activation Method',
  primaryCta: 'Get My Brand Equity Valuation',
  primaryCtaHref: '/apply',
  valuationNote:
    'A Brand Equity Valuation maps the unused commercial value sitting in your warm market — customers, CRM, followers, referrals and Top 100 — then names the fastest route from existing trust to revenue.',
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
  return (import.meta.env.PUBLIC_SITE_URL || 'https://beniskillen.github.io/nara-studio').replace(
    /\/$/,
    '',
  );
}

export function withBase(path = '/'): string {
  const raw = import.meta.env.BASE_URL || '/';
  const base = raw.endsWith('/') ? raw : `${raw}/`;
  if (path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) return path;
  if (!path || path === '/') return base;

  const [pathname, search] = path.split('?');
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  const url = `${base}${cleanPath}`;
  return search ? `${url}?${search}` : url;
}

export function absoluteUrl(path = '/'): string {
  if (path.startsWith('http')) return path;
  const origin = new URL(siteUrl()).origin;
  const prefixed = withBase(path);
  if (prefixed.startsWith('http')) return prefixed;
  return `${origin}${prefixed.startsWith('/') ? prefixed : `/${prefixed}`}`;
}
