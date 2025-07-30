import { StyleSheet } from 'react-native';

export const turnControlStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#1e40af',
    minWidth: 120,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    color: '#333333',
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 15,
  },
  turnValue: {
    color: '#333333',
    fontSize: 56,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  incrementButton: {
    backgroundColor: '#1e40af',
    borderWidth: 2,
    borderColor: '#1e40af',
    borderRadius: 8,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#333333',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
