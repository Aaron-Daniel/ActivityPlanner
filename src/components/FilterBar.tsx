import React from 'react';
import { Filter, Navigation, MapPin, X } from 'lucide-react';
import { DateSpot } from '../types';

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
  onCurrentLocation: () => void;
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
  templateMode = false,
  onCurrentLocation
}) => {
  const [locationInput, setLocationInput] = React.useState('');

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (locationInput.trim()) {
      onLocationSelect(locationInput.trim());
      setLocationInput('');
    }
  };

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
        
        {/* Location Filter Inline */}
        <div className="flex items-center space-x-2">
          {selectedLocation ? (
            <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-lg border border-blue-200">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Near {selectedLocation}</span>
              <button
                onClick={onLocationClear}
                className="ml-2 p-1 hover:bg-blue-200 rounded-full"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={onCurrentLocation}
                className="inline-flex items-center px-3 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors border border-green-200"
              >
                <Navigation className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">Current Location</span>
              </button>
              
              <form onSubmit={handleLocationSubmit} className="flex">
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  placeholder="Enter location..."
                  className="border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-40"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-3 py-2 rounded-r-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                >
                  Set
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};