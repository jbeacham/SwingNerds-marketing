<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}

function handleBackdropClick(e) {
  if (e.target === e.currentTarget) closeModal();
}
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click="handleBackdropClick">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>What Camera Do I Need?</h3>
        <button class="close-btn" @click="closeModal" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <p class="section-subtitle">Start with what you have. Upgrade when you're ready.</p>

        <div class="camera-cards">
          <div class="camera-card highlight">
            <div class="camera-card-header">
              <span class="camera-badge recommended">Recommended</span>
              <h3>Global Shutter USB Camera</h3>
              <p class="camera-price">~$50-$100</p>
            </div>
            <p>
              A global shutter captures every pixel at the same instant, so fast
              club movement and the ball at impact appear sharp and stable - no wobble,
              no jello, no skew. Look for <strong>90+ fps</strong> and a global shutter sensor.
            </p>
            <div class="camera-links">
              <span class="camera-links-label">Cameras we use:</span>
              <a href="https://amzn.to/4tm43b9" target="_blank" rel="noopener" class="camera-buy-link camera-top-pick">Kayeton 180fps Global Shutter (4-8 ft) <span class="link-source">Amazon</span></a>
              <span class="camera-links-subnote">Best quality - needs good sim bay lighting for 180fps</span>
              <a href="https://amzn.to/4djhZ0M" target="_blank" rel="noopener" class="camera-buy-link camera-top-pick">Kayeton 120fps Global Shutter (4-6 ft) <span class="link-source">Amazon</span></a>
              <a href="https://amzn.to/3OamdNV" target="_blank" rel="noopener" class="camera-buy-link camera-top-pick">Kayeton 120fps Global Shutter (8-12 ft) <span class="link-source">Amazon</span></a>
              <span class="camera-links-divider">Also good (90fps):</span>
              <a href="https://a.co/d/04y8zqXT" target="_blank" rel="noopener" class="camera-buy-link">ELP 90fps Global Shutter <span class="link-source">Amazon</span></a>
              <a href="https://amzn.to/40YBNPE" target="_blank" rel="noopener" class="camera-buy-link">ELP 90fps Global Shutter <span class="link-source">Amazon</span></a>
              <a href="https://www.aliexpress.us/item/3256810605758804.html" target="_blank" rel="noopener" class="camera-buy-link">Global Shutter 90fps USB <span class="link-source">AliExpress</span></a>
              <span class="camera-links-note">These go in and out of stock. AliExpress often has the same cameras when Amazon is sold out.</span>
              <span class="camera-links-divider" style="margin-top: 10px;">Monochrome (higher FPS, less light needed):</span>
              <a href="https://www.aliexpress.us/item/3256806204926888.html" target="_blank" rel="noopener" class="camera-buy-link">Monochrome Global Shutter USB <span class="link-source">AliExpress</span></a>
              <span class="camera-links-subnote">No color - but 2-3x better light sensitivity. Pair with IR lighting for an invisible light source that won't affect your sim screen. Great for high FPS in dim bays.</span>
            </div>
            <div class="camera-specs">
              <div class="spec"><span class="spec-label">Frame rate</span><span class="spec-value">90 fps or higher</span></div>
              <div class="spec"><span class="spec-label">Shutter type</span><span class="spec-value">Global shutter</span></div>
              <div class="spec"><span class="spec-label">Interface</span><span class="spec-value">USB (UVC)</span></div>
              <div class="spec"><span class="spec-label">Resolution</span><span class="spec-value">1080p</span></div>
            </div>
          </div>

          <div class="camera-cards-right">
            <div class="camera-card">
              <div class="camera-card-header">
                <h3>Standard USB Webcam</h3>
                <p class="camera-price">Any USB webcam</p>
              </div>
              <p>
                Works fine for swing detection and clip saving. Rolling shutter webcams
                can show some distortion on the club and ball at impact, but are perfectly
                usable for full-swing shape and body movement analysis.
              </p>
              <div class="camera-specs">
                <div class="spec"><span class="spec-label">Frame rate</span><span class="spec-value">30-60 fps</span></div>
                <div class="spec"><span class="spec-label">Shutter type</span><span class="spec-value">Rolling shutter (most webcams)</span></div>
                <div class="spec"><span class="spec-label">Interface</span><span class="spec-value">USB (UVC)</span></div>
              </div>
            </div>

            <div class="camera-card laptop-card">
              <div class="camera-card-header">
                <span class="camera-badge starter">Just Getting Started</span>
                <h3>Your Laptop's Built-in Camera</h3>
                <p class="camera-price">No cost - use what you have</p>
              </div>
              <p>
                You can even use your laptop's built-in front camera as a face-on angle to
                get started today. It won't have a high frame rate or global shutter, but it's
                a great way to try the workflow before committing to any hardware.
              </p>
              <div class="camera-specs">
                <div class="spec"><span class="spec-label">Frame rate</span><span class="spec-value">Typically 30 fps</span></div>
                <div class="spec"><span class="spec-label">Best for</span><span class="spec-value">Face-on angle, getting started</span></div>
              </div>
            </div>
          </div>
        </div>

        <div class="shutter-explainer">
          <h4>Why does global shutter matter?</h4>
          <p>
            Rolling shutter cameras read the image one row of pixels at a time from top to bottom.
            During a golf swing, the club can travel faster than the camera can complete a single frame -
            causing the shaft to appear bent or the image to smear. A global shutter reads all pixels
            simultaneously, so the club and ball look exactly as they are, even at impact.
          </p>
        </div>

        <div class="lens-guide">
          <h4>Which lens do I need?</h4>
          <p>The right lens depends on how far the camera is from the hitting area. Wider lenses are for closer mounting, narrower lenses for farther away.</p>
          <div class="lens-table">
            <div class="lens-row lens-row-header">
              <span class="lens-col">Lens</span>
              <span class="lens-col">Distance</span>
              <span class="lens-col">Best for</span>
            </div>
            <div class="lens-row">
              <span class="lens-col"><strong>126&deg; / 2.1mm</strong></span>
              <span class="lens-col">4-6 feet</span>
              <span class="lens-col">Close-mount sim bays</span>
            </div>
            <div class="lens-row">
              <span class="lens-col"><strong>110&deg; / 2.5mm</strong></span>
              <span class="lens-col">6-8 feet</span>
              <span class="lens-col">Most sim bays</span>
            </div>
            <div class="lens-row">
              <span class="lens-col"><strong>90&deg; / 2.8mm</strong></span>
              <span class="lens-col">8-10 feet</span>
              <span class="lens-col">Larger bays</span>
            </div>
            <div class="lens-row">
              <span class="lens-col"><strong>60&deg; / 3.6mm+</strong></span>
              <span class="lens-col">10-15 feet</span>
              <span class="lens-col">Far-mount, outdoor range</span>
            </div>
          </div>
          <p class="lens-tip">Not sure? Start with a <strong>110&deg; / 2.5mm lens</strong> - it works well in most sim bay setups at 6-8 feet.</p>
        </div>

        <div class="kinovea-callout">
          <div class="kinovea-callout-icon"></div>
          <div class="kinovea-callout-text">
            <strong>Already set up for Kinovea or another swing analysis tool?</strong>
            Your existing camera setup works perfectly with SwingNerds Vision - just plug in and go.
            Any UVC-compatible camera that works with Kinovea, Coach's Eye, or similar software
            will work here too.
          </div>
        </div>

        <div class="camera-help-callout">
          <div class="camera-help-icon"></div>
          <div class="camera-help-text">
            <strong>Not sure which camera to get?</strong>
            Reach out and we'll help you find the right one for under $100 - based on your setup, angle, and launch monitor.
          </div>
          <a href="mailto:support@swingnerds.com" class="camera-help-link">Get a recommendation &#8594;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
}

