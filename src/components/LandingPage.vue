<template>
  <div class="landing">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-text">
          <img src="/swingnerds-logo-black.png" alt="SwingNerds" class="hero-big-logo" />
          <div class="hero-eyebrow">Golf swing camera software for sim setups</div>
          <h1 class="hero-headline">
            All your shot data. All your swing videos. Automatically in one place.
          </h1>
          <p class="hero-sub">
            SwingNerds is golf swing camera software for indoor golf simulators. Every swing in your bay is recorded automatically, paired with your launch monitor data, and stored in the cloud. Replay, compare side by side, and analyze on any device. <strong>Works with GSPro</strong> and any launch monitor that connects to it, plus <router-link to="/cameras" class="camera-link">any USB camera</router-link> starting at $30.
          </p>
          <div class="hero-actions">
            <button @click="startFreeTrial" class="btn-primary lg">
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="#features" class="hero-see-it">See how it works &darr;</a>
            <span class="hero-note">7-day free trial &middot; No credit card &middot; Any launch monitor</span>
            <p class="hero-business-link">
              Running a sim facility or installing sims? See
              <router-link to="/commercial">facility</router-link>
              or
              <router-link to="/dealers">dealer pricing</router-link>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabbed feature showcase. Defaults to "Compare". Replaces what used to
         be 6 separate scroll-eating sections (hero screenshot, screenshots
         showcase, comparison, drawing, share, mobile, analytics features)
         with a single section so pricing is reachable in 2-3 scrolls. Tabs
         scroll horizontally on mobile. Each tab swaps the visual + caption
         without leaving the page. -->
    <section id="features" class="features-tabbed">
      <div class="section-inner">
        <h2 class="features-tabbed-title">See it in action</h2>
        <p class="features-tabbed-sub">Pick a feature to see what it actually looks like.</p>
        <p class="features-tabbed-hint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          Click an image or video to see it bigger.
        </p>
        <div class="features-tabs" role="tablist">
          <button
            v-for="tab in featureTabs"
            :key="tab.id"
            :class="['features-tab', { active: activeFeatureTab === tab.id }]"
            :aria-selected="activeFeatureTab === tab.id"
            role="tab"
            type="button"
            @click="selectFeatureTab(tab.id)"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="features-panel">
          <div class="features-panel-content" role="tabpanel" :key="activeTab.id">
            <div
              class="features-visual"
              :class="{ 'features-visual-portrait': activeTab.portrait, 'features-visual-zoomable': activeTab.asset }"
              :role="activeTab.asset ? 'button' : null"
              :tabindex="activeTab.asset ? 0 : null"
              :aria-label="activeTab.asset ? 'Click to view full size' : null"
              @click="activeTab.asset && openLightbox(activeTab)"
              @keydown.enter="activeTab.asset && openLightbox(activeTab)"
              @keydown.space.prevent="activeTab.asset && openLightbox(activeTab)"
            >
              <video
                v-if="activeTab.asset && isVideoAsset(activeTab.asset)"
                :key="'v-' + activeTab.id"
                :src="activeTab.asset"
                class="features-visual-primary"
                autoplay
                muted
                loop
                playsinline
              ></video>
              <img
                v-else-if="activeTab.asset"
                :src="activeTab.asset"
                :alt="activeTab.altText"
                class="features-visual-primary"
                loading="lazy"
              />
              <div v-else class="features-visual-placeholder">
                <span>{{ activeTab.placeholder || 'Coming soon' }}</span>
              </div>
              <div v-if="activeTab.secondaryAsset" class="features-visual-secondary-wrap">
                <img
                  :src="activeTab.secondaryAsset"
                  :alt="activeTab.secondaryAltText"
                  class="features-visual-secondary"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="features-text">
              <h3>{{ activeTab.headline }}</h3>
              <p>{{ activeTab.body }}</p>
              <ul v-if="activeTab.bullets" class="features-bullets">
                <li v-for="b in activeTab.bullets" :key="b">{{ b }}</li>
              </ul>
              <p v-if="activeTab.liveLink" class="features-live-link">
                {{ activeTab.liveLinkPrefix || 'Learn more:' }}
                <a
                  :href="activeTab.liveLink"
                  :target="isExternalLink(activeTab.liveLink) ? '_blank' : null"
                  :rel="isExternalLink(activeTab.liveLink) ? 'noopener' : null"
                >{{ activeTab.liveLinkLabel }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Sources. GSPro is the bridge for almost every modern launch
         monitor, so we lead with a hero card for it, then show the grid of
         all the LMs that work. The 3 with their own native API integrations
         (Rapsodo, Uneekor, Square Golf) get an "Auto Sync" badge plus an "or
         via GSPro" subtitle since they also work that way. The rest are
         text-only "via GSPro" cards (logos can be added later, see
         docs/marketing-update-2026-04-25.md). -->
    <section class="datasources-section">
      <div class="section-inner">
        <h2 class="datasources-title">Works with GSPro automatically</h2>
        <p class="datasources-sub">SwingNerds reads from GSPro and pairs every shot with your swing video. If you use GSPro for sim play, you're set. Plus direct integrations with Uneekor, Rapsodo, and Square Golf, plus CSV upload for anything else.</p>

        <!-- GSPro hero -->
        <router-link to="/vision" class="ds-hero">
          <span class="ds-top-pick">Top pick</span>
          <img src="../assets/gspro_logo.png" alt="GSPro" class="ds-hero-logo" />
          <div class="ds-hero-name">GSPro</div>
          <p class="ds-hero-desc">Auto-sync via the SwingNerds Vision Windows app. Every shot paired with its swing video automatically.</p>
          <span class="ds-hero-cta">Set up Vision &rarr;</span>
        </router-link>

        <!-- All brands. "via GSPro" green badge is the consistent headline
             across every card. The 3 with their own native API integrations
             (Rapsodo, Uneekor, Square Golf) get a small "or auto sync" /
             "or CSV" gray subtitle as a secondary note. -->
        <div class="datasources-grid">
          <div class="ds-card">
            <img src="../assets/rapsodo-logo.png" alt="Rapsodo" class="ds-logo" />
            <div class="ds-name">Rapsodo</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
            <span class="ds-sub">or auto sync</span>
          </div>
          <div class="ds-card">
            <img src="../assets/uneekor_logo.png" alt="Uneekor" class="ds-logo" />
            <div class="ds-name">Uneekor</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
            <span class="ds-sub">or auto sync</span>
          </div>
          <div class="ds-card">
            <img src="../assets/squaregolf_logo.png" alt="Square Golf" class="ds-logo" />
            <div class="ds-name">Square Golf</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
            <span class="ds-sub">or CSV</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/foresight.png" alt="Foresight Sports" class="ds-logo" />
            <div class="ds-name">Foresight</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/bushnell.png" alt="Bushnell Launch Pro" class="ds-logo" />
            <div class="ds-name">Bushnell</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/skytrak.png" alt="SkyTrak" class="ds-logo" />
            <div class="ds-name">SkyTrak</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/flightscope.png" alt="FlightScope" class="ds-logo" />
            <div class="ds-name">FlightScope</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/garmin.png" alt="Garmin" class="ds-logo" />
            <div class="ds-name">Garmin R10</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/protee.png" alt="ProTee" class="ds-logo" />
            <div class="ds-name">ProTee VX</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/fullswing.jpeg" alt="Full Swing Golf" class="ds-logo" />
            <div class="ds-name">Full Swing</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/prgr.jpg" alt="PRGR" class="ds-logo" />
            <div class="ds-name">PRGR Black</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
          <div class="ds-card">
            <img src="/integration_logos/spectrum.jpg" alt="Spectrum Golf Technologies" class="ds-logo" />
            <div class="ds-name">Spectrum</div>
            <span class="ds-badge ds-auto-sync">&#10003; via GSPro</span>
          </div>
        </div>
        <p class="datasources-fineprint">
          Plus any launch monitor that exports CSV. Don't see your LM? If it connects to GSPro, SwingNerds works.
        </p>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="pricing-section">
      <div class="section-inner">
        <h2 class="pricing-title">Simple, honest pricing</h2>
        <p class="pricing-sub">Start free. Upgrade when you're ready.</p>
        <div class="pricing-grid">

          <!-- Free -->
          <div class="pricing-card">
            <div class="pricing-tier-name">Free</div>
            <div class="pricing-price">$0 <span class="pricing-period">forever</span></div>
            <p class="pricing-desc">Windows only</p>
            <router-link to="/vision" class="btn-pricing-outline">
              Download for Windows
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
            <ul class="pricing-features-list">
              <li><span class="pf-check">&#10003;</span> Record swing videos from <router-link to="/cameras" class="camera-link">any USB camera</router-link></li>
              <li><span class="pf-check">&#10003;</span> Store videos locally on your computer</li>
              <li><span class="pf-check">&#10003;</span> Dual camera support</li>
              <li><span class="pf-check">&#10003;</span> Automatic swing detection</li>
            </ul>
          </div>

          <!-- Pro -->
          <div class="pricing-card">
            <div class="pricing-tier-name">Pro</div>
            <div class="pricing-price">$4.99 <span class="pricing-period">/ month</span></div>
            <p class="pricing-desc">Unlimited shots · 500 with video*</p>
            <button @click="startFreeTrial" class="btn-pricing-outline">
              Start 7-Day Free Trial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <ul class="pricing-features-list">
              <li><span class="pf-check">&#10003;</span> Unlimited shot tracking</li>
              <li><span class="pf-check">&#10003;</span> Advanced analytics &amp; charts</li>
              <li><span class="pf-check">&#10003;</span> Cloud sync across devices</li>
              <li><span class="pf-check">&#10003;</span> SwingNerds Vision recording</li>
              <li><span class="pf-check">&#10003;</span> Side-by-side swing comparison</li>
              <li><span class="pf-check">&#10003;</span> <strong>10 AI analysis credits / month</strong></li>
              <li><span class="pf-check">&#10003;</span> Data import from GSPro, Rapsodo, Uneekor, Square</li>
            </ul>
          </div>

          <!-- Premium -->
          <div class="pricing-card pricing-card-pro">
            <div class="pricing-popular-badge">Most Popular</div>
            <div class="pricing-tier-name">Premium</div>
            <div class="pricing-price">$9.99 <span class="pricing-period">/ month</span></div>
            <p class="pricing-desc">Unlimited shots · 2,000 with video*</p>
            <button @click="startFreeTrial" class="btn-pricing-primary">
              Start 7-Day Free Trial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <ul class="pricing-features-list">
              <li><span class="pf-check">&#10003;</span> Everything in Pro</li>
              <li><span class="pf-check">&#10003;</span> 4x more video storage</li>
              <li><span class="pf-check">&#10003;</span> <strong>40 AI analysis credits / month</strong></li>
            </ul>
          </div>

          <!-- Ultimate -->
          <div class="pricing-card">
            <div class="pricing-tier-name">Ultimate</div>
            <div class="pricing-price">$19.99 <span class="pricing-period">/ month</span></div>
            <p class="pricing-desc">Unlimited shots · 5,000 with video*</p>
            <button @click="startFreeTrial" class="btn-pricing-outline">
              Start 7-Day Free Trial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <ul class="pricing-features-list">
              <li><span class="pf-check">&#10003;</span> Everything in Premium</li>
              <li><span class="pf-check">&#10003;</span> 10x more video storage</li>
              <li><span class="pf-check">&#10003;</span> <strong>150 AI analysis credits / month</strong></li>
            </ul>
          </div>

        </div>
        <p class="pricing-asterisk">
          *Every plan tracks unlimited shots. Video storage holds your latest swings plus everything you've favorited or saved as a "standard": older non-favorited videos roll off as new ones come in.
        </p>
      </div>
    </section>

    <!-- Audience cross-sell: facility operators and dealers/installers landing on the consumer page should still find their pricing. -->
    <section class="audience-cross-section">
      <div class="section-inner">
        <h2 class="audience-title">Other ways to use SwingNerds</h2>
        <div class="audience-grid">
          <router-link to="/commercial" class="audience-card">
            <h3>Running a sim facility?</h3>
            <p>White-label SwingNerds across your bays. Branded logins, branded shares, recurring revenue per active member, runs unattended.</p>
            <span class="audience-cta">For facilities &rarr;</span>
          </router-link>
          <router-link to="/dealers" class="audience-card">
            <h3>Installing sims for customers?</h3>
            <p>Bundle SwingNerds with every sim install. Your logo on every share customers post. $10 to $20 margin per license.</p>
            <span class="audience-cta">For dealers &rarr;</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="bottom-cta">
      <div class="section-inner bottom-cta-inner">
        <h2>See what your swing actually does</h2>
        <div class="bottom-buttons">
          <button @click="startFreeTrial" class="btn-primary lg">Start Free Trial</button>
          <button @click="goToLogin" class="btn-ghost lg">Log In</button>
        </div>
        <div class="bottom-downloads">
          <span class="bottom-downloads-label">Or jump straight to the apps:</span>
          <div class="bottom-downloads-row">
            <router-link to="/vision" class="btn-outline">
              Download Windows App
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </router-link>
            <a href="https://testflight.apple.com/join/Dc5pv4PD" target="_blank" class="btn-outline">
              Download iOS Beta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </a>
          </div>
        </div>
        <div class="trust">
          <span class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            No credit card required
          </span>
          <span class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            7-day free trial
          </span>
          <span class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact-section">
      <div class="section-inner contact-inner">
        <h2 class="contact-title">Get in touch</h2>
        <p class="contact-desc">Questions, feedback, or just want to say hi? We'd love to hear from you.</p>
        <a href="mailto:support@swingnerds.com" class="contact-email-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          support@swingnerds.com
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="/swingnerds-logo-white.png" alt="SwingNerds" class="footer-logo" />
          <span>SwingNerds</span>
        </div>
        <div class="footer-links">
          <button @click="goToPricing" class="footer-link">Pricing</button>
          <button @click="goToPrivacy" class="footer-link">Privacy</button>
          <a href="mailto:support@swingnerds.com" class="footer-link">Support</a>
          <button @click="goToVision" class="footer-link">SwingNerds Vision</button>
        </div>
      </div>
    </footer>

    <!-- Lightbox modal for the "See it in action" tab visuals -->
    <div
      v-if="lightboxAsset"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Feature preview"
      @click.self="closeLightbox"
    >
      <button class="lightbox-close" type="button" @click="closeLightbox" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="lightbox-content" @click.self="closeLightbox">
        <video
          v-if="isVideoAsset(lightboxAsset.asset)"
          :src="lightboxAsset.asset"
          class="lightbox-media"
          autoplay
          muted
          loop
          playsinline
          controls
        ></video>
        <img
          v-else
          :src="lightboxAsset.asset"
          :alt="lightboxAsset.altText"
          class="lightbox-media"
        />
        <p v-if="lightboxAsset.headline" class="lightbox-caption">{{ lightboxAsset.headline }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';
import { goToApp } from '../services/appUrl.js';
import { setMeta } from '../services/seoMeta.js';

const router = useRouter();
const mobileMenuOpen = ref(false);

// Lightbox for the "See it in action" tab visuals. Click any tab visual to
// see it full-screen. ESC, click outside, or X closes it.
const lightboxAsset = ref(null);
function openLightbox(tab) {
  if (!tab?.asset) return;
  lightboxAsset.value = tab;
}
function closeLightbox() {
  lightboxAsset.value = null;
}
function handleLightboxKey(e) {
  if (e.key === 'Escape' && lightboxAsset.value) closeLightbox();
}
onMounted(() => {
  document.addEventListener('keydown', handleLightboxKey);
});
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleLightboxKey);
});
// Lock body scroll while the lightbox is open.
watch(lightboxAsset, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
});

