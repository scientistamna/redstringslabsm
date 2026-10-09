---
number: 7
title: "Case 07: Fix the Messy Dataset"
hook: "Two bars, both labelled Bus. The sheet thinks they are different things. Can you trust this file?"
rank: rookie
minutes: 35
tools: "Google Sheets, or LibreOffice Calc"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Starter sheet (.xlsx)"
    file: "/downloads/red-strings-lab_case07_starter-sheet.xlsx"
    note: "Tabs: Read Me, Messy, Clean, Cleaning Log, Compare, Your Turn, Answer Key. The Clean tab spoils the fun, so work on the Messy tab first."
  - label: "Messy data (.csv)"
    file: "/downloads/case07_messy.csv"
    note: "108 rows. This is what you clean."
resources: []
decoder: [Duplicate, Unit, Typo, Trailing space, Cleaning log]
challenge: "Download the messy file, clean it without peeking at the clean one, and log every change. Then compare with ours. Where we differ, who is right? Send us your log. No names, no personal details."
parentNote: "All data in this case is made up. Town High is imaginary. The messy file was made by generating clean data and then corrupting it in known ways."
quiz:
  - q: "AVERAGE gives an answer for a height column that contains the text '165 cm'. What happened to that cell?"
    options: ["It was counted as 165", "It was skipped without a warning", "It caused an error", "It was counted as zero"]
    answer: 1
    explain: "AVERAGE ignores text silently. Ten heights were stored as text in the messy file."
  - q: "You find a height of 1650. What should you do?"
    options: ["Divide by 10 and move on", "Leave it blank and log why", "Delete the whole row quietly", "Use the average instead"]
    answer: 1
    explain: "It could be 165 or 1.65 or something else. Guessing is invention. Blank it and say so in your log."
  - q: "Why keep a cleaning log?"
    options: ["It makes the sheet bigger", "Every fix is a decision, and others need to check yours", "Sheets requires it", "Cleaning is neutral, so no reason"]
    answer: 1
    explain: "A cleaned dataset with no log is a dataset you cannot trust."
---

Real data is messy: typos, doubles, mixed units. This messy file is a made-up morning-routine survey from Town High, 108 rows. The plan: run the same formulas on the messy file and on a cleaned one, and see what changes.

All data here is made up and deliberately messy. We generated clean data first, then corrupted it in known ways, so every fix can be checked.

## Your mission

1. Download the messy file and keep the original untouched. Work on a copy.
2. Clean it without looking at the clean version.
3. Log every change: what was wrong, how many rows, what you did, and why.
4. Compare with ours. Where we differ, who is right?
5. No names or personal details in anything you share.

## Sniff test: what is wrong?

- **Height:** some in centimetres, some in metres, some with the text "cm" typed in.
- **Breakfast:** Yes, Y, Yess, N.
- **Travel:** Bus, Buss, School bus, Walk, Walking, Cycle. Eleven labels for four ideas.
- **Duplicates:** two rows with the same ID, because someone submitted twice.

## What the mess does

The messy file has 108 rows. The clean file has 100 students. Eight students were counted twice.

| Same formula | Messy file | Clean file |
|---|---|---|
| Average height (cm) | 173.5 | 167.9 |
| Heights stored as text | 10 | 0 |
| Students saying exactly "Yes" to breakfast | 36 (33%) | 68 (68%) |
| Average sleep (hours) | 7.16 | 7.09 |
| Different labels for travel | 11 | 4 |

Metres and a couple of typos wreck the average height, and AVERAGE skipped ten text heights without a single warning. Breakfast looks like 33% against 68% from the same survey. Sleep barely changes. Mess does not always hurt, but you cannot know until you check.

## How to clean it

- **Rule one:** never touch the original. Copy it.
- **Rule two:** log every change.
- **Duplicates:** remove them.
- **Heights in metres:** multiply by 100.
- **Text like "165 cm":** strip the letters and keep the number.
- **Labels:** one word per idea.

<div class="twist">

**The hard part.** Is 1650 actually 165 or 1.65? Neither you nor the sheet can know, so leave it blank and write it in your log. The same goes for a sleep entry of 25 hours, since nobody sleeps 25 hours in a day. If you cannot tell what a value should be, say so. Do not guess silently.

**The twist.** Cleaning is not neutral. Every fix is a decision. Turning metres into centimetres was safe. Blanking the typos was not. Someone else might choose differently, which is why you keep the log.

</div>

<details>
<summary>Check your work (open this after you have cleaned your own copy)</summary>

<p>Our cleaned version, for comparison: <a href="/downloads/case07_clean.csv" download>Clean data (.csv)</a>. The Cleaning Log tab in the starter sheet lists every fix we made and why.</p>

</details>
