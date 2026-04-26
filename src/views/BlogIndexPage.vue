<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAllPosts, getFeaturedPosts, formatDate } from '../services/blogService.js';
import { setMeta } from '../services/seoMeta.js';

const router = useRouter();

const featured = computed(() => getFeaturedPosts());
const allPosts = computed(() => getAllPosts());
const productPosts = computed(() =>
  getAllPosts().filter((p) => p.tags?.includes('product'))
);

function go(slug) {
  router.push(`/blog/${slug}`);
}

onMounted(() => {
  setMeta({
    title: 'SwingNerds Blog: launch monitors, sim golf, and shot data',
    description:
      'Plain-English explainers on launch monitors, golf simulators, swing cameras, and shot data. Written by the SwingNerds team.',
    path: '/blog',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'SwingNerds Blog',
      url: 'https://swingnerds.com/blog',
      description:
        'Plain-English explainers on launch monitors, golf simulators, swing cameras, and shot data.',
    },
  });
});
</script>

<template>
  <div class="public-page">
    <div class="page-container">
      <main class="page-content">
        <div class="content-wrapper">
          <section class="page-hero">
            <div class="hero-badge">SwingNerds Blog</div>
            <h1>Notes on launch monitors, sim golf, and shot data</h1>
            <p class="hero-subtitle">
              Plain-English explainers, glossaries, and setup guides. No hot takes, no rankings. Just the stuff we wish someone had written down for us when we started.
            </p>
          </section>

          <section v-if="featured.length" class="featured-section">
            <h2 class="section-label">Featured</h2>
            <div class="featured-grid">
              <article
                v-for="post in featured"
                :key="post.slug"
                class="featured-card"
                @click="go(post.slug)"
              >
                <div class="featured-star" aria-hidden="true">&#9733;</div>
                <div class="card-meta">
                  <span class="card-date">{{ formatDate(post.date) }}</span>
                  <span class="card-dot">&middot;</span>
                  <span class="card-read">{{ post.readingMinutes }} min read</span>
                </div>
                <h3>{{ post.title }}</h3>
                <p>{{ post.description }}</p>
                <div class="card-tags">
                  <span v-for="tag in post.tags" :key="tag" class="tag-chip">{{ tag }}</span>
                </div>
              </article>
            </div>
          </section>

          <section v-if="productPosts.length" class="features-section">
            <div class="features-header">
              <h2 class="section-label">Explore SwingNerds features</h2>
              <p class="features-deck">Deep dives on what the platform does and why it does it that way.</p>
            </div>
            <div class="features-grid">
              <article
                v-for="post in productPosts"
                :key="post.slug"
                class="feature-card"
                @click="go(post.slug)"
              >
                <div class="feature-pill">Feature</div>
                <h3>{{ post.title }}</h3>
                <p>{{ post.description }}</p>
                <div class="feature-meta">
                  <span>{{ formatDate(post.date) }}</span>
                  <span class="card-dot">&middot;</span>
                  <span>{{ post.readingMinutes }} min</span>
                </div>
              </article>
            </div>
          </section>

          <section class="all-posts-section">
            <h2 class="section-label">All posts</h2>
            <div class="post-list">
              <article
                v-for="post in allPosts"
                :key="post.slug"
                class="post-row"
                @click="go(post.slug)"
              >
                <div class="post-row-main">
                  <div class="post-row-title">
                    <h3>{{ post.title }}</h3>
                    <span v-if="post.featured" class="row-star" aria-label="Featured">&#9733;</span>
                  </div>
                  <p>{{ post.description }}</p>
                  <div class="card-tags">
                    <span v-for="tag in post.tags" :key="tag" class="tag-chip">{{ tag }}</span>
                  </div>
                </div>
                <div class="post-row-meta">
                  <span class="card-date">{{ formatDate(post.date) }}</span>
                  <span class="card-read">{{ post.readingMinutes }} min</span>
                </div>
              </article>
            </div>
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
  max-width: 880px;
  margin: 0 auto;
}

.page-hero {
  padding: 64px 0 40px;
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
.page-hero h1 {
  font-size: 2.4rem;
  line-height: 1.2;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
}
.hero-subtitle {
  font-size: 1.1rem;
  color: #475569;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

.section-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #94a3b8;
  margin: 0 0 16px;
}

.featured-section {
  margin-bottom: 56px;
}
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.featured-card {
  position: relative;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
}
.featured-card:hover {
  border-color: #06b6d4;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(15, 23, 42, 0.08);
}
.featured-star {
  position: absolute;
  top: 16px;
  right: 18px;
  color: #f59e0b;
  font-size: 18px;
  line-height: 1;
}
.featured-card h3 {
  font-size: 1.15rem;
  line-height: 1.3;
  margin: 0 0 10px;
  color: #0f172a;
  padding-right: 28px;
}
.featured-card p {
  font-size: 14px;
  color: #475569;
  line-height: 1.55;
  margin: 0 0 14px;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 10px;
}
.card-dot { opacity: 0.6; }

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag-chip {
  background: rgba(6, 182, 212, 0.08);
  color: #06b6d4;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 999px;
  text-transform: lowercase;
}

.features-section {
  margin-bottom: 56px;
  padding: 32px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.04), rgba(6, 182, 212, 0.01));
  border: 1px solid rgba(6, 182, 212, 0.18);
  border-radius: 16px;
}
.features-header {
  margin-bottom: 20px;
}
.features-header .section-label {
  margin-bottom: 6px;
}
.features-deck {
  font-size: 14px;
  color: #475569;
  margin: 0;
  line-height: 1.5;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px;
}
.feature-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
}
.feature-card:hover {
  border-color: #06b6d4;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
}
.feature-pill {
  display: inline-block;
  background: rgba(6, 182, 212, 0.1);
  color: #06b6d4;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.feature-card h3 {
  font-size: 1.05rem;
  line-height: 1.3;
  margin: 0 0 10px;
  color: #0f172a;
}
.feature-card p {
  font-size: 13px;
  color: #475569;
  line-height: 1.5;
  margin: 0 0 12px;
}
.feature-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #94a3b8;
}

.all-posts-section {
  margin-bottom: 80px;
}
.post-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e2e8f0;
}
.post-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
  transition: background 0.15s;
}
.post-row:hover {
  background: #f8fafc;
}
.post-row-main { min-width: 0; }
.post-row-title {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 6px;
}
.post-row-title h3 {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.35;
  color: #0f172a;
}
.row-star {
  color: #f59e0b;
  font-size: 14px;
  line-height: 1;
}
.post-row-main p {
  font-size: 14px;
  color: #475569;
  line-height: 1.5;
  margin: 0 0 10px;
}
.post-row-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-size: 12px;
  color: #94a3b8;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .page-hero { padding: 40px 0 28px; }
  .page-hero h1 { font-size: 1.7rem; }
  .post-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .post-row-meta {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
}
</style>
