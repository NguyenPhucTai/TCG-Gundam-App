import React from 'react';
import { View } from 'react-native';
import { turnContainerStyles } from './TurnContainer.styles';
import TurnButton from './TurnButton';

// Props for TurnSection: callback when player triggers next turn
export interface TurnContainerProps {
  onNextTurn: (playerKey: 'firstPlayer' | 'secondPlayer') => void;
}

const TurnContainer: React.FC<TurnContainerProps> = ({ onNextTurn }) => (
  <View style={turnContainerStyles.container}>
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
export default TurnContainer;
