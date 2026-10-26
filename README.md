# Red Strings Lab website

Astro static site for redstringslab.com. One markdown file per case, per page and per language. GitHub holds the files, and Cloudflare builds and publishes the site every time you save a change.

Open items and account details (YouTube, Pinterest, Reddit, domain) are kept in `RECORD.md`. Keep it up to date.

## How the site is put together

```
src/
  consts.ts                 site name, domain, YouTube/Pinterest/Reddit links, trailer ID, signup link
  data/roadmap.ts           all 32 case titles, grouped by rank
  i18n/ui.ts                every button, menu and label (English now, other languages later)
  i18n/languages.ts         which languages are live
  layouts/Base.astro        header, menu, footer, page head
  pages/[lang]/...          page templates (home, start, case files, case page, other pages)
  content/cases/en/         one file per case: case-01.md, case-02.md ...
  content/pages/en/         about.md, parents.md, toolbox.md, decoder.md, legal.md
public/
  downloads/                starter sheets and CSVs for the cases
  logo/                     logo files
  tools/                    interactive tools (Faker Detector, Beat the Machine)
```

Rule that matters: every `.md` file in `content/` must start with a front matter block between two `---` lines. Without it the build fails or the page does not appear.

## Put it online (GitHub + Cloudflare Pages)

1. Push this folder to GitHub (`.gitignore` keeps `node_modules` and `dist` out).
2. Cloudflare dashboard, Workers & Pages, Create, Pages, connect the repo. Framework preset Astro, build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION` = `22`.
3. Add the custom domain `redstringslab.com` in the project settings, and redirect `www` to it.
4. Every change you commit to `main` redeploys automatically. Check the Deployments tab: green means live, red means read the error lines.

Editing in the GitHub browser: open a file, click the pencil icon, edit, then Commit changes. To add a new file, use Add file, then Create new file, and type the full path (typing slashes makes the folders). To upload spreadsheets or images, open the folder first, then Add file, then Upload files.

## Publish a case (publish-day checklist)

1. Make sure the case file exists in `src/content/cases/en/` and its downloads are in `public/downloads/`.
2. In the case file, set `status: live`.
3. When the video is public, add its ID (the part after `v=` in the link, or after `youtu.be/`) to the `video:` line. Until then the page shows "Video opens soon", or the date if `videoDate` is set.
4. Optional: add `chapters` (time and label, viewers click to jump) and `subtitles` (language codes).
5. Update `updated:` to today's date.
6. Commit, wait for the green build, and open the page on a phone.

A new case starts as a copy of `case-01.md`. The front matter fields are: `number`, `title`, `hook`, `rank`, `minutes`, `tools`, `status`, `video`, `videoDate`, `chapters`, `downloads`, `resources` (full web addresses only), `quiz`, `decoder`, `challenge`, `parentNote`, `subtitles` and `updated`. The body holds the steps, data and twist. For a transcript, add a `## Transcript` section inside a `<details>` block at the end. Videos use YouTube's privacy-enhanced embed.

The Case files page lists all 32 cases from `src/data/roadmap.ts`. A case without a live file shows "Opens soon".

## Add or change a page

- **Change a page:** edit its file in `src/content/pages/en/` (about, parents, toolbox, decoder, legal). Keep the front matter (`title` and `description`) at the top.
- **Add a new page:** create `src/content/pages/en/<name>.md` with front matter. It appears at `/en/<name>/`. To put it in the menu, add it to the `nav` list in `src/layouts/Base.astro` and add a `nav.<name>` label in `src/i18n/ui.ts`.

## Add an interactive tool

Put the single HTML file in `public/tools/`, then embed it in a case file with an `<iframe src="/tools/name.html">` line. Always add an "open on its own page" link as a backup. Do not use external fonts or scripts in tool files.

## Brand and links

- Logo files are in `public/logo/`. The header mark is `rsl-b-animated-mark.svg`; the hero image is `red-strings-lab-stamp-no-sm.png`.
- Social links, the YouTube channel and the trailer ID are in `src/consts.ts`. To show the trailer on the homepage, paste its YouTube ID into `trailerId`.
- The tab icon is `public/favicon.svg`. It is still the old mark and needs a still version of the new one.

## Add a language (example: Arabic)

1. Copy `src/content/cases/en/` to `src/content/cases/ar/` and `src/content/pages/en/` to `src/content/pages/ar/`, then translate.
2. Copy the `en` block in `src/i18n/ui.ts` to `ar` and translate it.
3. Set `live: true` for `ar` in `src/i18n/languages.ts`.
4. Add fonts: `npm i @fontsource/noto-sans-arabic` (Urdu: `@fontsource/noto-nastaliq-urdu`) and import them in `src/layouts/Base.astro`. Right-to-left direction is already handled.
5. Switch a language on only when its pages exist, so the switcher never sends people to a missing page. Roadmap titles are English until `roadmap.ts` gets translations.

## Run it on your computer (optional)

Needs Node.js 22.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # makes ./dist
```

## Before and after launch

- `src/consts.ts`: paste your email signup link in `signupUrl`. Until then the homepage offers a YouTube subscribe button.
- Replace every `[date]` placeholder (for example "Terms checked on [date]" in the cases not yet live).
- Add a contact email to the Legal page when one exists.
- Check each tool's terms and age rules and keep the Toolbox true.
- Have the Legal page reviewed by a qualified person.
- Case 8 needs a live submission form and the Rookie badge image before it publishes.
- Test on a cheap phone on slow data.
