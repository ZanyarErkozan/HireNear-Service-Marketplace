export interface Category {
  id: string;
  name: string;
  icon: string; // Ionicons name
  color: string; // hex
}

export const categories: Category[] = [
  { id: '1', name: 'Painter', icon: 'brush-outline', color: '#FF6B6B' },
  { id: '2', name: 'Plumber', icon: 'water-outline', color: '#4ECDC4' },
  { id: '3', name: 'Electrician', icon: 'flash-outline', color: '#FFE66D' },
  { id: '4', name: 'Cleaning', icon: 'sparkles-outline', color: '#A8E6CF' },
  { id: '5', name: 'Moving', icon: 'car-outline', color: '#FF8B94' },
  { id: '6', name: 'Barber', icon: 'cut-outline', color: '#DDA0DD' },
  { id: '7', name: 'Carpenter', icon: 'hammer-outline', color: '#F4A460' },
  { id: '8', name: 'Gardener', icon: 'leaf-outline', color: '#98D8C8' },
  { id: '9', name: 'IT Support', icon: 'laptop-outline', color: '#87CEEB' },
  { id: '10', name: 'Photographer', icon: 'camera-outline', color: '#FFB347' },
];
