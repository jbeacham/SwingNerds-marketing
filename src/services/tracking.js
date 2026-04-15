// Lightweight tracking helper for marketing-side API calls.
// Mirrors the swingnerds-web trackAppDownload() signature so marketing pages
// that call it don't need edits.

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.swingnerds.com';

export async function trackAppDownload() {
  try {
    await fetch(`${API_BASE_URL}/api/tracking/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    // Never block a download on a tracking failure.
  }
}
