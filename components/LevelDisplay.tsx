import React from 'react';
import { View, Text } from 'react-native';
import { levelDisplayStyles } from './LevelDisplay.styles';

export interface LevelDisplayProps {
  value: number;
}

export default function LevelDisplay({ value }: LevelDisplayProps) {
  return (
    <View style={levelDisplayStyles.container}>
      <Text style={levelDisplayStyles.label}>Level</Text>
      <Text style={levelDisplayStyles.value}>{value.toString()}</Text>
    </View>
  );
}
