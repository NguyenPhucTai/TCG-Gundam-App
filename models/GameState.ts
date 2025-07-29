import { PlayerState } from './PlayerState';
import { HistoryEntry } from './HistoryEntry';

// Interface for overall game state including history
export interface GameState {
  firstPlayer: PlayerState;
  secondPlayer: PlayerState;
  history: HistoryEntry[];
  // last player who took a turn; used to enforce alternation
  lastTurn: 'firstPlayer' | 'secondPlayer' | null;
}
