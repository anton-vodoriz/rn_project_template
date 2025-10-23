export type Theme = {
  name: string;
  colors: {
    // Accent
    primary: string;
    secondary: string;

    // Background
    background: string;
    background_secondary: string;

    // Text
    text: string;
    text_secondary: string;
    text_supporting: string;

    // Disabled
    disabled: string;
    disabled_secondary: string;

    // Semantic
    success: string;
    error: string;
    warning: string;
  };
  spacing: Spacing;
  radius: Radius;
  typography: Typography;
};

export type Spacing = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type Radius = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type Typography = {
  fontFamily: {
    regular: string;
    medium: string;
    bold: string;
  };
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};
