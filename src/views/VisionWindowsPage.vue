<template>
  <div class="page">
    <div class="container">

      <!-- Alpha banner -->
      <div class="alpha-banner">
        <div class="alpha-banner-inner">
          <span class="alpha-banner-badge">Early Alpha</span>
          <span class="alpha-banner-text">
            SwingNerds Vision is in early alpha - your feedback directly shapes what we build next.
          </span>
          <a href="mailto:support@swingnerds.com" class="alpha-banner-link">Send feedback →</a>
        </div>
      </div>

      <!-- Header -->
      <header class="header">
        <div class="logo-section" @click="goHome">
          <img src="../assets/SwingNerdsLogo.png" alt="SwingNerds Logo" class="header-logo" />
          <span class="logo-text">SwingNerds</span>
        </div>
        <nav class="header-nav">
          <button @click="goToPricing" class="nav-link">Pricing</button>
          <button @click="goToSignIn" class="nav-link sign-in">Sign In</button>
        </nav>
      </header>

      <!-- Hero -->
      <section class="hero">
        <div class="hero-badge">Early Alpha · Windows</div>
        <h1>SwingNerds Vision</h1>
        <p class="hero-subtitle">All your shot data. All your swing videos. Automatically in one place.</p>
        <p class="hero-desc">
          Mount <a href="#" class="camera-link" @click.prevent="showCameraModal = true">any USB cameras</a> in your sim bay once and let SwingNerds Vision automatically capture every swing -
          session after session, without touching anything. Clips sync to your account and pair to your
          launch monitor data, so every shot has both the video and the numbers.
          Then compare any two swings side by side, synced to the same frame.
        </p>
        <div class="hero-cta">
          <a :href="installerUrl" target="_blank" class="cta-btn primary" @click="onDownloadClick">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download for Windows - Free
          </a>
          <a href="#" class="cta-btn outline" @click.prevent="goToSignIn">Sign In / Create Account</a>
          <a href="https://testflight.apple.com/join/Dc5pv4PD" target="_blank" class="cta-btn outline">Download iOS Beta</a>
        </div>
        <p class="hero-note">Windows 10/11 · 64-bit · Auto-updates · iOS via TestFlight</p>
        <div class="promo-banner">
          <span class="promo-code">BETA30</span> for 30% off any subscription
        </div>
      </section>

      <!-- Core value prop -->
      <section class="value-prop">
        <div class="value-grid">
          <div class="value-item">
            <div class="value-icon">🎥</div>
            <h3>Auto-capture every swing</h3>
            <p>Sound + motion detection triggers a clip on every shot in your sim bay. Mount once - runs every session automatically.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🔗</div>
            <h3>Paired to your shot data</h3>
            <p>Clips upload automatically and match to your GSPro, Uneekor, Rapsodo, or Square Golf data by timestamp.</p>
          </div>
          <div class="value-item value-item-highlight">
            <div class="value-icon">⚡</div>
            <h3>Compare side by side</h3>
            <p>Open any two shots in SwingNerds and compare the videos synchronized frame by frame - alongside all the numbers.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">📱</div>
            <h3>Works with the iOS app too</h3>
            <p>Swings recorded on iPhone pair with your data the same way - use one device or both, however works best for your setup.</p>
          </div>
        </div>
      </section>

      <!-- Free callout -->
      <section class="free-callout">
        <div class="free-card">
          <div class="free-headline">
            <span class="free-badge">FREE</span>
            <h2>SwingNerds Vision is free to download and use.</h2>
          </div>
          <p>
            Record and save swing clips locally with no subscription required.
            A <strong>SwingNerds Pro subscription</strong> (7-day free trial, no credit card)
            unlocks cloud upload, automatic shot pairing, and the full analytics suite.
          </p>
          <div class="free-comparison">
            <div class="compare-col">
              <div class="compare-heading free">Free</div>
              <ul>
                <li>✓ Automatic swing detection</li>
                <li>✓ Record 1 or 2 <a href="#" class="camera-link" @click.prevent="showCameraModal = true">USB cameras</a></li>
                <li>✓ Save clips locally</li>
                <li>✓ Adjust exposure, gain, FPS</li>
                <li>✓ Club detection (alpha)</li>
              </ul>
            </div>
            <div class="compare-col">
              <div class="compare-heading pro">Pro · 7-day free trial</div>
              <ul>
                <li>✓ Everything in Free</li>
                <li>✓ Upload clips to the cloud</li>
                <li>✓ Auto-pair videos to shot data</li>
                <li>✓ Side-by-side swing comparison</li>
                <li>✓ AI swing analysis</li>
                <li>✓ Full analytics dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- The complete loop -->
      <section class="loop-section">
        <div class="loop-label">The Complete Workflow</div>
        <h2>Mount once. Every session runs itself.</h2>
        <p class="section-subtitle">
          SwingNerds Vision closes the loop between video and data - automatically, every time you play.
        </p>
        <div class="loop-steps">
          <div class="loop-step">
            <div class="loop-step-num">1</div>
            <div class="loop-step-body">
              <h3>Mount <a href="#" class="camera-link" @click.prevent="showCameraModal = true">any USB cameras</a> in your sim bay</h3>
              <p>Set up your cameras once - down-the-line, face-on, or both. Launch SwingNerds Vision, fire up GSPro or your sim software, and play. Every ball strike triggers a clip automatically. You don't touch anything between shots.</p>
            </div>
          </div>
          <div class="loop-connector">→</div>
          <div class="loop-step">
            <div class="loop-step-num">2</div>
            <div class="loop-step-body">
              <h3>Import your shot data</h3>
              <p>Connect your launch monitor. <strong>GSPro syncs automatically in real time</strong> (via the Windows app), Uneekor and Rapsodo sync via our cloud integrations, and Square Golf supports CSV upload after your session.</p>
            </div>
          </div>
          <div class="loop-connector">→</div>
          <div class="loop-step">
            <div class="loop-step-num">3</div>
            <div class="loop-step-body">
              <h3>Review and compare later</h3>
              <p>Pull up SwingNerds that evening. Every swing video is paired to its shot data - carry, ball speed, spin, everything. Compare any two shots side by side, synced to the same frame.</p>
            </div>
          </div>
        </div>
        <!-- App screenshot -->
        <div class="app-screenshot-row">
          <div class="phone-mockup">
            <img :src="'/SwingNerds_screenshot_shotcomparison.PNG'" alt="SwingNerds iOS app - swing comparison" class="phone-screen" />
          </div>
          <div class="screenshot-caption">
            <h3>Review your swings paired with shot data - anytime, anywhere.</h3>
            <p>
              After each sim session, every swing video is automatically paired with its shot data in SwingNerds.
              Open the iOS or web app to compare any two shots side by side - videos synced frame by frame,
              carry and ball speed right there alongside them.
            </p>
          </div>
        </div>

        <div class="loop-callout">
          <p>
            This is the workflow serious sim golfers have wanted for years - not just video, not just data, but
            <strong>both together, automatically, every session in your bay.</strong>
          </p>
          <a :href="installerUrl" target="_blank" class="cta-btn primary" @click="onDownloadClick">Try it today - Free download</a>
        </div>
      </section>

      <!-- Camera recommendation -->
      <section class="cameras-section">
        <h2>What Camera Do I Need?</h2>
        <p class="section-subtitle">
          Start with what you have. Upgrade when you're ready.
        </p>

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
            <div class="camera-buy-links">
              <span class="buy-links-label">Cameras we use:</span>
              <a href="https://amzn.to/4tm43b9" target="_blank" rel="noopener" class="top-pick">Kayeton 180fps Global Shutter (4-8 ft) <span class="buy-source">Amazon</span></a>
              <span class="buy-links-subnote">Best quality - needs good sim bay lighting for 180fps</span>
              <a href="https://amzn.to/4djhZ0M" target="_blank" rel="noopener" class="top-pick">Kayeton 120fps Global Shutter (4-6 ft) <span class="buy-source">Amazon</span></a>
              <a href="https://amzn.to/3OamdNV" target="_blank" rel="noopener" class="top-pick">Kayeton 120fps Global Shutter (8-12 ft) <span class="buy-source">Amazon</span></a>
              <span class="buy-links-divider">Also good (90fps):</span>
              <a href="https://a.co/d/04y8zqXT" target="_blank" rel="noopener">ELP 90fps Global Shutter <span class="buy-source">Amazon</span></a>
              <a href="https://amzn.to/40YBNPE" target="_blank" rel="noopener">ELP 90fps Global Shutter <span class="buy-source">Amazon</span></a>
              <a href="https://www.aliexpress.us/item/3256810605758804.html" target="_blank" rel="noopener">Global Shutter 90fps USB <span class="buy-source">AliExpress</span></a>
              <p class="buy-note">These go in and out of stock. AliExpress often has the same cameras when Amazon is sold out.</p>
              <span class="buy-links-divider" style="margin-top: 10px;">Monochrome (higher FPS, less light needed):</span>
              <a href="https://www.aliexpress.us/item/3256806204926888.html" target="_blank" rel="noopener">Monochrome Global Shutter USB <span class="buy-source">AliExpress</span></a>
              <span class="buy-links-subnote">No color - but 2-3x better light sensitivity. Pair with IR lighting for an invisible light source. Great for high FPS in dim bays.</span>
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

        <!-- Lens distance guide -->
        <div class="lens-guide">
          <h4>Which lens do I need?</h4>
          <p>The right lens depends on how far the camera is from the hitting area.</p>
          <table class="lens-table">
            <thead><tr class="lens-header"><th>Lens</th><th>Distance</th><th>Best for</th></tr></thead>
            <tbody>
              <tr><td><strong>126&deg; / 2.1mm</strong></td><td>4-6 feet</td><td>Close-mount sim bays</td></tr>
              <tr><td><strong>110&deg; / 2.5mm</strong></td><td>6-8 feet</td><td>Most sim bays</td></tr>
              <tr><td><strong>90&deg; / 2.8mm</strong></td><td>8-10 feet</td><td>Larger bays</td></tr>
              <tr><td><strong>60&deg; / 3.6mm+</strong></td><td>10-15 feet</td><td>Far-mount, outdoor range</td></tr>
            </tbody>
          </table>
          <p class="lens-tip">Not sure? Start with a <strong>110&deg; / 2.5mm lens</strong> - it works well in most sim bay setups at 6-8 feet.</p>
        </div>

        <!-- Kinovea callout -->
        <div class="kinovea-callout">
          <div class="kinovea-callout-icon">🎯</div>
          <div class="kinovea-callout-text">
            <strong>Already set up for Kinovea or another swing analysis tool?</strong>
            Your existing camera setup works perfectly with SwingNerds Vision - just plug in and go.
            Any UVC-compatible camera that works with Kinovea, Coach's Eye, or similar software
            will work here too.
          </div>
        </div>

        <div class="camera-help-callout">
          <div class="camera-help-icon">💬</div>
          <div class="camera-help-text">
            <strong>Not sure which camera to get?</strong>
            Reach out and we'll help you find the right one for under $100 - based on your setup, angle, and launch monitor.
          </div>
          <a href="mailto:support@swingnerds.com" class="camera-help-link">Get a recommendation →</a>
        </div>
      </section>

      <!-- Camera angles -->
      <section class="angles-section">
        <h2>Camera Angles</h2>
        <p class="section-subtitle">Use one camera or two. Each angle reveals different things about your swing.</p>
        <div class="angles-grid">
          <div class="angle-card">
            <div class="angle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v6"/><path d="M9 10l3 3 3-3"/><path d="M9 20l3-4 3 4"/></svg>
            </div>
            <h3>Down the Line</h3>
            <p class="angle-position">Camera positioned <strong>behind you</strong>, pointing toward the target</p>
            <ul class="angle-uses">
              <li>Club path and face angle at impact</li>
              <li>Swing plane - on plane, over the top, under</li>
              <li>Shaft lean at address and impact</li>
              <li>Ball flight relationship to swing direction</li>
              <li>Alignment and setup position</li>
            </ul>
          </div>
          <div class="angle-card">
            <div class="angle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v6"/><path d="M8 10h8"/><path d="M9 20l3-4 3 4"/></svg>
            </div>
            <h3>Face On</h3>
            <p class="angle-position">Camera positioned <strong>in front of or to the side of you</strong>, perpendicular to the target line</p>
            <ul class="angle-uses">
              <li>Weight shift and lateral movement</li>
              <li>Hip and shoulder rotation</li>
              <li>Spine angle and posture through impact</li>
              <li>Head position and staying behind the ball</li>
              <li>Extension and follow-through</li>
            </ul>
          </div>
          <div class="angle-card">
            <div class="angle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            </div>
            <h3>Impact</h3>
            <p class="angle-position">Camera pointed directly at the <strong>impact zone</strong></p>
            <ul class="angle-uses">
              <li>Ball compression and face contact</li>
              <li>Shaft flex at impact</li>
              <li>Works well paired with Uneekor Impact Vision</li>
            </ul>
          </div>
        </div>
        <div class="angles-tip">
          <strong>Tip:</strong> The most useful combination for most golfers is
          <strong>down the line + face on</strong>. You get a complete picture of both
          swing path/plane and body mechanics in one session.
        </div>
      </section>

      <!-- How it works -->
      <section class="how-section">
        <h2>How It Works</h2>
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <h3>Mount <a href="#" class="camera-link" @click.prevent="showCameraModal = true">any USB cameras</a> in your sim bay</h3>
              <p>
                Position 1 or 2 cameras in your sim bay - down-the-line, face-on, or both. Select them in the app
                and assign each one a camera angle. Adjust exposure, gain, and FPS once and you're set for every session.
                You can also use your laptop's built-in camera as a face-on angle to get started today.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <h3>Fire up your sim and play</h3>
              <p>
                Launch SwingNerds Vision, hit "Start Session," then open GSPro or your sim software and start playing.
                The app listens for the ball strike sound and confirms it with motion detection - each swing triggers
                a clip automatically. You don't touch anything between shots.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <h3>Clips are saved and uploaded</h3>
              <p>
                Each clip is encoded to H.264 and saved locally.
                With an active Pro subscription, clips upload automatically
                to the cloud in the background while you keep hitting.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">4</div>
            <div class="step-body">
              <h3>Compare swings alongside your data</h3>
              <p>
                Uploaded clips are automatically matched to your shot data by timestamp.
                Open any shot in SwingNerds and your swing video is right there -
                alongside carry distance, ball speed, spin, and every other number from
                GSPro, Uneekor, Square Golf, or Rapsodo. Select two shots and compare
                them side by side with synchronized playback.
              </p>
            </div>
          </div>
        </div>
        <div class="integrations">
          <p class="integrations-label">Works with your launch monitor data from</p>
          <div class="integrations-list">
            <span class="integration-chip">GSPro</span>
            <span class="integration-chip">Uneekor</span>
            <span class="integration-chip">Rapsodo</span>
            <span class="integration-chip">Square Golf</span>
            <span class="integration-chip">CSV Upload</span>
          </div>
        </div>
      </section>

      <!-- Requirements -->
      <section class="requirements-section">
        <h2>Requirements</h2>
        <div class="requirements-grid">
          <div class="req-item">
            <div class="req-icon">🖥️</div>
            <h4>Windows 10 or 11</h4>
            <p>64-bit. Built on .NET 8.</p>
          </div>
          <div class="req-item">
            <div class="req-icon">📷</div>
            <h4><a href="#" class="camera-link" @click.prevent="showCameraModal = true">Any USB Camera</a></h4>
            <p>USB webcam, global shutter camera, or your laptop's built-in camera. Global shutter recommended for best impact footage.</p>
          </div>
          <div class="req-item">
            <div class="req-icon">🎤</div>
            <h4>Microphone</h4>
            <p>Any microphone - a simple USB mic or headset works great for impact detection.</p>
          </div>
          <div class="req-item">
            <div class="req-icon">🌐</div>
            <h4>Internet (for cloud features)</h4>
            <p>Required for upload and shot pairing. Local recording works offline.</p>
          </div>
        </div>
      </section>

      <!-- Alpha feedback CTA -->
      <section class="alpha-cta-section">
        <div class="alpha-cta-card">
          <div class="alpha-cta-icon">🚧</div>
          <h2>This is an early alpha - and that matters.</h2>
          <p>
            SwingNerds Vision is actively being built. Features are added fast, things get improved week to week,
            and your feedback is the single biggest driver of what gets built next.
            If something doesn't work, if you have a camera question, or if there's something you really want -
            tell us. We read and respond to every message.
          </p>
          <div class="alpha-cta-actions">
            <a :href="installerUrl" target="_blank" class="cta-btn primary" @click="onDownloadClick">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download &amp; Try It
            </a>
            <a href="mailto:support@swingnerds.com" class="cta-btn outline">Send Feedback</a>
          </div>
          <a href="/changelog" class="alpha-changelog-link">See what's been built → Changelog</a>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="final-cta">
        <h2>Start capturing your sim sessions today.</h2>
        <p>Free to download. Mount once, runs every session. Works with the camera you already have.</p>
        <a :href="installerUrl" target="_blank" class="cta-btn primary large">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download SwingNerds Vision
        </a>
        <p class="final-note">Windows 10/11 · 64-bit · v1.0.4</p>
      </section>

      <!-- Contact -->
      <section class="contact-section">
        <div class="contact-card">
          <div class="contact-icon">💬</div>
          <h2>Questions or feedback?</h2>
          <p>We're actively improving the app. Tell us what works, what doesn't, and what cameras you're using.</p>
          <a href="mailto:support@swingnerds.com" class="contact-email">support@swingnerds.com</a>
          <p class="contact-note">We read and respond to every email.</p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-links">
          <a href="/about">About</a>
          <a href="/pricing">Pricing</a>
          <a href="/changelog">Changelog</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/support">Support</a>
          <a href="mailto:support@swingnerds.com">Contact</a>
        </div>
        <p class="copyright">© {{ currentYear }} SwingNerds. All rights reserved.</p>
      </footer>

    </div>

    <CameraInfoModal :isOpen="showCameraModal" @close="showCameraModal = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { trackAppDownload } from '../services/tracking.js';
