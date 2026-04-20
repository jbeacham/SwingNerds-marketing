<script setup>
import { useRouter } from 'vue-router';
import { goToApp } from '../services/appUrl.js';

const router = useRouter();

function goHome() {
  router.push('/');
}

function getStarted() {
  goToApp('/register');
}
</script>

<template>
  <div class="public-page">
    <div class="page-container">
      <main class="page-content">
        <div class="content-wrapper">
          <section class="page-hero">
            <div class="hero-badge">About Us</div>
            <h1>About SwingNerds</h1>
            <p class="hero-subtitle">
              A small team building the tool we always wanted for sim golf: automatic swing video, paired to shot data, with zero manual workflow.
            </p>
          </section>
          
          <div class="about-section">
            <h2>Our Mission</h2>
            <p class="large-text">
              Every sim session should give you both the video of your swing and the data behind it - automatically, for every shot, with zero extra effort. SwingNerds is the platform that ties them together.
            </p>
          </div>

          <div class="about-section">
            <h2>Why We Built This</h2>
            <p>
              Golfers have two tools: sim software that gives you great shot data (GSPro, Uneekor, Rapsodo, Square Golf) and camera setups that give you great video. Historically, if you wanted both, you had to manually press record, manually match clips to shots, and manually compare them later. Most people gave up.
            </p>
            <p>
              SwingNerds Vision fixes that. Plug in <strong>any USB camera</strong>, point it at your bay, and every swing you hit is automatically recorded, paired with your launch monitor data, and ready to compare side-by-side in seconds. No button-pressing. No manual workflow. Just hit balls and the analysis is waiting for you when you're done.
            </p>
          </div>

          <div class="about-section">
            <h2>Our Community-First Approach</h2>
            <div class="community-card">
              <div class="community-icon"></div>
              <p class="large-text">
                <strong>We're building SwingNerds WITH you, not just FOR you.</strong> We believe in complete transparency 
                and user-driven development.
              </p>
              <p>
                Too many companies build products in isolation, then wonder why users are frustrated. We're taking a different approach - 
                every feature, every decision, and every change is influenced by our community of golfers.
              </p>
              <div class="transparency-promises">
                <h3>Our Promises to You</h3>
                <ul>
                  <li><strong>Open Communication:</strong> We share our roadmap, challenges, and decision-making process</li>
                  <li><strong>Responsive Feedback:</strong> Your suggestions and complaints directly shape our development</li>
                  <li><strong>No Surprises:</strong> We'll always be upfront about changes, pricing, and future plans</li>
                  <li><strong>User Advocacy:</strong> Every decision is made with the user experience as our top priority</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2>What Makes Us Different</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon"></div>
                <h3>Auto-capture with USB cameras</h3>
                <p>Plug in any USB camera (down-the-line, face-on, or both) and SwingNerds Vision auto-records every swing. Motion + ball-strike audio detection handles the timing. No button pressing, session after session.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon"></div>
                <h3>GSPro + launch monitor pairing</h3>
                <p>Real-time GSPro sync (our primary integration) plus Uneekor, Rapsodo, and Square Golf APIs. Every clip Vision captures is matched to its shot data automatically - carry, ball speed, spin, path, the whole line.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon"></div>
                <h3>Side-by-side comparison</h3>
                <p>Pull up any two swings - today vs. last month, your good driver vs. your bad one, you vs. your saved "standard" swing - and compare them frame-by-frame, synced to impact, with all the numbers right there.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon"></div>
                <h3>AI Swing Analysis</h3>
                <p>Feed your swing to Claude and get strengths, things to work on, and specific drills. Then have a conversation with it - follow-up questions, deeper analysis on any part of the swing.</p>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2>How it all fits together</h2>
            <ul>
              <li><strong>SwingNerds Vision (Windows)</strong> - the auto-recording app that runs on your sim PC. Works with any USB camera, no special hardware required.</li>
              <li><strong>GSPro real-time sync</strong> - your shots flow from GSPro into SwingNerds instantly, paired to the video clip Vision just captured.</li>
              <li><strong>Multi-monitor support</strong> - Uneekor, Rapsodo, Square Golf, and CSV import for anything else.</li>
              <li><strong>SwingNerds Web &amp; iOS</strong> - review your swings, compare shots, run AI analysis, and track progress from anywhere.</li>
              <li><strong>Your data, secure</strong> - encrypted in transit and at rest, and yours forever.</li>
            </ul>
          </div>

          <div class="about-section">
            <h2>Our Vision</h2>
            <p class="large-text">
              Every sim golfer should be able to walk out of a session with the videos, the data, and the insights all in one place, without spending more time editing clips than swinging clubs. That's the bar we're building to.
            </p>
          </div>

          <div class="about-section">
            <h2>Why Subscription Pricing?</h2>
            <p>
              SwingNerds is a subscription because keeping it running honestly has to be. Not because that's trendy, and not because we're optimizing for lifetime revenue. We've priced it as low as we reasonably can while still keeping it reliable and improving, and we'd rather be transparent about where the money goes than pretend it's free.
            </p>
            <ul>
              <li><strong>Servers &amp; storage:</strong> Every swing video you upload lives in the cloud. Every shot gets stored, indexed, and served to you on demand. That costs us every month whether you use SwingNerds that day or not.</li>
              <li><strong>Ongoing development:</strong> New features, bug fixes, camera support, new launch monitor integrations, and quality-of-life improvements don't build themselves.</li>
              <li><strong>AI analysis:</strong> Running swing analysis through Claude isn't free. Every analysis costs us in API fees, and we'd rather eat that cost quietly than put a paywall on individual analyses.</li>
              <li><strong>Responsive support:</strong> Emails get answered by actual humans, usually same-day. That's a deliberate choice.</li>
              <li><strong>Integration upkeep:</strong> GSPro, Uneekor, Rapsodo, and Square Golf change their APIs. We keep everything in sync so you don't have to care.</li>
              <li><strong>Actually being around next year:</strong> A one-time-purchase model means the company has to keep selling to new users forever to survive. Subscription means we can focus on making existing users happy instead of chasing acquisition.</li>
            </ul>
            <p>
              If pricing ever feels wrong, tell us. We read every email at <a href="mailto:support@swingnerds.com" class="inline-link">support@swingnerds.com</a>.
            </p>
          </div>

          <div class="cta-section">
            <h2>Ready to Improve Your Game?</h2>
            <p>Join thousands of golfers who are already using data to lower their scores.</p>
            <button class="cta-btn" @click="getStarted">
              Get Started Today
            </button>
          </div>
        </div>
      </main>

      <footer class="page-footer">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo-container">
              <img src="/swingnerds-logo-white.png" alt="SwingNerds Logo" class="footer-logo-img" />
              <span class="footer-logo-text">SwingNerds</span>
            </div>
            <span class="footer-tagline">Empowering golfers with data</span>
          </div>
          <div class="footer-links">
            <router-link to="/about" class="footer-link">About</router-link>
            <router-link to="/privacy" class="footer-link">Privacy</router-link>
            <router-link to="/support" class="footer-link">Support</router-link>
          </div>
          <div class="footer-copyright">
            &copy; {{ new Date().getFullYear() }} SwingNerds. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.public-page {
  --primary: var(--mk-accent);
  --primary-dark: var(--mk-accent-dark);
  --surface: var(--mk-bg);
  --background-alt: var(--mk-bg-alt);
  --border: var(--mk-border);

  min-height: 100vh;
  background-color: var(--mk-bg);
  color: var(--mk-text);
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg) 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-xl);
}

