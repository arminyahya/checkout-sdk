import type { ThemeConfig } from './types';

const defaultTheme = {
  colors: {
    primary: '#36a5ad',
    error: 'var(--color-red-500)',
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
};

export const setTheme = (theme: Partial<ThemeConfig> = {}) => {
  document.documentElement.style.setProperty('--color-primary', theme.colors?.primary || defaultTheme.colors.primary);
  document.documentElement.style.setProperty('--color-error', theme.colors?.error || defaultTheme.colors.error);
  document.documentElement.style.setProperty('--font-family', theme.typography?.fontFamily || defaultTheme.typography.fontFamily);
  document.documentElement.style.setProperty('--shadow-small', theme.shadows?.small || defaultTheme.shadows.small);
  document.documentElement.style.setProperty('--shadow-medium', theme.shadows?.medium || defaultTheme.shadows.medium);
  document.documentElement.style.setProperty('--shadow-large', theme.shadows?.large || defaultTheme.shadows.large);
};