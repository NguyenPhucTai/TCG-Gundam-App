import React from 'react';
import { Text, Pressable } from 'react-native';
// workaround for TSX Pressable typing
const PressableAny: any = Pressable;
import { turnButtonStyles } from './TurnButton.styles';

interface TurnButtonProps {
  label: string;
  onPress: () => void;
  pressed?: boolean;
}

export default function TurnButton({ label, onPress, pressed = false }: TurnButtonProps) {
  return (
    <PressableAny
      style={({ pressed: isPressed }: { pressed: boolean }) => [
        turnButtonStyles.container,
        pressed && turnButtonStyles.pressedContainer,
        isPressed && turnButtonStyles.pressedContainer,
      ]}
      onPress={onPress}
      android_ripple={{ color: '#ccc' }}
    >
      <Text style={[
        turnButtonStyles.text,
        pressed && turnButtonStyles.pressedText,
      ]}>
        {label}
      </Text>
    </PressableAny>
  );
}
