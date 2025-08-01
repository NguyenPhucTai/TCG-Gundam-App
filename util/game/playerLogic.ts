// Player stats and level management
import { GameState } from '../../models/GameState';
import { GAME_CONFIG } from '../../constants/gameConfig';
import { POPUP_MESSAGES } from '../../constants/messages';
import { GameActionResult, deepClone } from './gameState';

// Update resource or exResource for a player, clamp within bounds, recalc level
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
    target.resource = Math.max(
      GAME_CONFIG.MIN_RESOURCE, 
      Math.min(newValue, GAME_CONFIG.MAX_RESOURCE)
    );
  } else {
    target.exResource = Math.max(
      GAME_CONFIG.MIN_EX_RESOURCE, 
      Math.min(newValue, GAME_CONFIG.MAX_EX_RESOURCE)
    );
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

// Level up the current player (increase maxResource by 1)
export function levelUp(state: GameState): GameActionResult {
  if (!state.lastTurn) {
    return {
      state,
      error: POPUP_MESSAGES.NO_TURN_TAKEN_ERROR
    };
  }
  
  const newFirst = deepClone(state.firstPlayer);
  const newSecond = deepClone(state.secondPlayer);
  const target = state.lastTurn === 'firstPlayer' ? newFirst : newSecond;
  
  // Check if already at max
  if (target.maxResource >= GAME_CONFIG.MAX_LEVEL) {
    return {
      state,
      error: POPUP_MESSAGES.MAX_LEVEL_ERROR
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
