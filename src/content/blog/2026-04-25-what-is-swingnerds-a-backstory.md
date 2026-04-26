---
title: "What is SwingNerds? A backstory"
description: How SwingNerds started as a personal tool for one frustrated golfer in a sim bay, and turned into a full swing review platform for anyone with a launch monitor.
date: 2026-04-25
author: SwingNerds Team
tags: [story, product]
featured: true
---

This is a "what is SwingNerds" post, but it is mostly the story of how it ended up existing in the first place. The story is short. The product grew out of it.

## What SwingNerds is, in one paragraph

SwingNerds is a software platform that turns any golf simulator into an instrumented swing review system. A free Windows app records every swing automatically using any USB camera. That can be the webcam built into your laptop, your iPhone acting as a webcam, or one of the dedicated high-FPS swing cameras (around $100) that we recommend on our [cameras page](/cameras), instead of paying thousands for the camera packages most launch monitor brands try to sell you. The app pairs each clip with the matching shot data from your launch monitor's software, GSPro for most setups, with a couple of other direct integrations, and uploads both the video and the data to your cloud account. From there you can review, compare, draw on, tag, and analyze swings on a phone, laptop, or web browser. Pricing starts at free for local-only use; cloud sync, AI analysis, and multi-device access start at $4.99 a month.

That is the elevator pitch. Now the story.

## How it started

I was new to golf. Not "took it up last summer" new. Brand new. I bought a launch monitor before I bought a full set of clubs, which is a sentence that probably says everything you need to know about how I got into this.

The launch monitor was a Rapsodo MLM2 Pro. And honestly, the MLM2 Pro is a huge part of why I got into the game. The accessibility was the unlock. I could hit a hundred balls in a session at home without driving to a range, without booking a tee time, without sweating through a shirt in summer or freezing in winter. I could pick up a club, swing it, see what happened, and put it down. The friction between "I want to hit some balls" and actually doing it was almost zero.

Don't get me wrong, I love getting out on a real range too. The grass, the sound, the shot you actually have to commit to. But the sim is what got me hooked. It is what turned a passing curiosity into a thing I think about every day.

And then, as anyone who has gone down this path knows, the upgrade cycle started. I bought a sticker pack so I could mark up my own gamer balls instead of swinging the same range balls every session. I started thinking about cameras. I started thinking about a better hitting mat. I started thinking about a second launch monitor. The sim setup is a beautiful, never-ending project.

## The hosel rocket day

I had taken a lesson. I had been hitting it well. I felt like I sort of had it figured out for once.

Then one day I went into the bay and shanked everything off the hosel. I am talking eight out of ten shots. Not "the occasional bad one." Just hosel rocket after hosel rocket. I tried everything. Scooting forward. Scooting back. Changing my grip. Slowing down. Speeding up. Different club. Different ball position. Nothing worked.

I went and looked at my swing video to see what was happening. And here is the strange part: when I watched a hosel rocket in isolation, on its own, it looked like a normal swing. I could not tell what was going wrong. When I watched a good swing in isolation, it also looked like a normal swing. Both looked fine to me.

Then I put them side by side. Same screen. Same starting frame. And it was immediately, embarrassingly obvious. The thing I was doing differently was right there, plain as day, the moment I could compare them frame by frame next to each other.

That was the moment.

I realized I wanted that all the time. Not just on the day everything fell apart. I wanted to be able to compare any swing against my best swing for that club, on demand, every time.

## The first version

I built a video comparison tool for the MLM2 Pro. Just for me, at first. It pulled the swing clips that the MLM2 Pro records and let me line them up side by side, scrub through them frame by frame, slow them down, and put them on top of each other. Nothing fancy. Just the thing I wished existed.

A bunch of other Rapsodo users found it and started using it. That was the first sign that the problem I was solving for myself was a problem a lot of other people had too.

## Then I switched launch monitors

A few months later I ended up with a Uneekor Eye Mini Lite. I love it. But it does not have a swing camera at all. None. The Eye Mini Lite reads the ball and the club at impact and that is it. If you want video of your swing, that is on you.

