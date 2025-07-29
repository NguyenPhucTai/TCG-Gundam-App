import React, { useState, useEffect, FC } from 'react';
import { View, Text } from 'react-native';
import { turnControlStyles } from './TurnControl.styles';
import Button from './Button';

interface TurnControlProps {
  resetKey: number;
}
const TurnControl: FC<TurnControlProps> = ({ resetKey }) => {
  const [turn, setTurn] = useState(0);
  // Reset turn when resetKey changes
  useEffect(() => {
    setTurn(0);
  }, [resetKey]);

  const handleIncrement = () => {
    setTurn(prev => prev + 1);
  };
  const handleDecrement = () => {
    setTurn(prev => Math.max(0, prev - 1));
  };

  return (
    <View style={turnControlStyles.container}>
      <Text style={turnControlStyles.label}>Turn</Text>
      <Text style={turnControlStyles.turnValue}>{turn.toString()}</Text>
      <Button variant="secondary" onPress={handleIncrement}>
        +
      </Button>
      <Button variant="secondary" onPress={handleDecrement}>
        -
      </Button>
    </View>
  );
};
export default TurnControl;
