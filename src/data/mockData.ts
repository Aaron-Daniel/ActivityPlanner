import { DateSpot, Distance } from '../types';

export const dateSpots: DateSpot[] = [
  // Restaurants
  {
    id: '1',
    name: 'The Garden Bistro',
    category: 'restaurant',
    description: 'Intimate fine dining with seasonal farm-to-table cuisine and romantic garden seating.',
    location: '123 Rose Street, Downtown',
    priceLevel: 3,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    estimatedTime: '1.5-2 hours',
    neighborhood: 'Downtown'
  },
  {
    id: '2',
    name: 'Sunset Rooftop',
    category: 'restaurant',
    description: 'Elevated dining experience with panoramic city views and craft cocktails.',
    location: '456 Sky Avenue, Midtown',
    priceLevel: 4,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    estimatedTime: '2-3 hours',
    neighborhood: 'Midtown'
  },
  {
    id: '3',
    name: 'Cozy Corner Café',
    category: 'restaurant',
    description: 'Charming coffee house perfect for intimate conversations and artisanal pastries.',
    location: '789 Maple Lane, Arts District',
    priceLevel: 2,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    estimatedTime: '1-1.5 hours',
    neighborhood: 'Arts District'
  },
  
  // Activities
  {
    id: '4',
    name: 'City Art Museum',
    category: 'activity',
    description: 'World-class contemporary art collection with interactive exhibits and guided tours.',
    location: '321 Culture Boulevard, Arts District',
    priceLevel: 2,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1154723/pexels-photo-1154723.jpeg',
    estimatedTime: '2-3 hours',
    neighborhood: 'Arts District'
  },
  {
    id: '5',
    name: 'Riverside Park',
    category: 'activity',
    description: 'Beautiful waterfront park with walking trails, paddle boat rentals, and scenic views.',
    location: '654 River Drive, Waterfront',
    priceLevel: 1,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg',
    estimatedTime: '1-2 hours',
    neighborhood: 'Waterfront'
  },
  {
    id: '6',
    name: 'Downtown Bowling',
    category: 'activity',
    description: 'Modern bowling alley with craft beer, gourmet food, and retro arcade games.',
    location: '987 Strike Street, Downtown',
    priceLevel: 2,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/4792065/pexels-photo-4792065.jpeg',
    estimatedTime: '2-3 hours',
    neighborhood: 'Downtown'
  },

  // Bars
  {
    id: '7',
    name: 'The Velvet Lounge',
    category: 'bar',
    description: 'Sophisticated cocktail bar with live jazz music and intimate booth seating.',
    location: '159 Jazz Avenue, Downtown',
    priceLevel: 3,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg',
    estimatedTime: '2-3 hours',
    neighborhood: 'Downtown'
  },
  {
    id: '8',
    name: 'Brewery Heights',
    category: 'bar',
    description: 'Craft brewery with rooftop terrace, locally brewed beers, and pub-style games.',
    location: '753 Hops Street, Midtown',
    priceLevel: 2,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg',
    estimatedTime: '1.5-2 hours',
    neighborhood: 'Midtown'
  },
  {
    id: '9',
    name: 'Wine & Dine',
    category: 'bar',
    description: 'Cozy wine bar featuring over 200 selections and artisanal cheese boards.',
    location: '852 Vine Street, Arts District',
    priceLevel: 3,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg',
    estimatedTime: '1.5-2.5 hours',
    neighborhood: 'Arts District'
  },

  // Entertainment
  {
    id: '10',
    name: 'Grand Theater',
    category: 'entertainment',
    description: 'Historic venue featuring Broadway shows, concerts, and comedy performances.',
    location: '369 Theater Row, Downtown',
    priceLevel: 3,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg',
    estimatedTime: '2.5-3 hours',
    neighborhood: 'Downtown'
  },
  {
    id: '11',
    name: 'Starlight Cinema',
    category: 'entertainment',
    description: 'Boutique movie theater with luxury recliners, gourmet snacks, and latest releases.',
    location: '741 Film Street, Midtown',
    priceLevel: 2,
    rating: 4.2,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    estimatedTime: '2-3 hours',
    neighborhood: 'Midtown'
  },
  {
    id: '12',
    name: 'Lighthouse Marina',
    category: 'activity',
    description: 'Scenic harbor with boat tours, waterfront dining, and stunning sunset views.',
    location: '258 Harbor Way, Waterfront',
    priceLevel: 2,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    estimatedTime: '1-2 hours',
    neighborhood: 'Waterfront'
  }
];

// Mock distances between neighborhoods (in miles)
export const distances: Distance[] = [
  { from: 'Downtown', to: 'Downtown', distance: 0 },
  { from: 'Downtown', to: 'Midtown', distance: 1.2 },
  { from: 'Downtown', to: 'Arts District', distance: 0.8 },
  { from: 'Downtown', to: 'Waterfront', distance: 2.1 },
  
  { from: 'Midtown', to: 'Downtown', distance: 1.2 },
  { from: 'Midtown', to: 'Midtown', distance: 0 },
  { from: 'Midtown', to: 'Arts District', distance: 1.5 },
  { from: 'Midtown', to: 'Waterfront', distance: 2.8 },
  
  { from: 'Arts District', to: 'Downtown', distance: 0.8 },
  { from: 'Arts District', to: 'Midtown', distance: 1.5 },
  { from: 'Arts District', to: 'Arts District', distance: 0 },
  { from: 'Arts District', to: 'Waterfront', distance: 1.9 },
  
  { from: 'Waterfront', to: 'Downtown', distance: 2.1 },
  { from: 'Waterfront', to: 'Midtown', distance: 2.8 },
  { from: 'Waterfront', to: 'Arts District', distance: 1.9 },
  { from: 'Waterfront', to: 'Waterfront', distance: 0 },
];

export const getDistance = (from: string, to: string): number => {
  const distance = distances.find(d => d.from === from && d.to === to);
  return distance ? distance.distance : 999; // Return high number if no distance found
};