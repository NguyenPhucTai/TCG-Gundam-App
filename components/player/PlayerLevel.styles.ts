import { StyleSheet } from 'react-native';

export const playerLevelStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  label: {
    color: '#1A1A1A',
    fontSize: 18,
    fontWeight: '700',
  },
  value: {
    color: '#1A1A1A',
    fontSize: 80,
    fontWeight: 'bold',
  },
  highlightValue: {
    color: 'red',
  },
});
