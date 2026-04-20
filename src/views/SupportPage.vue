<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form state
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const loading = ref(false);
const error = ref('');
const success = ref(false);

function goHome() {
  router.push('/');
}

// Handle form submission
async function submitContactForm() {
  if (!name.value || !email.value || !subject.value || !message.value) {
    error.value = 'Please fill in all fields';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5133';
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
      })
    });

    if (response.ok) {
      success.value = true;
      // Reset form
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      const errorData = await response.json();
      error.value = errorData.message || 'Failed to send message. Please try again.';
    }
  } catch (err) {
    error.value = 'Network error. Please check your connection and try again.';
  } finally {
    loading.value = false;
  }
}

// Reset success state when user starts typing again
function resetSuccess() {
  if (success.value) {
    success.value = false;
  }
}
</script>

<template>
  <div class="public-page">
    <div class="page-container">
      <main class="page-content">
        <div class="content-wrapper">
          <h1>Support & Feedback</h1>
          
          <div class="intro-section">
            <div class="feedback-card">
              <div class="feedback-icon">💬</div>
              <h2>We Want to Hear From You!</h2>
              <p class="large-text">
                Your feedback is the driving force behind SwingNerds. Whether you love something, hate something, 
                or have ideas for improvement - we want to know about it!
              </p>
              <div class="feedback-emphasis">
                <p><strong>Tell us what you hate and what you love!</strong></p>
                <p>Every piece of feedback helps us build a better platform for golfers everywhere.</p>
              </div>
            </div>
          </div>

          <div class="support-sections">
            <div class="support-grid">
              <div class="support-card">
                <div class="support-icon">🚀</div>
                <h3>Feature Requests</h3>
                <p>Have an idea for a new feature? We'd love to hear it! From new chart types to advanced analytics, your suggestions shape our roadmap.</p>
              </div>
              
              <div class="support-card">
                <div class="support-icon">🐛</div>
                <h3>Bug Reports</h3>
                <p>Found something that's not working right? Let us know! The more details you can provide, the faster we can fix it.</p>
              </div>
              
              <div class="support-card">
                <div class="support-icon">💡</div>
                <h3>General Feedback</h3>
                <p>Love the app? Frustrated with something? We want to hear all of it. Your honest feedback is invaluable to us.</p>
              </div>
              
              <div class="support-card">
                <div class="support-icon">🔧</div>
                <h3>Technical Support</h3>
                <p>Having trouble connecting your Rapsodo or accessing your data? We're here to help you get back on track.</p>
              </div>
            </div>
          </div>

          <div class="contact-section">
            <h2>Get in Touch</h2>
            
            <div class="contact-methods">
              <div class="contact-card">
                <div class="contact-icon">📧</div>
                <h3>Email Support</h3>
                <p>For direct support or detailed feedback</p>
                <a href="mailto:support@swingnerds.com" class="email-link">support@swingnerds.com</a>
              </div>
              
              <div class="contact-card">
                <div class="contact-icon">📝</div>
                <h3>Quick Feedback Form</h3>
                <p>Send us a message using the form below</p>
              </div>
            </div>
          </div>

          <div class="contact-form-section">
            <div class="form-container">
              <h3>Send Us a Message</h3>
              
              <div v-if="success" class="success-message">
                <div class="success-icon">✅</div>
                <h4>Thank You!</h4>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
                <button class="btn-secondary" @click="success = false">Send Another Message</button>
              </div>

              <form v-else @submit.prevent="submitContactForm" class="contact-form">
                <div v-if="error" class="alert alert-danger">
                  {{ error }}
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="supportName">Your Name *</label>
                    <input 
                      type="text" 
                      id="supportName" 
                      v-model="name" 
                      class="form-control"
                      placeholder="Your full name"
                      :disabled="loading"
                      @input="resetSuccess"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label for="supportEmail">Email Address *</label>
                    <input 
                      type="email" 
                      id="supportEmail" 
                      v-model="email" 
                      class="form-control"
                      placeholder="your.email@example.com"
                      :disabled="loading"
                      @input="resetSuccess"
                      required
                    >
                  </div>
                </div>

                <div class="form-group">
                  <label for="supportSubject">What's this about? *</label>
                  <select 
                    id="supportSubject" 
                    v-model="subject" 
                    class="form-control"
                    :disabled="loading"
                    @change="resetSuccess"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="I Love This Feature!">I Love This Feature! 💖</option>
                    <option value="This Needs Improvement">This Needs Improvement 🔧</option>
                    <option value="Feature Request">Feature Request 🚀</option>
                    <option value="Bug Report">Bug Report 🐛</option>
                    <option value="Technical Support">Technical Support 🛠️</option>
                    <option value="Rapsodo Connection Issues">Rapsodo Connection Issues 📡</option>
                    <option value="Data Analysis Question">Data Analysis Question 📊</option>
                    <option value="General Feedback">General Feedback 💬</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="supportMessage">Your Message *</label>
                  <textarea 
                    id="supportMessage" 
                    v-model="message" 
                    class="form-control textarea"
                    placeholder="Tell us what's on your mind! Be as detailed as you'd like - we read every message."
                    rows="6"
                    :disabled="loading"
                    @input="resetSuccess"
                    required
                  ></textarea>
                  <div class="form-hint">
                    💡 <strong>Tip:</strong> The more specific you are, the better we can help! Include screenshots, 
                    steps to reproduce issues, or examples of what you'd like to see.
                  </div>
                </div>

                <div class="form-buttons">
                  <button 
                    type="submit" 
                    class="btn-primary"
                    :disabled="loading || !name || !email || !subject || !message"
                  >
                    {{ loading ? 'Sending...' : 'Send Message' }}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="feedback-encourage">
            <div class="encourage-card">
              <h3>Your Voice Matters</h3>
              <p>
                SwingNerds is built by golfers, for golfers. Every feature, every improvement, and every fix 
                comes from feedback like yours. We're not just building software - we're building a community 
                of data-driven golfers who want to improve their game.
              </p>
              <div class="testimonial-style">
                <p><em>"The best feedback is honest feedback. Don't hold back - tell us exactly what you think!"</em></p>
                <p class="signature">- The SwingNerds Team</p>
              </div>
            </div>
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
  max-width: 900px;
  margin: 0 auto;
}

