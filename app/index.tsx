import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

interface PlayerState {
  resource: number;
  exResource: number;
  level: number;
}

interface GameHistory {
  timestamp: string;
  action: string;
  player: string;
  changes: Partial<PlayerState>;
}

export default function GameScreen() {
  const [player1, setPlayer1] = useState<PlayerState>({
    resource: 10,
    exResource: 5,
    level: 15,
  });

  const [player2, setPlayer2] = useState<PlayerState>({
    resource: 10,
    exResource: 5,
    level: 15,
  });

  const [gameHistory, setGameHistory] = useState<GameHistory[]>([]);

  // Utility function to add to game history
  const addToHistory = (action: string, player: string, changes: Partial<PlayerState>) => {
    const newEntry: GameHistory = {
      timestamp: new Date().toLocaleTimeString(),
      action,
      player,
      changes,
    };
    setGameHistory(prev => [...prev, newEntry]);
  };

  // Player 1 Functions
  const updatePlayer1Resource = (increment: boolean) => {
    const change = increment ? 1 : -1;
    setPlayer1(prev => {
      const newValue = Math.max(0, prev.resource + change);
      addToHistory(
        increment ? 'Add Resource' : 'Remove Resource',
        'Player 1',
        { resource: newValue }
      );
      return { ...prev, resource: newValue };
    });
  };

  const updatePlayer1ExResource = (increment: boolean) => {
    const change = increment ? 1 : -1;
    setPlayer1(prev => {
      const newValue = Math.max(0, prev.exResource + change);
      addToHistory(
        increment ? 'Add Ex Resource' : 'Remove Ex Resource',
        'Player 1',
        { exResource: newValue }
      );
      return { ...prev, exResource: newValue };
    });
  };

  // Player 2 Functions
  const updatePlayer2Resource = (increment: boolean) => {
    const change = increment ? 1 : -1;
    setPlayer2(prev => {
      const newValue = Math.max(0, prev.resource + change);
      addToHistory(
        increment ? 'Add Resource' : 'Remove Resource',
        'Player 2',
        { resource: newValue }
      );
      return { ...prev, resource: newValue };
    });
  };

  const updatePlayer2ExResource = (increment: boolean) => {
    const change = increment ? 1 : -1;
    setPlayer2(prev => {
      const newValue = Math.max(0, prev.exResource + change);
      addToHistory(
        increment ? 'Add Ex Resource' : 'Remove Ex Resource',
        'Player 2',
        { exResource: newValue }
      );
      return { ...prev, exResource: newValue };
    });
  };

  // Control Functions
  const resetGame = () => {
    Alert.alert(
      'Reset Game',
      'Are you sure you want to reset all values?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setPlayer1({ resource: 10, exResource: 5, level: 15 });
            setPlayer2({ resource: 10, exResource: 5, level: 15 });
            setGameHistory([]);
            addToHistory('Reset Game', 'System', {});
          },
        },
      ]
    );
  };

  const revertLastAction = () => {
    if (gameHistory.length === 0) {
      Alert.alert('No actions to revert');
      return;
    }

    // Remove last action from history
    const newHistory = gameHistory.slice(0, -1);
    setGameHistory(newHistory);

    // This is a simplified revert - in a real app you'd need more complex logic
    Alert.alert('Last action reverted');
  };

  const showLog = () => {
    if (gameHistory.length === 0) {
      Alert.alert('Game Log', 'No actions recorded yet');
      return;
    }

    const logText = gameHistory
      .slice(-5) // Show last 5 actions
      .map(entry => `${entry.timestamp}: ${entry.player} - ${entry.action}`)
      .join('\n');

    Alert.alert('Game Log (Last 5 actions)', logText);
  };

  const renderPlayerSection = (
    playerName: string,
    playerState: PlayerState,
    updateResource: (increment: boolean) => void,
    updateExResource: (increment: boolean) => void
  ) => (
    <View style={styles.playerSection}>
      <Text style={styles.playerName}>{playerName}</Text>
      
      <View style={styles.statsContainer}>
        {/* Resource */}
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Resource</Text>
          <Text style={styles.statValue}>{playerState.resource.toString().padStart(2, '0')}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.adjustButton} 
              onPress={() => updateResource(true)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.adjustButton} 
              onPress={() => updateResource(false)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Ex Resource */}
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Ex Resource</Text>
          <Text style={styles.statValue}>{playerState.exResource.toString().padStart(2, '0')}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.adjustButton} 
              onPress={() => updateExResource(true)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.adjustButton} 
              onPress={() => updateExResource(false)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Level */}
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Level</Text>
          <Text style={styles.statValue}>{playerState.level.toString().padStart(2, '0')}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.gameArea}>
        {renderPlayerSection('Player 1', player1, updatePlayer1Resource, updatePlayer1ExResource)}
        {renderPlayerSection('Player 2', player2, updatePlayer2Resource, updatePlayer2ExResource)}
      </View>

      <View style={styles.controlArea}>
        <TouchableOpacity style={styles.controlButton} onPress={resetGame}>
          <Text style={styles.controlButtonText}>Reset</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.controlButton} onPress={revertLastAction}>
          <Text style={styles.controlButtonText}>Revert</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.controlButton} onPress={showLog}>
          <Text style={styles.controlButtonText}>Show Log</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    flexDirection: 'row',
    padding: 20,
  },
  gameArea: {
    flex: 3,
    paddingRight: 20,
  },
  controlArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  playerSection: {
    flex: 1,
    marginBottom: 20,
  },
  playerName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  statBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    position: 'relative',
  },
  statLabel: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '500',
  },
  statValue: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -25 }],
  },
  adjustButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    width: 30,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  controlButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
