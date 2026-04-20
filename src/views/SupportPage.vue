<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const loading = ref(false);
const error = ref('');
const success = ref(false);

async function submitContactForm() {
  if (!name.value || !email.value || !subject.value || !message.value) {
    error.value = 'Please fill in all fields.';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5133';
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    });

    if (response.ok) {
      success.value = true;
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      const errorData = await response.json().catch(() => ({}));
      error.value = errorData.message || 'Failed to send message. Please try again.';
    }
  } catch {
    error.value = 'Network error. Please check your connection and try again.';
  } finally {
    loading.value = false;
  }
}

function resetSuccess() {
  if (success.value) success.value = false;
}
</script>

<template>
  <div class="public-page">
    <div class="page-container">
      <main class="page-content">
        <div class="content-wrapper">
          <section class="page-hero">
            <div class="hero-badge">Support &amp; Feedback</div>
            <h1>Get in touch</h1>
            <p class="hero-subtitle">
              Questions, feedback, feature requests, or just want to chat about your bay setup? We read every email and respond personally, usually same-day.
            </p>
          </section>

          <section class="contact-options">
            <div class="option-card">
              <h3>Email us directly</h3>
              <p>Fastest way to reach us. Goes straight to Jordan.</p>
              <a href="mailto:support@swingnerds.com" class="email-link">support@swingnerds.com</a>
            </div>
            <div class="option-card">
              <h3>Or send a message here</h3>
              <p>Same inbox, same response time. Use whichever you prefer.</p>
            </div>
          </section>

          <section class="contact-form-section">
            <div v-if="success" class="success-box">
              <h3>Message sent</h3>
              <p>Thanks, we'll get back to you soon. For anything urgent, email <a href="mailto:support@swingnerds.com">support@swingnerds.com</a>.</p>
              <button class="secondary-btn" @click="success = false">Send another message</button>
            </div>

            <form v-else class="contact-form" @submit.prevent="submitContactForm">
              <div v-if="error" class="error-box">{{ error }}</div>

              <div class="form-row">
                <div class="form-group">
                  <label for="supportName">Your name</label>
                  <input id="supportName" v-model="name" type="text" placeholder="Your name" :disabled="loading" @input="resetSuccess" required />
                </div>
                <div class="form-group">
                  <label for="supportEmail">Email</label>
                  <input id="supportEmail" v-model="email" type="email" placeholder="you@example.com" :disabled="loading" @input="resetSuccess" required />
                </div>
              </div>

              <div class="form-group">
                <label for="supportSubject">What's this about?</label>
                <select id="supportSubject" v-model="subject" :disabled="loading" @change="resetSuccess" required>
                  <option value="">Select a topic</option>
                  <option value="Feature request">Feature request</option>
                  <option value="Bug report">Bug report</option>
                  <option value="General feedback">General feedback</option>
                  <option value="Technical support">Technical support</option>
                  <option value="Data source connection">Launch monitor / data source help</option>
                  <option value="Billing">Billing</option>
                  <option value="Partnerships">Partnerships / dealer inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="supportMessage">Message</label>
                <textarea id="supportMessage" v-model="message" rows="6" placeholder="Tell us what's on your mind..." :disabled="loading" @input="resetSuccess" required></textarea>
              </div>

              <button type="submit" class="primary-btn" :disabled="loading">
                {{ loading ? 'Sending...' : 'Send message' }}
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.public-page {
  min-height: 100vh;
  background: #ffffff;
  color: #0f172a;
  font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
}

.page-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.content-wrapper {
  max-width: 820px;
  margin: 0 auto;
}

/* Hero */
.page-hero {
  padding: 64px 0 48px;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 48px;
}
.hero-badge {
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
.hero-subtitle {
  font-size: 1.15rem;
  color: #475569;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.65;
}

/* Options row */
.contact-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 48px;
}
@media (max-width: 640px) {
  .contact-options { grid-template-columns: 1fr; }
}
.option-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
}
.option-card h3 {
  margin: 0 0 8px;
  font-size: 1.05rem;
  color: #0f172a;
}
.option-card p {
  margin: 0 0 12px;
  color: #475569;
  font-size: 14px;
  line-height: 1.55;
}
.email-link {
  color: #06b6d4;
  font-weight: 600;
  text-decoration: none;
}
.email-link:hover { text-decoration: underline; }

/* Form */
.contact-form-section { margin-bottom: 72px; }
.contact-form {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
@media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}
.form-group label {
  color: #475569;
  font-size: 13px;
  font-weight: 600;
}
.form-group input,
.form-group select,
.form-group textarea {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 14px;
  color: #0f172a;
  font-size: 14px;
  font-family: inherit;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #06b6d4;
}
.form-group textarea { resize: vertical; }

.primary-btn {
  background: #06b6d4;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s;
  font-family: inherit;
}
.primary-btn:hover { background: #0891b2; }
.primary-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.secondary-btn {
  background: #f8fafc;
  color: #0f172a;
  border: 1px solid #e2e8f0;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
}

.error-box {
  padding: 12px 16px;
  border-radius: 8px;
  background: rgba(220, 38, 38, 0.08);
  border: 1px solid rgba(220, 38, 38, 0.2);
  color: #dc2626;
  margin-bottom: 16px;
  font-size: 14px;
}

.success-box {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 28px;
  text-align: center;
}
.success-box h3 {
  margin: 0 0 8px;
  color: #0f172a;
}
.success-box p {
  margin: 0 0 16px;
  color: #475569;
}
.success-box a { color: #06b6d4; }
</style>
