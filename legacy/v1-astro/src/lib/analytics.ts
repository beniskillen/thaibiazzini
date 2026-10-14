export type AnalyticsEvent =
  | 'primary_cta_click'
  | 'secondary_cta_click'
  | 'method_cta_click'
  | 'case_study_open'
  | 'application_start'
  | 'application_submit'
  | 'booking_click'
  | 'outbound_social_click';

export function track(event: AnalyticsEvent, properties: Record<string, string> = {}): void {
  const payload = { event, ...properties };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent('nara:analytics', { detail: payload }));
}

export function bindAnalytics(): void {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const node = target.closest<HTMLElement>('[data-track]');
    if (!node) return;
    const name = node.dataset.track as AnalyticsEvent | undefined;
    if (!name) return;
    const properties: Record<string, string> = {};
    if (node.dataset.trackMeta) properties.meta = node.dataset.trackMeta;
    if (node.getAttribute('href')) properties.href = node.getAttribute('href') || '';
    track(name, properties);
  });
}
