<template>
  <div class="page">
    <div class="container">

      <!-- Hero -->
      <section class="hero">
        <div class="hero-eyebrow">Golf swing cameras for SwingNerds Vision</div>
        <h1>Golf swing cameras: a buying guide for sim bays</h1>
        <p class="hero-sub">Everything you need to pick the right swing cam for your sim setup. SwingNerds works with any USB camera, so start with what you have (laptop webcam, iPhone, $30 USB cam) and upgrade to a dedicated 90 to 240fps global-shutter swing camera around $100 when you are ready.</p>
      </section>

      <!-- Recommended cameras -->
      <section class="section">
        <h2>Recommended Cameras</h2>

        <div class="tip-box" style="margin-bottom: 20px;">
          <strong>Note:</strong> Higher FPS requires more lighting. Color needs more lighting than Monochrome.
        </div>

        <h3 class="subsection">Just Getting Started</h3>
        <p class="subsection-desc">Any USB Webcam or Laptop Camera. Works for swing detection and recording. Try the whole workflow before buying anything.</p>

        <h3 class="subsection">Color, 180fps (if you have good lighting)</h3>
        <div class="camera-link-row">
          <div class="cam-listing">
            <a href="https://amzn.to/4tm43b9" target="_blank" rel="noopener" class="cam-link top-pick">Kayeton 180fps Global Shutter (4-8 ft) <span class="src">Amazon</span></a>
            <button type="button" class="lowlight-badge" @click.stop="openLowlightPopup('cs')" aria-label="Low light upgrade info">Low Light Upgrade</button>
          </div>
        </div>

        <h3 class="subsection">Monochrome, 210fps (less light needed)</h3>
        <div class="camera-link-row">
          <a href="https://www.aliexpress.us/item/3256806204926888.html" target="_blank" rel="noopener" class="cam-link">Monochrome Global Shutter USB <span class="src">AliExpress</span></a>
        </div>

        <h3 class="subsection">Color, 120fps (good all-around)</h3>
        <div class="camera-link-row">
          <div class="cam-listing">
            <a href="https://amzn.to/4djhZ0M" target="_blank" rel="noopener" class="cam-link top-pick">Kayeton 120fps Global Shutter (4-6 ft) <span class="src">Amazon</span></a>
            <button type="button" class="lowlight-badge" @click.stop="openLowlightPopup('cs')" aria-label="Low light upgrade info">Low Light Upgrade</button>
          </div>
          <div class="cam-listing">
            <a href="https://amzn.to/3OamdNV" target="_blank" rel="noopener" class="cam-link top-pick">Kayeton 120fps Global Shutter (8-12 ft) <span class="src">Amazon</span></a>
            <button type="button" class="lowlight-badge" @click.stop="openLowlightPopup('cs')" aria-label="Low light upgrade info">Low Light Upgrade</button>
          </div>
        </div>

        <h3 class="subsection">Color, 90fps (budget)</h3>
        <div class="camera-link-row">
          <div class="cam-listing">
            <a href="https://a.co/d/04y8zqXT" target="_blank" rel="noopener" class="cam-link">ELP 90fps Global Shutter <span class="src">Amazon</span></a>
            <button type="button" class="lowlight-badge" @click.stop="openLowlightPopup('m12')" aria-label="Low light upgrade info">Low Light Upgrade</button>
          </div>
          <div class="cam-listing">
            <a href="https://amzn.to/40YBNPE" target="_blank" rel="noopener" class="cam-link">ELP 90fps Global Shutter <span class="src">Amazon</span></a>
            <button type="button" class="lowlight-badge" @click.stop="openLowlightPopup('m12')" aria-label="Low light upgrade info">Low Light Upgrade</button>
          </div>
          <div class="cam-listing">
            <a href="https://www.aliexpress.us/item/3256810605758804.html" target="_blank" rel="noopener" class="cam-link">Global Shutter 90fps USB <span class="src">AliExpress</span></a>
            <button type="button" class="lowlight-badge" @click.stop="openLowlightPopup('m12')" aria-label="Low light upgrade info">Low Light Upgrade</button>
          </div>
        </div>

        <div class="tip-box" style="margin-top: 20px;">
          <strong>Stock note:</strong> These cameras go in and out of stock. AliExpress often has the same cameras when Amazon is sold out.
        </div>
      </section>

      <!-- Color vs Monochrome -->
      <section class="section">
        <h2>Color vs Monochrome</h2>
        <p class="section-sub">The biggest decision is whether you need color. Here's the tradeoff.</p>

        <div class="comparison">
          <div class="compare-card">
            <h3>Color (RGB)</h3>
            <ul>
              <li><span class="pro">+</span> Full color video, looks natural</li>
              <li><span class="pro">+</span> Easier to see clothing, club, ground</li>
              <li><span class="con">-</span> Needs more light for high FPS</li>
              <li><span class="con">-</span> Bayer filter blocks ~2/3 of light</li>
            </ul>
            <p class="compare-verdict">Best for well-lit sim bays with overhead lights or bright LEDs.</p>
          </div>
          <div class="compare-card mono">
            <h3>Monochrome (B&W)</h3>
            <ul>
              <li><span class="pro">+</span> 2-3x better light sensitivity</li>
              <li><span class="pro">+</span> Higher FPS at same exposure</li>
              <li><span class="pro">+</span> Works great with invisible IR lighting</li>
              <li><span class="con">-</span> No color, grayscale only</li>
            </ul>
            <p class="compare-verdict">Best for dim bays, or if you want max FPS without blasting lights. Pair with IR LEDs for invisible lighting that won't affect your sim screen.</p>
          </div>
        </div>

        <div class="tip-box">
          <strong>Do I need color?</strong> For swing analysis, not really. You're looking at club path, body position, and ball contact, all clearly visible in monochrome. Color is nicer to watch but doesn't change the analysis.
        </div>
      </section>


      <!-- Lens guide -->
      <section class="section">
        <h2>Which Lens Do I Need?</h2>
        <p class="section-sub">The right lens depends on how far the camera is from the hitting area.</p>

        <table class="lens-table">
          <thead><tr><th>Lens</th><th>Distance</th><th>Best for</th></tr></thead>
          <tbody>
            <tr><td><strong>126&deg; / 2.1mm</strong></td><td>4-6 feet</td><td>Close-mount sim bays</td></tr>
            <tr><td><strong>110&deg; / 2.5mm</strong></td><td>6-8 feet</td><td>Most sim bays</td></tr>
            <tr><td><strong>90&deg; / 2.8mm</strong></td><td>8-10 feet</td><td>Larger bays</td></tr>
            <tr><td><strong>60&deg; / 3.6mm+</strong></td><td>10-15 feet</td><td>Far-mount, outdoor range</td></tr>
          </tbody>
        </table>
        <p class="tip-inline">Not sure? Start with a <strong>110&deg; / 2.5mm lens</strong>, it works well in most sim bay setups at 6-8 feet.</p>
      </section>

      <!-- Why global shutter -->
      <section class="section">
        <h2>Why Global Shutter?</h2>
        <p>Rolling shutter cameras read the image one row of pixels at a time. During a golf swing, the club moves faster than the camera can scan, causing the shaft to appear bent and the image to smear. A global shutter reads all pixels at the same instant, so the club and ball look exactly as they are, even at impact.</p>
        <p>Any USB webcam works for recording swings, but if you want sharp freeze-frames at impact, global shutter is the way to go.</p>
      </section>

      <!-- Already have a setup -->
      <section class="section">
        <div class="tip-box">
          <strong>Already set up for Kinovea or another swing analysis tool?</strong> Your existing camera works perfectly with SwingNerds Vision, just plug in and go. Any UVC-compatible camera will work.
        </div>
      </section>

      <!-- Help -->
      <section class="section help-section">
        <h2>Not Sure What to Get?</h2>
        <p>Reach out and we'll help you find the right camera for under $100, based on your setup, angle, and launch monitor.</p>
        <a href="mailto:support@swingnerds.com" class="help-link">support@swingnerds.com &rarr;</a>
      </section>

      <!-- CTA -->
      <section class="section cta-section">
        <router-link to="/vision" class="cta-btn">Download SwingNerds Vision, Free</router-link>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} SwingNerds &middot; <a href="/">Home</a> &middot; <a href="/vision">Download</a> &middot; <a href="mailto:support@swingnerds.com">Contact</a></p>
      </footer>

    </div>

    <!-- Low Light Upgrade popup -->
    <div v-if="activeLowlightPopup" class="lowlight-overlay" @click="closeLowlightPopup">
      <div class="lowlight-popup" @click.stop>
        <button type="button" class="lowlight-close" @click="closeLowlightPopup" aria-label="Close">&times;</button>
        <h3>Low Light Upgrade</h3>
        <p v-if="activeLowlightPopup === 'cs'">
          Want better low light performance in a dim bay? Swap the stock lens for a <strong>Tamron 3-8mm f/1.0 CS mount lens</strong> (~$31).
          <br><br>
          Buy on eBay <span class="lowlight-disclaimer">(third-party seller, not affiliated with SwingNerds)</span>: <a href="https://www.ebay.com/itm/175868943572" target="_blank" rel="noopener">ebay.com/itm/175868943572</a>
          <br><br>
          Questions? Email us at <a href="mailto:support@swingnerds.com">support@swingnerds.com</a>
        </p>
        <p v-else-if="activeLowlightPopup === 'm12'">
          Want better low light performance in a dim bay? Swap the stock lens for an <strong>M12 f/1.0 lens</strong> (~$25).
          <br><br>
          Buy on eBay <span class="lowlight-disclaimer">(third-party seller, not affiliated with SwingNerds)</span>: <a href="https://www.ebay.com/itm/155411872840" target="_blank" rel="noopener">ebay.com/itm/155411872840</a>
          <br><br>
          Questions? Email us at <a href="mailto:support@swingnerds.com">support@swingnerds.com</a>
        </p>
        <p class="lowlight-note">
          <strong>Note:</strong> Only recommended for dim or poorly lit bays. Well lit bays work great with the stock lens, you don't need this upgrade if your bay has good overhead lighting.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { setMeta } from '../services/seoMeta.js';

