<template>
  <div class="enterprise-page">
    <div class="enterprise-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-badge">For Commercial Facilities</div>
        <h1>Auto-Recorded Swing Video<br>in Every Bay, Branded as You</h1>
        <p class="hero-subtitle">
          Give every member automatic swing video with your facility's logo on every screen and every share they post. Zero staff required, runs unattended on any USB camera (~$130 each). Software from $5/mo per active member.
        </p>
        <div class="hero-cta">
          <button @click="scrollToContact" class="cta-button primary large">Book a 15-Min Demo</button>
          <button @click="scrollToTrialSection" class="cta-button outline large">See Pricing</button>
        </div>
        <div class="hero-proof">
          <img
            src="/swingnerds_share_yourlogohere.jpg"
            alt="Example swing share with the facility's logo branded onto the video and stats burned in"
            class="hero-proof-img"
            loading="lazy"
          />
          <p class="hero-proof-caption">
            Every swing your members share publicly carries your facility's brand. Free marketing on every clip your customers post.
          </p>
        </div>
      </section>

      <!-- How It Works -->
      <section class="how-it-works-section">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Set Up Vision Stations</h3>
            <p>Install SwingNerds Vision on each bay's PC. Enter your facility code and the app auto-registers as a bay.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Customers Log In</h3>
            <p>Customer enters their email at the bay. If they're new, an account is created automatically. No friction.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Swings Record Automatically</h3>
            <p>Vision detects swings via audio + motion, records clips, and syncs them to the customer's shot data.</p>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Customers View Their Data</h3>
            <p>Your customers log into swingnerds.com or the iOS app to review their swing videos and analytics.</p>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2>Built for Commercial Facilities</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">&#9632;</div>
            <h3>Enterprise Dashboard</h3>
            <p>Manage all your locations, bays, and members from one portal. See who's swinging, bay utilization, and session history.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#9632;</div>
            <h3>Live Bay Status</h3>
            <p>Real-time view of every bay: who's logged in, session active, clips recorded. Auto-refreshes every 15 seconds.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#9632;</div>
            <h3>Bulk Member Management</h3>
            <p>Add customers one at a time or upload a spreadsheet of emails. Accounts are created and invite emails sent automatically.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#9632;</div>
            <h3>White-Label, Everywhere</h3>
            <p>Your logo and colors on the Vision login screen at every bay, on every swing video your members share publicly, and across customer-facing surfaces. Every share customers post becomes organic marketing for your facility.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#9632;</div>
            <h3>Flexible Subscriptions</h3>
            <p>Cover your members at Pro, Premium, or Ultimate tier, or let them subscribe individually. Your choice per location.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#9632;</div>
            <h3>Multi-Location Support</h3>
            <p>Manage multiple facilities from one account. Each location has its own bays, members, branding, and settings.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#9632;</div>
            <h3>Unmanned Operation</h3>
            <p>No staff needed. Customers self-serve at the bay. Vision runs continuously, detecting and recording swings automatically.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#9632;</div>
            <h3>Data Privacy</h3>
            <p>You only see sessions from your facility. Customers' personal sessions from home or other locations stay private.</p>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="pricing-section" ref="trialSection">
        <h2>Simple, transparent pricing</h2>
        <p class="pricing-subtitle">Two costs to think about: the cameras and the software. No platform fees, no per-bay fees, no contracts.</p>

        <div class="cost-grid">
          <div class="cost-card">
            <div class="cost-label">Cameras</div>
            <div class="cost-figure">~$130<span class="cost-unit"> / camera</span></div>
            <p class="cost-detail">Use any USB webcam. Good 120fps swing-cams run about $130 each. Most bays use 1–2 cameras (down-the-line + face-on).</p>
          </div>
          <div class="cost-card featured">
            <div class="cost-label">Software</div>
            <div class="cost-figure">From $5<span class="cost-unit"> / mo per member</span></div>
            <p class="cost-detail">Per active member, billed monthly. You decide who pays — cover them on your invoice or let them self-subscribe with their own card.</p>
          </div>
        </div>

        <div class="enterprise-pricing-card">
          <div class="pricing-card-header">
            <h3>How it works</h3>
          </div>

          <ul class="pricing-features">
            <li>
              <span class="check">&#10003;</span>
              <span><strong>Every active member has their own SwingNerds subscription.</strong> You choose who pays for it — cover some or all members on your monthly bill, or let them self-subscribe with their own card (with a standard free trial).</span>
            </li>
            <li>
              <span class="check">&#10003;</span>
              <span><strong>Covered members are line items on your monthly invoice.</strong> Add one mid-month and we prorate. Drop coverage on a member and you get a prorated credit.</span>
            </li>
            <li>
              <span class="check">&#10003;</span>
              <span><strong>If you ever cancel or pause, members keep all their data</strong> — shots, videos, AI analyses. They just switch to their own personal plan.</span>
            </li>
            <li>
              <span class="check">&#10003;</span>
              <span><strong>Tier is your call.</strong> Cover members at Pro ($5/mo), Premium ($10/mo), or Ultimate ($20/mo) — or mix and match per member.</span>
            </li>
            <li>
              <span class="check">&#10003;</span>
              <span><strong>Hardware is one-time.</strong> Pay once for the cameras, run them as long as you want. No proprietary lock-in — they're just USB webcams.</span>
            </li>
          </ul>

          <div class="pricing-cta">
            <button @click="scrollToContact" class="cta-button primary large">Talk to us about your setup</button>
            <p class="trial-note">Want a custom quote, help picking cameras, or volume pricing across multiple locations? We'll get back the same day.</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section" ref="contactSection">
        <h2>Talk to Us</h2>
        <p class="contact-subtitle">Have questions? Want a demo? We'd love to hear from you.</p>

        <form @submit.prevent="submitContact" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>Name</label>
              <input v-model="contactForm.name" type="text" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="contactForm.email" type="email" required placeholder="you@facility.com" />
            </div>
          </div>
          <div class="form-group">
            <label>Facility Name</label>
            <input v-model="contactForm.facilityName" type="text" placeholder="Your facility name" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Number of Bays</label>
              <input v-model="contactForm.bayCount" type="number" min="1" placeholder="e.g. 6" />
            </div>
            <div class="form-group">
              <label>Number of Locations</label>
              <input v-model="contactForm.locationCount" type="number" min="1" placeholder="e.g. 1" />
            </div>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea v-model="contactForm.message" rows="4" placeholder="Tell us about your facility and what you're looking for..."></textarea>
          </div>
          <button type="submit" class="cta-button primary" :disabled="contactSubmitting">
            {{ contactSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
          <p v-if="contactSuccess" class="success-msg">Message sent! We'll be in touch soon.</p>
          <p v-if="contactError" class="error-msg">{{ contactError }}</p>
        </form>
      </section>

      <!-- Footer -->
      <footer class="enterprise-footer">
        <p>&copy; {{ new Date().getFullYear() }} SwingNerds. All rights reserved.</p>
        <div class="footer-links">
          <button @click="goHome" class="footer-link">Home</button>
          <button @click="goToPricing" class="footer-link">Individual Pricing</button>
          <router-link to="/privacy" class="footer-link">Privacy</router-link>
          <router-link to="/support" class="footer-link">Support</router-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { goToApp } from '../services/appUrl.js';

const router = useRouter();

// Refs for scroll targets
const trialSection = ref(null);
const contactSection = ref(null);

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  facilityName: '',
  bayCount: '',
  locationCount: '',
  message: '',
});
const contactSubmitting = ref(false);
const contactSuccess = ref(false);
const contactError = ref('');

