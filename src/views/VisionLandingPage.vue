<template>
  <div class="vision-page">
    <div class="vision-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-badge">iOS App - Beta Testers Wanted</div>
        <h1>GSPro Swing Videos<br>with just an iPhone</h1>
        <p class="hero-subtitle">
          SwingNerds Vision automatically records your swings and syncs them to your shots.
        </p>
        <p class="hero-description">
          No expensive cameras. No complex recording setups. Just your iPhone.
        </p>
        <div class="hero-cta">
          <a href="https://testflight.apple.com/join/Dc5pv4PD" target="_blank" class="cta-button primary">
            Join the Beta on TestFlight
          </a>
        </div>
      </section>

      <!-- Screenshots Section -->
      <section class="demo-section">
        <div class="screenshots-hero">
          <div class="screenshot-card">
            <img src="../assets/SwingNerds_VideosPage_2026-01-31.png" alt="SwingNerds Videos Page" class="screenshot-img" />
          </div>
          <div class="screenshot-card">
            <img src="../assets/SwingNerds_ShotComparison_2026-01-31.png" alt="SwingNerds Shot Comparison" class="screenshot-img" />
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="how-it-works-section">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-icon"></div>
            <h3>Set Up Your Phone</h3>
            <p>Position your iPhone behind you (DTL) or in front of you (face-on). That's it.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-icon"></div>
            <h3>Swing Away</h3>
            <p>SwingNerds Vision automatically detects and records your swings. No buttons to press.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-icon"></div>
            <h3>Auto-Sync</h3>
            <p>Video clips are automatically attached to your shots in SwingNerds. Like magic.</p>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2>Everything You Need</h2>
        <div class="features-grid">
          <div class="feature-item">
            <span class="feature-check"></span>
            <div class="feature-content">
              <h4>Automatic Swing Detection</h4>
              <p>AI-powered detection starts and stops recording at exactly the right moment.</p>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-check"></span>
            <div class="feature-content">
              <h4>Clips Attached to Shots</h4>
              <p>Videos sync to your GSPro, Uneekor, or Rapsodo shots automatically.</p>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-check"></span>
            <div class="feature-content">
              <h4>Side-by-Side Comparison</h4>
              <p>Compare any two swings with synchronized playback and ghost overlay.</p>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-check"></span>
            <div class="feature-content">
              <h4>Slow Motion Recording</h4>
              <p>Record at 60, 120, or 240fps depending on your iPhone model.</p>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-check"></span>
            <div class="feature-content">
              <h4>Frame-by-Frame Analysis</h4>
              <p>Step through your swing frame by frame to see exactly what's happening.</p>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-check"></span>
            <div class="feature-content">
              <h4>No Extra Hardware</h4>
              <p>No expensive cameras or tripods required. Just your iPhone.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Alpha Notice Section -->
      <section class="alpha-section">
        <div class="alpha-card">
          <h3>We Need Your Feedback!</h3>
          <p>
            This is a <strong>beta release</strong> and we're actively looking for feedback to make it better.
            The app is <strong>free to use</strong> during testing. Tell us what works, what doesn't,
            and what you'd like to see - we're listening!
          </p>
          <a href="https://testflight.apple.com/join/Dc5pv4PD" target="_blank" class="cta-button secondary">
            Join TestFlight Beta
          </a>
        </div>
      </section>

      <!-- Requirements Section -->
      <section class="requirements-section">
        <h2>Requirements</h2>
        <div class="requirements-grid">
          <div class="requirement-item">
            <div class="requirement-icon"></div>
            <h4>iPhone</h4>
            <p>iOS 16 or later. Works best with iPhone 12 or newer for slow-mo recording.</p>
          </div>
          <div class="requirement-item">
            <div class="requirement-icon"></div>
            <h4>Good Lighting</h4>
            <p>Works best in well-lit environments. Indoor sim bays with good lighting work great.</p>
          </div>
          <div class="requirement-item">
            <div class="requirement-icon"></div>
            <h4>SwingNerds Subscription</h4>
            <p>Active SwingNerds subscription to sync videos to your shot data.</p>
          </div>
        </div>
        <div class="note-box">
          <strong>Note:</strong> SwingNerds Vision works best in well-lit environments.
          Very loud or dark conditions may affect swing detection accuracy.
        </div>
      </section>

      <!-- Comeback Offer Section -->
      <section class="offer-section">
        <div class="offer-card">
          <p class="offer-label">Not currently subscribed?</p>
          <p class="offer-code">Use code <span class="code">COMEBACK30</span> for 30% off</p>
          <p class="offer-description">Come back and try Vision with your SwingNerds subscription</p>
          <button @click="goToPricing" class="cta-button outline">View Pricing</button>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="contact-card">
          <div class="contact-icon"></div>
          <h2>Questions? Feedback? Integration Ideas?</h2>
          <p>We're building this for you. Whether you have questions about the beta, feedback on what's working (or not), or ideas for new integrations - we want to hear from you.</p>
          <a href="mailto:support@swingnerds.com" class="contact-email">
            support@swingnerds.com
          </a>
          <p class="contact-note">We read and respond to every email.</p>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section class="final-cta-section">
        <h2>Ready to See Your Swing?</h2>
        <p>Join the beta and help us build the best swing video tool for sim golfers.</p>
        <a href="https://testflight.apple.com/join/Dc5pv4PD" target="_blank" class="cta-button primary large">
          Join the Beta on TestFlight
        </a>
        <p class="cta-note">Free during beta testing. iOS only.</p>
      </section>

      <!-- Feedback Banner -->
      <section class="feedback-banner">
        <p>
          We'd love feedback of any sort - good or bad - to make this feature better.
          Reach out to <a href="mailto:support@swingnerds.com">support@swingnerds.com</a> if you're interested in testing for a discount or free.
        </p>
      </section>

      <!-- Footer -->
      <footer class="vision-footer">
        <div class="footer-links">
          <a href="/about">About</a>
          <a href="/pricing">Pricing</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/support">Support</a>
          <a href="mailto:support@swingnerds.com">Contact</a>
        </div>
        <p class="copyright">© {{ currentYear }} SwingNerds. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { goToApp } from '../services/appUrl.js';

