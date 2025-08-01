import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const popupStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  message: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#cccccc',
    alignItems: 'center',
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
  },
  acceptText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
