---
title: "What cameras to use for swing video: frame rate, shutter, and lens basics"
description: A primer on what to look for in a swing camera, with explanations of frame rate, shutter speed, and field of view.
date: 2026-04-13
author: SwingNerds Team
tags: [cameras, setup]
featured: true
image: /Kayeton_120fps_2.jpg
---

<figure>
  <img src="/Kayeton_120fps_2.jpg" alt="A 120fps USB global-shutter swing camera, the kind used in most sim bay setups" />
  <figcaption>The kind of camera most sim setups land on: a 120fps USB swing-cam with a global shutter, around $100.</figcaption>
</figure>

A swing camera does one thing: it captures the moment a club hits a ball, plus the seconds before and after, in enough detail that you can replay it and see what happened. Three specifications drive how well a camera does that job: frame rate, shutter speed, and field of view.

This is what those terms mean and what to look for. Specific camera recommendations live on our [cameras page](/cameras), which is updated as new options come out and as ones we have tried first-hand prove themselves.

## Frame rate

Frame rate is the number of pictures per second a camera records. It is measured in frames per second (FPS).

For everyday video, 30 FPS is the standard. That is what most webcams default to. It looks fine for a person talking on a video call. It is too slow for a golf swing.

A golf swing happens fast. The club head can move at over a hundred miles per hour. Between two consecutive frames at 30 FPS, the club has traveled several feet. When you slow that footage down, the club appears to teleport between positions, and the impact is over before you can see it.

Higher frame rates buy you smoother slow motion. The common tiers in the swing-cam world are:

- **30 FPS.** Webcam baseline. Useable for getting your camera positions right and seeing your sequence in real time. Slow motion looks choppy.
- **60 FPS.** Smoother slow motion, the impact is still hard to read clearly.
- **120 FPS.** A common sweet spot for swing analysis. Slow motion is smooth enough to step through impact frame by frame and see what the club did.
- **240 FPS or higher.** Very smooth slow motion. Useful if you want to study impact in fine detail. Diminishing returns for most players, and the practical catch is light: at 240 FPS, the sensor has barely 1/240th of a second per frame to gather light. The same scene that looks bright at 60 FPS can look noticeably dim at 240 FPS, and noisy/grainy if there is not enough light to compensate. Sim bays often run a little dim to begin with (so the projector image looks good), so cranking the camera FPS without adding light usually produces darker, grainier video, not better video.

Higher frame rates also need more storage and faster connections, so the upgrade is not free.

This is why **120 FPS tends to be the sweet spot** for most home setups. It is fast enough to step through impact frame by frame, and the per-frame light budget is still wide enough that the video stays clear in normal sim-bay lighting. Going to 240+ usually means adding dedicated lighting at the same time, which is its own project.

## Shutter speed

Frame rate is how often the camera takes a picture. Shutter speed is how long each picture is exposed for.

A long shutter speed means the sensor is collecting light for a longer slice of time. Anything moving fast during that slice shows up blurred. A short shutter speed exposes for a tiny slice of time, freezing motion crisply.

For a golf swing, the moment of impact is the moment that benefits the most from a fast shutter. At a slow shutter, the club at impact is a smear. At a fast shutter, you can see the face, the dimples on the ball, and exactly where the strike was on the face.

Frame rate and shutter speed are related but not the same. A camera at 120 FPS can have a slow shutter (so the frames are smooth-looking but the club is still blurry) or a fast shutter (sharp clubs, but the camera needs more light). For swing video, look for a camera that lets you set a fast shutter and has the light to match.

## Global shutter vs rolling shutter

This one is invisible until it ruins a clip, then it is the only thing you see.

Most cameras use a **rolling shutter**. The sensor reads its pixels one row at a time, top to bottom, very fast but not instantly. For a person sitting still, this is fine. For a golf club moving at a hundred miles an hour, it is not fine. Different parts of the club are captured a few microseconds apart, and the club ends up looking warped, bent, or stretched in the frame. You get a club that looks like a wet noodle in the moment of impact, even though the camera is doing its job perfectly.

