import React from 'react';
import { Pressable, Text } from 'react-native';
// workaround for TSX Pressable typing
const PressableAny: any = Pressable;
import { ButtonProps } from '../models';
import { buttonStyles } from './Button.styles';

export default function Button({ 
  children, 
  onPress, 
  variant = 'primary', 
  disabled = false 
}: ButtonProps) {
  
  const handlePress = () => {
    onPress();
  };

  const getButtonStyle = () => {
    switch (variant) {
      case 'control':
        return buttonStyles.controlButton;
      case 'secondary':
        return buttonStyles.secondaryButton;
      default:
        return buttonStyles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'control':
        return buttonStyles.controlButtonText;
      case 'secondary':
        return buttonStyles.secondaryButtonText;
      default:
        return buttonStyles.primaryButtonText;
    }
  };

  return (
    <PressableAny
      style={getButtonStyle()}
      onPress={handlePress}
      android_ripple={{ color: '#ccc' }}
    >
      <Text style={getTextStyle()}> 
        {children}
      </Text>
    </PressableAny>
  );
}