.content-wrapper > h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--space-xl);
}

.intro-section {
  margin-bottom: var(--space-xl);
}

.feedback-card {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  text-align: center;
}

.feedback-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.feedback-card h2 {
  color: white;
  margin-bottom: var(--space-md);
  font-size: 1.8rem;
}

.large-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: var(--space-lg);
  color: rgba(255, 255, 255, 0.95);
}

.feedback-emphasis {
  background-color: rgba(255, 255, 255, 0.1);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid white;
}

.feedback-emphasis p {
  margin: var(--space-sm) 0;
  color: white;
}

.support-sections {
  margin-bottom: var(--space-xl);
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.support-card {
  background-color: var(--surface);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  text-align: center;
  transition: transform var(--transition-fast) ease, box-shadow var(--transition-fast) ease;
}

.support-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.support-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
}

.support-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: var(--space-sm);
}

.support-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.contact-section {
  margin-bottom: var(--space-xl);
}

.contact-section h2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: var(--space-lg);
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.contact-card {
  background-color: var(--surface);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  text-align: center;
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
}

.contact-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.contact-card p {
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
}

.email-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
}

.email-link:hover {
  text-decoration: underline;
}

.contact-form-section {
  margin-bottom: var(--space-xl);
}

.form-container {
  background-color: var(--surface);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.form-container h3 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: var(--space-lg);
}

.success-message {
  text-align: center;
  padding: var(--space-xl) 0;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.success-message h4 {
  color: var(--primary);
  margin-bottom: var(--space-sm);
  font-size: 1.4rem;
}

.success-message p {
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  font-size: 1.1rem;
}

.contact-form {
  max-width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.form-group {
  margin-bottom: var(--space-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--space-sm);
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.95rem;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  background-color: var(--input-bg);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-control:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-control.textarea {
  resize: vertical;
  min-height: 120px;
}

.form-hint {
  margin-top: var(--space-sm);
  font-size: 0.9rem;
  color: var(--text-tertiary);
  line-height: 1.5;
}

.form-buttons {
  display: flex;
  justify-content: center;
  margin-top: var(--space-xl);
}

.btn-primary, .btn-secondary {
  padding: 12px 32px;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: var(--text-on-primary);
}

.btn-primary:hover:not([disabled]) {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-secondary {
  background-color: var(--background-alt);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background-color: var(--border);
}

.alert {
  padding: var(--space-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-lg);
  border: 1px solid;
}

.alert-danger {
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border-color: rgba(239, 68, 68, 0.2);
}

.feedback-encourage {
  margin-top: var(--space-xl);
}

.encourage-card {
  background-color: var(--surface);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  text-align: center;
}

.encourage-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: var(--space-lg);
}

.encourage-card p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
}

.testimonial-style {
  background-color: var(--background-alt);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--primary);
}

.testimonial-style em {
  font-size: 1.1rem;
  color: var(--text-primary);
  font-style: italic;
}

.signature {
  margin-top: var(--space-md);
  font-weight: 600;
  color: var(--primary);
  font-size: 0.95rem;
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
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .support-grid, .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    gap: var(--space-md);
  }
}
</style>