import { PlayerState } from './PlayerState';

// Snapshot of game state without history
export interface GameSnapshot {
  firstPlayer: PlayerState;
  secondPlayer: PlayerState;
}
