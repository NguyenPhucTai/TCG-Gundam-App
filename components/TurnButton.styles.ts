import { StyleSheet } from 'react-native';

export const turnButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#1e40af',
    borderRadius: 12,
    width: 100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  // style when pressed is active
  pressedContainer: {
    backgroundColor: '#1e40af',
    borderColor: '#1e40af',
  },
  text: {
    color: '#1e40af',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  pressedText: {
    color: 'white',
  },
});
