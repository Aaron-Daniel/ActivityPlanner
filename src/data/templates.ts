import { DateTemplate } from '../types';

export const dateTemplates: DateTemplate[] = [
  {
    id: 'classic-dinner',
    name: 'Classic Dinner Date',
    description: 'Traditional romantic evening with dinner and entertainment',
    icon: '🍽️',
    categories: ['restaurant', 'entertainment'],
    duration: '3-4 hours'
  },
  {
    id: 'cocktails-dessert',
    name: 'Cocktails & Sweets',
    description: 'Sophisticated evening with craft cocktails and dessert',
    icon: '🍸',
    categories: ['bar', 'restaurant'],
    duration: '2-3 hours'
  },
  {
    id: 'active-adventure',
    name: 'Active Adventure',
    description: 'Fun activity followed by drinks and food',
    icon: '🎯',
    categories: ['activity', 'bar', 'restaurant'],
    duration: '4-5 hours'
  },
  {
    id: 'coffee-culture',
    name: 'Coffee & Culture',
    description: 'Relaxed start with coffee, activity, then dinner',
    icon: '☕',
    categories: ['restaurant', 'activity', 'restaurant'],
    duration: '4-6 hours'
  },
  {
    id: 'nightlife-tour',
    name: 'Nightlife Tour',
    description: 'Progressive evening through multiple bars and entertainment',
    icon: '🌙',
    categories: ['bar', 'entertainment', 'bar'],
    duration: '4-6 hours'
  },
  {
    id: 'brunch-day',
    name: 'Weekend Brunch Day',
    description: 'Leisurely brunch followed by activities and drinks',
    icon: '🥐',
    categories: ['restaurant', 'activity', 'bar'],
    duration: '5-6 hours'
  },
  {
    id: 'entertainment-first',
    name: 'Show & Tell',
    description: 'Start with entertainment, then dinner and drinks',
    icon: '🎭',
    categories: ['entertainment', 'restaurant', 'bar'],
    duration: '4-5 hours'
  },
  {
    id: 'double-date',
    name: 'Double Feature',
    description: 'Two activities with a meal break in between',
    icon: '🎪',
    categories: ['activity', 'restaurant', 'activity'],
    duration: '5-7 hours'
  }
];