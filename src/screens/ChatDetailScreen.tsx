import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Professional } from '../data/mockProfessionals';

interface ChatDetailScreenProps {
  navigation: any;
  route: {
    params: {
      professional: Professional;
    };
  };
}

export default function ChatDetailScreen({ navigation, route }: any) {
  const { professional } = route.params;
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.headerInfo}>
          <Image source={{ uri: professional.avatar }} style={styles.headerAvatar} />
          <View>
            <Text style={styles.headerName}>{professional.name}</Text>
            <Text style={styles.headerStatus}>
              {professional.isAvailable ? 'Online' : 'Offline'}
            </Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.callButton}>
          <Ionicons name="call" size={20} color="#00E676" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Normal Message */}
          <View style={styles.messageRow}>
            <View style={styles.messageBubbleLeft}>
              <Text style={styles.messageTextLeft}>Hello! I saw you need a professional for your home. How can I help?</Text>
              <Text style={styles.messageTime}>10:30 AM</Text>
            </View>
          </View>

          {/* Normal Message Right */}
          <View style={[styles.messageRow, styles.messageRowRight]}>
            <View style={styles.messageBubbleRight}>
              <Text style={styles.messageTextRight}>Hi {professional.name.split(' ')[0]}, yes I need some help. What's your hourly rate?</Text>
              <Text style={styles.messageTimeRight}>10:32 AM</Text>
            </View>
          </View>

          {/* Normal Message */}
          <View style={styles.messageRow}>
            <View style={styles.messageBubbleLeft}>
              <Text style={styles.messageTextLeft}>My standard rate is ₺{professional.hourlyRate}/hr.</Text>
              <Text style={styles.messageTime}>10:33 AM</Text>
            </View>
          </View>

          {/* Bargain Offer Bubble */}
          <View style={styles.bargainContainer}>
            <View style={styles.bargainHeader}>
              <Ionicons name="pricetag" size={16} color="#00E676" />
              <Text style={styles.bargainTitle}>You made an offer</Text>
            </View>
            <View style={styles.bargainDetails}>
              <View>
                <Text style={styles.bargainLabel}>Service</Text>
                <Text style={styles.bargainValue}>2 Hours Work</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.bargainLabel}>Proposed Rate</Text>
                <Text style={styles.bargainPrice}>₺{professional.hourlyRate - 50}/hr</Text>
              </View>
            </View>
            <View style={styles.bargainStatusRow}>
              <View style={styles.statusPillPending}>
                <Text style={styles.statusTextPending}>Pending Response</Text>
              </View>
            </View>
          </View>

          {/* Normal Message */}
          <View style={styles.messageRow}>
            <View style={styles.messageBubbleLeft}>
              <Text style={styles.messageTextLeft}>That works for me. I can accept that rate for a 2-hour minimum job.</Text>
              <Text style={styles.messageTime}>10:40 AM</Text>
            </View>
          </View>

          {/* Bargain Accepted Bubble */}
          <View style={[styles.bargainContainer, styles.bargainAccepted]}>
            <View style={styles.bargainHeader}>
              <Ionicons name="checkmark-circle" size={16} color="#00E676" />
              <Text style={styles.bargainTitle}>Offer Accepted</Text>
            </View>
            <View style={styles.bargainDetails}>
              <View>
                <Text style={styles.bargainLabel}>Total Agreed</Text>
                <Text style={styles.bargainValue}>₺{(professional.hourlyRate - 50) * 2}</Text>
              </View>
            </View>
            <TouchableOpacity 
              style={styles.bookNowButton}
              onPress={() => navigation.navigate('Booking', { professional, categoryName: "Professional" })}
            >
              <Text style={styles.bookNowText}>Proceed to Booking</Text>
              <Ionicons name="arrow-forward" size={16} color="#0A0E21" />
            </TouchableOpacity>
          </View>

        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="add" size={24} color="#8E8E93" />
          </TouchableOpacity>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              placeholderTextColor="#8E8E93"
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.offerButton}>
              <Ionicons name="pricetag" size={18} color="#00E676" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendButton}>
            <LinearGradient
              colors={['#00E676', '#00C853']}
              style={styles.sendGradient}
            >
              <Ionicons name="send" size={16} color="#0A0E21" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2F45',
    backgroundColor: '#1A1F36',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#2A2F45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  headerStatus: {
    color: '#00E676',
    fontSize: 12,
    fontWeight: '500',
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 230, 118, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  messageRowRight: {
    justifyContent: 'flex-end',
  },
  messageBubbleLeft: {
    backgroundColor: '#1A1F36',
    padding: 14,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    maxWidth: '80%',
    borderWidth: 1,
    borderColor: '#2A2F45',
  },
  messageBubbleRight: {
    backgroundColor: '#00E676',
    padding: 14,
    borderRadius: 16,
    borderBottomRightRadius: 4,
    maxWidth: '80%',
  },
  messageTextLeft: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
  },
  messageTextRight: {
    color: '#0A0E21',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  messageTime: {
    color: '#8E8E93',
    fontSize: 11,
    marginTop: 6,
    alignSelf: 'flex-start',
  },
  messageTimeRight: {
    color: 'rgba(10, 14, 33, 0.6)',
    fontSize: 11,
    marginTop: 6,
    alignSelf: 'flex-end',
    fontWeight: '600',
  },
  bargainContainer: {
    backgroundColor: '#1A1F36',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2A2F45',
    marginVertical: 16,
    width: '90%',
    alignSelf: 'center',
  },
  bargainAccepted: {
    borderColor: '#00E676',
    backgroundColor: 'rgba(0, 230, 118, 0.05)',
  },
  bargainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  bargainTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  bargainDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0A0E21',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  bargainLabel: {
    color: '#8E8E93',
    fontSize: 12,
    marginBottom: 4,
  },
  bargainValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  bargainPrice: {
    color: '#00E676',
    fontSize: 16,
    fontWeight: '800',
  },
  bargainStatusRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  statusPillPending: {
    backgroundColor: 'rgba(255, 179, 71, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusTextPending: {
    color: '#FFB347',
    fontSize: 12,
    fontWeight: '600',
  },
  bookNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00E676',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  bookNowText: {
    color: '#0A0E21',
    fontSize: 15,
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1A1F36',
    borderTopWidth: 1,
    borderTopColor: '#2A2F45',
  },
  attachButton: {
    padding: 8,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0A0E21',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#2A2F45',
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
    paddingVertical: 10,
    maxHeight: 100,
  },
  offerButton: {
    padding: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  sendGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
  },
});
