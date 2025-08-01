import { Pressable, Text } from 'react-native';
// workaround for TSX Pressable typing
const PressableAny: any = Pressable;
import { controlButtonStyles } from './ControlButton.styles';

interface ControlButtonProps {
  label: string;
  onPress: () => void;
}

export default function ControlButton({ label, onPress }: ControlButtonProps) {
  return (
    <PressableAny
      style={controlButtonStyles.controlButton}
      onPress={onPress}
      android_ripple={{ color: '#ccc' }}
    >
      <Text style={controlButtonStyles.buttonText}>{label}</Text>
    </PressableAny>
  );
}
