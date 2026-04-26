// Generates the default Open Graph card used when a page has no specific
// `image` field set on its meta. The card is the white SwingNerds logo on
// the brand dark-navy background plus a small tagline. iMessage, Twitter,
// Facebook, LinkedIn, Slack, etc. all render the result as a clean preview
// instead of the white-on-transparent logo washing out on light bubbles.
//
// Run with `node scripts/generate-og-card.mjs`. The Vite build also invokes
// this via the aeo plugin, so committing the output PNG is optional.

import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');

const WIDTH = 1200;
const HEIGHT = 630;
const BG = { r: 15, g: 23, b: 42, alpha: 1 }; // #0f172a — brand dark navy

// Logo height in the final card. The source white logo is 845x845. We resize
// to keep visual weight balanced inside the 1200x630 frame.
const LOGO_HEIGHT = 360;

const TAGLINE = 'Golf swing camera software for sim setups';

const taglineSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .tag {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 30px;
      font-weight: 600;
      fill: #cbd5e1;
      letter-spacing: 0.2px;
    }
    .accent {
      fill: #00adb5;
    }
  </style>
  <text x="50%" y="540" text-anchor="middle" class="tag">${TAGLINE}</text>
  <text x="50%" y="585" text-anchor="middle" class="tag accent" style="font-size: 22px; letter-spacing: 1px; text-transform: uppercase;">swingnerds.com</text>
</svg>
`.trim();

export async function generateOgCard() {
  const logoPath = path.join(PUBLIC_DIR, 'swingnerds-logo-white.png');
  const outPath = path.join(PUBLIC_DIR, 'og-card-default.png');

  // Resize logo to target height while preserving aspect ratio.
  const resizedLogo = await sharp(logoPath)
    .resize({ height: LOGO_HEIGHT })
    .toBuffer();
  const logoMeta = await sharp(resizedLogo).metadata();

  // Center the logo horizontally; nudge it up a bit so the tagline below
  // doesn't crowd it.
  const logoLeft = Math.round((WIDTH - logoMeta.width) / 2);
  const logoTop = 80;

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: BG,
    },
  })
    .composite([
      { input: resizedLogo, left: logoLeft, top: logoTop },
      { input: Buffer.from(taglineSvg), top: 0, left: 0 },
    ])
    .png()
    .toFile(outPath);

  console.log(`[og-card] wrote ${path.relative(ROOT, outPath)} (${WIDTH}x${HEIGHT})`);
  return outPath;
}

// Allow running this file directly: `node scripts/generate-og-card.mjs`
if (import.meta.url === `file://${process.argv[1]}`) {
  generateOgCard().catch((err) => {
    console.error('[og-card] failed:', err);
    process.exit(1);
  });
}
