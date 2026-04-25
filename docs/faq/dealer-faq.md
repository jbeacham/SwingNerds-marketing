# Dealer FAQ

Canned answers to questions we get from simulator dealers, installers,
and facility operators. See [`README.md`](./README.md) for format.

New entries at the top. Most recent first.

---

## What does it take to include SwingNerds in a new or existing simulator?

*(also phrased: "what's the integration look like?", "what do I need
to add this to a bay I'm installing?")*

**TL;DR:** GSPro is the only hard requirement — SwingNerds reads shot
data from GSPro and uses that as the source of truth. On the hardware
side, you add 1-2 USB swing cameras (~$150 each from Amazon/AliExpress,
120fps is plenty) pointed at Face-On and Down-The-Line. Our Windows app
handles auto-clipping + upload. New install or existing bay, doesn't
matter.

**Full answer:**

It doesn't matter if it's a new bay or an existing one. The only thing
that matters is that you're using GSPro, since that's the primary data
source we integrate with.

On the hardware side, you just need 1 or 2 USB swing cameras (good
120fps ones from Amazon or AliExpress are around $150 each after
everything). Face-On and Down-The-Line angles. Our Windows app takes
care of the rest — auto-detects the swing using camera motion + mic,
clips it, and uploads with the shot data attached.

So in practice: install → drop our Windows app on the sim PC → point
the cameras → done.

**Tags:** `#integration` `#gspro` `#cameras` `#setup` `#hardware`

**Source:** Facebook DM with Cory Schenker, 2026-04-24

---

## Is SwingNerds just software plus camera configuration? How does the subscription + pricing work?

*(also: "is the Windows app free?", "what do subscriptions cover?",
"are there credits or unlimited?", "what's the difference between
the free and paid tiers?")*

**TL;DR:** The Windows clipping + saving app is free forever. The
subscription is for cloud features: storage, AI analysis, GSPro sync,
sharing, analytics. Tiers differ by how many videos you can keep in
the cloud (500 / 2,000 / 5,000 shots). Shot data is unlimited on any
tier — only the video storage is tiered. AI analysis runs on monthly
credits included in each subscription.

**Full answer:**

It's a lot like Swing Catalyst, but way cheaper and with cloud features.

The actual clipping and saving part of the Windows app is free. The
subscription is what unlocks the cloud side: video storage, AI
analysis, GSPro syncing, sharing, and the full data analytics layer.

Pricing breakdown:

- **Pro** — 500 shots with video in the cloud
- **Premium** — 2,000 shots with video
- **Ultimate** — 5,000 shots with video

Shot *data* upload is unlimited on every tier. It's only the video
storage that scales by plan, because high-speed video is expensive to
keep around long-term. Everything a customer uploads stays in the cloud
forever up to their plan's video cap, with all the data analytics
tooling on top.

AI analysis is credit-based — each subscription comes with a monthly
credit allowance, and different analyses burn different amounts. Run
heavy stuff and you'll use more credits; stay light and they last.

**Tags:** `#pricing` `#subscription` `#storage` `#credits`
`#ai-analysis` `#free-tier`

**Source:** Facebook DM with Cory Schenker, 2026-04-24

---

## How do you deal with vendors versus consumers? What's the dealer program?

*(also: "what do dealers get?", "is there a reseller discount?",
"can I private-label this?", "what's in it for me as an installer?")*

**TL;DR:** Dealers buy subscriptions at a discount and resell them
bundled into sim installs. You can also white-label so your shop's
logo shows on every replay / shared video your customer produces —
so every swing they post on social becomes an ad for you. Details at
[swingnerds.com/dealers](https://swingnerds.com/dealers).

**Full answer:**

You can see the full dealer benefits at
[SwingNerds.com/dealers](https://swingnerds.com/dealers), but the gist
is: dealers get a program to buy SwingNerds subscriptions at a
discounted rate so you can turn around and sell them to your clients
as part of an install.

We're also building in white-label support, so your brand's logo shows
up on all replays and shared swing videos your customer produces — as
long as they're using a subscription that YOU purchased for them. Free
marketing for your shop every time a customer posts a clip.

Typical dealer deal shape:
- Discounted subscriptions to bundle or resell
- White-label branding on the customer's portal + shared videos
- Flexible billing (you cover it, customer pays direct, or something
  like 3 months free per install — whatever fits your sales motion)

**Tags:** `#dealer-program` `#white-label` `#reseller` `#pricing`
`#marketing` `#partners`

**Source:** Facebook DM with Cory Schenker, 2026-04-24

---

<!-- Template for new entries — copy this block above and fill it in:

## Question in natural phrasing?

*(also: "alternate phrasings", "another way someone might ask this")*

**TL;DR:** 1-2 sentence summary suitable for a quick reply.

**Full answer:**

Longer, DM-ready answer. Conversational but specific. Links if useful.

**Tags:** `#tag1` `#tag2`

**Source:** where this question originated (channel, date, person)

---

-->
