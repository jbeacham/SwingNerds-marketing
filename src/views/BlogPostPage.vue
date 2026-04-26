<script setup>
import { computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostBySlug, getAllPosts, formatDate } from '../services/blogService.js';
import { setMeta, buildPostGraph } from '../services/seoMeta.js';

const route = useRoute();
const router = useRouter();

const post = computed(() => getPostBySlug(route.params.slug));

const related = computed(() => {
  if (!post.value) return [];
  return getAllPosts()
    .filter((p) => p.slug !== post.value.slug)
    .slice(0, 3);
});

const isProductPost = computed(() => post.value?.tags?.includes('product'));

const publicationMonth = computed(() => {
  if (!post.value?.date) return '';
  const [y, m] = post.value.date.split('-').map(Number);
  if (!y || !m) return '';
  const monthName = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', {
    month: 'long',
    timeZone: 'UTC',
  });
  return `${monthName} ${y}`;
});

watchEffect(() => {
  if (!post.value) return;
  setMeta({
    title: `${post.value.title} | SwingNerds`,
    description: post.value.description,
    path: `/blog/${post.value.slug}`,
    image: post.value.image,
    type: 'article',
    jsonLd: buildPostGraph(post.value, post.value.markdownBody),
  });
});

function go(slug) {
  router.push(`/blog/${slug}`);
}
</script>

<template>
  <div class="public-page">
    <div class="page-container">
      <main class="page-content">
        <article v-if="post" class="content-wrapper">
          <div class="post-back">
            <router-link to="/blog">&larr; All posts</router-link>
          </div>

          <header class="post-header">
            <div v-if="post.featured" class="featured-pill" aria-label="Featured">
              <span class="star">&#9733;</span> Featured
            </div>
            <h1>{{ post.title }}</h1>
            <p v-if="post.description" class="post-deck">{{ post.description }}</p>
            <div class="post-meta">
              <span>{{ formatDate(post.date) }}</span>
              <span class="dot">&middot;</span>
              <span>{{ post.readingMinutes }} min read</span>
              <span class="dot">&middot;</span>
              <span>{{ post.author }}</span>
            </div>
            <div v-if="post.tags?.length" class="post-tags">
              <span v-for="tag in post.tags" :key="tag" class="tag-chip">{{ tag }}</span>
            </div>
          </header>

          <div class="post-body" v-html="post.html" />

          <aside v-if="isProductPost" class="beta-disclaimer">
            <strong>Heads up:</strong> this post reflects SwingNerds as of {{ publicationMonth }}. The product is in active beta and we ship updates weekly, so specific features or claims may have shifted since publication. For the current state of things, see the <router-link to="/changelog">changelog</router-link>.
          </aside>

          <footer class="post-footer">
            <p class="footer-line">
              Written by the SwingNerds team. Questions or feedback? <a href="mailto:support@swingnerds.com">Email us</a>.
            </p>
          </footer>

          <section v-if="related.length" class="related-section">
            <h2 class="section-label">Keep reading</h2>
            <div class="related-grid">
              <article
                v-for="rel in related"
                :key="rel.slug"
                class="related-card"
                @click="go(rel.slug)"
              >
                <span v-if="rel.featured" class="related-star" aria-hidden="true">&#9733;</span>
                <div class="related-date">{{ formatDate(rel.date) }}</div>
                <h3>{{ rel.title }}</h3>
                <p>{{ rel.description }}</p>
              </article>
            </div>
          </section>
        </article>

        <div v-else class="content-wrapper not-found">
          <h1>Post not found</h1>
          <p>That post doesn't exist (or maybe we unpublished it).</p>
          <router-link to="/blog" class="back-link">&larr; Back to all posts</router-link>
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
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.post-back {
  padding: 32px 0 8px;
  font-size: 14px;
}
.post-back a {
  color: #06b6d4;
  text-decoration: none;
  font-weight: 600;
}
.post-back a:hover { text-decoration: underline; }

.post-header {
  padding: 16px 0 32px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 40px;
}
.featured-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(245, 158, 11, 0.1);
  color: #b45309;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.featured-pill .star { color: #f59e0b; }
