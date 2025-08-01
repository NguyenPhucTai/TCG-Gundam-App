// Popup and alert messages
export const POPUP_MESSAGES = {
  RESET_CONFIRMATION: 'Are you sure you want to reset the game? All data will be lost.',
  REVERT_CONFIRMATION: 'Do you want to revert to the previous state?',
  DICE_CONFIRMATION: 'Do you want to roll the dice?',
  LEVEL_UP_CONFIRMATION: 'Do you want to level up the current player?',
  
  // Error messages
  ALTERNATING_TURNS_ERROR: 'You must alternate turns between players',
  NO_TURN_TAKEN_ERROR: 'No player has taken a turn yet',
  MAX_LEVEL_ERROR: 'Player is already at maximum level',
  
  // Dice result template
  DICE_RESULT: (result: number) => `You rolled: ${result}`,
} as const;

// Button texts
export const BUTTON_TEXTS = {
  CANCEL: 'Cancel',
  ACCEPT: 'Accept',
  OK: 'OK',
  RESET: 'Reset',
  REVERT: 'Revert',
  DICE_ROLL: 'Dice Roll',
  LEVEL_UP: 'Level Up',
  PLAYER_1_NEXT_TURN: 'Player 1 Next Turn',
  PLAYER_2_NEXT_TURN: 'Player 2 Next Turn',
  PLUS: '+',
  MINUS: '-',
} as const;
