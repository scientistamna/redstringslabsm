---
number: 16
title: "Case 16: Build and Break Your Model"
hook: "Seven cases ago you had not trained a model. Today you build one, then try to wreck it."
rank: analyst
minutes: 45
tools: "A spreadsheet (Google Sheets or similar), or Teachable Machine for a picture classifier. The Case 16 case-file kit."
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Analyst case-file kit (.xlsx)"
    file: "/downloads/red-strings-lab_case16_analyst-case-file-kit.xlsx"
    note: "Tabs: Read Me, Case File, Checklist, Example. The Example tab is a finished case file built from made-up Case 15 data. Fill in your own before you read it."
resources: []
decoder: [Model, Training data, Unseen data, Overfitting, Outlier, Proxy, Audit]
challenge: "Build one small model: a picture classifier with objects only, or a line in a spreadsheet. Test it on examples it never saw, break it at least five different ways, fix one thing and re-test on new examples, then fill in the case file and the ten-check list. End with one honest sentence: it can..., but it cannot.... No faces, no personal details."
parentNote: "All example data in this case is made up. The case file is a self-check and nothing is sent anywhere unless a young person chooses to submit it through the site, with the consent box ticked. The rules are objects and made-up or properly sourced data only: no faces, no other people, no personal photos or details. If a young person uses a tool such as Teachable Machine, please check its terms and any account age rules first."
quiz:
  - q: "Your model scores 8.8 on the examples it learned from and 7.2 on four it never saw. What is the honest reading?"
    options: ["The model is perfect", "The gap is small, so it looks trustworthy, but four examples is a tiny test", "The unseen score is wrong because it is lower", "Unseen examples do not matter"]
    answer: 1
    explain: "A small gap is a good sign, but a test on only four examples is one roll of the dice. Hold the result loosely."
  - q: "You add one odd student to the data and the whole line moves. What did you just learn?"
    options: ["Models ignore single data points", "One strange data point can move a simple model a lot, so look into it", "You should delete the odd student quietly", "The model has become smarter"]
    answer: 1
    explain: "Do not delete it silently. Check whether it is a typo or a real case, then say what you did and why, as in Case 1."
  - q: "You fixed a failure and your score went up. When does the fix count?"
    options: ["Straight away", "Only when you re-test on new examples, not the ones you used to find the problem", "When the line looks nicer", "When a friend agrees"]
    answer: 1
    explain: "A fix tested on the same examples that exposed the problem proves very little. Re-test on new ones."
---

This is the Analyst finale. Over this rank you taught a machine, broke it, learned why testing on training data lies, caught a bias, doubted a detector, interrogated a chatbot and made a prediction. Today it all goes into one case file.

The loop is: build, test on unseen examples, break it, fix it, check who is missing, and say what it can and cannot do.

All example data here is made up: the same imaginary students from Case 15, with practice hours per week and a game score (maximum 120).

## Your mission

1. Choose one model to build: a picture classifier in Teachable Machine (objects only, and check its terms and age rules first, as in Case 9), or a line predictor in a spreadsheet using SLOPE and INTERCEPT, as in Case 15. The spreadsheet needs no sign-in.
2. Download the kit and open the **Case File** tab. Yellow cells are yours.
3. Test your model on examples it never saw. Write down both scores, the one it learned from and the one it never saw, and what the gap tells you.
4. Try to break it in at least five different ways. Log every attempt, including the ones that failed.
5. Pick one failure, explain why it happened, try a fix, and re-test on **new** examples.
6. Work through the **Checklist** tab. Ten honest yeses turns the sheet to "ANALYST: CASE CLOSED."
7. Finish with one sentence: it can..., but it cannot....

Take a look at the **Example** tab only after you have started your own. It shows the standard, not an answer to copy.

## Build and test: the worked example

The example model is a straight line learned from 24 made-up students. Four more are hidden so we can test on students it has never seen.

| | Typical miss |
|---|---|
| The 24 students it learned from | 8.8 |
| The 4 students it never saw | 7.2 |

A small gap, so the score looks trustworthy. But that is only four students, so hold it loosely.

<div class="nums"><div><b>8.8</b>typical miss, learned from</div><div><b>7.2</b>typical miss, never seen</div><div><b>5</b>ways to break it, at least</div></div>

## Break it

Here are three breaks from the example.

1. **Ask outside the data.** At 20 hours the line predicts 156. The game's maximum is 120. At 0 hours it says 11.5, but nobody in the data practises zero hours.
2. **Add one odd student.** Add someone who practised 10 hours and scored 5. The slope drops from 7.2 to 6.5. The prediction at 8 hours moves from 69.4 to 65.9. On the four hidden students, the typical miss gets worse: 7.2 up to 9.9.
3. **Ask about cause.** The line says practice and score move together. It cannot tell you that practice causes the score.

<div class="twist">

**The twist: one strange student moved the whole line.** A single made-up student who practised a lot and scored 5 changed the slope, changed the predictions and made the hidden test worse. Simple models can be fragile. That is why you do not delete a strange data point silently, and why you do not trust a model you have not tried to break. Look into it: is it a typo, or a real student? Then say what you did and why.

</div>

## Fix it, and say what you did

For the range: only predict inside about 1 to 12 hours, and never above 120. For the odd student: investigate rather than delete. Every fix gets a re-test on new examples, not the ones you just used.

## Who is missing?

This is the audit from Case 12. Who or what is not in your data? In the example: students who practise outside 1 to 12 hours, and students who do not play the game at all. Are any columns proxies for a group? Here there is only one input, so no. With real data you would also compare outcomes across groups before trusting a model.

The same goes for claims: check your sources outside the tool, because a model cannot verify itself. Treat any detector's output as a hint, never as proof.

## The ten checks

The Checklist tab asks you ten questions. In short:

1. I tested on examples it never saw.
2. I reported the gap between seen and unseen, not just one score.
3. I tried at least five different ways to break it and logged every attempt.
4. I explained why one failure happened and re-tested a fix on new examples.
5. I checked who or what is missing, and which columns could be proxies.
6. I compared outcomes across groups, or explained why that does not apply.
7. I treated any detector's output as a hint.
8. I checked every source or claim outside the tool that gave it.
9. I said where my predictions are not trustworthy.
10. I wrote one honest sentence: it can..., but it cannot....

This is a self-check. Nobody marks it, so the honest answer is the useful one.

## Send it in

<!-- TEAM: the submission form must be live, with the parent-consent checkbox and the "no faces, no personal details" rule, and someone must review submissions before anything is shown publicly. Update the link below. -->

When your case file is ready, you can send it to us through the [submission form](/submit). Tick the consent box, and keep it free of faces, names and personal details.

## Credit

All example data on this page is made up. This site is independent and not affiliated with Google or any tool or company mentioned.
