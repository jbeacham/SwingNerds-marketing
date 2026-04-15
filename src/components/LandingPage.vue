<template>
  <div class="landing">
    <!-- Nav -->
    <nav class="nav">
      <div class="nav-inner">
        <div class="nav-brand">
          <img src="../assets/SwingNerdsLogo.png" alt="SwingNerds" class="nav-logo" />
          <span class="nav-name">SwingNerds</span>
        </div>
        <div class="nav-links">
          <a href="#pricing" @click.prevent="scrollToSection('pricing')" class="nav-link-tab">Pricing</a>
          <router-link to="/cameras" class="nav-link-tab">Cameras</router-link>
          <router-link to="/vision" class="nav-link-tab" style="font-weight: 700;">Vision</router-link>
          <a href="#contact" @click.prevent="scrollToSection('contact')" class="nav-link-tab">Contact Us</a>
        </div>
        <div class="nav-actions">
          <button @click="goToLogin" class="btn-ghost">Log In</button>
        </div>
        <button class="hamburger" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <a href="#pricing" @click.prevent="scrollToSection('pricing'); mobileMenuOpen = false" class="mobile-menu-link">Pricing</a>
        <router-link to="/cameras" class="mobile-menu-link" @click="mobileMenuOpen = false">Cameras</router-link>
        <router-link to="/vision" class="mobile-menu-link" @click="mobileMenuOpen = false">Vision</router-link>
        <a href="#contact" @click.prevent="scrollToSection('contact'); mobileMenuOpen = false" class="mobile-menu-link">Contact Us</a>
        <button @click="goToLogin(); mobileMenuOpen = false" class="mobile-menu-link">Log In</button>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-text">
          <h1 class="hero-headline">
            All your shot data. All your swing videos. Automatically in one place.
          </h1>
          <p class="hero-sub">
            Every shot you've ever hit - stored, analyzed, and paired with video from <a href="#" class="camera-link" @click.prevent="showCameraModal = true">any USB camera</a> starting at $30. One place for all your launch monitor data, whether you're using GSPro, Uneekor, Rapsodo, Square, or anything else.
          </p>
          <div class="hero-actions">
            <button @click="startFreeTrial" class="btn-primary lg">
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div class="hero-download-row">
              <router-link to="/vision" class="btn-outline lg">
                Download Windows App
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </router-link>
              <a href="https://testflight.apple.com/join/Dc5pv4PD" target="_blank" class="btn-outline lg">
                Download iOS Beta
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </a>
            </div>
            <span class="hero-note">7-day free trial &middot; No credit card &middot; Any launch monitor</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Screenshot -->
    <section class="hero-shot-section">
      <div class="section-inner hero-shot-inner">
        <p class="hero-shot-label">Compare two swings with their data side by side - without expensive cameras or software. Works with <a href="#" class="camera-link" @click.prevent="showCameraModal = true">any USB camera</a></p>
        <div class="lp-phone-mockup hero-phone">
          <img :src="'/SwingNerds_screenshot_shotcomparison.PNG'" alt="SwingNerds swing comparison" class="lp-phone-screen" />
        </div>
        <p class="hero-shot-footnote">Compatible <a href="#" class="camera-link" @click.prevent="showCameraModal = true">USB cameras</a> starting at $30 on Amazon - or even use your laptop's built-in webcam to get started</p>
      </div>
    </section>

    <!-- Screenshots Showcase -->
    <section class="screenshots-showcase">
      <div class="section-inner">

        <!-- Desktop: All-Time Performance -->
        <div class="showcase-row showcase-desktop">
          <p class="showcase-caption">Track your progress across every club, every session</p>
          <div class="lp-browser-mockup">
            <div class="lp-browser-titlebar">
              <span class="lp-browser-dot red"></span>
              <span class="lp-browser-dot yellow"></span>
              <span class="lp-browser-dot green"></span>
            </div>
            <img :src="'/SwingNerds_Screenshot_AllTimePerformance_Desktop.png'" alt="All-time performance analysis" class="lp-browser-screen" />
          </div>
        </div>

        <!-- Phone: Shot Dispersion -->
        <div class="showcase-row showcase-phone">
          <p class="showcase-caption">See where your shots land and click to view the video for that shot</p>
          <div class="lp-phone-mockup showcase-phone-mockup">
            <img :src="'/SwingNerds_Screenshot_ShotDispersion_Mobile.PNG'" alt="Shot dispersion chart" class="lp-phone-screen" />
          </div>
        </div>

        <!-- Desktop: Shot Comparison -->
        <div class="showcase-row showcase-desktop">
          <p class="showcase-caption">In-depth shot analysis from every angle &mdash; right in your browser</p>
          <div class="lp-browser-mockup">
            <div class="lp-browser-titlebar">
              <span class="lp-browser-dot red"></span>
              <span class="lp-browser-dot yellow"></span>
              <span class="lp-browser-dot green"></span>
            </div>
            <img :src="'/SwingNerds_Screenshot_ShotComparison_Desktop.png'" alt="Shot comparison analysis" class="lp-browser-screen" />
          </div>
        </div>

        <!-- Phone: Charts -->
        <div class="showcase-row showcase-phone">
          <p class="showcase-caption">Dig into trends across every club and every session</p>
          <div class="lp-phone-mockup showcase-phone-mockup">
            <img :src="'/SwingNerds_Screenshot_Charts_Mobile.PNG'" alt="Charts and analytics" class="lp-phone-screen" />
          </div>
        </div>

      </div>
    </section>

    <!-- Emotional hook -->
    <section class="hook-section">
      <div class="section-inner hook-inner">
        <blockquote class="hook-quote">
          &ldquo;You hit a perfect 7&#8209;iron and have no idea what you did differently.&rdquo;
        </blockquote>
        <p class="hook-answer">
          Now you can go back and look. Your swing video is sitting right next to your shot data - carry, ball speed, launch, spin - for every single shot. Compare your best to your worst and actually see the difference.
        </p>
      </div>
    </section>

    <!-- Side-by-Side Comparison -->
    <section class="comparison-section">
      <div class="section-inner comparison-text-only">
        <h2>Compare any two swings, side&nbsp;by&nbsp;side</h2>
        <p>
          This is what first hooked people. Pick any two shots, see the videos synced in slow motion with full shot data overlaid. Finally understand what changed between your best swing and your worst.
        </p>
        <ul class="comparison-list">
          <li>Synced slow-motion playback</li>
          <li>Frame-by-frame scrubbing</li>
          <li>Full shot metrics overlaid</li>
          <li>Save your best as a reference swing</li>
        </ul>
      </div>
    </section>

    <!-- Your Data, Forever -->
    <section class="data-forever">
      <div class="section-inner data-forever-inner">
        <div class="data-forever-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
          </svg>
        </div>
        <h2>Your data lives in one place, forever</h2>
        <p>
          Switch launch monitors. Change sim software. It doesn't matter. SwingNerds is cloud storage and analytics for your <em>lifetime</em> of golf data - every shot, every session, every video, regardless of what hardware you're on today.
        </p>
      </div>
    </section>

    <!-- Data Sources -->
    <section class="datasources-section">
      <div class="section-inner">
        <h2 class="datasources-title">Works with your launch monitor</h2>
        <p class="datasources-sub">Connect your existing gear - no extra hardware needed.</p>
        <div class="datasources-grid">
          <div class="ds-card">
            <img src="../assets/rapsodo-logo.png" alt="Rapsodo" class="ds-logo" />
            <div class="ds-name">Rapsodo</div>
            <span class="ds-badge ds-auto-sync">&#10003; Auto Sync</span>
          </div>
          <div class="ds-card">
            <img src="../assets/uneekor_logo.png" alt="Uneekor" class="ds-logo" />
            <div class="ds-name">Uneekor</div>
            <span class="ds-badge ds-auto-sync">&#10003; Auto Sync</span>
          </div>
          <div class="ds-card">
            <img src="../assets/squaregolf_logo.png" alt="Square Golf" class="ds-logo" />
            <div class="ds-name">Square Golf</div>
            <span class="ds-badge ds-auto-sync">&#10003; CSV</span>
          </div>
          <div class="ds-card">
            <img src="../assets/gspro_logo.png" alt="GSPro" class="ds-logo" />
            <div class="ds-name">GSPro</div>
            <span class="ds-badge ds-auto-sync">&#10003; CSV</span>
          </div>
          <div class="ds-card ds-card-gspro">
            <img src="../assets/gspro_logo.png" alt="GSPro Auto Sync" class="ds-logo ds-logo-muted" />
            <div class="ds-name">GSPro Auto Sync</div>
            <span class="ds-badge ds-coming-soon">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Analytics Features -->
    <section class="features">
      <div class="section-inner">
        <h2 class="features-title">Everything you need to improve</h2>
        <div class="features-grid">
          <div class="feat">
            <div class="feat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12h10M7 8h10M7 16h10"/></svg>
            </div>
            <h3>Shot-by-Shot Data</h3>
            <p>Carry, ball speed, club speed, launch, spin, smash factor - every metric, every shot.</p>
          </div>
          <div class="feat">
            <div class="feat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h3>Progress Over Time</h3>
            <p>Track consistency, compare sessions, and see real trends in your game.</p>
          </div>
          <div class="feat">
            <div class="feat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><circle cx="8" cy="9" r="1.5"/><circle cx="16" cy="14" r="1.5"/></svg>
            </div>
            <h3>Dispersion &amp; Gapping</h3>
            <p>See where your shots actually land. Compare clubs and find your real distances.</p>
          </div>
          <div class="feat">
            <div class="feat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/></svg>
            </div>
            <h3>AI Swing Analysis</h3>
            <p>Get AI-powered insights on your swing with personalized recommendations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile App -->
    <section class="mobile-section">
      <div class="section-inner">
        <div class="mobile-card">
          <div class="mobile-badge">iOS App</div>
          <h3>Full dashboard on your phone</h3>
          <p>
            Browse your data, watch swing videos, and compare shots from anywhere.
            Plus automatic swing video recording - prop up your iPhone, hit balls, and every clip syncs to the matching shot.
          </p>
          <a href="https://testflight.apple.com/join/Dc5pv4PD" target="_blank" class="mobile-link">
            Join the TestFlight Beta
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
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
              <li><span class="pf-check">&#10003;</span> Record swing videos from <a href="#" class="camera-link" @click.prevent="showCameraModal = true">any USB camera</a></li>
              <li><span class="pf-check">&#10003;</span> Store videos locally on your computer</li>
              <li><span class="pf-check">&#10003;</span> Dual camera support</li>
              <li><span class="pf-check">&#10003;</span> Automatic swing detection</li>
            </ul>
          </div>

          <!-- Pro -->
          <div class="pricing-card">
            <div class="pricing-tier-name">Pro</div>
            <div class="pricing-price">$4.99 <span class="pricing-period">/ month</span></div>
            <p class="pricing-desc">500 shots with video</p>
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
              <li><span class="pf-check">&#10003;</span> AI swing analysis</li>
              <li><span class="pf-check">&#10003;</span> Data import from GSPro, Rapsodo, Uneekor, Square</li>
            </ul>
          </div>

          <!-- Premium -->
          <div class="pricing-card pricing-card-pro">
            <div class="pricing-popular-badge">Most Popular</div>
            <div class="pricing-tier-name">Premium</div>
            <div class="pricing-price">$9.99 <span class="pricing-period">/ month</span></div>
            <p class="pricing-desc">2,000 shots with video</p>
            <button @click="startFreeTrial" class="btn-pricing-primary">
              Start 7-Day Free Trial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <ul class="pricing-features-list">
              <li><span class="pf-check">&#10003;</span> Everything in Pro</li>
              <li><span class="pf-check">&#10003;</span> 4x more video storage</li>
            </ul>
          </div>

          <!-- Ultimate -->
          <div class="pricing-card">
            <div class="pricing-tier-name">Ultimate</div>
            <div class="pricing-price">$19.99 <span class="pricing-period">/ month</span></div>
            <p class="pricing-desc">5,000 shots with video</p>
            <button @click="startFreeTrial" class="btn-pricing-outline">
              Start 7-Day Free Trial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <ul class="pricing-features-list">
              <li><span class="pf-check">&#10003;</span> Everything in Premium</li>
              <li><span class="pf-check">&#10003;</span> 10x more video storage</li>
            </ul>
          </div>

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
          <img src="../assets/SwingNerdsLogo.png" alt="SwingNerds" class="footer-logo" />
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

    <CameraInfoModal :isOpen="showCameraModal" @close="showCameraModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CameraInfoModal from './CameraInfoModal.vue';
import { goToApp } from '../services/appUrl.js';

const router = useRouter();
const showCameraModal = ref(false);
const mobileMenuOpen = ref(false);

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
  padding: 80px 0 96px;
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
.hero-download-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
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
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
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
</style>
