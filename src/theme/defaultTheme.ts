export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    error: string;
    success: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      small: string;
      base: string;
      large: string;
      xlarge: string;
    };
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
}

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    background: 'var(--color-background)',
    text: 'var(--color-text)',
    error: 'var(--color-error)',
    success: 'var(--color-success)',
  },
  typography: {
    fontFamily: 'var(--font-family)',
    fontSize: {
      small: 'var(--font-size-small)',
      base: 'var(--font-size-base)',
      large: 'var(--font-size-large)',
      xlarge: 'var(--font-size-xlarge)',
    },
  },
  spacing: {
    small: 'var(--spacing-small)',
    medium: 'var(--spacing-medium)',
    large: 'var(--spacing-large)',
  },
  borderRadius: {
    small: 'var(--radius-small)',
    medium: 'var(--radius-medium)',
    large: 'var(--radius-large)',
  },
  shadows: {
    small: 'var(--shadow-small)',
    medium: 'var(--shadow-medium)',
    large: 'var(--shadow-large)',
  },
};