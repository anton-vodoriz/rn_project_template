import { SUPPORTED_LOCALES, Locale } from './languages';

export const isSupportedLanguage = (lang: string): lang is Locale => {
  return SUPPORTED_LOCALES.includes(lang as Locale);
};
