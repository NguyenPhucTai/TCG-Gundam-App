import { View, Text } from 'react-native';
import { PlayerSectionProps } from '../../models';
import { LABELS } from '../../constants';
import PlayerCounter from './PlayerCounter';
import PlayerLevel from './PlayerLevel';
import { playerContainerStyles } from './PlayerContainer.styles';

export default function PlayerContainer({ player, onResourceChange, style, isActive }: PlayerSectionProps) {
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
    <View style={[playerContainerStyles.playerSection, style]}>
      <Text style={playerContainerStyles.playerName}>{player.name}</Text>
      
      <View style={playerContainerStyles.statsContainer}>
        <PlayerCounter
          label={LABELS.RESOURCE}
          value={player.resource}
          hasButtons={true}
          onIncrement={handleResourceIncrement}
          onDecrement={handleResourceDecrement}
        />
        <PlayerCounter
          label={LABELS.EX_RESOURCE}
          value={player.exResource}
          hasButtons={true}
          formatValue={formatExResource}
          onIncrement={handleExResourceIncrement}
          onDecrement={handleExResourceDecrement}
        />
        <PlayerLevel value={player.level} highlight={isActive} />
      </View>
    </View>
  );
}
