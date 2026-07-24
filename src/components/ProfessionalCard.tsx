import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface Professional {
  id: string;
  name: string;
  categoryId: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  distance: number;
  isAvailable: boolean;
  [key: string]: any;
}

interface ProfessionalCardProps {
  professional: Professional;
  categoryName?: string;
  onPress: () => void;
}

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional, categoryName, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.avatarContainer}>
        <Image source={{ uri: professional.avatar }} style={styles.avatar} />
        {professional.isAvailable && <View style={styles.availabilityDot} />}
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{professional.name}</Text>
        <Text style={styles.category}>{categoryName || professional.categoryId}</Text>
        
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{professional.rating.toFixed(1)}</Text>
          <Text style={styles.reviewCount}>({professional.reviewCount})</Text>
        </View>
      </View>
      
      <View style={styles.rightContainer}>
        <Text style={styles.price}>{professional.hourlyRate} ₺</Text>
        <Text style={styles.distance}>
          <Ionicons name="location-outline" size={12} color="#8E8E93" /> {professional.distance} km
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1A1F36',
    borderRadius: 16,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2F45',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  pressed: {
    opacity: 0.8,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2A2F45',
  },
  availabilityDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#00D4AA',
    borderWidth: 2,
    borderColor: '#1A1F36',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  category: {
    color: '#8E8E93',
    fontSize: 13,
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 4,
  },
  reviewCount: {
    color: '#8E8E93',
    fontSize: 12,
    marginLeft: 4,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  price: {
    color: '#00E676',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  distance: {
    color: '#8E8E93',
    fontSize: 12,
  },
});