.header-brand {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.header-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.header-brand h1 {
  margin: 0;
  font-weight: 700;
  color: var(--primary);
  font-size: 1.8rem;
}

.back-btn {
  background-color: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 500;
  transition: all var(--transition-fast) ease;
}

.back-btn:hover {
  background-color: var(--background-alt);
  transform: translateY(-1px);
}

.page-content {
  padding-bottom: var(--space-xl);
}

.content-wrapper {
  max-width: 820px;
  margin: 0 auto;
}

.page-hero {
  padding: 64px 0 48px;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 48px;
}
.page-hero .hero-badge {
  display: inline-block;
  background: rgba(6, 182, 212, 0.1);
  color: #06b6d4;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.page-hero .hero-subtitle {
  font-size: 1.15rem;
  color: #475569;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.65;
}

.about-section {
  margin-bottom: 48px;
}

.about-section p {
  color: #475569;
  margin-bottom: 14px;
  font-size: 1rem;
  line-height: 1.65;
}

.large-text {
  font-size: 1.15rem !important;
  color: #0f172a !important;
  line-height: 1.65;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-lg);
}

.feature-card {
  background-color: var(--surface);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  text-align: center;
  transition: transform var(--transition-fast) ease, box-shadow var(--transition-fast) ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
}

.feature-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: var(--space-sm);
}

