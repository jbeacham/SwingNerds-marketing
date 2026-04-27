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
          <section class="page-hero">
            <div class="hero-badge">Security</div>
            <h1>Security at SwingNerds</h1>
            <p class="hero-subtitle">
              SwingNerds is a passion project, built by an experienced engineering leader who takes
              security as seriously here as in the day job. This page exists so you know that.
            </p>
          </section>

          <div class="about-section">
            <h2>Who builds this</h2>
            <p>
              SwingNerds is built and maintained by a CTO whose day job is shipping software in
              regulated industries where security, privacy, and reliability are not afterthoughts.
              That mindset doesn't get checked at the door when the work is golf.
            </p>
            <p>
              We're choosing to keep the engineering team's identities private for now. What we
              will say is that the standards we hold ourselves to here are the same ones we hold
              ourselves to in environments that get audited.
            </p>
          </div>

          <div class="about-section">
            <h2>Our approach</h2>
            <ul>
              <li><strong>Defense in depth.</strong> We layer protections at the network, application, and data layers rather than relying on any single control.</li>
              <li><strong>Least privilege.</strong> Internal access to production data is limited to what's actually needed to operate the service.</li>
              <li><strong>Encryption everywhere.</strong> Data is encrypted in transit and at rest, end to end across the stack.</li>
              <li><strong>Trusted infrastructure.</strong> We run on enterprise-grade cloud and CDN providers, not a friend's basement server.</li>
              <li><strong>No shortcuts on payment.</strong> We never see or store your card details. Payment processing is handled by our PCI-compliant provider.</li>
              <li><strong>Continuous review.</strong> Security is part of the development loop, not a quarterly checkbox.</li>
            </ul>
          </div>

          <div class="about-section">
            <h2>What we ask of you</h2>
            <p>
              Security is a partnership. Use a strong, unique password, keep your email account
              secure, and tell us right away if anything looks off with your account. If you
              spot something that smells wrong, we'd much rather hear about it than not.
            </p>
          </div>

          <div class="about-section">
            <h2>Reporting a vulnerability</h2>
            <p>
              Found something? Email
              <a href="mailto:security@swingnerds.com" class="inline-link">security@swingnerds.com</a>
              with a description, reproduction steps, and the impact you believe it has. We aim to
              acknowledge new reports within two business days. Researchers acting in good faith
              will be credited (with permission) once a fix ships.
            </p>
            <p>
              Our full disclosure policy and scope notes live at
              <a href="/.well-known/security.txt" class="inline-link">/.well-known/security.txt</a>.
            </p>
          </div>

          <div class="about-section">
            <h2>Questions</h2>
            <p>
              Have a security or compliance question that isn't a vulnerability report? Reach out
              at <a href="mailto:security@swingnerds.com" class="inline-link">security@swingnerds.com</a>
              and we'll get back to you.
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
            <router-link to="/security" class="footer-link">Security</router-link>
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

.about-section h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.about-section p {
  color: #475569;
  margin-bottom: 14px;
  font-size: 1rem;
  line-height: 1.65;
}

.about-section ul {
  margin-top: var(--space-md);
  padding-left: var(--space-lg);
}

.about-section li {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-sm);
}

.about-section li strong {
  color: var(--primary);
  font-weight: 600;
}

.inline-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.inline-link:hover {
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
  .content-wrapper > h1 {
    font-size: 2rem;
  }

  .about-section h2 {
    font-size: 1.4rem;
  }

  .footer-links {
    gap: var(--space-md);
  }
}
</style>
