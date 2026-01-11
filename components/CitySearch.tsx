'use client';

import { useState, useEffect, useRef } from 'react';
import { City } from '@/lib/cities';

interface CitySearchProps {
  onSelect: (city: City) => void;
  placeholder?: string;
  enhanced?: boolean;
  value?: string;
}

export default function CitySearch({ onSelect, placeholder = 'Search for a city...', enhanced = false, value }: CitySearchProps) {
  const [query, setQuery] = useState(value || '');
  const [results, setResults] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setQuery(value);
    }
  }, [value]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/cities?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
        setShowDropdown(data.length > 0);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(debounceTimer.current);
  }, [query]);

  const handleSelect = (city: City) => {
    setQuery(`${city.name}, ${city.country}`);
    setShowDropdown(false);
    onSelect(city);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => results.length > 0 && setShowDropdown(true)}
        placeholder={placeholder}
        className={enhanced 
          ? "w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-lg placeholder-gray-400 shadow-sm hover:shadow-md"
          : "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        }
      />
      
      {isLoading && (
        <div className={`absolute ${enhanced ? 'right-4 top-4' : 'right-3 top-3'}`}>
          <div className={`animate-spin rounded-full border-b-2 border-cyan-600 ${enhanced ? 'h-6 w-6' : 'h-5 w-5'}`}></div>
        </div>
      )}

      {showDropdown && results.length > 0 && (
        <div className={enhanced 
          ? "absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-80 overflow-auto"
          : "absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto"
        }>
          {results.map((city) => (
            <button
              key={city.id}
              onClick={() => handleSelect(city)}
              className={enhanced
                ? "w-full px-5 py-4 text-left hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 border-b border-gray-100 last:border-b-0 transition-all group"
                : "w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
              }
            >
              <div className={enhanced 
                ? "font-semibold text-gray-900 group-hover:text-cyan-700 text-lg" 
                : "font-medium text-gray-900"
              }>
                {city.name}
              </div>
              <div className={enhanced 
                ? "text-gray-600 group-hover:text-cyan-600" 
                : "text-sm text-gray-500"
              }>
                {city.country}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}