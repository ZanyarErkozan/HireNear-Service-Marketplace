import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from '../data/categories';
import { mockProfessionals, Professional } from '../data/mockProfessionals';
import { CategoryCard } from '../components/CategoryCard';
import { ProfessionalCard } from '../components/ProfessionalCard';

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const filteredProfessionals = useMemo(() => {
    let result = [...mockProfessionals];

    if (selectedCategoryId) {
      result = result.filter((p) => p.categoryId === selectedCategoryId);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          categories.find((c) => c.id === p.categoryId)?.name.toLowerCase().includes(q)
      );
    }

    // Sort by distance
    result.sort((a, b) => a.distance - b.distance);

    return result;
  }, [searchQuery, selectedCategoryId]);

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || '';
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, there! 👋</Text>
          <Text style={styles.headerTitle}>Find Professionals Nearby</Text>
        </View>
        <TouchableOpacity style={styles.notifButton}>
          <Ionicons name="notifications-outline" size={22} color="#fff" />
          <View style={styles.notifDot} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#8E8E93" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a service or professional..."
          placeholderTextColor="#8E8E93"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#8E8E93" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={18} color="#00E676" />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {/* "All" chip */}
          <TouchableOpacity
            style={[
              styles.allChip,
              !selectedCategoryId && styles.allChipActive,
            ]}
            onPress={() => setSelectedCategoryId(null)}
          >
            <Ionicons
              name="grid-outline"
              size={20}
              color={!selectedCategoryId ? '#fff' : '#8E8E93'}
            />
            <Text
              style={[
                styles.allChipText,
                !selectedCategoryId && styles.allChipTextActive,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>

          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              isSelected={selectedCategoryId === cat.id}
              onPress={() =>
                setSelectedCategoryId(
                  selectedCategoryId === cat.id ? null : cat.id
                )
              }
            />
          ))}
        </ScrollView>

        {/* Results */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {selectedCategoryId
              ? getCategoryName(selectedCategoryId)
              : 'Nearby Professionals'}
          </Text>
          <Text style={styles.resultCount}>
            {filteredProfessionals.length} found
          </Text>
        </View>

        {filteredProfessionals.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={48} color="#2A2F45" />
            <Text style={styles.emptyText}>No professionals found</Text>
            <Text style={styles.emptySubtext}>
              Try adjusting your search or category filter
            </Text>
          </View>
        ) : (
          filteredProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
              categoryName={getCategoryName(professional.categoryId)}
              onPress={() =>
                navigation.navigate('ProfessionalDetail', {
                  professional,
                  categoryName: getCategoryName(professional.categoryId),
                })
              }
            />
          ))
        )}

        <View style={{ height: 20 }} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },
  notifButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1A1F36',
    borderWidth: 1,
    borderColor: '#2A2F45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B6B',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    borderRadius: 14,
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2F45',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 8,
  },
  filterButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 230, 118, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  seeAll: {
    fontSize: 13,
    color: '#00E676',
    fontWeight: '600',
  },
  resultCount: {
    fontSize: 13,
    color: '#8E8E93',
  },
  categoryList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
  },
  allChip: {
    width: 90,
    height: 100,
    borderRadius: 16,
    backgroundColor: '#1A1F36',
    borderWidth: 1,
    borderColor: '#2A2F45',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  allChipActive: {
    backgroundColor: 'rgba(0, 230, 118, 0.2)',
    borderColor: '#00E676',
  },
  allChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8E8E93',
  },
  allChipTextActive: {
    color: '#fff',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    color: '#8E8E93',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  emptySubtext: {
    color: '#555',
    fontSize: 13,
    marginTop: 4,
  },
});
