import { StyleSheet } from 'react-native';
import { theme } from '@themes';

export const avatarStyle = StyleSheet.create({
  wrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.avatarCardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperWhite: {
    backgroundColor: theme.colors.card,
    borderWidth: 1.5,
    borderColor: theme.colors.borderGreen,
  },
  label: {
    fontSize: theme.typography.md,
    fontWeight: 'bold',
    color: theme.colors.card,
  },
  wrapperWhiteLabel: {
    color: theme.colors.borderGreen,
  },
});
