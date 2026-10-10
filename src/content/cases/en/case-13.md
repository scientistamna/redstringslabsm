---
number: 13
title: "Case 13: Real or Fake? Catch the Faker"
hook: "A detector is about to decide whether you are a faker. It does not always get it right, and that is the real case."
rank: analyst
minutes: 35
tools: "The Faker Detector page on this site (no sign-up, runs in your browser)"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads: []
resources:
  - label: "OpenAI: New AI classifier for indicating AI-written text"
    url: "https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text"
    note: "The original announcement, updated to say the classifier was withdrawn on 20 July 2023 due to its low rate of accuracy."
  - label: "Liang et al.: GPT detectors are biased against non-native English writers"
    url: "https://arxiv.org/abs/2304.02819"
    note: "The Stanford study. Check the numbers in the paper itself before you quote them."
decoder: [First digit, Natural pattern, Detector, False alarm, Trade-off, Proof vs hint]
challenge: "Play the Faker Detector. Invent a list, then try again knowing how it works. Run lists of 20, 30 and 50 numbers and note how often it catches you. Write one honest sentence: what a detector can tell you, and what it can never tell you. No personal details."
parentNote: "No personal data is collected. The Faker Detector runs in the browser, and every number on it is made up or simulated."
quiz:
  - q: "At the 95% bar, the detector wrongly flags about 5% of natural lists. Why?"
    options: ["It is broken", "The bar is set that way, and catching more fakes means accusing more honest lists", "Natural lists are always fake", "Because lists are too long"]
    answer: 1
    explain: "Every detector has a trade-off. Move the bar and the catch rate and the false-alarm rate move together."
  - q: "Why is a list of 20 numbers a weak test?"
    options: ["Short lists have too few first digits to show a clear pattern", "20 is an unlucky number", "The detector ignores short lists", "Short lists are always natural"]
    answer: 0
    explain: "With few numbers, luck swings the first-digit counts a lot. Longer lists make a stronger test."
  - q: "The detector says 'Nothing unusual'. What can you conclude?"
    options: ["The numbers are definitely real", "Not that they are real: someone who knows the trick can pass", "The detector is perfect", "The list is too long"]
    answer: 1
    explain: "A detector gives a hint, not proof. Passing does not make numbers real."
---

Detectors are everywhere: fake-data detectors, fake-image detectors, AI-writing detectors. Today we test one on ourselves. The question is not whether it works. It is how often it is wrong, and about whom.

All numbers in this case are made up or simulated. The Faker Detector is our own teaching tool, built on a real idea. It is not a forensic test.

## Your mission

1. Make up the populations of 30 imaginary towns. Whole numbers from 1 to 99999. Do not think too hard.
2. Run the detector and see what it says about you.
3. Try again, knowing how it works. Natural numbers come from growth: start small and keep multiplying by random amounts. Can you invent numbers that way and pass?
4. Run lists of 20, 30 and 50 numbers and note how often it catches you.
5. Write one honest sentence: what a detector can tell you, and what it can never tell you.

## The Faker Detector

<iframe src="/tools/faker-detector.html" title="Faker Detector" loading="lazy" style="width:100%;height:1250px;border:1px solid var(--line);border-radius:4px"></iframe>

Trouble loading it? <a href="/tools/faker-detector.html" target="_blank" rel="noopener">Open the Faker Detector on its own page.</a>

## How it works

Each bar is how many of your numbers start with that digit. The red string through the gold pins is the natural pattern. In many real lists of numbers that span several sizes, like town populations, about 30% start with 1, and fewer than 5% start with 9. People inventing numbers tend to spread their first digits too evenly.

The detector compares your list with 2,000 simulated natural lists of the same size and tells you how unusual yours is. It uses fresh random numbers each run, so its readout wobbles by a few points.

## The trade-off

Every detector has this trade-off: catch more fakes, accuse more honest lists. At the 95% bar the detector wrongly flags about 5% of natural lists, because we set it that way. In our own simulation of sloppy fakes (first digits spread evenly), it caught about:

| List size | Sloppy fakes flagged |
|---|---|
| 20 numbers | about 57% |
| 30 numbers | about 73% |
| 50 numbers | about 93% |
| 100 numbers | nearly all |

A short list is a weak test, and a longer list is a strong one. Read the live numbers from the page, and use these only as a rough guide.

<div class="twist">

**The twist: the same problem, bigger stakes.** When OpenAI launched its AI-writing classifier in January 2023, its own tests on a challenge set of English texts found it correctly identified 26% of AI-written text, while wrongly labelling 9% of human-written text as AI-written. OpenAI withdrew the tool on 20 July 2023, citing its low rate of accuracy. A Stanford study (Liang et al.) then found that AI-writing detectors did very well on essays by US eighth-graders but flagged more than half of English essays by non-native writers as AI-written. If English is not your first language, a careful, simple style can look too AI to a detector. A false alarm is not a small thing when someone is accused.

</div>

The sources say AI-writing detectors have been unreliable and biased in tests. They do not say that no detector ever works. The honest lesson is that a detector's verdict is a hint, never the same as the truth.

## Credit

All numbers on this page are made up or simulated. This site is independent and not affiliated with any company mentioned.
