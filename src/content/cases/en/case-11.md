---
number: 11
title: "Case 11: Training vs Testing"
hook: "A model with zero errors. Here is why that number is worthless."
rank: analyst
minutes: 40
tools: "Google Sheets for the demo, and your Case 9 Teachable Machine model for the live check"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Starter sheet (.xlsx)"
    file: "/downloads/red-strings-lab_case11_training-vs-testing.xlsx"
    note: "Tabs: Read Me, Train, Test, Results, Seen vs Unseen, Answer Key. All data is made up. Try the Answer Key yourself first."
resources:
  - label: "Teachable Machine"
    url: "https://teachablemachine.withgoogle.com/"
    note: "Free tool from Google. Terms checked on [date]."
decoder: [Training set, Test set, Overfitting, Generalize, Unseen data, Split]
challenge: "Test your Case 9 model on ten examples it was trained on and ten it was not. Log them, work out both accuracies, and write one honest sentence about which number you would trust. Send us your log. Objects only, no faces, no personal details."
parentNote: "The demo uses made-up data only, and the live check uses everyday objects only. Never train models on faces or personal photos."
quiz:
  - q: "A model scores 100% on the examples it learned from. What does that tell you?"
    options: ["It will be perfect on new data", "Almost nothing, because it may just have memorized them", "It is overfitted for sure", "The test set is too easy"]
    answer: 1
    explain: "A score on data the model has already seen only tells you how well it remembers."
  - q: "Why must the test data be kept away from the model?"
    options: ["To save space", "So the test score shows how the model behaves on new data", "Because tests are secret", "To make training faster"]
    answer: 1
    explain: "If you tune the model until the test score looks good, you have started training on the test."
  - q: "You get numbers from one split of 20 test students. What is the honest conclusion?"
    options: ["The result is exact", "It is better here, and a different split might move the numbers", "Splits never matter", "Ignore the test set"]
    answer: 1
    explain: "A single split is one roll of the dice. Check with a different split before you trust a small gap."
---

In Case 10 we added examples and retested on new ones. Today we show why that rule matters. The data is made up: 40 imaginary students, with hours studied and an exam score. We split them into 20 the models learn from, and 20 they never see.

All data in this case is made up. We picked a run where the gap is clear, though in most random splits we tried the Memorizer also did worse on unseen students, so this is the usual outcome and not a freak one.

## Your mission

1. Open your Case 9 Teachable Machine model.
2. Test it on ten examples it was trained on (seen) and ten it was not (unseen). Log each one in the Seen vs Unseen tab.
3. Work out both accuracies and the gap between them.
4. Write one honest sentence about which number you would trust, and why.
5. Objects only. No faces, no personal photos.

## Two models

Both models only learn from the 20 training students.

- **The Memorizer.** To predict a score, it finds the training student with the closest hours and copies their score. On training students it simply remembers the answer.
- **The Rule.** A straight line fitted to the training students only: about 4.5 extra points per extra hour, starting from 38 at zero hours.

## The results

Average error, in exam points (lower is better):

| Model | On training students | On test students |
|---|---|---|
| The Memorizer | 0 | 9.4 |
| The Rule | 6.3 | 6.1 |

The Memorizer looked perfect, with zero errors, because it copies the answers it was shown. On students it has never seen it is about 1.5 times worse than the Rule. And look at the Rule: 6.3 on training and 6.1 on test. About the same, so its score means what it says.

<div class="nums"><div><b>0</b>Memorizer, training error</div><div><b>9.4</b>Memorizer, test error</div><div><b>6.1</b>Rule, test error</div></div>

## Name the problem

This is called **overfitting**. A model learns the examples, noise included, instead of the pattern. A training score only tells you how well it remembers. A test score on unseen data tells you how well it will work. The test data must be kept away from the model: if you tune the model until the test score looks good, you have started training on the test.

<div class="twist">

**The twist.** Twenty test students is small. If we had split the students differently, the numbers would move. A single split is one roll of the dice. The honest answer is not "the Rule is better by exactly 3.3." It is "the Rule is better here, and I would want to check with a different split." The Rule is not "the good model" either. It is a simple model whose score you can trust.

</div>

## Your model, live

Back in Teachable Machine, test your Case 9 model on examples it was trained on and examples it was not. The question is never "what score did it get." It is "on what."

## Credit

Screen recording of Teachable Machine, a free tool from Google. This site is independent and not affiliated with Google.
