import React from 'react';
import { Text, StyleSheet, Pressable, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface Category {
  id: string;
  name: string;
  icon: any;
  color: string;
}

interface CategoryCardProps {
  category: Category;
  isSelected?: boolean;
  onPress: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, isSelected, onPress }) => {
  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // Adding alpha (10%) to the hex color
  const backgroundColor = isSelected ? `${category.color}40` : `${category.color}1A`;
  const borderColor = isSelected ? category.color : '#2A2F45';

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.card, { backgroundColor, borderColor, transform: [{ scale: scaleValue }] }]}>
        <Ionicons name={category.icon} size={32} color={category.color} />
        <Text style={styles.name} numberOfLines={1}>{category.name}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    margin: 8,
    borderWidth: 1,
    borderColor: '#2A2F45',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center',
  },
});
