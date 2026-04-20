<template>
  <div class="pricing-page">
    <div class="pricing-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1>Simple, Transparent Pricing</h1>
        <p class="hero-subtitle">
          Start your 7-day free trial today. No credit card required.
        </p>
      </section>

      <!-- Billing toggle -->
      <section class="billing-toggle-section">
        <div class="billing-toggle">
          <button :class="['toggle-btn', { active: billingPeriod === 'monthly' }]" @click="billingPeriod = 'monthly'">Monthly</button>
          <button :class="['toggle-btn', { active: billingPeriod === 'annual' }]" @click="billingPeriod = 'annual'">Annual <span class="save-badge">Save 17%</span></button>
        </div>
      </section>

      <!-- Pricing Cards -->
      <section class="pricing-cards">
        <div class="pricing-card">
          <div class="card-header">
            <h3>Pro</h3>
            <div class="price">
              <span class="amount">{{ billingPeriod === 'monthly' ? '$4.99' : '$49.99' }}</span>
              <span class="period">{{ billingPeriod === 'monthly' ? '/month' : '/year' }}</span>
            </div>
            <div class="price-alt">
              <template v-if="billingPeriod === 'monthly'">or $49.99/year <span class="price-save">Save 17%</span></template>
              <template v-else>or $4.99/month</template>
            </div>
          </div>
          <div class="trial-badge">7 Days Free</div>
          <div class="video-limit-badge">500 shots with video</div>
          <ul class="features-list">
            <li><span class="check">&#10003;</span> Unlimited shot tracking</li>
            <li><span class="check">&#10003;</span> Advanced analytics &amp; charts</li>
            <li><span class="check">&#10003;</span> Cloud sync across devices</li>
            <li><span class="check">&#10003;</span> SwingNerds Vision recording</li>
            <li><span class="check">&#10003;</span> Side-by-side swing comparison</li>
            <li><span class="check">&#10003;</span> AI Swing Analysis</li>
            <li><span class="check">&#10003;</span> Priority support</li>
            <li><span class="check">&#10003;</span> Cancel anytime</li>
          </ul>
          <button @click="startTrial" class="cta-button">
            Start Free Trial
          </button>
        </div>

        <div class="pricing-card featured">
          <div class="featured-badge">MOST POPULAR</div>
          <div class="card-header">
            <h3>Premium</h3>
            <div class="price">
              <span class="amount">{{ billingPeriod === 'monthly' ? '$9.99' : '$99.99' }}</span>
              <span class="period">{{ billingPeriod === 'monthly' ? '/month' : '/year' }}</span>
            </div>
            <div class="price-alt">
              <template v-if="billingPeriod === 'monthly'">or $99.99/year <span class="price-save">Save 17%</span></template>
              <template v-else>or $9.99/month</template>
            </div>
          </div>
          <div class="video-limit-badge highlight">2,000 shots with video</div>
          <ul class="features-list">
            <li><span class="check">&#10003;</span> Everything in Pro</li>
            <li><span class="check">&#10003;</span> 4x more video storage</li>
          </ul>
          <button @click="startTrial" class="cta-button featured-cta">
            Start Free Trial
          </button>
        </div>

        <div class="pricing-card">
          <div class="card-header">
            <h3>Ultimate</h3>
            <div class="price">
              <span class="amount">{{ billingPeriod === 'monthly' ? '$19.99' : '$199.99' }}</span>
              <span class="period">{{ billingPeriod === 'monthly' ? '/month' : '/year' }}</span>
            </div>
            <div class="price-alt">
              <template v-if="billingPeriod === 'monthly'">or $199.99/year <span class="price-save">Save 17%</span></template>
              <template v-else>or $19.99/month</template>
            </div>
          </div>
          <div class="video-limit-badge highlight">5,000 shots with video</div>
          <ul class="features-list">
            <li><span class="check">&#10003;</span> Everything in Premium</li>
            <li><span class="check">&#10003;</span> 10x more video storage</li>
          </ul>
          <button @click="startTrial" class="cta-button">
            Start Free Trial
          </button>
        </div>
      </section>

      <!-- Integrations Section -->
      <section class="integrations-section">
        <h2>Works With Your Equipment</h2>
        <p class="integrations-subtitle">Import data from the launch monitors and simulators you already use</p>
        <div class="integrations-logos">
          <img src="../assets/rapsodo-logo.png" alt="Rapsodo" class="integration-logo" title="Rapsodo" />
          <img src="../assets/uneekor_logo.png" alt="Uneekor" class="integration-logo" title="Uneekor" />
          <img src="../assets/gspro_logo.png" alt="GSPro" class="integration-logo" title="GSPro" />
          <img src="../assets/squaregolf_logo.png" alt="Square Golf" class="integration-logo" title="Square Golf" />
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h4>How does the free trial work?</h4>
            <p>Start with a 7-day free trial with full access to all features. No credit card required to start. You'll only need to add payment info if you decide to continue after the trial ends.</p>
          </div>
          <div class="faq-item">
            <h4>Can I cancel anytime?</h4>
            <p>Absolutely. Cancel your subscription at any time with no questions asked. You'll keep access until the end of your current billing period.</p>
          </div>
          <div class="faq-item">
            <h4>What launch monitors are supported?</h4>
            <p>GSPro (with real-time automatic sync via our Windows app), Rapsodo MLM2Pro, Uneekor QED and EYE XO, and Square Golf. More integrations are being added regularly.</p>
          </div>
          <div class="faq-item">
            <h4>Is my data secure?</h4>
            <p>Yes. Your data is encrypted and stored securely in the cloud. We never share your personal information with third parties.</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="final-cta-section">
        <h2>Ready to Improve Your Game?</h2>
        <p>Join golfers who are using data to lower their scores.</p>
        <button @click="startTrial" class="cta-button large">
          Start Your Free Trial
        </button>
        <p class="cta-note">7-day free trial. No credit card required.</p>
      </section>

      <!-- Footer -->
      <footer class="pricing-footer">
        <div class="footer-links">
          <a href="/about">About</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/support">Support</a>
          <a href="mailto:support@swingnerds.com">Contact</a>
        </div>
        <p class="pricing-feedback">
          Think this pricing is unfair? <a href="mailto:support@swingnerds.com">Let us know</a>
        </p>
        <p class="copyright">© {{ currentYear }} SwingNerds. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { goToApp } from '../services/appUrl.js';

