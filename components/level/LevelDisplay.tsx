import React from 'react';
import { View, Text } from 'react-native';
import { levelDisplayStyles } from './LevelDisplay.styles';

export interface LevelDisplayProps {
  value: number;
  // If true, highlight value in red
  highlight?: boolean;
}

export default function LevelDisplay({ value, highlight = false }: LevelDisplayProps) {
  return (
    <View style={levelDisplayStyles.container}>
      <Text style={levelDisplayStyles.label}>Level</Text>
      <Text
        style={[
          levelDisplayStyles.value,
          highlight && levelDisplayStyles.highlightValue,
        ]}
      >
        {value.toString()}
      </Text>
    </View>
  );
}
