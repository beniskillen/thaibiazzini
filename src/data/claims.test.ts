import { describe, expect, it } from 'vitest';
import { claims, isPublicClaim, publicCopyFor } from '../data/claims';
import { caseStudies, publicMetrics } from '../data/cases';

describe('claims registry', () => {
  it('does not expose unverified claims as public copy', () => {
    const leaked = claims.filter((claim) => claim.status !== 'approved-working' && claim.publicCopy);
    expect(leaked).toEqual([]);
  });

  it('keeps the prior fundraising result off the public site until verified', () => {
    expect(publicCopyFor('red-dust-prior-result')).toBeUndefined();
    expect(publicCopyFor('shiv-award')).toBeUndefined();
    expect(publicCopyFor('red-dust-channel-mix')).toBeUndefined();
  });

  it('exposes only approved-working claims through the public helper', () => {
    expect(claims.filter(isPublicClaim).every((claim) => claim.status === 'approved-working')).toBe(true);
  });
});

describe('case studies', () => {
  it('omits unpublished metrics from the public metric strip', () => {
    for (const study of caseStudies) {
      expect(publicMetrics(study).every((metric) => metric.visibility === 'public')).toBe(true);
    }
  });

  it('does not put unverified Sean or Shiv numbers in public proof lines', () => {
    const sean = caseStudies.find((item) => item.slug === 'sean-bell');
    const shiv = caseStudies.find((item) => item.slug === 'shiv-nair');
    expect(sean?.proofLine).not.toMatch(/\$|k\+|VERIFY/i);
    expect(shiv?.proofLine).not.toMatch(/3×|VERIFY/i);
    expect(sean?.results).toEqual([]);
    expect(shiv?.results).toEqual([]);
  });
});
