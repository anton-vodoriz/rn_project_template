import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { getTheme } from '@shared/theme';
import { ThemeName } from '@shared/theme/constants';
import { persistenceStorage } from '@shared/lib/mmkv/storage';
import { STORAGE_KEYS } from '@shared/constants/storageKeys';

type ThemeState = {
  current: ThemeName;
  theme: ReturnType<typeof getTheme>;
  setTheme: (name: ThemeName) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      current: 'light',
      theme: getTheme('light'),
      setTheme: (name) => set({ current: name, theme: getTheme(name) }),
    }),
    {
      name: STORAGE_KEYS.THEME,
      storage: createJSONStorage(() => persistenceStorage),
    },
  ),
);
