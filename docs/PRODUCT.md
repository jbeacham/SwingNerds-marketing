# SwingNerds Product Reference

The canonical "what does SwingNerds do" document. Written for two audiences:

1. Jordan (founder), to keep messaging consistent across emails, ads, and social replies.
2. AI assistants, to draft accurate responses without the user having to re-explain the product every time.

Paste this whole file into any AI chat before asking it to write copy or replies, and you'll get on-brand answers without having to fact-check.

---

## One-line definition

SwingNerds auto-records every swing in your sim setup, pairs each clip with the shot data from your launch monitor, and stores everything in the cloud so you can review your sessions from any device.

## One-paragraph definition

SwingNerds is a software platform that turns any golf simulator into a fully-instrumented swing review system. A free Windows app records every swing automatically (audio + motion detection, no clicking record), grabs the corresponding shot data from your launch monitor's software (GSPro for most users; or Uneekor, Rapsodo, Square Golf direct), and uploads both to your cloud account. From there you can review, compare, tag, and analyze swings on a phone, laptop, or web browser. Anywhere, anytime. Pricing starts at free for local-only use; cloud sync, AI analysis, and multi-device access start at $4.99/month.

---

## What you actually need to use it

**The only hard requirement: a way for SwingNerds to read your shot data.** That's it. The launch monitor brand is mostly irrelevant; what matters is the software you use to track shots.

Supported data sources:

| Data source | How SwingNerds reads it | Works with these LMs |
|---|---|---|
| **GSPro** (most common) | Reads GSPro's local SQLite database | Almost any modern LM (see full list below) |
| **Uneekor (native)** | Direct API integration | Uneekor EYE XO / EYE XO2 / View / Eye Mini / Eye Mini Lite |
| **Rapsodo** | Direct API integration | Rapsodo MLM2 Pro |
| **Square Golf** | Direct API integration | Square Golf |
| **CSV upload** | Manual import of any LM's exported data | Anything that exports CSV |

**Plus a camera** for the swing video recording. Any USB webcam ($30+) works. Most setups use 1–2 cameras (down-the-line + face-on). Built-in webcams or your iPhone (via Continuity Camera) work fine to start.

## Launch monitor compatibility (the full list)

Almost any modern launch monitor works with SwingNerds, because most of them connect to GSPro and SwingNerds reads from GSPro. **The bottom line: if you use GSPro for sim play, SwingNerds works.**

**Direct integration (no GSPro required, auto-sync via vendor APIs)**

- Uneekor EYE XO, EYE XO2, View, Eye Mini, Eye Mini Lite
- Rapsodo MLM2 Pro
- Square Golf

**Via GSPro (most users)** — SwingNerds reads GSPro's local database, so any LM that talks to GSPro works:

- Foresight GCQuad, GC3, GCHawk, Quad Max
- Bushnell Launch Pro (same hardware as Foresight GC3)
- SkyTrak / SkyTrak+
- FlightScope Mevo, Mevo+
- Garmin Approach R10
- Rapsodo MLM2 Pro
- ProTee VX
- PRGR Black
- Spectrum Golf Technologies
- ES Tour / ES2020
- Voice Caddie SC4
- Full Swing KIT, Full Swing Pro
- TruGolf Apogee
- Awesome Golf
- Optishot 2 (where supported by GSPro)

**Anything else**: CSV upload covers any launch monitor that exports its data to a spreadsheet.

When someone asks "does it work with my [LM]," the answer is almost always **yes if they use GSPro**.

## What SwingNerds is NOT

