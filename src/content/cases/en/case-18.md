---
number: 18
title: "Case 18: Load the Evidence"
hook: "Real data arrives as a file. The first rule of loading it: don't trust it yet."
rank: inspector
minutes: 40
tools: "JupyterLite in your browser (no account needed), pandas, the Case 18 starter notebook and the Case 1 CSV file"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Starter notebook (.ipynb)"
    file: "/downloads/red-strings-lab_case18_load-the-evidence.ipynb"
    note: "Ten short steps: load, inspect, rename, summarise, count, find the weird row, check the link, sanity checks, and a deliberate wrong file name. Includes a Plan B cell that works if the file cannot be seen."
  - label: "Case 1 survey data (.csv)"
    file: "/downloads/case01_data.csv"
    note: "Ten made-up students: age group, sleep, screen time and whether the phone was in bed. No real people."
resources: []
decoder: [CSV, DataFrame, Row, Column, Rename, Summary statistics, Assertion]
challenge: "Load a different file: your own Case 1 or Case 8 data, or the Case 6 survey. Run the inspection: rows, columns, blanks, average, median and the weirdest row. Add one comment line (starting with #) about what you did with any outlier or blank. Write one honest sentence: what your data shows, and what it cannot prove. No personal details."
parentNote: "All data in this case is made up. Everything runs in the browser, and no personal data should ever be loaded into the notebook. Files stay in the browser session. JupyterLite and pandas are open-source tools and need no account."
quiz:
  - q: "You have just loaded a file. What three things should you check before analysing it?"
    options: ["Colour, font and size", "Rows, columns and blanks", "Author, date and price", "Nothing, loading means it is right"]
    answer: 1
    explain: "Checking the number of rows and columns, and counting blanks, catches most loading problems before they spoil the analysis."
  - q: "You type the wrong file name and get a FileNotFoundError that quotes your typo. What should you do?"
    options: ["Reinstall Python", "Read the last line, spot the spelling mistake and fix it", "Rename every file", "Give up"]
    answer: 1
    explain: "The error shows exactly what Python looked for. Compare it with the real file name."
  - q: "A file loads with no errors, but half the rows are missing. Why does this matter?"
    options: ["It does not, no errors means fine", "Code that runs is not the same as data that is right, so add quiet checks like the row count", "Python always repairs this", "Only spreadsheets have this problem"]
    answer: 1
    explain: "Most data disasters happen before the analysis. Checks that stay quiet when things are right, and stop you when they are not, protect you."
---

Last time you typed ten numbers into Python by hand. That is fine for ten. Today the evidence comes in a file, and the first rule of loading it is: don't trust it yet.

Real data arrives as files. Python reads them with a library called pandas, which turns a CSV file into a table. We load the Case 1 survey: ten made-up students, with sleep and screen time. Then we inspect it before we analyse it, because Cases 6 and 7 showed what happens when you skip that step.

All data here is made up.

## Your mission

1. Open the notebook tool and upload the starter notebook (see the box below), then download `case01_data.csv` from this page.
2. Drag the CSV into the file browser on the left of the notebook. Run the check cell. If the first line starts with `/drive/`, the notebook can see your files.
3. If it does not, use **Plan B**: run the cell that builds the same table from text pasted into the notebook. Different route, same table.
4. Before you analyse anything, guess: what three things should you check about a file you just loaded? Then check them on the table.
5. Rename the columns, run `describe`, find the weird row and compare the links with and without it.
6. Run the sanity checks, then break it on purpose with the wrong file name.

## Open the notebook

Use JupyterLite, the same browser tool as Case 17. It needs no account and nothing to install.

<!-- TEAM: reuse the verified JupyterLite link and screenshots from Case 17. Do not publish until someone has opened the Case 18 notebook there, dragged in case01_data.csv and run every cell. The notebook was tested in ordinary Python with pandas, not inside JupyterLite. -->

**If the file isn't visible, use Plan B.** In some browsers or hosted versions, drag-and-drop file access is switched off, because it relies on a feature the browser or server does not always enable. That is not your fault. The Plan B cell pastes the CSV text straight into the notebook and works anywhere. If you hit this wall, say so, switch to Plan B and carry on.

## Three tools, one answer

| | Spreadsheet (Case 1) | Python by hand (Case 17) | pandas (today) |
|---|---|---|---|
| Rows and columns | 10 and 5 | not applicable | 10 and 5 |
| Blanks | none | not applicable | none |
| Average screen time | 5.25 | 5.25 | 5.25 |
| Median | 4.5 | 4.5 | 4.5 |
| Biggest value | 14 | 14.0 | 14.0 |

<div class="nums"><div><b>10 × 5</b>rows and columns</div><div><b>5.25</b>average screen time</div><div><b>14.0</b>biggest value</div></div>

## The weird row and the link

The weird row is the 14-hour answer, with 7 hours of sleep and the phone in bed. Now the correlation between sleep and screen time:

| | Correlation |
|---|---|
| All ten students | −0.37 |
| Without the 14-hour answer | −0.96 |

One row hid a strong pattern. As in Case 1, say what you did with it, and do not delete it silently. A link is a lead, not proof.

## Break it on purpose

The most common loading mistake is a wrong file name. The notebook asks for `case01_dta.csv`. You get red text, and the last line says there is no such file or directory and quotes the typo. Python is telling you exactly what it looked for. Fix the spelling and it loads.

<div class="twist">

**The twist: loading is where it goes wrong.** Most data disasters happen before the analysis. A file loads with no errors, yet half the rows are missing, or the columns have shifted, or the numbers are really text. So add checks that stay quiet when things are right: ten rows, no blanks. If a check fails, stop. Code that runs is not the same as data that is right.

</div>

## Credit

All data on this page is made up. JupyterLite and pandas are open-source projects. This site is independent and not affiliated with any tool or company mentioned. Terms checked on [date].
