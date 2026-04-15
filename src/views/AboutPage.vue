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
      <header class="page-header">
        <div class="header-brand">
          <img src="../assets/SwingNerdsLogo.png" alt="Swing Nerds Logo" class="header-logo" />
          <h1>Swing Nerds</h1>
        </div>
        <button class="back-btn" @click="goHome">
          ← Back to Home
        </button>
      </header>

      <main class="page-content">
        <div class="content-wrapper">
          <h1>About Swing Nerds</h1>
          
          <div class="about-section">
            <h2>Our Mission</h2>
            <p class="large-text">
              Swing Nerds is a passion project dedicated to making meaningful use of launch monitor swing data. 
              We believe every golfer should have access to powerful analytics tools to understand and improve their game.
            </p>
          </div>

          <div class="about-section">
            <h2>Why We Built This</h2>
            <p>
              Golf technology has advanced tremendously, with launch monitors like Rapsodo providing incredibly detailed data about every swing. 
              However, many golfers struggle to interpret this data in a way that actually helps them improve.
            </p>
            <p>
              That's where Swing Nerds comes in. We've created a platform that transforms raw launch monitor data into actionable insights, 
              beautiful visualizations, and practical recommendations.
            </p>
          </div>

          <div class="about-section">
            <h2>Our Community-First Approach</h2>
            <div class="community-card">
              <div class="community-icon">🤝</div>
              <p class="large-text">
                <strong>We're building Swing Nerds WITH you, not just FOR you.</strong> We believe in complete transparency 
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
                <div class="feature-icon">📊</div>
                <h3>Data-Driven Insights</h3>
                <p>We turn complex launch monitor data into clear, actionable insights that help you understand your swing patterns and identify areas for improvement.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <h3>Progress Tracking</h3>
                <p>Monitor your improvement over time with detailed trend analysis and performance metrics across all your clubs and practice sessions.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🔗</div>
                <h3>Seamless Integration</h3>
                <p>Direct integration with your Rapsodo launch monitor means your data flows automatically into our analysis platform.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🎮</div>
                <h3>Interactive Analysis</h3>
                <p>Explore your data with interactive charts, shot dispersion patterns, and detailed swing videos to understand every aspect of your game.</p>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2>The Technology</h2>
            <p>
              Swing Nerds is built with modern web technologies to ensure a fast, responsive experience across all devices. 
              We prioritize data security and privacy, ensuring your swing data remains yours while providing the analytics you need to improve.
            </p>
            <ul>
              <li><strong>Real-time data sync</strong> with your Rapsodo launch monitor</li>
              <li><strong>Advanced analytics</strong> powered by statistical analysis</li>
              <li><strong>Secure data handling</strong> with industry-standard encryption</li>
              <li><strong>Cross-platform compatibility</strong> works on desktop, tablet, and mobile</li>
            </ul>
          </div>

          <div class="about-section">
            <h2>Our Vision</h2>
            <p class="large-text">
              We envision a future where every golfer has access to professional-level swing analysis and can make data-driven decisions 
              to improve their game. Whether you're a weekend warrior or a competitive player, Swing Nerds provides the tools you need 
              to understand your swing and track your progress.
            </p>
          </div>

          <div class="about-section pricing-section">
            <h2>Beta Period & Pricing</h2>
            <div class="pricing-card">
              <div class="beta-badge">
                <span class="beta-icon">🚀</span>
                <span class="beta-text">Currently in Beta</span>
              </div>
              
              <p class="large-text">
                <strong>Swing Nerds is currently free during our beta period.</strong> We're using this time to refine features, 
                gather feedback, and ensure we're building exactly what golfers need.
              </p>
              
              <div class="community-pricing-note">
                <p>
                  <strong>This is community-driven pricing.</strong> We're not some faceless corporation setting arbitrary prices. 
                  We want to be completely transparent with our community about costs, pricing, and decisions. Your input will 
                  directly determine our pricing model - because frustrated users help no one.
                </p>
              </div>
              
              <div class="pricing-info">
                <h3>Future Subscription Model</h3>
                <p>
                  Once we exit beta, Swing Nerds will transition to a monthly subscription model. Running a platform that processes 
                  launch monitor data, provides real-time analytics, and maintains secure data storage requires ongoing infrastructure 
                  costs that need to be sustainable.
                </p>
                
                <div class="feedback-request">
                  <h4>💰 We Need Your Input on Pricing!</h4>
                  <p>
                    <strong>How much would you be willing to pay per month for Swing Nerds?</strong> Your honest feedback 
                    will directly influence our pricing strategy. We want to keep this accessible while ensuring we can 
                    continue developing and improving the platform.
                  </p>
                  <p>
                    Whether it's $5, $10, $15, or even "nothing - I'd rather see ads" - we want to hear from you! 
                    Please share your thoughts through our <router-link to="/support" class="inline-link">Support page</router-link> 
                    or email us directly at <a href="mailto:support@swingnerds.com" class="inline-link">support@swingnerds.com</a>.
                  </p>
                </div>
                
                <div class="transparency-note">
                  <h4>💡 Why We'll Eventually Charge</h4>
                  <ul>
                    <li><strong>Server Costs:</strong> Hosting and processing your swing data securely</li>
                    <li><strong>Development:</strong> Continuing to add features and improvements</li>
                    <li><strong>Support:</strong> Providing responsive customer service</li>
                    <li><strong>Integration Costs:</strong> Maintaining connections with launch monitor APIs</li>
                    <li><strong>Sustainability:</strong> Ensuring Swing Nerds can operate long-term</li>
                  </ul>
                </div>
              </div>
            </div>
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
              <img src="../assets/SwingNerdsLogo.png" alt="Swing Nerds Logo" class="footer-logo-img" />
              <span class="footer-logo-text">Swing Nerds</span>
            </div>
            <span class="footer-tagline">Empowering golfers with data</span>
          </div>
          <div class="footer-links">
            <router-link to="/about" class="footer-link">About</router-link>
            <router-link to="/privacy" class="footer-link">Privacy</router-link>
            <router-link to="/support" class="footer-link">Support</router-link>
          </div>
          <div class="footer-copyright">
            &copy; {{ new Date().getFullYear() }} Swing Nerds. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.public-page {
  min-height: 100vh;
  background-color: var(--background);
  color: var(--text-primary);
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
  max-width: 800px;
  margin: 0 auto;
}

.content-wrapper > h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--space-xl);
}

.about-section {
  margin-bottom: var(--space-xl);
}

.about-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  border-bottom: 2px solid var(--primary);
  padding-bottom: var(--space-sm);
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
}

.large-text {
  font-size: 1.2rem !important;
  font-weight: 500;
  color: var(--text-primary) !important;
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