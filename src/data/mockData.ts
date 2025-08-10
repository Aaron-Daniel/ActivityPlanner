import { DateSpot, Distance } from '../types';

export const dateSpots: DateSpot[] = [
  // Restaurants
  {
    id: '1',
    name: 'The Garden Bistro',
    category: 'restaurant',
    description: 'Intimate fine dining with seasonal farm-to-table cuisine and romantic garden seating.',
    location: '8475 Melrose Avenue, West Hollywood',
    priceLevel: 3,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    images: [
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
      'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg'
    ],
    estimatedTime: '1.5-2 hours',
    neighborhood: 'West Hollywood',
    details: {
      cuisine: 'Farm-to-table American',
      atmosphere: 'Romantic, intimate, garden setting',
      highlights: ['Seasonal menu', 'Outdoor garden dining', 'Craft cocktails', 'Local ingredients'],
      amenities: ['Outdoor seating', 'Full bar', 'Valet parking', 'Private dining'],
      bestFor: ['Date nights', 'Special occasions', 'Business dinners'],
      tips: 'Request garden seating for the most romantic experience'
    }
  },
  {
    id: '2',
    name: 'Sunset Rooftop',
    category: 'restaurant',
    description: 'Elevated dining experience with panoramic city views and craft cocktails.',
    location: '1601 Vine Street, Hollywood',
    priceLevel: 4,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    images: [
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
      'https://images.pexels.com/photos/1543750/pexels-photo-1543750.jpeg',
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg'
    ],
    estimatedTime: '2-3 hours',
    neighborhood: 'Hollywood',
    details: {
      cuisine: 'Modern American',
      atmosphere: 'Upscale, panoramic city views',
      highlights: ['360° city views', 'Craft cocktails', 'Sunset dining', 'Live music weekends'],
      amenities: ['Rooftop terrace', 'Full bar', 'Lounge area', 'Event space'],
      bestFor: ['Romantic dinners', 'Celebration meals', 'Impressive dates'],
      tips: 'Book sunset reservations for the best views'
    }
  },
  {
    id: '3',
    name: 'Cozy Corner Café',
    category: 'restaurant',
    description: 'Charming coffee house perfect for intimate conversations and artisanal pastries.',
    location: '1334 Abbot Kinney Boulevard, Venice',
    priceLevel: 2,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    images: [
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg',
      'https://images.pexels.com/photos/6347890/pexels-photo-6347890.jpeg'
    ],
    estimatedTime: '1-1.5 hours',
    neighborhood: 'Venice',
    details: {
      cuisine: 'Coffee & Pastries',
      atmosphere: 'Cozy, artistic, bohemian',
      highlights: ['Artisanal coffee', 'Local art displays', 'Homemade pastries', 'Free WiFi'],
      amenities: ['Outdoor seating', 'Art gallery', 'Book exchange', 'Local music'],
      bestFor: ['Casual dates', 'Morning meetings', 'Study sessions'],
      tips: 'Try their signature lavender latte'
    }
  },
  
  // Activities
  {
    id: '4',
    name: 'Getty Center',
    category: 'activity',
    description: 'World-class art museum with stunning architecture, gardens, and city views.',
    location: '1200 Getty Center Drive, Brentwood',
    priceLevel: 1,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1154723/pexels-photo-1154723.jpeg',
    images: [
      'https://images.pexels.com/photos/1154723/pexels-photo-1154723.jpeg',
      'https://images.pexels.com/photos/2371967/pexels-photo-2371967.jpeg',
      'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg'
    ],
    estimatedTime: '2-3 hours',
    neighborhood: 'Brentwood',
    details: {
      atmosphere: 'Cultural, sophisticated, educational',
      highlights: ['World-class art collection', 'Architecture tours', 'Garden walks', 'Free admission'],
      amenities: ['Free parking', 'Audio guides', 'Café', 'Gift shop', 'Wheelchair accessible'],
      bestFor: ['Culture enthusiasts', 'Educational dates', 'Photography'],
      tips: 'Free admission but advance reservations required'
    }
  },
  {
    id: '5',
    name: 'Santa Monica Pier',
    category: 'activity',
    description: 'Iconic oceanfront pier with amusement rides, games, and beautiful beach views.',
    location: '200 Santa Monica Pier, Santa Monica',
    priceLevel: 2,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg',
    images: [
      'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg',
      'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg'
    ],
    estimatedTime: '2-3 hours',
    neighborhood: 'Santa Monica',
    details: {
      atmosphere: 'Fun, energetic, beachside',
      highlights: ['Ferris wheel', 'Arcade games', 'Street performers', 'Ocean views'],
      amenities: ['Restaurants', 'Parking garage', 'Bike rentals', 'Beach access'],
      bestFor: ['Fun dates', 'Families', 'Tourist experience'],
      tips: 'Best visited during sunset for magical lighting'
    }
  },
  {
    id: '6',
    name: 'Lucky Strike Bowling',
    category: 'activity',
    description: 'Upscale bowling alley with craft cocktails, gourmet food, and modern atmosphere.',
    location: '6801 Hollywood Boulevard, Hollywood',
    priceLevel: 2,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/4792065/pexels-photo-4792065.jpeg',
    images: [
      'https://images.pexels.com/photos/4792065/pexels-photo-4792065.jpeg',
      'https://images.pexels.com/photos/4792901/pexels-photo-4792901.jpeg',
      'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg'
    ],
    estimatedTime: '2-3 hours',
    neighborhood: 'Hollywood',
    details: {
      atmosphere: 'Modern, upscale, entertaining',
      highlights: ['Boutique bowling', 'Craft cocktails', 'Gourmet food', 'Live DJ'],
      amenities: ['Full bar', 'Restaurant', 'Private lanes', 'Event hosting'],
      bestFor: ['Group dates', 'Birthday parties', 'Corporate events'],
      tips: 'Make reservations, especially for weekend evenings'
    }
  },

  // Bars
  {
    id: '7',
    name: 'The Roosevelt Hotel Bar',
    category: 'bar',
    description: 'Historic Hollywood glamour with craft cocktails and live entertainment.',
    location: '7000 Hollywood Boulevard, Hollywood',
    priceLevel: 3,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg',
    images: [
      'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg',
      'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg',
      'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg'
    ],
    estimatedTime: '2-3 hours',
    neighborhood: 'Hollywood',
    details: {
      atmosphere: 'Historic, glamorous, sophisticated',
      highlights: ['Historic venue', 'Classic cocktails', 'Live jazz', 'Celebrity spotting'],
      amenities: ['Full bar', 'Live entertainment', 'Cigar lounge', 'Valet parking'],
      bestFor: ['Special occasions', 'Impressive dates', 'History buffs'],
      tips: 'Dress code enforced - smart casual minimum'
    }
  },
  {
    id: '8',
    name: 'Rooftop at The Standard',
    category: 'bar',
    description: 'Downtown rooftop bar with city skyline views and poolside cocktails.',
    location: '550 South Flower Street, Downtown LA',
    priceLevel: 3,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg',
    images: [
      'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg',
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg',
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg'
    ],
    estimatedTime: '1.5-2 hours',
    neighborhood: 'Downtown LA',
    details: {
      atmosphere: 'Trendy, elevated, city views',
      highlights: ['Rooftop pool', 'City skyline views', 'Craft cocktails', 'DJ sets'],
      amenities: ['Rooftop pool', 'Lounge seating', 'Full bar', 'Event space'],
      bestFor: ['Night out', 'Pool parties', 'Summer dates'],
      tips: 'Pool access may require hotel guest status or special events'
    }
  },
  {
    id: '9',
    name: 'The Tasting Kitchen',
    category: 'bar',
    description: 'Venice wine bar featuring natural wines and artisanal small plates.',
    location: '1633 Abbot Kinney Boulevard, Venice',
    priceLevel: 3,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg',
    images: [
      'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg',
      'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg',
      'https://images.pexels.com/photos/6347890/pexels-photo-6347890.jpeg'
    ],
    estimatedTime: '1.5-2.5 hours',
    neighborhood: 'Venice',
    details: {
      atmosphere: 'Casual, artisanal, bohemian',
      highlights: ['Natural wines', 'Small plates', 'Local art', 'Relaxed vibe'],
      amenities: ['Wine tastings', 'Small plates menu', 'Outdoor seating', 'Art displays'],
      bestFor: ['Wine lovers', 'Casual dates', 'Neighborhood hangout'],
      tips: 'Ask about their natural wine selection - it changes weekly'
    }
  },

  // Entertainment
  {
    id: '10',
    name: 'TCL Chinese Theatre',
    category: 'entertainment',
    description: 'Legendary cinema palace hosting movie premieres and IMAX screenings.',
    location: '6925 Hollywood Boulevard, Hollywood',
    priceLevel: 2,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg',
    images: [
      'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg',
      'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg'
    ],
    estimatedTime: '2.5-3 hours',
    neighborhood: 'Hollywood',
    details: {
      atmosphere: 'Historic, cinematic, iconic',
      highlights: ['Historic venue', 'IMAX screenings', 'Celebrity handprints', 'Movie premieres'],
      amenities: ['IMAX theater', 'Concessions', 'Gift shop', 'Tourist attraction'],
      bestFor: ['Movie dates', 'Tourist experience', 'Film enthusiasts'],
      tips: 'Check for special screenings and events - often has premieres'
    }
  },
  {
    id: '11',
    name: 'The Grove Cinema',
    category: 'entertainment',
    description: 'Premium movie theater with luxury seating and gourmet concessions.',
    location: '189 The Grove Drive, Beverly Hills',
    priceLevel: 2,
    rating: 4.2,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    images: [
      'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg',
      'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg'
    ],
    estimatedTime: '2-3 hours',
    neighborhood: 'Beverly Hills',
    details: {
      atmosphere: 'Upscale, comfortable, premium',
      highlights: ['Luxury seating', 'Gourmet concessions', 'Latest releases', 'Premium sound'],
      amenities: ['Reclining seats', 'In-seat service', 'Premium concessions', 'Reserved seating'],
      bestFor: ['Comfortable movie dates', 'Luxury experience', 'New releases'],
      tips: 'Book reserved seating in advance for popular movies'
    }
  },
  {
    id: '12',
    name: 'Marina del Rey',
    category: 'activity',
    description: 'Largest man-made marina with waterfront dining and yacht charters.',
    location: '4701 Admiralty Way, Marina del Rey',
    priceLevel: 2,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
      'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg'
    ],
    estimatedTime: '1-2 hours',
    neighborhood: 'Marina del Rey',
    details: {
      atmosphere: 'Nautical, scenic, relaxing',
      highlights: ['Largest man-made marina', 'Waterfront dining', 'Yacht watching', 'Sunset views'],
      amenities: ['Restaurants', 'Boat rentals', 'Walking paths', 'Parking'],
      bestFor: ['Romantic walks', 'Sunset viewing', 'Nautical enthusiasts'],
      tips: 'Perfect spot for sunset viewing - bring a camera'
    }
  }
];

