# Project record (keep updated)

## YouTube
- Channel page (permanent): https://www.youtube.com/channel/UC9dRCdgSK9siIM40OMiXgSQ
- Channel ID: UC9dRCdgSK9siIM40OMiXgSQ
- RSS: https://www.youtube.com/feeds/videos.xml?channel_id=UC9dRCdgSK9siIM40OMiXgSQ
- Handle now: @redstringslab (https://www.youtube.com/@redstringslab), confirmed in YouTube Studio on 26 Oct 2026. Old planned handle was @redstringlab-sm (link: https://www.youtube.com/@redstringlab-sm, works only after the change is saved in YouTube Studio). The site footer keeps using the channel-ID link, which always works.
- Channel name on YouTube today: "Red Strings Lab" and handle @redstingslab (typos; brand is "Red String Lab", handle should be @redstringlab). Fix the name in YouTube Studio, Customization, Basic info.
- NOT valid: https://www.youtube.com/channel/redstringslab (the /channel/ path needs the UC... ID). After the handle change, use the @redstringlab-sm link above.

## Site
- Domain: redstringslab.com (Cloudflare). Changed from redstringlab.com on the user's instruction. Hosting: Cloudflare from GitHub repo.
- Live language: en. Planned: ar, ur, id, pt-br, tr.
- GitHub repo: https://github.com/scientistamna/redstringslabsm
- Cloudflare Pages project: redstringslabsm.pages.dev (build: npm run build, output: dist, NODE_VERSION=22)

## Brand name (DECIDED)
- Red Strings Lab (with the s). Domain redstringslab.com. Final logo files are the "no-sm" PNGs in public/logo/ (stamp, avatar, one-color). The old SVG stamps and red-strings-lab-stamp.png (with SM) are obsolete and can be deleted.

## Plan: 32 cases
- Rookie 1-8, Analyst 9-16, Inspector 17-24, Chief 25-32. Titles live in src/data/roadmap.ts.
- Schedule check needed: Rookie is listed as Oct 27 to Nov 17, but that holds only 7 Tuesday/Friday dates for 8 cases (Analyst, Inspector and Chief each hold exactly 8). Rookie probably starts Fri Oct 23.
- Website only shows a case as live when its .md file says status: live. Flip it on publish day.
- Starter files received: Cases 1, 2 and 4. Cases 3, 5 and 6 have none yet.

## Launch status (26 Oct 2026)
- Cases 1-4 are live on the site. Videos: Case 1 and 2 publish 27 Oct; add each video ID to the case file when the video is public.
- Trailer: paste its ID into trailerId in src/consts.ts.
- Still open: signup tool (signupUrl), contact email on the Legal page, a still favicon from the new mark, submission form and Rookie badge before Case 8, Terms checked dates for each tool.

## Social profiles
- Pinterest: https://www.pinterest.com/redstringslab/
- Reddit: https://www.reddit.com/user/redstringslab/
- Shown in the site footer (src/layouts/Base.astro, values in src/consts.ts).

## Video dates
- Case 1: Tuesday 27 Oct. Case 2: Friday 30 Oct (changed from 27 Oct). Case 2 page says "Video opens Friday 30 October." until the video ID is added.
