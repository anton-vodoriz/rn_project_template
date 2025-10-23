export const THEME_NAMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeName = (typeof THEME_NAMES)[keyof typeof THEME_NAMES];
