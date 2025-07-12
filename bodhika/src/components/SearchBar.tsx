'use client';

import { useState } from 'react';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for questions, tags, or users..."
            className="block w-full pl-10 pr-12 py-3 border border-transparent rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      
      {/* Popular Tags */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-blue-100">Popular:</span>
        {['javascript', 'react', 'nextjs', 'typescript', 'nodejs'].map((tag) => (
          <button
            key={tag}
            onClick={() => setSearchQuery(tag)}
            className="text-sm text-blue-100 hover:text-white transition-colors"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
} 