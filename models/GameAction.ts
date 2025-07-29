// Interface for game action history entries
export interface GameAction {
  id: string;
  timestamp: number;
  playerId: string;
  actionType: 'increment' | 'decrement' | 'reset';
  statType: 'resource' | 'exResource' | 'level';
  previousValue: number;
  newValue: number;
}