const router = useRouter();

const currentYear = computed(() => new Date().getFullYear());

function goHome() {
  router.push('/');
}

function goToPricing() {
  router.push('/pricing');
}

function goToSignIn() {
  goToApp('/login');
}
</script>

<style scoped>
.vision-page {
  --background: var(--mk-bg-dark);
  --background-alt: var(--mk-bg-dark-alt);
  --surface: var(--mk-bg-dark-alt);
  --surface-elevated: #334155;
  --text-primary: var(--mk-text-on-dark);
  --text-secondary: var(--mk-text-3);
  --text-tertiary: #64748b;
  --border: var(--mk-border-dark);
  --primary: var(--mk-accent);
  --primary-dark: var(--mk-accent-dark);
  --success: var(--mk-green);
  --warning: #f59e0b;

  min-height: 100vh;
  background: var(--background);
  color: var(--text-primary);
  font-family: var(--mk-font);
}

.vision-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.vision-header {
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
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-link {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
  background-color: var(--surface);
}

.nav-link.sign-in {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
}

.nav-link.sign-in:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 80px 0 60px;
}

.hero-badge {
  display: inline-block;
  background: rgba(6, 182, 212, 0.15);
  color: var(--primary);
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid rgba(6, 182, 212, 0.3);
}

.hero-section h1 {
  margin: 0 0 16px 0;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0 0 12px 0;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0 0 32px 0;
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 16px;
}

/* CTA Buttons */
.cta-button {
  display: inline-block;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button.primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.4);
}

.cta-button.secondary {
  background: var(--surface-elevated);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.cta-button.secondary:hover {
  background: var(--border);
}

.cta-button.outline {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.cta-button.outline:hover {
  background: rgba(6, 182, 212, 0.1);
}

.cta-button.large {
  padding: 20px 48px;
  font-size: 1.1rem;
}

/* Demo Section - Screenshots */
.demo-section {
  padding: 40px 0 60px;
}

.screenshots-hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.screenshots-hero .screenshot-card {
  text-align: center;
}

.screenshots-hero .screenshot-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border);
  transition: transform 0.3s ease;
}

