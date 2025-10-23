import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const initI18n = async (lang?: string) => {
  const locale = lang || 'en';

  const resources = {
    [locale]: {
      translation: await import(`./translations/${locale}.json`).then(
        (mod) => mod.default,
      ),
    },
  };

  await i18n.use(initReactI18next).init({
    lng: locale,
    fallbackLng: 'en',
    resources,
    interpolation: { escapeValue: false },
  });

  return i18n;
};

export default i18n;
