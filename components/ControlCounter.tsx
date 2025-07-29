import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { controlCounterStyles } from './ControlCounter.styles';
import Button from './Button';

interface ControlCounterProps {
  label: string;
  initialValue?: number;
}

export default function ControlCounter({ label, initialValue = 0 }: ControlCounterProps) {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    setValue(prev => prev + 1);
  };

  const handleDecrement = () => {
    setValue(prev => Math.max(0, prev - 1));
  };

  return (
    <View style={controlCounterStyles.container}>
      <Text style={controlCounterStyles.label}>{label}</Text>
      <View style={controlCounterStyles.counterContainer}>
        <View style={controlCounterStyles.valueBox}>
          <Text style={controlCounterStyles.valueText}>{value}</Text>
        </View>
        <View style={controlCounterStyles.buttonContainer}>
          <View style={controlCounterStyles.controlButton}>
            <Text 
              style={controlCounterStyles.buttonText}
              onPress={handleIncrement}
              suppressHighlighting={true}
            >
              +
            </Text>
          </View>
          <View style={controlCounterStyles.controlButton}>
            <Text 
              style={controlCounterStyles.buttonText}
              onPress={handleDecrement}
              suppressHighlighting={true}
            >
              -
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