onMounted(() => {
  setMeta({
    title: 'SwingNerds | Golf swing camera software for sim setups',
    description:
      'SwingNerds is golf swing camera software with automatic shot data capture for indoor golf simulators. Records every swing automatically using any USB camera, pairs each clip with your launch monitor data, and stores everything in the cloud.',
    path: '/',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://swingnerds.com#organization',
          name: 'SwingNerds',
          url: 'https://swingnerds.com',
          logo: 'https://swingnerds.com/swingnerds-logo-white.png',
          sameAs: [],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://swingnerds.com#website',
          url: 'https://swingnerds.com',
          name: 'SwingNerds',
          description: 'Golf swing camera software with automatic shot data capture for sim setups',
          publisher: { '@id': 'https://swingnerds.com#organization' },
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://swingnerds.com#software',
          name: 'SwingNerds',
          description:
            'Golf swing camera software with automatic shot data capture for indoor golf simulators. Records every swing automatically using any USB camera, pairs each clip with the matching shot data from your launch monitor, and stores everything in the cloud for replay, side-by-side comparison, drawing, tagging, and AI analysis on any device.',
          applicationCategory: 'SportsApplication',
          operatingSystem: 'Windows, iOS, Web',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '0',
            highPrice: '19.99',
            priceCurrency: 'USD',
            offerCount: '4',
          },
        },
      ],
    },
  });
});