import { trackEvent } from '../services/analyticsService';
import CameraInfoModal from '../components/CameraInfoModal.vue';
import { goToApp } from '../services/appUrl.js';

const router = useRouter();
const currentYear = computed(() => new Date().getFullYear());
const installerUrl = 'https://videos.swingnerds.com/releases/swingnerdsclip/SwingNerdsClip-win-Setup.exe';
const showCameraModal = ref(false);

function goHome() { router.push('/'); }
function goToPricing() { router.push('/pricing'); }
function goToSignIn() { goToApp('/login'); }
function onDownloadClick() {
  trackAppDownload();
  trackEvent('download_vision_app', 'conversion', { platform: 'windows' });
}
</script>

<style scoped>
.camera-link {
  color: var(--primary, #00adb5);
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
  cursor: pointer;
  font-weight: inherit;
}
.camera-link:hover {
  text-decoration-style: solid;
  color: var(--primary, #00adb5);
}
.page {
  --bg: #0f172a;
  --bg-alt: #1e293b;
  --surface: #1e293b;
  --surface-raised: #273549;
  --border: #334155;
  --text: #f8fafc;
  --muted: #94a3b8;
  --faint: #64748b;
  --primary: #00adb5;
  --primary-dark: #0891b2;
  --primary-glow: rgba(0, 173, 181, 0.25);
  --success: #10b981;
  --gold: #f59e0b;
  --warn: #f59e0b;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, sans-serif;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Alpha banner ── */
.alpha-banner {
  background: linear-gradient(90deg, rgba(245, 158, 11, 0.12), rgba(245, 158, 11, 0.08));
  border-bottom: 1px solid rgba(245, 158, 11, 0.25);
  padding: 10px 0;
}

.alpha-banner-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.alpha-banner-badge {
  background: var(--warn);
  color: #000;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.alpha-banner-text {
  color: rgba(245, 158, 11, 0.9);
  font-size: 0.88rem;
  flex: 1;
}

.alpha-banner-link {
  color: var(--warn);
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.alpha-banner-link:hover { text-decoration: underline; }

/* ── Header ── */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.header-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 700;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-link {
  background: none;
  border: none;
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.15s ease;
}

.nav-link:hover { color: var(--text); background: var(--surface); }

.nav-link.sign-in {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
}

.nav-link.sign-in:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--primary-glow);
}

/* ── Shared buttons ── */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.cta-btn.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  border: none;
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--primary-glow);
}

