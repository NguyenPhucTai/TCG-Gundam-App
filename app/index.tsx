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
} from '../util/game';
import { POPUP_MESSAGES, BUTTON_TEXTS, LABELS } from '../constants';
import { GAME_CONFIG } from '../constants/gameConfig';
import PlayerContainer from '../components/player/PlayerContainer';
import TurnContainer from '../components/turn/TurnContainer';
import ControlContainer from '../components/control/ControlContainer';
import Popup from '../components/common/Popup';
import DicePopup from '../components/common/DicePopup';
import { appStyles } from './index.styles';

export default function HomeScreen() {
  const [gameState, setGameState] = useState(initGameState());
  const [popup, setPopup] = useState({
    visible: false,
    message: '',
    action: null as (() => void) | null,
    showAcceptButton: true,
  });
  const [dicePopup, setDicePopup] = useState({
    visible: false,
    result: 0,
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

  const showDicePopup = (result: number) => {
    setDicePopup({
      visible: true,
      result,
    });
  };

  const hideDicePopup = () => {
    setDicePopup({
      visible: false,
      result: 0,
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
      POPUP_MESSAGES.RESET_CONFIRMATION,
      () => setGameState(resetGame())
    );
  };

  const handleRevert = () => {
    if (gameState.history.length > 1) {
      showPopup(
        POPUP_MESSAGES.REVERT_CONFIRMATION,
        () => setGameState(prev => revertState(prev))
      );
    }
  };

  const handleDice = () => {
    const result = rollDice();
    showDicePopup(result);
  };

  const handleLevelUp = () => {
    showPopup(
      POPUP_MESSAGES.LEVEL_UP_CONFIRMATION,
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
          player={{ id: 'player1', name: LABELS.PLAYER_1, ...gameState.firstPlayer }}
          onResourceChange={(playerId, type, newValue) =>
            handleUpdateStat('firstPlayer', type, newValue)
          }
          isActive={gameState.lastTurn === 'firstPlayer'}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 0 }}
        />
        <PlayerContainer
          player={{ id: 'player2', name: LABELS.PLAYER_2, ...gameState.secondPlayer }}
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
      <DicePopup
        visible={dicePopup.visible}
        diceResult={dicePopup.result}
        onClose={hideDicePopup}
      />
    </View>
  );
}
