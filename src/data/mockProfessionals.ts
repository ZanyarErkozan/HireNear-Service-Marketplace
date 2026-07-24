export interface Professional {
  id: string;
  name: string;
  categoryId: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  experience: number;
  distance: number;
  latitude: number;
  longitude: number;
  description: string;
  completedJobs: number;
  isAvailable: boolean;
}

export const mockProfessionals: Professional[] = [
  // Painters
  { id: 'p1', name: 'Ahmet Yılmaz', categoryId: '1', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', rating: 4.8, reviewCount: 45, hourlyRate: 200, experience: 8, distance: 3.2, latitude: 41.015, longitude: 28.979, description: 'Expert in interior and exterior painting with over 8 years of experience.', completedJobs: 120, isAvailable: true },
  { id: 'p2', name: 'Mehmet Kaya', categoryId: '1', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', rating: 4.5, reviewCount: 22, hourlyRate: 180, experience: 5, distance: 5.1, latitude: 41.020, longitude: 29.001, description: 'Affordable and fast painting services for residential areas.', completedJobs: 50, isAvailable: true },
  { id: 'p3', name: 'Ali Şahin', categoryId: '1', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', rating: 4.9, reviewCount: 89, hourlyRate: 250, experience: 12, distance: 1.5, latitude: 41.050, longitude: 29.010, description: 'Premium decorative painting and wallpapering specialist.', completedJobs: 300, isAvailable: false },

  // Plumbers
  { id: 'p4', name: 'Mustafa Çelik', categoryId: '2', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', rating: 4.7, reviewCount: 110, hourlyRate: 300, experience: 15, distance: 2.0, latitude: 41.035, longitude: 28.985, description: 'Master plumber handling all types of leaks and installations.', completedJobs: 450, isAvailable: true },
  { id: 'p5', name: 'Burak Demir', categoryId: '2', avatar: 'https://randomuser.me/api/portraits/men/5.jpg', rating: 4.3, reviewCount: 15, hourlyRate: 220, experience: 3, distance: 8.5, latitude: 41.070, longitude: 29.050, description: 'Quick and reliable emergency plumbing services.', completedJobs: 40, isAvailable: true },
  { id: 'p6', name: 'Cem Öztürk', categoryId: '2', avatar: 'https://randomuser.me/api/portraits/men/6.jpg', rating: 4.6, reviewCount: 56, hourlyRate: 250, experience: 10, distance: 4.7, latitude: 41.040, longitude: 28.990, description: 'Specialist in heating systems and pipe repairs.', completedJobs: 210, isAvailable: true },

  // Electricians
  { id: 'p7', name: 'Hasan Yıldız', categoryId: '3', avatar: 'https://randomuser.me/api/portraits/men/7.jpg', rating: 4.9, reviewCount: 130, hourlyRate: 350, experience: 20, distance: 1.2, latitude: 41.010, longitude: 28.960, description: 'Certified electrician for commercial and residential needs.', completedJobs: 500, isAvailable: true },
  { id: 'p8', name: 'Emre Can', categoryId: '3', avatar: 'https://randomuser.me/api/portraits/men/8.jpg', rating: 4.4, reviewCount: 34, hourlyRate: 280, experience: 6, distance: 6.3, latitude: 41.080, longitude: 29.020, description: 'Modern lighting installations and smart home setups.', completedJobs: 85, isAvailable: true },
  { id: 'p9', name: 'Ozan Tekin', categoryId: '3', avatar: 'https://randomuser.me/api/portraits/men/9.jpg', rating: 4.8, reviewCount: 77, hourlyRate: 320, experience: 14, distance: 3.8, latitude: 41.025, longitude: 29.015, description: 'Fault detection and electrical panel upgrades.', completedJobs: 275, isAvailable: false },

  // Cleaning
  { id: 'p10', name: 'Ayşe Erdoğan', categoryId: '4', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', rating: 4.9, reviewCount: 150, hourlyRate: 150, experience: 7, distance: 2.5, latitude: 41.060, longitude: 28.990, description: 'Deep cleaning services with eco-friendly products.', completedJobs: 400, isAvailable: true },
  { id: 'p11', name: 'Fatma Arslan', categoryId: '4', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', rating: 4.7, reviewCount: 88, hourlyRate: 160, experience: 5, distance: 4.1, latitude: 41.045, longitude: 29.030, description: 'Detailed move-in and move-out cleaning expert.', completedJobs: 250, isAvailable: true },
  { id: 'p12', name: 'Zeynep Kaplan', categoryId: '4', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', rating: 4.5, reviewCount: 42, hourlyRate: 170, experience: 4, distance: 7.2, latitude: 41.090, longitude: 29.060, description: 'Regular house cleaning and organization.', completedJobs: 130, isAvailable: true },

  // Moving
  { id: 'p13', name: 'Kemal Yavuz', categoryId: '5', avatar: 'https://randomuser.me/api/portraits/men/10.jpg', rating: 4.6, reviewCount: 95, hourlyRate: 400, experience: 12, distance: 5.5, latitude: 41.030, longitude: 28.970, description: 'Safe and insured moving services for homes and offices.', completedJobs: 320, isAvailable: true },
  { id: 'p14', name: 'İbrahim Koç', categoryId: '5', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', rating: 4.3, reviewCount: 28, hourlyRate: 350, experience: 3, distance: 9.0, latitude: 41.015, longitude: 29.080, description: 'Fast van services for small to medium relocations.', completedJobs: 65, isAvailable: true },
  { id: 'p15', name: 'Serkan Aslan', categoryId: '5', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', rating: 4.8, reviewCount: 112, hourlyRate: 500, experience: 18, distance: 2.8, latitude: 41.055, longitude: 29.005, description: 'Heavy lifting and piano moving specialist.', completedJobs: 480, isAvailable: false },

  // Barber
  { id: 'p16', name: 'Tarik Gül', categoryId: '6', avatar: 'https://randomuser.me/api/portraits/men/13.jpg', rating: 4.9, reviewCount: 145, hourlyRate: 200, experience: 10, distance: 0.8, latitude: 41.042, longitude: 28.988, description: 'Classic and modern haircuts, beard styling.', completedJobs: 500, isAvailable: true },
  { id: 'p17', name: 'Murat Aydın', categoryId: '6', avatar: 'https://randomuser.me/api/portraits/men/14.jpg', rating: 4.7, reviewCount: 76, hourlyRate: 180, experience: 8, distance: 1.5, latitude: 41.038, longitude: 29.012, description: 'Professional grooming services at your home.', completedJobs: 290, isAvailable: true },
  { id: 'p18', name: 'Caner Polat', categoryId: '6', avatar: 'https://randomuser.me/api/portraits/men/15.jpg', rating: 4.5, reviewCount: 33, hourlyRate: 150, experience: 4, distance: 3.0, latitude: 41.065, longitude: 29.025, description: 'Quick and stylish cuts for all ages.', completedJobs: 110, isAvailable: true },

  // Carpenter
  { id: 'p19', name: 'Yusuf Çetin', categoryId: '7', avatar: 'https://randomuser.me/api/portraits/men/16.jpg', rating: 4.8, reviewCount: 64, hourlyRate: 280, experience: 16, distance: 4.5, latitude: 41.022, longitude: 28.995, description: 'Custom furniture design and wood repairs.', completedJobs: 215, isAvailable: true },
  { id: 'p20', name: 'Osman Kılıç', categoryId: '7', avatar: 'https://randomuser.me/api/portraits/men/17.jpg', rating: 4.4, reviewCount: 19, hourlyRate: 240, experience: 5, distance: 6.8, latitude: 41.075, longitude: 28.965, description: 'Kitchen cabinet installation and general carpentry.', completedJobs: 55, isAvailable: true },
  { id: 'p21', name: 'Halil Şen', categoryId: '7', avatar: 'https://randomuser.me/api/portraits/men/18.jpg', rating: 4.9, reviewCount: 82, hourlyRate: 350, experience: 20, distance: 2.2, latitude: 41.018, longitude: 29.035, description: 'Master craftsman specializing in antique restoration.', completedJobs: 380, isAvailable: false },

  // Gardener
  { id: 'p22', name: 'Hakan Bulut', categoryId: '8', avatar: 'https://randomuser.me/api/portraits/men/19.jpg', rating: 4.7, reviewCount: 41, hourlyRate: 180, experience: 9, distance: 5.2, latitude: 41.095, longitude: 29.045, description: 'Landscaping, pruning, and lawn care services.', completedJobs: 160, isAvailable: true },
  { id: 'p23', name: 'Gökhan Kurt', categoryId: '8', avatar: 'https://randomuser.me/api/portraits/men/20.jpg', rating: 4.5, reviewCount: 27, hourlyRate: 160, experience: 6, distance: 8.1, latitude: 41.085, longitude: 28.955, description: 'Seasonal garden maintenance and planting.', completedJobs: 95, isAvailable: true },
  { id: 'p24', name: 'Elif Çoban', categoryId: '8', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', rating: 4.9, reviewCount: 53, hourlyRate: 220, experience: 11, distance: 3.5, latitude: 41.055, longitude: 29.065, description: 'Expert in floral design and boutique garden setups.', completedJobs: 185, isAvailable: true },

  // IT Support
  { id: 'p25', name: 'Deniz Aktaş', categoryId: '9', avatar: 'https://randomuser.me/api/portraits/men/21.jpg', rating: 4.8, reviewCount: 89, hourlyRate: 300, experience: 8, distance: 1.9, latitude: 41.048, longitude: 28.975, description: 'Network setup, virus removal, and PC repair.', completedJobs: 310, isAvailable: true },
  { id: 'p26', name: 'Tolga Çelik', categoryId: '9', avatar: 'https://randomuser.me/api/portraits/men/22.jpg', rating: 4.6, reviewCount: 45, hourlyRate: 250, experience: 5, distance: 4.3, latitude: 41.028, longitude: 29.028, description: 'Smart home configuration and Wi-Fi troubleshooting.', completedJobs: 140, isAvailable: true },
  { id: 'p27', name: 'Merve Doğan', categoryId: '9', avatar: 'https://randomuser.me/api/portraits/women/5.jpg', rating: 4.9, reviewCount: 115, hourlyRate: 350, experience: 12, distance: 2.7, latitude: 41.068, longitude: 29.008, description: 'Data recovery and enterprise-level IT consulting.', completedJobs: 420, isAvailable: false },

  // Photographer
  { id: 'p28', name: 'Büşra Yıldırım', categoryId: '10', avatar: 'https://randomuser.me/api/portraits/women/6.jpg', rating: 4.9, reviewCount: 78, hourlyRate: 400, experience: 7, distance: 3.1, latitude: 41.033, longitude: 28.983, description: 'Professional portrait and event photographer.', completedJobs: 260, isAvailable: true },
  { id: 'p29', name: 'Eren Taş', categoryId: '10', avatar: 'https://randomuser.me/api/portraits/men/23.jpg', rating: 4.7, reviewCount: 52, hourlyRate: 350, experience: 6, distance: 6.4, latitude: 41.073, longitude: 29.053, description: 'Real estate and product photography specialist.', completedJobs: 175, isAvailable: true },
  { id: 'p30', name: 'Melis Özer', categoryId: '10', avatar: 'https://randomuser.me/api/portraits/women/7.jpg', rating: 4.5, reviewCount: 24, hourlyRate: 300, experience: 3, distance: 4.9, latitude: 41.013, longitude: 29.043, description: 'Creative outdoor shoots and family portraits.', completedJobs: 80, isAvailable: true },
];
