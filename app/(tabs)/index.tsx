import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const mockGames = [
  { id: '1', name: 'TCG Gundam Battle', date: '2025-07-29', players: ['Player 1', 'Player 2'] },
  { id: '2', name: 'Board Game Night', date: '2025-07-28', players: ['Alice', 'Bob', 'Charlie'] },
];

export default function GamesScreen() {
  const renderGameItem = ({ item }: { item: typeof mockGames[0] }) => (
    <TouchableOpacity style={styles.gameCard}>
      <Text style={styles.gameName}>{item.name}</Text>
      <Text style={styles.gameDate}>{item.date}</Text>
      <Text style={styles.gamePlayers}>{item.players.join(', ')}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game History</Text>
      <FlatList
        data={mockGames}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id}
        style={styles.gameList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  gameList: {
    flex: 1,
  },
  gameCard: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  gameDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  gamePlayers: {
    fontSize: 14,
    color: '#007AFF',
  },
});
