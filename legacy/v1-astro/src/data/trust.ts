export interface TrustMark {
  name: string;
  src: string;
  alt: string;
  fit?: 'wordmark' | 'badge';
}

export const trustMarks: TrustMark[] = [
  {
    name: 'Goodfields Eatery',
    src: '/images/logos/goodfields.svg',
    alt: 'Goodfields Eatery',
  },
  {
    name: 'Table Manners',
    src: '/images/logos/table-manners.png',
    alt: 'Table Manners Bronte',
    fit: 'badge',
  },
  {
    name: 'Ray White',
    src: '/images/logos/ray-white.png',
    alt: 'Ray White',
  },
  {
    name: 'Sean Bell',
    src: '/images/logos/sean-bell.png',
    alt: 'Sean Bell',
  },
  {
    name: 'Fortem Media',
    src: '/images/logos/fortem-media.png',
    alt: 'Fortem Media',
    fit: 'badge',
  },
  {
    name: 'Red Dust Role Models',
    src: '/images/logos/red-dust.png',
    alt: 'Red Dust Role Models',
  },
  {
    name: 'Cali Press',
    src: '/images/logos/cali-press.png',
    alt: 'Cali Press',
    fit: 'badge',
  },
];
