import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockProfessionals } from '../data/mockProfessionals';

interface ChatListScreenProps {
  navigation: any;
}

// Just mock some active conversations
const activeChats = [
  {
    professional: mockProfessionals[0],
    lastMessage: 'Sure, I can come over tomorrow morning.',
    time: '10:42 AM',
    unread: 2,
  },
  {
    professional: mockProfessionals[1],
    lastMessage: 'Offer accepted! See you then.',
    time: 'Yesterday',
    unread: 0,
  },
  {
    professional: mockProfessionals[2],
    lastMessage: 'Could you send me a picture of the pipe?',
    time: 'Mon',
    unread: 0,
  },
];

export default function ChatListScreen({ navigation }: ChatListScreenProps) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {activeChats.map((chat, i) => (
          <TouchableOpacity
            key={i}
            style={styles.chatItem}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ChatDetail', { professional: chat.professional })}
          >
            <View style={styles.avatarContainer}>
              <Image source={{ uri: chat.professional.avatar }} style={styles.avatar} />
              {chat.professional.isAvailable && <View style={styles.onlineDot} />}
            </View>
            
            <View style={styles.chatInfo}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{chat.professional.name}</Text>
                <Text style={[styles.time, chat.unread > 0 && styles.timeUnread]}>
                  {chat.time}
                </Text>
              </View>
              
              <View style={styles.messageRow}>
                <Text 
                  style={[styles.lastMessage, chat.unread > 0 && styles.lastMessageUnread]}
                  numberOfLines={1}
                >
                  {chat.lastMessage}
                </Text>
                {chat.unread > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{chat.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E21',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2F45',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#1A1F36',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2A2F45',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1F36',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2A2F45',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#00E676',
    borderWidth: 2,
    borderColor: '#0A0E21',
  },
  chatInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  time: {
    color: '#8E8E93',
    fontSize: 12,
  },
  timeUnread: {
    color: '#00E676',
    fontWeight: '600',
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    color: '#8E8E93',
    fontSize: 14,
    flex: 1,
    marginRight: 16,
  },
  lastMessageUnread: {
    color: '#fff',
    fontWeight: '600',
  },
  badge: {
    backgroundColor: '#00E676',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 24,
    alignItems: 'center',
  },
  badgeText: {
    color: '#0A0E21',
    fontSize: 12,
    fontWeight: '800',
  },
});
