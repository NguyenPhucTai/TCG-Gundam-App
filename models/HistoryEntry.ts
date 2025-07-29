import { PlayerState } from './PlayerState';

export interface HistoryEntry {
  index: number;
  // Snapshot of players at this point
  snapshot: {
    firstPlayer: PlayerState;
    secondPlayer: PlayerState;
  };
  // Last player who took a turn at this state
  lastTurn: 'firstPlayer' | 'secondPlayer' | null;
}
