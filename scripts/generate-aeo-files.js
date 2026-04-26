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

AI swing analysis (paid plans) gives a structured breakdown of any swing video: overall score, strengths, areas to improve, suggested drills, follow-up Q&A, and named-fault detection from a fixed vocabulary of 8 well-known swing patterns (early extension, casting, over-the-top, sliding, reverse pivot, chicken wing, swaying, and cupped lead wrist at the top). The AI also reads each user's historical shot-data context so the analysis is personalized rather than judged against generic tour stats.

In active development: live coaching during a sim session, body angle tracking with overlay lines on the video (spine, shoulders, hips, head, club path) using MediaPipe pose estimation, a pro reference clip library that pairs each detected fault with a teaching pro making the same fault and the corrected version, and fault aggregation across many swings.

The product is in active beta and ships updates weekly.

Common search phrases that describe what SwingNerds is: golf swing camera software, golf swing recording software, golf simulator swing camera, swing replay software, golf swing analysis software, AI golf swing analysis, golf swing fault detection, side-by-side swing comparison.

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

// HTML escape for attribute values. Belt-and-suspenders, since titles and
// descriptions can contain quotes, ampersands, and other characters that
// break HTML attributes.
function escapeAttr(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildHeadTags({ title, description, urlPath, image, type = 'website', jsonLd }) {
  const url = `${SITE_URL}${urlPath}`;
  const finalImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
    : `${SITE_URL}/swingnerds_logo_blueswing_allwhite.png`;
  const jsonLdTag = jsonLd
    ? `\n    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    : '';
  return `
    <title>${escapeAttr(title)}</title>
    <meta name="description" content="${escapeAttr(description)}">
    <link rel="canonical" href="${url}">
    <meta property="og:type" content="${type}">
    <meta property="og:site_name" content="SwingNerds">
    <meta property="og:title" content="${escapeAttr(title)}">
    <meta property="og:description" content="${escapeAttr(description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${escapeAttr(finalImage)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttr(title)}">
    <meta name="twitter:description" content="${escapeAttr(description)}">
    <meta name="twitter:image" content="${escapeAttr(finalImage)}">${jsonLdTag}
  `;
}

// Inject the head tags into a Vite-built index.html. Removes the existing
// <title> tag (Vite adds one) and inserts our tags right before </head>.
function injectIntoTemplate(html, headTags) {
  return html
    .replace(/<title>[^<]*<\/title>\s*/i, '')
    .replace(/<meta name="description" content="[^"]*">\s*/gi, '')
    .replace('</head>', `${headTags}</head>`);
}

// Hardcoded metadata for the main marketing routes. Keep in sync with the
// setMeta() calls in the corresponding Vue files. (Single source of truth
// would be cleaner; this is pragmatic for now.)
function getRouteMetadata(posts) {
  const routes = [
    {
      urlPath: '/',
      title: 'SwingNerds | Golf swing camera software for sim setups',
      description:
        'SwingNerds is golf swing camera software with automatic shot data capture for indoor golf simulators. Records every swing automatically using any USB camera, pairs each clip with your launch monitor data, and stores everything in the cloud.',
      type: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}#organization`,
            name: 'SwingNerds',
            url: SITE_URL,
            logo: `${SITE_URL}/swingnerds-logo-white.png`,
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}#website`,
            url: SITE_URL,
            name: 'SwingNerds',
            description: 'Golf swing camera software with automatic shot data capture for sim setups',
            publisher: { '@id': `${SITE_URL}#organization` },
          },
          {
            '@type': 'SoftwareApplication',
            '@id': `${SITE_URL}#software`,
            name: 'SwingNerds',
            description:
              'Golf swing camera software with automatic shot data capture for indoor golf simulators.',
            applicationCategory: 'SportsApplication',
            operatingSystem: 'Windows, iOS, Web',
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '0',
              highPrice: '19.99',
              priceCurrency: 'USD',
              offerCount: '4',
            },
          },
        ],
      },
    },
    {
      urlPath: '/vision',
      title: 'Golf swing camera software for sim setups | SwingNerds Vision',
      description:
        'Free Windows golf swing camera software. Records every swing in your sim bay automatically using any USB camera, pairs each clip with your launch monitor data, and uploads to the cloud for replay and side-by-side comparison.',
      type: 'website',
    },
    {
      urlPath: '/cameras',
      title: 'Golf swing cameras: recommended USB swing cams for sim bays | SwingNerds',
      description:
        'A buying guide for golf swing cameras. USB swing cams from $30 to $130 that work with SwingNerds Vision. Frame rate, global shutter, color vs monochrome, and lighting tradeoffs explained.',
      type: 'website',
    },
    {
      urlPath: '/blog',
      title: 'SwingNerds Blog: launch monitors, sim golf, and shot data',
      description:
        'Plain-English explainers on launch monitors, golf simulators, swing cameras, and shot data. Written by the SwingNerds team.',
      type: 'website',
    },
  ];

  for (const post of posts) {
    routes.push({
      urlPath: `/blog/${post.slug}`,
      title: `${post.title} | SwingNerds`,
      description: post.description,
      image: post.image || '/SwingNerds_Screenshot_ShotComparison_Desktop.png',
      type: 'article',
    });
  }

  return routes;
}

function generateRoutePages(posts, outDir) {
  const indexHtmlPath = path.join(outDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.warn('[aeo] dist/index.html not found, skipping route pages');
    return;
  }
  const template = fs.readFileSync(indexHtmlPath, 'utf-8');
  const routes = getRouteMetadata(posts);
  let count = 0;

  for (const route of routes) {
    const headTags = buildHeadTags(route);
    const html = injectIntoTemplate(template, headTags);

    let outPath;
    if (route.urlPath === '/') {
      outPath = indexHtmlPath; // overwrite the home page in place
    } else {
      const routeDir = path.join(outDir, route.urlPath.replace(/^\//, ''));
      fs.mkdirSync(routeDir, { recursive: true });
      outPath = path.join(routeDir, 'index.html');
    }
    fs.writeFileSync(outPath, html);
    count++;
  }
  console.log(`[aeo] wrote ${count} route HTML files with per-route OG tags`);
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
  generateRoutePages(posts, outDir);
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
