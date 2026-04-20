<template>
  <div class="dealers-page">
    <div class="dealers-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-badge">For Partners &amp; Resellers</div>
        <h1>SwingNerds<br>for Dealers</h1>
        <p class="hero-subtitle">
          Offer SwingNerds with your sim installs, bundle it in your packages, or sell it at your own price.
        </p>
        <p class="hero-description">
          Buy SwingNerds subscription licenses in bulk at a wholesale rate and hand them to your own customers.
          They activate with a code - no credit card required, full Premium access for a year.
          You keep the margin, and your customers get the best swing analysis platform on the market.
        </p>
        <div class="hero-cta">
          <button @click="scrollToContact" class="cta-button primary large">Become a Dealer</button>
          <button @click="scrollToPricing" class="cta-button outline large">See Pricing</button>
        </div>
      </section>

      <!-- How It Works -->
      <section class="how-it-works-section">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Buy Codes in Bulk</h3>
            <p>Log into your dealer portal, pick a quantity, and check out with Stripe. Volume discounts apply automatically - the more you buy, the lower the unit price.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Get Codes Instantly</h3>
            <p>Download your codes as a CSV or copy them from your portal. Each code unlocks one year of SwingNerds Premium for one customer.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Hand Codes to Customers</h3>
            <p>Include them on an invoice, email them, print them, or type them in during an install. Your codes, your choice how to deliver.</p>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Customers Redeem &amp; Swing</h3>
            <p>They enter the code at signup - no credit card - and get full Premium access instantly. When the year ends, they renew on their own.</p>
          </div>
        </div>
      </section>

      <!-- Features / Value Props -->
      <section class="features-section">
        <h2>Built for Partners Who Want to Add Value</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon"></div>
            <h3>Bulk Wholesale Pricing</h3>
            <p>Tiered volume discounts applied automatically at checkout. The more licenses you buy per batch, the bigger your discount.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"></div>
            <h3>Instant Code Delivery</h3>
            <p>The moment payment clears, your codes are generated and visible in your dealer portal. CSV export included.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#9881;</div>
            <h3>Flexible Distribution</h3>
            <p>Include free with your sim installs, resell at your price, or bundle into subscriptions. It's your code, use it however works for your business.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"></div>
            <h3>Track Everything</h3>
            <p>See which codes are redeemed, which are available, and who's using them - all in your dealer portal dashboard.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"></div>
            <h3>Premium Product</h3>
            <p>Customers get the full SwingNerds Premium suite - video recording, AI analysis, side-by-side comparison, dispersion, the works.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"></div>
            <h3>We Back You Up</h3>
            <p>Direct support line to our team for any questions - yours or your customers'. We're here to make you look good.</p>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="pricing-section" ref="pricingSection">
        <h2>Volume Pricing</h2>
        <p class="pricing-subtitle">Bigger batches mean bigger discounts. Applied automatically at checkout.</p>

        <div class="pricing-tiers-grid">
          <div class="pricing-tier-card">
            <div class="tier-label">1-9 licenses</div>
            <div class="tier-discount">10% off retail</div>
            <div class="tier-note">Great for getting started</div>
          </div>
          <div class="pricing-tier-card featured">
            <div class="tier-label">10-19 licenses</div>
            <div class="tier-discount">15% off retail</div>
            <div class="tier-note">Most popular</div>
          </div>
          <div class="pricing-tier-card">
            <div class="tier-label">20+ licenses</div>
            <div class="tier-discount">20% off retail</div>
            <div class="tier-note">Best for larger installs</div>
          </div>
        </div>

        <div class="pricing-details">
          <h3>What you get per license</h3>
          <ul class="pricing-features">
            <li><span class="check">&#10003;</span> <strong>12 months of SwingNerds Premium</strong> for one customer</li>
            <li><span class="check">&#10003;</span> Automatic swing video recording (Windows + iOS)</li>
            <li><span class="check">&#10003;</span> AI Swing Analysis with follow-up questions</li>
            <li><span class="check">&#10003;</span> Launch monitor integrations (GSPro, Uneekor, Rapsodo, Square Golf, CSV)</li>
            <li><span class="check">&#10003;</span> Side-by-side swing comparison, synced frame-by-frame</li>
            <li><span class="check">&#10003;</span> Full stats, consistency charts, and dispersion analysis</li>
            <li><span class="check">&#10003;</span> No credit card required for your customer to redeem</li>
          </ul>
        </div>

        <div class="pricing-cta">
          <button @click="scrollToContact" class="cta-button primary large">Apply to Become a Dealer</button>
          <p class="pricing-note">Dealer accounts are onboarded by our team. Reach out and we'll get you set up.</p>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section" ref="contactSection">
        <h2>Let's Work Together</h2>
        <p class="contact-subtitle">Tell us a bit about your business and we'll get back to you the same day.</p>

        <form @submit.prevent="submitContact" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>Name</label>
              <input v-model="contactForm.name" type="text" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="contactForm.email" type="email" required placeholder="you@business.com" />
            </div>
          </div>
          <div class="form-group">
            <label>Business Name</label>
            <input v-model="contactForm.businessName" type="text" placeholder="Your company" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Business Type</label>
              <select v-model="contactForm.businessType">
                <option value="">Select...</option>
                <option value="installer">Sim installer</option>
                <option value="coach">Coach / instructor</option>
                <option value="retailer">Retailer</option>
                <option value="launchmonitor">Launch monitor dealer</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label>Estimated licenses per month</label>
              <input v-model="contactForm.estimatedVolume" type="text" placeholder="e.g. 5-10" />
            </div>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea v-model="contactForm.message" rows="4" placeholder="Tell us about your business and how you're thinking of using SwingNerds with your customers..."></textarea>
          </div>
          <button type="submit" class="cta-button primary" :disabled="contactSubmitting">
            {{ contactSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
          <p v-if="contactSuccess" class="success-msg">Message sent! We'll be in touch soon.</p>
          <p v-if="contactError" class="error-msg">{{ contactError }}</p>
        </form>
      </section>

      <!-- Footer -->
      <footer class="dealers-footer">
        <p>&copy; {{ new Date().getFullYear() }} SwingNerds. All rights reserved.</p>
        <div class="footer-links">
          <router-link to="/" class="footer-link">Home</router-link>
          <router-link to="/pricing" class="footer-link">Individual Pricing</router-link>
          <router-link to="/commercial" class="footer-link">Facilities</router-link>
          <router-link to="/privacy" class="footer-link">Privacy</router-link>
          <router-link to="/support" class="footer-link">Support</router-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Refs for scroll targets
const pricingSection = ref(null);
const contactSection = ref(null);

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  businessName: '',
  businessType: '',
  estimatedVolume: '',
  message: '',
});
const contactSubmitting = ref(false);
const contactSuccess = ref(false);
const contactError = ref('');

