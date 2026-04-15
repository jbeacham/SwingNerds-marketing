// Minimal analytics shim for the marketing site. Pushes to Google Tag Manager's
// dataLayer (already injected by index.html). Mirrors the signatures used by
// marketing pages so they can be copied over without changes.

function push(event) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(event);
  }
}

export function trackPageView(pageName, pageTitle) {
  push({ event: 'page_view', page_name: pageName, page_title: pageTitle });
}

export function trackEvent(name, params = {}) {
  push({ event: name, ...params });
}