You can add cameras through Uneekor. The bolt-on camera kit was around $1,800 the last time I looked. Doable, but a lot of money on top of an already expensive launch monitor.

And here is the thing that really got me. Even if I had paid for it, the camera, analytics, and video features in the manufacturer apps (Uneekor's own software, Rapsodo's, others) do not show up when you are using GSPro. They are tied to that brand's own software. If you run GSPro for sim play and practice, which is what I wanted to do, you are essentially locked out of the analytics and video tooling you paid for. Same story across every launch monitor I looked at. None of them played nicely with GSPro for the video and review side. They wanted you in their app.

GSPro is the software I wanted to use for everything. Practice, play, leagues, all of it. So I needed video and analytics that would work alongside GSPro, not inside someone else's walled garden.

So I went down the swing-camera rabbit hole. And I was surprised at how clunky the existing options were. The standard answer was Kinovea plus OBS. Kinovea for video analysis, OBS for the actual recording. Both are excellent pieces of software. Both are also way more complicated than the job called for.

What I wanted was simple. Walk into the bay. Hit a ball. The clip is already saved. The good ones are flagged. The hosel rockets are sitting next to my best swings, ready to compare. None of that existed in one place. I would have had to wire it together myself out of three or four tools, and I would have had to click "record" every single time.

So I built it. That became SwingNerds.

## Where it went from there

Once the core was working, the requests started rolling in. Drawing on swings, so people could mark up posture lines and angles. Tagging shots, so people could separate range balls from gamer balls, or new driver from old driver. Cloud storage, so people could review their bay session from their couch. iPhone access. AI analysis. Sharing a swing as a clean public link. White-label branding for facilities and dealers.

We added all of that. Most of it came directly from people telling us what they were trying to do. The pattern has been remarkably consistent: someone shows up with a problem they would solve for themselves if they had the time, we listen, and if it makes sense for everyone, we add it. The product is shipping new things almost every week at this point.

## What it does today

Here is the current short list, since this is also a "what is SwingNerds" post:

- **Auto-records every swing** in your sim setup, no buttons. Audio detection plus motion. The Windows app handles this and is free forever for local use.
- **Pairs each clip with shot data** from your launch monitor automatically. GSPro for most setups, with a couple of other direct integrations, plus CSV upload from anything else.
- **Cloud sync** so you can review your bay session from a phone, a laptop, or a coach's office.
- **Side-by-side video comparison.** The original feature. Pick any two swings, watch them in sync, frame by frame.
- **Slow motion and frame-by-frame playback.** Down to 0.1x speed.
- **Drawing tools** for marking lines, angles, and posture references on a swing.
- **Tagging** for organizing shots by ball type, club, range vs course, anything.
- **A "standard swing" per club** that you can save and compare every future swing against.
- **AI swing analysis** that breaks down strengths, areas to improve, and suggested drills, with follow-up questions.
- **Shareable swing videos with stats burned in.** Public link, no login required to view.
- **Dispersion charts, consistency stats, and progress over time.** Once your shot data starts to pile up, the platform can show you how things are trending.
- **A free local tier** that replaces the typical Kinovea plus OBS setup at zero cost.

It works with almost any modern launch monitor, because most of them connect to GSPro, and SwingNerds reads from GSPro. If your launch monitor talks to GSPro, SwingNerds works. A couple of direct integrations also exist for users who do not run GSPro.

## Why we keep building it

The honest answer is that I keep using it myself, every time I am in the bay, and every time I find myself thinking "it would be nice if it could also do X" I write it down. Some of those become features. The ones that turn out to be things lots of people want become priorities.

Most of the product was built like that. Someone, usually me, hits a wall in their own practice. We build the thing that would have helped. Other people turn out to have hit the same wall.

If you have ever stood in a sim bay frustrated that the tools you have are not quite the tools you want, that is the whole reason this exists. Welcome.

---

If you want to try it, the [free Windows app](/vision) records and replays swings locally with no account at all. The cloud features start at $4.99 a month with a [7-day free trial](/get-started), no credit card required.