const router = useRouter();
const billingPeriod = ref('monthly');

const currentYear = computed(() => new Date().getFullYear());

function goHome() {
  router.push('/');
}

function goToLogin() {
  goToApp('/login');
}

function startTrial() {
  goToApp('/register');
}

</script>

<style scoped>
.pricing-page {
  --background: #ffffff;
  --background-alt: #f8fafc;
  --surface: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  --text-tertiary: #94a3b8;
  --border: #e2e8f0;
  --primary: #06b6d4;
  --primary-dark: #0891b2;
  --success: #10b981;

  min-height: 100vh;
  background: linear-gradient(180deg, var(--background) 0%, var(--background-alt) 100%);
  color: var(--text-primary);
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

/* Header */
.pricing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg) 0;
  border-bottom: 1px solid var(--border);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
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

.beta-badge {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav-link {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
  background-color: var(--background-alt);
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
  padding: var(--space-xxl) 0;
}

.hero-section h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 var(--space-md) 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin: 0 0 var(--space-xl) 0;
}

/* Billing toggle */
.billing-toggle-section {
  text-align: center;
  margin-bottom: var(--space-xl);
}
.billing-toggle {
  display: inline-flex;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 4px;
}
.toggle-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.15s;
}
.toggle-btn.active {
  background: var(--accent);
  color: #fff;
}
.save-badge {
  font-size: 0.7rem;
  font-weight: 700;
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 4px;
}

