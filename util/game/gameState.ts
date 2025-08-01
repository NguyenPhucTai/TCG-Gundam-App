// Base game state initialization and core types
import { GameState } from '../../models/GameState';
import { GameSnapshot } from '../../models/GameSnapshot';
import { PlayerState } from '../../models/PlayerState';

export interface GameActionResult {
  state: GameState;
  error?: string;
}

// Initialize base player state
const basePlayerState: PlayerState = {
  maxResource: 0,
  resource: 0,
  exResource: 0,
  level: 0,
};

// Deep clone helper
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// Initialize GameState with initial history entry
export function initGameState(): GameState {
  const first = deepClone(basePlayerState);
  const second = deepClone(basePlayerState);
  const initialSnapshot: GameSnapshot = { firstPlayer: first, secondPlayer: second };
  const initialState: GameState = {
    firstPlayer: first,
    secondPlayer: second,
    history: [{ index: 0, snapshot: initialSnapshot, lastTurn: null }],
    lastTurn: null,
  };
  return initialState;
}

// Reset the game to initial state
export function resetGame(): GameState {
  return initGameState();
}
