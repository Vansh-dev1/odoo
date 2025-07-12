'use client';

import { useState } from 'react';

interface Category {
  name: string;
  count: number;
  color: string;
}

interface CategoryFilterProps {
  categories: Category[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)}
            className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
              selectedCategory === category.name
                ? 'bg-blue-50 border-blue-200 border'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
              <span className="text-sm font-medium text-gray-900">{category.name}</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>
      
      {selectedCategory && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
} 