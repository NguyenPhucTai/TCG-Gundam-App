import React from 'react';
import { Pressable, Text, View } from 'react-native';
// workaround for TSX Pressable typing
const PressableAny: any = Pressable;
import { controlButtonsStyles } from './ControlButtons.styles';

interface ControlButtonsProps {
  onReset: () => void;
  onRevert: () => void;
  onDice: () => void;
}

export default function ControlButtons({ onReset, onRevert, onDice }: ControlButtonsProps) {
  return (
    <View style={controlButtonsStyles.container}>
      <PressableAny
        style={controlButtonsStyles.controlButton}
        onPress={onReset}
        android_ripple={{ color: '#ccc' }}
      >
        <Text style={controlButtonsStyles.buttonText}>Reset</Text>
      </PressableAny>
      
      <PressableAny
        style={controlButtonsStyles.controlButton}
        onPress={onRevert}
        android_ripple={{ color: '#ccc' }}
      >
        <Text style={controlButtonsStyles.buttonText}>Revert</Text>
      </PressableAny>
      
      <PressableAny
        style={controlButtonsStyles.controlButton}
        onPress={onDice}
        android_ripple={{ color: '#ccc' }}
      >
        <Text style={controlButtonsStyles.buttonText}>Dice Roll</Text>
      </PressableAny>
    </View>
  );
}
