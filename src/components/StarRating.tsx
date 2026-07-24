import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StarRatingProps {
  rating: number;
  size?: number;
  showValue?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, size = 16, showValue = false }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Ionicons key={i} name="star" size={size} color="#FFD700" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<Ionicons key={i} name="star-half" size={size} color="#FFD700" />);
      } else {
        stars.push(<Ionicons key={i} name="star-outline" size={size} color="#FFD700" />);
      }
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.stars}>{renderStars()}</View>
      {showValue && <Text style={styles.value}>{rating.toFixed(1)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
  },
  value: {
    color: '#FFFFFF',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