.cta-btn.outline {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}

.cta-btn.outline:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.cta-btn.large { padding: 16px 36px; font-size: 1.1rem; }

/* ── Section shared ── */
section { padding: 64px 0; border-bottom: 1px solid var(--border); }
section:last-of-type { border-bottom: none; }

h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.section-subtitle {
  color: var(--muted);
  font-size: 1.05rem;
  margin: 0 0 40px 0;
}

/* ── Hero ── */
.hero {
  text-align: center;
  padding: 80px 0 64px;
}

.hero-badge {
  display: inline-block;
  background: rgba(0, 173, 181, 0.12);
  color: var(--primary);
  padding: 6px 18px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 173, 181, 0.3);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, var(--primary) 0%, #0dd3e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: var(--text);
  font-weight: 500;
  margin: 0 0 12px 0;
}

.hero-desc {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 640px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.hero-note {
  color: var(--faint);
  font-size: 0.85rem;
  margin: 0;
}
.promo-banner {
  margin-top: 16px;
  padding: 10px 20px;
  background: rgba(76, 175, 80, 0.1);
  border: 1.5px solid rgba(76, 175, 80, 0.3);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text);
  display: inline-block;
}
.promo-code {
  font-weight: 800;
  color: #4caf50;
  letter-spacing: 0.5px;
}

