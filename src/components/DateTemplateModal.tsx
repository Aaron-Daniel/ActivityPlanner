import React from 'react';
import { X, Clock, ArrowRight } from 'lucide-react';
import { DateTemplate } from '../types';
import { dateTemplates } from '../data/templates';

interface DateTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: DateTemplate) => void;
}

const categoryLabels = {
  restaurant: 'Dining',
  activity: 'Activity',
  bar: 'Nightlife',
  entertainment: 'Entertainment'
};

const categoryColors = {
  restaurant: 'bg-emerald-100 text-emerald-700',
  activity: 'bg-blue-100 text-blue-700',
  bar: 'bg-purple-100 text-purple-700',
  entertainment: 'bg-orange-100 text-orange-700'
};

export const DateTemplateModal: React.FC<DateTemplateModalProps> = ({
  isOpen,
  onClose,
  onSelectTemplate
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Date Templates</h2>
              <p className="text-gray-600 mt-1">Choose a template to get started with your perfect date</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dateTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => onSelectTemplate(template)}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl mb-2">{template.icon}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {template.duration}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {template.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {template.description}
                </p>
                
                <div className="flex items-center flex-wrap gap-2">
                  {template.categories.map((category, index) => (
                    <React.Fragment key={`${category}-${index}`}>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        categoryColors[category as keyof typeof categoryColors]
                      }`}>
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </span>
                      {index < template.categories.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-gray-400" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                
                <div className="mt-4 text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Select this template →
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
          <p className="text-sm text-gray-600 text-center">
            💡 Templates guide you through selecting spots in the perfect order for your date type
          </p>
        </div>
      </div>
    </div>
  );
};