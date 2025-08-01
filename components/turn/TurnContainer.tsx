import React from 'react';
import { View } from 'react-native';
import { BUTTON_TEXTS } from '../../constants';
import { turnContainerStyles } from './TurnContainer.styles';
import TurnButton from './TurnButton';

// Props for TurnSection: callback when player triggers next turn
export interface TurnContainerProps {
  onNextTurn: (playerKey: 'firstPlayer' | 'secondPlayer') => void;
}

const TurnContainer: React.FC<TurnContainerProps> = ({ onNextTurn }) => (
  <View style={turnContainerStyles.container}>
    <TurnButton
      label={BUTTON_TEXTS.PLAYER_1_NEXT_TURN}
      onPress={() => onNextTurn('firstPlayer')}
    />
    <TurnButton
      label={BUTTON_TEXTS.PLAYER_2_NEXT_TURN}
      onPress={() => onNextTurn('secondPlayer')}
    />
  </View>
);
export default TurnContainer;