const activeLowlightPopup = ref(null); // null | 'cs' | 'm12'

function openLowlightPopup(type) {
  activeLowlightPopup.value = type;
}

function closeLowlightPopup() {
  activeLowlightPopup.value = null;
}

function handleEscape(e) {
  if (e.key === 'Escape') closeLowlightPopup();
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
  setMeta({
    title: 'Golf swing cameras: recommended USB swing cams for sim bays | SwingNerds',
    description:
      'A buying guide for golf swing cameras. USB swing cams from $30 to $130 that work with SwingNerds Vision. Frame rate, global shutter, color vs monochrome, and lighting tradeoffs explained.',
    path: '/cameras',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Golf swing cameras: recommended USB swing cams for sim bays',
      description:
        'A buying guide for golf swing cameras. USB swing cams from $30 to $130 that work with SwingNerds Vision.',
      author: { '@type': 'Organization', name: 'SwingNerds Team' },
      publisher: { '@type': 'Organization', name: 'SwingNerds', logo: { '@type': 'ImageObject', url: 'https://swingnerds.com/swingnerds-logo-white.png' } },
    },
  });
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
.page {
  --bg: var(--mk-bg-dark);
  --surface: var(--mk-bg-dark-alt);
  --border: var(--mk-border-dark);
  --text: var(--mk-text-on-dark);
  --muted: var(--mk-text-3);
  --faint: #64748b;
  --primary: var(--mk-accent);
  --success: var(--mk-green);
  --warn: #f59e0b;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: var(--mk-font);
}
.container { max-width: 800px; margin: 0 auto; padding: 0 24px; }