/* ── Value prop ── */
.value-prop { background: none; }

.value-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.value-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
}

.value-item-highlight {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary), 0 4px 24px var(--primary-glow);
}

.value-icon { font-size: 1.8rem; margin-bottom: 12px; }

.value-item h3 { font-size: 1rem; font-weight: 600; margin: 0 0 8px; }

.value-item p { color: var(--muted); font-size: 0.88rem; line-height: 1.6; margin: 0; }

/* ── Free callout ── */
.free-callout { background: none; }

.free-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 40px;
}

.free-headline {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.free-headline h2 { margin: 0; font-size: 1.6rem; }

.free-badge {
  background: var(--success);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 6px;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.free-card > p {
  color: var(--muted);
  line-height: 1.6;
  max-width: 680px;
  margin: 0 0 32px 0;
}

.free-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.compare-col {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px 24px;
}

.compare-heading {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.compare-heading.free { color: var(--muted); }
.compare-heading.pro { color: var(--primary); }

.compare-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.compare-col li {
  color: var(--muted);
  font-size: 0.9rem;
}

/* ── Complete loop ── */
.loop-section { background: none; }

.loop-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
  margin-bottom: 12px;
}

.loop-steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 40px;
}

.loop-step {
  flex: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
}

.loop-connector {
  flex-shrink: 0;
  width: 48px;
  text-align: center;
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 300;
  padding-top: 24px;
}

.loop-step-num {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 14px;
}

.loop-step h3 { font-size: 1rem; font-weight: 600; margin: 0 0 8px; }
.loop-step p { color: var(--muted); font-size: 0.88rem; line-height: 1.6; margin: 0; }
.loop-step p em { color: var(--faint); font-style: italic; }

/* App screenshot */
.app-screenshot-row {
  display: flex;
  align-items: center;
  gap: 48px;
  margin-bottom: 40px;
  padding: 40px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.phone-mockup {
  flex-shrink: 0;
  width: 220px;
  background: #0a0a0a;
  border-radius: 36px;
  border: 3px solid #3a3a3a;
  box-shadow:
    0 0 0 1px #1a1a1a,
    0 20px 60px rgba(0, 0, 0, 0.6),
    0 4px 20px rgba(0, 173, 181, 0.1);
  overflow: hidden;
  position: relative;
}

.phone-mockup::before {
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

.phone-screen {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 33px;
}

.screenshot-caption {
  flex: 1;
}

.screenshot-caption h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--text);
}

.screenshot-caption p {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.loop-callout {
  background: linear-gradient(135deg, rgba(0, 173, 181, 0.08), rgba(0, 173, 181, 0.04));
  border: 1px solid rgba(0, 173, 181, 0.2);
  border-radius: 12px;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.loop-callout p {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 560px;
}

.loop-callout p strong { color: var(--text); }

/* ── Camera section ── */
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
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
}

.camera-card.highlight {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary), 0 4px 24px var(--primary-glow);
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
  background: rgba(0, 173, 181, 0.15);
  color: var(--primary);
  border: 1px solid rgba(0, 173, 181, 0.3);
}

.camera-badge.starter {
  background: rgba(245, 158, 11, 0.15);
  color: var(--warn);
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.camera-card h3 { font-size: 1.1rem; margin: 8px 0 4px; }

.camera-price { color: var(--muted); font-size: 0.9rem; margin: 0 0 12px; }

.camera-card p { color: var(--muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 12px; }

.camera-specs {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
}

.spec {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}

.spec-label { color: var(--faint); }
.spec-value { color: var(--text); font-weight: 500; }

.shutter-explainer {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 20px;
}

.shutter-explainer h4 { margin: 0 0 8px; font-size: 0.95rem; }
.shutter-explainer p { color: var(--muted); font-size: 0.9rem; line-height: 1.6; margin: 0; }

/* Kinovea callout */
.kinovea-callout {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: rgba(0, 173, 181, 0.06);
  border: 1px solid rgba(0, 173, 181, 0.2);
  border-radius: 10px;
  padding: 18px 24px;
  margin-bottom: 16px;
}

.kinovea-callout-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 1px; }

.kinovea-callout-text {
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.6;
}

.kinovea-callout-text strong { color: var(--text); }

/* Camera help callout */
.camera-help-callout {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 18px 24px;
  flex-wrap: wrap;
}

.camera-help-icon { font-size: 1.4rem; flex-shrink: 0; }

.camera-help-text {
  flex: 1;
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.5;
}

.camera-help-text strong { color: var(--text); }

.camera-help-link {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  white-space: nowrap;
}

.camera-help-link:hover { text-decoration: underline; }

/* Camera buy links */
.camera-buy-links {
  margin-bottom: 12px;
}
.buy-links-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}
.camera-buy-links a {
  display: block;
  font-size: 0.85rem;
  color: var(--primary);
  text-decoration: none;
  padding: 6px 0;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
}
.camera-buy-links a:hover { text-decoration: underline; }
.buy-source {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--muted);
  background: var(--surface-raised);
  padding: 1px 6px;
  border-radius: 3px;
  margin-left: 6px;
}
.camera-buy-links a.top-pick {
  font-weight: 600;
  color: #10b981;
  background: rgba(16, 185, 129, 0.06);
  padding: 8px 10px;
  border-radius: 6px;
  border-bottom: none;
}
.buy-links-subnote {
  display: block;
  font-size: 0.72rem;
  color: var(--faint);
  font-style: italic;
  margin-bottom: 6px;
}
.buy-links-divider {
  display: block;
  font-size: 0.75rem;
  color: var(--faint);
  margin-top: 8px;
  margin-bottom: 2px;
}
.buy-note {
  font-size: 0.78rem;
  color: var(--faint);
  margin: 8px 0 0;
  line-height: 1.5;
}

