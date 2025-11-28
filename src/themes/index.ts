import { spacing } from './spacing';
import { colors } from './colors';
import { typography } from './typography';

export const theme = {
  colors: colors,
  spacing: spacing,
  typography: typography,
};

export type Theme = typeof theme;
