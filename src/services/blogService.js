// Static blog content loader. Reads markdown files from src/content/blog at
// build time, parses simple frontmatter, renders HTML, and exposes the posts
// as a sorted array.

import { marked } from 'marked';

// Eagerly load every .md file under src/content/blog as a raw string so the
// posts are bundled into the build (no runtime fetch needed).
const rawFiles = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Tiny YAML-ish frontmatter parser. Supports the keys we use: strings,
// booleans, ISO dates (as strings), and inline arrays like [a, b, c].
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const block = match[1];
  const body = match[2];
  const data = {};
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let value = m[2].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    } else if (value.startsWith("'") && value.endsWith("'")) {
      value = value.slice(1, -1);
    } else if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    }
    data[key] = value;
  }
  return { data, body };
}

marked.setOptions({
  gfm: true,
  breaks: false,
});

function slugFromPath(path) {
  // ../content/blog/2026-03-23-what-is-a-launch-monitor.md -> what-is-a-launch-monitor
  const file = path.split('/').pop().replace(/\.md$/, '');
  return file.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

function buildPost(path, raw) {
  const { data, body } = parseFrontmatter(raw);
  const slug = data.slug || slugFromPath(path);
  const html = marked.parse(body);
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 220));
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'SwingNerds Team',
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: data.featured === true,
    howto: data.howto === true,
    steps: data.steps,
    image: data.image || '',
    markdownBody: body,
    html,
    readingMinutes,
  };
}

const posts = Object.entries(rawFiles)
  .map(([path, raw]) => buildPost(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllPosts() {
  return posts;
}

export function getFeaturedPosts() {
  return posts.filter((p) => p.featured);
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
