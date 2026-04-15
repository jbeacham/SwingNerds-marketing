// Single source of truth for the logged-in-app base URL.
// Marketing pages link to the app via goToApp() instead of router.push() since
// the app lives on a different origin (app.swingnerds.com) in production.

export const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.swingnerds.com';

/**
 * Hard-navigate to a path on the app subdomain.
 * Use for login, signup, dashboard links, etc.
 *
 * @param {string} path - Path on the app (e.g. "/login", "/dashboard")
 */
export function goToApp(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  window.location.href = `${APP_URL}${normalized}`;
}
