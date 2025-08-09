import React, { useState } from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';

interface LocationFilterProps {
  onLocationSelect: (location: string) => void;
  selectedLocation?: string | null;
  onClear: () => void;
}

export const LocationFilter: React.FC<LocationFilterProps> = ({
  onLocationSelect,
  selectedLocation,
  onClear
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const laNeighborhoods = [
    'Hollywood',
    'West Hollywood', 
    'Beverly Hills',
    'Santa Monica',
    'Venice',
    'Downtown LA',
    'Brentwood',
    'Marina del Rey'
  ];

  const handleLocationInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onLocationSelect(inputValue.trim());
      setIsOpen(false);
      setInputValue('');
    }
  };

  const handleNeighborhoodSelect = (neighborhood: string) => {
    onLocationSelect(neighborhood);
    setIsOpen(false);
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      return;
    }

    setIsGettingLocation(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsGettingLocation(false);
        // For demo purposes, we'll simulate finding the nearest LA neighborhood
        // In a real app, you'd use reverse geocoding
        const nearestNeighborhood = laNeighborhoods[Math.floor(Math.random() * laNeighborhoods.length)];
        onLocationSelect(nearestNeighborhood);
        setIsOpen(false);
      },
      (error) => {
        setIsGettingLocation(false);
        console.error('Error getting location:', error);
        alert('Unable to get your location. Please enter it manually.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          selectedLocation
            ? 'bg-blue-100 text-blue-800 border border-blue-200'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
        }`}
      >
        <MapPin className="w-4 h-4 mr-1" />
        {selectedLocation ? `Near ${selectedLocation}` : 'Location'}
      </button>

      {selectedLocation && (
        <button
          onClick={onClear}
          className="ml-2 text-xs text-blue-600 hover:text-blue-800"
        >
          Clear
        </button>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Filter by Location
            </h3>
            
            {/* Current Location Button */}
            <button
              onClick={handleCurrentLocation}
              disabled={isGettingLocation}
              className="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 mb-3"
            >
              <Navigation className={`w-5 h-5 mr-3 ${isGettingLocation ? 'animate-pulse text-blue-500' : 'text-gray-500'}`} />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {isGettingLocation ? 'Getting location...' : 'Use Current Location'}
                </div>
                <div className="text-xs text-gray-500">
                  Find spots near you
                </div>
              </div>
            </button>

            {/* Manual Input */}
            <form onSubmit={handleLocationInput} className="mb-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter neighborhood or address"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Search Location
              </button>
            </form>

            {/* Preset Neighborhoods */}
            <div>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                Popular Areas
              </p>
              <div className="space-y-1">
                {laNeighborhoods.map((neighborhood) => (
                  <button
                    key={neighborhood}
                    onClick={() => handleNeighborhoodSelect(neighborhood)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded transition-colors"
                  >
                    {neighborhood}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};