- It is **not a launch monitor**. It pairs with your existing one.
- It is **not a 3D motion capture system** (no force plates, no body kinematics like Swing Catalyst's premium tiers).
- It is **not a streaming/broadcasting tool** (unlike OBS).
- It is **not lesson/coaching curriculum software**.

## Core differentiators

1. **Fully automatic recording.** No buttons, no manual triggers. Walk in, hit balls, every swing is recorded and saved.
2. **Auto-pairs video with shot data.** No spreadsheets, no manual matching. Each clip is sitting next to its carry/ball speed/spin/etc.
3. **Cloud-accessible from anywhere.** Review your bay session from your couch, your phone, or a coach's office. Web app, iOS app.
4. **Hardware-agnostic.** Works with any USB camera and any launch monitor that connects to a supported data source.
5. **Free local tier.** The Windows app's local recording, slow-mo, frame-by-frame, favorites, and standard comparison are free forever. Replaces a typical OBS + Kinovea workflow at zero cost.
6. **Swing library.** Save favorites; set a "standard" swing per club to compare every future swing against.
7. **AI swing analysis.** Send a clip to AI and get a breakdown of strengths, areas to improve, suggested drills, and follow-up Q&A.
8. **Shareable swing videos with stats burned in.** Send any swing as a clean video with carry, ball speed, club path, and any other metrics rendered onto the frame. Public link, no login required to view. Send to a coach, buddies, social media, or your wife.
9. **White-labeling for facilities and dealers.** Customer's facility or dealer logo appears on every shared swing video, on login screens, and across other branded touchpoints (see audience details below). Every share becomes a free marketing channel.

## Common misunderstandings (and the truth)

1. **"Does SwingNerds work with [launch monitor X]?"** → If your LM works with GSPro (or one of the other direct integrations), yes. The LM brand is mostly irrelevant.

2. **"I have a LaunchPro / Foresight / SkyTrak / Garmin R10 — can I use SwingNerds?"** → If you use GSPro for your sim play, yes. SwingNerds reads from GSPro, not from the LM directly. (Trackman doesn't connect to GSPro, so SwingNerds doesn't currently support Trackman setups.)

3. **"It's just like Kinovea / OBS."** → SwingNerds replaces both AND adds: automatic recording (no clicking record), automatic data pairing, cloud access, multi-device sync, AI analysis, drawing tools, tagging, reporting. The local recording + slow-mo + frame-by-frame piece is free forever.

4. **"It's like Swing Catalyst."** → Yes, the video and analysis side. SwingNerds doesn't have force plates / 3D motion capture, but it's a tiny fraction of the cost, way simpler to set up, has commercial/facility mode built in, and lives in the cloud so customers can review from anywhere.

5. **"I can just use my phone."** → You can. The difference is automatic operation (no propping it up, no hitting record) and automatic pairing with your launch monitor's shot data. Phone filming gives you video; SwingNerds gives you video paired with stats automatically.

6. **"Do I need to buy your hardware?"** → No. Any USB camera. We don't sell hardware.

---

## Pricing (core product — individual golfers)

This is the foundation of SwingNerds. The Free tier alone replaces a typical OBS + Kinovea DIY workflow. Cloud, AI, and multi-device access start at $4.99/mo.

### Free — $0 forever

**SwingNerds Vision (Windows app), local-only.**

- Automatic swing detection via audio (ball strike) + motion (camera)
- Records from any USB camera, including built-in webcams or iPhone (via Continuity Camera)
- Dual-camera support (down-the-line + face-on)
- Slow-mo playback (0.1x to 2x), frame-by-frame scrubbing
- Save favorites
- Set a "standard" swing per club for side-by-side comparison
- Local clip storage on your computer
- Forever free, no account upgrade required

### Pro — $4.99/month

**Everything in Free, plus the cloud.**

- Cloud sync of every clip
- Web access (`app.swingnerds.com`)
- iOS app (TestFlight beta)
- Automatic shot data pairing (GSPro / Uneekor / Rapsodo / Square / CSV)
- AI swing analysis with follow-up questions (**10 credits / month**)
- Drawing tools / annotations
- Tag shots (by ball type, club brand, range vs course, anything else)
- Side-by-side swing comparison, synced frame-by-frame
- Shareable swing videos with stats burned in (public link, no login required to view)
- Dispersion charts, consistency stats, progress over time
- Data quality tools (auto-detect partial swings, wrong-club shots, mishits)
- Export to CSV
- 500 shots with video included

### Premium — $9.99/month

**Everything in Pro + 4× more video storage + 4× more AI credits.**

- 2,000 shots with video included
- **40 AI analysis credits / month**

### Ultimate — $19.99/month

**Everything in Premium + 10× more video storage + 15× more AI credits.**

- 5,000 shots with video included
- **150 AI analysis credits / month**

### About AI credits

- 1 credit = 1 swing video AI analysis (which sends 8 frames + uses Claude Vision under the hood)
- A detailed shot-data analysis is 1 credit per 25 shots (rounded up). So a 100-shot session analysis = 4 credits.
- Credits reset monthly. Unused credits don't roll over.

### Trial and promo details

- **7-day free trial** on any paid tier, no credit card required
- **Promo code `3MONTH426`** = $0.99/mo for the first 3 months on any paid tier
- Cancel anytime; if you cancel, your data stays in your account if you ever come back

---

## Audiences (additional offerings on top of the core)

The pricing above is the core product for individual golfers. Two extensions sit on top of that for business buyers: **Commercial** for facility operators and **Dealer** for sim installers and resellers. Both layer onto the same underlying product; they just bundle, brand, and price it differently.

### 1. Individual golfers (the core audience)

People with home or club sims who want to actually use their shot data instead of just glancing at it once. Pricing is the four tiers above.

**Key selling points**
- Automatic everything (no clicking record, no manual data entry)
- Multi-device review (web + iOS)
- Hardware-agnostic, your data is yours forever even if you switch launch monitors
- AI swing analysis and side-by-side comparison
- Free local tier replaces a typical OBS + Kinovea workflow

**Common objections + how to respond**
- *"I can just use my phone."* → You can; the difference is automatic operation and automatic shot-data pairing. Phone gives you video, SwingNerds gives you video paired to stats automatically.
- *"Is it locked to my launch monitor?"* → No, works with anything via GSPro, Uneekor, Rapsodo, Square Golf, or CSV.
- *"Will my data move if I switch hardware?"* → Yes, your SwingNerds account is independent of your LM. Switch monitors and your full history stays with you.

**Landing page**: home page (`swingnerds.com`)

---

### 2. Commercial sim facilities (extension)

Multi-bay operations: golf studios, club lounges, indoor entertainment venues, simulator membership facilities. They want to give their customers something compelling, run it unattended, and reinforce the facility's brand on every customer touchpoint.

**Pricing (extension on top of the core)**

- **Software**: from **$5/mo per active member** (mix-and-match Pro $5 / Premium $10 / Ultimate $20 per member)
- **Cameras**: ~$130 each one-time, 1–2 per bay (down-the-line + face-on)
- **No platform fees, no per-bay fees, no contracts**
- Cover members on your invoice (prorated when you add or remove mid-month) or let them self-subscribe with their own card

**White-label / branding**

The facility's logo and colors appear on:
- The Vision desktop app login screen at each bay (customers see your brand the moment they sit down)
- Shared swing videos (your facility's logo on every share customers post — sneaky free marketing channel)
- Other customer-facing surfaces (expanding over time)

If you cancel Commercial, members keep all their data and switch to a personal plan. No vendor lock-in.

**Key selling points**
1. **Branded experience** — your logo, your colors, on every bay screen and every shared video
2. **Unattended operation** — no staff at the bay needed; customer logs in, swings, leaves
3. **Multi-bay management** — enterprise dashboard for all bays, members, and locations
4. **Live bay status** — see who's in which bay in real time
5. **Bulk member management** — upload a CSV of emails, invite emails sent automatically
6. **Customer retention** — your customers come back because their data history lives at your facility
7. **Multi-location support** — manage multiple facilities from one account

**Common objections + how to respond**
- *"How does it work with our launch monitor?"* → If your bays use GSPro (most do), it just works. The LM brand is irrelevant.
- *"What if I cancel?"* → Members keep all their data and can switch to their own personal subscription. No lock-in.
- *"Setup time?"* → Typically 5–10 minutes per bay.
- *"Do staff need to be involved?"* → No. Customers self-serve at the bay.
- *"Can we cover some members and not others?"* → Yes. Cover whoever you want, let the rest self-subscribe.

**Landing page**: `/commercial`

---

### 3. Sim installers, dealers, and resellers (extension)

Anyone who installs golf sim setups for customers — sim integrators, retailers selling sim packages, launch monitor dealers. They want to bundle SwingNerds into their installs as a perceived value-add and earn margin on every license.

**Pricing (volume discounts on top of the core)**

| Volume | Discount | Per-license | Margin if sold at retail |
|---|---|---|---|
| 1–9 licenses | 10% off | $89.99 | $10 |
| 10–19 licenses | 15% off | $84.99 | $15 |
| 20+ licenses | 20% off | $79.99 | $20 |

Premium retails at $99.99/yr. Volume discounts apply automatically at checkout. Customers redeem the code at signup. **No credit card required.** Full year of Premium.

**White-label / branding**

When your customer is currently on a license you provided, your dealer logo appears on every swing video they share, alongside the SwingNerds watermark. The "currently funding" rule: as soon as your customer renews on their own card, your logo drops. So your brand is on every share for the year you funded.

**Key selling points**
1. **Branded shares** — your logo on every swing video your customer posts publicly (huge organic visibility)
2. **Bundle into your sim install** — your customer perceives value-add at minimal cost to you
3. **Margin every license** — $10–$20 per code sold at retail
4. **Instant delivery** — buy in bulk, get codes as a CSV immediately, distribute however you want (email, print, on an invoice, hand them over at install)
5. **Track everything** — dealer dashboard shows redeemed, available, expired, and who's using which code
6. **No support burden** — your customers contact SwingNerds directly for support; you stay focused on selling and installing
7. **No credit card friction for the customer** — they enter the code and get a full year, removing a major signup barrier

**Common objections + how to respond**
- *"What's the customer experience?"* → They redeem the code at signup, no credit card, full Premium for a year. After that they renew on their own.
- *"What if they have a launch monitor you don't list?"* → If they use GSPro (most sim users do), it just works. Otherwise CSV upload covers anything else.
- *"Do I need to handle their support?"* → No, support is direct to us.
- *"What about commercial facilities?"* → Two paths: (a) sell them Premium codes for individual members, or (b) point them at our Commercial tier for full white-label. Either way you keep the relationship.
- *"Can I bundle it free with my installs?"* → Absolutely. Your code, your distribution. Sell it for retail, give it free, bundle it in your install package, your call.

**Landing page**: `/dealers`

---

## Comparable products and how SwingNerds positions against each

| Comparison | How to position |
|---|---|
| Kinovea + OBS (free DIY workflow) | Direct replacement, free for the local part, plus auto-recording (no clicking record) and cloud + data pairing layered on top |
| Swing Catalyst | The video and analysis side, way simpler to set up, with facility/commercial mode built in, at a fraction of the price |
| Rapsodo's own app | Better video features, multi-LM support (not locked to Rapsodo), cloud archive that survives switching hardware |
| Foresight in-house app (FSX) | Hardware-agnostic. Your data lives in SwingNerds whether you switch LMs or not |
| Phone filming | Automatic instead of manual; data automatically paired to each clip |

## Quick facts for replies

- **Cameras**: any USB cam, $30+ on Amazon, recommended 120fps swing-cams around $130
- **Setup time**: typically 5–10 minutes per bay
- **Free trial**: 7 days, no credit card required
- **Operating systems**: Windows for the recording app; web (any modern browser) and iOS (TestFlight beta) for review
- **Data sources auto-synced**: GSPro, Uneekor (native), Rapsodo, Square Golf
- **CSV import**: any other LM
- **Pricing for individuals**: $4.99 / $9.99 / $19.99/mo
- **Pricing for facilities**: from $5/mo per active member
- **Dealer pricing**: $79.99–$89.99 per Premium license depending on volume (retails $99.99)
- **Coupon for individuals**: `3MONTH426` = $0.99/mo for first 3 months

## How to think about replies

When someone asks "does this work with my X," the answer is almost always **yes if they use GSPro**, regardless of the X. Steer the conversation to "what software are you using to track shots?" rather than "what hardware do you have."

When someone says they already use a phone or DIY setup, validate it briefly (don't argue), then highlight the two real differentiators: **automatic operation** and **automatic data pairing**.

When someone compares to a high-end product (Swing Catalyst, premium proprietary apps), acknowledge the parts that aren't comparable (force plates, etc.) and lean on simplicity, cost, and cloud accessibility.

When someone is on the fence, offer an extended free trial. Cost is rarely the actual blocker; habit and inertia are.

When messaging dealers/installers, lead with the white-label hook + margin. When messaging facility operators, lead with the unattended operation + branded experience. When messaging individual golfers, lead with automatic operation + multi-device review.

---

*Last updated: 2026-04-25*
