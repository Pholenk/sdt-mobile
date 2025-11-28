import { StyleSheet } from 'react-native';

export const OwnerCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 8,
  },

  avatarContainer: {
    marginRight: 16,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },

  textContainer: {
    flex: 1,
  },

  label: {
    color: '#8BA0B3',
    fontSize: 13,
    fontWeight: '500',
  },

  value: {
    color: '#1A1A1A',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 2,
  },

  starContainer: {
    marginLeft: 'auto',
    paddingLeft: 12,
    paddingRight: 4,
  },
});
