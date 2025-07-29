import { Player } from './Player';
import { GameAction } from './GameAction';

// Interface for Game state
export interface GameState {
  players: Player[];
  history: GameAction[];
}