function goHome() {
  router.push('/');
}

function goToPricing() {
  router.push('/pricing');
}

function goToSignIn() {
  goToApp('/login');
}

function scrollToTrialSection() {
  trialSection.value?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  contactSection.value?.scrollIntoView({ behavior: 'smooth' });
}

async function submitContact() {
  if (!contactForm.value.name || !contactForm.value.email) return;

  contactSubmitting.value = true;
  contactError.value = '';
  contactSuccess.value = false;

  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.swingnerds.com';
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: contactForm.value.name,
        email: contactForm.value.email,
        subject: `Enterprise Inquiry - ${contactForm.value.facilityName || 'Unknown Facility'}`,
        message: [
          contactForm.value.message,
          '',
          `Facility: ${contactForm.value.facilityName || 'N/A'}`,
          `Bays: ${contactForm.value.bayCount || 'N/A'}`,
          `Locations: ${contactForm.value.locationCount || 'N/A'}`,
        ].join('\n'),
      }),
    });

    if (response.ok) {
      contactSuccess.value = true;
      contactForm.value = { name: '', email: '', facilityName: '', bayCount: '', locationCount: '', message: '' };
    } else {
      contactError.value = 'Failed to send message. Please try again.';
    }
  } catch (err) {
    contactError.value = 'Connection error. Please try again.';
  } finally {
    contactSubmitting.value = false;
  }
}
</script>

