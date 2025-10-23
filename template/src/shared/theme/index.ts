import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import { THEME_NAMES, ThemeName } from './constants';

export const themes = {
  [THEME_NAMES.LIGHT]: lightTheme,
  [THEME_NAMES.DARK]: darkTheme,
};

export const getTheme = (name: ThemeName) => {
  return themes[name] ?? lightTheme;
};