// Mock distances between LA neighborhoods (in miles)
export const distances: Distance[] = [
  { from: 'Hollywood', to: 'Hollywood', distance: 0 },
  { from: 'Hollywood', to: 'West Hollywood', distance: 2.5 },
  { from: 'Hollywood', to: 'Beverly Hills', distance: 4.2 },
  { from: 'Hollywood', to: 'Santa Monica', distance: 12.1 },
  { from: 'Hollywood', to: 'Venice', distance: 13.5 },
  { from: 'Hollywood', to: 'Downtown LA', distance: 8.3 },
  { from: 'Hollywood', to: 'Brentwood', distance: 9.7 },
  { from: 'Hollywood', to: 'Marina del Rey', distance: 14.2 },
  
  { from: 'West Hollywood', to: 'Hollywood', distance: 2.5 },
  { from: 'West Hollywood', to: 'West Hollywood', distance: 0 },
  { from: 'West Hollywood', to: 'Beverly Hills', distance: 2.1 },
  { from: 'West Hollywood', to: 'Santa Monica', distance: 9.8 },
  { from: 'West Hollywood', to: 'Venice', distance: 11.2 },
  { from: 'West Hollywood', to: 'Downtown LA', distance: 7.5 },
  { from: 'West Hollywood', to: 'Brentwood', distance: 7.4 },
  { from: 'West Hollywood', to: 'Marina del Rey', distance: 11.9 },
  
  { from: 'Beverly Hills', to: 'Hollywood', distance: 4.2 },
  { from: 'Beverly Hills', to: 'West Hollywood', distance: 2.1 },
  { from: 'Beverly Hills', to: 'Beverly Hills', distance: 0 },
  { from: 'Beverly Hills', to: 'Santa Monica', distance: 7.8 },
  { from: 'Beverly Hills', to: 'Venice', distance: 9.3 },
  { from: 'Beverly Hills', to: 'Downtown LA', distance: 9.2 },
  { from: 'Beverly Hills', to: 'Brentwood', distance: 5.5 },
  { from: 'Beverly Hills', to: 'Marina del Rey', distance: 9.8 },
  
  { from: 'Santa Monica', to: 'Hollywood', distance: 12.1 },
  { from: 'Santa Monica', to: 'West Hollywood', distance: 9.8 },
  { from: 'Santa Monica', to: 'Beverly Hills', distance: 7.8 },
  { from: 'Santa Monica', to: 'Santa Monica', distance: 0 },
  { from: 'Santa Monica', to: 'Venice', distance: 3.2 },
  { from: 'Santa Monica', to: 'Downtown LA', distance: 16.5 },
  { from: 'Santa Monica', to: 'Brentwood', distance: 4.1 },
  { from: 'Santa Monica', to: 'Marina del Rey', distance: 6.7 },
  
  { from: 'Venice', to: 'Hollywood', distance: 13.5 },
  { from: 'Venice', to: 'West Hollywood', distance: 11.2 },
  { from: 'Venice', to: 'Beverly Hills', distance: 9.3 },
  { from: 'Venice', to: 'Santa Monica', distance: 3.2 },
  { from: 'Venice', to: 'Venice', distance: 0 },
  { from: 'Venice', to: 'Downtown LA', distance: 17.8 },
  { from: 'Venice', to: 'Brentwood', distance: 6.5 },
  { from: 'Venice', to: 'Marina del Rey', distance: 4.1 },
  
  { from: 'Downtown LA', to: 'Hollywood', distance: 8.3 },
  { from: 'Downtown LA', to: 'West Hollywood', distance: 7.5 },
  { from: 'Downtown LA', to: 'Beverly Hills', distance: 9.2 },
  { from: 'Downtown LA', to: 'Santa Monica', distance: 16.5 },
  { from: 'Downtown LA', to: 'Venice', distance: 17.8 },
  { from: 'Downtown LA', to: 'Downtown LA', distance: 0 },
  { from: 'Downtown LA', to: 'Brentwood', distance: 12.8 },
  { from: 'Downtown LA', to: 'Marina del Rey', distance: 13.2 },
  
  { from: 'Brentwood', to: 'Hollywood', distance: 9.7 },
  { from: 'Brentwood', to: 'West Hollywood', distance: 7.4 },
  { from: 'Brentwood', to: 'Beverly Hills', distance: 5.5 },
  { from: 'Brentwood', to: 'Santa Monica', distance: 4.1 },
  { from: 'Brentwood', to: 'Venice', distance: 6.5 },
  { from: 'Brentwood', to: 'Downtown LA', distance: 12.8 },
  { from: 'Brentwood', to: 'Brentwood', distance: 0 },
  { from: 'Brentwood', to: 'Marina del Rey', distance: 8.2 },
  
  { from: 'Marina del Rey', to: 'Hollywood', distance: 14.2 },
  { from: 'Marina del Rey', to: 'West Hollywood', distance: 11.9 },
  { from: 'Marina del Rey', to: 'Beverly Hills', distance: 9.8 },
  { from: 'Marina del Rey', to: 'Santa Monica', distance: 6.7 },
  { from: 'Marina del Rey', to: 'Venice', distance: 4.1 },
  { from: 'Marina del Rey', to: 'Downtown LA', distance: 13.2 },
  { from: 'Marina del Rey', to: 'Brentwood', distance: 8.2 },
  { from: 'Marina del Rey', to: 'Marina del Rey', distance: 0 },
];

export const getDistance = (from: string, to: string): number => {
  const distance = distances.find(d => d.from === from && d.to === to);
  return distance ? distance.distance : 999; // Return high number if no distance found
};