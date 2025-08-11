import React from 'react';
import { Star, Clock, DollarSign, MapPin, Info } from 'lucide-react';
import { DateSpot } from '../types';

interface DateSpotCardProps {
  dateSpot: DateSpot;
  isSelected: boolean;
  onSelect: (dateSpot: DateSpot) => void;
  distance?: number;
  onShowDetails: (dateSpot: DateSpot) => void;
}

const categoryColors = {
  restaurant: 'bg-emerald-100 text-emerald-800',
  activity: 'bg-blue-100 text-blue-800',
  bar: 'bg-purple-100 text-purple-800',
  entertainment: 'bg-orange-100 text-orange-800'
};

const categoryLabels = {
  restaurant: 'Dining',
  activity: 'Activity',
  bar: 'Nightlife',
  entertainment: 'Entertainment'
};

export const DateSpotCard: React.FC<DateSpotCardProps> = ({ 
  dateSpot, 
  isSelected, 
  onSelect,
  distance,
  onShowDetails
}) => {
  const getPriceLevelSymbol = (level: number) => {
    return '$'.repeat(level);
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
        isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''
      } group`}
      onClick={() => onSelect(dateSpot)}
    >
      <div className="relative">
        <img 
          src={dateSpot.image} 
          alt={dateSpot.name}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {distance !== undefined && distance > 0 && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
            {distance.toFixed(1)} mi
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[dateSpot.category]}`}>
            {categoryLabels[dateSpot.category]}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {dateSpot.name}
          </h3>
          {isSelected && (
            <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center ml-2">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {dateSpot.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{dateSpot.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-sm font-medium text-gray-700">
                {dateSpot.rating}
              </span>
            </div>
            
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm font-medium text-gray-700">
                {getPriceLevelSymbol(dateSpot.priceLevel)}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {dateSpot.estimatedTime}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onShowDetails(dateSpot);
              }}
             className="inline-flex items-center px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 opacity-90 group-hover:opacity-100 hover:scale-105 shadow-sm hover:shadow-md"
              title="View details"
            >
             <Info className="w-4 h-4 mr-1" />
             Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};