# SwingNerds blog: writing guide

Style and process notes for writing posts on the SwingNerds blog. Paste this into any AI chat before asking it to draft a post and you will get on-brand drafts.

The blog itself lives in `src/content/blog/`. Each post is a markdown file with frontmatter. The build pipeline picks them up automatically.

---

## Voice and tone

- Plain English. Short sentences. No filler.
- Calm and informational, not breathless.
- No salesy language. No "revolutionary," no "game-changer," no "everything you ever wanted." Reads like a person explaining something to a friend.
- It is fine for a post to be just an explainer with no sales angle at all.
- When SwingNerds is mentioned, mention it once, at the end, in a single italicized line. Never push.

## Positioning rules (always apply)

These come from PRODUCT.md and apply to every public-facing post. If the post talks about launch monitor compatibility or cameras, follow these:

- **Launch monitor compatibility.** Always frame as "GSPro for most setups, with a couple of other direct integrations, plus CSV upload from anything else." Do **not** name specific brands as direct integrations in public copy. (Internally we support Uneekor and Rapsodo direct integrations, but those names do not appear in blog posts, ads, or landing pages as a feature list.)
- **Cameras.** This is one of our biggest value props and worth leading with when relevant. Most launch monitor brands sell bolt-on camera kits for $1,500 to $2,500+. SwingNerds works with any USB camera: a free laptop webcam, an iPhone acting as a webcam, a $30 USB cam, or a dedicated $100 high-FPS swing-cam from our `/cameras` page. Frame this as freedom and savings, not as a workaround.

## What we do not do

- **No hot takes.** No "most golfers get X wrong." No "stop doing Y." No "here is the right way." We are not in the business of being the loudest take in the room.
- **No rankings.** Do not rank launch monitors, cameras, or apps. Describe how each one works. Let the reader pick.
- **No prescriptive numbers.** Smash factor of 1.50 is not "the right target." A 2,500 RPM driver is not "ideal." We define the term, give realistic ranges if useful, and stop.
- **No comparisons that pick a winner.** "Camera-based vs radar" is fine if framed as "how each works." It is not fine if framed as "which is better."
- **No claims that invite an "actually"-style pushback.** If a claim could reasonably be debated by golfers in good faith, rewrite or cut it.
- **No em-dashes or en-dashes.** Use commas, periods, colons, or parentheses. (This goes for prose, post titles, meta descriptions, and the index page copy too.)
- **No exclamation marks** in normal prose.
- **No emojis** unless explicitly asked.

## Length

Posts can be any length. The right length is the length that explains the thing. Some are 400 words. Some are 1,500. Both are fine. Variety reads as a real publication, not a content farm.

## Authorship

- Byline is always **SwingNerds Team** in frontmatter. Do not put any specific person's name in posts.
- It is fine to write in first person ("I," "we") for story posts and product posts. It is fine to write neutral third-person for explainers. Either works.

## Title and description

- Title: clear, literal, search-friendly. "What is smash factor and how it is calculated" beats "Smash factor: the metric that matters."
- Description: one sentence, ~150 characters, restates the post's promise. This shows up on the index, in the OG card, and in search results.

## Internal links

Linking to product pages helps SEO and gives readers a path. The natural ones:

- [`/`](/): home
- [`/vision`](/vision): Windows recording app
- [`/cameras`](/cameras): camera recommendations
- [`/pricing`](/pricing)
- [`/get-started`](/get-started)
- [`/commercial`](/commercial)
- [`/dealers`](/dealers)
- Other blog posts: internal cross-linking is good

Do not over-link. One or two natural links per post is plenty.

---

## Frontmatter

Every post has frontmatter at the top of the file:

```markdown
---
title: "Plain-English title with proper sentence case"
description: One sentence summary, ~150 chars, used for SEO and the index card.
date: 2026-03-23
author: SwingNerds Team
tags: [tag, tag, tag]
featured: false
image: /optional-hero-image.png
---
```

### `tags`

Tags describe what the post is **about**, not where it sits in the marketing funnel.

