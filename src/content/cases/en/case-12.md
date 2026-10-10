---
number: 12
title: "Case 12: The Biased Hiring Bot"
hook: "Same skills, different outcomes. What happens when a computer learns from those decisions?"
rank: analyst
minutes: 40
tools: "Google Sheets, or LibreOffice Calc"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Starter sheet (.xlsx)"
    file: "/downloads/red-strings-lab_case12_hiring-bot.xlsx"
    note: "Tabs: Read Me, History, Applicants, Results, Your Turn, Answer Key. All data is made up. Try the Answer Key yourself first."
resources:
  - label: "Reuters, 10 October 2018: Amazon scraps secret AI recruiting tool that showed bias against women"
    url: "https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G"
    note: "Check the link still works before publishing."
decoder: [Bias, Proxy, Training data, Selection rate, Fairness, Audit]
challenge: "Pick any system that makes decisions, like a quiz app, a school sorting tool or a recommendation feed. Fill in the bias audit on the Your Turn tab: what it learns from, who is missing, which columns could be proxies, and the outcome for each group. Use made-up or general examples only, and never real people's data."
parentNote: "All data in this case is made up. The cafe, the applicants and Areas A and B are imaginary, and the areas do not stand for any real place or group. The exercise must use made-up or general examples only, never real people's data."
quiz:
  - q: "Area A and Area B applicants have almost the same average skill, but very different hire rates in the past. What does this show?"
    options: ["Area A is simply better qualified", "The past decisions were biased", "The data is random", "Skill does not matter"]
    answer: 1
    explain: "Average skill is about 60 in both areas, so skill does not explain the gap."
  - q: "Bot 2 is not shown the area, but it is shown commute time. Why does the bias partly come back?"
    options: ["Commute time is a proxy: it carries information about the area", "Bots always find hidden columns by magic", "Commute time is random", "Bot 2 secretly looks up the area"]
    answer: 0
    explain: "A proxy is a column linked to the sensitive one. Removing a column does not remove the bias if other columns carry it."
  - q: "Bot 3 sees skill only and treats the two areas about the same. Why is that still not a full fix?"
    options: ["It is a full fix", "It still learned from biased past decisions", "It is too slow", "It uses too much data"]
    answer: 1
    explain: "How skill was turned into hired in the past was shaped by bias, and a bot scored against those old decisions can look perfect while copying them."
---

Two applicants have the same skills. One gets the job, one does not. Now imagine a computer learns from thousands of decisions like that. What does it learn?

Everything here is made up: an imaginary cafe chain, imaginary applicants, and two imaginary areas, A and B. In the past, managers made 400 hiring decisions. We build three bots that learn from those decisions, and find out whether any of them is fair.

## Your mission

1. Find the numbers that show the skills of Area A and Area B applicants are about the same.
2. Find which bot treats the two areas most differently, and explain why Bot 2 still does.
3. Fill in the bias audit on the Your Turn tab for any system you can think of.
4. Never use real people's data. Made-up or general examples only.

## Was the past fair?

Hire rates in the 400 past decisions:

| | Area A | Area B |
|---|---|---|
| Hired | 53% | 22% |
| Average skill score | 60.3 | 59.7 |
| Hired at the middle skill level | 55% | 9% |

The skills are the same, so skill does not explain the gap. The decisions were biased.

## Three bots, one lesson

Each bot looks up what happened to similar past applicants, and recommends someone when most of them were hired. Results on 100 new applicants:

| | Area A recommended | Area B recommended |
|---|---|---|
| Bot 1 (sees skill and area) | 83% | 32% |
| Bot 2 (no area, sees commute time) | 83% | 43% |
| Bot 3 (skill only) | 30% | 32% |

- **Bot 1 copies the bias.** It did not invent it. It learned it.
- **Bot 2 hides the column, and the bias partly comes back.** In this made-up town Area A averages about 15 minutes of commute and Area B about 32, so commute time leaks the area. A column like that is called a proxy.
- **Bot 3 treats the areas about the same, but it is still not a fix.** It learned from biased decisions, so who it recommends depends on how skill was turned into hired in the past.

<div class="nums"><div><b>53% / 22%</b>past hire rates</div><div><b>83% / 32%</b>Bot 1</div><div><b>83% / 43%</b>Bot 2</div><div><b>30% / 32%</b>Bot 3</div></div>

A note on honesty: in the made-up new group, Area B applicants score slightly higher on average (64.3 against 62.2), yet Bot 1 recommends far fewer of them. We picked a run where the pattern is clear. The proxy leak in Bot 2 is partial, and in other runs it would be bigger or smaller.

<div class="twist">

**The trap from Case 11.** If you score these bots against the old decisions, the bot that copies the bias best scores best. A perfect score on biased answers is still biased.

</div>

## This is not only a made-up cafe

According to Reuters in 2018, Amazon's engineers built an experimental recruiting tool that learned from resumes sent over about ten years. Reuters reported, citing people familiar with the matter, that it marked down resumes containing the word "women's" and downgraded graduates of two all-women's colleges. Reuters also reported that Amazon edited the tool to ignore those terms, but lost confidence that it would not find other biased shortcuts. Reuters said people familiar with the project told it that recruiters looked at the tool's recommendations but never relied solely on them, and Amazon said the tool was never used by its recruiters to evaluate candidates. We are reporting what was published. The details come from people familiar with the project.

## Credit

All data in this case is made up. Areas A and B are imaginary. This site is independent and not affiliated with any company mentioned. Terms checked on [date].
