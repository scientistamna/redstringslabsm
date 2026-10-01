// Set live: true when a language has translated pages. Folders: src/content/{cases,pages}/<code>/
export const languages = {
  en: { label: 'English', dir: 'ltr', live: true },
  ar: { label: 'العربية', dir: 'rtl', live: false },
  ur: { label: 'اردو', dir: 'rtl', live: false },
  id: { label: 'Bahasa Indonesia', dir: 'ltr', live: false },
  'pt-br': { label: 'Português (Brasil)', dir: 'ltr', live: false },
  tr: { label: 'Türkçe', dir: 'ltr', live: false },
} as const;
export type Lang = keyof typeof languages;
export const liveLangs = (Object.keys(languages) as Lang[]).filter((l) => languages[l].live);
