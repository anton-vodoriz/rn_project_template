import { StateStorage } from 'zustand/middleware';
import { mmkv } from '@shared/lib/mmkv/index';

export const persistenceStorage: StateStorage = {
  setItem(name: string, value: string) {
    return mmkv.set(name, value);
  },
  getItem(name: string) {
    const value = mmkv.getString(name);
    return value ?? null;
  },
  removeItem(name: string) {
    return mmkv.delete(name);
  },
};