.modal-content {
  background-color: var(--surface, #1a1a2e);
  border-radius: 16px;
  max-width: 820px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--border, #2a2a3e);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  border-bottom: 1px solid var(--border, #2a2a3e);
  position: sticky;
  top: 0;
  background: var(--surface, #1a1a2e);
  z-index: 1;
}

.modal-header h3 {
  margin: 0;
  color: var(--text, #e0e0e0);
  font-size: 1.3rem;
  font-weight: 700;
}

.close-btn {
  background: none;
  border: none;
  color: var(--muted, #888);
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.15s;
}
.close-btn:hover { color: var(--text, #e0e0e0); }

.modal-body {
  padding: 28px;
}

.section-subtitle {
  color: var(--muted, #888);
  font-size: 1rem;
  margin: 0 0 24px;
}

.camera-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.camera-cards-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.camera-card {
  background: var(--surface, #1a1a2e);
  border: 1px solid var(--border, #2a2a3e);
  border-radius: 12px;
  padding: 28px;
}

.camera-card.highlight {
  border-color: var(--primary, #06b6d4);
  box-shadow: 0 0 0 1px var(--primary, #06b6d4), 0 4px 24px var(--primary-glow, rgba(6, 182, 212, 0.15));
}

.camera-card.laptop-card {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.04);
}

.camera-card-header { margin-bottom: 16px; }

.camera-badge {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 8px;
  display: inline-block;
}

.camera-badge.recommended {
  background: rgba(6, 182, 212, 0.15);
  color: var(--primary, #06b6d4);
  border: 1px solid rgba(6, 182, 212, 0.3);
}

.camera-badge.starter {
  background: rgba(245, 158, 11, 0.15);
  color: var(--warn, #f59e0b);
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.camera-card h3 { font-size: 1.1rem; margin: 8px 0 4px; }

.camera-price { color: var(--muted, #888); font-size: 0.9rem; margin: 0 0 12px; }

.camera-card p { color: var(--muted, #888); font-size: 0.92rem; line-height: 1.6; margin-bottom: 12px; }

.camera-specs {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-top: 1px solid var(--border, #2a2a3e);
  padding-top: 16px;
}

.spec {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}

.spec-label { color: var(--faint, #666); }
.spec-value { color: var(--text, #e0e0e0); font-weight: 500; }

.shutter-explainer {
  background: var(--surface, #1a1a2e);
  border: 1px solid var(--border, #2a2a3e);
  border-left: 3px solid var(--primary, #06b6d4);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 20px;
}

.shutter-explainer h4 { margin: 0 0 8px; font-size: 0.95rem; }
.shutter-explainer p { color: var(--muted, #888); font-size: 0.9rem; line-height: 1.6; margin: 0; }

.kinovea-callout {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: rgba(6, 182, 212, 0.06);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 18px 24px;
  margin-bottom: 16px;
}

.kinovea-callout-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 1px; }

.kinovea-callout-text {
  font-size: 0.92rem;
  color: var(--muted, #888);
  line-height: 1.6;
}

.kinovea-callout-text strong { color: var(--text, #e0e0e0); }

.camera-help-callout {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface, #1a1a2e);
  border: 1px solid var(--border, #2a2a3e);
  border-radius: 10px;
  padding: 18px 24px;
  flex-wrap: wrap;
}

.camera-help-icon { font-size: 1.4rem; flex-shrink: 0; }

.camera-help-text {
  flex: 1;
  font-size: 0.92rem;
  color: var(--muted, #888);
  line-height: 1.5;
}

.camera-help-text strong { color: var(--text, #e0e0e0); }

.camera-help-link {
  color: var(--primary, #06b6d4);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  white-space: nowrap;
}

.camera-help-link:hover { text-decoration: underline; }

/* Camera buy links */
.camera-links {
  margin-bottom: 12px;
}
.camera-links-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text, #e0e0e0);
  margin-bottom: 8px;
}
.camera-buy-link {
  display: block;
  font-size: 0.85rem;
  color: var(--primary, #06b6d4);
  text-decoration: none;
  padding: 6px 0;
  border-bottom: 1px solid var(--border, rgba(42, 42, 62, 0.5));
}
.camera-buy-link:hover {
  text-decoration: underline;
}
.link-source {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--muted, #888);
  background: var(--border, rgba(42, 42, 62, 0.8));
  padding: 1px 6px;
  border-radius: 3px;
  margin-left: 6px;
  vertical-align: middle;
}
.camera-top-pick {
  font-weight: 600;
  color: #10b981 !important;
  background: rgba(16, 185, 129, 0.06);
  padding: 8px 10px;
  border-radius: 6px;
  border-bottom: none;
}
.camera-links-subnote {
  display: block;
  font-size: 0.72rem;
  color: var(--faint, #666);
  font-style: italic;
  margin-bottom: 6px;
}
.camera-links-divider {
  display: block;
  font-size: 0.75rem;
  color: var(--faint, #666);
  margin-top: 8px;
  margin-bottom: 2px;
}
.camera-links-note {
  display: block;
  font-size: 0.78rem;
  color: var(--faint, #666);
  margin-top: 8px;
  line-height: 1.5;
}

/* Lens guide */
.lens-guide {
  background: var(--surface, #1a1a2e);
  border: 1px solid var(--border, #2a2a3e);
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 20px;
}
.lens-guide h4 {
  margin: 0 0 8px;
  font-size: 0.95rem;
}
.lens-guide > p {
  color: var(--muted, #888);
  font-size: 0.88rem;
  line-height: 1.5;
  margin: 0 0 14px;
}
.lens-table {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 12px;
}
.lens-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border, rgba(42, 42, 62, 0.5));
  font-size: 0.85rem;
  color: var(--muted, #888);
}
.lens-row:last-child { border-bottom: none; }
.lens-row-header {
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--faint, #666);
  border-bottom: 2px solid var(--border, #2a2a3e);
}
.lens-row strong { color: var(--text, #e0e0e0); }
.lens-tip {
  font-size: 0.82rem;
  color: var(--muted, #888);
  margin: 0;
  line-height: 1.5;
}
.lens-tip strong { color: var(--primary, #06b6d4); }

@media (max-width: 768px) {
  .camera-cards { grid-template-columns: 1fr; }
  .modal-content { max-width: 100%; }
  .lens-row { grid-template-columns: 1fr 1fr; }
  .lens-row-header .lens-col:last-child,
  .lens-row .lens-col:last-child { display: none; }
}
</style>