.post-header h1 {
  font-size: 2.2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 0 0 16px;
}
.post-deck {
  font-size: 1.15rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 20px;
}
.post-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #94a3b8;
  margin-bottom: 14px;
}
.post-meta .dot { opacity: 0.5; }
.post-tags {
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

.post-body {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #1e293b;
}
.post-body :deep(h2) {
  font-size: 1.5rem;
  line-height: 1.3;
  margin: 40px 0 14px;
  color: #0f172a;
  letter-spacing: -0.005em;
}
.post-body :deep(h3) {
  font-size: 1.18rem;
  line-height: 1.35;
  margin: 28px 0 10px;
  color: #0f172a;
}
.post-body :deep(p) {
  margin: 0 0 18px;
}
.post-body :deep(ul),
.post-body :deep(ol) {
  margin: 0 0 20px;
  padding-left: 24px;
}
.post-body :deep(li) {
  margin-bottom: 8px;
}
.post-body :deep(a) {
  color: #06b6d4;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.post-body :deep(a:hover) { color: #0891b2; }
.post-body :deep(strong) { color: #0f172a; }
.post-body :deep(blockquote) {
  border-left: 3px solid #06b6d4;
  background: #f8fafc;
  margin: 24px 0;
  padding: 14px 20px;
  color: #475569;
  border-radius: 0 8px 8px 0;
}
.post-body :deep(code) {
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: ui-monospace, 'SF Mono', Menlo, monospace;
}
.post-body :deep(pre) {
  background: #0f172a;
  color: #e2e8f0;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 20px 0;
}
.post-body :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}
.post-body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 24px 0;
  border: 1px solid #e2e8f0;
}
.post-body :deep(video) {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 24px 0;
  border: 1px solid #e2e8f0;
  background: #000;
}
.post-body :deep(figure) {
  margin: 24px 0;
}
.post-body :deep(figure img),
.post-body :deep(figure video) {
  margin: 0 0 8px;
}
.post-body :deep(figcaption) {
  font-size: 13px;
  color: #94a3b8;
  text-align: center;
  font-style: italic;
}
.post-body :deep(hr) {
  border: 0;
  border-top: 1px solid #e2e8f0;
  margin: 32px 0;
}
.post-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 0.95em;
}
.post-body :deep(th),
.post-body :deep(td) {
  border: 1px solid #e2e8f0;
  padding: 8px 12px;
  text-align: left;
}
.post-body :deep(th) {
  background: #f8fafc;
  font-weight: 700;
}

.beta-disclaimer {
  margin-top: 40px;
  padding: 14px 18px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 10px;
  color: #78350f;
  font-size: 13px;
  line-height: 1.55;
}
.beta-disclaimer strong {
  color: #78350f;
  font-weight: 700;
}
.beta-disclaimer a {
  color: #b45309;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 600;
}
.beta-disclaimer a:hover {
  color: #92400e;
}

.post-footer {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
}
.footer-line {
  font-size: 14px;
  color: #475569;
  margin: 0;
}
.footer-line a {
  color: #06b6d4;
  text-decoration: none;
  font-weight: 600;
}
.footer-line a:hover { text-decoration: underline; }

.related-section {
  margin-top: 56px;
}
.section-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #94a3b8;
  margin: 0 0 16px;
}
.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}
.related-card {
  position: relative;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s;
}
.related-card:hover {
  border-color: #06b6d4;
  transform: translateY(-1px);
}
.related-star {
  position: absolute;
  top: 12px;
  right: 14px;
  color: #f59e0b;
  font-size: 14px;
}
.related-date {
  font-size: 11px;
  color: #94a3b8;
  margin-bottom: 8px;
}
.related-card h3 {
  font-size: 0.95rem;
  line-height: 1.35;
  margin: 0 0 8px;
  color: #0f172a;
  padding-right: 22px;
}
.related-card p {
  font-size: 13px;
  color: #475569;
  margin: 0;
  line-height: 1.5;
}

.not-found {
  text-align: center;
  padding: 80px 0;
}
.not-found h1 { margin: 0 0 12px; }
.not-found p { color: #475569; margin: 0 0 24px; }
.back-link {
  color: #06b6d4;
  font-weight: 600;
  text-decoration: none;
}
.back-link:hover { text-decoration: underline; }

@media (max-width: 600px) {
  .post-header h1 { font-size: 1.65rem; }
  .post-deck { font-size: 1.02rem; }
  .post-body { font-size: 1rem; }
  .post-body :deep(h2) { font-size: 1.3rem; }
}
</style>
