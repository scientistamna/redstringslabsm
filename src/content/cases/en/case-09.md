---
number: 9
title: "Case 09: Teach a Machine"
hook: "This computer has never seen a mug. Teach it in five minutes, then find out why that does not mean it understands."
rank: analyst
minutes: 40
tools: "Teachable Machine (free, in the browser)"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Training log (.xlsx)"
    file: "/downloads/red-strings-lab_case09_training-log.xlsx"
    note: "Tabs: Read Me, Training Log, Test Log, Summary, plus a made-up Example. The example is not a real model."
resources:
  - label: "Teachable Machine"
    url: "https://teachablemachine.withgoogle.com/"
    note: "Free tool from Google. Terms checked on [date]."
decoder: [Classifier, Class, Training, Supervised learning, Confidence, Test]
challenge: "Train your own three classes using objects. Run at least 20 tests, log every one, and include some you expect to fail. Send us your log. No faces, no personal details."
parentNote: "Objects only: never train a model on faces or personal photos. [Verify before publishing: the tool's privacy page says examples stay on the device unless a project is saved to Google Drive.] Age rules for Google accounts apply, and a Google account is only needed to save."
quiz:
  - q: "Why add a 'Nothing' class (an empty desk)?"
    options: ["It makes training faster", "A model that only knows two things will name one of them even when neither is there", "It is required by the tool", "It improves the camera"]
    answer: 1
    explain: "Without a Nothing class, the model must pick a mug or a notebook even for an empty desk."
  - q: "If every mug photo had the lamp on and every notebook photo had it off, what might the model learn?"
    options: ["Lamp, not mug", "What a mug is", "Nothing at all", "Both objects perfectly"]
    answer: 0
    explain: "The model finds patterns in pixels, including the light, the desk and the angle."
  - q: "The model was wrong, but it sounded very sure. What does that tell you?"
    options: ["Confidence always means it is right", "You cannot fully trust the confidence number either", "The model is broken forever", "Confidence is not shown"]
    answer: 1
    explain: "If the wrong answers sound confident, confidence alone is not a safe guide."
---

Welcome to the Analyst rank. In Rookie you learned to doubt data. Now you build the thing that learns from it.

The idea: you show a program examples with labels, and it finds patterns. This is called supervised learning. The tool is free and runs in your browser. We use objects only, and never faces.

## Before you start

- Check the tool's Terms and Privacy pages yourself, and note the date.
- Arrange your frame so no face, no other person, and no personal item is visible. Use your desk, a mug, a notebook and a plain wall.

## Your mission

1. Create three classes: Mug, Notebook, and Nothing (an empty desk).
2. Capture examples for each. Vary the angle, the distance and the light. Log how many you captured and what you varied.
3. Train the model. The tool does the maths and you write no code.
4. Test it with the same mug, a different mug, and harder cases like a new room, the lamp off, or a hand in the frame. Log every test.
5. Run at least 20 tests, including some you expect to fail.
6. Check the Summary tab. How often was it right, and how confident was it when it was wrong?

## The twist: what did it learn?

The model does not know what a mug is. It learned patterns in pixels from your examples, and everything in those examples counts: the desk, the light, the angle. It cannot tell the difference between the thing you meant and the thing that happened to be in the picture.

<div class="twist">

**Be honest about the score.** Report how many tests you ran and how many were right. Then look at confidence. If the wrong answers sound confident, you cannot trust the confidence number either. If your model fails a test, that is not a bug. That is the lesson.

</div>

## Credit

Screen recording of Teachable Machine, a free tool from Google. This site is independent and not affiliated with Google.
