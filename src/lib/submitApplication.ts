import { validateApplication, type ApplicationPayload, type FieldErrors } from './application';

export interface SubmitResult {
  ok: boolean;
  mode: 'endpoint' | 'local';
}

/**
 * Set PUBLIC_APPLY_ENDPOINT to the CRM, form or booking provider when one exists.
 * Do not invent credentials. Until then, the UI still validates and shows a success state.
 */
export async function submitApplication(payload: ApplicationPayload): Promise<SubmitResult> {
  const errors: FieldErrors = validateApplication(payload);
  if (Object.keys(errors).length) {
    throw new Error('Application is incomplete.');
  }

  const endpoint = import.meta.env.PUBLIC_APPLY_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        source: 'nara-studio-apply',
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('The application could not be sent. Please try again.');
    }

    return { ok: true, mode: 'endpoint' };
  }

  return { ok: true, mode: 'local' };
}
