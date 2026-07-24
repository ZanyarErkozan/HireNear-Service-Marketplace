import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StarRating } from './StarRating';

export interface Review {
  id: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const formattedDate = new Date(review.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{review.reviewerName}</Text>
          <StarRating rating={review.rating} size={14} />
        </View>
        <Text style={styles.date}>
          {formattedDate !== 'Invalid Date' ? formattedDate : review.date}
        </Text>
      </View>
      <Text style={styles.comment}>{review.comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1F36',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#00E676',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#2A2F45',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    color: '#8E8E93',
    fontSize: 12,
  },
  comment: {
    color: '#FFFFFF',
    opacity: 0.9,
    fontSize: 14,
    lineHeight: 20,
  },
});