<style scoped>
.enterprise-page {
  --background: #ffffff;
  --background-alt: #f8fafc;
  --surface: #ffffff;
  --surface-elevated: #f8fafc;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-tertiary: #94a3b8;
  --border: #e2e8f0;
  --primary: #06b6d4;
  --primary-dark: #0891b2;
  --success: #10b981;

  min-height: 100vh;
  background: var(--background);
  color: var(--text-primary);
  font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
}

.enterprise-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.enterprise-header {
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
  margin: 0 auto 32px;
  max-width: 700px;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Hero proof — white-label share image + caption. Sized small so it reads
   as a supporting visual, not a full hero image. Will be replaced by a
   Windows-app login-screen screenshot showing facility branding (see
   docs/marketing-update-2026-04-25.md). */
.hero-proof {
  margin: 40px auto 0;
  max-width: 360px;
}
.hero-proof-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
  border: 1px solid rgba(15, 23, 42, 0.06);
}
.hero-proof-caption {
  margin: 14px 0 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
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

.cta-button.primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
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

/* How It Works */
.how-it-works-section {
  padding: 80px 0;
}

.how-it-works-section h2,
.features-section h2,
.pricing-section h2,
.contact-section h2 {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 48px 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.step-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
}

.step-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
  margin: 0 auto 16px;
}

.step-card h3 {
  margin: 0 0 8px 0;
  color: var(--text-primary);
  font-size: 1.1rem;
}

.step-card p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Features Section */
.features-section {
  padding: 80px 0;
  background: var(--background-alt);
  margin: 0 -24px;
  padding-left: 24px;
  padding-right: 24px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px 24px;
}

.feature-icon {
  color: var(--primary);
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.feature-card h3 {
  margin: 0 0 8px 0;
  color: var(--text-primary);
  font-size: 1rem;
}

.feature-card p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Pricing Section */
.pricing-section {
  padding: 80px 0;
  text-align: center;
}

.pricing-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: -32px 0 48px;
}

/* Two-card cost overview — sits above the detailed "How it works" card and
   gives visitors a price anchor before they read further. The featured card
   highlights the recurring software cost since that's the more relevant
   ongoing number for facility budget planning. */
.cost-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 0 auto 48px;
  text-align: left;
}

.cost-card {
  background: var(--surface);
  border: 1px solid var(--border, #1f2937);
  border-radius: 16px;
  padding: 28px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cost-card.featured {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.12);
}

.cost-label {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-secondary);
}

.cost-figure {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1.1;
}

.cost-unit {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.cost-detail {
  margin: 4px 0 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .cost-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.enterprise-pricing-card {
  background: var(--surface);
  border: 2px solid var(--primary);
  border-radius: 20px;
  padding: 48px;
  max-width: 600px;
  margin: 0 auto 40px;
  text-align: left;
}

.pricing-card-header {
  text-align: center;
  margin-bottom: 32px;
}

.pricing-card-header h3 {
  font-size: 1.5rem;
  margin: 0 0 12px 0;
  color: var(--text-primary);
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}

.price-amount {
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary);
}

.price-period {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.price-note {
  color: var(--text-tertiary);
  font-size: 0.85rem;
  margin: 8px 0 0;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  color: var(--text-primary);
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
}

.pricing-features .check {
  color: var(--success);
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.pricing-cta {
  text-align: center;
}

.trial-note {
  color: var(--text-tertiary);
  font-size: 0.85rem;
  margin: 12px 0 0;
}

.volume-note {
  text-align: center;
  padding: 32px;
  background: var(--surface);
  border-radius: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.volume-note p {
  color: var(--text-secondary);
  margin: 0 0 16px;
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
}

.contact-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: -32px 0 48px;
}

.contact-form {
  max-width: 650px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 6px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-group textarea {
  resize: vertical;
}

.success-msg {
  color: var(--success);
  margin: 12px 0 0;
  font-size: 0.9rem;
}

.error-msg {
  color: #ef4444;
  margin: 12px 0 0;
  font-size: 0.9rem;
}

/* Footer */
.enterprise-footer {
  padding: 40px 0;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-tertiary);
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-link {
  color: var(--text-tertiary);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  text-decoration: none;
}

.footer-link:hover {
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.25rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .cta-button.large {
    width: 100%;
    text-align: center;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .enterprise-pricing-card {
    padding: 32px 24px;
  }

  .enterprise-footer {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
