import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { persistenceStorage } from '@shared/lib/mmkv/storage';
import { STORAGE_KEYS } from '@shared/constants/storageKeys';

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (tokens: { accessToken?: string; refreshToken?: string }) => void;
  logout: () => void;
  readonly isAuthenticated: boolean;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      setTokens: (tokens) =>
        set((state) => ({
          accessToken: tokens.accessToken ?? state.accessToken,
          refreshToken: tokens.refreshToken ?? state.refreshToken,
        })),
      logout: () => set({ accessToken: null, refreshToken: null }),
      get isAuthenticated() {
        return !!(get().accessToken && get().refreshToken);
      },
    }),
    {
      name: STORAGE_KEYS.AUTH,
      storage: createJSONStorage(() => persistenceStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    },
  ),
);
