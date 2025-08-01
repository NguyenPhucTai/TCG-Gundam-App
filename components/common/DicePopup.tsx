import { View, Text, Pressable } from 'react-native';
import { BUTTON_TEXTS } from '../../constants';
import { dicePopupStyles } from './DicePopup.styles';

export interface DicePopupProps {
  visible: boolean;
  diceResult: number;
  onClose: () => void;
}

export default function DicePopup({ visible, diceResult, onClose }: DicePopupProps) {
  if (!visible) return null;
  
  return (
    <View style={dicePopupStyles.overlay}>
      <View style={dicePopupStyles.container}>
        <Text style={dicePopupStyles.resultNumber}>{diceResult}</Text>
        <View style={dicePopupStyles.buttonContainer}>
          <Pressable 
            style={dicePopupStyles.closeButton} 
            onPress={onClose} 
            android_ripple={{ color: '#aaa' }}
          >
            <Text style={dicePopupStyles.closeText}>{BUTTON_TEXTS.CANCEL}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
