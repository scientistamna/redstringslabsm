---
number: 6
title: "Case 06: The Missing Data Mystery"
hook: "Almost half the answers are blank. Where did those people go?"
rank: rookie
minutes: 30
tools: "Google Sheets, or LibreOffice Calc"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads: []   # add the Case 6 starter sheet and CSV here when the team sends them
resources: []
decoder: [Missing data, Response rate, Non-response bias, Imputation, Weighting]
challenge: "Open a survey you have run, like your Case 1 survey. Count the blanks and work out the response rate. Write one honest sentence: who might the blanks be hiding, and which way might that push your answer? No names, no personal details."
parentNote: "All data in this case is made up. Town High is an imaginary school."
quiz:
  - q: "300 students were invited and 153 answered. What is the response rate?"
    options: ["49%", "51%", "153%", "300%"]
    answer: 1
    explain: "153 divided by 300 is 51%. The other 49% are missing."
  - q: "What does the AVERAGE formula do with blank cells?"
    options: ["Warns you", "Counts them as zero", "Quietly skips them", "Stops working"]
    answer: 2
    explain: "AVERAGE skips blanks without telling you how many it skipped. Always count them."
  - q: "Which question matters most about blanks?"
    options: ["How to fill them", "Why they are blank", "How many columns there are", "What colour they are"]
    answer: 1
    explain: "Random skipping costs precision. Skipping for a reason tied to the answer costs the truth."
---

300 students got a homework survey. The average answer is 8 hours a week. Sounds reasonable. But almost half of the answers are empty. Those blanks are people. Where did they go?

All data here is made up. Town High is imaginary. The question: how many hours of homework do students there do each week?

## Your mission

1. Open a survey you have run, like your Case 1 survey.
2. Count the blanks and work out the response rate.
3. Write one honest sentence: who might the blanks be hiding, and which way might that push your answer?
4. No names or personal details in anything you share.

## Count the missing

300 students were invited and 153 answered. That is a 51% response rate, so 49% of the school is missing. Here is the trap: AVERAGE gives you 8.0 without a single warning, because it quietly skips blank cells.

## The clue

We cannot see what the skippers would have said, but we know their year group. Year 9: 75% answered. Year 12: 34%. Among those who did answer, Year 12 reports about 13 hours a week and Year 9 about 5. The students most likely to skip are the ones with the most homework, which pushes the average down.

## Three ways to handle blanks

1. **Ignore the blanks:** average 8.0.
2. **Fill every blank with the average:** still 8.0, because you copied it. The spread shrinks from 4.1 to 2.9. You invented 147 identical students.
3. **Compare like with like:** work out the average inside each year group, then weight by how many students are in each year. That gives 9.0, closer.

<div class="nums"><div><b>8.0</b>ignore blanks</div><div><b>9.0</b>weighted</div><div><b>9.8</b>the truth</div></div>

## The reveal

Because the data is made up, we can open the truth. The real average is 9.8 hours. Ignoring blanks was off by 1.8. Weighting got within 0.8. Better, not perfect. You cannot fully fix a missing answer. All you can do is know which way it pushes.

<div class="twist">

**The twist.** The question is not how to fill the blanks. It is why they are blank. If people skip at random, you lose some precision. If they skip for a reason connected to the answer, you lose the truth. A response rate on its own never tells you which one you have.

</div>
