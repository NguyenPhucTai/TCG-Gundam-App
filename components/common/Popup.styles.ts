import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const popupStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  container: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1e40af',
    padding: 20,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  message: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    maxWidth: 120,
  },
  cancelText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
  },
  acceptButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#1e40af',
    alignItems: 'center',
    maxWidth: 120,
  },
  acceptText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
