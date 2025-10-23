import { useThemeStore } from '@app/store/theme.store';

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  return theme;
};
