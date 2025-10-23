import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { persistenceStorage } from '@shared/lib/mmkv/storage';
import { initI18n } from '@shared/i18n';
import { Locale } from '@shared/i18n/languages';
import { STORAGE_KEYS } from '@shared/constants/storageKeys';

type LocalizationState = {
  language: Locale;
  setLanguage: (lang: Locale) => Promise<void>;
};

export const useLocalizationStore = create<LocalizationState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: async (lang) => {
        await initI18n(lang);
        set({ language: lang });
      },
    }),
    {
      name: STORAGE_KEYS.LOCALIZATION,
      storage: createJSONStorage(() => persistenceStorage),
    },
  ),
);
