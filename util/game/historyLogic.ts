// History and state management
import { GameState } from '../../models/GameState';
import { deepClone } from './gameState';

// Revert to previous state, returns new GameState
export function revertState(state: GameState): GameState {
  if (state.history.length <= 1) return state;
  
  const newHistory = state.history.slice(0, -1);
  const lastEntry = newHistory[newHistory.length - 1];
  const restoredFirst = deepClone(lastEntry.snapshot.firstPlayer);
  const restoredSecond = deepClone(lastEntry.snapshot.secondPlayer);
  const restoredLast = lastEntry.lastTurn;
  
  return { 
    firstPlayer: restoredFirst, 
    secondPlayer: restoredSecond, 
    history: newHistory, 
    lastTurn: restoredLast 
  };
}
