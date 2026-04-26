// Per-page meta tag helpers. The router sets the title and a default
// description; pages that need richer SEO (blog posts) call setMeta() to
// inject Open Graph, Twitter, and canonical tags into <head>.

const SITE_URL = 'https://swingnerds.com';
const SITE_NAME = 'SwingNerds';
const DEFAULT_IMAGE = `${SITE_URL}/swingnerds_logo_blueswing_allwhite.png`;

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id, payload) {
  const existing = document.head.querySelector(`script[data-jsonld="${id}"]`);
  if (existing) existing.remove();
  if (!payload) return;
  const el = document.createElement('script');
  el.setAttribute('type', 'application/ld+json');
  el.setAttribute('data-jsonld', id);
  el.textContent = JSON.stringify(payload);
  document.head.appendChild(el);
}

export function setMeta({ title, description, path, image, type = 'website', jsonLd } = {}) {
  const canonical = path ? `${SITE_URL}${path}` : SITE_URL;
  const finalImage = image && image.startsWith('http') ? image : image ? `${SITE_URL}${image}` : DEFAULT_IMAGE;

  if (title) document.title = title;
  upsertMeta('name', 'description', description);
  upsertLink('canonical', canonical);

  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:site_name', SITE_NAME);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', canonical);
  upsertMeta('property', 'og:image', finalImage);

  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', finalImage);

  setJsonLd('page', jsonLd || null);
}

// Strip markdown to a clean text answer for schema fields. Removes link
// syntax, bold/italic, code spans, and list bullets. Keeps prose.
function markdownToPlainText(md) {
  if (!md) return '';
  let text = md;
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // links
  text = text.replace(/`([^`]+)`/g, '$1'); // inline code
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1'); // bold
  text = text.replace(/\*([^*]+)\*/g, '$1'); // italic
  text = text.replace(/^\s*[-*]\s+/gm, ''); // list bullets
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

// Take first N sentences from a markdown blob, drawing only from the leading
// prose paragraphs. Skips heading lines, blockquote-only paragraphs, and
// other non-prose blocks so the schema answer reads cleanly.
function firstSentences(md, n = 3) {
  if (!md) return '';
  const blocks = md.split(/\n\s*\n/);
  const proseBlocks = [];
  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    if (/^#+\s/.test(trimmed)) continue; // skip headings
    if (/^>/.test(trimmed)) continue; // skip blockquote-only paragraphs
    if (/^\|/.test(trimmed)) continue; // skip table rows
    if (/^---+$/.test(trimmed)) continue; // skip horizontal rules
    proseBlocks.push(markdownToPlainText(trimmed));
    // Stop once we have plenty of sentences to draw from.
    if (proseBlocks.join(' ').match(/[.!?]/g)?.length >= n + 1) break;
  }
  const text = proseBlocks.join(' ');
  const matches = text.match(/[^.!?]+[.!?]+/g) || [text];
  return matches.slice(0, n).join(' ').trim();
}

// Heuristic: does the title look like a question? Used to decide whether to
// auto-emit FAQPage schema using the title as the question.
export function titleIsQuestion(title) {
  if (!title) return false;
  if (title.trim().endsWith('?')) return true;
  return /^(what|how|why|when|where|who|which|can|is|are|do|does|should|will)\b/i.test(title);
}

// Pull the title's question form.
// - If title contains a "?" mid-string ("What is X? A subtitle"), take the
//   leading question only.
// - Else if title already ends in "?", return as-is.
// - Else append a "?".
export function questionFromTitle(title) {
  if (!title) return '';
  const trimmed = title.trim();
  const qIdx = trimmed.indexOf('?');
  if (qIdx > -1 && qIdx < trimmed.length - 1) {
    return trimmed.slice(0, qIdx + 1).trim();
  }
  return trimmed.endsWith('?') ? trimmed : `${trimmed}?`;
}

export function buildBlogPostingJsonLd(post) {
  return {
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'SwingNerds Team',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/swingnerds-logo-white.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    image: post.image
      ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`)
      : DEFAULT_IMAGE,
  };
}

