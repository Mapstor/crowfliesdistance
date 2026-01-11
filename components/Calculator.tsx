'use client';

import { useState } from 'react';
import CitySearch from './CitySearch';
import { City } from '@/lib/cities';

export type InputMode = 'search' | 'gps' | 'address';

interface CalculatorProps {
  onCalculate: (from: { lat: number; lon: number; name?: string }, to: { lat: number; lon: number; name?: string }) => void;
  onMapClick?: (lat: number, lon: number, isFrom: boolean) => void;
  setFromLocation: (location: { lat: number; lon: number; name?: string } | null) => void;
  setToLocation: (location: { lat: number; lon: number; name?: string } | null) => void;
  fromLocation: { lat: number; lon: number; name?: string } | null;
  toLocation: { lat: number; lon: number; name?: string } | null;
}

export default function Calculator({ onCalculate, onMapClick, setFromLocation, setToLocation, fromLocation, toLocation }: CalculatorProps) {
  const [mode, setMode] = useState<InputMode>('search');
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [gpsLoading, setGpsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [addressLoading, setAddressLoading] = useState(false);

  const handleCitySelect = (city: City, isFrom: boolean) => {
    const location = { lat: city.lat, lon: city.lon, name: `${city.name}, ${city.country}` };
    if (isFrom) {
      setFromLocation(location);
    } else {
      setToLocation(location);
    }
  };

  const handleGPS = (isFrom: boolean) => {
    if (!navigator.geolocation) {
      setError('GPS location is not supported by this browser');
      return;
    }
    
    setGpsLoading(true);
    setError(null);
    
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
        let errorMessage = 'Unable to get your location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location permissions.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out. Please try again.';
            break;
        }
        setError(errorMessage);
        setGpsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    );
  };

  const handleAddressSearch = async (address: string, isFrom: boolean) => {
    if (!address.trim()) {
      setError('Please enter an address');
      return;
    }
    
    setAddressLoading(true);
    setError(null);
    
    try {
      const res = await fetch(`/api/geocode?q=${encodeURIComponent(address)}`);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data.lat && data.lon) {
        const location = { lat: data.lat, lon: data.lon, name: address };
        if (isFrom) {
          setFromLocation(location);
        } else {
          setToLocation(location);
        }
      } else {
        setError('Address not found. Please try a more specific address.');
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      setError('Unable to search address. Please check your connection and try again.');
    } finally {
      setAddressLoading(false);
    }
  };

  const handleCalculate = () => {
    if (fromLocation && toLocation) {
      onCalculate(fromLocation, toLocation);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-cyan-50/30 rounded-xl shadow-lg border-2 border-cyan-100/50 p-8 backdrop-blur-sm">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Distance Calculator
        </h2>
        <p className="text-gray-600">Choose your method and enter two locations</p>
        
        {/* Error Display */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <div className="font-semibold">Error</div>
              <div className="text-sm">{error}</div>
            </div>
            <button 
              onClick={() => setError(null)}
              className="ml-auto text-red-500 hover:text-red-700 font-bold text-xl"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* Mode Selection - More Prominent */}
      <div className="flex gap-2 mb-8 bg-white/80 rounded-xl p-2 shadow-inner border border-gray-100">
        <button
          onClick={() => setMode('search')}
          className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
            mode === 'search' 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md transform scale-105' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          <span className="text-lg">🔍</span>
          Search Cities
        </button>
        <button
          onClick={() => setMode('gps')}
          className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
            mode === 'gps' 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md transform scale-105' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          <span className="text-lg">📍</span>
          GPS Location
        </button>
        <button
          onClick={() => setMode('address')}
          className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
            mode === 'address' 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md transform scale-105' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          <span className="text-lg">🏠</span>
          Address
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-white/60 rounded-xl p-6 border border-gray-200/50">
          <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">A</span>
            Starting Location:
          </label>
          {mode === 'search' && (
            <CitySearch 
              onSelect={(city) => handleCitySelect(city, true)} 
              placeholder="🔍 Search for a city (e.g., London, New York)..." 
              enhanced={true}
              value={fromLocation?.name}
            />
          )}
          {mode === 'gps' && (
            <button
              onClick={() => handleGPS(true)}
              disabled={gpsLoading}
              className="w-full p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 transition-all shadow-md hover:shadow-lg font-semibold text-lg flex items-center justify-center gap-3"
            >
              {gpsLoading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                  Getting your location...
                </>
              ) : (
                <>
                  <span className="text-xl">📍</span>
                  Use My Current Location
                </>
              )}
            </button>
          )}
          {mode === 'address' && (
            <div className="flex gap-3">
              <input
                type="text"
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
                placeholder="🏠 Enter full address (e.g., 123 Main St, City, Country)..."
                className="flex-1 p-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-lg"
              />
              <button
                onClick={() => handleAddressSearch(fromAddress, true)}
                disabled={addressLoading}
                className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 transition-all shadow-md hover:shadow-lg font-semibold flex items-center gap-2"
              >
                {addressLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Finding...
                  </>
                ) : (
                  'Find'
                )}
              </button>
            </div>
          )}
          {fromLocation && (
            <div className="mt-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-3">
              <span className="text-xl">✅</span>
              <div>
                <div className="font-semibold">Location Set!</div>
                <div className="text-sm opacity-80">{fromLocation.name || `${fromLocation.lat.toFixed(4)}, ${fromLocation.lon.toFixed(4)}`}</div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white/60 rounded-xl p-6 border border-gray-200/50">
          <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">B</span>
            Destination:
          </label>
          {mode === 'search' && (
            <CitySearch 
              onSelect={(city) => handleCitySelect(city, false)} 
              placeholder="🔍 Search for destination city (e.g., Paris, Tokyo)..." 
              enhanced={true}
              value={toLocation?.name}
            />
          )}
          {mode === 'gps' && (
            <button
              onClick={() => handleGPS(false)}
              disabled={gpsLoading}
              className="w-full p-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 transition-all shadow-md hover:shadow-lg font-semibold text-lg flex items-center justify-center gap-3"
            >
              {gpsLoading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                  Getting your location...
                </>
              ) : (
                <>
                  <span className="text-xl">📍</span>
                  Use My Current Location
                </>
              )}
            </button>
          )}
          {mode === 'address' && (
            <div className="flex gap-3">
              <input
                type="text"
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
                placeholder="🏠 Enter destination address..."
                className="flex-1 p-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all text-lg"
              />
              <button
                onClick={() => handleAddressSearch(toAddress, false)}
                disabled={addressLoading}
                className="px-6 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 transition-all shadow-md hover:shadow-lg font-semibold flex items-center gap-2"
              >
                {addressLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Finding...
                  </>
                ) : (
                  'Find'
                )}
              </button>
            </div>
          )}
          {toLocation && (
            <div className="mt-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-800 rounded-xl flex items-center gap-3">
              <span className="text-xl">✅</span>
              <div>
                <div className="font-semibold">Destination Set!</div>
                <div className="text-sm opacity-80">{toLocation.name || `${toLocation.lat.toFixed(4)}, ${toLocation.lon.toFixed(4)}`}</div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={handleCalculate}
          disabled={!fromLocation || !toLocation}
          className={`w-full py-5 font-bold text-xl rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3 ${
            fromLocation && toLocation
              ? 'bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {fromLocation && toLocation ? (
            <>
              <span className="text-2xl">🧭</span>
              Calculate Distance
            </>
          ) : (
            <>
              <span className="text-2xl opacity-50">📍</span>
              Select Both Locations First
            </>
          )}
        </button>
      </div>
    </div>
  );
}