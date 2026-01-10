import { getCityBySlug, parsePairSlug } from '@/lib/cities';
import { haversineDistance, calculateBearing, bearingToDirection, estimateFlightTime } from '@/lib/distance';
import { notFound } from 'next/navigation';
import Map from '@/components/Map';
import Calculator from '@/components/Calculator';
import RelatedDistances from '@/components/RelatedDistances';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

// ISR: Generate on-demand, cache forever
export const dynamic = 'force-static';
export const revalidate = false;

// No pre-built pages - all generated on-demand
export async function generateStaticParams() {
  return [];
}

interface PageProps {
  params: { cityPair: string }
}

async function getRelatedDistances(currentCitySlug: string) {
  // Generate related distances based on the current city
  const relatedPairs = [
    { fromCity: 'London', toCity: 'Paris', slug: 'london-to-paris', miles: 214 },
    { fromCity: 'New York', toCity: 'Los Angeles', slug: 'los-angeles-to-new-york', miles: 2451 },
    { fromCity: 'Tokyo', toCity: 'Singapore', slug: 'singapore-to-tokyo', miles: 3312 },
    { fromCity: 'Dubai', toCity: 'London', slug: 'dubai-to-london', miles: 3400 },
    { fromCity: 'Sydney', toCity: 'Auckland', slug: 'auckland-to-sydney', miles: 1340 },
    { fromCity: 'Paris', toCity: 'Rome', slug: 'paris-to-rome', miles: 687 },
    { fromCity: 'Berlin', toCity: 'Moscow', slug: 'berlin-to-moscow', miles: 1004 },
    { fromCity: 'Mumbai', toCity: 'Delhi', slug: 'delhi-to-mumbai', miles: 708 },
    { fromCity: 'Cairo', toCity: 'Cape Town', slug: 'cairo-to-cape-town', miles: 4989 },
    { fromCity: 'London', toCity: 'New York', slug: 'london-to-new-york', miles: 3459 }
  ];
  
  // Filter out the current pair and return 10
  return relatedPairs.filter(p => p.slug !== currentCitySlug).slice(0, 10);
}

function getDidYouKnowFact(cityA: string, cityB: string, miles: number): string {
  const facts = [
    `The straight-line distance from ${cityA} to ${cityB} is approximately ${miles} miles, but the actual flight path is typically 5-10% longer due to air traffic routes and weather patterns.`,
    `If you could travel at the speed of sound (767 mph), the journey from ${cityA} to ${cityB} would take approximately ${Math.round(miles / 767 * 60)} minutes.`,
    `The distance from ${cityA} to ${cityB} is roughly equivalent to ${Math.round(miles / 238855)} trips to the moon!`,
    `Walking non-stop at 3 mph, it would take approximately ${Math.round(miles / 3)} hours to walk from ${cityA} to ${cityB} in a straight line.`,
    `A commercial jet flying from ${cityA} to ${cityB} would burn approximately ${Math.round(miles * 3)} gallons of fuel for this distance.`
  ];
  
  return facts[Math.floor(Math.random() * facts.length)];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parsePairSlug(params.cityPair);
  if (!parsed) {
    return {
      title: 'Distance Calculator - CrowFliesDistance',
      description: 'Calculate straight-line distances between cities'
    };
  }

  const [cityA, cityB] = await Promise.all([
    getCityBySlug(parsed.cityA),
    getCityBySlug(parsed.cityB)
  ]);

  if (!cityA || !cityB) {
    return {
      title: 'Distance Calculator - CrowFliesDistance',
      description: 'Calculate straight-line distances between cities'
    };
  }

  const { miles, km } = haversineDistance(cityA.lat, cityA.lon, cityB.lat, cityB.lon);

  return {
    title: `${cityA.name} to ${cityB.name} Distance: ${miles} miles / ${km} km | CrowFliesDistance`,
    description: `The straight-line distance from ${cityA.name}, ${cityA.country} to ${cityB.name}, ${cityB.country} is ${miles} miles (${km} km). Calculate "as the crow flies" distances with our accurate calculator.`,
    openGraph: {
      title: `${cityA.name} to ${cityB.name}: ${miles} miles`,
      description: `Straight-line distance: ${miles} miles / ${km} kilometers`,
      type: 'website'
    }
  };
}