/* Header */
.header { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--border); margin-bottom: 40px; }
.logo-section { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.header-logo { width: 32px; height: 32px; }
.logo-text { font-weight: 700; font-size: 1.1rem; }
.header-nav { display: flex; gap: 16px; }
.nav-link { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; }
.nav-link:hover { color: var(--text); }

/* Hero */
.hero { text-align: center; padding: 64px 0 0; margin-bottom: 48px; }
.hero h1 { margin: 0 0 12px; color: var(--text); }
.hero-eyebrow {
  display: inline-block;
  background: rgba(6, 182, 212, 0.15);
  color: #06b6d4;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.hero-sub { font-size: 1.1rem; color: var(--muted); line-height: 1.6; margin: 0; }

/* Sections */
.section { margin-bottom: 48px; }
.section h2 { font-size: 1.5rem; font-weight: 700; margin: 0 0 8px; }
.section-sub { color: var(--muted); font-size: 0.95rem; margin: 0 0 20px; }
.subsection { font-size: 1rem; font-weight: 600; color: var(--muted); margin: 20px 0 8px; }
.subsection:first-of-type { margin-top: 0; }

.src { font-size: 0.7rem; font-weight: 600; color: var(--muted); background: var(--border); padding: 1px 5px; border-radius: 3px; margin-left: 4px; }
.subsection-desc { font-size: 0.9rem; color: var(--muted); margin: 0 0 16px; }

/* Comparison */
.comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.compare-card { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 20px; }
.compare-card.mono { border-color: rgba(245, 158, 11, 0.3); }
.compare-card h3 { font-size: 1.1rem; margin: 0 0 12px; }
.compare-card ul { list-style: none; padding: 0; margin: 0 0 12px; }
.compare-card li { font-size: 0.9rem; color: var(--muted); padding: 4px 0; }
.pro { color: var(--success); font-weight: 700; margin-right: 6px; }
.con { color: #ef4444; font-weight: 700; margin-right: 6px; }
.compare-verdict { font-size: 0.85rem; color: var(--faint); margin: 0; font-style: italic; }

/* Tip box */
.tip-box { background: rgba(6, 182, 212, 0.06); border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 10px; padding: 16px 20px; font-size: 0.92rem; color: var(--muted); line-height: 1.6; }
.tip-box strong { color: var(--text); }

/* Camera links */
.camera-link-row { display: flex; flex-direction: column; gap: 6px; margin-bottom: 8px; }
.cam-link { color: var(--primary); font-size: 0.9rem; text-decoration: none; padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; display: block; }
.cam-link:hover { border-color: var(--primary); }
.cam-link.top-pick { border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.04); }
.stock-note { font-size: 0.82rem; color: var(--faint); margin-top: 12px; }

/* Camera listing row: link + optional low-light badge */
.cam-listing { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.cam-listing .cam-link { flex: 1; min-width: 0; }

.lowlight-badge {
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: var(--warn);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, border-color 0.15s;
  flex-shrink: 0;
}
.lowlight-badge:hover,
.lowlight-badge:focus {
  background: rgba(245, 158, 11, 0.16);
  border-color: rgba(245, 158, 11, 0.5);
  outline: none;
}

/* Low light popup */
.lowlight-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}
.lowlight-popup {
  position: relative;
  max-width: 440px;
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px 24px 20px;
  color: var(--text);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}
.lowlight-popup h3 {
  margin: 0 0 12px;
  font-size: 1.1rem;
  color: var(--warn);
}
.lowlight-popup p {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  margin: 0 0 14px;
}
.lowlight-popup p strong { color: var(--text); }
.lowlight-popup a {
  color: var(--primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  word-break: break-all;
}
.lowlight-popup a:hover { color: #0891b2; }
.lowlight-disclaimer { font-size: 0.75rem; color: var(--faint); font-style: italic; }
.lowlight-popup .lowlight-note {
  font-size: 0.82rem;
  color: var(--faint);
  background: rgba(0, 0, 0, 0.2);
  border-left: 3px solid var(--warn);
  padding: 10px 12px;
  border-radius: 4px;
  margin: 0;
}
.lowlight-close {
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  padding: 4px 8px;
}
.lowlight-close:hover { color: var(--text); }

/* Lens table */
.lens-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
.lens-table th, .lens-table td { text-align: left; padding: 10px 14px; font-size: 0.9rem; border-bottom: 1px solid var(--border); }
.lens-table th { font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--faint); border-bottom: 2px solid var(--border); }
.lens-table td { color: var(--muted); }
.lens-table td strong { color: var(--text); }
.tip-inline { font-size: 0.88rem; color: var(--muted); }
.tip-inline strong { color: var(--primary); }

/* Section text */
.section p { font-size: 0.95rem; color: var(--muted); line-height: 1.6; margin: 0 0 12px; }

/* Help */
.help-section { text-align: center; }
.help-link { color: var(--primary); font-weight: 600; font-size: 1rem; text-decoration: underline; text-underline-offset: 3px; }

/* CTA */
.cta-section { text-align: center; padding: 32px 0; }
.cta-btn { display: inline-block; background: var(--primary); color: #fff; font-size: 1.05rem; font-weight: 700; padding: 14px 32px; border-radius: 10px; text-decoration: none; transition: background 0.15s; }
.cta-btn:hover { background: #0891b2; }

/* Footer */
.footer { padding: 24px 0; text-align: center; border-top: 1px solid var(--border); }
.footer p { font-size: 0.8rem; color: var(--faint); margin: 0; }
.footer a { color: var(--faint); text-decoration: underline; }

/* Mobile */
@media (max-width: 768px) {
  .hero h1 { font-size: 1.8rem; }
.comparison { grid-template-columns: 1fr; }
}
</style>
