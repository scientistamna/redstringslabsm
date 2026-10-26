---
number: 4
title: "Case 04: Correlation Isn't Guilty"
hook: "Ice cream and sunburns rise together. So ban ice cream? Or is something else going on?"
rank: rookie
minutes: 30
tools: "Google Sheets, or LibreOffice Calc"
status: live
updated: "26 Oct 2026"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Starter sheet (.xlsx)"
    file: "/downloads/red-strings-lab_case04_starter-sheet.xlsx"
    note: "Tabs: Read Me, Town, Charts, Chance, Your Turn, Answer Key. Try the Answer Key yourself first."
  - label: "Town data (.csv)"
    file: "/downloads/case04_town.csv"
  - label: "Chance data (.csv)"
    file: "/downloads/case04_chance.csv"
resources: []
decoder: [Correlation, Third variable (confounder), Reverse causation, Chance, Data dredging]
challenge: "Take your own data, like your Case 1 survey, and find two columns that move together. Answer the three questions below, then write one honest sentence: what the data shows, and what it cannot prove. No names or personal details."
parentNote: "All data in this case is made up. The town is imaginary, and the chance numbers are random numbers made by a computer."
quiz:
  - q: "Ice cream sales and sunburns have a correlation of 0.82. What explains it best?"
    options: ["Ice cream causes sunburn", "Hot weather pushes both up", "Sunburn makes people buy ice cream", "It is always a coincidence"]
    answer: 1
    explain: "Temperature is a third variable. It pushes both ice cream sales and sunburns up."
  - q: "On the 10 hottest days, the ice cream and sunburn link is about 0.10. What does that tell you?"
    options: ["The link was real all along", "Once the weather is similar, the link nearly disappears", "The data is broken", "Sunburn is random"]
    answer: 1
    explain: "Comparing days with similar weather removes the third variable's effect."
  - q: "Eight columns of random numbers make 28 pairs, and one pair shows a correlation of 0.82. Why?"
    options: ["Those two things are connected", "If you test enough pairs, something will look real by chance", "Random numbers always correlate", "The computer made a mistake"]
    answer: 1
    explain: "Testing many pairs on few rows (here 10) produces strong-looking links from pure noise. This is data dredging."
---

In this made-up seaside town, on days when more ice cream sells, more people get sunburned. The link is strong. So: ban ice cream? Or is something else going on? Let's investigate.

All data here is made up. The town is imaginary, and thirty days of data were invented for teaching.

## What correlation means

Correlation is a number from -1 to +1. Near +1, two things rise together. Near -1, one rises while the other falls. Near 0, there is no pattern. It tells you they move together. It does not tell you why.

## Your mission

1. Take the data you collected in Case 1, or any data you may use, and find two columns that move together.
2. Ask three questions: could a third thing cause both? Could it be reversed? Could it be chance?
3. Write the most honest sentence you can: what the data shows, and what it cannot prove.
4. No names or personal details in anything you share.

## The evidence

Thirty days, sorted from the coolest to the hottest. Ice cream sales against sunburn cases: the correlation is 0.82. Strong. If you saw only this, ice cream would look guilty.

## The hidden suspect

A third thing is missing: temperature. Hot days sell more ice cream, and hot days also burn more people. Temperature pushes both up. Ice cream and sunburns never touched each other. Data people call this a third variable, or a confounder.

<div class="nums"><div><b>0.82</b>ice cream vs sunburn</div><div><b>0.95</b>temperature vs ice cream</div><div><b>0.85</b>temperature vs sunburn</div></div>

## The test

Compare days with similar weather. On the ten coolest days the correlation is 0.11. On the ten hottest days it is 0.10. Almost nothing. Once the weather is the same, the link disappears. A statistical calculation that removes temperature's effect gives about 0.07. The Answer Key in the starter sheet shows it.

## Suspect two: pure chance

The Chance tab has eight columns of random numbers made by a computer. Nothing in them is connected to anything. Eight columns make 28 pairs. The strongest pair, socks lost and cat videos watched, has a correlation of 0.82. As strong as our ice cream link. Pure noise.

<div class="twist">

**The twist.** If you test enough pairs, something will look real. That is called data dredging, and it is how false findings get published. Ask how many things you tested and how many rows you have. Ten rows is very little.

</div>

## Three questions for every link

1. Could a third thing cause both?
2. Could it be reversed? Does A cause B, or does B cause A?
3. Could it be chance?

Then say what the data shows and what it cannot prove. Remember Case 1: screen time and sleep moved together, and we called that a lead, not proof. Same rule.
