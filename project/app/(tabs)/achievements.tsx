import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Trophy, Star, Zap, Target, Brain, Clock, Siren as Fire } from 'lucide-react-native';

const achievements = [
  {
    id: 1,
    title: 'Quick Learner',
    description: 'Complete 5 snacks in one day',
    progress: 80,
    icon: Zap,
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1533745848184-3db07256e163?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Knowledge Seeker',
    description: 'Study across 3 different topics',
    progress: 100,
    icon: Brain,
    color: '#6366f1',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80',
    achieved: true,
  },
  {
    id: 3,
    title: 'Early Bird',
    description: 'Complete a snack before 8 AM',
    progress: 100,
    icon: Clock,
    color: '#ec4899',
    image: 'https://images.unsplash.com/photo-1505613374160-26c57d108ef6?w=800&auto=format&fit=crop&q=80',
    achieved: true,
  },
  {
    id: 4,
    title: 'Perfect Score',
    description: 'Get 100% on 3 quizzes in a row',
    progress: 66,
    icon: Target,
    color: '#10b981',
    image: 'https://images.unsplash.com/photo-1553524913-0e3d1fa0bb09?w=800&auto=format&fit=crop&q=80',
  },
];

const stats = [
  { label: 'Current Streak', value: '5 days', icon: Fire, color: '#ef4444' },
  { label: 'Total XP', value: '1,250', icon: Star, color: '#f59e0b' },
  { label: 'Achievements', value: '8/24', icon: Trophy, color: '#6366f1' },
];

export default function AchievementsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Achievements</Text>
        <Text style={styles.subtitle}>Track your learning milestones</Text>
      </View>

      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <stat.icon size={24} color={stat.color} />
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Achievement</Text>
        <View style={styles.featuredAchievement}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80' }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredContent}>
            <View style={styles.featuredBadge}>
              <Brain size={16} color="#6366f1" />
              <Text style={styles.featuredBadgeText}>Just Unlocked!</Text>
            </View>
            <Text style={styles.featuredTitle}>Knowledge Seeker</Text>
            <Text style={styles.featuredDescription}>
              You've explored and completed lessons across three different topics. Keep expanding your horizons!
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All Achievements</Text>
        {achievements.map((achievement) => (
          <View key={achievement.id} style={styles.achievementCard}>
            <Image source={{ uri: achievement.image }} style={styles.achievementImage} />
            <View style={styles.achievementContent}>
              <View style={styles.achievementHeader}>
                <achievement.icon size={20} color={achievement.color} />
                <Text style={[styles.achievementTitle, { color: achievement.color }]}>
                  {achievement.title}
                </Text>
              </View>
              <Text style={styles.achievementDescription}>{achievement.description}</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${achievement.progress}%`,
                        backgroundColor: achievement.color,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.progressText}>{achievement.progress}%</Text>
              </View>
              {achievement.achieved && (
                <View style={[styles.achievedBadge, { backgroundColor: achievement.color + '20' }]}>
                  <Star size={12} color={achievement.color} />
                  <Text style={[styles.achievedText, { color: achievement.color }]}>Achieved</Text>
                </View>
              )}
            </View>
          </View>
        ))}
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
  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginTop: 4,
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
  featuredAchievement: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 20,
  },
  featuredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  featuredBadgeText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#6366f1',
    marginLeft: 6,
  },
  featuredTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  achievementImage: {
    width: 100,
    height: '100%',
  },
  achievementContent: {
    flex: 1,
    padding: 16,
  },
  achievementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  achievementTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 8,
  },
  achievementDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#6b7280',
  },
  achievedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    position: 'absolute',
    top: 16,
    right: 16,
  },
  achievedText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 4,
  },
});