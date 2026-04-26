---
title: "Drawing on a swing: lines, angles, and posture marks"
description: How drawing tools work in SwingNerds, the marks people commonly use, and why annotations stay attached to the swing for next time.
date: 2026-04-07
author: SwingNerds Team
tags: [product, drawing]
featured: false
image: /SwingNerds_Screenshot_ShotComparison_Desktop.png
---

<figure>
  <video src="/drawing_comparison.mp4" autoplay muted loop playsinline controls></video>
  <figcaption>Drawing reference lines on a swing to compare against another clip.</figcaption>
</figure>

A swing video is a sequence of frames. A swing video with a few lines drawn on it is a piece of analysis. The drawing tools in SwingNerds exist to bridge that gap, with the minimum amount of fuss.

## What you can draw

The drawing toolset is intentionally small. The goal is to mark up a swing in seconds, not to make art.

- **Lines.** A simple straight line, two points, drag to draw. Used for things like spine angle, target line, shaft plane reference, head position over time.
- **Angles.** Two lines meeting at a vertex, with the angle measured in degrees automatically. Useful for measuring posture or shaft angles relative to a reference line.
- **Circles and dots.** A small marker on a specific point. Often used to track a single point (head, hip, club head) across multiple frames.
- **Arrows.** A line with a head, useful for indicating direction (where the club is moving, where the weight is shifting).
- **Freehand.** A draw-as-you-go path. Used sparingly. The straight tools are usually clearer.

Each mark has color and thickness options. Two or three colors per swing usually reads better than a rainbow.

## How marks stay attached

Drawings live with the swing. When you mark up a swing today, those marks are still there next time you open it. They are not part of the underlying video file; they are stored as data in your account and rendered on top of the video at playback time.

That has a few useful consequences:

- **The original video is unchanged.** Your raw footage stays clean. You can have a marked-up version and an unmarked version of the same clip.
- **Marks scale with the playback size.** Whether you are watching the swing in a small phone window or a full-screen view on your laptop, the lines stay where they are supposed to be.
- **You can edit or remove marks anytime.** Pick a mark, move it, change its color, or delete it. The video is not affected.

## Drawing on a comparison

When you have two swings open in side-by-side mode, drawing works on both. You can mark a reference line on one swing (say, the head position at address) and watch where the same reference falls on the other swing. The marks on each clip are separate, so you can have different annotations on each.

This is one of the more productive ways to use the drawing tool. Mark a single landmark on both swings at the same moment, then play both forward and watch which one moves first or moves further. That is a real diagnostic, and you can do it in 30 seconds.

## Common marks people use

A few patterns we see all the time:

- **Head position dot at address, traced through impact.** Adds a single small mark at the head's starting position, then plays forward to see where the head ends up at impact. Helps spot lateral head movement that is invisible without the reference.
- **Spine angle line at address.** A straight line from the back of the neck to the tailbone. Then play forward and watch whether that angle changes through the downswing.
- **Target line on DTL view.** A line down the ground from the ball toward the target. Useful for showing how aligned (or unaligned) a setup is.
- **Shaft plane line.** A line along the shaft at address, extended upward. Then watch where the club returns relative to that line through impact.
- **Hand path arc.** A series of dots tracking the hands across the swing.

None of these are right or wrong. They are just landmarks that make the swing easier to read.

## What it does not do

- **It is not a coaching prescription.** Drawing on a swing tells you what is happening, not what should be happening. The interpretation is up to you (or your coach, or the AI analysis feature).
- **It does not auto-detect anything.** The marks are placed by you. We considered building auto-detection (AI-placed lines, body keypoints, etc.) and may add it down the road. For now, the tool is manual on purpose, because manual marks are usually clearer than auto-placed ones for the kinds of things people care about.

## The product philosophy here

A lot of swing analysis software wants to be impressive. SwingNerds drawing wants to be invisible. You should be able to mark up a swing in five seconds, see what you wanted to see, and close the tool. The fewer features fighting for your attention, the more useful the feature is.

So the drawing toolset is small. Lines, angles, dots, arrows. Done.

---

*Drawing is included on every paid plan. Try it with a [7-day free trial](/get-started).*
