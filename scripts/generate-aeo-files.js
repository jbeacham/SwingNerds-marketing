// Generates sitemap.xml and llms.txt at build time, sourcing the blog post
// list directly from src/content/blog/*.md so the two files stay in sync with
// what is actually published.
//
// Wired into vite.config.js as a Vite plugin (closeBundle hook).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://swingnerds.com';
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'src', 'content', 'blog');
const DIST_DIR = path.join(ROOT, 'dist');

// Static marketing routes (kept in sync with src/router/index.js).
const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/pricing', changefreq: 'monthly', priority: '0.9' },
  { path: '/get-started', changefreq: 'monthly', priority: '0.8' },
  { path: '/vision', changefreq: 'monthly', priority: '0.8' },
  { path: '/cameras', changefreq: 'monthly', priority: '0.7' },
  { path: '/swingnerds-vision', changefreq: 'monthly', priority: '0.6' },
  { path: '/commercial', changefreq: 'monthly', priority: '0.7' },
  { path: '/dealers', changefreq: 'monthly', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.5' },
  { path: '/changelog', changefreq: 'weekly', priority: '0.6' },
  { path: '/support', changefreq: 'monthly', priority: '0.4' },
  { path: '/blog', changefreq: 'weekly', priority: '0.9' },
];

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let value = m[2].trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    else if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    else if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else if (value === 'true') value = true;
    else if (value === 'false') value = false;
    data[m[1]] = value;
  }
  return { data, body: match[2] };
}

function loadPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  return files
    .map((f) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf-8');
      const { data } = parseFrontmatter(raw);
      const slug = data.slug || f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: data.featured === true,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemap(posts) {
  const today = new Date().toISOString().split('T')[0];
  const urls = [];

  for (const route of STATIC_ROUTES) {
    urls.push(
      `  <url>\n    <loc>${SITE_URL}${route.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`
    );
  }

  for (const post of posts) {
    urls.push(
      `  <url>\n    <loc>${SITE_URL}/blog/${post.slug}</loc>\n    <lastmod>${post.date || today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

function categorizePosts(posts) {
  const cats = {
    launchMonitorBasics: [],
    camerasAndSetup: [],
    features: [],
    other: [],
  };
  for (const p of posts) {
    const tags = p.tags || [];
    if (tags.includes('product') || tags.includes('story')) {
      cats.features.push(p);
    } else if (tags.includes('cameras') || tags.includes('setup')) {
      cats.camerasAndSetup.push(p);
    } else if (tags.includes('launch monitors') || tags.includes('basics') || tags.includes('glossary') || tags.includes('technology') || tags.includes('data')) {
      cats.launchMonitorBasics.push(p);
    } else {
      cats.other.push(p);
    }
  }
  return cats;
}

function buildLlmsTxt(posts) {
  const cats = categorizePosts(posts);
  const link = (p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`;

  return `# SwingNerds

> SwingNerds is golf swing camera software for indoor golf simulator setups. The free Windows app turns any USB camera you already have (a laptop webcam, an iPhone acting as a webcam, or a dedicated $100 swing camera) into an automatic swing recorder. Every shot in your sim bay is detected by sound and motion, captured as a clip, and paired with the matching shot data from your launch monitor. Clips upload to the cloud and can be replayed, compared, drawn on, tagged, and analyzed on any device.

SwingNerds is launch-monitor-agnostic. GSPro is the integration most setups use, with a couple of other direct integrations and CSV upload as a fallback. The free local tier replaces a typical OBS plus Kinovea workflow at zero cost. Cloud sync, AI swing analysis, and multi-device access start at $4.99 a month.

The product is in active beta and ships updates weekly.

Common search phrases that describe what SwingNerds is: golf swing camera software, golf swing recording software, golf simulator swing camera, swing replay software, golf swing analysis software, side-by-side swing comparison.

## Product
- [Home](${SITE_URL}/): main product overview
- [Pricing](${SITE_URL}/pricing): four tiers, free trial, no credit card
- [Get started](${SITE_URL}/get-started): 7-day free trial signup
- [Vision (free Windows app)](${SITE_URL}/vision): the local recording app, free forever
- [Cameras](${SITE_URL}/cameras): recommended USB swing cameras
- [Changelog](${SITE_URL}/changelog): recent product updates across web, iOS, Windows
- [About](${SITE_URL}/about)
- [Support](${SITE_URL}/support)

## Audiences
- [For commercial sim facilities](${SITE_URL}/commercial): multi-bay, white-label, per-member pricing
- [For sim dealers and installers](${SITE_URL}/dealers): bundle Premium with sim installs, dealer logo on every share

## Blog: launch monitor and sim golf explainers
${cats.launchMonitorBasics.map(link).join('\n')}

## Blog: cameras and setup
${cats.camerasAndSetup.map(link).join('\n')}

## Blog: SwingNerds features and story
${cats.features.map(link).join('\n')}
${cats.other.length ? `\n## Blog: other\n${cats.other.map(link).join('\n')}\n` : ''}
## Optional
- [Blog index](${SITE_URL}/blog): all posts in one place, with featured + product feature sections
`;
}

export function generateAeoFiles({ outDir = DIST_DIR } = {}) {
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn('[aeo] blog dir not found, skipping');
    return;
  }
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const posts = loadPosts();
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), buildSitemap(posts));
  fs.writeFileSync(path.join(outDir, 'llms.txt'), buildLlmsTxt(posts));
  console.log(`[aeo] wrote sitemap.xml and llms.txt with ${posts.length} blog posts`);
}

export default function vitePluginAeo() {
  return {
    name: 'aeo-files',
    apply: 'build',
    closeBundle() {
      generateAeoFiles();
    },
  };
}
