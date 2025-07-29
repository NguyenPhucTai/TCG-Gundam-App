// Interface for an individual player's state
export interface PlayerState {
  maxResource: number; // maximum resource for turn
  resource: number;    // current resource
  exResource: number;  // extra resource
  level: number;       // computed level = maxResource + exResource
}
