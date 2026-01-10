'use client';

import { useState } from 'react';
import CitySearch from './CitySearch';
import { City } from '@/lib/cities';

export type InputMode = 'search' | 'map' | 'gps' | 'address';

interface CalculatorProps {
  onCalculate: (from: { lat: number; lon: number; name?: string }, to: { lat: number; lon: number; name?: string }) => void;
  onMapClick?: (lat: number, lon: number, isFrom: boolean) => void;
}

export default function Calculator({ onCalculate, onMapClick }: CalculatorProps) {
  const [mode, setMode] = useState<InputMode>('search');
  const [fromLocation, setFromLocation] = useState<{ lat: number; lon: number; name?: string } | null>(null);
  const [toLocation, setToLocation] = useState<{ lat: number; lon: number; name?: string } | null>(null);
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [gpsLoading, setGpsLoading] = useState(false);

  const handleCitySelect = (city: City, isFrom: boolean) => {
    const location = { lat: city.lat, lon: city.lon, name: `${city.name}, ${city.country}` };
    if (isFrom) {
      setFromLocation(location);
    } else {
      setToLocation(location);
    }
  };

  const handleGPS = (isFrom: boolean) => {
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          name: 'Your Location'
        };
        if (isFrom) {
          setFromLocation(location);
        } else {
          setToLocation(location);
        }
        setGpsLoading(false);
      },
      (error) => {
        console.error('GPS error:', error);
        alert('Unable to get your location. Please check permissions.');
        setGpsLoading(false);
      }
    );
  };

  const handleAddressSearch = async (address: string, isFrom: boolean) => {
    try {
      const res = await fetch(`/api/geocode?q=${encodeURIComponent(address)}`);
      const data = await res.json();
      
      if (data.lat && data.lon) {
        const location = { lat: data.lat, lon: data.lon, name: address };
        if (isFrom) {
          setFromLocation(location);
        } else {
          setToLocation(location);
        }
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
  };

  const handleCalculate = () => {
    if (fromLocation && toLocation) {
      onCalculate(fromLocation, toLocation);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex gap-2 mb-6 border-b">
        <button
          onClick={() => setMode('search')}
          className={`px-4 py-2 font-medium transition-colors ${
            mode === 'search' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Search
        </button>
        <button
          onClick={() => setMode('map')}
          className={`px-4 py-2 font-medium transition-colors ${
            mode === 'map' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Map
        </button>
        <button
          onClick={() => setMode('gps')}
          className={`px-4 py-2 font-medium transition-colors ${
            mode === 'gps' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          GPS
        </button>
        <button
          onClick={() => setMode('address')}
          className={`px-4 py-2 font-medium transition-colors ${
            mode === 'address' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Address
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From:</label>
          {mode === 'search' && (
            <CitySearch onSelect={(city) => handleCitySelect(city, true)} placeholder="Search for a city..." />
          )}
          {mode === 'map' && (
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm text-gray-600">
              Click on the map to set the starting point
            </div>
          )}
          {mode === 'gps' && (
            <button
              onClick={() => handleGPS(true)}
              disabled={gpsLoading}
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {gpsLoading ? 'Getting location...' : '📍 Use My Current Location'}
            </button>
          )}
          {mode === 'address' && (
            <div className="flex gap-2">
              <input
                type="text"
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
                placeholder="Enter an address..."
                className="flex-1 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => handleAddressSearch(fromAddress, true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          )}
          {fromLocation && (
            <div className="mt-2 p-2 bg-green-50 text-green-700 rounded text-sm">
              ✓ {fromLocation.name || `${fromLocation.lat.toFixed(4)}, ${fromLocation.lon.toFixed(4)}`}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To:</label>
          {mode === 'search' && (
            <CitySearch onSelect={(city) => handleCitySelect(city, false)} placeholder="Search for a city..." />
          )}
          {mode === 'map' && (
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm text-gray-600">
              Click on the map to set the destination
            </div>
          )}
          {mode === 'gps' && (
            <button
              onClick={() => handleGPS(false)}
              disabled={gpsLoading}
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {gpsLoading ? 'Getting location...' : '📍 Use My Current Location'}
            </button>
          )}
          {mode === 'address' && (
            <div className="flex gap-2">
              <input
                type="text"
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
                placeholder="Enter an address..."
                className="flex-1 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => handleAddressSearch(toAddress, false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          )}
          {toLocation && (
            <div className="mt-2 p-2 bg-green-50 text-green-700 rounded text-sm">
              ✓ {toLocation.name || `${toLocation.lat.toFixed(4)}, ${toLocation.lon.toFixed(4)}`}
            </div>
          )}
        </div>

        <button
          onClick={handleCalculate}
          disabled={!fromLocation || !toLocation}
          className="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
        >
          Calculate Distance
        </button>
      </div>
    </div>
  );
}