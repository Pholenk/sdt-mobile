import { StyleSheet } from 'react-native';
import { theme } from '@themes';

export const SortRowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: theme.typography.sm,
    color: theme.colors.textSecondary,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 2,
  },
  label: {
    fontSize: theme.typography.sm,
    color: theme.colors.textSecondary,
  },
  value: {
    fontSize: theme.typography.sm,
    color: theme.colors.textSecondary,
    paddingHorizontal: 2,
    fontWeight: '800',
  },
});
