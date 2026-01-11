'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function WhyPlanesDontFlyStraightPost() {
  const [activeSection, setActiveSection] = useState('greatcircle');
  const [selectedRoute, setSelectedRoute] = useState(0);

  const flightRoutes = [
    {
      from: "New York",
      to: "Tokyo",
      straightDistance: "6,740 miles",
      actualDistance: "6,850 miles",
      maxLatitude: "72°N",
      timeSaved: "45 minutes",
      fuelSaved: "3,500 gallons"
    },
    {
      from: "Dubai",
      to: "Los Angeles",
      straightDistance: "8,320 miles",
      actualDistance: "8,420 miles",
      maxLatitude: "78°N",
      timeSaved: "50 minutes",
      fuelSaved: "4,200 gallons"
    },
    {
      from: "London",
      to: "Sydney",
      straightDistance: "10,560 miles",
      actualDistance: "11,280 miles",
      maxLatitude: "65°N",
      timeSaved: "70 minutes",
      fuelSaved: "6,800 gallons"
    },
    {
      from: "Singapore",
      to: "San Francisco",
      straightDistance: "8,446 miles",
      actualDistance: "8,590 miles",
      maxLatitude: "71°N",
      timeSaved: "35 minutes",
      fuelSaved: "2,900 gallons"
    }
  ];

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-cyan-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/blog" className="hover:text-cyan-600">Blog</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">Why Planes Don\'t Fly in Straight Lines</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Why Planes Don\'t Fly in Straight Lines
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2024-01-12">January 12, 2024</time>
            <span>•</span>
            <span>16 min read</span>
            <span>•</span>
            <span>Aviation & Geography</span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-8 mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">✈️</div>
            <p className="text-lg text-gray-700 italic">
              "The shortest distance between two points is a great circle, not a straight line on a flat map"
            </p>
            <p className="text-sm text-gray-600 mt-2">- Aviation Navigation Principle</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If you\'ve ever tracked a long-haul flight on a map, you\'ve probably noticed something peculiar: 
              the plane appears to take a curved, seemingly indirect route. A flight from New York to Tokyo 
              arcs far north over Alaska, while London to Los Angeles passes over Greenland. Why don\'t planes 
              simply fly straight across the map? The answer reveals fundamental truths about our planet\'s 
              geometry, aviation economics, and the complex factors that determine flight paths.
            </p>
            
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Key Insight</h3>
              <p className="text-gray-700">
                What looks like a curve on a flat map is actually the shortest path on Earth\'s spherical surface. 
                Planes do fly the shortest route—it just doesn\'t look straight on our 2D maps.
              </p>
            </div>
          </section>

          {/* The Great Circle Route */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Great Circle Route: Earth\'s Shortest Path</h2>
            
            <p className="text-gray-700 mb-6">
              The fundamental reason planes appear to fly curved paths lies in the difference between a flat 
              map and Earth\'s spherical reality. What we call a "straight line" on a map is actually a complex 
              curve when translated to a sphere.
            </p>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Understanding Great Circles</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-cyan-50 to-white p-4 rounded-lg border border-cyan-100">
                  <h4 className="font-semibold text-gray-800 mb-2">What is a Great Circle?</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    A great circle is any circle drawn on a sphere that divides it into two equal hemispheres. 
                    It represents the largest possible circle on the sphere\'s surface.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• The Equator is a great circle</li>
                    <li>• All lines of longitude are great circles</li>
                    <li>• Lines of latitude (except Equator) are NOT</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Why It\'s the Shortest Path</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    The shortest distance between any two points on a sphere follows the great circle that 
                    connects them—like stretching a string tight around a globe.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Minimizes distance traveled</li>
                    <li>• Natural geodesic path</li>
                    <li>• Used by ships and planes alike</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> New York to London<br />
                  • Flat map "straight line": Would cross the Atlantic at 40°N latitude<br />
                  • Great circle route: Arcs north to 55°N, passing south of Greenland<br />
                  • Distance saved: ~200 miles (320 km)
                </p>
              </div>
            </div>

            {/* Visual Example */}
            <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🌍 Real Flight Path Examples</h3>
              
              <div className="flex gap-2 mb-4 flex-wrap">
                {flightRoutes.map((route, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedRoute(idx)}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                      selectedRoute === idx 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {route.from} → {route.to}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Great Circle Distance</p>
                    <p className="text-xl font-bold text-cyan-600">{flightRoutes[selectedRoute].straightDistance}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Max Latitude Reached</p>
                    <p className="text-xl font-bold text-gray-900">{flightRoutes[selectedRoute].maxLatitude}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Time Saved</p>
                    <p className="text-xl font-bold text-green-600">{flightRoutes[selectedRoute].timeSaved}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Fuel Saved:</strong> {flightRoutes[selectedRoute].fuelSaved} 
                    (worth ~${(parseInt(flightRoutes[selectedRoute].fuelSaved.replace(/,/g, '')) * 2.5).toLocaleString()})
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Map Projections Problem */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Map Projection Problem</h2>
            
            <p className="text-gray-700 mb-6">
              The curved appearance of flight paths is largely an artifact of how we represent our 3D planet 
              on 2D maps. Different map projections distort reality in different ways.
            </p>

            <div className="space-y-6">
              {/* Mercator Projection */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📐 Mercator Projection</h3>
                <p className="text-gray-700 mb-4">
                  The most common world map projection, created in 1569 for nautical navigation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-800 mb-2">Advantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Preserves angles and shapes locally</li>
                      <li>✓ North is always up</li>
                      <li>✓ Great for navigation</li>
                      <li>✓ Familiar to most people</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-800 mb-2">Distortions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✗ Massive size distortion near poles</li>
                      <li>✗ Greenland appears larger than Africa</li>
                      <li>✗ Great circles appear as curves</li>
                      <li>✗ Distances increasingly wrong with latitude</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Flight Path Effect:</strong> On Mercator maps, efficient polar routes look like huge 
                    detours, when they\'re actually shortcuts.
                  </p>
                </div>
              </div>

              {/* Other Projections */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🗺️ Alternative Projections</h3>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Gnomonic Projection</h4>
                    <p className="text-sm text-gray-600">
                      Great circles appear as straight lines! Used for plotting flight routes but distorts 
                      distances and areas severely.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Azimuthal Equidistant</h4>
                    <p className="text-sm text-gray-600">
                      Shows true distances from center point. Airlines use these centered on their hubs for 
                      route planning.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Robinson Projection</h4>
                    <p className="text-sm text-gray-600">
                      Balanced compromise showing reasonable shapes and sizes, but no property is perfectly 
                      preserved. Great circles still appear curved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Constraints */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Planes Don\'t Always Follow Great Circles</h2>
            
            <p className="text-gray-700 mb-6">
              While great circle routes are the shortest, real flights often deviate due to numerous practical 
              constraints. Modern flight planning is a complex optimization problem balancing distance, safety, 
              cost, and regulations.
            </p>

            <div className="space-y-6">
              {/* Jet Streams */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💨 Jet Streams</h3>
                <p className="text-gray-700 mb-4">
                  High-altitude wind currents flowing at 100-200 mph can dramatically affect flight times.
                </p>
                
                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Strategic Use:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <strong>Eastbound flights:</strong> Ride jet streams, saving 30-60 minutes on 
                      transatlantic routes
                    </li>
                    <li>
                      <strong>Westbound flights:</strong> Avoid headwinds by flying north or south of jet 
                      streams
                    </li>
                    <li>
                      <strong>Seasonal variations:</strong> Jet streams shift, changing optimal routes 
                      throughout the year
                    </li>
                  </ul>
                </div>

                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Record:</strong> British Airways Flight 112 rode a 200+ mph jet stream in 2020, 
                    flying New York to London in just 4 hours 56 minutes—nearly 80 minutes faster than scheduled.
                  </p>
                </div>
              </div>

              {/* Airspace Restrictions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🚫 Airspace Restrictions</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Political Restrictions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Conflict zones (Ukraine, Syria, Yemen)</li>
                      <li>• Closed airspace (North Korea)</li>
                      <li>• Diplomatic disputes</li>
                      <li>• Military exercise areas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Regulatory Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ETOPS certification for ocean crossing</li>
                      <li>• Polar route special equipment</li>
                      <li>• Overflight permits needed</li>
                      <li>• Noise abatement procedures</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Flights from Europe to Asia often detour around Russian airspace 
                    since 2022, adding 2-4 hours to flight times and burning 20-30% more fuel.
                  </p>
                </div>
              </div>

              {/* Air Traffic Control */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🗼 Air Traffic Control Systems</h3>
                
                <p className="text-gray-700 mb-4">
                  The sky is divided into corridors and flight levels to manage thousands of simultaneous flights safely.
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-2xl">🛩️</span>
                    <div>
                      <h4 className="font-medium text-gray-800">Airways and Tracks</h4>
                      <p className="text-sm text-gray-600">
                        Planes follow predefined highways in the sky. Over oceans, daily "tracks" are published 
                        based on weather and traffic.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-2xl">📡</span>
                    <div>
                      <h4 className="font-medium text-gray-800">Radar Coverage</h4>
                      <p className="text-sm text-gray-600">
                        Routes must stay within radar or satellite coverage for tracking. This affects oceanic 
                        and polar routes especially.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-medium text-gray-800">Waypoint Navigation</h4>
                      <p className="text-sm text-gray-600">
                        Flights navigate between fixed waypoints with 5-letter codes (like LOGAN, SCUPP). 
                        These create zigzag paths rather than smooth curves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ETOPS and Twin-Engine Rules */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ETOPS: Why Some Planes Can\'t Fly Direct</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
              <p className="text-gray-700 mb-4">
                ETOPS (Extended-range Twin-engine Operations Performance Standards) requires twin-engine aircraft 
                to stay within a certain flying time of an emergency airport. This creates "no-fly zones" over 
                remote oceans and polar regions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white/80 rounded p-3 text-center">
                  <p className="text-2xl font-bold text-indigo-600">60 min</p>
                  <p className="text-xs text-gray-600">Basic ETOPS</p>
                </div>
                <div className="bg-white/80 rounded p-3 text-center">
                  <p className="text-2xl font-bold text-indigo-600">180 min</p>
                  <p className="text-xs text-gray-600">Most common</p>
                </div>
                <div className="bg-white/80 rounded p-3 text-center">
                  <p className="text-2xl font-bold text-purple-600">370 min</p>
                  <p className="text-xs text-gray-600">Maximum allowed</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/70 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Impact:</strong> A 180-minute ETOPS rating means the plane must always be within 
                  3 hours flying time (on one engine) of a suitable airport. This can add hundreds of miles 
                  to Pacific routes.
                </p>
              </div>
            </div>
          </section>

          {/* Weather Considerations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Weather: The Daily Route Changer</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🌪️ Weather Avoidance</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-1">Thunderstorms</h4>
                  <p className="text-sm text-gray-600">
                    Pilots deviate 20+ miles around severe thunderstorms. Cumulonimbus clouds can reach 
                    60,000 feet—well above cruise altitude.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-1">Clear Air Turbulence</h4>
                  <p className="text-sm text-gray-600">
                    Invisible turbulence at cruise altitude forces route changes. Particularly common near 
                    jet streams and mountain ranges.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-1">Volcanic Ash</h4>
                  <p className="text-sm text-gray-600">
                    Ash clouds can damage engines. The 2010 Eyjafjallajökull eruption closed European 
                    airspace for 6 days.
                  </p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-1">Icing Conditions</h4>
                  <p className="text-sm text-gray-600">
                    Certain altitudes and temperatures create dangerous icing. Pilots adjust altitude or 
                    route to avoid these zones.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Daily Planning:</strong> Airlines run sophisticated weather models every 6 hours, 
                  adjusting routes for optimal safety and comfort. A flight\'s exact path is rarely decided 
                  more than 2 hours before departure.
                </p>
              </div>
            </div>
          </section>

          {/* Economic Factors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Economics of Flight Paths</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💰 Cost Optimization</h3>
              
              <p className="text-gray-700 mb-4">
                Airlines constantly balance multiple costs when choosing routes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Fuel Costs</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Fuel represents 20-30% of operating costs
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Jet fuel: ~$2.50/gallon</li>
                    <li>• 747 burns: 5 gallons/mile</li>
                    <li>• 100-mile detour: $1,250 extra</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Time Costs</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Every minute costs money
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Crew wages: $20/minute</li>
                    <li>• Aircraft lease: $30/minute</li>
                    <li>• Maintenance cycles</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Overflight Fees</h4>
                <p className="text-sm text-gray-600">
                  Countries charge airlines for using their airspace:
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Russia: ~$100 per 100km for a 777</li>
                  <li>• Canada: ~$0.04 per km per passenger</li>
                  <li>• Some routes detour to avoid expensive airspace</li>
                  <li>• Can add $5,000-$20,000 to a long-haul flight</li>
                </ul>
              </div>
            </div>
          </section>

          {/* North Atlantic Tracks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">North Atlantic Tracks: The Sky\'s Daily Highway</h2>
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
              <p className="text-gray-700 mb-4">
                The North Atlantic is the world\'s busiest oceanic airspace, with 1,500+ flights daily. To manage 
                this traffic safely and efficiently, a unique system creates temporary flight paths each day.
              </p>

              <div className="bg-white/80 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">How NAT Tracks Work:</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <p className="text-sm text-gray-700">
                      <strong>Twice daily:</strong> New tracks published at 0100 UTC (westbound) and 1200 UTC (eastbound)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <p className="text-sm text-gray-700">
                      <strong>Weather optimized:</strong> Routes follow jet streams and avoid storms
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <p className="text-sm text-gray-700">
                      <strong>Labeled A-Z:</strong> Track A is most northern, progressing south
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <p className="text-sm text-gray-700">
                      <strong>60nm separation:</strong> Tracks spaced for safety without radar
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Efficiency gain:</strong> Optimized tracks save airlines 1,000+ gallons of fuel per 
                  flight and reduce flight times by 10-30 minutes compared to fixed routes.
                </p>
              </div>
            </div>
          </section>

          {/* Polar Routes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Polar Routes: Flying Over the Top</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                Since the 1990s, polar routes have revolutionized flights between North America and Asia, 
                cutting hours off flight times.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">✅ Advantages</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Saves 2-3 hours on NYC-Hong Kong</li>
                    <li>• Reduces fuel by 15-20%</li>
                    <li>• Avoids Russian overflight fees</li>
                    <li>• Less turbulence than Pacific routes</li>
                    <li>• Great circle path for many city pairs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">⚠️ Challenges</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Extreme cold (-70°F) affects fuel</li>
                    <li>• Magnetic compass unreliable</li>
                    <li>• Limited emergency airports</li>
                    <li>• Increased radiation exposure</li>
                    <li>• Special crew training required</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Interesting fact:</strong> Santa\'s home at the North Pole is designated as waypoint 
                  "SANTA" in aviation charts, and pilots sometimes report "sleigh sightings" on Christmas Eve!
                </p>
              </div>
            </div>
          </section>

          {/* Future of Flight Routing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Future of Flight Routing</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🤖 AI-Optimized Routes</h3>
                <p className="text-gray-700 mb-3">
                  Machine learning is revolutionizing flight planning:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time weather integration adjusts routes mid-flight</li>
                  <li>• Predictive turbulence avoidance using passenger aircraft data</li>
                  <li>• Fuel optimization considering 1000s of variables</li>
                  <li>• Dynamic airspace management reducing congestion</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌱 Sustainable Aviation</h3>
                <p className="text-gray-700 mb-3">
                  Environmental concerns are reshaping route planning:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Contrail avoidance routing (contrails cause 2% of global warming)</li>
                  <li>• Formation flying for fuel efficiency (like migrating birds)</li>
                  <li>• Continuous descent approaches saving fuel</li>
                  <li>• Electric aircraft enabling new short-haul routes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🚀 Supersonic Return</h3>
                <p className="text-gray-700 mb-3">
                  Next-generation supersonic aircraft will change routing priorities:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Boom Supersonic\'s Overture: Mach 1.7 over water only</li>
                  <li>• Routes designed to minimize sonic boom impact</li>
                  <li>• NYC to London in 3.5 hours</li>
                  <li>• Premium routes prioritizing time over fuel efficiency</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Calculate Your Own Flight Distance</h2>
              <p className="mb-6">
                See how much shorter the great circle route is compared to what you might expect. 
                Our calculator shows you the true "as the crow flies" distance between any two points.
              </p>
              <a 
                href="/"
                className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Try Distance Calculator
              </a>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Beautiful Complexity of Flight</h2>
            
            <p className="text-gray-700 mb-4">
              What appears as a simple curved line on a flight tracker represents an incredibly complex 
              optimization problem. Every flight path is a delicate balance of physics, economics, politics, 
              weather, and safety considerations. The curve you see isn\'t a detour—it\'s the result of 
              centuries of navigation knowledge, decades of aviation experience, and cutting-edge technology 
              working together.
            </p>

            <p className="text-gray-700 mb-4">
              Next time you track a flight online or gaze out an airplane window over Greenland on your way 
              from New York to Paris, remember: you\'re not taking a detour. You\'re following the invisible 
              great circle that girdles our globe, the same path sailors and aviators have sought for centuries
              —the shortest distance between two points on our beautifully spherical Earth.
            </p>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-6">
              <p className="text-gray-700 italic">
                "The Earth is round, and the shortest path between two points on its surface is not what it 
                seems on a flat map. In aviation, as in life, the most direct route often appears curved to 
                those viewing from a limited perspective."
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Why does my flight to Asia go over the North Pole?",
                  a: "Polar routes are often the shortest path between northern cities in America/Europe and Asia. The Earth is a sphere, and the shortest distance follows a great circle that often passes near or over the pole. This can save 2-3 hours compared to flying straight across the Pacific."
                },
                {
                  q: "Do pilots manually fly these curved routes?",
                  a: "No, modern aircraft use Flight Management Systems (FMS) that automatically follow pre-programmed waypoints. Pilots monitor the systems and can make adjustments for weather or ATC instructions, but the aircraft flies the route automatically."
                },
                {
                  q: "Why is my westbound flight longer than eastbound?",
                  a: "Jet streams! These high-altitude winds blow west to east at 100-200 mph. Eastbound flights ride these winds, while westbound flights must fight against them or route around them. A NYC-London flight can be 1-2 hours shorter eastbound."
                },
                {
                  q: "Could a plane fly in a perfectly straight line if it wanted to?",
                  a: "Technically yes, but it would be inefficient and possibly dangerous. It would mean constantly changing heading (since north changes as you move around the globe), ignoring weather and winds, and possibly violating airspace restrictions."
                },
                {
                  q: "Why don\'t we use rockets for passenger travel since they can go straight?",
                  a: "Suborbital flights are being developed (SpaceX Starship, Virgin Galactic), but they\'re currently extremely expensive, require special training for passengers, and have significant safety and regulatory hurdles. They may become viable for ultra-premium travel in the 2030s."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-700 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/what-does-as-the-crow-flies-mean" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">What Does "As the Crow Flies" Mean?</h3>
                <p className="text-sm text-gray-600">Understanding straight-line distances and their significance.</p>
              </Link>
              
              <Link href="/blog/straight-line-vs-driving-distance" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">Straight Line vs Driving Distance</h3>
                <p className="text-sm text-gray-600">Why ground routes are always longer than air distances.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}