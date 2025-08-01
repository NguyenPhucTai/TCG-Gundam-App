import { useState } from 'react';
import { View, Alert } from 'react-native';
import {
  initGameState,
  nextTurn,
  updateStat,
  revertState,
  resetGame,
  rollDice,
  levelUp,
} from '../util/gameLogic';
import PlayerContainer from '../components/player/PlayerContainer';
import TurnContainer from '../components/turn/TurnContainer';
import ControlContainer from '../components/control/ControlContainer';
import { appStyles } from './index.styles';

export default function HomeScreen() {
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
    if (gameState.history.length > 1) {
      Alert.alert(
        'Confirm Revert',
        'Hoàn tác sẽ quay về trạng thái trước đó. Bạn có chắc chắn?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Accept', onPress: () => setGameState(prev => revertState(prev)) },
        ]
      );
    }
  };

  const handleDice = () => {
    const result = rollDice();
    Alert.alert('Dice Roll', `You rolled: ${result}`);
  };

  const handleLevelUp = () => {
    setGameState(prev => levelUp(prev));
  };

  return (
    <View style={appStyles.container}>
      <View style={appStyles.turnArea}>
        <TurnContainer onNextTurn={handleNextTurn} />
      </View>
      <View style={appStyles.gameArea}>
      <PlayerContainer
          player={{ id: 'player1', name: 'Player 1', ...gameState.firstPlayer }}
          onResourceChange={(playerId, type, newValue) =>
            handleUpdateStat('firstPlayer', type, newValue)
          }
          isActive={gameState.lastTurn === 'firstPlayer'}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 0 }}
        />
        <PlayerContainer
          player={{ id: 'player2', name: 'Player 2', ...gameState.secondPlayer }}
          onResourceChange={(playerId, type, newValue) =>
            handleUpdateStat('secondPlayer', type, newValue)
          }
          isActive={gameState.lastTurn === 'secondPlayer'}
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTopWidth: 0 }}
        />
      </View>
      <View style={appStyles.controlArea}>
        <ControlContainer
          onReset={handleReset}
          onRevert={handleRevert}
          onDice={handleDice}
          onLevelUp={handleLevelUp}
        />
      </View>
    </View>
  );
}
