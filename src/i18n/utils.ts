import en from './en.json';
import he from './he.json';

export const defaultLang = 'he';
export const languages = {
  en: 'English',
  he: 'עברית',
};

export const showDefaultLang = false;

export const dictionaries = {
  en,
  he,
};

export const getStaticPathsForLang = () => {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as keyof typeof languages;
  }
  return defaultLang; // default language
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    return dictionaries[lang][key] || key;
  };
}

export function useTranslatedPath(lang: keyof typeof languages) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
