import { StyleSheet } from 'react-native';

export const playerSectionStyles = StyleSheet.create({
  playerSection: {
    minHeight: 180,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    borderWidth: 2,
    borderColor: '#1e40af',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  playerName: {
    color: '#1e40af',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
