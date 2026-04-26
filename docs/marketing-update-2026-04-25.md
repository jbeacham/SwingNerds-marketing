# Marketing update — 2026-04-25

Tracking the home page restructure and follow-ups.

---

## Restructure (applied today)

The home page got compressed from ~16 sections to **6 sections** so pricing is reachable in 2-3 scrolls instead of 16. New order:

1. **Hero** (logo, headline, subtitle, CTAs, business buyer link). Slot waiting for the eventual hero video.
2. **Tabbed feature showcase** (NEW). Defaults to "Compare". Other tabs: Mark Up, Share, AI Analysis, Mobile. Each tab swaps the visual + caption with no page navigation.
3. **Works with GSPro automatically** (LM compatibility, condensed) with the SEO brand-name list.
4. **Pricing** (4 tiers).
5. **Other ways to use SwingNerds** (audience cross-sell to /commercial and /dealers).
6. **Bottom CTA + contact + footer**.

### Sections deleted as part of the restructure

These were replaced by the tabbed showcase:
- Hero screenshot section (static iOS comparison image)
- Screenshots showcase (4 rows: All-Time, Dispersion, Shot Comparison, Charts)
- Emotional hook ("perfect 7-iron" quote)
- Social proof placeholder
- Side-by-side comparison standalone section
- "Mark up your swings" standalone section
- "Share your best swings" standalone section
- Your Data, Forever
- Analytics Features 4-card grid
- Mobile App standalone section

The CSS for these old sections is still in the file but unused. Safe to leave — pruning later is fine.

### Sections kept

- Hero (lightly tightened earlier)
- Works with GSPro automatically (LM section)
- Pricing
- Other ways to use SwingNerds (the small audience cross-sell)
- Bottom CTA, Contact, Footer

---

## Tab content (already wired)

| Tab | Default | Visual | Caption summary |
|---|---|---|---|
| Compare | ✅ default | `comparison_slowmo_scrubbing_short.gif` + iOS comparison screenshot side by side | Pick any two shots, see them synced in slow motion with shot data overlaid |
| Mark Up |  | `drawing_comparison.gif` | Draw lines, angles, posture marks. Annotations save with the swing |
| Share |  | `swingnerds_share_yourlogohere.jpg` + live share link | Send any swing as a clean video with stats burned in. Logo on Commercial/Dealer plans |
| AI Analysis |  | placeholder until you record one | Send any swing to AI for breakdown of strengths, drills, follow-up Q&A |
| Mobile |  | `SwingNerds_Screenshot_Charts_Mobile.PNG` | Full dashboard on your phone, plus iPhone-as-camera recording |

---

## Visual assets — TODO

### Priority 1

- [ ] **Hero demo video (30–45 seconds)**
  - **Where**: Hero section. Slot to be added when you record the video — it'll go in or just below the hero CTAs.
  - **What to show**:
    - 0–5s: Walk-up to a sim bay
    - 5–15s: Hit a swing, GSPro shows the shot data
    - 15–25s: Cut to web app — swing video and data appear together, nothing clicked
    - 25–35s: Quick cuts: comparison, AI analysis, mobile
    - 35–45s: Logo + "Free 7-day trial"
  - **Why it matters**: THE killer asset. Cold-visitor conversion lever.
  - **Format**: MP4 + WebM, autoplay muted with controls. Or YouTube/Vimeo embed.

- [ ] **Auto-recording GIF (3–5s loop)** *(now lower priority since tabs handle features)*
  - **What to show**: Vision Windows app, clips materializing as the user swings, no mouse interaction.
  - **Where**: Could be added as a 6th tab ("Auto-Record") if recorded. Otherwise skip.

- [x] **Side-by-side comparison GIF** — wired into the Compare tab.
- [x] **Drawing GIF** — wired into the Mark Up tab.
- [x] **Share image with "Your Logo Here"** — wired into the Share tab + the `/commercial` and `/dealers` hero proof slots.

### Priority 2

