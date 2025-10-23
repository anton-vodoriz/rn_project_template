import { SUPPORTED_LANGUAGES, SupportedLanguage } from './languages';

export const isSupportedLanguage = (
  lang: string,
): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
};
