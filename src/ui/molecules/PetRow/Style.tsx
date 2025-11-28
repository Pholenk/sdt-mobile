import { StyleSheet } from 'react-native';
import { theme } from '@themes';

export const PetStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderRadius: 14,
    marginBottom: theme.spacing.md,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
    width: '100%',
  },
  label: {
    fontSize: theme.typography.md,
    fontWeight: '500',
    color: theme.colors.textPrimary,
    paddingHorizontal: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    width: 40,
  },

  textContainer: {
    flexDirection: 'column',
  },

  name: {
    fontSize: theme.typography.md,
    fontWeight: '600',
    color: '#000',
  },

  age: {
    fontSize: theme.typography.sm,
    color: '#A0A6B3',
    marginTop: 2,
  },
});