// FAQPage schema. For posts whose title is a question, emit a single Q&A pair
// using the title as the question and the first few sentences of the body as
// the answer. AI engines (Google AI Overviews, ChatGPT, Perplexity) extract
// FAQPage entries directly into their answers.
export function buildFAQPageJsonLd(post, markdownBody) {
  if (!titleIsQuestion(post.title)) return null;
  const answer = firstSentences(markdownBody, 3) || post.description;
  if (!answer) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/blog/${post.slug}#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: questionFromTitle(post.title),
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      },
    ],
  };
}

// DefinedTermSet schema for the glossary post. Parses the body for "**Term.**
// Definition" patterns and emits each as a DefinedTerm.
//
// Triggered only on posts that are *the* glossary, not posts that happen to
// be tagged `glossary` (which we use loosely to mean "definitional"). The
// guard is the slug pattern.
export function buildDefinedTermSetJsonLd(post, markdownBody) {
  const isGlossaryPost = post.slug?.includes('glossary');
  if (!isGlossaryPost) return null;
  const terms = [];
  const re = /\*\*([^*]+?)\.\*\*\s+([^\n]+(?:\n(?!\s*\n|\s*##|\s*\*\*)[^\n]+)*)/g;
  let m;
  while ((m = re.exec(markdownBody)) !== null) {
    const name = m[1].trim();
    const description = markdownToPlainText(m[2]).trim();
    if (name && description) {
      terms.push({
        '@type': 'DefinedTerm',
        name,
        description,
        inDefinedTermSet: `${SITE_URL}/blog/${post.slug}#glossary`,
      });
    }
  }
  if (!terms.length) return null;
  return {
    '@type': 'DefinedTermSet',
    '@id': `${SITE_URL}/blog/${post.slug}#glossary`,
    name: post.title,
    hasDefinedTerm: terms,
  };
}

// HowTo schema. Posts that opt in via frontmatter `howto: true` plus a steps
// array become HowTo entities. We also auto-detect a small set of well-known
// how-to slugs.
export function buildHowToJsonLd(post, markdownBody) {
  const isHowToSlug = ['how-to-set-up-swing-cameras'].includes(post.slug);
  if (!post.howto && !isHowToSlug) return null;

  // Generic steps for the camera setup post (the only auto-detected one
  // currently). For future how-to posts, add a `steps` field in frontmatter
  // and parse it here.
  const steps = post.slug === 'how-to-set-up-swing-cameras' ? [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Position the down-the-line camera on the target line',
      text: 'Place the camera behind the ball, on the target line, with the lens pointed past the player toward the target. Six to eight feet behind the ball is a common starting point.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Set the down-the-line camera at hand height',
      text: "Height the camera even with the player's hands at address, typically between belt buckle and mid-thigh. This produces an accurate read of shaft plane.",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Position the face-on camera perpendicular to the target line',
      text: 'Place the second camera perpendicular to the target line, on the side of the ball that the player is facing. Center the lens on the ball, not on the player.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Set the face-on camera at hand height',
      text: 'Match the height to the down-the-line camera: belt buckle to mid-thigh. Keep the camera level, not tilted.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Verify alignment',
      text: 'Lay an alignment stick on the ground from the ball pointing back along the target line. Position the down-the-line camera directly above the end of that stick to confirm it is on the line.',
    },
  ] : (post.steps || []).map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name || s,
    text: s.text || s,
  }));

  if (!steps.length) return null;
  return {
    '@type': 'HowTo',
    '@id': `${SITE_URL}/blog/${post.slug}#howto`,
    name: post.title,
    description: post.description,
    step: steps,
  };
}

// Build a combined @graph from the available schemas. Lets us emit multiple
// schema entities in a single JSON-LD block, which is the recommended pattern
// for Google.
export function buildPostGraph(post, markdownBody) {
  const entities = [
    buildBlogPostingJsonLd(post),
    buildFAQPageJsonLd(post, markdownBody),
    buildDefinedTermSetJsonLd(post, markdownBody),
    buildHowToJsonLd(post, markdownBody),
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@graph': entities,
  };
}
