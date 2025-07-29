import { View, Text, StyleSheet } from 'react-native';

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Statistics</Text>
      
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>12</Text>
        <Text style={styles.statLabel}>Total Games</Text>
      </View>
      
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>4</Text>
        <Text style={styles.statLabel}>Players</Text>
      </View>
      
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>156</Text>
        <Text style={styles.statLabel}>Average Score</Text>
      </View>
      
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>8</Text>
        <Text style={styles.statLabel}>Wins</Text>
      </View>
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
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  statCard: {
    backgroundColor: 'white',
    padding: 30,
    marginBottom: 15,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
});
