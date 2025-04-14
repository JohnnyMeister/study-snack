import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Brain, Fire, Star } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning! 👋</Text>
          <View style={styles.streakContainer}>
            <Fire size={20} color="#FF3B30" />
            <Text style={styles.streakText}>5 day streak</Text>
          </View>
        </View>

        <View style={styles.dailySnackCard}>
          <View style={styles.cardHeader}>
            <Brain size={24} color="#007AFF" />
            <Text style={styles.cardTitle}>Today's Snack</Text>
          </View>
          <Text style={styles.snackTopic}>Introduction to Photosynthesis</Text>
          <Text style={styles.snackDescription}>
            Learn how plants convert sunlight into energy in this 3-minute lesson.
          </Text>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Learning</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Star size={20} color="#FFD700" />
            <Text style={styles.statNumber}>1,250</Text>
            <Text style={styles.statLabel}>XP Earned</Text>
          </View>
          <View style={styles.statCard}>
            <Brain size={20} color="#007AFF" />
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Topics Mastered</Text>
          </View>
          <View style={styles.statCard}>
            <Fire size={20} color="#FF3B30" />
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#000000',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE5E5',
    padding: 8,
    borderRadius: 20,
  },
  streakText: {
    marginLeft: 4,
    fontFamily: 'Inter-SemiBold',
    color: '#FF3B30',
  },
  dailySnackCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 16,
    padding: 20,
    ...Platform.select({
      web: {
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    marginLeft: 8,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#007AFF',
  },
  snackTopic: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#000000',
    marginBottom: 8,
  },
  snackDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    ...Platform.select({
      web: {
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
    }),
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#000000',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    marginTop: 4,
    textAlign: 'center',
  },
});