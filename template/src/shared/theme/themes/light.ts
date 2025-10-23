import { spacing } from '../spacing';
import { typography } from '../typography';
import { radius } from '../radius';
import { Theme } from '../types';

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    // Accent
    primary: '#312EE9',
    secondary: '#1a1983ff',

    // Background
    background: '#FFFFFF',
    background_secondary: '#F2F2F2',

    // Text
    text: '#212121',
    text_secondary: '#3F3F4E',
    text_supporting: '#6B6B72',

    // Disabled
    disabled: '#C3D0F3',
    disabled_secondary: '#909EC2',

    // Semantic
    success: '#27AE60',
    error: '#EB5757',
    warning: '#FDB841',
  },
  spacing,
  typography,
  radius,
};
