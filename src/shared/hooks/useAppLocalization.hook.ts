import { useTranslation as useBaseTranslation } from 'react-i18next';
import type { TOptions } from 'i18next'; // = TOptionsBase & StringMap
import { AppTranslationKeys } from '@shared/i18n/types';

type TParams =
  | [key: AppTranslationKeys]
  | [key: AppTranslationKeys, options: TOptions]
  | [key: AppTranslationKeys, defaultValue: string]
  | [key: AppTranslationKeys, defaultValue: string, options: TOptions];

export function useAppLocalization() {
  const { t, i18n } = useBaseTranslation();
  function translate(...args: TParams): string {
    // same cast rationale as above
    return (t as unknown as (...a: unknown[]) => string)(
      ...(args as unknown[]),
    );
  }
  return { t: translate, i18n };
}
