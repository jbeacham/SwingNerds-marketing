<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { goToApp } from '../services/appUrl.js';

const route = useRoute();
const router = useRouter();
const mobileOpen = ref(false);

function close() {
  mobileOpen.value = false;
}

function goTo(name) {
  close();
  router.push({ name });
}

const isActive = (name) => computed(() => route.name === name).value;
</script>

<template>
  <header class="marketing-nav">
    <div class="nav-inner">
      <router-link to="/" class="brand" @click="close">
        <img src="/swingnerds-logo-white.png" alt="SwingNerds" class="brand-logo" />
        <span class="brand-wordmark">
          <span class="brand-swing">Swing</span><span class="brand-nerds">Nerds</span>
        </span>
      </router-link>

      <button
        class="nav-toggle"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation"
        @click="mobileOpen = !mobileOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="nav-links" :class="{ open: mobileOpen }">
        <button class="nav-link" :class="{ active: isActive('Vision') }" @click="goTo('Vision')">Vision</button>
        <button class="nav-link" :class="{ active: isActive('Cameras') }" @click="goTo('Cameras')">Cameras</button>
        <button class="nav-link" :class="{ active: isActive('Pricing') }" @click="goTo('Pricing')">Pricing</button>
        <button class="nav-link" :class="{ active: isActive('Facilities') || isActive('EnterpriseLanding') }" @click="goTo('EnterpriseLanding')">Commercial</button>
        <button class="nav-link" :class="{ active: isActive('DealersLanding') }" @click="goTo('DealersLanding')">Dealers</button>
        <button class="nav-link" :class="{ active: isActive('About') }" @click="goTo('About')">About</button>
        <button class="nav-link" :class="{ active: isActive('Blog') || isActive('BlogPost') }" @click="goTo('Blog')">Blog</button>
        <button class="nav-link" :class="{ active: isActive('Support') }" @click="goTo('Support')">Support</button>

        <div class="nav-cta-group">
          <button class="nav-cta-secondary" @click="() => { close(); goToApp('/login'); }">Sign In</button>
          <button class="nav-cta-primary" @click="() => { close(); goToApp('/register'); }">Start Free Trial</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.marketing-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #f8fafc;
}
.brand-logo {
  height: 34px;
  width: auto;
  display: block;
}
.brand-wordmark {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1;
}
.brand-swing {
  color: #00ADB5;
}
.brand-nerds {
  color: #f8fafc;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
}
.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: #e2e8f0;
  border-radius: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-link {
  background: transparent;
  border: none;
  color: #cbd5e1;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;
}
.nav-link:hover {
  color: #f8fafc;
  background: rgba(148, 163, 184, 0.08);
}
.nav-link.active {
  color: #00ADB5;
}

.nav-cta-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid rgba(148, 163, 184, 0.15);
}
.nav-cta-secondary {
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.3);
  color: #f8fafc;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;
}
.nav-cta-secondary:hover {
  border-color: rgba(148, 163, 184, 0.55);
}
.nav-cta-primary {
  background: #00ADB5;
  border: 1px solid #00ADB5;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;
}
.nav-cta-primary:hover {
  background: #0bbbc3;
  border-color: #0bbbc3;
}

@media (max-width: 900px) {
  .nav-toggle { display: flex; }
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: #0f172a;
    border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    padding: 12px 20px 20px;
    gap: 2px;
  }
  .nav-links.open { display: flex; }
  .nav-link { text-align: left; padding: 12px 14px; }
  .nav-cta-group {
    margin-left: 0; padding-left: 0; border-left: 0;
    border-top: 1px solid rgba(148, 163, 184, 0.15);
    margin-top: 10px; padding-top: 14px;
    flex-direction: column; align-items: stretch; gap: 8px;
  }
  .nav-cta-secondary, .nav-cta-primary { width: 100%; text-align: center; }
}
</style>
