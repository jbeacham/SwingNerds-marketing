<template>
  <div class="page">

    <!-- Hero - single clear message, CTA above the fold -->
    <section class="hero">
      <div class="hero-inner">
        <img src="/swingnerds-logo-white.png" alt="SwingNerds" class="hero-logo" />
        <div class="alpha-pill">Early Alpha &middot; Windows</div>
        <h1>Every swing recorded.<br>Every shot paired.<br><span class="accent">Automatically.</span></h1>
        <p class="hero-sub">
          Mount any USB camera in your sim bay and SwingNerds Vision captures every swing ,
          no button presses, no manual recording. Clips sync to your shot data so you can compare
          any two swings side by side, frame by frame.
        </p>
        <div class="hero-cta">
          <a :href="installerUrl" target="_blank" class="btn-primary" @click="onDownload">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download for Windows - Free
          </a>
          <span class="hero-note">Windows 10/11 &middot; 64-bit &middot; Auto-updates</span>
        </div>
      </div>
    </section>

    <!-- How it works - 3 steps, fast scan -->
    <section class="steps-section">
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <h3>Mount &amp; launch</h3>
          <p>Position any USB camera - even your laptop's built-in webcam. Launch Vision, fire up your sim, and play.</p>
        </div>
        <div class="step-arrow">&rarr;</div>
        <div class="step">
          <div class="step-num">2</div>
          <h3>Every swing captured</h3>
          <p>Audio impact detection + motion confirmation triggers a clip automatically on every shot. You don't touch anything.</p>
        </div>
        <div class="step-arrow">&rarr;</div>
        <div class="step">
          <div class="step-num">3</div>
          <h3>Paired &amp; compared</h3>
          <p>Clips upload and match to your GSPro, Rapsodo, Uneekor, or Square Golf data. Compare any two swings side by side.</p>
        </div>
      </div>
    </section>

    <!-- Free vs Pro comparison -->
    <section class="compare-section">
      <h2>Free app. Pro analytics.</h2>
      <p class="compare-sub">Vision is 100% free to download and use. A subscription unlocks the full platform.</p>

      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th></th>
              <th class="col-free">Free</th>
              <th class="col-pro">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Automatic swing recording</td>
              <td class="yes">&#10003;</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>1 or 2 USB cameras</td>
              <td class="yes">&#10003;</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>Save clips locally</td>
              <td class="yes">&#10003;</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>Adjustable exposure, gain, FPS</td>
              <td class="yes">&#10003;</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>Shots with cloud video</td>
              <td class="dash">,</td>
              <td class="yes-pro">1,000+</td>
            </tr>
            <tr>
              <td>Upload clips to the cloud</td>
              <td class="dash">,</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>Auto-pair videos to shot data</td>
              <td class="dash">,</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>Side-by-side swing comparison</td>
              <td class="dash">,</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>AI-powered swing analysis</td>
              <td class="dash">,</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>All-time performance analytics</td>
              <td class="dash">,</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
            <tr>
              <td>Multi-source data import</td>
              <td class="dash">,</td>
              <td class="yes-pro">&#10003;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Promo code -->
    <section class="promo-section">
      <div class="promo-card">
        <div class="promo-code">BETA30</div>
        <p>Use code <strong>BETA30</strong> for <span class="promo-highlight">30% off</span> any subscription plan</p>
        <a href="https://swingnerds.com/pricing" class="btn-secondary">See Plans</a>
      </div>
    </section>

    <!-- Camera info -->
    <section class="camera-section">
      <div class="camera-card">
        <h3>What camera do I need?</h3>
        <div class="camera-options">
          <div class="camera-option">
            <div class="camera-label recommended">Recommended</div>
            <strong>Global shutter USB camera</strong>
            <span class="camera-price">$50-$100</span>
            <p>Sharp freeze-frames at impact. Search Amazon for "global shutter USB camera 60fps".</p>
          </div>
          <div class="camera-option">
            <strong>Any USB webcam</strong>
            <span class="camera-price">~$30</span>
            <p>Works great for full-swing recording. Some rolling shutter distortion on club at impact.</p>
          </div>
          <div class="camera-option">
            <div class="camera-label starter">Just Getting Started</div>
            <strong>Your laptop's built-in camera</strong>
            <span class="camera-price">Free</span>
            <p>Try the whole workflow today without buying anything.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Alpha feedback -->
    <section class="feedback-section">
      <div class="feedback-card">
        <div class="feedback-badge">Early Alpha</div>
        <h3>We need your feedback</h3>
        <p>
          Vision is in early alpha - your feedback directly shapes what we build next.
          Tell us what works, what doesn't, what you wish it did. We read and respond to every message.
        </p>
        <a href="mailto:support@swingnerds.com" class="feedback-link">support@swingnerds.com &rarr;</a>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
      <h2>Start recording your swings today</h2>
      <p>Free download. No credit card. Works with any USB camera.</p>
      <a :href="installerUrl" target="_blank" class="btn-primary" @click="onDownload">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download SwingNerds Vision
      </a>
    </section>

    <!-- Minimal footer -->
    <footer class="footer">
      <p>&copy; {{ currentYear }} SwingNerds &middot; <a href="https://swingnerds.com">swingnerds.com</a> &middot; <a href="mailto:support@swingnerds.com">Contact</a> &middot; <a href="/privacy">Privacy</a></p>
    </footer>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { trackAppDownload } from '../services/tracking.js';
import { trackEvent } from '../services/analyticsService';

const currentYear = computed(() => new Date().getFullYear());
const installerUrl = 'https://videos.swingnerds.com/releases/swingnerdsclip/SwingNerdsClip-win-Setup.exe';

function onDownload() {
  trackAppDownload();
  trackEvent('download_vision_app', 'conversion', { platform: 'windows', source: 'get-started' });
}
</script>

