import { View, Text, Pressable } from 'react-native';
import { popupStyles } from './Popup.styles';

export interface PopupProps {
  visible: boolean;
  message: string;
  onCancel: () => void;
  onAccept?: () => void;
  showAcceptButton?: boolean;
}

export default function Popup({ visible, message, onCancel, onAccept, showAcceptButton = true }: PopupProps) {
  if (!visible) return null;
  
  return (
    <View style={popupStyles.overlay}>
      <View style={popupStyles.container}>
        <Text style={popupStyles.message}>{message}</Text>
        <View style={popupStyles.buttonRow}>
          {showAcceptButton && onAccept ? (
            <>
              <Pressable style={popupStyles.cancelButton} onPress={onCancel} android_ripple={{ color: '#aaa' }}>
                <Text style={popupStyles.cancelText}>Cancel</Text>
              </Pressable>
              <Pressable style={popupStyles.acceptButton} onPress={onAccept} android_ripple={{ color: '#0055ff' }}>
                <Text style={popupStyles.acceptText}>Accept</Text>
              </Pressable>
            </>
          ) : (
            <Pressable style={[popupStyles.cancelButton, { marginRight: 0, maxWidth: 120 }]} onPress={onCancel} android_ripple={{ color: '#aaa' }}>
              <Text style={popupStyles.cancelText}>OK</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}
