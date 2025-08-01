// Dice and random utilities
import { GAME_CONFIG } from '../../constants/gameConfig';

// Roll dice (1 to 6)
export function rollDice(): number {
  return Math.floor(Math.random() * GAME_CONFIG.DICE_MAX) + GAME_CONFIG.DICE_MIN;
}
