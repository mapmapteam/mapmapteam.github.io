import { ui, defaultLang } from './ui';

export type Locale = keyof typeof ui;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

export function t(lang: Locale, key: keyof (typeof ui)[typeof defaultLang]): string {
  return ui[lang][key] || ui[defaultLang][key];
}

export function getLocalizedPath(path: string, lang: Locale): string {
  // Replace the locale prefix in the path
  const segments = path.split('/').filter(Boolean);
  if (segments[0] in ui) {
    segments[0] = lang;
  } else {
    segments.unshift(lang);
  }
  return '/' + segments.join('/') + '/';
}
