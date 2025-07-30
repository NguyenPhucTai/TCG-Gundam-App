import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import {
  initGameState,
  nextTurn,
  updateStat,
  revertState,
  resetGame,
  rollDice,
} from '../util/gameLogic';
import PlayerSection from '../components/player/PlayerSection';
import TurnControl from '../components/turn/TurnControl';
import ControlButtons from '../components/control/ControlButtons';
import { appStyles } from './index.styles';

export default function App() {
  const [gameState, setGameState] = useState(initGameState());

  const handleUpdateStat = (
    playerKey: 'firstPlayer' | 'secondPlayer',
    statType: 'resource' | 'exResource',
    newValue: number
  ) => {
    setGameState(prev => updateStat(prev, playerKey, statType, newValue));
  };
  
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
      <View style={appStyles.turnArea}>
        <TurnControl onNextTurn={handleNextTurn} />
      </View>
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
