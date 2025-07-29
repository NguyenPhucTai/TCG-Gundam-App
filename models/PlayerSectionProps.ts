import { ViewStyle } from 'react-native';
import { Player } from './Player';

// Interface for PlayerSection component props
export interface PlayerSectionProps {
  player: Player;
  onResourceChange: (playerId: string, type: 'resource' | 'exResource', newValue: number) => void;
  style?: ViewStyle;
}
