// Turn management logic
import { GameState } from '../../models/GameState';
import { GameSnapshot } from '../../models/GameSnapshot';
import { GAME_CONFIG } from '../../constants/gameConfig';
import { POPUP_MESSAGES } from '../../constants/messages';
import { GameActionResult, deepClone } from './gameState';

// Next turn for given player ('firstPlayer' or 'secondPlayer')
export function nextTurn(
  state: GameState,
  playerKey: 'firstPlayer' | 'secondPlayer'
): GameActionResult {
  // Enforce alternating turns: prevent same player twice
  if (state.lastTurn === playerKey) {
    return {
      state,
      error: POPUP_MESSAGES.ALTERNATING_TURNS_ERROR
    };
  }
  
  const newFirst = deepClone(state.firstPlayer);
  const newSecond = deepClone(state.secondPlayer);
  
  // First next-turn: grant other player +1 exResource
  if (state.history.length === 1) {
    const other = playerKey === 'firstPlayer' ? newSecond : newFirst;
    other.exResource = Math.min(
      GAME_CONFIG.MAX_EX_RESOURCE, 
      other.exResource + GAME_CONFIG.FIRST_TURN_EX_RESOURCE_BONUS
    );
    other.level = other.maxResource + other.exResource;
  }
  
  const target = playerKey === 'firstPlayer' ? newFirst : newSecond;
  
  // Calculate new maxResource, clamped to max
  let newMax = target.maxResource + GAME_CONFIG.NEXT_TURN_MAX_RESOURCE_INCREMENT;
  if (newMax > GAME_CONFIG.MAX_LEVEL) {
    newMax = GAME_CONFIG.MAX_LEVEL;
  }
  
  // Apply increment safely
  target.maxResource = newMax;
  target.resource = target.maxResource; // Reset resource to maxResource on next turn
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
