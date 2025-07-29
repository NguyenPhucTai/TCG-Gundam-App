import React, { useState } from 'react';
import { View } from 'react-native';
import { Player, GameState } from '../models';
import PlayerSection from '../components/PlayerSection';
import TurnControl from '../components/TurnControl';
import ControlButtons from '../components/ControlButtons';
import { appStyles } from './index.styles';

export default function App() {
  // Initial player data
  const initialPlayer1: Player = { id: 'player1', name: 'Player 1', resource: 0, exResource: 0, level: 0 };
  const initialPlayer2: Player = { id: 'player2', name: 'Player 2', resource: 0, exResource: 0, level: 0 };
  const [player1, setPlayer1] = useState<Player>(initialPlayer1);
  const [player2, setPlayer2] = useState<Player>(initialPlayer2);
  const [history, setHistory] = useState<GameState['history']>([]);
  // Key to trigger turn reset
  const [resetKey, setResetKey] = useState(0);

  const handleResourceChange1 = (_playerId: string, type: 'resource' | 'exResource', newValue: number) => {
    setPlayer1(prev => ({ ...prev, [type]: newValue }));
  };
  const handleResourceChange2 = (_playerId: string, type: 'resource' | 'exResource', newValue: number) => {
    setPlayer2(prev => ({ ...prev, [type]: newValue }));
  };

  const handleReset = () => {
    setPlayer1(initialPlayer1);
    setPlayer2(initialPlayer2);
    setHistory([]);
    setResetKey(prev => prev + 1);
  };

  const handleRevert = () => {
    // TODO: Implement revert functionality using history
    console.log('Revert functionality to be implemented');
  };

  const handleShowLog = () => {
    // TODO: Implement show log functionality
    console.log('Show log functionality to be implemented');
  };

  return (
    <View style={appStyles.container}>
      {/* Turn Control Area - Bên trái ngoài cùng */}
      <View style={appStyles.turnArea}>
        <TurnControl resetKey={resetKey} />
      </View>

      {/* Game Area with both players - Ở giữa màn hình */}
      <View style={appStyles.gameArea}>
        <PlayerSection
          player={player1}
          onResourceChange={handleResourceChange1}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 0 }}
        />
        <PlayerSection
          player={player2}
          onResourceChange={handleResourceChange2}
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTopWidth: 0 }}
        />
      </View>

      {/* Control Buttons - Bên phải màn hình */}
      <View style={appStyles.controlArea}>
        <ControlButtons
          onReset={handleReset}
          onRevert={handleRevert}
          onShowLog={handleShowLog}
        />
      </View>
    </View>
  );
}
