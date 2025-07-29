// Interface cho Player
export interface Player {
  id: string;
  name: string;
  resource: number;
  exResource: number;
  level: number;
}

// Interface cho Counter props
export interface CounterProps {
  label: string;
  value: number;
  hasButtons?: boolean;
  formatValue?: (value: number) => string;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// Interface cho Button props
export interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'control';
  disabled?: boolean;
}

// Interface cho PlayerSection props
import { ViewStyle } from 'react-native';
export interface PlayerSectionProps {
  player: Player;
  onResourceChange: (playerId: string, type: 'resource' | 'exResource', newValue: number) => void;
  style?: ViewStyle;
}

// Game state interface
export interface GameState {
  players: Player[];
  history: GameAction[];
}

// Game actions for history/revert functionality
export interface GameAction {
  id: string;
  timestamp: number;
  playerId: string;
  actionType: 'increment' | 'decrement' | 'reset';
  statType: 'resource' | 'exResource' | 'level';
  previousValue: number;
  newValue: number;
}
