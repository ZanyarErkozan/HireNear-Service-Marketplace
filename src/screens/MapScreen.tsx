import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { mockProfessionals } from '../data/mockProfessionals';
import { categories } from '../data/categories';
import { StarRating } from '../components/StarRating';

const { width, height } = Dimensions.get('window');

interface MapScreenProps {
  navigation: any;
}

export default function MapScreen({ navigation }: MapScreenProps) {
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || '';
  };

  const getCategoryColor = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.color || '#00E676';
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Map</Text>
        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="locate-outline" size={20} color="#00E676" />
        </TouchableOpacity>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        {/* Simulated dark map background */}
        <View style={styles.mapBackground}>
          {/* Grid lines to simulate map */}
          {Array.from({ length: 8 }).map((_, i) => (
            <View
              key={`h-${i}`}
              style={[
                styles.gridLineH,
                { top: (i + 1) * (height * 0.65) / 9 },
              ]}
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <View
              key={`v-${i}`}
              style={[
                styles.gridLineV,
                { left: (i + 1) * width / 7 },
              ]}
            />
          ))}

          {/* "You are here" marker */}
          <View style={[styles.youMarker, { top: '45%', left: '45%' }]}>
            <View style={styles.youPulse} />
            <View style={styles.youDot} />
          </View>

          {/* Professional pins */}
          {mockProfessionals.slice(0, 12).map((pro, index) => {
            const positions = [
              { top: '15%', left: '20%' },
              { top: '25%', left: '65%' },
              { top: '35%', left: '30%' },
              { top: '20%', left: '80%' },
              { top: '55%', left: '15%' },
              { top: '60%', left: '70%' },
              { top: '40%', left: '55%' },
              { top: '70%', left: '40%' },
              { top: '30%', left: '10%' },
              { top: '50%', left: '85%' },
              { top: '75%', left: '25%' },
              { top: '65%', left: '55%' },
            ];
            const pos = positions[index];
            return (
              <TouchableOpacity
                key={pro.id}
                style={[styles.pin, pos as any]}
                onPress={() => setSelectedProfessional(pro)}
              >
                <View
                  style={[
                    styles.pinHead,
                    { backgroundColor: getCategoryColor(pro.categoryId) },
                  ]}
                >
                  <Ionicons
                    name={
                      (categories.find((c) => c.id === pro.categoryId)?.icon as any) ||
                      'person'
                    }
                    size={14}
                    color="#fff"
                  />
                </View>
                <View
                  style={[
                    styles.pinTail,
                    { borderTopColor: getCategoryColor(pro.categoryId) },
                  ]}
                />
              </TouchableOpacity>
            );
          })}

          {/* Map Label */}
          <View style={styles.mapLabel}>
            <Ionicons name="map-outline" size={14} color="#8E8E93" />
            <Text style={styles.mapLabelText}>Istanbul, Turkey</Text>
          </View>
        </View>
      </View>

      {/* Bottom Card */}
      {selectedProfessional ? (
        <TouchableOpacity
          style={styles.bottomCard}
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate('ProfessionalDetail', {
              professional: selectedProfessional,
              categoryName: getCategoryName(selectedProfessional.categoryId),
            })
          }
        >
          <Image
            source={{ uri: selectedProfessional.avatar }}
            style={styles.cardAvatar}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>{selectedProfessional.name}</Text>
            <Text style={styles.cardCategory}>
              {getCategoryName(selectedProfessional.categoryId)}
            </Text>
            <View style={styles.cardMeta}>
              <StarRating rating={selectedProfessional.rating} size={14} showValue />
              <Text style={styles.cardDistance}>
                📍 {selectedProfessional.distance} km
              </Text>
            </View>
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.cardRate}>
              ₺{selectedProfessional.hourlyRate}
            </Text>
            <Text style={styles.cardRateLabel}>/hr</Text>
            <View style={styles.cardArrow}>
              <Ionicons name="arrow-forward" size={16} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.bottomHint}>
          <Ionicons name="hand-left-outline" size={20} color="#8E8E93" />
          <Text style={styles.hintText}>Tap a pin to see details</Text>
        </View>
      )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },
  locationButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1A1F36',
    borderWidth: 1,
    borderColor: '#2A2F45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 12,
  },
  mapBackground: {
    flex: 1,
    backgroundColor: '#111630',
    position: 'relative',
  },
  gridLineH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(42, 47, 69, 0.5)',
  },
  gridLineV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(42, 47, 69, 0.5)',
  },
  youMarker: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  youPulse: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 230, 118, 0.2)',
    position: 'absolute',
  },
  youDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#00E676',
    borderWidth: 3,
    borderColor: '#fff',
  },
  pin: {
    position: 'absolute',
    alignItems: 'center',
  },
  pinHead: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  pinTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginTop: -2,
  },
  mapLabel: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 31, 54, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  mapLabelText: {
    color: '#8E8E93',
    fontSize: 12,
  },
  bottomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#2A2F45',
  },
  cardAvatar: {
    width: 52,
    height: 52,
    borderRadius: 14,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
  },
  cardName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  cardCategory: {
    color: '#8E8E93',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 4,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardDistance: {
    color: '#8E8E93',
    fontSize: 12,
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  cardRate: {
    color: '#00D4AA',
    fontSize: 20,
    fontWeight: '800',
  },
  cardRateLabel: {
    color: '#8E8E93',
    fontSize: 11,
    marginBottom: 6,
  },
  cardArrow: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#00E676',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomHint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  hintText: {
    color: '#8E8E93',
    fontSize: 14,
  },
});
