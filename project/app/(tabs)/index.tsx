import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { CloudLightning as Lightning, Brain, Clock } from 'lucide-react-native';

export default function TodayScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning! 👋</Text>
        <Text style={styles.streak}>🔥 5 day streak</Text>
      </View>

      <View style={styles.dailySnack}>
        <View style={styles.snackHeader}>
          <Lightning size={24} color="#6366f1" />
          <Text style={styles.snackTitle}>Today's Snack</Text>
        </View>
        <View style={styles.snackCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80' }}
            style={styles.snackImage}
          />
          <View style={styles.snackContent}>
            <Text style={styles.snackCategory}>Science</Text>
            <Text style={styles.snackHeading}>The Basics of Photosynthesis</Text>
            <View style={styles.snackMeta}>
              <View style={styles.metaItem}>
                <Brain size={16} color="#6b7280" />
                <Text style={styles.metaText}>Beginner</Text>
              </View>
              <View style={styles.metaItem}>
                <Clock size={16} color="#6b7280" />
                <Text style={styles.metaText}>3 min</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.continueScroll}>
          {['Spanish Basics', 'World History', 'Algebra'].map((topic, index) => (
            <TouchableOpacity key={index} style={styles.continueCard}>
              <Text style={styles.continueTitle}>{topic}</Text>
              <Text style={styles.continueProgress}>Progress: 60%</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Stats</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Snacks Completed</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>89%</Text>
            <Text style={styles.statLabel}>Correct Answers</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>250</Text>
            <Text style={styles.statLabel}>XP Earned</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#111827',
  },
  streak: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginTop: 4,
  },
  dailySnack: {
    padding: 20,
  },
  snackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  snackTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginLeft: 8,
  },
  snackCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  snackImage: {
    width: '100%',
    height: 160,
  },
  snackContent: {
    padding: 16,
  },
  snackCategory: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#6366f1',
    marginBottom: 4,
  },
  snackHeading: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginBottom: 12,
  },
  snackMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  continueScroll: {
    marginLeft: -4,
    marginRight: -4,
  },
  continueCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    width: 160,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  continueTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 8,
  },
  continueProgress: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#6366f1',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    textAlign: 'center',
  },
});