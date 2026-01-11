'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component
const InteractiveDistanceMap = dynamic(() => import('@/components/InteractiveDistanceMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading interactive visualization...</p>
    </div>
  ),
});

export default function GreatCircleRoutesPost() {
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [showVisualization, setShowVisualization] = useState(false);
  const [activeTab, setActiveTab] = useState('concept');

  const greatCircleRoutes = [
    {
      from: "New York",
      to: "Tokyo",
      coords1: { lat: 40.7128, lon: -74.0060 },
      coords2: { lat: 35.6762, lon: 139.6503 },
      flatDistance: "10,850 km (straight east)",
      greatCircleDistance: "10,850 km (over the Arctic)",
      savings: "Nearly the same distance but completely different path",
      explanation: "The great circle route goes north over Alaska and Siberia, not straight across the Pacific"
    },
    {
      from: "London",
      to: "Los Angeles", 
      coords1: { lat: 51.5074, lon: -0.1278 },
      coords2: { lat: 34.0522, lon: -118.2437 },
      flatDistance: "8,756 km (straight west)",
      greatCircleDistance: "8,756 km (over Greenland)",
      savings: "Route goes over the Arctic, not across the Atlantic and US",
      explanation: "The shortest path crosses Greenland and Canada, appearing curved on flat maps"
    },
    {
      from: "Dubai",
      to: "San Francisco",
      coords1: { lat: 25.2048, lon: 55.2708 },
      coords2: { lat: 37.7749, lon: -122.4194 },
      flatDistance: "13,400 km (straight east)",
      greatCircleDistance: "13,041 km (over the North Pole)",
      savings: "359 km shorter via polar route",
      explanation: "Flying nearly over the North Pole is shorter than going straight east or west"
    },
    {
      from: "Sydney",
      to: "Santiago",
      coords1: { lat: -33.8688, lon: 151.2093 },
      coords2: { lat: -33.4489, lon: -70.6693 },
      flatDistance: "11,350 km (across Pacific)",
      greatCircleDistance: "11,350 km (over Antarctica edge)",
      savings: "The route clips the edge of Antarctica",
      explanation: "One of the few routes where going south makes sense due to Earth's spherical geometry"
    }
  ];

  const navigationMethods = [
    {
      name: "Magnetic Compass",
      invented: "12th century",
      accuracy: "±5 degrees",
      description: "Points to magnetic north, which differs from true north by varying amounts depending on location",
      limitation: "Useless near magnetic poles, affected by metal objects"
    },
    {
      name: "Sextant",
      invented: "1731",
      accuracy: "±1 nautical mile",
      description: "Measures angle between celestial objects and horizon to determine latitude and longitude",
      limitation: "Requires clear sky, stable platform, and accurate timekeeping"
    },
    {
      name: "GPS",
      invented: "1978 (civilian use 1983)",
      accuracy: "±5 meters",
      description: "Uses signals from satellites to triangulate position anywhere on Earth",
      limitation: "Requires clear view of sky, can be jammed or spoofed"
    },
    {
      name: "Inertial Navigation",
      invented: "1950s",
      accuracy: "Drift: 1 km/hour",
      description: "Uses accelerometers and gyroscopes to track movement from a known starting point",
      limitation: "Accuracy degrades over time without external reference"
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
            <li className="text-gray-900">Great Circle Routes and Navigation</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Understanding Great Circle Routes: Why the Shortest Distance Isn't a Straight Line
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2024-01-11">January 11, 2024</time>
            <span>•</span>
            <span>16 min read</span>
            <span>•</span>
            <span>Navigation & Geography</span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-8 mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🧭</div>
            <p className="text-lg text-gray-700 italic">
              "On a sphere, the shortest distance between two points is not what it appears to be on a flat map"
            </p>
            <p className="text-sm text-gray-600 mt-2">- Fundamental principle of spherical geometry</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Every time you board an international flight, you're experiencing one of the most counterintuitive 
              aspects of living on a sphere: the shortest path between two points appears curved on our flat maps. 
              This phenomenon, known as a great circle route, has shaped navigation, aviation, and our understanding 
              of global geography for centuries. Today, we'll unravel this geographic mystery and discover why your 
              flight from New York to Tokyo goes over Alaska instead of straight across the Pacific.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What You'll Learn</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• What great circles are and why they matter</li>
                <li>• How flat map projections distort our perception of distance</li>
                <li>• Why airplanes fly "curved" routes that are actually straight</li>
                <li>• The mathematics behind great circle calculations</li>
                <li>• Historical evolution of navigation methods</li>
                <li>• Real-world applications in aviation and shipping</li>
              </ul>
            </div>
          </section>

          {/* What is a Great Circle? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Exactly Is a Great Circle?</h2>
            
            <p className="text-gray-700 mb-6">
              Imagine slicing through the Earth with a giant blade that passes through the planet's center. 
              The edge where the blade meets Earth's surface forms a great circle—the largest possible circle 
              that can be drawn on a sphere. The equator is a great circle, as are all lines of longitude 
              (meridians), but latitude lines (except the equator) are not.
            </p>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Properties of Great Circles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">✓ Always Great Circles</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• The Equator</li>
                    <li>• All meridians (longitude lines)</li>
                    <li>• Any circle through Earth's center</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">✗ Never Great Circles</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Latitude lines (except equator)</li>
                    <li>• Tropic of Cancer/Capricorn</li>
                    <li>• Arctic/Antarctic circles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">The Fundamental Rule</h3>
              <p className="text-gray-700 text-lg font-medium mb-3">
                The shortest distance between any two points on a sphere lies along a great circle.
              </p>
              <p className="text-gray-600 text-sm">
                This is why ships and planes follow great circle routes whenever possible—it's literally 
                the shortest path, even though it looks curved on most maps.
              </p>
            </div>
          </section>

          {/* Interactive Route Comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">See Great Circle Routes in Action</h2>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Select different routes below to see how the great circle path (shortest distance) differs 
                from what appears to be a "straight line" on a flat map.
              </p>
              
              {/* Route Selector Tabs */}
              <div className="flex gap-2 flex-wrap mb-4">
                {greatCircleRoutes.map((route, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedRoute(idx)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedRoute === idx
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {route.from} → {route.to}
                  </button>
                ))}
              </div>

              {/* Selected Route Details */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {greatCircleRoutes[selectedRoute].from} to {greatCircleRoutes[selectedRoute].to}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">If Earth were flat:</p>
                    <p className="text-lg font-semibold text-red-600">{greatCircleRoutes[selectedRoute].flatDistance}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Great Circle Route:</p>
                    <p className="text-lg font-semibold text-green-600">{greatCircleRoutes[selectedRoute].greatCircleDistance}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">💡 Key Insight:</p>
                  <p className="text-gray-700">{greatCircleRoutes[selectedRoute].savings}</p>
                  <p className="text-gray-600 text-sm mt-2">{greatCircleRoutes[selectedRoute].explanation}</p>
                </div>
              </div>

              {/* Visual Map */}
              <div className="mt-6">
                <InteractiveDistanceMap
                  cityPairs={[{
                    city1: greatCircleRoutes[selectedRoute].from,
                    city2: greatCircleRoutes[selectedRoute].to,
                    coords1: greatCircleRoutes[selectedRoute].coords1,
                    coords2: greatCircleRoutes[selectedRoute].coords2,
                    distance: 0, // Will be calculated by component
                    fact: greatCircleRoutes[selectedRoute].explanation
                  }]}
                  selectedIndex={0}
                />
              </div>
            </div>
          </section>

          {/* Why Maps Distort */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Map Projection Problem</h2>
            
            <p className="text-gray-700 mb-6">
              The fundamental challenge of cartography is that you cannot flatten a sphere without distortion. 
              It's mathematically impossible. Try peeling an orange and laying the peel flat—you'll either 
              tear it or stretch it. Maps face the same problem.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3">📐 Mercator Projection</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Preserves angles and shapes locally, making it perfect for navigation, but massively 
                  distorts sizes near the poles.
                </p>
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-xs font-medium text-gray-600 mb-1">Distortion examples:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Greenland appears larger than Africa</li>
                    <li>• Alaska seems bigger than Mexico</li>
                    <li>• Great circles appear as curves</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3">🌍 Gnomonic Projection</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Shows all great circles as straight lines, making it ideal for planning long-distance 
                  routes, but severely distorts shapes and sizes.
                </p>
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-xs font-medium text-gray-600 mb-1">Best for:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Navigation planning</li>
                    <li>• Radio signal paths</li>
                    <li>• Seismic wave propagation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">The Mercator Paradox</h3>
              <p className="text-gray-700">
                The Mercator projection, used by Google Maps and most online mapping services, makes 
                great circle routes appear curved, even though they're the straightest possible paths 
                on Earth's surface. This visual paradox has confused travelers for centuries.
              </p>
            </div>
          </section>

          {/* Mathematics of Great Circles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Mathematics Behind Great Circles</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">The Haversine Formula</h3>
              <p className="text-gray-700 mb-4">
                The distance between two points on a sphere is calculated using the haversine formula, 
                which accounts for Earth's spherical shape:
              </p>
              
              <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{`d = 2r × arcsin(√(sin²(Δφ/2) + cos(φ₁) × cos(φ₂) × sin²(Δλ/2)))

Where:
  d  = distance
  r  = Earth's radius (6,371 km)
  φ₁ = latitude of point 1 (in radians)
  φ₂ = latitude of point 2 (in radians)
  Δφ = latitude difference
  Δλ = longitude difference`}</pre>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-lg p-4 border border-cyan-100">
                <h4 className="font-medium text-gray-900 mb-2">Initial Bearing</h4>
                <p className="text-sm text-gray-600 mb-2">
                  The compass direction to start traveling along a great circle
                </p>
                <p className="text-xs text-gray-500 font-mono">
                  θ = atan2(sin(Δλ)×cos(φ₂), cos(φ₁)×sin(φ₂) − sin(φ₁)×cos(φ₂)×cos(Δλ))
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-medium text-gray-900 mb-2">Midpoint</h4>
                <p className="text-sm text-gray-600 mb-2">
                  The halfway point along a great circle route
                </p>
                <p className="text-xs text-gray-500 font-mono">
                  Not simply the average of coordinates!
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 border border-purple-100">
                <h4 className="font-medium text-gray-900 mb-2">Crossing Points</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Where the route crosses specific latitudes or longitudes
                </p>
                <p className="text-xs text-gray-500 font-mono">
                  Used for waypoint navigation
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Why Simple Averaging Doesn't Work</h3>
              <p className="text-gray-700 mb-3">
                You can't find the midpoint of a great circle route by averaging latitudes and longitudes. 
                Here's why:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Sphere vs. Plane:</strong> Coordinates are angular measurements, not linear distances</li>
                <li>• <strong>Varying Scale:</strong> A degree of longitude varies in distance depending on latitude</li>
                <li>• <strong>Curved Space:</strong> The shortest path follows Earth's curvature, not coordinate grid</li>
              </ul>
            </div>
          </section>

          {/* Historical Evolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Evolution of Navigation: From Stars to Satellites</h2>
            
            <div className="space-y-4">
              {navigationMethods.map((method, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{method.name}</h3>
                      <p className="text-sm text-gray-500">Invented: {method.invented}</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                      {method.accuracy}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{method.description}</p>
                  <div className="bg-gray-50 rounded p-3">
                    <p className="text-sm text-gray-600">
                      <strong>Limitation:</strong> {method.limitation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">The Longitude Problem</h3>
              <p className="text-gray-700 mb-3">
                For centuries, determining longitude at sea was navigation's greatest challenge. While 
                latitude could be found using the sun or stars, longitude required knowing the exact time 
                difference between your location and a reference point.
              </p>
              <p className="text-gray-700">
                The British government offered £20,000 (millions in today's money) for a solution. John 
                Harrison's marine chronometer, perfected in 1761, finally solved this problem and 
                revolutionized navigation.
              </p>
            </div>
          </section>

          {/* Aviation Applications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Great Circles in Modern Aviation</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Why Your Flight Path Looks Weird</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-3xl">✈️</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">New York to Hong Kong</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Instead of flying west across the US and Pacific, flights go north over the Arctic. 
                      This polar route saves 2,000 km and 2-3 hours of flight time.
                    </p>
                    <div className="bg-cyan-50 rounded p-2 text-xs text-gray-600">
                      Route: New York → Arctic Canada → North Pole region → Siberia → China → Hong Kong
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">✈️</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Dubai to San Francisco</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      The great circle route goes almost directly over the North Pole, crossing Russia, 
                      the Arctic Ocean, and Canada. It looks absurd on a flat map but saves hours.
                    </p>
                    <div className="bg-cyan-50 rounded p-2 text-xs text-gray-600">
                      Route: Dubai → Iran → Russia → Arctic Ocean → Canada → United States → San Francisco
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">✈️</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Singapore to Newark</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      The world's longest commercial flight (18+ hours) follows a great circle route over 
                      the North Pole, despite both cities being relatively far south.
                    </p>
                    <div className="bg-cyan-50 rounded p-2 text-xs text-gray-600">
                      Route: Singapore → South China Sea → China → Mongolia → Russia → Arctic → Greenland → Newark
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                <h3 className="font-semibold text-gray-900 mb-3">Fuel Savings</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Airlines save millions annually by following great circle routes:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 10-15% shorter distances on long-haul flights</li>
                  <li>• Reduced fuel consumption and emissions</li>
                  <li>• Lower operating costs passed to passengers</li>
                  <li>• Ability to carry more cargo with fuel savings</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border border-orange-100">
                <h3 className="font-semibold text-gray-900 mb-3">Route Limitations</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Not all flights follow perfect great circles due to:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Restricted airspace (military, political)</li>
                  <li>• ETOPS regulations for twin-engine aircraft</li>
                  <li>• Jet stream optimization (can be faster)</li>
                  <li>• Weather avoidance and turbulence</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Shipping and Maritime */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Great Circles at Sea</h2>
            
            <p className="text-gray-700 mb-6">
              Ships have followed great circle routes for centuries, though ocean travel presents unique 
              challenges compared to aviation.
            </p>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Famous Shipping Routes</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">🚢 North Atlantic Track</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Ships between Europe and North America follow great circle routes that arc northward, 
                    bringing them close to Greenland and Iceland.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Historical note:</strong> The Titanic was following a great circle route when it 
                    encountered icebergs in 1912. Modern ships now adjust their routes seasonally.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">🚢 Trans-Pacific Routes</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Container ships between Asia and North America follow great circles that arc far north, 
                    sometimes passing through the Aleutian Islands.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Weather factor:</strong> Ships often deviate south to avoid North Pacific storms, 
                    adding days to the journey but ensuring safety.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">🚢 Cape Route</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Before the Suez Canal, ships between Europe and Asia followed a great circle route around 
                    Africa's Cape of Good Hope, one of history's most important trade routes.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Modern relevance:</strong> Ships too large for the Suez Canal (Ultra Large Container 
                    Vessels) still use this route today.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Applications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Applications Beyond Navigation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="text-2xl mb-3">📡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Radio Communications</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Radio signals follow great circle paths. Ham radio operators use great circle maps to 
                  aim antennas for long-distance communication.
                </p>
                <p className="text-xs text-gray-600 bg-gray-50 rounded p-2">
                  A signal from London to Sydney travels over Russia and China, not over Africa.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="text-2xl mb-3">🌍</div>
                <h3 className="font-semibold text-gray-900 mb-2">Earthquake Waves</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Seismic waves travel along great circles through Earth's interior. Seismologists use 
                  this to locate earthquake epicenters.
                </p>
                <p className="text-xs text-gray-600 bg-gray-50 rounded p-2">
                  Three detection stations can pinpoint any earthquake's location using great circles.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-semibold text-gray-900 mb-2">Missile Defense</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Ballistic missiles follow great circle trajectories. Defense systems calculate 
                  interception points along these paths.
                </p>
                <p className="text-xs text-gray-600 bg-gray-50 rounded p-2">
                  This is why Arctic radar stations are crucial for detecting missiles between continents.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="text-2xl mb-3">🛰️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Satellite Coverage</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Satellite footprints and communication paths follow great circle geometry for optimal 
                  coverage area calculation.
                </p>
                <p className="text-xs text-gray-600 bg-gray-50 rounded p-2">
                  Geostationary satellites can't provide coverage above 81° latitude due to great circle limits.
                </p>
              </div>
            </div>
          </section>

          {/* Common Misconceptions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Misconceptions About Great Circles</h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-5 border border-red-100">
                <div className="flex gap-4">
                  <div className="text-2xl">❌</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Myth: "Planes fly curved routes to follow wind patterns"
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Reality:</strong> The primary reason routes appear curved is the great circle 
                      principle. Winds (like jet streams) can modify the exact path, but the curve would 
                      exist even in perfectly still air.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border border-red-100">
                <div className="flex gap-4">
                  <div className="text-2xl">❌</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Myth: "The equator is the longest great circle"
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Reality:</strong> All great circles on a sphere have the same length. The equator 
                      isn't special in terms of length—it's just the only latitude line that's a great circle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border border-red-100">
                <div className="flex gap-4">
                  <div className="text-2xl">❌</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Myth: "GPS makes great circle navigation obsolete"
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Reality:</strong> GPS tells you where you are, but you still need great circle 
                      calculations to determine the shortest route to your destination. GPS systems use these 
                      calculations internally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border border-red-100">
                <div className="flex gap-4">
                  <div className="text-2xl">❌</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Myth: "Flat-earthers can't explain great circles"
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Reality:</strong> While we won't entertain flat earth theories, it's worth noting 
                      that great circle navigation is one of many proofs of Earth's spherical shape. The fact 
                      that these routes work perfectly for navigation is evidence of our spherical planet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future of Navigation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Future of Great Circle Navigation</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Emerging Technologies</h3>
              
              <div className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">🚀 Suborbital Flights</h4>
                  <p className="text-sm text-gray-700">
                    Future passenger rockets will follow ballistic trajectories (extreme great circles) 
                    through space, reducing London-Sydney travel time to under 2 hours.
                  </p>
                </div>

                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">🌊 Autonomous Ships</h4>
                  <p className="text-sm text-gray-700">
                    AI-powered vessels will optimize great circle routes in real-time, considering weather, 
                    currents, and traffic to find the perfect balance between distance and conditions.
                  </p>
                </div>

                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">✈️ Dynamic Airways</h4>
                  <p className="text-sm text-gray-700">
                    Free Route Airspace initiatives allow pilots to fly optimal great circles without 
                    following predetermined airways, saving millions in fuel annually.
                  </p>
                </div>

                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">🌐 Quantum Navigation</h4>
                  <p className="text-sm text-gray-700">
                    Quantum sensors will provide navigation without GPS, using Earth's magnetic field 
                    and quantum interference to follow great circles with unprecedented accuracy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Calculate Your Own Great Circle Distance</h2>
              <p className="mb-6">
                Discover the shortest distance between any two points on Earth and see why the path might 
                surprise you. Our calculator shows both the distance and the initial bearing for great 
                circle navigation.
              </p>
              <a 
                href="/"
                className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Try the Distance Calculator
              </a>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Sphere We Call Home</h2>
            
            <p className="text-gray-700 mb-4">
              Great circles are more than mathematical curiosities or navigation tools—they're a fundamental 
              consequence of living on a sphere. Every time you see a curved flight path on a map, you're 
              witnessing the intersection of geometry, physics, and human ingenuity.
            </p>

            <p className="text-gray-700 mb-4">
              From ancient Polynesian navigators following star paths across the Pacific to modern pilots 
              threading their way between continents, humans have always sought the shortest path across 
              our spherical home. The great circle principle connects these journeys across millennia, 
              reminding us that despite our flat maps and rectangular screens, we live on a beautiful, 
              complex sphere spinning through space.
            </p>

            <p className="text-gray-700 mb-4">
              The next time you fly internationally, watch the flight path on the seatback screen. That 
              seemingly bizarre curve over the Arctic or the unexpected detour over Siberia isn't a 
              mistake—it's geometry in action, saving time, fuel, and money while following the invisible 
              mathematics written into the shape of our planet.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
              <p className="text-gray-700 italic">
                "The Earth is a very small stage in a vast cosmic arena. On this sphere, everyone you 
                love, everyone you know, everyone you ever heard of, every human being who ever was, 
                lived out their lives."
              </p>
              <p className="text-sm text-gray-600 mt-2">— Carl Sagan, adapted</p>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Quick Reference: Great Circle Facts</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Earth's circumference: 40,075 km (24,901 mi) at equator</li>
                  <li>• Maximum possible distance: 20,037 km (12,451 mi)</li>
                  <li>• All great circles have the same length on a perfect sphere</li>
                  <li>• The equator is the only latitude that's a great circle</li>
                  <li>• All meridians (longitude lines) are great circles</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Two points define exactly one great circle (unless antipodal)</li>
                  <li>• Antipodal points have infinite great circles through them</li>
                  <li>• Ships save 1-3 days on trans-ocean routes via great circles</li>
                  <li>• Flights save 10-15% distance on long-haul routes</li>
                  <li>• Radio waves naturally follow great circle paths</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/why-planes-dont-fly-straight" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">Why Planes Don't Fly in Straight Lines</h3>
                <p className="text-sm text-gray-600">Deep dive into aviation routing and the reality of "straight" flight paths.</p>
              </Link>
              
              <Link href="/blog/surprising-city-distances" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">10 Surprising City Distances</h3>
                <p className="text-sm text-gray-600">City pairs that are much closer or farther than you'd expect.</p>
              </Link>
              
              <Link href="/blog/how-to-measure-distance-on-map" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">How to Measure Distance on a Map</h3>
                <p className="text-sm text-gray-600">Traditional and modern methods for measuring distances accurately.</p>
              </Link>
              
              <Link href="/blog/what-does-as-the-crow-flies-mean" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">What Does "As the Crow Flies" Mean?</h3>
                <p className="text-sm text-gray-600">The history and meaning behind this distance measurement phrase.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}