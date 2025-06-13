import { type ThemeConfig } from './defaultTheme';

export const getColorClasses = (theme: ThemeConfig) => ({
  primary: `text-[${theme.colors.primary}]`,
  secondary: `text-[${theme.colors.secondary}]`,
  background: `bg-[${theme.colors.background}]`,
  text: `text-[${theme.colors.text}]`,
  error: `text-[${theme.colors.error}]`,
  success: `text-[${theme.colors.success}]`,
});

export const getSpacingClasses = (theme: ThemeConfig) => ({
  small: `p-[${theme.spacing.small}]`,
  medium: `p-[${theme.spacing.medium}]`,
  large: `p-[${theme.spacing.large}]`,
});

export const getBorderRadiusClasses = (theme: ThemeConfig) => ({
  small: `rounded-[${theme.borderRadius.small}]`,
  medium: `rounded-[${theme.borderRadius.medium}]`,
  large: `rounded-[${theme.borderRadius.large}]`,
});

export const getShadowClasses = (theme: ThemeConfig) => ({
  small: `shadow-[${theme.shadows.small}]`,
  medium: `shadow-[${theme.shadows.medium}]`,
  large: `shadow-[${theme.shadows.large}]`,
});

export const getTypographyClasses = (theme: ThemeConfig) => ({
  fontFamily: `font-[${theme.typography.fontFamily}]`,
  small: `text-[${theme.typography.fontSize.small}]`,
  base: `text-[${theme.typography.fontSize.base}]`,
  large: `text-[${theme.typography.fontSize.large}]`,
  xlarge: `text-[${theme.typography.fontSize.xlarge}]`,
}); 