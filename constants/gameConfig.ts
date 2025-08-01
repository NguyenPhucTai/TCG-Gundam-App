// Game configuration constants
export const GAME_CONFIG = {
  // Resource limits
  MIN_RESOURCE: 0,
  MAX_RESOURCE: 10,
  MIN_EX_RESOURCE: 0,
  MAX_EX_RESOURCE: 5,
  MAX_LEVEL: 10,
  
  // Game mechanics
  FIRST_TURN_EX_RESOURCE_BONUS: 1,
  NEXT_TURN_MAX_RESOURCE_INCREMENT: 1,
  
  // Dice
  DICE_MIN: 1,
  DICE_MAX: 6,
  
  // UI timing
  POPUP_TRANSITION_DELAY: 100,
} as const;
