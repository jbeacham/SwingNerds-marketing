import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import AboutPage from '../views/AboutPage.vue'
import PrivacyPage from '../views/PrivacyPage.vue'
import SupportPage from '../views/SupportPage.vue'
import PricingPage from '../views/PricingPage.vue'
import VisionLandingPage from '../views/VisionLandingPage.vue'
import VisionWindowsPage from '../views/VisionWindowsPage.vue'
import ChangelogPage from '../views/ChangelogPage.vue'
import GetStartedPage from '../views/GetStartedPage.vue'
import EnterpriseLandingPage from '../views/EnterpriseLandingPage.vue'
import DealersLandingPage from '../views/DealersLandingPage.vue'
import CamerasPage from '../views/CamerasPage.vue'
import { APP_URL } from '../services/appUrl.js'
import { trackPageView } from '../services/analyticsService.js'

// Guard that hard-redirects an old app route to the app subdomain.
// Used for routes like /dashboard, /login, /charts, etc. that no longer live here.
function redirectToApp(path) {
  return (_to, _from, next) => {
    const target = path === '*' ? _to.fullPath : path
    window.location.replace(`${APP_URL}${target}`)
    // Don't call next() — the page is being unloaded.
  }
}

const routes = [
  // Marketing
  { path: '/', name: 'Home', component: LandingPage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/privacy', name: 'Privacy', component: PrivacyPage },
  { path: '/support', name: 'Support', component: SupportPage },
  { path: '/contact', redirect: '/support' },
  { path: '/pricing', name: 'Pricing', component: PricingPage },
  { path: '/changelog', name: 'Changelog', component: ChangelogPage },
  { path: '/cameras', name: 'Cameras', component: CamerasPage },
  { path: '/get-started', name: 'GetStarted', component: GetStartedPage, meta: { title: 'Get Started' } },
  { path: '/try', redirect: '/get-started' },
  { path: '/vision', name: 'Vision', component: VisionWindowsPage, meta: { title: 'Vision for Windows' } },
  { path: '/vision-windows', redirect: '/vision' },
  { path: '/swingnerds-vision', name: 'VisionLanding', component: VisionLandingPage, meta: { title: 'SwingNerds Vision' } },
  { path: '/commercial', name: 'EnterpriseLanding', component: EnterpriseLandingPage, meta: { title: 'Facilities' } },
  { path: '/dealers', name: 'DealersLanding', component: DealersLandingPage, meta: { title: 'Dealers' } },

  // App routes → redirect to app.swingnerds.com so old bookmarks still work.
  // These are handled at runtime in the router guard rather than at the Static Web App
  // level so the current path is preserved in the redirect.
  { path: '/login', beforeEnter: redirectToApp('/login'), component: { render: () => null } },
  { path: '/register', beforeEnter: redirectToApp('/register'), component: { render: () => null } },
  { path: '/reset-password', beforeEnter: redirectToApp('/reset-password'), component: { render: () => null } },
  { path: '/dashboard', beforeEnter: redirectToApp('/dashboard'), component: { render: () => null } },
  { path: '/charts', beforeEnter: redirectToApp('/charts'), component: { render: () => null } },
  { path: '/shot-data', beforeEnter: redirectToApp('/shot-data'), component: { render: () => null } },
  { path: '/shot-tracer', beforeEnter: redirectToApp('/shot-tracer'), component: { render: () => null } },
  { path: '/sessions', beforeEnter: redirectToApp('/sessions'), component: { render: () => null } },
  { path: '/library', beforeEnter: redirectToApp('/library'), component: { render: () => null } },
  { path: '/last-round', beforeEnter: redirectToApp('/last-round'), component: { render: () => null } },
  { path: '/consistency', beforeEnter: redirectToApp('/consistency'), component: { render: () => null } },
  { path: '/deep-insights', beforeEnter: redirectToApp('/deep-insights'), component: { render: () => null } },
  { path: '/settings', beforeEnter: redirectToApp('/settings'), component: { render: () => null } },
  { path: '/settings/:tab*', beforeEnter: redirectToApp('*'), component: { render: () => null } },
  { path: '/data-sources', beforeEnter: redirectToApp('/data-sources'), component: { render: () => null } },
  { path: '/data-quality', beforeEnter: redirectToApp('/data-quality'), component: { render: () => null } },
  { path: '/excluded', beforeEnter: redirectToApp('/excluded'), component: { render: () => null } },
  { path: '/export', beforeEnter: redirectToApp('/export'), component: { render: () => null } },
  { path: '/videos', beforeEnter: redirectToApp('/videos'), component: { render: () => null } },
  { path: '/ai-analysis', beforeEnter: redirectToApp('/ai-analysis'), component: { render: () => null } },
  { path: '/admin', beforeEnter: redirectToApp('/admin'), component: { render: () => null } },
  { path: '/enterprise', beforeEnter: redirectToApp('/enterprise'), component: { render: () => null } },
  { path: '/subscription/success', beforeEnter: redirectToApp('/subscription/success'), component: { render: () => null } },
  { path: '/account', beforeEnter: redirectToApp('/settings/account'), component: { render: () => null } },

  // Catch-all: show the landing page on unknown routes
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  const analyticsName = to.name || 'Page'
  const displayTitle = to.meta?.title || to.name || 'Page'
  // Home keeps a bare "SwingNerds" title — everything else gets the suffix.
  document.title = to.name === 'Home' ? 'SwingNerds' : `SwingNerds - ${displayTitle}`
  trackPageView(analyticsName, document.title)
  next()
})

export default router
