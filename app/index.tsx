import React, { useState } from 'react';
import { View, Alert } from 'react-native';
// ...existing imports removed...
import {
  initGameState,
  nextTurn,
  updateStat,
  revertState,
  resetGame,
  rollDice,
} from '../util/gameLogic';
import PlayerSection from '../components/PlayerSection';
import TurnControl from '../components/TurnControl';
import ControlButtons from '../components/ControlButtons';
import { appStyles } from './index.styles';

export default function App() {
  // Manage full game state including history
  const [gameState, setGameState] = useState(initGameState());

  // Update resource/exResource with clamping and history
  const handleUpdateStat = (
    playerKey: 'firstPlayer' | 'secondPlayer',
    statType: 'resource' | 'exResource',
    newValue: number
  ) => {
    setGameState(prev => updateStat(prev, playerKey, statType, newValue));
  };
  // Handle Next Turn button press
  const handleNextTurn = (playerKey: 'firstPlayer' | 'secondPlayer'): void => {
    setGameState(prev => nextTurn(prev, playerKey));
  };

  const handleReset = () => {
    setGameState(resetGame());
  };

  const handleRevert = () => {
    Alert.alert('Revert', 'Are you sure you want to revert to the previous state?', [
      { text: 'Cancel' },
      { text: 'Agree', onPress: () => setGameState(prev => revertState(prev)) },
    ]);
  };

  const handleDice = () => {
    const result = rollDice();
    Alert.alert('Dice Roll', `You rolled: ${result}`);
  };

  return (
    <View style={appStyles.container}>
      {/* Turn Control Area - Bên trái ngoài cùng */}
      <View style={appStyles.turnArea}>
        <TurnControl onNextTurn={handleNextTurn} />
      </View>

      {/* Game Area with both players - Ở giữa màn hình */}
      <View style={appStyles.gameArea}>
        <PlayerSection
          player={{ id: 'player1', name: 'Player 1', ...gameState.firstPlayer }}
          onResourceChange={(playerId, type, newValue) =>
            handleUpdateStat('firstPlayer', type, newValue)
          }
          isActive={gameState.lastTurn === 'firstPlayer'}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 0 }}
        />
        <PlayerSection
          player={{ id: 'player2', name: 'Player 2', ...gameState.secondPlayer }}
          onResourceChange={(playerId, type, newValue) =>
            handleUpdateStat('secondPlayer', type, newValue)
          }
          isActive={gameState.lastTurn === 'secondPlayer'}
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTopWidth: 0 }}
        />
      </View>

      {/* Control Buttons - Bên phải màn hình */}
      <View style={appStyles.controlArea}>
        <ControlButtons
          onReset={handleReset}
          onRevert={handleRevert}
          onDice={handleDice}
        />
      </View>
    </View>
  );
}
