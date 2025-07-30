import React from 'react';
import { View, Text } from 'react-native';
import { PlayerSectionProps } from '../../models';
import Counter from '../counter/Counter';
import LevelDisplay from '../level/LevelDisplay';
import { playerSectionStyles } from './PlayerSection.styles';

export default function PlayerSection({ player, onResourceChange, style, isActive }: PlayerSectionProps) {
  // Format Ex Resource (display single digit for zero)
  const formatExResource = (value: number) => value.toString();

  const handleResourceIncrement = () => {
    onResourceChange(player.id, 'resource', player.resource + 1);
  };

  const handleResourceDecrement = () => {
    onResourceChange(player.id, 'resource', Math.max(0, player.resource - 1));
  };

  const handleExResourceIncrement = () => {
    onResourceChange(player.id, 'exResource', player.exResource + 1);
  };

  const handleExResourceDecrement = () => {
    onResourceChange(player.id, 'exResource', Math.max(0, player.exResource - 1));
  };

  return (
    <View style={[playerSectionStyles.playerSection, style]}>
      <Text style={playerSectionStyles.playerName}>{player.name}</Text>
      
      <View style={playerSectionStyles.statsContainer}>
        <Counter 
          label="Resource" 
          value={player.resource}
          hasButtons={true}
          onIncrement={handleResourceIncrement}
          onDecrement={handleResourceDecrement}
        />
        <Counter 
          label="Ex Resource" 
          value={player.exResource}
          hasButtons={true}
          formatValue={formatExResource}
          onIncrement={handleExResourceIncrement}
          onDecrement={handleExResourceDecrement}
        />
        <LevelDisplay value={player.level} highlight={isActive} />
      </View>
    </View>
  );
}
