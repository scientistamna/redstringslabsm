# Red String Lab website

Astro static site. One markdown file per case and per language.

## Run it on your computer
Needs Node.js 22. Then:
```
npm install
npm run dev      # http://localhost:4321
npm run build    # makes ./dist
```

## Put it online (GitHub + Cloudflare)
1. Create a GitHub repo and push this folder (don't commit `node_modules` or `dist`; `.gitignore` handles it).
2. Cloudflare dashboard, Workers & Pages, import the repo. Build command: `npm run build`. Deploy command: `npx wrangler deploy` (uses `wrangler.jsonc`, which serves `./dist`).
3. Add your custom domain `redstringlab.com` in the project settings, and redirect `www` to it.
4. Every push to `main` redeploys automatically.

## Add a case
Copy `src/content/cases/en/case-01.md`, change the front matter (`number`, `title`, `rank`, `status: live`, optional `video` = YouTube ID) and write the steps. Put files in `public/downloads/`.

## Add a language (example: Arabic)
1. Copy `src/content/cases/en/` to `src/content/cases/ar/` and `src/content/pages/en/` to `src/content/pages/ar/`, then translate.
2. Copy the `en` block in `src/i18n/ui.ts` to `ar` and translate.
3. Set `live: true` for `ar` in `src/i18n/languages.ts`.
4. Add fonts: `npm i @fontsource/noto-sans-arabic` (Urdu: `@fontsource/noto-nastaliq-urdu`) and import them in `src/layouts/Base.astro`. RTL direction is already handled.
5. Only switch a language on when its pages exist, so the language switcher never sends people to a missing page.

## Before launch
- `src/consts.ts`: paste your email signup link.
- Replace every `[date]` and `[add email address]`.
- Check each tool's terms and fill in the Toolbox.
- Have the Legal page reviewed.
- Test on a cheap phone on slow data.
