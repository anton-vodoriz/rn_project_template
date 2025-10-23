import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { persistenceStorage } from '@shared/lib/mmkv/storage';
import { initI18n } from '@shared/i18n';
import { SupportedLanguage } from '@shared/i18n/languages';
import { STORAGE_KEYS } from '@shared/constants/storageKeys';

type TranslationState = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => Promise<void>;
};

export const useTranslationStore = create<TranslationState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: async (lang) => {
        await initI18n(lang);
        set({ language: lang });
      },
    }),
    {
      name: STORAGE_KEYS.TRANSLATION,
      storage: createJSONStorage(() => persistenceStorage),
    },
  ),
);
