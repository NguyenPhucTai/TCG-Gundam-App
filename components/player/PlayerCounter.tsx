import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { CounterProps } from '../../models';
import { counterStyles } from './PlayerCounter.styles';

// workaround for TSX Pressable typing
const PressableAny: any = Pressable;

export default function PlayerCounter({ 
  label, 
  value,
  hasButtons = false,
  formatValue = (value) => value.toString(),
  onIncrement,
  onDecrement
}: CounterProps) {
  const isExResource = label.toLowerCase().includes('ex');

  return (
    <View style={counterStyles.statBox}>
      <Text style={isExResource ? counterStyles.statLabelExResource : counterStyles.statLabel}>
        {label}
      </Text>
      <View style={counterStyles.counterContainer}>
        <View style={isExResource ? counterStyles.valueBoxExResource : counterStyles.valueBox}>
          <Text style={isExResource ? counterStyles.valueTextExResource : counterStyles.valueText}>
            {formatValue(value)}
          </Text>
        </View>
        
        {hasButtons && (
          <View style={counterStyles.buttonContainer}>
            <PressableAny
              style={isExResource ? counterStyles.controlButtonExResource : counterStyles.controlButton}
              onPress={onIncrement}
              android_ripple={{ color: '#ccc' }}
            >
              <Text style={counterStyles.buttonText}>+</Text>
            </PressableAny>
            <PressableAny
              style={isExResource ? counterStyles.controlButtonExResource : counterStyles.controlButton}
              onPress={onDecrement}
              android_ripple={{ color: '#ccc' }}
            >
              <Text style={counterStyles.buttonText}>-</Text>
            </PressableAny>
          </View>
        )}
      </View>
    </View>
  );
}
