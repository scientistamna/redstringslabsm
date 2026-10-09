---
number: 5
title: "Case 05: The Biased Sample"
hook: "My friends say 16.6 hours. The truth is 11.0. Why asking only your friends gives the wrong answer."
rank: rookie
minutes: 30
tools: "Google Sheets, or LibreOffice Calc"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads: []   # add the Case 5 starter sheet and CSV here when the team sends them
resources: []
decoder: [Sample, Population, Bias, Random sample, Sampling error]
challenge: "Take a survey you have run, like your Case 1 survey. Write down who you asked, who you didn't, and how you chose them. Then write one honest sentence about who your sample might be missing. No names, no personal details."
parentNote: "All data in this case is made up. Town High is an imaginary school with 1,000 students."
quiz:
  - q: "Why was the friends sample wrong?"
    options: ["Bad maths", "It over-represented the gaming club", "50 is too few", "Averages never work"]
    answer: 1
    explain: "About 21% of the school is in the gaming club, but about 62% of the friends are. The sample was skewed by who was asked."
  - q: "Asking all 213 friends instead of 50 gives the same 16.6. What does that show?"
    options: ["More data fixes bias", "More data from the wrong place is just a more confident wrong answer", "The school is wrong", "Friends are liars"]
    answer: 1
    explain: "Bias does not average out, however many people you ask."
  - q: "Which kind of error gets smaller as you take more random samples?"
    options: ["Bias", "Luck (sampling error)", "Both", "Neither"]
    answer: 1
    explain: "Random wobble averages out. A skewed sample stays skewed."
---

Fifty of my friends play 16.6 hours of games a week on average. So that is what the whole school does. Right? Wrong, and we can prove it, because this school is made up, so we can see everyone.

All data here is made up. Town High is imaginary and has 1,000 students. The question: on average, how many hours a week do they play games?

## Your mission

1. Take a survey you have run, like your Case 1 survey.
2. Write down who you asked, who you didn't, and how you chose them.
3. Write one honest sentence about who your sample might be missing.
4. No names or personal details in anything you share.

## The evidence

- **The friends sample:** 50 of 213 friends, average 16.6 hours.
- **The real school average:** 11.0 hours, more than five hours lower.
- **The reason:** about 21% of the school is in the gaming club. Among the friends it is about 62%. The sample was wrong because of who was asked, not because of bad maths.

<div class="nums"><div><b>16.6</b>friends sample</div><div><b>11.0</b>whole school</div></div>

## Fix one: choose at random

Give every student a random number with `=RAND()`, sort by it, and take the first 50. Nobody is picked because you like them. The first random sample in the video gave 9.6, about 1.4 hours off. Random samples wobble. Yours will give a different number, because RAND changes each time the sheet recalculates, and that is normal.

Ten random samples ranged from 9.0 to 13.2, scattered around the true 11.0. Ten samples of friends ranged from 14.3 to 17.8, and every single one was too high.

## Fix two does not work: more data

Asking all 213 friends still gives 16.6. More data from the wrong place is just a more confident wrong answer.

<div class="twist">

**The twist.** There are two kinds of error. Luck: small random samples wobble, and it averages out. Bias: a sample skewed in one direction never averages out. Case 1's ten friends had the same problem. That was a lead, not proof.

</div>