.screenshots-hero .screenshot-img:hover {
  transform: scale(1.02);
}

/* How It Works Section */
.how-it-works-section {
  padding: 80px 0;
}

.how-it-works-section h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 48px 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.step-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  position: relative;
}

.step-number {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.step-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.step-card h3 {
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.step-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Features Section */
.features-section {
  padding: 80px 0;
  border-top: 1px solid var(--border);
}

.features-section h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 48px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.feature-check {
  color: var(--primary);
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
}

.feature-content h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.feature-content p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Alpha Section */
.alpha-section {
  padding: 60px 0;
}

.alpha-card {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-left: 4px solid var(--primary);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.alpha-card h3 {
  margin: 0 0 16px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
}

.alpha-card p {
  margin: 0 0 24px 0;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Requirements Section */
.requirements-section {
  padding: 80px 0;
  border-top: 1px solid var(--border);
}

.requirements-section h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 48px 0;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;
}

.requirement-item {
  text-align: center;
  padding: 24px;
}

.requirement-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.requirement-item h4 {
  margin: 0 0 12px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.requirement-item p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.note-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 8px;
  padding: 16px 24px;
  color: var(--warning);
  font-size: 0.95rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Offer Section */
.offer-section {
  padding: 60px 0;
}

.offer-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.offer-label {
  margin: 0 0 8px 0;
  color: var(--text-tertiary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.offer-code {
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.offer-code .code {
  color: var(--primary);
  font-family: monospace;
  font-size: 1.5rem;
  background: rgba(6, 182, 212, 0.1);
  padding: 4px 12px;
  border-radius: 6px;
}

.offer-description {
  margin: 0 0 24px 0;
  color: var(--text-secondary);
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  border-top: 1px solid var(--border);
}

.contact-card {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.02) 100%);
  border: 2px solid rgba(6, 182, 212, 0.3);
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.contact-icon {
  font-size: 4rem;
  margin-bottom: 24px;
}

.contact-card h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: var(--text-primary);
}

.contact-card > p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 32px 0;
}

.contact-email {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  padding: 16px 40px;
  background: rgba(6, 182, 212, 0.1);
  border: 2px solid var(--primary);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-email:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.4);
}

.contact-note {
  margin: 20px 0 0 0;
  color: var(--text-tertiary);
  font-size: 0.95rem;
}

/* Final CTA Section */
.final-cta-section {
  padding: 80px 40px;
  margin: 60px 0;
  text-align: center;
  background: linear-gradient(135deg, var(--surface) 0%, var(--background) 100%);
  border-radius: 24px;
  border: 1px solid var(--border);
}

.final-cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.final-cta-section > p {
  color: var(--text-secondary);
  margin: 0 0 32px 0;
  font-size: 1.1rem;
}

.cta-note {
  margin-top: 16px;
  color: var(--text-tertiary);
  font-size: 0.9rem;
}

/* Feedback Banner */
.feedback-banner {
  text-align: center;
  padding: 32px 24px;
  margin: 0 auto 40px;
  max-width: 700px;
  border-top: 1px solid var(--border);
}

.feedback-banner p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
}

.feedback-banner a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.feedback-banner a:hover {
  text-decoration: underline;
}

/* Footer */
.vision-footer {
  padding: 40px 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--primary);
}

.copyright {
  color: var(--text-tertiary);
  font-size: 0.9rem;
  margin: 0;
}

/* Mobile Responsive */
@media (max-width: 968px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }

  .screenshots-hero {
    grid-template-columns: 1fr;
    max-width: 600px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .requirements-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 32px;
  }
}

@media (max-width: 640px) {
  .vision-header {
    flex-direction: column;
    gap: 16px;
  }

  .header-nav {
    width: 100%;
    justify-content: center;
  }

  .hero-section {
    padding: 60px 0 40px;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .contact-card {
    padding: 40px 24px;
  }

  .contact-card h2 {
    font-size: 1.5rem;
  }

  .contact-card > p {
    font-size: 1rem;
  }

  .contact-email {
    font-size: 1.1rem;
    padding: 14px 28px;
  }

  .final-cta-section {
    padding: 60px 24px;
  }

  .final-cta-section h2 {
    font-size: 1.75rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
