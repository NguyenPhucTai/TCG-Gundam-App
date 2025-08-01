import { View } from 'react-native';
import { BUTTON_TEXTS } from '../../constants';
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
      <ControlButton label={BUTTON_TEXTS.RESET} onPress={onReset} />
      <ControlButton label={BUTTON_TEXTS.LEVEL_UP} onPress={onLevelUp} />
      <ControlButton label={BUTTON_TEXTS.REVERT} onPress={onRevert} />
      <ControlButton label={BUTTON_TEXTS.DICE_ROLL} onPress={onDice} />
    </View>
  );
}
