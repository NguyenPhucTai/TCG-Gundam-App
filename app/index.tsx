import { useState } from 'react';
import { View } from 'react-native';
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
import Popup from '../components/common/Popup';
import { appStyles } from './index.styles';

export default function HomeScreen() {
  const [gameState, setGameState] = useState(initGameState());
  const [popup, setPopup] = useState({
    visible: false,
    message: '',
    action: null as (() => void) | null,
    showAcceptButton: true,
  });

  const showPopup = (message: string, action: () => void) => {
    setPopup({
      visible: true,
      message,
      action,
      showAcceptButton: true,
    });
  };

  const showInfoPopup = (message: string) => {
    setPopup({
      visible: true,
      message,
      action: null,
      showAcceptButton: false,
    });
  };

  const handlePopupAccept = () => {
    const currentAction = popup.action;
    
    setPopup({ visible: false, message: '', action: null, showAcceptButton: true });
    
    if (currentAction) {
      setTimeout(() => {
        currentAction();
      }, 100);
    }
  };

  const handlePopupCancel = () => {
    setPopup({ visible: false, message: '', action: null, showAcceptButton: true });
  };

  const handleUpdateStat = (
    playerKey: 'firstPlayer' | 'secondPlayer',
    statType: 'resource' | 'exResource',
    newValue: number
  ) => {
    setGameState(prev => updateStat(prev, playerKey, statType, newValue));
  };

  const handleNextTurn = (playerKey: 'firstPlayer' | 'secondPlayer'): void => {
    const result = nextTurn(gameState, playerKey);
    if (result.error) {
      showInfoPopup(result.error);
    } else {
      setGameState(result.state);
    }
  };

  const handleReset = () => {
    showPopup(
      'Are you sure you want to reset the game? All data will be lost.',
      () => setGameState(resetGame())
    );
  };

  const handleRevert = () => {
    if (gameState.history.length > 1) {
      showPopup(
        'Do you want to revert to the previous state?',
        () => setGameState(prev => revertState(prev))
      );
    }
  };

  const handleDice = () => {
    showPopup(
      'Do you want to roll the dice?',
      () => {
        const result = rollDice();
        showInfoPopup(`You rolled: ${result}`);
      }
    );
  };

  const handleLevelUp = () => {
    showPopup(
      'Do you want to level up the current player?',
      () => {
        const result = levelUp(gameState);
        if (result.error) {
          showInfoPopup(result.error);
        } else {
          setGameState(result.state);
        }
      }
    );
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
      <Popup
        visible={popup.visible}
        message={popup.message}
        onCancel={handlePopupCancel}
        onAccept={handlePopupAccept}
        showAcceptButton={popup.showAcceptButton}
      />
    </View>
  );
}