- [ ] **AI Analysis screenshot**
  - **Where**: AI Analysis tab in the showcase (currently a placeholder).
  - **What to show**: AI analysis page with strengths, areas to improve, drills, follow-up chat.
  - **How to drop in**: edit `featureTabs` in `LandingPage.vue`, set `asset: '/SwingNerds_AIAnalysis.png'` on the `ai` tab object, remove the `placeholder` field.

- [ ] **Auto-record loop or screen recording** *(see Priority 1)*

### Priority 2 (continued)

- [ ] **Windows app login screen with white-label facility/dealer logo** — replaces the current `swingnerds_share_yourlogohere.jpg` placeholder on `/commercial` and `/dealers` hero proof slots.
  - **Why it's needed**: The current placeholder image is a generic share preview with "your logo here" text. A real screenshot of the Vision Windows app login screen showing an actual facility's logo (or a sharp "your logo here" mockup that reads as the bay PC the customer sits down at) is far more concrete and convincing than a share watermark, especially for the facility/dealer audiences who care about the in-bay branded experience first and the social-share secondary.
  - **What to capture**: Vision desktop app login screen, with a sample facility logo prominently displayed where SwingNerds branding currently lives. Could also be a small split-view showing both: bay login screen on one side, swing-share watermark on the other, captioned "Your brand on every customer touchpoint."
  - **Where it goes**: Replace `swingnerds_share_yourlogohere.jpg` reference in `/commercial` and `/dealers` heroes (search for `hero-proof-img` in those files).
  - **Sizing**: ~360px wide max so it reads as supporting proof, not a competing hero image.

### Showcase enhancements (home page "See it in action" tabs)

- [ ] **Lightbox / click-to-expand on tab visuals** — clicking any image or video in the showcase should open a near-full-viewport modal so visitors can actually study the frame, scrub, or read the screenshot. Click outside / X / ESC to close. Videos should keep autoplaying in the modal. Portrait visuals (Share, Mobile) should keep their phone-frame chrome at the larger size.

- [ ] **More feature tabs to add** — once each has its own visual, add:
  - **Graphs** — progress over time, club averages, consistency. Use one of the existing chart screenshots (or a new GIF showing the chart selector switching between metrics).
  - **All-Time Analysis** — career stats, club progression (earliest vs recent shots), top sessions ranking. Could reuse `SwingNerds_Screenshot_AllTimePerformance_Desktop.png`.
  - **Shot Data Tables** — every metric per shot, sort, filter, search, club filter, source filter, pagination. Best as a screenshot or short GIF of sorting/filtering in action.
  - **Data Quality Cleanup** — AI-detected partial swings, wrong-club shots, mishits, outliers. Configurable sensitivity, preview before applying. Either a screenshot of the data-quality page or a GIF of the preview-then-apply flow.
  - **Pro Swing Comparison** *(coming soon — placeholder treatment)* — comparing your swing to a tour-pro reference. Show "Coming soon" placeholder until the feature ships.

### Priority 3 — nice-to-have

- [ ] **Tagging GIF** — could become a 7th tab if recorded.
- [ ] **White-label proof image variants** for `/commercial` and `/dealers` (the existing `swingnerds_share_yourlogohere.jpg` works for now).
- [x] **Multi-LM logo grid expansion** — done 2026-04-25. All cards now show "via GSPro" as the green-pill headline. Direct integrations (Rapsodo, Uneekor, Square Golf) get a small "or auto sync" / "or CSV" gray subtitle. Logos for Foresight, Bushnell, SkyTrak, FlightScope, Garmin, ProTee, Full Swing, PRGR, and Spectrum Golf Technologies live in `public/integration_logos/`. (Trackman intentionally excluded — they don't connect to GSPro.) ProTee logo was 5000×5000 / 427 KB on import; resized via `sips -Z 500` to 40 KB.

---

## How to drop each asset in once recorded

1. Save the file to `public/` (e.g. `public/SwingNerds_HeroDemo.mp4` or `public/AutoRecord.gif`).
2. For tabbed showcase tabs, edit the `featureTabs` array near the top of `<script setup>` in `LandingPage.vue` and set `asset: '/your-file.gif'` on the right tab object. Remove the `placeholder` field.
3. For the hero video, you'll add a `<video>` element somewhere in the hero section (we can wire that in once you have the file).
