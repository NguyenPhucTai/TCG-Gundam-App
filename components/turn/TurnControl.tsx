import React from 'react';
import { View } from 'react-native';
import { turnControlStyles } from './TurnControl.styles';
import TurnButton from './TurnButton';

// Props for TurnControl: callback when player triggers next turn
export interface TurnControlProps {
  onNextTurn: (playerKey: 'firstPlayer' | 'secondPlayer') => void;
}

const TurnControl: React.FC<TurnControlProps> = ({ onNextTurn }) => (
  <View style={turnControlStyles.container}>
    <TurnButton
      label="Player 1 Next Turn"
      onPress={() => onNextTurn('firstPlayer')}
    />
    <TurnButton
      label="Player 2 Next Turn"
      onPress={() => onNextTurn('secondPlayer')}
    />
  </View>
);
export default TurnControl;
