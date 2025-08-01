import { View } from 'react-native';
import ControlButton from './ControlButton';
import { controlContainerStyles } from './ControlContainer.styles';

interface ControlContainerProps {
  onReset: () => void;
  onRevert: () => void;
  onDice: () => void;
  onLevelUp: () => void;
}

export default function ControlContainer({ onReset, onRevert, onDice, onLevelUp }: ControlContainerProps) {
  return (
    <View style={controlContainerStyles.container}>
      <ControlButton label="Reset" onPress={onReset} />
      <ControlButton label="Level Up" onPress={onLevelUp} />
      <ControlButton label="Revert" onPress={onRevert} />
      <ControlButton label="Dice Roll" onPress={onDice} />
    </View>
  );
}
