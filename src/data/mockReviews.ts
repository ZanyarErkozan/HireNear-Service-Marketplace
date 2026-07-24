export interface Review {
  id: string;
  professionalId: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string; // ISO date string
}

export const mockReviews: Review[] = [
  // p1 - Ahmet Yılmaz (Painter)
  { id: 'r1', professionalId: 'p1', reviewerName: 'John Doe', rating: 5, comment: 'Ahmet did an amazing job painting our living room. Highly recommended!', date: '2023-10-15T10:30:00Z' },
  { id: 'r2', professionalId: 'p1', reviewerName: 'Sarah Smith', rating: 4, comment: 'Good quality work, slightly delayed but the end result is great.', date: '2023-11-02T14:20:00Z' },
  
  // p2 - Mehmet Kaya (Painter)
  { id: 'r3', professionalId: 'p2', reviewerName: 'Mike Johnson', rating: 5, comment: 'Mehmet was very professional and finished the painting ahead of schedule.', date: '2023-12-10T09:15:00Z' },
  { id: 'r4', professionalId: 'p2', reviewerName: 'Emily Davis', rating: 4, comment: 'Affordable and clean work. Would hire again.', date: '2024-01-05T16:45:00Z' },

  // p3 - Ali Şahin (Painter)
  { id: 'r5', professionalId: 'p3', reviewerName: 'Robert Wilson', rating: 5, comment: 'Exceptional attention to detail on our decorative wallpaper.', date: '2023-11-20T11:00:00Z' },
  { id: 'r6', professionalId: 'p3', reviewerName: 'Jessica Brown', rating: 5, comment: 'The best painter I have ever hired. Flawless execution.', date: '2024-02-14T13:30:00Z' },

  // p4 - Mustafa Çelik (Plumber)
  { id: 'r7', professionalId: 'p4', reviewerName: 'David Taylor', rating: 4, comment: 'Fixed our persistent leak quickly. Very knowledgeable.', date: '2023-09-25T08:45:00Z' },
  { id: 'r8', professionalId: 'p4', reviewerName: 'Linda Anderson', rating: 5, comment: 'Mustafa is a lifesaver. Handled our plumbing emergency perfectly.', date: '2023-10-30T17:10:00Z' },

  // p5 - Burak Demir (Plumber)
  { id: 'r9', professionalId: 'p5', reviewerName: 'James Thomas', rating: 4, comment: 'Arrived promptly and fixed the sink issue in no time.', date: '2023-12-05T10:20:00Z' },
  { id: 'r10', professionalId: 'p5', reviewerName: 'Patricia Jackson', rating: 5, comment: 'Great service at a reasonable price.', date: '2024-01-18T14:55:00Z' },

  // p6 - Cem Öztürk (Plumber)
  { id: 'r11', professionalId: 'p6', reviewerName: 'William White', rating: 5, comment: 'Excellent heating system repair. Very professional.', date: '2023-11-12T09:30:00Z' },
  { id: 'r12', professionalId: 'p6', reviewerName: 'Jennifer Harris', rating: 4, comment: 'Good work on the pipes, left the area clean.', date: '2024-02-01T15:40:00Z' },

  // p7 - Hasan Yıldız (Electrician)
  { id: 'r13', professionalId: 'p7', reviewerName: 'Richard Martin', rating: 5, comment: 'Hasan upgraded our entire electrical panel flawlessly.', date: '2023-10-05T11:15:00Z' },
  { id: 'r14', professionalId: 'p7', reviewerName: 'Susan Thompson', rating: 5, comment: 'Very experienced and reliable electrician.', date: '2023-11-28T16:25:00Z' },

  // p8 - Emre Can (Electrician)
  { id: 'r15', professionalId: 'p8', reviewerName: 'Charles Garcia', rating: 4, comment: 'Set up our smart home devices efficiently.', date: '2023-12-15T10:00:00Z' },
  { id: 'r16', professionalId: 'p8', reviewerName: 'Margaret Martinez', rating: 5, comment: 'Great lighting installation, transformed our living room.', date: '2024-01-22T13:45:00Z' },

  // p9 - Ozan Tekin (Electrician)
  { id: 'r17', professionalId: 'p9', reviewerName: 'Joseph Robinson', rating: 5, comment: 'Found and fixed a complex electrical fault quickly.', date: '2023-11-08T09:50:00Z' },
  { id: 'r18', professionalId: 'p9', reviewerName: 'Dorothy Clark', rating: 5, comment: 'Superb service, highly recommend Ozan for any electrical work.', date: '2024-02-10T14:10:00Z' },

  // p10 - Ayşe Erdoğan (Cleaning)
  { id: 'r19', professionalId: 'p10', reviewerName: 'Thomas Rodriguez', rating: 5, comment: 'Our house has never been cleaner. Ayşe is fantastic.', date: '2023-10-20T12:00:00Z' },
  { id: 'r20', professionalId: 'p10', reviewerName: 'Lisa Lewis', rating: 5, comment: 'Love the eco-friendly products she uses. Great job!', date: '2023-12-01T15:30:00Z' },

  // p11 - Fatma Arslan (Cleaning)
  { id: 'r21', professionalId: 'p11', reviewerName: 'Christopher Lee', rating: 4, comment: 'Thorough move-out cleaning, got our full deposit back.', date: '2023-11-15T10:45:00Z' },
  { id: 'r22', professionalId: 'p11', reviewerName: 'Betty Walker', rating: 5, comment: 'Fatma is very detail-oriented and hardworking.', date: '2024-01-10T16:15:00Z' },

  // p12 - Zeynep Kaplan (Cleaning)
  { id: 'r23', professionalId: 'p12', reviewerName: 'Daniel Hall', rating: 4, comment: 'Good regular cleaning service, reliable.', date: '2023-12-22T09:20:00Z' },
  { id: 'r24', professionalId: 'p12', reviewerName: 'Nancy Allen', rating: 5, comment: 'Always on time and leaves the house sparkling.', date: '2024-02-05T14:50:00Z' },

  // p13 - Kemal Yavuz (Moving)
  { id: 'r25', professionalId: 'p13', reviewerName: 'Paul Young', rating: 5, comment: 'Smooth and stress-free move. Kemal and his team are great.', date: '2023-10-12T11:30:00Z' },
  { id: 'r26', professionalId: 'p13', reviewerName: 'Karen Hernandez', rating: 4, comment: 'Handled our furniture carefully, everything arrived intact.', date: '2023-11-25T16:05:00Z' },

  // p14 - İbrahim Koç (Moving)
  { id: 'r27', professionalId: 'p14', reviewerName: 'Mark King', rating: 4, comment: 'Perfect for our small apartment move. Fast service.', date: '2023-12-08T10:10:00Z' },
  { id: 'r28', professionalId: 'p14', reviewerName: 'Sandra Wright', rating: 5, comment: 'Very efficient and friendly. Highly recommended.', date: '2024-01-20T13:25:00Z' },

  // p15 - Serkan Aslan (Moving)
  { id: 'r29', professionalId: 'p15', reviewerName: 'Donald Lopez', rating: 5, comment: 'Moved our grand piano without a scratch. True professionals.', date: '2023-11-05T09:40:00Z' },
  { id: 'r30', professionalId: 'p15', reviewerName: 'Ashley Hill', rating: 5, comment: 'Exceptional heavy lifting service. Very strong team.', date: '2024-02-12T15:15:00Z' },

  // p16 - Tarik Gül (Barber)
  { id: 'r31', professionalId: 'p16', reviewerName: 'George Scott', rating: 5, comment: 'Best haircut I have had in years. Tarik is an artist.', date: '2023-10-28T12:20:00Z' },
  { id: 'r32', professionalId: 'p16', reviewerName: 'Kimberly Green', rating: 5, comment: 'Great beard styling for my husband, he looks amazing.', date: '2023-12-18T17:00:00Z' },

  // p17 - Murat Aydın (Barber)
  { id: 'r33', professionalId: 'p17', reviewerName: 'Kenneth Adams', rating: 4, comment: 'Very convenient home grooming service. Good cut.', date: '2023-11-30T10:50:00Z' },
  { id: 'r34', professionalId: 'p17', reviewerName: 'Donna Baker', rating: 5, comment: 'Murat is very polite and skilled. Excellent experience.', date: '2024-01-25T14:30:00Z' },

  // p18 - Caner Polat (Barber)
  { id: 'r35', professionalId: 'p18', reviewerName: 'Steven Gonzalez', rating: 4, comment: 'Quick and neat haircut. Exactly what I asked for.', date: '2023-12-12T09:10:00Z' },
  { id: 'r36', professionalId: 'p18', reviewerName: 'Carol Nelson', rating: 5, comment: 'Great with kids, my son loved his new haircut.', date: '2024-02-08T16:20:00Z' },

  // p19 - Yusuf Çetin (Carpenter)
  { id: 'r37', professionalId: 'p19', reviewerName: 'Edward Carter', rating: 5, comment: 'Beautiful custom bookshelves. Yusuf is a true craftsman.', date: '2023-10-18T11:40:00Z' },
  { id: 'r38', professionalId: 'p19', reviewerName: 'Michelle Mitchell', rating: 5, comment: 'Repaired our antique chairs perfectly. Highly recommend.', date: '2023-12-02T15:55:00Z' },

  // p20 - Osman Kılıç (Carpenter)
  { id: 'r39', professionalId: 'p20', reviewerName: 'Brian Perez', rating: 4, comment: 'Kitchen cabinet installation was done well and on time.', date: '2023-11-22T10:30:00Z' },
  { id: 'r40', professionalId: 'p20', reviewerName: 'Laura Roberts', rating: 4, comment: 'Solid general carpentry work. Good value.', date: '2024-01-15T13:45:00Z' },

  // p21 - Halil Şen (Carpenter)
  { id: 'r41', professionalId: 'p21', reviewerName: 'Kevin Turner', rating: 5, comment: 'Masterful restoration of our dining table. Stunning.', date: '2023-11-10T09:20:00Z' },
  { id: 'r42', professionalId: 'p21', reviewerName: 'Sarah Phillips', rating: 5, comment: 'Exceptional craftsmanship. Halil is simply the best.', date: '2024-02-18T16:10:00Z' },

  // p22 - Hakan Bulut (Gardener)
  { id: 'r43', professionalId: 'p22', reviewerName: 'Jason Campbell', rating: 5, comment: 'Transformed our backyard. Great landscaping ideas.', date: '2023-10-25T12:15:00Z' },
  { id: 'r44', professionalId: 'p22', reviewerName: 'Rebecca Parker', rating: 4, comment: 'Good regular lawn care service. Reliable.', date: '2023-12-20T15:40:00Z' },

  // p23 - Gökhan Kurt (Gardener)
  { id: 'r45', professionalId: 'p23', reviewerName: 'Matthew Evans', rating: 4, comment: 'Did a great job with our seasonal planting.', date: '2023-11-08T10:05:00Z' },
  { id: 'r46', professionalId: 'p23', reviewerName: 'Sharon Edwards', rating: 5, comment: 'Very knowledgeable about local plants and maintenance.', date: '2024-01-28T14:20:00Z' },

  // p24 - Elif Çoban (Gardener)
  { id: 'r47', professionalId: 'p24', reviewerName: 'Gary Collins', rating: 5, comment: 'Beautiful boutique garden setup. Elif has a great eye.', date: '2023-11-15T09:50:00Z' },
  { id: 'r48', professionalId: 'p24', reviewerName: 'Kathleen Stewart', rating: 5, comment: 'Stunning floral designs. Exceeded our expectations.', date: '2024-02-20T16:35:00Z' },

  // p25 - Deniz Aktaş (IT Support)
  { id: 'r49', professionalId: 'p25', reviewerName: 'Timothy Sanchez', rating: 5, comment: 'Fixed my sluggish PC and removed all viruses quickly.', date: '2023-10-30T11:25:00Z' },
  { id: 'r50', professionalId: 'p25', reviewerName: 'Amy Morris', rating: 5, comment: 'Excellent network setup for our small office.', date: '2023-12-15T15:10:00Z' },

  // p26 - Tolga Çelik (IT Support)
  { id: 'r51', professionalId: 'p26', reviewerName: 'Jose Rogers', rating: 4, comment: 'Configured our smart home flawlessly. Great service.', date: '2023-11-20T10:40:00Z' },
  { id: 'r52', professionalId: 'p26', reviewerName: 'Shirley Reed', rating: 5, comment: 'Resolved our frustrating Wi-Fi issues in under an hour.', date: '2024-01-12T13:55:00Z' },

  // p27 - Merve Doğan (IT Support)
  { id: 'r53', professionalId: 'p27', reviewerName: 'Larry Cook', rating: 5, comment: 'Recovered critical data from a crashed hard drive. Lifesaver!', date: '2023-11-05T09:15:00Z' },
  { id: 'r54', professionalId: 'p27', reviewerName: 'Angela Morgan', rating: 5, comment: 'Top-tier IT consulting for our enterprise upgrade.', date: '2024-02-15T16:00:00Z' },

  // p28 - Büşra Yıldırım (Photographer)
  { id: 'r55', professionalId: 'p28', reviewerName: 'Jeffrey Bell', rating: 5, comment: 'Amazing portrait session. Made us feel very comfortable.', date: '2023-10-22T12:30:00Z' },
  { id: 'r56', professionalId: 'p28', reviewerName: 'Melissa Murphy', rating: 5, comment: 'Captured our event beautifully. Highly recommend Büşra.', date: '2023-12-10T17:20:00Z' },

  // p29 - Eren Taş (Photographer)
  { id: 'r57', professionalId: 'p29', reviewerName: 'Ryan Bailey', rating: 4, comment: 'Great real estate photos, helped sell our house faster.', date: '2023-11-18T10:15:00Z' },
  { id: 'r58', professionalId: 'p29', reviewerName: 'Brenda Rivera', rating: 5, comment: 'Excellent product photography for our new catalog.', date: '2024-01-30T14:45:00Z' },

  // p30 - Melis Özer (Photographer)
  { id: 'r59', professionalId: 'p30', reviewerName: 'Jacob Cooper', rating: 4, comment: 'Fun outdoor shoot. Got some great family photos.', date: '2023-12-05T09:35:00Z' },
  { id: 'r60', professionalId: 'p30', reviewerName: 'Anna Richardson', rating: 5, comment: 'Creative and patient. The kids loved her.', date: '2024-02-22T15:25:00Z' }
];
