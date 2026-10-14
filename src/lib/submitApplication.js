import { validateApplication } from "./application";

export async function submitApplication(payload) {
  const errors = validateApplication(payload);
  if (Object.keys(errors).length > 0) {
    throw new Error("Application is incomplete.");
  }

  const endpoint = import.meta.env.VITE_APPLY_ENDPOINT || import.meta.env.PUBLIC_APPLY_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "nara-studio-apply",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("The application could not be sent. Please try again.");
    }

    return { ok: true, mode: "endpoint" };
  }

  // Local fallback: safely cache in localStorage if available
  try {
    const existing = JSON.parse(localStorage.getItem("nara_applications") || "[]");
    existing.push({
      ...payload,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("nara_applications", JSON.stringify(existing));
  } catch (err) {
    console.warn("Could not save to localStorage:", err);
  }

  return { ok: true, mode: "local" };
}