function scrollToPricing() {
  pricingSection.value?.scrollIntoView({ behavior: 'smooth' });
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
        subject: `Dealer Inquiry - ${contactForm.value.businessName || 'Unknown Business'}`,
        message: [
          contactForm.value.message,
          '',
          `Business: ${contactForm.value.businessName || 'N/A'}`,
          `Type: ${contactForm.value.businessType || 'N/A'}`,
          `Estimated monthly volume: ${contactForm.value.estimatedVolume || 'N/A'}`,
        ].join('\n'),
      }),
    });

    if (response.ok) {
      contactSuccess.value = true;
      contactForm.value = { name: '', email: '', businessName: '', businessType: '', estimatedVolume: '', message: '' };
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
.dealers-page {
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

.dealers-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero */
.hero-section {
  text-align: center;
  padding: 80px 0 60px;
}
.hero-badge {
  display: inline-block;
  background: rgba(0, 173, 181, 0.15);
  color: var(--primary);
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.hero-section h1 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 20px;
  color: var(--text-primary);
}
.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-primary);
  max-width: 720px;
  margin: 0 auto 16px;
  line-height: 1.5;
}
.hero-description {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 720px;
  margin: 0 auto 36px;
  line-height: 1.6;
}
.hero-cta {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Section shared */
.how-it-works-section,
.features-section,
.pricing-section,
.contact-section {
  padding: 72px 0;
  border-top: 1px solid var(--border);
}
.how-it-works-section h2,
.features-section h2,
.pricing-section h2,
.contact-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 12px;
  color: var(--text-primary);
}

