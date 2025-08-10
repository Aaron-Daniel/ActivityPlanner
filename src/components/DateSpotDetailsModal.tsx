import React from 'react';
import { X, Star, DollarSign, MapPin, Clock, Camera } from 'lucide-react';
import { DateSpot } from '../types';

interface DateSpotDetailsModalProps {
  dateSpot: DateSpot | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors = {
  restaurant: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  activity: 'bg-blue-100 text-blue-800 border-blue-200',
  bar: 'bg-purple-100 text-purple-800 border-purple-200',
  entertainment: 'bg-orange-100 text-orange-800 border-orange-200'
};

const categoryLabels = {
  restaurant: 'Dining',
  activity: 'Activity',
  bar: 'Nightlife',
  entertainment: 'Entertainment'
};

export const DateSpotDetailsModal: React.FC<DateSpotDetailsModalProps> = ({
  dateSpot,
  isOpen,
  onClose
}) => {
  if (!isOpen || !dateSpot) return null;

  const getPriceLevelSymbol = (level: number) => {
    return '$'.repeat(level);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border mr-4 ${categoryColors[dateSpot.category]}`}>
                {categoryLabels[dateSpot.category]}
              </span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{dateSpot.name}</h2>
                <div className="flex items-center mt-1 text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{dateSpot.location}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Image Gallery */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Camera className="w-5 h-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Photos</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dateSpot.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`${dateSpot.name} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <div>
                  <div className="text-lg font-bold text-yellow-800">{dateSpot.rating}</div>
                  <div className="text-sm text-yellow-600">Rating</div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                <div>
                  <div className="text-lg font-bold text-green-800">{getPriceLevelSymbol(dateSpot.priceLevel)}</div>
                  <div className="text-sm text-green-600">Price Level</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <div>
                  <div className="text-lg font-bold text-blue-800">{dateSpot.estimatedTime}</div>
                  <div className="text-sm text-blue-600">Duration</div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-indigo-500 mr-2" />
                <div>
                  <div className="text-lg font-bold text-indigo-800">{dateSpot.neighborhood}</div>
                  <div className="text-sm text-indigo-600">Area</div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
            <p className="text-gray-700 leading-relaxed">{dateSpot.description}</p>
          </div>

          {/* Details Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Highlights */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h3>
              <ul className="space-y-2">
                {dateSpot.details.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
              <ul className="space-y-2">
                {dateSpot.details.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Atmosphere and Best For */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Atmosphere</h3>
              <p className="text-gray-700">{dateSpot.details.atmosphere}</p>
              {dateSpot.details.cuisine && (
                <div className="mt-2">
                  <span className="text-sm font-medium text-gray-600">Cuisine: </span>
                  <span className="text-sm text-gray-700">{dateSpot.details.cuisine}</span>
                </div>
              )}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect For</h3>
              <div className="flex flex-wrap gap-2">
                {dateSpot.details.bestFor.map((item, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tips */}
          {dateSpot.details.tips && (
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Pro Tip</h3>
              <p className="text-yellow-700">{dateSpot.details.tips}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};