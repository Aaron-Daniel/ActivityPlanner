export interface DateSpot {
  id: string;
  name: string;
  category: 'restaurant' | 'activity' | 'bar' | 'entertainment';
  description: string;
  location: string;
  priceLevel: 1 | 2 | 3 | 4;
  rating: number;
  image: string;
  estimatedTime: string;
  neighborhood: string;
}

export interface Distance {
  from: string;
  to: string;
  distance: number; // in miles
}

export interface DateTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  categories: string[];
  duration: string;
}