import { spacing } from '../spacing';
import { typography } from '../typography';
import { radius } from '../radius';
import { Theme } from '../types';

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    // Accent
    primary: '#297AC9',
    secondary: '#7EC0F2',

    // Background
    background: '#060606',
    background_secondary: '#0F161D',

    // Text
    text: '#F4F4F4',
    text_secondary: '#A3BAD7',
    text_supporting: '#3D5B82',

    // Disabled
    disabled: '#1F2E3F',
    disabled_secondary: '#41526C',

    // semantic
    success: '#34C659',
    error: '#F24F4E',
    warning: '#F89703',
  },
  spacing,
  typography,
  radius,
};