- `launch monitors`: anything LM-related
- `basics`: beginner-level explainer
- `glossary`: definitional, "what does X mean"
- `technology`: how something works under the hood
- `product`: about a SwingNerds feature
- `story`: founder, backstory, behind-the-scenes
- `setup`: how-to-set-up content
- `cameras`: camera-related (gear, positioning, lenses)
- `data`: shot data, analytics, charts

Pick the most specific tags that fit. Two or three is normal. Do not tag with `swingnerds`: every post on this site is about SwingNerds in some sense, so the tag carries no information.

### `featured`

The `featured: true` flag promotes a post to the **Featured** row at the top of `/blog`. It is independent of category and there is no hard cap on how many posts can be featured at once. Feature whatever is genuinely marketing-essential and timeless: backstory, core feature explainers, high-converting setup guides, and so on.

The only visual consideration: if almost every post is starred, the "Featured" row stops being a curated promotion and just duplicates the main feed below. So feature liberally for things you actually want to push, and skip it for posts where the star would just be decoration.

### Beta disclaimer (automatic)

Any post tagged `product` automatically gets a small "this reflects the product as of {month}, we ship updates weekly, see the changelog" disclaimer rendered above the post footer. It uses the post's own `date` for the month. Writers do not need to add this manually. Just tag the post `product` and it appears.

### `image`

Optional. Path to a hero image (e.g. `/SwingNerds_Screenshot_Charts_Mobile.PNG`). Used for OG cards and Twitter cards. If omitted, the default SwingNerds logo is used.

---

## File naming

`src/content/blog/YYYY-MM-DD-slug-with-hyphens.md`

The date prefix is for human file ordering only. The actual post date comes from the frontmatter.

The slug becomes the URL: `2026-03-23-what-is-a-launch-monitor.md` becomes `/blog/what-is-a-launch-monitor`.

Slugs should be:
- Lowercase
- Hyphen-separated
- Search-friendly (use the words people will actually google)
- Stable. Once a post is published, do not rename the slug. Inbound links and search rankings depend on it.

---

## Markdown conventions

- **Headings**: H2 for major sections, H3 for sub-sections inside an H2. The post title comes from the frontmatter, do not put an H1 in the body.
- **Lists**: bulleted lists are fine for parallel items. Numbered lists for actual sequences.
- **Bold**: use sparingly for genuine emphasis on a key term, not for decoration.
- **Tables**: fine for comparing apples to apples (e.g. metric A vs metric B in the same context). Do not use tables to rank products.
- **Horizontal rule** (`---` on its own line): use to separate the closing SwingNerds tie-in line from the body of the post.
- **Code blocks**: rare on a non-technical blog. Use only for actual formulas or short technical references.

---

## Closing tie-in (when relevant)

Many posts end with a horizontal rule and a one-line italic SwingNerds mention, like this:

```markdown
---

If you want a place to put the numbers across sessions and clubs, [SwingNerds](/) keeps every shot you have ever hit in one place.
```

It is fine to skip the tie-in entirely on posts where it would feel forced. Pure explainers about ball physics, weather, or general golf concepts often read better with no SwingNerds mention at all.

When the tie-in does appear, it should:
- Be one or two sentences. Never a paragraph.
- Be italicized via wrapping the whole closing line, or just blend in. Either is fine.
- Link to a single relevant page, not five.
- Never include a CTA button or anything that screams "buy now."

---

## Post types

### Explainer
"What is X" or "How does X work." Pure information. Often no SwingNerds mention. Tags usually `[launch monitors, basics, glossary]` or similar.

### Setup guide
How to do something physical (set up a camera, connect a launch monitor). Tags usually `[setup, ...]`. Often featured.

### Product post
About a SwingNerds feature. Tells what the feature does, why it exists, what someone uses it for. Includes a small piece of the backstory if it has one. Tags `[product, feature-name]`. Some are featured.

### Story post
Behind the scenes. Founder pieces. Milestones. "Why we built X." Tags `[story, ...]`.

---

## When in doubt

If a sentence could be removed without losing meaning, remove it. If a paragraph could be a sentence, make it a sentence. If a claim could be debated, rewrite it as an observation instead of an assertion.

The goal of every post: someone googles a question, lands here, gets the answer in plain English, and leaves with a slightly better understanding of golf or sim golf or shot data. That is the whole job.
