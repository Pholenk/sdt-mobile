import { StyleSheet } from 'react-native';
import { theme } from '@themes';

export const HeaderStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  headerTitle: {
    fontSize: theme.typography.md,
    fontWeight: '700',
  },
});
