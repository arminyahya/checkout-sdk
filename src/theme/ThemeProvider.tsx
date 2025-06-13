import React, { createContext, useContext, useEffect } from 'react';
import { type ThemeConfig, defaultTheme } from './defaultTheme';

interface ThemeContextType {
  theme: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType>({ theme: defaultTheme });

interface ThemeProviderProps {
  theme?: Partial<ThemeConfig>;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = {}, children }) => {
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
    typography: {
      ...defaultTheme.typography,
      ...theme.typography,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...theme.spacing,
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      ...theme.borderRadius,
    },
    shadows: {
      ...defaultTheme.shadows,
      ...theme.shadows,
    },
  };

  useEffect(() => {
    // Set CSS variables for colors
    document.documentElement.style.setProperty('--color-primary', theme.colors?.primary || '#3B82F6');
    document.documentElement.style.setProperty('--color-secondary', theme.colors?.secondary || '#6B7280');
    document.documentElement.style.setProperty('--color-background', theme.colors?.background || '#FFFFFF');
    document.documentElement.style.setProperty('--color-text', theme.colors?.text || '#1F2937');
    document.documentElement.style.setProperty('--color-error', theme.colors?.error || '#EF4444');
    document.documentElement.style.setProperty('--color-success', theme.colors?.success || '#10B981');

    // Set CSS variables for typography
    document.documentElement.style.setProperty('--font-family', theme.typography?.fontFamily || 'Inter, system-ui, sans-serif');
    document.documentElement.style.setProperty('--font-size-small', theme.typography?.fontSize?.small || '0.875rem');
    document.documentElement.style.setProperty('--font-size-base', theme.typography?.fontSize?.base || '1rem');
    document.documentElement.style.setProperty('--font-size-large', theme.typography?.fontSize?.large || '1.125rem');
    document.documentElement.style.setProperty('--font-size-xlarge', theme.typography?.fontSize?.xlarge || '1.25rem');

    // Set CSS variables for spacing
    document.documentElement.style.setProperty('--spacing-small', theme.spacing?.small || '0.5rem');
    document.documentElement.style.setProperty('--spacing-medium', theme.spacing?.medium || '1rem');
    document.documentElement.style.setProperty('--spacing-large', theme.spacing?.large || '1.5rem');

    // Set CSS variables for border radius
    document.documentElement.style.setProperty('--radius-small', theme.borderRadius?.small || '0.25rem');
    document.documentElement.style.setProperty('--radius-medium', theme.borderRadius?.medium || '0.375rem');
    document.documentElement.style.setProperty('--radius-large', theme.borderRadius?.large || '0.5rem');

    // Set CSS variables for shadows
    document.documentElement.style.setProperty('--shadow-small', theme.shadows?.small || '0 1px 2px 0 rgb(0 0 0 / 0.05)');
    document.documentElement.style.setProperty('--shadow-medium', theme.shadows?.medium || '0 4px 6px -1px rgb(0 0 0 / 0.1)');
    document.documentElement.style.setProperty('--shadow-large', theme.shadows?.large || '0 10px 15px -3px rgb(0 0 0 / 0.1)');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: mergedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};