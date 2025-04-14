import { Tabs } from 'expo-router';
import { Book, Home, Trophy, User } from 'lucide-react-native';
import { StyleSheet, Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="topics"
        options={{
          title: 'Topics',
          tabBarIcon: ({ color, size }) => <Book size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
    paddingTop: 8,
    height: Platform.OS === 'ios' ? 85 : 65,
  },
  tabBarLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginTop: 4,
  },
});