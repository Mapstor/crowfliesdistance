'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { calculateDistance } from '@/lib/distance';

// Dynamically import the map to avoid SSR issues
const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

interface CityPair {
  city1: string;
  city2: string;
  coords1: { lat: number; lon: number };
  coords2: { lat: number; lon: number };
  distance: number;
  fact: string;
}

interface InteractiveDistanceMapProps {
  cityPairs: CityPair[];
  selectedIndex?: number;
}

export default function InteractiveDistanceMap({ cityPairs, selectedIndex = 0 }: InteractiveDistanceMapProps) {
  const [currentPair, setCurrentPair] = useState(selectedIndex);
  const [showComparison, setShowComparison] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (selectedIndex !== undefined) {
      setCurrentPair(selectedIndex);
      setAnimating(true);
      setTimeout(() => setAnimating(false), 500);
    }
  }, [selectedIndex]);

  const pair = cityPairs[currentPair];
  const distance = calculateDistance(
    pair.coords1.lat,
    pair.coords1.lon,
    pair.coords2.lat,
    pair.coords2.lon
  );

  // Find interesting comparisons
  const getComparisons = (miles: number) => {
    const comparisons = [
      { threshold: 50, text: "Walking distance in a very long day" },
      { threshold: 200, text: "A comfortable day's drive" },
      { threshold: 500, text: "Distance from Los Angeles to San Francisco" },
      { threshold: 1000, text: "Distance from New York to Miami" },
      { threshold: 2500, text: "Width of the continental United States" },
      { threshold: 3500, text: "Distance from New York to London" },
      { threshold: 5000, text: "Distance from London to Mumbai" },
      { threshold: 7000, text: "Quarter way around the Earth" },
      { threshold: 10000, text: "Nearly halfway around the world" },
      { threshold: 12000, text: "Almost antipodal - opposite sides of Earth" },
    ];

    return comparisons.filter(c => miles >= c.threshold && miles < c.threshold * 2);
  };

  const comparisons = getComparisons(distance.miles);

  return (
    <div className="space-y-4">
      {/* City Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {cityPairs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentPair(idx);
              setAnimating(true);
              setTimeout(() => setAnimating(false), 500);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentPair === idx
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Interactive Map */}
      <div className={`relative transition-all duration-500 ${animating ? 'scale-95 opacity-75' : 'scale-100 opacity-100'}`}>
        <MapClient
          from={{ lat: pair.coords1.lat, lon: pair.coords1.lon, name: pair.city1 }}
          to={{ lat: pair.coords2.lat, lon: pair.coords2.lon, name: pair.city2 }}
          distance={distance}
        />
        
        {/* Overlay Info */}
        <div className="absolute top-4 left-4 right-4 z-[1000]">
          <div className="bg-white/95 backdrop-blur rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {pair.city1} → {pair.city2}
                </h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {distance.miles.toLocaleString()} miles
                </p>
                <p className="text-sm text-gray-600">
                  {distance.km.toLocaleString()} kilometers
                </p>
              </div>
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-lg text-sm hover:bg-cyan-200 transition-colors"
              >
                {showComparison ? 'Hide' : 'Show'} Comparisons
              </button>
            </div>

            {showComparison && comparisons.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-2">This distance is like:</p>
                <ul className="space-y-1">
                  {comparisons.map((comp, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2">•</span>
                      {comp.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {pair.fact && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Fun fact:</span> {pair.fact}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Distance Visualization Bar */}
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Distance Scale</span>
          <span className="text-sm text-gray-600">Max: 12,451 miles (Earth's half circumference)</span>
        </div>
        <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000"
            style={{ width: `${(distance.miles / 12451) * 100}%` }}
          >
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xs font-semibold">
              {Math.round((distance.miles / 12451) * 100)}%
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <p className="text-xs text-gray-500 mb-1">Flight Time</p>
          <p className="text-lg font-semibold text-gray-900">
            {Math.round(distance.miles / 500)} hours
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <p className="text-xs text-gray-500 mb-1">Driving Days</p>
          <p className="text-lg font-semibold text-gray-900">
            {Math.round(distance.miles / 500)} days
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <p className="text-xs text-gray-500 mb-1">Walking Days</p>
          <p className="text-lg font-semibold text-gray-900">
            {Math.round(distance.miles / 20)} days
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <p className="text-xs text-gray-500 mb-1">Speed of Sound</p>
          <p className="text-lg font-semibold text-gray-900">
            {(distance.miles / 767).toFixed(1)} hrs
          </p>
        </div>
      </div>
    </div>
  );
}