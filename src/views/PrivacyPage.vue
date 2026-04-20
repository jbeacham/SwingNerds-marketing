<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}
</script>

<template>
  <div class="public-page">
    <div class="page-container">
      <main class="page-content">
        <div class="content-wrapper">
          <h1>Privacy Policy</h1>
          
          <div class="last-updated">
            <strong>Last Updated:</strong> {{ new Date().toLocaleDateString() }}
          </div>

          <div class="privacy-section">
            <h2>Introduction</h2>
            <p>
              At SwingNerds, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our golf swing analysis platform.
            </p>
          </div>

          <div class="privacy-section">
            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <ul>
              <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
              <li><strong>Profile Data:</strong> Optional profile information you choose to provide</li>
              <li><strong>Contact Information:</strong> When you contact us for support or feedback</li>
            </ul>

            <h3>Golf Performance Data</h3>
            <ul>
              <li><strong>Launch Monitor Data:</strong> Swing metrics from your connected launch monitors (Rapsodo, Uneekor, GSPro, Square Golf)</li>
              <li><strong>Session Data:</strong> Practice session information and timestamps</li>
              <li><strong>Performance Analytics:</strong> Calculated statistics and trends based on your swing data</li>
              <li><strong>Video Data:</strong> Swing videos when available from your launch monitor</li>
            </ul>

            <h3>Usage Information</h3>
            <ul>
              <li><strong>Application Usage:</strong> How you interact with our platform and features</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device characteristics</li>
              <li><strong>Log Data:</strong> Access times and pages viewed for security and analytics</li>
            </ul>
          </div>

          <div class="privacy-section">
            <h2>How We Use Your Information</h2>
            
            <h3>Service Provision</h3>
            <ul>
              <li>Provide golf swing analysis and performance tracking</li>
              <li>Generate personalized insights and recommendations</li>
              <li>Sync data from your connected launch monitor devices</li>
              <li>Enable progress tracking and historical analysis</li>
            </ul>

            <h3>Communication</h3>
            <ul>
              <li>Send account-related notifications and updates</li>
              <li>Respond to your support requests and feedback</li>
              <li>Provide important service announcements</li>
            </ul>

            <h3>Service Improvement</h3>
            <ul>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Develop new features and enhance existing functionality</li>
              <li>Ensure platform security and prevent abuse</li>
            </ul>
          </div>

          <div class="privacy-section">
            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul>
              <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
              <li><strong>Access Controls:</strong> Strict access controls limit who can view your data</li>
              <li><strong>Secure Infrastructure:</strong> Our servers are hosted on secure, monitored platforms</li>
            </ul>
          </div>

          <div class="privacy-section">
            <h2>Third-Party Integrations</h2>
            
            <h3>Launch Monitor Integrations</h3>
            <p>
              We integrate with Rapsodo, Uneekor, GSPro, and Square Golf to import your shot data.
              <strong>Important:</strong> SwingNerds does not permanently store your launch monitor login credentials.
              We use secure authentication to connect to your accounts, and you can disconnect any data source at any time
              through your SwingNerds settings.
            </p>

            <h3>Email Services</h3>
            <p>
              We use SendGrid to send account-related emails. SendGrid processes email addresses only for delivery 
              purposes and maintains their own privacy standards.
            </p>

            <h3>Analytics</h3>
            <p>
              We may use analytics services to understand how our platform is used, but we ensure that any data 
              shared is anonymized and cannot be used to identify individual users.
            </p>
          </div>

          <div class="privacy-section">
            <h2>Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties under any circumstances.
            </p>
          </div>

          <div class="privacy-section">
            <h2>Your Privacy Rights</h2>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Account Deletion:</strong> Delete your account and associated data at any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <a href="mailto:support@swingnerds.com">support@swingnerds.com</a>.
            </p>
          </div>

          <div class="privacy-section">
            <h2>Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul>
              <li><strong>Account Data:</strong> Retained while your account is active</li>
              <li><strong>Golf Performance Data:</strong> Retained to provide historical analysis and trends</li>
              <li><strong>Support Communications:</strong> Retained for a reasonable period to provide ongoing support</li>
              <li><strong>Log Data:</strong> Typically retained for 30-90 days for security purposes</li>
            </ul>
            <p>
              <strong>Data Location:</strong> All your data is stored exclusively within the United States and is never transferred internationally.
            </p>
          </div>

          <div class="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has provided 
              us with personal information, please contact us immediately.
            </p>
          </div>


          <div class="privacy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending an email notification to your registered email address</li>
              <li>Displaying a prominent notice within our application</li>
            </ul>
            <p>
              Your continued use of our service after such notification constitutes acceptance of the updated Privacy Policy.
            </p>
          </div>

          <div class="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div class="contact-info">
              <p><strong>Email:</strong> <a href="mailto:support@swingnerds.com">support@swingnerds.com</a></p>
              <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
            </div>
            <p>
              We will respond to your inquiry within a reasonable timeframe and work with you to address any concerns.
            </p>
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
  min-height: 100vh;
  background-color: var(--background);
  color: var(--text-primary);
}

.page-container {
  max-width: 1000px;
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
  max-width: 900px;
  margin: 0 auto;
}

.content-wrapper > h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--space-lg);
}

.last-updated {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--space-xl);
  padding: var(--space-sm);
  background-color: var(--surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.privacy-section {
  margin-bottom: var(--space-xl);
}

.privacy-section h2 {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: var(--space-lg);
  border-bottom: 2px solid var(--primary);
  padding-bottom: var(--space-sm);
}

.privacy-section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  margin-top: var(--space-lg);
}

.privacy-section p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
}

.privacy-section ul {
  margin-bottom: var(--space-md);
  padding-left: var(--space-lg);
}

.privacy-section li {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-sm);
}

.privacy-section li strong {
  color: var(--primary);
  font-weight: 600;
}

.contact-info {
  background-color: var(--surface);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  margin: var(--space-md) 0;
}

.contact-info p {
  margin: var(--space-sm) 0;
}

.contact-info a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.contact-info a:hover {
  text-decoration: underline;
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
  
  .privacy-section h2 {
    font-size: 1.4rem;
  }
  
  .privacy-section h3 {
    font-size: 1.2rem;
  }
  
  .footer-links {
    gap: var(--space-md);
  }
}
</style>