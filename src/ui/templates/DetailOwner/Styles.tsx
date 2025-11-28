import { StyleSheet } from 'react-native';
import { theme } from '@themes';

export const DetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: theme.typography.sm,
    color: theme.colors.textSecondary,
  },
});
