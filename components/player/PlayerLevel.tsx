import { View, Text } from 'react-native';
import { LABELS } from '../../constants';
import { playerLevelStyles } from './PlayerLevel.styles';

export interface PlayerLevelProps {
  value: number;
  // If true, highlight value in red
  highlight?: boolean;
}

export default function PlayerLevel({ value, highlight = false }: PlayerLevelProps) {
  return (
    <View style={playerLevelStyles.container}>
      <Text style={playerLevelStyles.label}>{LABELS.LEVEL}</Text>
      <Text
        style={[
          playerLevelStyles.value,
          highlight && playerLevelStyles.highlightValue,
        ]}
      >
        {value.toString()}
      </Text>
    </View>
  );
}