// Tabbed feature showcase. Default tab is "compare" since the side-by-side
// comparison is the killer feature. Each tab swaps the visual + caption
// without leaving the page. Mobile-friendly: tab list scrolls horizontally
// when it overflows and the visual/text stack vertically below ~720px.
const featureTabs = [
  {
    id: 'compare',
    label: 'Compare',
    asset: '/comparison_scrubbing_web.mp4',
    altText: 'Side-by-side swing comparison with synced slow-motion scrubbing',
    secondaryAsset: '/SwingNerds_screenshot_shotcomparison.PNG',
    secondaryAltText: 'SwingNerds iOS app showing swing comparison',
    headline: 'Compare any two swings, side by side',
    body: 'Pick any two shots, see the videos synced in slow motion with full shot data overlaid. Web or iOS, frame-by-frame, finally understand what changed between your best swing and your worst.',
    bullets: [
      'Synced slow-motion playback',
      'Frame-by-frame scrubbing',
      'Full shot metrics overlaid',
      'Save your best as a reference swing',
    ],
  },
  {
    id: 'markup',
    label: 'Mark Up',
    asset: '/drawing_comparison.mp4',
    altText: 'Drawing lines and angles on a swing video',
    headline: 'Mark up any swing',
    body: 'Draw lines, angles, and posture marks right on the frame. Annotations save with the swing and stay visible in side-by-side comparisons, so you can pinpoint exactly what changed.',
  },
  {
    id: 'share',
    label: 'Share',
    asset: '/share_link_ios.mp4',
    portrait: true,
    altText: 'Sharing a swing video with stats burned in from the SwingNerds iOS app',
    headline: 'Share your best swings',
    body: "Send any swing as a clean video with the stats burned right in. Coach. Buddies. Social. Your wife (she'll love it). One tap, one link, no login required to view. On Commercial and Dealer plans, every share carries your logo.",
    liveLink: 'https://app.swingnerds.com/share/aoGiSmed173XO_rksXjizw?ref=bjvx387d',
    liveLinkLabel: 'app.swingnerds.com/share/aoGi…',
    liveLinkPrefix: 'See a real one:',
  },
  {
    id: 'ai',
    label: 'AI Analysis',
    asset: '/ai_analysis_pic.png',
    altText: 'SwingNerds AI swing analysis with strengths, areas to improve, and recommended drills',
    headline: 'AI swing analysis',
    body: 'Send any swing to AI and get a breakdown of strengths, areas to improve, suggested drills, and follow-up Q&A. A coach in your pocket.',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    asset: '/SwingNerds_Screenshot_Charts_Mobile.PNG',
    portrait: true,
    altText: 'SwingNerds iOS app showing charts and analytics',
    headline: 'Full dashboard on your phone',
    body: 'Browse your data, watch swing videos, and compare shots from anywhere. Plus iPhone-as-a-camera recording: prop up your phone, hit balls, every clip syncs to the matching shot.',
  },
  {
    id: 'cameras',
    label: 'Cameras',
    asset: '/Kayeton_120fps_1.jpg',
    altText: 'Kayeton 120fps USB camera commonly used with SwingNerds',
    headline: 'Use any USB camera, $100 on Amazon',
    body: "We don't sell hardware. The 120fps swing-cams pictured run about $100 each on Amazon from third-party sellers. Most setups use 1 to 2 (down-the-line + face-on). Or start with your laptop webcam to try it out.",
    liveLink: '/cameras',
    liveLinkLabel: 'See camera recommendations →',
    liveLinkPrefix: 'Want help picking?',
  },
];
const activeFeatureTab = ref('compare');

