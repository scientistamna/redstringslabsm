---
number: 10
title: "Case 10: Break the AI"
hook: "A model that passes your test is not a good model. It is a model you have not broken yet."
rank: analyst
minutes: 45
tools: "Teachable Machine (the same model from Case 9)"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Break log (.xlsx)"
    file: "/downloads/red-strings-lab_case10_break-log.xlsx"
    note: "Tabs: Read Me, Break Log, Summary, plus a made-up Example Break Log and Example Summary. The examples are not real model results."
resources:
  - label: "Teachable Machine"
    url: "https://teachablemachine.withgoogle.com/"
    note: "Free tool from Google. Terms checked on [date]."
decoder: [Closed set, Forced choice, Overfitting, Lookalike, Retest, Adversarial example]
challenge: "Break your own model. Make at least 15 attempts using at least five different tricks. Pick the failure that surprised you most, work out why, fix it, and retest on new examples. Send us your log. Objects only, no faces, no personal details."
parentNote: "This exercise is limited to the learner's own toy model and everyday objects. Nothing here should be used against real systems or people, and models should never be trained on faces or personal photos."
quiz:
  - q: "Your model knows three classes. You show it a stapler it has never seen. What will it do?"
    options: ["Say it does not know", "Pick one of its three classes anyway", "Refuse to answer", "Create a new class"]
    answer: 1
    explain: "A model with a fixed set of classes must choose one, every time, even when the right answer is none of them."
  - q: "After adding new examples and retraining, how should you check the fix worked?"
    options: ["Test on the same photos you just added", "Test on new examples it has not seen", "Trust that it worked", "Retrain until it hits 100%"]
    answer: 1
    explain: "Testing on the photos you just added only checks that the model remembers them."
  - q: "The model was fooled and its confidence was high. What does that mean?"
    options: ["It is confidently wrong, so confidence alone is not a safe guide", "The model is probably right", "The test was unfair", "Confidence only goes up when it is right"]
    answer: 0
    explain: "High confidence on a wrong answer means you cannot trust the confidence number by itself."
---

Last case we taught a machine to recognize a mug. Today we try to break it. The rules: you only break your own model, with objects. No faces, no people. This is not about attacking real systems. It is about learning why models fail, so you can build ones that fail less.

## Your mission

1. Open the model you built in Case 9 and keep faces and other people out of frame.
2. Try six kinds of tricks and log every attempt: lighting, angle, distance, background, partly hidden, and a lookalike or an object the model has never seen.
3. Before each trick, write your prediction. Then run it and fill in the row: the true class, the model's guess and its confidence.
4. Make at least 15 attempts using at least five different tricks.
5. Pick the failure that surprised you most and work out why it happened.
6. Fix it by adding examples that cover the failure, retrain, and retest on new examples.

## The six tricks

- **Lighting:** lamp off, then on.
- **Angle:** turn the object.
- **Distance:** move it closer, then further.
- **Background:** a different desk, a blanket.
- **Partly hidden:** cover half of it.
- **Lookalike or new object:** a glass instead of a mug, or an object the model has never seen. The right answer for an object it was never taught is Nothing.

## Why it fails

The model has a few classes and has to pick one, every time, even when the right answer is none of them. It cannot say "I do not know" unless you teach it a class for that. Then look at the confidence numbers. How confident was it when it was fooled, and how confident when it was not? If the wrong answers sound confident, you cannot trust confidence by itself.

## Diagnose and fix

For each failure, ask why. Maybe the lamp was always on in your examples, or every photo was taken on one desk. Add examples that cover the failure, such as lamp off, other backgrounds, and the glass labelled Nothing. Retrain. Then retest on new examples, not the ones you just added. Otherwise you are only checking that the model remembers its homework.

<div class="twist">

**The twist: a different kind of fooling.** Light, angle and background are ordinary tricks. There is a stranger kind. Around 2014, researchers showed that tiny changes to an image, worked out with maths and invisible to people, can make a neural network misclassify it with high confidence. The famous example turned a picture of a panda into a gibbon. You cannot do that in this tool, and the people who study it do so to make systems safer. The lesson for both kinds: a model that scores well on easy tests can still fail where you did not look.

</div>

## Credit

Screen recording of Teachable Machine, a free tool from Google. This site is independent and not affiliated with Google.