/* Lens guide */
.lens-guide {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 20px;
}
.lens-guide h4 { margin: 0 0 8px; font-size: 0.95rem; }
.lens-guide > p { color: var(--muted); font-size: 0.88rem; line-height: 1.5; margin: 0 0 14px; }
.lens-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 12px;
}
.lens-table th, .lens-table td {
  text-align: left;
  padding: 8px 12px;
  font-size: 0.85rem;
  border-bottom: 1px solid var(--border);
}
.lens-header th {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--faint);
  border-bottom: 2px solid var(--border);
}
.lens-table td { color: var(--muted); }
.lens-table td strong { color: var(--text); }
.lens-tip {
  font-size: 0.82rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.5;
}
.lens-tip strong { color: var(--primary); }

/* ── Angles ── */
.angles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.angle-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
}

.angle-icon {
  width: 56px;
  height: 56px;
  background: rgba(0, 173, 181, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: var(--primary);
}

.angle-card h3 { font-size: 1.1rem; margin: 0 0 6px; }

.angle-position {
  font-size: 0.85rem;
  color: var(--muted);
  margin: 0 0 14px;
  line-height: 1.4;
}

.angle-uses {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.angle-uses li {
  font-size: 0.85rem;
  color: var(--muted);
  padding-left: 14px;
  position: relative;
}

.angle-uses li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
}

.angles-tip {
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.25);
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
}

