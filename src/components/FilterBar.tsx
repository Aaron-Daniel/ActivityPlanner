import React from 'react';
import { Filter } from 'lucide-react';
import { DateSpot } from '../types';
import { LocationFilter } from './LocationFilter';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  selectedLocation?: string | null;
  onLocationSelect: (location: string) => void;
  onLocationClear: () => void;
  templateMode?: boolean;
}

const categoryLabels = {
  all: 'All Spots',
  restaurant: 'Dining',
  activity: 'Activities',
  bar: 'Nightlife',
  entertainment: 'Entertainment'
};

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  selectedLocation,
  onLocationSelect,
  onLocationClear,
  templateMode = false
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          <Filter className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-sm font-medium text-gray-700">Filters:</span>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => !templateMode && onCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } ${templateMode ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
              disabled={templateMode}
            >
              {categoryLabels[category as keyof typeof categoryLabels] || category}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-gray-300" />

        {/* Sort Options */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="rating">Sort by Rating</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          {selectedLocation && <option value="distance">Distance</option>}
        </select>

        <div className="w-px h-6 bg-gray-300" />
        
        {/* Location Filter */}
        <LocationFilter
          onLocationSelect={onLocationSelect}
          selectedLocation={selectedLocation}
          onClear={onLocationClear}
        />
      </div>
    </div>
  );
};