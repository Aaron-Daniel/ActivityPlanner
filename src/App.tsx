import React, { useState, useMemo } from 'react';
import { DateSpot, DateTemplate } from './types';
import { dateSpots, getDistance } from './data/mockData';
import { DateSpotCard } from './components/DateSpotCard';
import { DatePlan } from './components/DatePlan';
import { FilterBar } from './components/FilterBar';
import { DateTemplateModal } from './components/DateTemplateModal';
import { Heart, Calendar, Sparkles } from 'lucide-react';

function App() {
  const [selectedSpots, setSelectedSpots] = useState<DateSpot[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [filterFromLocation, setFilterFromLocation] = useState<string | null>(null);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState<DateTemplate | null>(null);
  const [currentTemplateStep, setCurrentTemplateStep] = useState(0);

  const categories = ['all', 'restaurant', 'activity', 'bar', 'entertainment'];

  // Get the most recent location for distance filtering
  const mostRecentLocation = selectedSpots.length > 0 
    ? selectedSpots[selectedSpots.length - 1].neighborhood 
    : null;

  // Handle spot selection
  const handleSpotSelect = (spot: DateSpot) => {
    setSelectedSpots(prev => {
      const isAlreadySelected = prev.some(s => s.id === spot.id);
      if (isAlreadySelected) {
        // If clicking on an already selected spot, use it for distance filtering
        setFilterFromLocation(spot.neighborhood);
        return prev;
      } else {
        const newSelection = [...prev, spot];
        
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
    setSelectedSpots(prev => prev.filter(spot => spot.id !== spotId));
    
    // If in template mode and removing a spot, adjust step
    if (activeTemplate) {
      const newStep = Math.max(0, selectedSpots.length - 2);
      setCurrentTemplateStep(newStep);
      if (newStep < activeTemplate.categories.length) {
        setSelectedCategory(activeTemplate.categories[newStep]);
      }
    }
  };

  // Clear distance filter
  const handleClearFilter = () => {
    setFilterFromLocation(null);
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

  // Filter and sort spots
  const filteredAndSortedSpots = useMemo(() => {
    let filtered = [...dateSpots];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(spot => spot.category === selectedCategory);
    }

    // Calculate distances if filtering by location
    const spotsWithDistance = filtered.map(spot => ({
      ...spot,
      distance: filterFromLocation ? getDistance(filterFromLocation, spot.neighborhood) : 0
    }));

    // Sort
    spotsWithDistance.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.priceLevel - b.priceLevel;
        case 'price-high':
          return b.priceLevel - a.priceLevel;
        case 'distance':
          return a.distance - b.distance;
        default:
          return 0;
      }
    });

    return spotsWithDistance;
  }, [selectedCategory, sortBy, filterFromLocation]);

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
          
          {/* Template Progress */}
          {activeTemplate && selectedSpots.length < activeTemplate.categories.length && (
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{activeTemplate.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {activeTemplate.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Step {selectedSpots.length + 1} of {activeTemplate.categories.length}: 
                    Select a <span className="font-medium text-blue-700">
                      {selectedCategory === 'restaurant' ? 'dining' : 
                       selectedCategory === 'activity' ? 'activity' :
                       selectedCategory === 'bar' ? 'nightlife' : 'entertainment'
                    }</span> spot
                  </p>
                </div>
                <button
                  onClick={handleClearTemplate}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Exit Template
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(selectedSpots.length / activeTemplate.categories.length) * 100}%` }}
                />
              </div>
            </div>
          )}
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
              isFiltering={!!filterFromLocation}
              filterLocation={filterFromLocation || undefined}
              onClearFilter={handleClearFilter}
              templateMode={!!activeTemplate}
            />

            {/* Spots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAndSortedSpots.map((spot) => (
                <DateSpotCard
                  key={spot.id}
                  dateSpot={spot}
                  isSelected={selectedSpots.some(s => s.id === spot.id)}
                  onSelect={handleSpotSelect}
                  distance={filterFromLocation ? spot.distance : undefined}
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
                activeTemplate={activeTemplate}
                templateProgress={activeTemplate ? selectedSpots.length / activeTemplate.categories.length : 0}
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
    </div>
  );
}

export default App;