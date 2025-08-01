import { StyleSheet } from 'react-native';

export const controlButtonStyles = StyleSheet.create({
  controlButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#1e40af',
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#1e40af',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});