export default async function CityPairPage({ params }: PageProps) {
  const parsed = parsePairSlug(params.cityPair);
  if (!parsed) notFound();
  
  const [cityA, cityB] = await Promise.all([
    getCityBySlug(parsed.cityA),
    getCityBySlug(parsed.cityB)
  ]);
  
  if (!cityA || !cityB) notFound();
  
  const { miles, km } = haversineDistance(cityA.lat, cityA.lon, cityB.lat, cityB.lon);
  const bearing = calculateBearing(cityA.lat, cityA.lon, cityB.lat, cityB.lon);
  const direction = bearingToDirection(bearing);
  const flightTime = estimateFlightTime(km);
  const didYouKnow = getDidYouKnowFact(cityA.name, cityB.name, miles);
  const relatedDistances = await getRelatedDistances(params.cityPair);

  // Estimated driving distance (roughly 30% more than straight-line)
  const drivingDistance = Math.round(miles * 1.3);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">🐦 CrowFliesDistance.com</a>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {cityA.name} to {cityB.name} Distance
            </h1>
            <p className="text-lg text-gray-600">
              Calculate the straight-line distance "as the crow flies"
            </p>
          </div>

          {/* Map with animation */}
          <div className="mb-8">
            <Map
              from={{ lat: cityA.lat, lon: cityA.lon, name: cityA.name }}
              to={{ lat: cityB.lat, lon: cityB.lon, name: cityB.name }}
              showAnimation={true}
            />
          </div>

          {/* Distance Results */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {miles.toLocaleString()} mi / {km.toLocaleString()} km
                </div>
                <div className="text-xl text-gray-600">
                  Direction: {bearing.toFixed(0)}° ({direction})
                </div>
              </div>

              {/* Quick Facts Table */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-bold mb-4">Quick Facts</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Straight-line Distance</div>
                    <div className="font-semibold">{miles.toLocaleString()} miles / {km.toLocaleString()} km</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Bearing</div>
                    <div className="font-semibold">{bearing.toFixed(0)}° {direction}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Estimated Flight Time</div>
                    <div className="font-semibold">{Math.floor(flightTime / 60)}h {flightTime % 60}m</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Coordinates</div>
                    <div className="font-semibold text-sm">
                      {cityA.lat.toFixed(2)}°N, {cityA.lon.toFixed(2)}°E → {cityB.lat.toFixed(2)}°N, {cityB.lon.toFixed(2)}°E
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* City Descriptions */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-3">About {cityA.name}</h2>
              <p className="text-gray-600">{cityA.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                <div>Country: {cityA.country}</div>
                {cityA.population && <div>Population: {cityA.population.toLocaleString()}</div>}
                <div>Coordinates: {cityA.lat.toFixed(4)}°, {cityA.lon.toFixed(4)}°</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-3">About {cityB.name}</h2>
              <p className="text-gray-600">{cityB.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                <div>Country: {cityB.country}</div>
                {cityB.population && <div>Population: {cityB.population.toLocaleString()}</div>}
                <div>Coordinates: {cityB.lat.toFixed(4)}°, {cityB.lon.toFixed(4)}°</div>
              </div>
            </div>
          </div>

          {/* Did You Know */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">💡 Did You Know?</h3>
              <p className="text-blue-800">{didYouKnow}</p>
            </div>
          </div>

          {/* Compare to Driving */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Compare to Driving Distance</h2>
              <p className="text-gray-600 mb-4">
                While the straight-line distance from {cityA.name} to {cityB.name} is {miles.toLocaleString()} miles, 
                the actual driving distance would be approximately {drivingDistance.toLocaleString()} miles. 
                This difference is due to the need to follow roads, navigate around geographical features, 
                and respect international borders.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-500">Straight-line</div>
                    <div className="text-xl font-bold text-blue-600">{miles.toLocaleString()} mi</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Estimated Driving</div>
                    <div className="text-xl font-bold text-green-600">~{drivingDistance.toLocaleString()} mi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Distances */}
          <div className="max-w-4xl mx-auto mb-8">
            <RelatedDistances distances={relatedDistances} title="Related Distance Calculations" />
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto mb-8">
            <FAQ />
          </div>

          {/* Calculator */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Calculate Another Distance</h2>
              <Calculator 
                onCalculate={(from, to) => {
                  // This would navigate to the new city pair page
                  if (from.name && to.name) {
                    const fromSlug = from.name.split(',')[0].toLowerCase().replace(/\s+/g, '-');
                    const toSlug = to.name.split(',')[0].toLowerCase().replace(/\s+/g, '-');
                    const newPair = [fromSlug, toSlug].sort().join('-to-');
                    window.location.href = `/${newPair}`;
                  }
                }} 
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-400">
            © 2024 CrowFliesDistance.com. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}