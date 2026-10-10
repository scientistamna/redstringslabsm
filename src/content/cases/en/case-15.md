---
number: 15
title: "Case 15: Predict It, No Code"
hook: "I will draw a line by hand. Then a computer draws one. One of us is about to be embarrassed."
rank: analyst
minutes: 40
tools: "The Beat the Machine page on this site, and Google Sheets"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Starter sheet (.xlsx)"
    file: "/downloads/red-strings-lab_case15_predict-it.xlsx"
    note: "Tabs: Read Me, Data, Fit, Predict, Chart, Answer Key. All data is made up. Try the Answer Key yourself first."
resources: []
decoder: [Prediction, Line of best fit, Typical miss, Extrapolation, Hidden test, Cap]
challenge: "Play Beat the Machine and get your typical miss as low as you can, then check the hidden students. In the sheet, try 0, 12 and 20 hours and decide which predictions you would trust. Bonus: replace the data with your own, for example from Case 1 or Case 8. Write one honest sentence: what the line can predict, and what it cannot. No personal details."
parentNote: "All data in this case is made up. No personal data is collected, and the Beat the Machine page runs in the browser."
quiz:
  - q: "On the 24 visible students, why can no other straight line beat the machine's line?"
    options: ["It cheats", "It is the line with the smallest possible typical miss on those students", "Because computers are always right", "It uses more data"]
    answer: 1
    explain: "The machine's line is built to make the misses as small as possible on the data it learns from. The real test is on students it has not seen."
  - q: "The line predicts 156 points for 20 hours of practice, but the game's maximum is 120. What went wrong?"
    options: ["Nothing", "It is far outside the data, and the line does not know about the cap", "The student cheated", "The slider is broken"]
    answer: 1
    explain: "Outside the range of the data, a prediction is a guess dressed up as a number. The line is arithmetic, not understanding."
  - q: "You beat the machine on the 4 hidden students. What is the honest conclusion?"
    options: ["You are better than any machine", "It may be luck, because four students is a very small test", "The machine is broken", "Hidden tests are unfair"]
    answer: 1
    explain: "A small test is one roll of the dice. Check with more data before you celebrate."
---

In Case 9 a model chose a label. Today a model picks a number: given the hours someone practised, what score will they get? You draw a line by hand. Then a computer draws one. We find out who does better, and where each of you goes wrong.

All data here is made up: 28 imaginary students, with practice hours per week and a game score (maximum 120). The machine learns from 24 of them. Four are hidden, so we can check how it does on students it has never seen.

## Your mission

1. Play the game below. Drag the two gold pins to draw the line you think predicts the score best, and get your typical miss as low as you can.
2. Reveal the machine's line. Compare your typical miss with the machine's.
3. Test on the 4 hidden students. Which line did better there?
4. Move the slider to 0, 12 and 20 hours. Which predictions would you trust?
5. In the starter sheet, repeat this with plain formulas, then try your own data. Ask the three questions from Case 4 before you trust any prediction.

## Beat the Machine

<iframe src="/tools/beat-the-machine.html" title="Beat the Machine" loading="lazy" style="width:100%;height:1150px;border:1px solid var(--line);border-radius:4px"></iframe>

Trouble loading it? <a href="/tools/beat-the-machine.html" target="_blank" rel="noopener">Open Beat the Machine on its own page.</a>

## What the machine's line says

The machine's line is score equals 11.5 plus 7.2 times hours: about seven extra points per extra hour of practice, in this made-up data.

| | Typical miss, 24 visible students | Typical miss, 4 hidden students |
|---|---|---|
| The starting line (default pins) | 15.3 | 14.7 |
| The machine's line | 8.8 | 7.2 |

On the 24 students it learned from, the machine cannot lose. Its line is the one with the smallest possible typical miss. The real test is the hidden four. Here the machine did slightly better on them than on the 24 it learned from, which can happen with so few students. It does not prove the machine is secretly better. If you beat it on the hidden four, that may be luck. Four is a tiny test, as in Case 11.

<div class="nums"><div><b>8.8</b>machine's miss, visible</div><div><b>7.2</b>machine's miss, hidden</div><div><b>156</b>its prediction at 20 hours</div></div>

<div class="twist">

**The twist: predictions outside the data.** At 8 hours the line predicts about 69, inside the data and fine. At 15 hours it predicts 120, the highest score the game allows. At 20 hours it predicts 156, which is impossible. The line does not know the game has a maximum, and it does not know what practice is. It is arithmetic, not understanding. At zero hours it says 11.5, but nobody in the data practises zero hours. Outside the range of the data, a prediction is a guess dressed up as a number.

</div>

## Three questions before you trust a prediction

1. Could a third thing explain it? Maybe students who practise more also have better equipment.
2. Could it be reversed? Maybe students who score well enjoy the game and practise more.
3. Does your data even cover the case you are asking about?

A line that predicts well does not tell you that practice causes the score.

## Credit

All data on this page is made up. This site is independent and not affiliated with any tool or company mentioned.
