---
number: 17
title: "Case 17: Hello, Python"
hook: "For sixteen cases you clicked. Today you type. Same investigation, new weapon."
rank: inspector
minutes: 40
tools: "JupyterLite in your browser (no account needed), and the Case 17 starter notebook"
status: soon   # change to live on publish day
updated: "[date]"
# video: "PASTE_YOUTUBE_VIDEO_ID"
chapters: []
subtitles: []
downloads:
  - label: "Starter notebook (.ipynb)"
    file: "/downloads/red-strings-lab_case17_hello-python.ipynb"
    note: "Seven short steps: print, a list, average, median, the weird number, a loop, and a deliberate typo. All data is made up (the Case 1 screen-time answers)."
resources: []
decoder: [Variable, List, Loop, Function, Error message, Comment, Outlier]
challenge: "Replace the list in the notebook with your own numbers, for example from Case 1 or Case 8. No personal details. Re-run every cell. Add one comment line (starting with #) saying what you did with your outlier, and why. Then write one honest sentence: what your numbers show, and what they cannot prove."
parentNote: "All data in this case is made up. The main tool, JupyterLite, runs entirely in the browser and needs no account. Account and age rules apply only to optional tools such as Google Colab, which has its own minimum age and requires parental consent for under-18s. Please check those rules before a young person uses it."
quiz:
  - q: "Your Python average matches the spreadsheet average from Case 1. What does that tell you?"
    options: ["Both are definitely right", "It is a good sign, like two sources agreeing, but not proof", "Python is better than spreadsheets", "The data must be real"]
    answer: 1
    explain: "Two independent routes giving the same answer is reassuring. It is still worth checking that you started from the right data."
  - q: "You type print(avrage) and get a red error ending 'name avrage is not defined'. What is the best response?"
    options: ["Panic and start over", "Read the last line: it is telling you the exact problem, a spelling mistake", "Delete the notebook", "Ignore it"]
    answer: 1
    explain: "Error messages are the first clue, not a failure. The last line usually says what Python could not find."
  - q: "A program runs with no errors and prints an average. Is the average right?"
    options: ["Yes, no errors means correct", "Not necessarily: code does exactly what you wrote, including the mistakes", "Only if it was long", "Only on Fridays"]
    answer: 1
    explain: "If you typed the wrong list, Python will compute a perfect average of the wrong numbers. Compare with another source."
---

For sixteen cases you clicked. A spreadsheet is a record of what you clicked. Code is a written investigation: anyone can re-run it, check it and fix it in one place.

Welcome to the Inspector rank. Today we redo Case 1 in Python, with the same ten made-up screen-time answers. If the numbers match, that is a good sign. It is the same as checking two sources.

All data here is made up.

## Your mission

1. Open the notebook tool (see the box below) and upload the starter notebook.
2. Run each cell in order with Shift+Enter, and read what it prints before you move on.
3. Check your results against Case 1: average 5.25, median 4.5, biggest value 14.
4. Run the loop that flags any answer over 10. How many does it flag? Guess first.
5. Run the typo cell on purpose. Read the last line of the red message, fix the spelling and run it again.
6. Do the challenge: swap in your own numbers and explain what you did with your outlier.

## Open the notebook

**Tool: JupyterLite.** It is an open-source Jupyter environment that runs entirely in your browser. There is nothing to install and no account to make.

<!-- TEAM: do not publish the JupyterLite link until someone has opened it and uploaded the starter notebook successfully. Open the official JupyterLite project page, use its "Try it in your browser" link, and paste the verified URL and the date checked here. Add screenshots of the steps. -->

**How to open it:** [verified link and screenshots coming]. Upload the starter notebook using the upload button in the file browser, then open it.

Some other notebook tools need a Google account. Google's minimum age for an account is 13 in most countries and higher in some. Check the rules for your country before using one. Today's notebook needs nothing like that.

## What the notebook shows

| | Python | Case 1 spreadsheet |
|---|---|---|
| Average | 5.25 | 5.25 |
| Median | 4.5 | 4.5 |
| Biggest value | 14.0 | 14 |
| Average without the 14 | 4.28 | 4.28 |

Same numbers, two tools. The Case 1 rule still applies: keep the original list, make a copy without the outlier, and say what you did.

<div class="nums"><div><b>5.25</b>average</div><div><b>4.5</b>median</div><div><b>14.0</b>biggest value</div></div>

## Break it on purpose

The notebook includes a cell that prints a misspelled name, `avrage`. You get red text and a message ending in "name 'avrage' is not defined". Everyone's first reaction is panic. Read the last line instead: Python is telling you the exact problem. Errors are not failure. They are the first clue.

<div class="twist">

**The twist: code does exactly what you say.** Code never guesses what you meant. It does exactly what you wrote, including the mistakes. If you typed the wrong list, Python would compute a perfect average of the wrong numbers. That is why we compare with another source, like the spreadsheet. A program that runs without errors is not the same as a program that is right.

</div>

## Credit

All data on this page is made up. JupyterLite is an open-source project. This site is independent and not affiliated with any tool or company mentioned. Terms checked on [date].