A **global shutter** sensor reads the entire frame at the same instant. The whole image is exposed and captured at once, so a club moving fast still looks like a club, not a banana. Global shutter is the right answer for fast-motion sports, and golf is one of the obvious cases.

There are tradeoffs. Global shutter cameras are typically more expensive than rolling shutter cameras at the same frame rate, and the sensors are often smaller or lower-resolution at a given price. For everyday video (a face on a video call, a slow pan across a room), the difference does not matter. For a 7-iron at 90 mph, it does.

What this means in practice:

- For DTL and face-on swing video, **global shutter is genuinely better** than rolling shutter, especially when looking at the club at impact.
- A modest-FPS global-shutter camera can outperform a higher-FPS rolling-shutter camera for the specific job of seeing the club clearly at impact.
- Most webcams and most phones use rolling shutter. Most purpose-built swing-cams are starting to advertise global shutter, but not all do. Worth checking the spec sheet before buying.

If you are picking between two cameras at the same price and one is global shutter, that is usually the right pick for swing video.

## Field of view (and lens basics)

Field of view is how wide of a scene the camera captures.

- A **wide-angle lens** captures more of the scene from a closer distance. In a tight sim bay where the camera is only a few feet from the player, you may need a wide lens to fit the whole swing in frame.
- A **standard lens** captures roughly what the human eye sees.
- A **narrow / zoom lens** captures less of the scene, but in more detail. Useful when the camera is farther away.

Some swing-cams come with interchangeable lenses, which lets you tune the field of view to your bay. A camera with a fixed lens is fine if the lens matches the room you have.

For most home setups, a **moderately wide-angle lens** at a 5 to 8 foot distance from the hitting position works well for both DTL and face-on.

## Resolution

You will see resolution numbers like 1080p, 1440p, and 4K on camera spec sheets. For swing analysis, **1080p is plenty**. Higher resolutions look slightly sharper but eat storage and processing time. The goal is to see what your swing is doing, not to make a film. Most setups do well at 1080p.

## Other things that matter in practice

A few practical considerations that do not show up in spec lists:

- **Connection type.** USB cameras plug into a computer and act like a webcam, which is the easiest setup for swing software that expects a USB feed. Network cameras and HDMI cameras can also work but need additional steps.
- **Power.** USB cameras get power over the cable, which is convenient. Battery-powered cameras need to be charged.
- **Mounting.** A solid tripod or wall mount matters more than people expect. A wobbly camera shows wobbly video.
- **Light.** All of the above gets easier with more light. Even a cheap shop light improves swing video quality dramatically.

## Webcams and phones as a starting point

You do not need a dedicated swing-cam to get going. Many people start with what they already have:

- **A built-in laptop webcam.** Limited to 30 FPS in most cases, but useable for setting up positions and starting to review.
- **An iPhone, used as a webcam.** Recent iPhones, paired with macOS Continuity Camera or third-party apps like Camo or EpocCam, show up as a regular USB camera and produce good 1080p footage. Good enough to identify a lot of swing issues.
- **A $30 to $50 USB webcam.** A solid step up from a laptop camera, with better light handling.

These get you to "I can see my swing." The upgrade to a higher-FPS swing-cam is about seeing the ball and club at impact in detail.

## When to upgrade

Upgrade when one of two things is true:

1. You want to study what is happening at impact. Higher FPS and a faster shutter give you a clearer read on club face, ball position, and strike location.
2. You want consistently sharper video for sharing or coaching. A purpose-built swing-cam looks noticeably better than a webcam in low-light bays.

If neither of those is pressing for you, a webcam is plenty.

## Where to look

Our [cameras page](/cameras) lists specific cameras and lenses we have used and that are popular in the SwingNerds community. It is the best starting point for a recommendation that matches your budget and bay.

---

*[SwingNerds](/) supports any USB camera, so you can mix and match: start with a webcam, upgrade later, mix a webcam with a swing-cam, whatever fits your setup.*
