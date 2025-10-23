import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { AppTranslationSchema } from './types';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from './languages';

// Static map of async imports
const loaders: Record<Locale, () => Promise<AppTranslationSchema>> = {
  en: () =>
    import('./translations/en.json').then(
      (m) => m.default as AppTranslationSchema,
    ),
  // uk: () => import('./translations/uk.json').then((m) => m.default as AppTranslationSchema),
};

function normalizeLocale(lang?: string): Locale {
  if (!lang) return DEFAULT_LOCALE;
  const lc = lang.toLowerCase();
  // accept 'en', or map 'en-US' -> 'en'
  const base = lc.split('-')[0] as Locale;
  return (SUPPORTED_LOCALES as readonly string[]).includes(base)
    ? (base as Locale)
    : DEFAULT_LOCALE;
}

export async function initI18n(lang?: string) {
  const locale = normalizeLocale(lang);

  // Lazy-load only the requested locale
  const translation = await loaders[locale]();

  await i18n.use(initReactI18next).init({
    lng: locale,
    fallbackLng: DEFAULT_LOCALE,
    resources: { [locale]: { translation } },
    interpolation: { escapeValue: false },
  });

  return i18n;
}

export default i18n;