/* Video limit badge */
.video-limit-badge {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  padding: 4px 12px;
  background: rgba(0, 173, 181, 0.08);
  border: 1px solid rgba(0, 173, 181, 0.2);
  border-radius: 6px;
  display: inline-block;
}
.video-limit-badge.highlight {
  color: var(--accent);
  font-weight: 600;
}

/* Pricing Cards */
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-xxl);
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.pricing-card {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.pricing-card.featured {
  border-color: var(--primary);
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.03) 0%, rgba(6, 182, 212, 0.01) 100%);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.card-header h3 {
  margin: 0 0 var(--space-sm) 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.price {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-bottom: 4px;
}

.price .amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
}

.price .period {
  color: var(--text-secondary);
  font-size: 1rem;
}

.price-alt {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.price-save {
  background: rgba(16, 185, 129, 0.12);
  color: #059669;
  font-weight: 700;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 999px;
}

.trial-badge {
  display: inline-block;
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.savings-tag {
  color: var(--success);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-xl) 0;
  flex-grow: 1;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm) 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.features-list .check {
  color: var(--success);
  font-weight: 600;
  flex-shrink: 0;
}

.cta-button {
  width: 100%;
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3);
}

.cta-button.featured-cta {
  background: linear-gradient(135deg, var(--success) 0%, #059669 100%);
}

.cta-button.featured-cta:hover {
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.cta-button.large {
  max-width: 320px;
  padding: 20px 40px;
  font-size: 1.1rem;
}

/* Integrations Section */
.integrations-section {
  padding-top: 4rem;
  padding-bottom: var(--space-xxl);
  margin-top: 3rem;
  text-align: center;
  border-top: 1px solid var(--border);
}

.integrations-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 var(--space-md) 0;
  color: var(--text-primary);
}

.integrations-subtitle {
  color: var(--text-secondary);
  margin: 0 0 var(--space-xl) 0;
}

.integrations-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.integration-logo {
  height: 40px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.integration-logo:hover {
  opacity: 1;
}

/* FAQ Section */
.faq-section {
  padding-top: 4rem;
  padding-bottom: var(--space-xxl);
  margin-top: 3rem;
  border-top: 1px solid var(--border);
}

.faq-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 var(--space-xl) 0;
  color: var(--text-primary);
  text-align: center;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.faq-item h4 {
  margin: 0 0 var(--space-sm) 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.faq-item p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Final CTA Section */
.final-cta-section {
  padding: var(--space-xxl);
  margin-top: 4rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(6, 182, 212, 0.02) 100%);
  border-radius: var(--radius-xl);
  margin-bottom: var(--space-xxl);
}

.final-cta-section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 var(--space-sm) 0;
  color: var(--text-primary);
}

.final-cta-section > p {
  color: var(--text-secondary);
  margin: 0 0 var(--space-xl) 0;
  font-size: 1.1rem;
}

.cta-note {
  margin-top: var(--space-md);
  color: var(--text-tertiary);
  font-size: 0.9rem;
}

/* Footer */
.pricing-footer {
  padding: var(--space-xl) 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  margin-bottom: var(--space-md);
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

.pricing-feedback {
  color: var(--text-tertiary);
  font-size: 0.85rem;
  margin: 0 0 var(--space-md) 0;
}

.pricing-feedback a {
  color: var(--primary);
  text-decoration: none;
}

.pricing-feedback a:hover {
  text-decoration: underline;
}

.copyright {
  color: var(--text-tertiary);
  font-size: 0.9rem;
  margin: 0;
}

/* Mobile Responsive */
@media (max-width: 968px) {
  .pricing-cards {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .pricing-card.featured {
    order: -1;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .integrations-logos {
    gap: 2rem;
  }

  .integration-logo {
    height: 32px;
  }
}

@media (max-width: 640px) {
  .pricing-header {
    flex-direction: column;
    gap: var(--space-md);
  }

  .header-nav {
    width: 100%;
    justify-content: center;
  }

  .hero-section h1 {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .footer-links {
    flex-direction: column;
    gap: var(--space-md);
  }
}
</style>