.feature-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.about-section ul {
  margin-top: var(--space-md);
  padding-left: var(--space-lg);
}

.about-section li {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-sm);
}

.about-section li strong {
  color: var(--primary);
  font-weight: 600;
}

.community-card {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.1) 100%);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  border: 2px solid rgba(16, 185, 129, 0.2);
  text-align: center;
}

.community-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.transparency-promises {
  background-color: var(--surface);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  margin-top: var(--space-lg);
  text-align: left;
  border: 1px solid var(--border);
}

.transparency-promises h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: var(--space-md);
  text-align: center;
}

.transparency-promises ul {
  margin: 0;
  padding-left: var(--space-lg);
}

.transparency-promises li {
  margin-bottom: var(--space-sm);
  line-height: 1.6;
}

.community-pricing-note {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid #10b981;
  margin: var(--space-lg) 0;
}

.community-pricing-note p {
  margin: 0;
  font-weight: 500;
  color: var(--text-primary);
}

.pricing-section {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  border: 2px solid rgba(59, 130, 246, 0.2);
}

.pricing-card {
  background-color: var(--surface);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.beta-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: var(--space-lg);
}

.beta-icon {
  font-size: 1.2rem;
}

.pricing-info h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: var(--space-md);
  margin-top: var(--space-lg);
}

.pricing-info h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  margin-top: var(--space-lg);
}

.feedback-request {
  background-color: var(--background-alt);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid #f59e0b;
  margin: var(--space-lg) 0;
}

.feedback-request h4 {
  color: #f59e0b;
  margin-top: 0;
}

.transparency-note {
  background-color: rgba(59, 130, 246, 0.05);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--primary);
  margin-top: var(--space-lg);
}

.transparency-note h4 {
  color: var(--primary);
  margin-top: 0;
}

.transparency-note ul {
  margin-top: var(--space-md);
  margin-bottom: 0;
}

.transparency-note li {
  margin-bottom: var(--space-sm);
}

.inline-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.inline-link:hover {
  text-decoration: underline;
}

.cta-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  margin-top: var(--space-xl);
}

.cta-section h2 {
  color: white;
  border: none;
  padding: 0;
  margin-bottom: var(--space-md);
}

.cta-section p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: var(--space-lg);
}

.cta-btn {
  background-color: white;
  color: var(--primary);
  border: none;
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-md);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast) ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.page-footer {
  margin-top: var(--space-xl);
  padding: var(--space-lg) 0;
  border-top: 1px solid var(--border);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  text-align: center;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo-container {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.footer-logo-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.footer-logo-text {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
}

.footer-tagline {
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.footer-links {
  display: flex;
  gap: var(--space-lg);
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast) ease;
}

.footer-link:hover {
  color: var(--primary);
}

.footer-copyright {
  font-size: 0.8rem;
  color: var(--text-tertiary);
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
  
  .content-wrapper > h1 {
    font-size: 2rem;
  }
  
  .about-section h2 {
    font-size: 1.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    gap: var(--space-md);
  }
}
</style>