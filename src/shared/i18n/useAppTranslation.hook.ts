import { useTranslation as useBaseTranslation } from 'react-i18next';
import type { AppTranslationKeys } from './types';

export function useAppTranslation() {
  const { t, i18n } = useBaseTranslation();

  function translate(key: AppTranslationKeys, options?: Record<string, any>) {
    return t(key, options);
  }

  return { t: translate, i18n };
}