// Computed lookup of the active tab's data. The template renders a single
// panel that swaps content via this computed, instead of v-for + v-show
// across N panels. v-for + v-show with ref-comparison conditions has been
// flaky in some Vue 3.x versions: single-panel + computed is rock-solid.
const activeTab = computed(() =>
  featureTabs.find((t) => t.id === activeFeatureTab.value) ?? featureTabs[0]
);

function selectFeatureTab(id) {
  activeFeatureTab.value = id;
}

// Decide whether to render a tab's asset as <video> (autoplaying loop) or
// <img> based on file extension. Lets the same `asset` path slot accept
// either MP4/WebM (preferred: smaller, smoother) or PNG/JPG/GIF (fallback).
function isVideoAsset(path) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(path || '');
}

// External vs internal link detection. External links open in a new tab
// (target=_blank); internal links navigate normally. Used by the tab live-link
// renderer so /cameras (internal) stays in-window but app.swingnerds.com/share
// (external) opens in a new tab.
function isExternalLink(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url);
}

function startFreeTrial() { goToApp('/register'); }
function goToLogin() { goToApp('/login'); }
function goToPricing() { scrollToSection('pricing'); }
function goToPrivacy() { router.push('/privacy'); }
function goToVision() { router.push('/swingnerds-vision'); }
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&display=swap');

.features-visual-zoomable {
  cursor: zoom-in;
  transition: transform 0.2s ease;
}
.features-visual-zoomable:hover {
  transform: translateY(-2px);
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: lightboxFadeIn 0.18s ease-out;
}
@keyframes lightboxFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s, transform 0.15s;
}
.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.22);
  transform: scale(1.05);
}
.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 95vw;
  max-height: 95vh;
}
.lightbox-media {
  display: block;
  max-width: 95vw;
  max-height: 85vh;
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  background: #000;
}
.lightbox-caption {
  color: #f8fafc;
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
  max-width: 700px;
}

.camera-link {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
  cursor: pointer;
  font-weight: inherit;
}
.camera-link:hover {
  text-decoration-style: solid;
}

