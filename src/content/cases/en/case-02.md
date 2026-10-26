---
number: 2
title: "Case 02: Charts That Lie"
hook: "Same numbers, three different stories. One of the charts is cheating. Catch it."
rank: rookie
minutes: 30
tools: "Google Sheets, or any spreadsheet tool such as LibreOffice"
status: live
updated: "26 Oct 2026"
videoDate: "Friday 30 October"   # delete this line when you add the video ID
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Starter sheet (.xlsx)"
    file: "/downloads/red-strings-lab_case02_starter-sheet.xlsx"
    note: "Tabs: Read Me, Brands, Months, Charts, Your Turn, Answer Key. Try the Answer Key yourself first."
  - label: "Brands data (.csv)"
    file: "/downloads/case02_brands.csv"
  - label: "Months data (.csv)"
    file: "/downloads/case02_months.csv"
resources: []
decoder: [Axis, Truncated axis, Cherry-picking, Share, Dataset]
challenge: "Find a real chart in the wild (a post, an article, an ad) and catch one trick. Log it in the Your Turn tab: where you found it, which trick, what was hidden, and how you would redraw it honestly. Never include names, faces or personal details from a screenshot."
parentNote: "All numbers in this case are made up. No real brand and no real votes. Students should never share a chart that contains someone's personal details."
quiz:
  - q: "A bar chart starts its axis at 48 instead of 0. What does that do?"
    options: ["Makes small gaps look huge", "Makes the data more accurate", "Changes the real numbers", "Nothing, bars are always honest"]
    answer: 0
    explain: "The numbers stay the same. Cutting the axis exaggerates the gap between the bars."
  - q: "Brand A leads Brand B by 2 votes out of 151. What is the honest conclusion?"
    options: ["Brand A is destroying Brand B", "The gap is tiny and could be chance", "Brand B is failing", "Brand C is the winner"]
    answer: 1
    explain: "A 4% gap on 151 votes can easily be pure chance."
  - q: "A chart shows only March to June, when sales rose. What trick is this?"
    options: ["Squeezing the shape", "Cherry-picking a slice", "Using a log scale", "Rounding the numbers"]
    answer: 1
    explain: "Showing only the good months hides what the full year looks like."
---

A made-up phone survey asked: which brand would you buy next? Four brands, 151 votes. A salesperson shows you three charts of the same numbers, and each one tells a different story. Your job is to work out how each trick works and how to spot it.

All data here is made up for the video. No real brand, no real votes.

## Your mission

1. Rebuild the honest chart yourself from the Brands data. Start the axis at 0.
2. Break it on purpose. First change where the axis starts, then squeeze the shape of the chart, then pick only a slice of the months.
3. Find a real chart in the wild (a post, an article, an ad) and catch one trick. Log it in the Your Turn tab.
4. Never share a chart that contains someone's personal details.

## The evidence

**Chart 1: honest.** Axis starts at 0. Votes per brand:

<div class="bars" role="img" aria-label="Honest bar chart: Brand A 52 votes, Brand B 50, Brand C 31, Brand D 18.">
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Brand A</b><i style="width:100%"></i><span>52</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Brand B</b><i style="width:96%"></i><span>50</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Brand C</b><i style="width:60%"></i><span>31</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Brand D</b><i style="width:35%"></i><span>18</span></div>
</div>

**Chart 2: the cut axis.** Same two numbers, but the bars start at 48. Brand A now looks twice as tall as Brand B:

<div class="bars" role="img" aria-label="Misleading chart: with the axis starting at 48, Brand A looks twice as tall as Brand B.">
<div class="bar out"><b style="min-width:5.5rem;font-weight:400">Brand A</b><i style="width:100%"></i><span>52</span></div>
<div class="bar out"><b style="min-width:5.5rem;font-weight:400">Brand B</b><i style="width:50%"></i><span>50</span></div>
</div>

**Chart 3: the squeeze.** Same numbers again, but the chart is drawn tall and thin. A small difference looks like a cliff. Nothing in the data changed, only the shape of the frame.

**Chart 4: the slice.** Brand A's monthly votes. A salesperson shows only March to June:

<div class="bars" role="img" aria-label="Brand A votes by month, March to June, rising from 36 to 52.">
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Mar</b><i style="width:69%"></i><span>36</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Apr</b><i style="width:81%"></i><span>42</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">May</b><i style="width:92%"></i><span>48</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Jun</b><i style="width:100%"></i><span>52</span></div>
</div>

And here is the full year the slice hides:

<div class="bars" role="img" aria-label="Brand A votes for all 12 months, peaking at 52 in June and falling to 18 in December.">
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Jan</b><i style="width:58%"></i><span>30</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Feb</b><i style="width:63%"></i><span>33</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Mar</b><i style="width:69%"></i><span>36</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Apr</b><i style="width:81%"></i><span>42</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">May</b><i style="width:92%"></i><span>48</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Jun</b><i style="width:100%"></i><span>52</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Jul</b><i style="width:94%"></i><span>49</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Aug</b><i style="width:79%"></i><span>41</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Sep</b><i style="width:63%"></i><span>33</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Oct</b><i style="width:50%"></i><span>26</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Nov</b><i style="width:40%"></i><span>21</span></div>
<div class="bar"><b style="min-width:5.5rem;font-weight:400">Dec</b><i style="width:35%"></i><span>18</span></div>
</div>

<div class="twist">

**The twist.** The numbers never changed. Only the axis, the shape and the slice did.

<div class="nums"><div><b>151</b>total votes</div><div><b>2</b>vote gap, A over B</div><div><b>+44%</b>Mar to Jun</div><div><b>-40%</b>Jan to Dec</div></div>

Brand A has about a third of the votes (34%), so it is not "destroying" anyone. The honest gap with Brand B is 2 votes, or 4% of Brand B's total. The sliced chart shows Brand A up 44% from March to June, but after the June peak of 52 votes it falls 65% by December.

</div>

## Spot the trick

Ask four questions of any chart you meet:

1. Where does the axis start?
2. Is the chart stretched or squeezed?
3. Which time period or group was left out?
4. Are the exact numbers shown?
