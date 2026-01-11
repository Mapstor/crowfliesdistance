'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import Calculator from '@/components/Calculator';
import Map from '@/components/Map';
import DistanceResult from '@/components/DistanceResult';
import ComprehensiveResult from '@/components/ComprehensiveResult';
import RelatedDistances from '@/components/RelatedDistances';
import FAQ from '@/components/FAQ';
import { haversineDistance, calculateBearing, bearingToDirection } from '@/lib/distance';
import { createPairSlug } from '@/lib/cities';
import { popularDistances } from '@/data/popular-distances';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const router = useRouter();
  const [fromLocation, setFromLocation] = useState<{ lat: number; lon: number; name?: string } | null>(null);
  const [toLocation, setToLocation] = useState<{ lat: number; lon: number; name?: string } | null>(null);
  const [result, setResult] = useState<{
    miles: number;
    km: number;
    bearing: number;
    direction: string;
  } | null>(null);
  const [shareUrl, setShareUrl] = useState<string>('');

  const handleCalculate = (
    from: { lat: number; lon: number; name?: string },
    to: { lat: number; lon: number; name?: string }
  ) => {
    setFromLocation(from);
    setToLocation(to);

    const distance = haversineDistance(from.lat, from.lon, to.lat, to.lon);
    const bearing = calculateBearing(from.lat, from.lon, to.lat, to.lon);
    const direction = bearingToDirection(bearing);

    setResult({
      miles: distance.miles,
      km: distance.km,
      bearing,
      direction
    });

    if (from.name && to.name) {
      const fromSlug = from.name.split(',')[0].toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const toSlug = to.name.split(',')[0].toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const pairSlug = createPairSlug(fromSlug, toSlug);
      const url = `${window.location.origin}/${pairSlug}`;
      setShareUrl(url);
    }
  };

  const handleMapClick = (lat: number, lon: number) => {
    const location = { lat, lon, name: `${lat.toFixed(4)}, ${lon.toFixed(4)}` };
    
    // Set point A if not set, otherwise set point B
    if (!fromLocation) {
      setFromLocation(location);
    } else if (!toLocation) {
      const newToLocation = location;
      setToLocation(newToLocation);
      
      // Calculate distance immediately
      const distance = haversineDistance(fromLocation.lat, fromLocation.lon, newToLocation.lat, newToLocation.lon);
      const bearing = calculateBearing(fromLocation.lat, fromLocation.lon, newToLocation.lat, newToLocation.lon);
      const direction = bearingToDirection(bearing);
      
      setResult({
        miles: distance.miles,
        km: distance.km,
        bearing,
        direction
      });
    } else {
      // If both are set, reset and start with point A
      setFromLocation(location);
      setToLocation(null);
      setResult(null);
    }
  };

  return (
    <>
      <StructuredData type="WebApplication" />
      <StructuredData type="WebSite" />
      <Layout>
      <div>

      {/* Main Content */}
      <main>
        {/* Hero Section with gradient */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-6">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-medium mb-1">
              Straight-Line Distance Calculator
            </h1>
            <p className="text-cyan-50 text-sm">
              Calculate "as the crow flies" distances between any two points on Earth
            </p>
          </div>
        </div>

        {/* Calculator and Map Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Left: Calculator */}
            <div className="lg:col-span-2">
              <Calculator 
                onCalculate={handleCalculate} 
                onMapClick={handleMapClick}
                fromLocation={fromLocation}
                toLocation={toLocation}
                setFromLocation={setFromLocation}
                setToLocation={setToLocation}
              />
              
              {/* Compact Results for sidebar */}
              {result && fromLocation && toLocation && (
                <div className="mt-6">
                  <DistanceResult
                    miles={result.miles}
                    km={result.km}
                    bearing={result.bearing}
                    direction={result.direction}
                    fromName={fromLocation.name || 'Point A'}
                    toName={toLocation.name || 'Point B'}
                    shareUrl={shareUrl}
                  />
                </div>
              )}
            </div>

            {/* Right: Map */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <Map
                  from={fromLocation || undefined}
                  to={toLocation || undefined}
                  onMapClick={handleMapClick}
                  showAnimation={!!result}
                  distance={result ? { miles: result.miles, km: result.km } : undefined}
                />
              </div>
            </div>
          </div>
          
          {/* Comprehensive Results Section - Full Width */}
          {result && fromLocation && toLocation && (
            <div className="mt-8">
              <ComprehensiveResult
                miles={result.miles}
                km={result.km}
                bearing={result.bearing}
                direction={result.direction}
                fromName={fromLocation.name || 'Point A'}
                toName={toLocation.name || 'Point B'}
              />
            </div>
          )}
        </div>

        {/* Info Cards with colored accents */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                What is Straight-Line Distance?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                The shortest distance between two points on Earth's surface, calculated along the great circle path. 
                Unlike driving routes, this measurement ignores terrain and obstacles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                How It Works
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Using the Haversine formula, we calculate the great-circle distance accounting for Earth's curvature. 
                Results are accurate within 0.5% for any two points on the globe.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                When to Use
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Perfect for aviation planning, geographical analysis, radio signal range calculations, 
                or simply understanding true distances between locations.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Searches with color */}
        <div className="bg-gradient-to-r from-gray-50 to-cyan-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-xl font-light text-gray-900 mb-6">Popular Distance Searches</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {popularDistances.map((distance, index) => {
                const distanceResult = haversineDistance(
                  distance.fromCoords.lat,
                  distance.fromCoords.lon,
                  distance.toCoords.lat,
                  distance.toCoords.lon
                );
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setFromLocation({ ...distance.fromCoords, name: distance.fromCity });
                      setToLocation({ ...distance.toCoords, name: distance.toCity });
                      const bearing = calculateBearing(
                        distance.fromCoords.lat,
                        distance.fromCoords.lon,
                        distance.toCoords.lat,
                        distance.toCoords.lon
                      );
                      setResult({
                        miles: distanceResult.miles,
                        km: distanceResult.km,
                        bearing,
                        direction: bearingToDirection(bearing)
                      });
                      // Scroll to calculator
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-white rounded-lg p-2.5 hover:shadow-md transition-all hover:scale-105 border border-gray-100 text-left"
                  >
                    <div className="text-xs font-medium text-gray-700 group-hover:text-cyan-600 transition-colors truncate">
                      {distance.fromCity} → {distance.toCity}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      <span className="text-cyan-600 font-semibold">{Math.round(distanceResult.miles).toLocaleString()}</span> mi
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FAQ />
        </div>
      </main>

      </div>
    </Layout>
    </>
  );
}