.landing {
  --bg: #ffffff;
  --bg-alt: #f8fafc;
  --bg-dark: #0b1120;
  --text: #0f172a;
  --text-2: #475569;
  --text-3: #94a3b8;
  --border: #e2e8f0;
  --accent: #06b6d4;
  --accent-dark: #0891b2;
  --green: #10b981;

  font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

/* --- Utilities --- */
.section-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

/* --- Nav --- */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  gap: 24px;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav-logo {
  width: 36px;
  height: 36px;
}
.nav-name {
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}
.nav-actions {
  display: flex;
  gap: 10px;
}

/* --- Buttons --- */
.btn-primary {
  background: var(--accent);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: background 0.15s, transform 0.15s;
}
.btn-primary:hover {
  background: var(--accent-dark);
  transform: translateY(-1px);
}
.btn-primary.lg {
  font-size: 1.05rem;
  padding: 14px 32px;
  border-radius: 10px;
}
.btn-outline {
  background: none;
  color: var(--accent);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 10px 22px;
  border: 2px solid var(--accent);
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: background 0.15s, transform 0.15s;
}
.btn-outline:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-1px);
}
.btn-outline.lg {
  font-size: 1.05rem;
  padding: 14px 32px;
  border-radius: 10px;
}
.btn-ghost {
  background: none;
  color: var(--text);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 22px;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}
.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.btn-ghost.lg {
  font-size: 1.05rem;
  padding: 14px 32px;
  border-radius: 10px;
}

/* --- Hero --- */
.hero {
  padding: 48px 0 96px;
  background: var(--bg);
}
.hero-inner {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}
.hero-kicker {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent);
  margin: 0 0 16px;
}
.hero-big-logo {
  display: block;
  width: 260px;
  height: auto;
  margin: 0 auto 12px;
}
@media (max-width: 640px) {
  .hero-big-logo { width: 200px; margin-bottom: 8px; }
}
.hero-eyebrow {
  display: inline-block;
  background: rgba(6, 182, 212, 0.12);
  color: #0891b2;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
}
.hero-headline {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0 0 20px;
  color: var(--text);
}
.hero-sub {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--text-2);
  margin: 0 0 32px;
}
.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.hero-see-it {
  color: var(--text-2);
  font-size: 0.95rem;
  text-decoration: none;
  border-bottom: 1px dashed var(--text-3);
  padding-bottom: 2px;
  transition: color 0.15s, border-color 0.15s;
}
.hero-see-it:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
.hero-note {
  font-size: 0.85rem;
  color: var(--text-3);
}

/* --- How It Works --- */
.how-it-works {
  background: var(--bg-dark);
  padding: 80px 0;
  color: #fff;
}
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-badge {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.section-header h2 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.section-desc {
  font-size: 1.05rem;
  color: #94a3b8;
  line-height: 1.6;
  max-width: 560px;
  margin: 0 auto;
}
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.step {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 28px 24px;
  transition: background 0.2s;
}
.step:hover {
  background: rgba(255,255,255,0.07);
}
.step-num {
  width: 36px;
  height: 36px;
  background: var(--accent);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.step h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px;
}
.step p {
  font-size: 0.88rem;
  color: #94a3b8;
  line-height: 1.5;
  margin: 0;
}

.steps-footnote {
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 32px;
  font-style: italic;
}

/* --- Emotional Hook --- */
.hook-section {
  padding: 80px 0;
  background: var(--bg);
}
.hook-inner {
  max-width: 680px;
  text-align: center;
}
.hook-quote {
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0 0 20px;
  quotes: none;
}
.hook-answer {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-2);
  margin: 0;
}

/* --- Hero Screenshot --- */
.hero-shot-section {
  padding: 64px 0 72px;
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.hero-shot-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.hero-shot-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  max-width: 560px;
  line-height: 1.5;
  margin: 0;
}
.hero-phone {
  width: 300px;
}
.hero-shot-footnote {
  font-size: 0.8rem;
  color: var(--text-3);
  text-align: center;
  margin: 0;
}

/* --- Comparison --- */
.comparison-section {
  padding: 80px 0;
  background: var(--bg);
}
.comparison-text-only {
  max-width: 620px;
  margin: 0 auto;
}
.comparison-text-only h2 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.comparison-text-only p {
  font-size: 1.02rem;
  color: var(--text-2);
  line-height: 1.65;
  margin: 0 0 24px;
}
.comparison-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.comparison-list li {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text);
  padding-left: 24px;
  position: relative;
}
.comparison-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 3px;
}

.feature-gif-wrap {
  margin: 32px auto 0;
  max-width: 620px;
}
.feature-gif {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
  border: 1px solid rgba(15, 23, 42, 0.06);
}

/* Drawing/annotation feature section. Mirrors the comparison block so the
   page rhythm stays consistent: header, paragraph, GIF below. */
.drawing-section {
  padding: 80px 0;
  background: var(--bg-alt, #f8fafc);
}
.drawing-inner {
  max-width: 620px;
  margin: 0 auto;
}
.drawing-inner h2 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.drawing-inner p {
  font-size: 1.02rem;
  color: var(--text-2);
  line-height: 1.65;
  margin: 0;
}

/* Phone mockup for comparison section */
.lp-phone-mockup {
  flex-shrink: 0;
  width: 260px;
  margin: 0 auto;
  background: #0a0a0a;
  border-radius: 36px;
  border: 3px solid #3a3a3a;
  box-shadow:
    0 0 0 1px #1a1a1a,
    0 20px 60px rgba(0, 0, 0, 0.25),
    0 4px 20px rgba(6, 182, 212, 0.08);
  overflow: hidden;
  position: relative;
}
.lp-phone-mockup::before {
  content: '';
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 6px;
  background: #2a2a2a;
  border-radius: 3px;
  z-index: 1;
}
.lp-phone-screen {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 33px;
}

/* --- Data Forever --- */
.data-forever {
  background: var(--bg-alt);
  padding: 80px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.data-forever-inner {
  text-align: center;
  max-width: 640px;
}
.data-forever-icon {
  color: var(--accent);
  margin-bottom: 20px;
}
.data-forever h2 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
}
.data-forever p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-2);
  margin: 0;
}
.data-forever em {
  font-style: italic;
  color: var(--text);
  font-weight: 600;
}

