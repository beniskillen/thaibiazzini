export function track(event, properties = {}) {
  const payload = { event, ...properties, timestamp: new Date().toISOString() };
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (window.posthog && typeof window.posthog.capture === "function") {
      window.posthog.capture(event, properties);
    }
    window.dispatchEvent(new CustomEvent("nara:analytics", { detail: payload }));
  }
}
