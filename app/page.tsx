'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Calculator from '@/components/Calculator';
import Map from '@/components/Map';
import DistanceResult from '@/components/DistanceResult';
import RelatedDistances from '@/components/RelatedDistances';
import FAQ from '@/components/FAQ';
import { haversineDistance, calculateBearing, bearingToDirection } from '@/lib/distance';
import { createPairSlug } from '@/lib/cities';

// Popular city pairs for related distances
const popularDistances = [
  { fromCity: 'London', toCity: 'Paris', slug: 'london-to-paris', miles: 214 },
  { fromCity: 'New York', toCity: 'Los Angeles', slug: 'los-angeles-to-new-york', miles: 2451 },
  { fromCity: 'London', toCity: 'New York', slug: 'london-to-new-york', miles: 3459 },
  { fromCity: 'Tokyo', toCity: 'Singapore', slug: 'singapore-to-tokyo', miles: 3312 },
  { fromCity: 'Sydney', toCity: 'Auckland', slug: 'auckland-to-sydney', miles: 1340 },
  { fromCity: 'Dubai', toCity: 'London', slug: 'dubai-to-london', miles: 3400 },
  { fromCity: 'Paris', toCity: 'Rome', slug: 'paris-to-rome', miles: 687 },
  { fromCity: 'Berlin', toCity: 'Moscow', slug: 'berlin-to-moscow', miles: 1004 },
  { fromCity: 'Mumbai', toCity: 'Delhi', slug: 'delhi-to-mumbai', miles: 708 },
  { fromCity: 'Cairo', toCity: 'Cape Town', slug: 'cairo-to-cape-town', miles: 4989 }
];

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

    // Create slug if both are cities
    if (from.name && to.name) {
      const fromSlug = from.name.split(',')[0].toLowerCase().replace(/\s+/g, '-');
      const toSlug = to.name.split(',')[0].toLowerCase().replace(/\s+/g, '-');
      const pairSlug = createPairSlug(fromSlug, toSlug);
      const url = `${window.location.origin}/${pairSlug}`;
      setShareUrl(url);
      
      // Update URL without reload
      router.push(`/${pairSlug}`, { scroll: false });
    }
  };

  const handleMapClick = (lat: number, lon: number) => {
    // This will be connected to the calculator's map mode
    console.log('Map clicked:', lat, lon);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">🐦 CrowFliesDistance.com</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Crow Flies Distance Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calculate the straight-line distance between any two points on Earth. 
              Also known as "as the crow flies" distance, this tool measures the shortest 
              path between locations, accounting for Earth's curvature.
            </p>
          </div>

          {/* Calculator */}
          <div className="max-w-3xl mx-auto mb-8">
            <Calculator onCalculate={handleCalculate} onMapClick={handleMapClick} />
          </div>

          {/* Map */}
          <div className="mb-8">
            <Map
              from={fromLocation || undefined}
              to={toLocation || undefined}
              onMapClick={handleMapClick}
              showAnimation={!!result}
            />
          </div>

          {/* Results */}
          {result && fromLocation && toLocation && (
            <div className="max-w-3xl mx-auto mb-8">
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

          {/* SEO Content */}
          <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Straight-Line Distance?</h2>
              <p className="text-gray-600 mb-4">
                Straight-line distance, often referred to as "as the crow flies" distance, is the shortest 
                distance between two points on Earth's surface. Unlike driving or walking distances that 
                follow roads and paths, straight-line distance represents the direct path a bird would 
                take when flying between two locations.
              </p>
              <p className="text-gray-600">
                This measurement is particularly useful for aviation, understanding geographical relationships, 
                and comparing the efficiency of different travel routes. Our calculator uses the Haversine 
                formula to accurately compute these distances, taking into account Earth's spherical shape.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Calculator</h2>
              <p className="text-gray-600 mb-4">
                Our distance calculator offers four convenient ways to input locations:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Search:</strong> Type city names to quickly find and select locations from our database of 500+ major cities worldwide.</li>
                <li><strong>Map:</strong> Click directly on the interactive map to set precise points for measurement.</li>
                <li><strong>GPS:</strong> Use your device's current location as a starting or ending point.</li>
                <li><strong>Address:</strong> Enter any address or location description for accurate geocoding.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Once you've selected both locations, click "Calculate Distance" to see the results in both 
                miles and kilometers, along with the bearing direction.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why "As the Crow Flies"?</h2>
              <p className="text-gray-600 mb-4">
                The phrase "as the crow flies" originated in the 18th century and refers to the straight, 
                direct flight path that crows are observed to take between two points. Unlike many birds 
                that might meander or follow landscape features, crows are known for their direct flight patterns.
              </p>
              <p className="text-gray-600">
                This idiom has become the standard way to describe straight-line distances in English, 
                distinguishing them from practical travel distances that must account for roads, terrain, 
                and obstacles.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Straight Line vs Driving Distance</h2>
              <p className="text-gray-600 mb-4">
                Understanding the difference between straight-line and driving distances is crucial for 
                travel planning. While straight-line distance gives you the absolute minimum distance between 
                two points, actual travel distances are always longer due to several factors:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Roads and highways rarely follow straight paths</li>
                <li>Natural obstacles like mountains, rivers, and lakes must be circumvented</li>
                <li>Urban areas require navigation through street grids</li>
                <li>Legal and political boundaries may necessitate detours</li>
              </ul>
              <p className="text-gray-600 mt-4">
                On average, driving distances are 20-50% longer than straight-line distances, though this 
                can vary significantly based on terrain and infrastructure. Air travel more closely approximates 
                straight-line distance but still includes deviations for air traffic patterns and safety corridors.
              </p>
            </section>
          </div>

          {/* Popular Distances */}
          <div className="max-w-4xl mx-auto mb-12">
            <RelatedDistances distances={popularDistances} title="Popular Distance Searches" />
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto mb-12">
            <FAQ />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">About CrowFliesDistance</h3>
              <p className="text-gray-300 text-sm">
                The most accurate straight-line distance calculator. Measure distances 
                between any two points on Earth using multiple input methods.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Popular Searches</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/london-to-paris" className="hover:text-white">London to Paris</a></li>
                <li><a href="/los-angeles-to-new-york" className="hover:text-white">New York to Los Angeles</a></li>
                <li><a href="/london-to-new-york" className="hover:text-white">London to New York</a></li>
                <li><a href="/singapore-to-tokyo" className="hover:text-white">Tokyo to Singapore</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 CrowFliesDistance.com. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}