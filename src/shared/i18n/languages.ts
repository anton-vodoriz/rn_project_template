export const SUPPORTED_LOCALES = ['en'] as const;
// add more, e.g. 'uk', 'fr'
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