<style scoped>
.page {
  --bg: #0f172a;
  --surface: #1e293b;
  --border: #334155;
  --text: #f8fafc;
  --muted: #94a3b8;
  --faint: #64748b;
  --primary: #00adb5;
  --success: #10b981;
  --warn: #f59e0b;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* ── Hero ── */
.hero {
  padding: 64px 24px 56px;
  text-align: center;
  background: linear-gradient(180deg, #0f172a 0%, #1a2744 100%);
}
.hero-inner {
  max-width: 680px;
  margin: 0 auto;
}
.hero-logo {
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
}
.alpha-pill {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--warn);
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.3);
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 24px;
}
.hero h1 {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0 0 20px;
}
.accent { color: var(--primary); }
.hero-sub {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--muted);
  margin: 0 0 32px;
}
.hero-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.hero-note {
  font-size: 0.85rem;
  color: var(--faint);
}

/* ── Buttons ── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary);
  color: #fff;
  font-size: 1.05rem;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s, transform 0.15s;
}
.btn-primary:hover {
  background: #0891b2;
  transform: translateY(-1px);
}
.btn-secondary {
  display: inline-block;
  color: var(--primary);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 10px 24px;
  border: 2px solid var(--primary);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.btn-secondary:hover {
  background: var(--primary);
  color: #fff;
}

/* ── Steps ── */
.steps-section {
  padding: 48px 24px;
  background: var(--surface);
}
.steps {
  max-width: 840px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.step {
  flex: 1;
  text-align: center;
}
.step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
.step h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px;
}
.step p {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
  margin: 0;
}
.step-arrow {
  color: var(--faint);
  font-size: 1.4rem;
  padding-top: 6px;
  flex-shrink: 0;
}

/* ── Compare ── */
.compare-section {
  padding: 56px 24px;
  text-align: center;
}
.compare-section h2 {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
}
.compare-sub {
  color: var(--muted);
  font-size: 1rem;
  margin: 0 0 32px;
}
.compare-table-wrap {
  max-width: 580px;
  margin: 0 auto;
}
.compare-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
.compare-table th {
  padding: 10px 16px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 2px solid var(--border);
}
.compare-table th:first-child { color: var(--muted); }
.col-free { color: var(--success); text-align: center; }
.col-pro { color: var(--primary); text-align: center; }
.compare-table td {
  padding: 10px 16px;
  font-size: 0.92rem;
  color: var(--muted);
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
}
.yes { color: var(--success); font-weight: 700; text-align: center; }
.yes-pro { color: var(--primary); font-weight: 700; text-align: center; }
.dash { color: var(--faint); text-align: center; }

/* ── Promo ── */
.promo-section {
  padding: 0 24px 56px;
}
.promo-card {
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  padding: 28px 32px;
  background: rgba(76, 175, 80, 0.06);
  border: 1.5px solid rgba(76, 175, 80, 0.25);
  border-radius: 12px;
}
.promo-code {
  font-size: 1.6rem;
  font-weight: 800;
  color: #4caf50;
  letter-spacing: 1px;
  margin-bottom: 8px;
}
.promo-card p {
  color: var(--muted);
  font-size: 0.95rem;
  margin: 0 0 20px;
  line-height: 1.5;
}
.promo-card p strong { color: #4caf50; }
.promo-highlight { color: var(--text); font-weight: 700; }

/* ── Camera ── */
.camera-section {
  padding: 0 24px 56px;
}
.camera-card {
  max-width: 680px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 32px;
}
.camera-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 20px;
  text-align: center;
}
.camera-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.camera-option {
  padding: 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
}
.camera-option strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 4px;
}
.camera-price {
  display: block;
  font-size: 0.85rem;
  color: var(--faint);
  margin-bottom: 8px;
}
.camera-option p {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.5;
  margin: 0;
}
.camera-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 6px;
}
.camera-label.recommended {
  background: rgba(0, 173, 181, 0.15);
  color: var(--primary);
  border: 1px solid rgba(0, 173, 181, 0.3);
}
.camera-label.starter {
  background: rgba(245, 158, 11, 0.15);
  color: var(--warn);
  border: 1px solid rgba(245, 158, 11, 0.3);
}

/* ── Feedback ── */
.feedback-section {
  padding: 0 24px 56px;
}
.feedback-card {
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  padding: 28px 32px;
  background: rgba(245, 158, 11, 0.06);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 12px;
}
.feedback-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--warn);
  margin-bottom: 12px;
}
.feedback-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 10px;
}
.feedback-card p {
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0 0 16px;
}
.feedback-link {
  color: var(--warn);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.feedback-link:hover {
  text-decoration-style: solid;
}

/* ── Final CTA ── */
.final-cta {
  padding: 56px 24px 64px;
  text-align: center;
  background: linear-gradient(180deg, var(--bg) 0%, #1a2744 100%);
}
.final-cta h2 {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
}
.final-cta p {
  color: var(--muted);
  font-size: 1rem;
  margin: 0 0 24px;
}

/* ── Footer ── */
.footer {
  padding: 24px;
  text-align: center;
  border-top: 1px solid var(--border);
}
.footer p {
  font-size: 0.8rem;
  color: var(--faint);
  margin: 0;
}
.footer a {
  color: var(--faint);
  text-decoration: underline;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .hero { padding: 48px 20px 40px; }
  .hero h1 { font-size: 2rem; }
  .steps { flex-direction: column; gap: 24px; }
  .step-arrow { display: none; }
  .compare-section h2, .final-cta h2 { font-size: 1.4rem; }
  .camera-options { grid-template-columns: 1fr; }
  .btn-primary { width: 100%; justify-content: center; }
}
</style>