/* --- Data Sources --- */
.datasources-section {
  padding: 72px 0;
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.datasources-title {
  text-align: center;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
}
.datasources-sub {
  text-align: center;
  font-size: 0.95rem;
  color: var(--text-2);
  margin: 0 0 40px;
}
.datasources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  max-width: 1080px;
  margin: 0 auto;
}
@media (max-width: 720px) {
  .datasources-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.ds-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  transition: box-shadow 0.15s;
}
.ds-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
}
.ds-card-gspro {
  border-style: dashed;
  border-color: #cbd5e1;
  background: #fafbfc;
}
.ds-logo {
  height: 36px;
  width: auto;
  max-width: 110px;
  object-fit: contain;
}
.ds-logo-muted {
  opacity: 0.5;
}
.ds-name {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text);
}
.ds-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 999px;
  display: inline-block;
}
.ds-auto-sync {
  background: rgba(16, 185, 129, 0.12);
  color: #059669;
}
.ds-coming-soon {
  background: rgba(245, 158, 11, 0.12);
  color: #d97706;
}
.ds-csv-note {
  font-size: 0.75rem;
  color: var(--text-3);
  margin-top: 2px;
}
.ds-card-link {
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s, transform 0.15s;
}
.ds-card-link:hover {
  border-color: var(--primary, #06b6d4);
  transform: translateY(-1px);
}
.ds-card-link:hover .ds-csv-note {
  color: var(--primary, #06b6d4);
}
.ds-card-featured {
  position: relative;
  border-color: rgba(6, 182, 212, 0.45);
  box-shadow: 0 6px 22px rgba(6, 182, 212, 0.12);
  background: linear-gradient(180deg, rgba(6, 182, 212, 0.05), transparent);
}
.ds-top-pick {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #06b6d4;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
@media (max-width: 768px) {
  .datasources-grid { grid-template-columns: repeat(2, 1fr); }
}

/* --- Features --- */
.features {
  padding: 80px 0;
  background: var(--bg);
}
.features-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 48px;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.feat {
  padding: 24px 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg);
  transition: box-shadow 0.2s, transform 0.2s;
}
.feat:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
}
.feat-icon {
  color: var(--accent);
  margin-bottom: 14px;
}
.feat h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 6px;
}
.feat p {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--text-2);
  margin: 0;
}

/* --- Mobile --- */
.mobile-section {
  padding: 0 0 80px;
}
.mobile-card {
  background: var(--bg-dark);
  border-radius: 14px;
  padding: 32px 36px;
  max-width: 640px;
  margin: 0 auto;
  border: 1px solid rgba(6,182,212,0.12);
}
.mobile-badge {
  display: inline-block;
  background: rgba(6,182,212,0.15);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 14px;
}
.mobile-card h3 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 8px;
}
.mobile-card p {
  color: #94a3b8;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0 0 16px;
}
.mobile-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.15s;
}
.mobile-link:hover {
  opacity: 0.8;
}

/* --- Bottom CTA --- */
.bottom-cta {
  padding: 80px 0 48px;
  border-top: 1px solid var(--border);
}
.bottom-cta-inner {
  text-align: center;
}
.bottom-cta h2 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 24px;
}
.bottom-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}
.bottom-downloads {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(148, 163, 184, 0.18);
}
.bottom-downloads-label {
  font-size: 0.85rem;
  color: var(--text-3);
}
.bottom-downloads-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.trust {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}
.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.82rem;
  color: var(--text-2);
}
.trust-item svg {
  color: var(--green);
  flex-shrink: 0;
}

/* --- Footer --- */
.footer {
  padding: 32px 0;
}
.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-3);
}
.footer-logo {
  width: 28px;
  height: 28px;
}
.footer-links {
  display: flex;
  gap: 20px;
}
.footer-link {
  background: none;
  border: none;
  color: var(--text-3);
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: none;
  padding: 0;
  transition: color 0.15s;
}
.footer-link:hover {
  color: var(--accent);
}

/* --- Nav Tabs --- */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-link-tab {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-2);
  text-decoration: none;
  padding: 7px 14px;
  border-radius: 7px;
  transition: color 0.15s, background 0.15s;
  white-space: nowrap;
}
.nav-link-tab:hover {
  color: var(--text);
  background: var(--bg-alt);
}
/* --- Hamburger --- */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 0 24px 16px;
  border-top: 1px solid var(--border);
}
.mobile-menu-link {
  display: block;
  padding: 12px 0;
  color: var(--text-2);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  border-bottom: 1px solid var(--border);
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  cursor: pointer;
  text-align: left;
}
.mobile-menu-link:hover { color: var(--text); }
@media (max-width: 640px) {
  .nav-links { display: none; }
  .nav-actions { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
}

/* --- Pricing --- */
.pricing-section {
  padding: 80px 0;
  background: var(--bg);
  border-top: 1px solid var(--border);
}
.pricing-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 10px;
}
.pricing-sub {
  text-align: center;
  font-size: 1rem;
  color: var(--text-2);
  margin: 0 0 48px;
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1080px;
  margin: 0 auto;
}
.pricing-card {
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}
.pricing-card-pro {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent), 0 16px 48px rgba(6, 182, 212, 0.1);
}
.pricing-popular-badge {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 999px;
  white-space: nowrap;
}
.pricing-tier-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 10px;
}
.pricing-price {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 8px;
}
.pricing-period {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-3);
}
.pricing-desc {
  font-size: 0.88rem;
  color: var(--text-2);
  line-height: 1.5;
  margin: 0 0 22px;
}
.btn-pricing-primary {
  background: var(--accent);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 11px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background 0.15s, transform 0.15s;
  margin-bottom: 24px;
  width: 100%;
}
.btn-pricing-primary:hover {
  background: var(--accent-dark);
  transform: translateY(-1px);
}
.btn-pricing-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 11px 20px;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  background: none;
  color: var(--text);
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  margin-bottom: 24px;
  box-sizing: border-box;
}
.btn-pricing-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.pricing-features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.pricing-features-list li {
  font-size: 0.87rem;
  color: var(--text-2);
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.4;
}
.pf-check {
  color: var(--green);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}
