import React from 'react';
import { DateSpot } from '../types';
import { Calendar, Clock, MapPin, X, Car, Navigation } from 'lucide-react';
import { getDistance } from '../data/mockData';

interface DatePlanProps {
  selectedSpots: DateSpot[];
  onRemove: (id: string) => void;
}

export const DatePlan: React.FC<DatePlanProps> = ({ selectedSpots, onRemove }) => {
  const getTravelTime = (distanceInMiles: number) => {
    // Walking time: average 3 mph
    const walkingTimeMinutes = Math.round((distanceInMiles / 3) * 60);
    // Driving time: average 25 mph in city (includes traffic, parking, etc.)
    const drivingTimeMinutes = Math.round((distanceInMiles / 25) * 60);
    
    const formatTime = (minutes: number) => {
      if (minutes < 60) {
        return `${minutes}m`;
      }
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    };
    
    return {
      walking: formatTime(walkingTimeMinutes),
      driving: formatTime(drivingTimeMinutes)
    };
  };
  const getTotalTime = () => {
    // Simple estimation - convert time ranges to average hours
    const totalMinutes = selectedSpots.reduce((total, spot) => {
      const timeStr = spot.estimatedTime;
      const match = timeStr.match(/(\d+\.?\d*)-?(\d+\.?\d*)?/);
      if (match) {
        const min = parseFloat(match[1]);
        const max = match[2] ? parseFloat(match[2]) : min;
        const avgHours = (min + max) / 2;
        return total + (avgHours * 60);
      }
      return total + 120; // Default 2 hours
    }, 0);
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  if (selectedSpots.length === 0) {
    return (
      <div className="bg-gray-50 rounded-xl p-8 text-center">
        <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Plans Yet</h3>
        <p className="text-gray-600">
          Start selecting date spots to build your perfect multi-part date!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Your Date Plan</h2>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span className="font-medium">{getTotalTime()}</span>
        </div>
      </div>

      <div className="space-y-4">
        {selectedSpots.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4">
                {index + 1}
              </div>
              
              {/* Thumbnail */}
              <div className="flex-shrink-0 mr-4">
                <img 
                  src={spot.image} 
                  alt={spot.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">
                  {spot.name}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span className="truncate">{spot.neighborhood}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {spot.estimatedTime}
                </div>
              </div>
              
              <div className="flex-shrink-0 flex items-center">
                <button
                  onClick={() => onRemove(spot.id)}
                  className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Travel Information Between Spots */}
            {index < selectedSpots.length - 1 && (
              <div className="flex justify-center">
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                  {(() => {
                    const currentSpot = selectedSpots[index];
                    const nextSpot = selectedSpots[index + 1];
                    const distance = getDistance(currentSpot.neighborhood, nextSpot.neighborhood);
                    const travelTimes = getTravelTime(distance);
                    
                    return (
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Navigation className="w-4 h-4 mr-1 text-blue-500" />
                          <span className="font-medium">{distance.toFixed(1)} mi</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300" />
                        <div className="flex items-center text-gray-600">
                          <div className="w-4 h-4 mr-1 flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                          </div>
                          <span>{travelTimes.walking}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Car className="w-4 h-4 mr-1 text-gray-500" />
                          <span>{travelTimes.driving}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {selectedSpots.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">
            Date Summary
          </h4>
          <div className="text-sm text-blue-700">
            <p>{selectedSpots.length} stops planned</p>
            <p>Estimated total time: {getTotalTime()}</p>
            {selectedSpots.length > 1 && (
              <p>
                Total travel distance: {
                  selectedSpots.reduce((total, spot, index) => {
                    if (index === 0) return 0;
                    const prevSpot = selectedSpots[index - 1];
                    return total + getDistance(prevSpot.neighborhood, spot.neighborhood);
                  }, 0).toFixed(1)
                } miles
              </p>
            )}
            <p className="mt-2 text-xs">
              💡 Click on any spot in your plan to filter nearby options!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};