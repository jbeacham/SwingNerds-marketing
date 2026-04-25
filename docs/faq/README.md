# SwingNerds FAQ Library

Living library of answers to real questions we get. Each file is
scoped to an audience so the tone + technical depth stays right.

- [`dealer-faq.md`](./dealer-faq.md) — simulator dealers, installers,
  facility operators asking about the dealer/white-label program.
- [`customer-faq.md`](./customer-faq.md) *(coming)* — end-user golfers:
  pricing, what the subscription gets them, camera setup, trial.
- [`technical-faq.md`](./technical-faq.md) *(coming)* — integration
  questions: GSPro sync, Rapsodo/Uneekor, cameras, FPS, etc.

## Format

Each entry:

1. **Question** — phrased generically so it's reusable, not "Cory
   asked..." specifically. Include paraphrase variants in parentheses
   for grep-ability.
2. **TL;DR** — 1-2 sentences. What I'd say if I had to answer on a phone.
3. **Full answer** — the longer response suitable for a DM or email.
4. **Tags** — `#pricing`, `#white-label`, `#cameras`, etc. Lets me
   `grep -l '#white-label' docs/faq` when I'm looking for prior answers
   to a similar question.
5. **Source** — link or note describing where this question came from
   (channel, date, person if relevant), so future-me can remember the
   context when updating the answer.

## Using this library

- **Answering a DM**: search by keyword, copy the Full answer, tweak
  the intro line to match the conversation, send.
- **Updating an answer**: when a better answer comes out of a live
  conversation, edit the entry here too — so the library stays ahead
  of the product, not behind it.
- **Adding a new Q&A**: new entries go at the TOP of the relevant
  audience file (most recent first). Update tags + table of contents.

## Future uses

This library is intentionally markdown + plain-text so we can:

1. Render it as a public FAQ page on swingnerds.com later.
2. Feed it to a future "Ask SwingNerds" chatbot as its knowledge base.
3. Export to a sales playbook / onboarding doc for anyone who joins
   the team and needs to start answering DMs.