.angles-tip strong { color: var(--text); }

/* ── How it works ── */
.steps {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
}

.step {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.step-num {
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  margin-top: 2px;
}

.step-body h3 { font-size: 1.1rem; margin: 0 0 6px; }
.step-body p { color: var(--muted); font-size: 0.93rem; line-height: 1.6; margin: 0; }

.integrations {
  text-align: center;
  padding: 32px;
  background: var(--surface);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.integrations-label {
  color: var(--muted);
  font-size: 0.85rem;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.integrations-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.integration-chip {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* ── Requirements ── */
.requirements-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.req-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.req-icon { font-size: 2rem; margin-bottom: 12px; }
.req-item h4 { font-size: 0.95rem; margin: 0 0 6px; }
.req-item p { color: var(--muted); font-size: 0.85rem; line-height: 1.5; margin: 0; }

/* ── Alpha CTA ── */
.alpha-cta-section { padding: 64px 0; }

.alpha-cta-card {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.06), rgba(245, 158, 11, 0.03));
  border: 1px solid rgba(245, 158, 11, 0.25);
  border-radius: 16px;
  padding: 48px;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}

.alpha-cta-icon { font-size: 2.5rem; margin-bottom: 16px; }

.alpha-cta-card h2 {
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: var(--text);
}

.alpha-cta-card p {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
}

.alpha-cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.alpha-changelog-link {
  color: var(--faint);
  font-size: 0.88rem;
  text-decoration: none;
  display: block;
}

.alpha-changelog-link:hover { color: var(--primary); }

/* ── Final CTA ── */
.final-cta {
  text-align: center;
  padding: 80px 0;
}

.final-cta h2 { font-size: 2.2rem; margin-bottom: 12px; }
.final-cta > p { color: var(--muted); font-size: 1.05rem; margin-bottom: 32px; }
.final-note { color: var(--faint); font-size: 0.85rem; margin-top: 16px; }

/* ── Contact ── */
.contact-section { padding: 48px 0; }

.contact-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.contact-icon { font-size: 2rem; margin-bottom: 16px; }
.contact-card h2 { font-size: 1.5rem; margin-bottom: 10px; }
.contact-card p { color: var(--muted); font-size: 0.95rem; margin-bottom: 16px; }

.contact-email {
  display: inline-block;
  color: var(--primary);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 12px;
}

.contact-email:hover { text-decoration: underline; }
.contact-note { color: var(--faint); font-size: 0.85rem; margin: 0; }

/* ── Footer ── */
.footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  justify-content: center;
  margin-bottom: 16px;
}

.footer-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.15s;
}

.footer-links a:hover { color: var(--primary); }

.copyright { color: var(--faint); font-size: 0.8rem; margin: 0; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .value-grid { grid-template-columns: 1fr 1fr; }
  .free-comparison,
  .camera-cards { grid-template-columns: 1fr; }
  .angles-grid { grid-template-columns: 1fr; }
  .requirements-grid { grid-template-columns: 1fr 1fr; }
  .hero-cta,
  .alpha-cta-actions { flex-direction: column; align-items: center; }
  .alpha-cta-card { padding: 32px 24px; }
  .loop-steps { flex-direction: column; }
  .loop-connector { width: auto; padding: 0; transform: rotate(90deg); align-self: center; }
  .loop-callout { flex-direction: column; align-items: flex-start; padding: 24px; }
  .app-screenshot-row { flex-direction: column; padding: 24px; gap: 24px; align-items: center; }
  .phone-mockup { width: 180px; }
}

@media (max-width: 480px) {
  .value-grid { grid-template-columns: 1fr; }
  .requirements-grid { grid-template-columns: 1fr; }
}
</style>
