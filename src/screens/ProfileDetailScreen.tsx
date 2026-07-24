import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StarRating } from '../components/StarRating';
import { ReviewCard } from '../components/ReviewCard';
import { mockReviews } from '../data/mockReviews';
import { Professional } from '../data/mockProfessionals';

const { width } = Dimensions.get('window');

interface ProfileDetailScreenProps {
  navigation: any;
  route: {
    params: {
      professional: Professional;
      categoryName: string;
    };
  };
}

export default function ProfileDetailScreen({ navigation, route }: any) {
  const { professional, categoryName } = route.params;
  const reviews = mockReviews.filter((r) => r.professionalId === professional.id);

  const stats = [
    { icon: 'briefcase-outline', label: 'Jobs Done', value: professional.completedJobs.toString() },
    { icon: 'time-outline', label: 'Experience', value: `${professional.experience} yrs` },
    { icon: 'star-outline', label: 'Rating', value: professional.rating.toFixed(1) },
    { icon: 'chatbubbles-outline', label: 'Reviews', value: professional.reviewCount.toString() },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <LinearGradient
            colors={['#00E676', '#00C853', '#0A0E21']}
            style={styles.heroGradient}
          />

          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>

          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image source={{ uri: professional.avatar }} style={styles.avatar} />
            {professional.isAvailable && <View style={styles.availableBadge} />}
          </View>

          <Text style={styles.name}>{professional.name}</Text>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{categoryName}</Text>
          </View>

          <View style={styles.ratingRow}>
            <StarRating rating={professional.rating} size={18} showValue />
            <Text style={styles.reviewCount}>({professional.reviewCount} reviews)</Text>
          </View>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#8E8E93" />
            <Text style={styles.locationText}>
              {professional.distance} km away • Istanbul, Turkey
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          {stats.map((stat, i) => (
            <View key={i} style={styles.statItem}>
              <Ionicons name={stat.icon as any} size={20} color="#00E676" />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Rate Card */}
        <View style={styles.rateCard}>
          <View>
            <Text style={styles.rateLabel}>Hourly Rate</Text>
            <View style={styles.rateValueRow}>
              <Text style={styles.rateValue}>₺{professional.hourlyRate}</Text>
              <Text style={styles.rateUnit}>/hour</Text>
            </View>
          </View>
          <View
            style={[
              styles.availabilityPill,
              { backgroundColor: professional.isAvailable ? '#00D4AA20' : '#FF6B6B20' },
            ]}
          >
            <View
              style={[
                styles.availabilityDot,
                { backgroundColor: professional.isAvailable ? '#00D4AA' : '#FF6B6B' },
              ]}
            />
            <Text
              style={[
                styles.availabilityText,
                { color: professional.isAvailable ? '#00D4AA' : '#FF6B6B' },
              ]}
            >
              {professional.isAvailable ? 'Available' : 'Busy'}
            </Text>
          </View>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.descriptionText}>{professional.description}</Text>
        </View>

        {/* Reviews */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <Text style={styles.reviewsCount}>{reviews.length} reviews</Text>
          </View>

          {reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <View style={styles.noReviews}>
              <Ionicons name="chatbubble-ellipses-outline" size={32} color="#2A2F45" />
              <Text style={styles.noReviewsText}>No reviews yet</Text>
            </View>
          )}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Bottom CTA */}
      <View style={styles.bottomCTA}>
        <View>
          <Text style={styles.ctaPriceLabel}>Total from</Text>
          <Text style={styles.ctaPrice}>₺{professional.hourlyRate}/hr</Text>
        </View>
        <TouchableOpacity
          style={styles.hireButton}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('Booking', { professional, categoryName })
          }
        >
          <LinearGradient
            colors={['#00E676', '#00C853']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.hireGradient}
          >
            <Text style={styles.hireText}>Hire Now</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
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
  hero: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 24,
    position: 'relative',
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#00E676',
  },
  availableBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#00D4AA',
    borderWidth: 3,
    borderColor: '#0A0E21',
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: 'rgba(0, 230, 118, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },
  categoryText: {
    color: '#00E676',
    fontSize: 13,
    fontWeight: '600',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  reviewCount: {
    color: '#8E8E93',
    fontSize: 13,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    color: '#8E8E93',
    fontSize: 13,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1A1F36',
    marginHorizontal: 20,
    borderRadius: 16,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#2A2F45',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  statLabel: {
    color: '#8E8E93',
    fontSize: 11,
  },
  rateCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2A2F45',
    marginBottom: 16,
  },
  rateLabel: {
    color: '#8E8E93',
    fontSize: 12,
    marginBottom: 4,
  },
  rateValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  rateValue: {
    color: '#00D4AA',
    fontSize: 28,
    fontWeight: '800',
  },
  rateUnit: {
    color: '#8E8E93',
    fontSize: 14,
    marginLeft: 4,
  },
  availabilityPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  availabilityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  availabilityText: {
    fontSize: 13,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  reviewsCount: {
    color: '#8E8E93',
    fontSize: 13,
  },
  descriptionText: {
    color: '#8E8E93',
    fontSize: 14,
    lineHeight: 22,
  },
  noReviews: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  noReviewsText: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 8,
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
  ctaPriceLabel: {
    color: '#8E8E93',
    fontSize: 12,
  },
  ctaPrice: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  hireButton: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  hireGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 28,
    gap: 8,
  },
  hireText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
