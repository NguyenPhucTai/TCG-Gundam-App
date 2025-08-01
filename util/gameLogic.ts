import { GameState } from '../models/GameState';
import { GameSnapshot } from '../models/GameSnapshot';
import { PlayerState } from '../models/PlayerState';

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
function deepClone<T>(obj: T): T {
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

// Next turn for given player ('firstPlayer' or 'secondPlayer')
export function nextTurn(
  state: GameState,
  playerKey: 'firstPlayer' | 'secondPlayer'
): GameActionResult {
  // Enforce alternating turns: prevent same player twice
  if (state.lastTurn === playerKey) {
    return {
      state,
      error: 'You must alternate turns between players'
    };
  }
  const newFirst = deepClone(state.firstPlayer);
  const newSecond = deepClone(state.secondPlayer);
  // First next-turn: grant other player +1 exResource
  if (state.history.length === 1) {
    const other = playerKey === 'firstPlayer' ? newSecond : newFirst;
    other.exResource = Math.min(5, other.exResource + 1);
    other.level = other.maxResource + other.exResource;
  }
  const target = playerKey === 'firstPlayer' ? newFirst : newSecond;
  // Check difference constraint before applying
  const otherMax = playerKey === 'firstPlayer' ? newSecond.maxResource : newFirst.maxResource;
  // Calculate new maxResource, clamped to 10
  let newMax = target.maxResource + 1;
  if (newMax > 10) {
    newMax = 10;
  }
  // Apply increment safely
  target.maxResource = newMax;
  // Limit displayed resource to 10 regardless of maxResource
  target.resource = Math.min(target.maxResource, 10);
  target.level = target.maxResource + target.exResource;
  const newState: GameState = {
    firstPlayer: newFirst,
    secondPlayer: newSecond,
    history: [...state.history],
    lastTurn: playerKey,
  };
  const newIndex = newState.history.length;
  const newSnapshot: GameSnapshot = { firstPlayer: newFirst, secondPlayer: newSecond };
  newState.history.push({ index: newIndex, snapshot: newSnapshot, lastTurn: playerKey });
  return { state: newState };
}

// Update resource or exResource for a player, clamp within bounds, recalc level and record history
export function updateStat(
  state: GameState,
  playerKey: 'firstPlayer' | 'secondPlayer',
  statType: 'resource' | 'exResource',
  newValue: number
): GameState {
  const newFirst = deepClone(state.firstPlayer);
  const newSecond = deepClone(state.secondPlayer);
  const target = playerKey === 'firstPlayer' ? newFirst : newSecond;
  // Clamp new value based on statType
  if (statType === 'resource') {
    // resource between 0 and 10
    target.resource = Math.max(0, Math.min(newValue, 10));
  } else {
    // exResource between 0 and 5
    target.exResource = Math.max(0, Math.min(newValue, 5));
    // Recalculate level: maxResource + exResource
    target.level = target.maxResource + target.exResource;
  }
  // Only update stats without affecting history (only nextTurn records history)
  return {
    firstPlayer: newFirst,
    secondPlayer: newSecond,
    history: state.history,
    lastTurn: state.lastTurn,
  };
}

// Revert to previous state, returns new GameState
export function revertState(state: GameState): GameState {
  if (state.history.length <= 1) return state;
  const newHistory = state.history.slice(0, -1);
  const lastEntry = newHistory[newHistory.length - 1];
  const restoredFirst = deepClone(lastEntry.snapshot.firstPlayer);
  const restoredSecond = deepClone(lastEntry.snapshot.secondPlayer);
  // Restore lastTurn from history
  const restoredLast = lastEntry.lastTurn;
  return { firstPlayer: restoredFirst, secondPlayer: restoredSecond, history: newHistory, lastTurn: restoredLast };
}

// Reset the game to initial state
export function resetGame(): GameState {
  return initGameState();
}

// Level up the current player (increase maxResource by 1)
export function levelUp(state: GameState): GameActionResult {
  if (!state.lastTurn) {
    return {
      state,
      error: 'No player has taken a turn yet'
    };
  }
  
  const newFirst = deepClone(state.firstPlayer);
  const newSecond = deepClone(state.secondPlayer);
  const target = state.lastTurn === 'firstPlayer' ? newFirst : newSecond;
  
  // Check if already at max
  if (target.maxResource >= 10) {
    return {
      state,
      error: 'Player is already at maximum level'
    };
  }
  
  // Increase maxResource by 1
  target.maxResource += 1;
  target.level = target.maxResource + target.exResource;
  
  // Update resource if needed
  target.resource = Math.min(target.resource, target.maxResource);
  
  return {
    state: {
      firstPlayer: newFirst,
      secondPlayer: newSecond,
      history: state.history,
      lastTurn: state.lastTurn,
    }
  };
}

// Roll dice (1 to 6)
export function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}
