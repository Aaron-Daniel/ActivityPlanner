import React, { useState, useMemo } from 'react';
import { DateSpot, DateTemplate } from './types';
import { dateSpots, getDistance } from './data/mockData';
import { DateSpotCard } from './components/DateSpotCard';
import { DatePlan } from './components/DatePlan';
import { FilterBar } from './components/FilterBar';
import { DateTemplateModal } from './components/DateTemplateModal';
import { DateSpotDetailsModal } from './components/DateSpotDetailsModal';
import { Heart, Calendar, Sparkles } from 'lucide-react';

function App() {
  const [selectedSpots, setSelectedSpots] = useState<DateSpot[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState<DateTemplate | null>(null);
  const [currentTemplateStep, setCurrentTemplateStep] = useState(0);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [selectedSpotForDetails, setSelectedSpotForDetails] = useState<DateSpot | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const categories = ['all', 'restaurant', 'activity', 'bar', 'entertainment'];

  // Handle spot selection
  const handleSpotSelect = (spot: DateSpot) => {
    setSelectedSpots(prev => {
      const isAlreadySelected = prev.some(s => s.id === spot.id);
      if (isAlreadySelected) {
        return prev;
      } else {
        const newSelection = [...prev, spot];
        
        // Dynamically set location filter to the selected spot's neighborhood
        setSelectedLocation(spot.neighborhood);
        
        // If using template mode, advance to next step
        if (activeTemplate && currentTemplateStep < activeTemplate.categories.length - 1) {
          setCurrentTemplateStep(prev => prev + 1);
          // Auto-set category for next step
          const nextCategory = activeTemplate.categories[currentTemplateStep + 1];
          setSelectedCategory(nextCategory);
        } else if (activeTemplate && currentTemplateStep === activeTemplate.categories.length - 1) {
          // Template completed
          setActiveTemplate(null);
          setCurrentTemplateStep(0);
          setSelectedCategory('all');
        }
        
        return newSelection;
      }
    });
  };

  // Remove spot from plan
  const handleRemoveSpot = (spotId: string) => {
    setSelectedSpots(prev => {
      const newSpots = prev.filter(spot => spot.id !== spotId);
      
      // Update location filter based on remaining spots
      if (newSpots.length > 0) {
        // Set to the last remaining spot's neighborhood
        setSelectedLocation(newSpots[newSpots.length - 1].neighborhood);
      }
      // If no spots remain, keep the current location filter
      
      return newSpots;
    });
    
    // If in template mode and removing a spot, adjust step
    if (activeTemplate) {
      const newStep = Math.max(0, selectedSpots.length - 2);
      setCurrentTemplateStep(newStep);
      if (newStep < activeTemplate.categories.length) {
        setSelectedCategory(activeTemplate.categories[newStep]);
      }
    }
  };

  // Handle spot reordering
  const handleReorderSpots = (reorderedSpots: DateSpot[]) => {
    setSelectedSpots(reorderedSpots);
  };
  // Handle location selection
  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  // Clear location filter
  const handleLocationClear = () => {
    setSelectedLocation(null);
  };

  // Handle current location
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      return;
    }

    setIsGettingLocation(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsGettingLocation(false);
        // For demo purposes, simulate finding nearest LA neighborhood
        const laNeighborhoods = [
          'Hollywood', 'West Hollywood', 'Beverly Hills', 'Santa Monica',
          'Venice', 'Downtown LA', 'Brentwood', 'Marina del Rey'
        ];
        const nearestNeighborhood = laNeighborhoods[Math.floor(Math.random() * laNeighborhoods.length)];
        setSelectedLocation(nearestNeighborhood);
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

  // Handle template selection
  const handleSelectTemplate = (template: DateTemplate) => {
    setActiveTemplate(template);
    setCurrentTemplateStep(0);
    setSelectedCategory(template.categories[0]);
    setSelectedSpots([]);
    setIsTemplateModalOpen(false);
  };

  // Clear template mode
  const handleClearTemplate = () => {
    setActiveTemplate(null);
    setCurrentTemplateStep(0);
    setSelectedCategory('all');
  };

  // Clear template without affecting selected spots
  const handleCloseTemplate = () => {
    setActiveTemplate(null);
    setCurrentTemplateStep(0);
    setSelectedCategory('all');
  };

  // Handle showing spot details
  const handleShowDetails = (spot: DateSpot) => {
    setSelectedSpotForDetails(spot);
    setIsDetailsModalOpen(true);
  };

  // Handle closing spot details
  const handleCloseDetails = () => {
    setIsDetailsModalOpen(false);
    setSelectedSpotForDetails(null);
  };

  // Filter and sort spots
  const filteredAndSortedSpots = useMemo(() => {
    let filtered = [...dateSpots];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(spot => spot.category === selectedCategory);
    }

    // Calculate distances for all spots
    let spotsWithDistance = filtered.map(spot => ({
      ...spot,
      distanceFromLocation: selectedLocation ? getDistance(selectedLocation, spot.neighborhood) : 0,
      distanceFromLast: selectedSpots.length > 0 
        ? getDistance(selectedSpots[selectedSpots.length - 1].neighborhood, spot.neighborhood)
        : 0
    }));

    // If location filter is active, filter by reasonable distance
    if (selectedLocation && sortBy !== 'distance-from-me') {
      spotsWithDistance = spotsWithDistance.filter(spot => spot.distanceFromLocation < 20); // Only show spots within 20 miles
    }

    // Sort
    spotsWithDistance.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.priceLevel - b.priceLevel;
        case 'price-high':
          return b.priceLevel - a.priceLevel;
        case 'distance-from-me':
          return a.distanceFromLocation - b.distanceFromLocation;
        case 'distance-from-last':
          return a.distanceFromLast - b.distanceFromLast;
        default:
          return 0;
      }
    });

    return spotsWithDistance;
  }, [selectedCategory, sortBy, selectedLocation, selectedSpots]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Heart className="w-8 h-8 text-red-500 mr-3 fill-current" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Date Planner</h1>
              <p className="text-gray-600 mt-1">Build the perfect multi-part date experience</p>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => setIsTemplateModalOpen(true)}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Date Templates
              </button>
            </div>
          </div>
          
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <FilterBar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
              onLocationClear={handleLocationClear}
              templateMode={!!activeTemplate}
              onCurrentLocation={handleCurrentLocation}
              hasSelectedSpots={selectedSpots.length > 0}
            />

            {/* Spots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAndSortedSpots.map((spot) => (
                <DateSpotCard
                  key={spot.id}
                  dateSpot={spot}
                  isSelected={selectedSpots.some(s => s.id === spot.id)}
                  onSelect={handleSpotSelect}
                  distance={selectedLocation ? spot.distanceFromLocation : undefined}
                  onShowDetails={handleShowDetails}
                />
              ))}
            </div>

            {filteredAndSortedSpots.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No spots found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters to see more options.
                </p>
              </div>
            )}
          </div>

          {/* Date Plan Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <DatePlan
                selectedSpots={selectedSpots}
                onRemove={handleRemoveSpot}
                onReorder={handleReorderSpots}
                activeTemplate={activeTemplate}
                templateProgress={activeTemplate ? selectedSpots.length / activeTemplate.categories.length : 0}
                onCloseTemplate={handleCloseTemplate}
                onShowDetails={handleShowDetails}
              />
            </div>
          </div>
        </div>
      </div>
      
      <DateTemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        onSelectTemplate={handleSelectTemplate}
      />
      
      <DateSpotDetailsModal
        dateSpot={selectedSpotForDetails}
        isOpen={isDetailsModalOpen}
        onClose={handleCloseDetails}
      />
    </div>
  );
}

export default App;