@media (max-width: 640px) {
  .pricing-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .pricing-grid { grid-template-columns: 1fr; }
}

/* --- Contact --- */
.contact-section {
  padding: 72px 0;
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
}
.contact-inner {
  text-align: center;
  max-width: 520px;
}
.contact-title {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.contact-desc {
  font-size: 1rem;
  color: var(--text-2);
  line-height: 1.6;
  margin: 0 0 28px;
}
.contact-email-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  padding: 14px 28px;
  border: 1.5px solid var(--accent);
  border-radius: 10px;
  transition: background 0.15s, color 0.15s;
}
.contact-email-link:hover {
  background: var(--accent);
  color: #fff;
}

/* --- Screenshots Showcase --- */
.screenshots-showcase {
  padding: 80px 0;
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.showcase-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 72px;
}
.showcase-row:last-child {
  margin-bottom: 0;
}
.showcase-caption {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  max-width: 560px;
  line-height: 1.5;
  margin: 0 0 28px;
}

/* Browser mockup frame */
.lp-browser-mockup {
  width: 100%;
  max-width: 900px;
  border-radius: 10px;
  border: 1px solid #d1d9e0;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.12),
    0 4px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  background: #fff;
}
.lp-browser-titlebar {
  background: #f1f5f9;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 1px solid #e2e8f0;
}
.lp-browser-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}
.lp-browser-dot.red    { background: #ff5f57; }
.lp-browser-dot.yellow { background: #ffbd2e; }
.lp-browser-dot.green  { background: #28c840; }
.lp-browser-screen {
  display: block;
  width: 100%;
  height: auto;
}

/* Phone mockup sizing within showcase */
.showcase-phone-mockup {
  width: 300px;
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .steps, .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .hero { padding: 48px 0 64px; }
  .hero-headline { font-size: 2rem; }
  .btn-primary.lg, .btn-outline.lg, .btn-ghost.lg { width: 100%; justify-content: center; }
  .how-it-works { padding: 56px 0; }
  .steps { grid-template-columns: 1fr 1fr; }
  .section-header h2, .comparison-text-only h2,
  .data-forever h2, .features-title, .bottom-cta h2 { font-size: 1.5rem; }
  .hook-quote { font-size: 1.3rem; }
  .features-grid { grid-template-columns: 1fr; }
  .bottom-buttons { flex-direction: column; align-items: center; }
  .trust { flex-direction: column; align-items: center; gap: 8px; }
  .footer-inner { flex-direction: column; gap: 16px; text-align: center; }
  .footer-links { flex-wrap: wrap; justify-content: center; }
.nav-inner { padding: 12px 16px; }
  .nav-actions .btn-ghost { padding: 8px 14px; font-size: 0.82rem; }
}

@media (max-width: 480px) {
  .hero-headline { font-size: 1.7rem; }
  .steps { grid-template-columns: 1fr; }
}

/* ===== 2026-04-25 marketing update ===== */

/* Tabbed feature showcase. Replaces the old per-feature sections so pricing
   stays reachable in 2-3 scrolls. Two-column on desktop (visual left, text
   right), stacked on mobile. Tab list scrolls horizontally when it overflows. */
.features-tabbed {
  padding: 80px 0;
  background: #ffffff;
}
.features-tabbed-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
  margin: 0 0 8px;
}
.features-tabbed-sub {
  text-align: center;
  color: #64748b;
  margin: 0 0 6px;
  font-size: 0.98rem;
}
.features-tabbed-hint {
  text-align: center;
  color: #94a3b8;
  margin: 0 0 24px;
  font-size: 0.78rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  justify-content: center;
}
.features-tabbed-hint svg {
  flex: 0 0 auto;
}
.features-tabs {
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto 32px;
  max-width: 100%;
  /* Allow horizontal scroll fallback on very narrow screens. */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
}
.features-tab {
  flex-shrink: 0;
  background: #f1f5f9;
  border: 1px solid transparent;
  color: #475569;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  font-family: inherit;
}
.features-tab:hover {
  background: #e2e8f0;
  color: #0f172a;
}
.features-tab.active {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}
.features-panel {
  max-width: 1080px;
  margin: 0 auto;
}
.features-panel-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.features-visual {
  position: relative;
  display: block;
  /* Padding gives the absolutely-positioned phone room to "float off" the
     corner of the primary asset without clipping. */
  padding: 0 28px 28px 0;
}
.features-visual-primary {
  display: block;
  width: 100%;
  height: auto;
  max-width: 520px;
  margin: 0 auto;
  border-radius: 14px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.14);
  border: 1px solid rgba(15, 23, 42, 0.06);
}
.features-visual-secondary-wrap {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 22%;
  max-width: 140px;
  z-index: 2;
}
/* Portrait-orientation visuals (e.g. iOS phone screen recordings). Constrain
   width and add a dark "bezel" so the video reads as a phone in context
   instead of stretching to fill the whole column. */
.features-visual-portrait {
  padding: 0;
  text-align: center;
}
.features-visual-portrait .features-visual-primary {
  width: auto;
  max-width: 280px;
  margin: 0 auto;
  border-radius: 24px;
  border: 4px solid #0f172a;
  background: #0f172a;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);
}
.features-visual-secondary {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 18px;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.25);
  border: 3px solid #0f172a;
  background: #0f172a;
}
.features-visual-placeholder {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border: 1px dashed #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.95rem;
  font-style: italic;
  text-align: center;
  padding: 24px;
}
.features-text h3 {
  margin: 0 0 12px;
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.25;
}
.features-text p {
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.6;
  color: #475569;
}
.features-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.features-bullets li {
  font-size: 0.92rem;
  font-weight: 500;
  color: #1e293b;
  padding-left: 22px;
  position: relative;
  line-height: 1.5;
}
.features-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 9px;
  height: 9px;
  background: #06b6d4;
  border-radius: 3px;
}
.features-live-link {
  margin: 6px 0 0;
  font-size: 0.88rem;
  color: #64748b;
}
.features-live-link a {
  color: #06b6d4;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.features-live-link a:hover { color: #0891b2; }

@media (max-width: 720px) {
  .features-tabbed { padding: 56px 0; }
  .features-tabs {
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding: 4px 16px;
    margin-bottom: 24px;
  }
  .features-panel-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .features-text {
    text-align: left;
  }
  /* On mobile the phone stops floating in the corner and stacks below the
     primary visual instead. */
  .features-visual {
    padding: 0;
    text-align: center;
  }
  .features-visual-secondary-wrap {
    position: static;
    width: 50%;
    max-width: 220px;
    margin: -32px auto 0;
  }
  .features-text h3 { font-size: 1.25rem; }
}


/* Hero secondary link below the trust note, linking to /commercial and /dealers */
.hero-business-link {
  margin: 12px 0 0;
  font-size: 0.85rem;
  color: #475569;
}
.hero-business-link a {
  color: #06b6d4;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.hero-business-link a:hover { color: #0891b2; }

/* Datasources fine-print SEO list under the launch monitor logos */
.datasources-fineprint {
  max-width: 900px;
  margin: 24px auto 0;
  padding: 0 16px;
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.6;
}

/* GSPro hero card: the bridge to most LMs, so it gets a big standalone
   treatment above the grid of all the brands. */
.ds-hero {
  display: block;
  max-width: 720px;
  margin: 0 auto 32px;
  padding: 32px 28px;
  background: linear-gradient(135deg, #f0fdfa 0%, #ecfeff 100%);
  border: 2px solid var(--accent, #06b6d4);
  border-radius: 16px;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.ds-hero:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(6, 182, 212, 0.18);
}
.ds-hero .ds-top-pick {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent, #06b6d4);
  color: #fff;
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.ds-hero-logo {
  display: block;
  height: 56px;
  width: auto;
  margin: 8px auto 16px;
  object-fit: contain;
}
.ds-hero-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 8px;
}
.ds-hero-desc {
  margin: 0 auto 16px;
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.5;
  max-width: 480px;
}
.ds-hero-cta {
  display: inline-block;
  color: var(--accent, #06b6d4);
  font-weight: 700;
  font-size: 0.9rem;
}

/* Text-only cards for via-GSPro LMs that don't have their own logos yet.
   Visually lighter than logo cards so the direct-integration cards still
   read as more important. */
.ds-card-text {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}
.ds-card-text .ds-name {
  margin-top: 4px;
  font-size: 1rem;
  font-weight: 700;
}
.ds-name-sub {
  display: block;
  margin: 2px 0 6px;
  font-size: 0.78rem;
  color: #94a3b8;
  font-weight: 500;
}

/* Subtitle line under the badge ("or via GSPro" for direct-integration
   cards). Reinforces that even direct-API LMs also work via GSPro. */
.ds-sub {
  display: block;
  margin-top: 6px;
  font-size: 0.78rem;
  color: #94a3b8;
  font-style: italic;
}

/* "via GSPro" badge: gray-blue, less prominent than the green Auto Sync. */
.ds-badge.ds-via-gspro {
  background: #e2e8f0;
  color: #475569;
}

/* Pricing asterisk: explains the rolling-video-storage rule that applies
   to all paid tiers. */
.pricing-asterisk {
  max-width: 720px;
  margin: 32px auto 0;
  padding: 0 16px;
  text-align: center;
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.55;
  font-style: italic;
}

/* Testimonial / social-proof slot */
.testimonial-section {
  padding: 56px 0;
  background: #f8fafc;
}
.testimonial-inner {
  max-width: 760px;
  text-align: center;
}
.testimonial-quote {
  margin: 0 0 12px;
  padding: 0;
  font-size: 1.35rem;
  font-weight: 500;
  line-height: 1.5;
  color: #0f172a;
  font-style: italic;
}
.testimonial-attribution {
  margin: 0;
  color: #64748b;
  font-size: 0.95rem;
}

/* Share-your-swings section */
.share-section {
  padding: 80px 0;
}
.share-inner {
  max-width: 820px;
}
.share-section h2 {
  margin: 0 0 16px;
  font-size: 2rem;
  font-weight: 800;
  color: #0f172a;
}
.share-lead {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.65;
  margin: 0 0 20px;
}
.share-list {
  list-style: disc;
  padding-left: 22px;
  margin: 0;
  color: #334155;
}
.share-list li {
  margin: 6px 0;
  line-height: 1.6;
}
.share-live-link {
  margin: 14px 0 0;
  text-align: center;
  font-size: 0.88rem;
  color: #64748b;
}
.share-live-link a {
  color: #06b6d4;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.share-live-link a:hover { color: #0891b2; }

/* Audience cross-sell cards (facility / dealer) */
.audience-cross-section {
  padding: 80px 0;
  background: #f8fafc;
}
.audience-title {
  text-align: center;
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 32px;
  color: #0f172a;
}
.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 880px;
  margin: 0 auto;
}
.audience-card {
  display: block;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 28px 24px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.audience-card:hover {
  border-color: #06b6d4;
  transform: translateY(-2px);
}
.audience-card h3 {
  margin: 0 0 10px;
  font-size: 1.15rem;
  color: #0f172a;
  font-weight: 700;
}
.audience-card p {
  margin: 0 0 12px;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.55;
}
.audience-cta {
  color: #06b6d4;
  font-weight: 700;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .audience-grid { grid-template-columns: 1fr; }
  .share-section h2 { font-size: 1.5rem; }
  .testimonial-quote { font-size: 1.1rem; }
}
</style>
