import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Professional } from '../data/mockProfessionals';

interface BookingScreenProps {
  navigation: any;
  route: {
    params: {
      professional: Professional;
      categoryName: string;
    };
  };
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00',
];

const dates = Array.from({ length: 7 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return {
    day: d.toLocaleDateString('en-US', { weekday: 'short' }),
    date: d.getDate(),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    full: d.toISOString(),
  };
});

export default function BookingScreen({ navigation, route }: any) {
  const { professional, categoryName } = route.params;
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [hours, setHours] = useState(2);

  const totalCost = professional.hourlyRate * hours;

  const handleConfirm = () => {
    Alert.alert(
      '✅ Booking Confirmed!',
      `You have booked ${professional.name} for ${hours} hours on ${dates[selectedDate].day}, ${dates[selectedDate].date} ${dates[selectedDate].month} at ${selectedTime}.\n\nTotal: ₺${totalCost}`,
      [{ text: 'OK', onPress: () => navigation.popToTop() }]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Service</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Professional Summary */}
        <View style={styles.proCard}>
          <Image source={{ uri: professional.avatar }} style={styles.proAvatar} />
          <View style={styles.proInfo}>
            <Text style={styles.proName}>{professional.name}</Text>
            <Text style={styles.proCategory}>{categoryName}</Text>
          </View>
          <View style={styles.proRate}>
            <Text style={styles.proRateValue}>₺{professional.hourlyRate}</Text>
            <Text style={styles.proRateUnit}>/hr</Text>
          </View>
        </View>

        {/* Date Selection */}
        <Text style={styles.sectionTitle}>Select Date</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateList}
        >
          {dates.map((d, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.dateCard,
                selectedDate === i && styles.dateCardActive,
              ]}
              onPress={() => setSelectedDate(i)}
            >
              <Text
                style={[
                  styles.dateDay,
                  selectedDate === i && styles.dateDayActive,
                ]}
              >
                {d.day}
              </Text>
              <Text
                style={[
                  styles.dateNum,
                  selectedDate === i && styles.dateNumActive,
                ]}
              >
                {d.date}
              </Text>
              <Text
                style={[
                  styles.dateMonth,
                  selectedDate === i && styles.dateMonthActive,
                ]}
              >
                {d.month}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Time Selection */}
        <Text style={styles.sectionTitle}>Select Time</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeChip,
                selectedTime === time && styles.timeChipActive,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && styles.timeTextActive,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Duration */}
        <Text style={styles.sectionTitle}>Duration (hours)</Text>
        <View style={styles.durationRow}>
          <TouchableOpacity
            style={styles.durationBtn}
            onPress={() => setHours(Math.max(1, hours - 1))}
          >
            <Ionicons name="remove" size={22} color="#fff" />
          </TouchableOpacity>
          <View style={styles.durationValue}>
            <Text style={styles.durationNum}>{hours}</Text>
            <Text style={styles.durationLabel}>hours</Text>
          </View>
          <TouchableOpacity
            style={styles.durationBtn}
            onPress={() => setHours(Math.min(12, hours + 1))}
          >
            <Ionicons name="add" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Cost Summary */}
        <View style={styles.costCard}>
          <Text style={styles.costTitle}>Cost Summary</Text>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Hourly Rate</Text>
            <Text style={styles.costValue}>₺{professional.hourlyRate}</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Duration</Text>
            <Text style={styles.costValue}>{hours} hours</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.costRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₺{totalCost}</Text>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomCTA}>
        <View>
          <Text style={styles.ctaLabel}>Total Cost</Text>
          <Text style={styles.ctaPrice}>₺{totalCost}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.confirmButton,
            !selectedTime && { opacity: 0.5 },
          ]}
          activeOpacity={0.8}
          onPress={handleConfirm}
          disabled={!selectedTime}
        >
          <LinearGradient
            colors={['#00D4AA', '#00B894']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.confirmGradient}
          >
            <Text style={styles.confirmText}>Confirm Booking</Text>
            <Ionicons name="checkmark-circle" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
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
    paddingTop: 56,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#1A1F36',
    borderWidth: 1,
    borderColor: '#2A2F45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  proCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#2A2F45',
    marginBottom: 24,
  },
  proAvatar: {
    width: 48,
    height: 48,
    borderRadius: 14,
  },
  proInfo: {
    flex: 1,
    marginLeft: 12,
  },
  proName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  proCategory: {
    color: '#8E8E93',
    fontSize: 13,
    marginTop: 2,
  },
  proRate: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  proRateValue: {
    color: '#00D4AA',
    fontSize: 20,
    fontWeight: '800',
  },
  proRateUnit: {
    color: '#8E8E93',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 14,
  },
  dateList: {
    gap: 10,
    paddingBottom: 20,
  },
  dateCard: {
    width: 70,
    height: 90,
    borderRadius: 16,
    backgroundColor: '#1A1F36',
    borderWidth: 1,
    borderColor: '#2A2F45',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  dateCardActive: {
    backgroundColor: '#00E676',
    borderColor: '#00E676',
  },
  dateDay: { color: '#8E8E93', fontSize: 12, fontWeight: '600' },
  dateDayActive: { color: '#fff' },
  dateNum: { color: '#fff', fontSize: 22, fontWeight: '800' },
  dateNumActive: { color: '#fff' },
  dateMonth: { color: '#8E8E93', fontSize: 11 },
  dateMonthActive: { color: 'rgba(255,255,255,0.7)' },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  timeChip: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#1A1F36',
    borderWidth: 1,
    borderColor: '#2A2F45',
  },
  timeChipActive: {
    backgroundColor: 'rgba(0, 230, 118, 0.2)',
    borderColor: '#00E676',
  },
  timeText: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '600',
  },
  timeTextActive: {
    color: '#00E676',
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 24,
  },
  durationBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#1A1F36',
    borderWidth: 1,
    borderColor: '#2A2F45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationValue: {
    alignItems: 'center',
  },
  durationNum: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '800',
  },
  durationLabel: {
    color: '#8E8E93',
    fontSize: 12,
  },
  costCard: {
    backgroundColor: '#1A1F36',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2A2F45',
  },
  costTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 14,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  costLabel: {
    color: '#8E8E93',
    fontSize: 14,
  },
  costValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#2A2F45',
    marginVertical: 10,
  },
  totalLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  totalValue: {
    color: '#00D4AA',
    fontSize: 22,
    fontWeight: '800',
  },
  bottomCTA: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1F36',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 34,
    borderTopWidth: 1,
    borderTopColor: '#2A2F45',
  },
  ctaLabel: {
    color: '#8E8E93',
    fontSize: 12,
  },
  ctaPrice: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },
  confirmButton: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  confirmGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    gap: 8,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
