import { useThemeStore } from '@app/store/theme.store';

export const useAppTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  return theme;
};
