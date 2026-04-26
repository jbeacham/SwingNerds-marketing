---
title: "Tagging shots: how to keep range balls and gamers separate"
description: How tagging works in SwingNerds and a few examples of how players use tags to make their data actually useful.
date: 2026-04-10
author: SwingNerds Team
tags: [product, tagging]
featured: false
---

A tag is a short label you can attach to any shot in SwingNerds. There is no right way to tag and no required taxonomy. The goal is to give you a way to slice your own data later in any way that matters to you.

This post is about why tagging exists and a few patterns that have emerged from how people use it.

## What a tag is

Mechanically, a tag is just text you assign to a shot. You can:

- Add a tag to a single shot from the shot detail page
- Bulk-tag a group of selected shots in one action
- Filter your shot list by tag
- Use tags as a dimension in charts (split out range balls vs gamers, for example)

Tags are personal. Other people in your account or your facility do not see your tags. Each player tags their own shots however they want.

There is no fixed list. You make up the tags as you go.

## Why tagging matters

Without tags, your shot history is a single giant pile of swings. Every 7-iron you have ever hit, in one bucket. Most of the time you do not want to look at every 7-iron. You want to look at every 7-iron with **a specific ball**, in **a specific kind of session**, with **a specific club setup**, after **a specific lesson**.

Tagging is what makes that possible. A few minutes of tagging during practice gives you a much more useful dataset later.

## Common tagging patterns

A few patterns we see often:

### Ball type

By far the most common use. Tags like:

- `range balls`
- `pro v1`
- `chrome soft`
- `whatever ball you actually play`

The reason this matters: your range balls almost never spin or carry the same as your gamer. If you are looking at a chart of "my carry distance over time" and half the shots are with a beat-up range ball and half are with a fresh premium ball, the chart is mixing two distributions.

Tagging by ball lets you split the chart, or filter to just one ball type, and the data tells a clearer story.

### Club generation or setup

Tags like:

- `new shaft`
- `2024 driver`
- `2025 driver`
- `lighter grip`
- `stock setup`

When you change something about a club, tag the shots. When you change again, tag the new ones. Three months later, you have a clean before-and-after comparison instead of a guess.

### Practice context

Tags like:

- `range`
- `course`
- `simulator`
- `playing pressure`
- `warm-up`
- `block practice`
- `random practice`

Useful for spotting patterns like "my swing falls apart when I am not warmed up" or "my numbers are different on a course than in the bay" without having to remember which session was which.

### Lesson tracking

Tags like:

- `pre-lesson 2026-04-10`
- `post-lesson 2026-04-10`
- `working on takeaway`
- `working on tempo`

If you are working with a coach on a specific change, tag the shots related to that work. You will be able to see whether the change is showing up in the data over time.

### Quirks worth flagging

Tags like:

- `mishit`
- `practice swing` (if a non-shot somehow got recorded)
- `not in stance`
- `wrong club selected`

These are useful for excluding bad data from your real analysis. SwingNerds also has automatic data quality detection for some of these, but a manual tag is always available if you spot something the auto-detection missed.

## What we deliberately did not do

- **No required tags.** Untagged shots work fine. You only tag what you want to.
- **No global taxonomy.** We do not impose a list of approved tags. You make up your own. If you tag your driver swings `the killer` and your iron swings `the saver`, that is your business.
- **No tag suggestions based on someone else's setup.** What is useful to one player is irrelevant to another.

A long-term goal is gentle suggestions ("you tagged a few shots `pro v1` recently, want to tag this one?") but we have been deliberate about not pushing taxonomy on people.

## How to make this actually work

The number one thing that goes wrong with tagging is forgetting to do it.

A few habits that help:

- **Tag during the session, not after.** Once you have moved on to the next session, you will not remember which ball you were hitting.
- **Bulk-tag at the end of a session.** Highlight the whole session, apply a couple of tags, done. Takes thirty seconds.
- **Keep your tag set small.** Three or four tags consistently used are more valuable than fifteen tags used once each.
- **Use tags to answer one specific question.** "Which ball is producing the most consistent carry?" "How is the new driver doing?" Build the habit around the question, not around being thorough.

## Where tags show up

Once you tag shots, the tags appear:

- As small chips next to each shot in the list and detail views
- As filter options on the shot list ("show me only `pro v1` shots")
- As a dimension in some charts ("group by tag")
- In CSV export, so they survive if you take your data elsewhere

The whole point is that the tags travel with the shot. Whatever you tagged today is still there next year.

---

*Tagging is included on every paid plan. Try it on a [7-day free trial](/get-started).*