/* How it works */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 40px;
}
.step-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
}
.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-weight: 700;
  margin-bottom: 14px;
}
.step-card h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
  color: var(--text-primary);
}
.step-card p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.55;
  margin: 0;
}

/* Features grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
}
.feature-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
}
.feature-icon {
  font-size: 1.75rem;
  margin-bottom: 10px;
}
.feature-card h3 {
  margin: 0 0 8px;
  font-size: 1.05rem;
  color: var(--text-primary);
}
.feature-card p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.55;
  margin: 0;
}

/* Pricing */
.pricing-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
  max-width: 620px;
  margin: 0 auto 40px;
  line-height: 1.6;
}
.pricing-tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  max-width: 900px;
  margin: 0 auto 48px;
}
.pricing-tier-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px 20px;
  text-align: center;
}
.pricing-tier-card.featured {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary);
  transform: translateY(-4px);
}
.tier-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}
.tier-discount {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 6px;
}
.tier-note {
  font-size: 13px;
  color: var(--text-tertiary);
}

.pricing-details {
  max-width: 720px;
  margin: 0 auto 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 32px 28px;
}
.pricing-details h3 {
  margin: 0 0 16px;
  color: var(--text-primary);
  font-size: 1.1rem;
  text-align: center;
}
.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0;
}
.pricing-features li {
  padding: 10px 0;
  font-size: 14px;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.pricing-features li:last-child { border-bottom: none; }
.pricing-features .check {
  color: var(--success);
  font-weight: 700;
  flex-shrink: 0;
}

.pricing-cta {
  text-align: center;
  margin-top: 24px;
}
.pricing-note {
  color: var(--text-tertiary);
  font-size: 13px;
  margin-top: 12px;
}

/* Contact */
.contact-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
  margin: 0 auto 32px;
  line-height: 1.6;
}
.contact-form {
  max-width: 680px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 32px 28px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}
.form-group label {
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 600;
}
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  color: var(--text-primary);
  font-size: 14px;
  font-family: inherit;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}
.form-group textarea {
  resize: vertical;
}
.success-msg {
  color: var(--success);
  font-size: 14px;
  margin-top: 12px;
}
.error-msg {
  color: #f87171;
  font-size: 14px;
  margin-top: 12px;
}

/* CTA buttons */
.cta-button {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
  font-family: inherit;
  text-decoration: none;
}
.cta-button.large {
  padding: 14px 28px;
  font-size: 15px;
}
.cta-button.primary {
  background: var(--primary);
  color: #fff;
}
.cta-button.primary:hover { background: var(--primary-dark); }
.cta-button.outline {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-primary);
}
.cta-button.outline:hover { border-color: var(--primary); color: var(--primary); }
.cta-button:disabled { opacity: 0.6; cursor: not-allowed; }

/* Footer */
.dealers-footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--text-tertiary);
  font-size: 13px;
}
.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
  flex-wrap: wrap;
}
.footer-link {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 13px;
  text-decoration: none;
  font-family: inherit;
}
.footer-link:hover { color: var(--primary); }

@media (max-width: 700px) {
  .hero-section h1 { font-size: 2.25rem; }
  .hero-section { padding: 48px 0 36px; }
  .how-it-works-section, .features-section, .pricing-section, .contact-section { padding: 48px 0; }
}
</style>
