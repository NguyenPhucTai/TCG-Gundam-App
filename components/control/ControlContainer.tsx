import React from 'react';
import { View } from 'react-native';
import ControlButton from './ControlButton';
import { controlContainerStyles } from './ControlContainer.styles';

interface ControlContainerProps {
  onReset: () => void;
  onRevert: () => void;
  onDice: () => void;
}

export default function ControlContainer({ onReset, onRevert, onDice }: ControlContainerProps) {
  return (
    <View style={controlContainerStyles.container}>
      <ControlButton label="Reset" onPress={onReset} />
      <ControlButton label="Revert" onPress={onRevert} />
      <ControlButton label="Dice Roll" onPress={onDice} />
    </View>
  );
}
