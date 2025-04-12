import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Book, ChevronRight } from 'lucide-react-native';

const topics = [
  {
    id: 1,
    title: 'Science',
    description: 'From atoms to galaxies',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80',
    courses: 24,
    color: '#818cf8',
  },
  {
    id: 2,
    title: 'Mathematics',
    description: 'Master the numbers',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
    courses: 18,
    color: '#fb923c',
  },
  {
    id: 3,
    title: 'History',
    description: 'Journey through time',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&auto=format&fit=crop&q=80',
    courses: 15,
    color: '#f87171',
  },
  {
    id: 4,
    title: 'Languages',
    description: 'Connect with the world',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&auto=format&fit=crop&q=80',
    courses: 30,
    color: '#4ade80',
  },
];

export default function TopicsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Topics</Text>
        <Text style={styles.subtitle}>Explore our learning categories</Text>
      </View>

      <View style={styles.featured}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80' }}
          style={styles.featuredImage}
        />
        <View style={styles.featuredContent}>
          <View style={styles.featuredBadge}>
            <Book size={16} color="#6366f1" />
            <Text style={styles.featuredBadgeText}>Featured Path</Text>
          </View>
          <Text style={styles.featuredTitle}>Web Development Fundamentals</Text>
          <Text style={styles.featuredDescription}>Master the basics of modern web development</Text>
          <TouchableOpacity style={styles.featuredButton}>
            <Text style={styles.featuredButtonText}>Start Learning</Text>
            <ChevronRight size={16} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.topicsGrid}>
        {topics.map((topic) => (
          <TouchableOpacity key={topic.id} style={styles.topicCard}>
            <Image source={{ uri: topic.image }} style={styles.topicImage} />
            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicDescription}>{topic.description}</Text>
              <View style={styles.topicMeta}>
                <View style={[styles.topicBadge, { backgroundColor: topic.color + '20' }]}>
                  <Text style={[styles.topicBadgeText, { color: topic.color }]}>
                    {topic.courses} courses
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
  featured: {
    margin: 20,
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
    marginBottom: 20,
  },
  featuredButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366f1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  featuredButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginRight: 8,
  },
  topicsGrid: {
    padding: 20,
  },
  topicCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  topicImage: {
    width: '100%',
    height: 160,
  },
  topicContent: {
    padding: 16,
  },
  topicTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginBottom: 4,
  },
  topicDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    marginBottom: 12,
  },
  topicMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  topicBadgeText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
});