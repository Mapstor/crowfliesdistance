'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function HowToMeasureDistancePost() {
  const [activeMethod, setActiveMethod] = useState('digital');
  const [selectedTool, setSelectedTool] = useState(0);

  const digitalTools = [
    {
      name: "Google Maps",
      platform: "Web/Mobile",
      accuracy: "Very High",
      cost: "Free",
      bestFor: "Everyday use, route planning"
    },
    {
      name: "Google Earth Pro",
      platform: "Desktop",
      accuracy: "Excellent",
      cost: "Free",
      bestFor: "Professional measurements, terrain analysis"
    },
    {
      name: "ArcGIS",
      platform: "Desktop/Web",
      accuracy: "Professional",
      cost: "Paid",
      bestFor: "Professional GIS work, research"
    },
    {
      name: "OpenStreetMap",
      platform: "Web",
      accuracy: "High",
      cost: "Free",
      bestFor: "Open source projects, custom maps"
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
            <li className="text-gray-900">How to Measure Distance on a Map</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            How to Measure Distance on a Map
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2024-01-13">January 13, 2024</time>
            <span>•</span>
            <span>18 min read</span>
            <span>•</span>
            <span>Maps & Navigation</span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-8 mb-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 text-5xl mb-4">
              <span>🗺️</span>
              <span>📏</span>
              <span>📍</span>
            </div>
            <p className="text-lg text-gray-700 italic">
              "Give me a map and a ruler, and I\'ll measure the world"
            </p>
            <p className="text-sm text-gray-600 mt-2">- Ancient Cartographer\'s Proverb</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Whether you\'re planning a hike, calculating delivery routes, or simply curious about the distance 
              between two places, knowing how to measure distance on a map is an essential skill. From traditional 
              paper maps to cutting-edge digital tools, there are numerous methods to accurately determine distances. 
              Let\'s explore every technique, from the simplest to the most sophisticated.
            </p>
            
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Overview</h3>
              <p className="text-gray-700">
                Map distance measurement has evolved from string-and-ruler methods to satellite-powered digital tools. 
                Today\'s methods can achieve <strong>accuracy within 1%</strong> for most applications, and 
                <strong>within 0.1%</strong> for professional surveying.
              </p>
            </div>
          </section>

          {/* Method Selector */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Method</h2>
            
            <div className="flex gap-2 mb-6 flex-wrap">
              <button
                onClick={() => setActiveMethod("digital")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeMethod === "digital"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Digital Tools
              </button>
              <button
                onClick={() => setActiveMethod("traditional")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeMethod === "traditional"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Paper Maps
              </button>
              <button
                onClick={() => setActiveMethod("mathematical")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeMethod === "mathematical"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Mathematical
              </button>
            </div>

            {activeMethod === "digital" && (
              <div className="space-y-6">
                <p className="text-gray-700">
                  Digital tools have revolutionized distance measurement, making it accessible to everyone with 
                  a smartphone or computer. Here are the most popular and effective methods:
                </p>
              </div>
            )}

            {activeMethod === "traditional" && (
              <div className="space-y-6">
                <p className="text-gray-700">
                  Paper maps remain valuable for outdoor activities, education, and backup navigation. These 
                  time-tested methods work without batteries or internet connection.
                </p>
              </div>
            )}

            {activeMethod === "mathematical" && (
              <div className="space-y-6">
                <p className="text-gray-700">
                  Mathematical approaches provide the most accurate results and help understand the underlying 
                  principles of distance calculation on Earth\'s curved surface.
                </p>
              </div>
            )}
          </section>

          {/* Digital Methods */}
          {activeMethod === "digital" && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Digital Distance Measurement Tools</h2>
              
              {/* Google Maps Tutorial */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📍 Google Maps (Most Popular)</h3>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 font-medium">
                    Best for: Quick measurements, route planning, everyday use
                  </p>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Desktop/Web Method:</h4>
                <ol className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <p className="text-gray-700">Right-click on your starting point</p>
                      <p className="text-sm text-gray-500 mt-1">A context menu will appear</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <p className="text-gray-700">Select "Measure distance" from the menu</p>
                      <p className="text-sm text-gray-500 mt-1">This activates the measurement tool</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <p className="text-gray-700">Click on your destination or add multiple points</p>
                      <p className="text-sm text-gray-500 mt-1">You can create a path with multiple waypoints</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                      <p className="text-gray-700">Read the total distance at the bottom</p>
                      <p className="text-sm text-gray-500 mt-1">Shows in both miles and kilometers</p>
                    </div>
                  </li>
                </ol>

                <h4 className="font-semibold text-gray-800 mb-3">Mobile App Method:</h4>
                <ol className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <p className="text-gray-700">Touch and hold your starting point</p>
                      <p className="text-sm text-gray-500 mt-1">A red pin will drop</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <p className="text-gray-700">Tap the location card that appears</p>
                      <p className="text-sm text-gray-500 mt-1">Swipe up if needed to see options</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <p className="text-gray-700">Select "Measure distance"</p>
                      <p className="text-sm text-gray-500 mt-1">Move the map to position the crosshair</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                      <p className="text-gray-700">Tap "Add point" for each waypoint</p>
                      <p className="text-sm text-gray-500 mt-1">Distance updates in real-time</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Pro Tips:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Zoom in for more precise placement</li>
                    <li>• Drag points to adjust after placing</li>
                    <li>• Clear all to start over</li>
                    <li>• Works offline with downloaded maps</li>
                  </ul>
                </div>
              </div>

              {/* Google Earth Pro */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🌍 Google Earth Pro (Professional)</h3>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 font-medium">
                    Best for: Terrain analysis, elevation profiles, professional presentations
                  </p>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Advanced Features:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">Path Tool</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Draw complex routes</li>
                      <li>• Save measurements</li>
                      <li>• Export to KML/KMZ</li>
                      <li>• Share with teams</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">Ruler Tool</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Line measurements</li>
                      <li>• Circle radius</li>
                      <li>• 3D polygon areas</li>
                      <li>• Elevation profiles</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Unique Capability:</strong> Google Earth Pro can measure distances along terrain, 
                    accounting for elevation changes. This gives you the actual ground distance, not just 
                    horizontal projection.
                  </p>
                </div>
              </div>

              {/* Other Digital Tools Comparison */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🛠️ Digital Tools Comparison</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-800">Tool</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-800">Platform</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-800">Accuracy</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-800">Cost</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-800">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {digitalTools.map((tool, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{tool.name}</td>
                          <td className="py-3 px-4 text-gray-600">{tool.platform}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              tool.accuracy === "Professional" ? "bg-purple-100 text-purple-700" :
                              tool.accuracy === "Excellent" ? "bg-green-100 text-green-700" :
                              "bg-blue-100 text-blue-700"
                            }`}>
                              {tool.accuracy}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{tool.cost}</td>
                          <td className="py-3 px-4 text-gray-600">{tool.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Traditional Methods */}
          {activeMethod === "traditional" && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paper Map Measurement Techniques</h2>
              
              {/* Scale Method */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📐 Using Map Scale</h3>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Accuracy:</strong> High (±2-5%) | <strong>Equipment:</strong> Ruler, map with scale
                  </p>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Understanding Map Scales:</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                    <span className="font-mono text-cyan-600">1:25,000</span>
                    <span className="text-gray-600">→</span>
                    <span className="text-sm text-gray-700">1 cm on map = 250 meters on ground</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                    <span className="font-mono text-cyan-600">1:50,000</span>
                    <span className="text-gray-600">→</span>
                    <span className="text-sm text-gray-700">1 cm on map = 500 meters on ground</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                    <span className="font-mono text-cyan-600">1:100,000</span>
                    <span className="text-gray-600">→</span>
                    <span className="text-sm text-gray-700">1 cm on map = 1 kilometer on ground</span>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Step-by-Step Process:</h4>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <p className="text-gray-700">Locate the map scale (usually bottom corner)</p>
                      <p className="text-sm text-gray-500 mt-1">Look for ratio (1:X) or bar scale</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <p className="text-gray-700">Measure the distance on the map with a ruler</p>
                      <p className="text-sm text-gray-500 mt-1">Record in centimeters or inches</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <p className="text-gray-700">Convert using the scale ratio</p>
                      <p className="text-sm text-gray-500 mt-1">Multiply map distance by scale denominator</p>
                    </div>
                  </li>
                </ol>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> On a 1:50,000 map, you measure 6.4 cm between two points.
                    <br />Real distance = 6.4 cm × 50,000 = 320,000 cm = 3.2 km = 2.0 miles
                  </p>
                </div>
              </div>

              {/* String Method */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🧵 String or Thread Method</h3>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Curved roads, rivers, hiking trails, coastlines
                  </p>
                </div>

                <p className="text-gray-700 mb-4">
                  This classic technique is perfect for measuring winding paths that would be difficult to 
                  measure with a straight ruler.
                </p>

                <h4 className="font-semibold text-gray-800 mb-3">How to Use:</h4>
                <ol className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <p className="text-gray-700">Lay a piece of string along the curved path</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <p className="text-gray-700">Mark start and end points on the string</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <p className="text-gray-700">Straighten the string against a ruler</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <p className="text-gray-700">Apply the map scale to get real distance</p>
                  </li>
                </ol>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-medium text-green-800 mb-2">Advantages</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Accurate for curves</li>
                      <li>✓ Simple equipment</li>
                      <li>✓ Works on any map</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-800 mb-2">Limitations</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✗ Time consuming</li>
                      <li>✗ String can stretch</li>
                      <li>✗ Difficult for long distances</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Divider Method */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📍 Divider Walking Method</h3>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Equipment:</strong> Map dividers or compass | <strong>Skill Level:</strong> Intermediate
                  </p>
                </div>

                <p className="text-gray-700 mb-4">
                  Professional cartographers and navigators have used this method for centuries. It\'s especially 
                  useful for maritime navigation.
                </p>

                <h4 className="font-semibold text-gray-800 mb-3">Technique:</h4>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-gray-700">1. Set dividers to a convenient span (e.g., 1 km on the map)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-700">2. "Walk" the dividers along the route, counting steps</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-700">3. Multiply steps by the span distance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-700">4. Add any remaining partial distance</span>
                  </li>
                </ol>
              </div>
            </section>
          )}

          {/* Mathematical Methods */}
          {activeMethod === "mathematical" && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mathematical Distance Calculations</h2>
              
              {/* Coordinate-Based Calculation */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔢 Coordinate-Based Calculation</h3>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Accuracy:</strong> Excellent (±0.5%) | <strong>Required:</strong> GPS coordinates
                  </p>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">The Haversine Formula:</h4>
                <div className="bg-gray-900 text-white rounded-lg p-4 mb-4 overflow-x-auto">
                  <code className="text-sm">
                    a = sin²(Δφ/2) + cos(φ₁) × cos(φ₂) × sin²(Δλ/2)<br />
                    c = 2 × atan2(√a, √(1−a))<br />
                    d = R × c<br />
                    <br />
                    where:<br />
                    φ = latitude (in radians)<br />
                    λ = longitude (in radians)<br />
                    R = Earth\'s radius (6,371 km or 3,959 miles)
                  </code>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Practical Example:</h4>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>New York City:</strong> 40.7128°N, 74.0060°W<br />
                    <strong>Los Angeles:</strong> 34.0522°N, 118.2437°W
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <p><strong>Step 1:</strong> Convert to radians</p>
                    <p className="font-mono text-xs bg-white p-2 rounded">
                      φ₁ = 40.7128 × π/180 = 0.7107 rad<br />
                      φ₂ = 34.0522 × π/180 = 0.5943 rad
                    </p>
                    
                    <p><strong>Step 2:</strong> Calculate differences</p>
                    <p className="font-mono text-xs bg-white p-2 rounded">
                      Δφ = 0.1164 rad<br />
                      Δλ = 0.7719 rad
                    </p>
                    
                    <p><strong>Step 3:</strong> Apply formula</p>
                    <p className="font-mono text-xs bg-white p-2 rounded">
                      Distance = 3,944 km = 2,451 miles
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Online Calculator:</strong> Instead of manual calculation, use our 
                    <a href="/" className="text-cyan-600 hover:underline mx-1">distance calculator</a>
                    which implements this formula automatically!
                  </p>
                </div>
              </div>

              {/* Pythagorean Approximation */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Simple Pythagorean Method</h3>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Short distances (&lt;100 km) | <strong>Accuracy:</strong> Good for small areas
                  </p>
                </div>

                <p className="text-gray-700 mb-4">
                  For relatively short distances where Earth\'s curvature is negligible, you can use a simplified 
                  flat-earth approximation:
                </p>

                <div className="bg-gray-900 text-white rounded-lg p-4 mb-4">
                  <code className="text-sm">
                    x = (lon₂ - lon₁) × cos((lat₁ + lat₂)/2)<br />
                    y = lat₂ - lat₁<br />
                    d = R × √(x² + y²)<br />
                  </code>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>⚠️ Important:</strong> This method becomes increasingly inaccurate for distances over 
                    100 km or near the poles. Use Haversine for better accuracy.
                  </p>
                </div>
              </div>

              {/* Grid Reference Systems */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🗺️ Grid Reference Systems</h3>
                
                <p className="text-gray-700 mb-4">
                  Many countries use grid systems that simplify distance calculation:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-semibold text-gray-800">UK Ordnance Survey Grid</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Uses 100km squares with 6-figure references. Distance = √[(E₂-E₁)² + (N₂-N₁)²]
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">UTM (Universal Transverse Mercator)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Global system with 60 zones. Coordinates in meters make distance calculation straightforward.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-gray-800">MGRS (Military Grid Reference System)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Based on UTM, used by NATO. Provides meter-level precision globally.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Accuracy and Error Sources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Accuracy and Errors</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Sources of Error</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">📏 Measurement Errors</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span><strong>Ruler placement:</strong> ±1-2mm typical error</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span><strong>Point identification:</strong> City centers vary</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span><strong>Map distortion:</strong> Increases away from center</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span>
                      <span><strong>Paper expansion:</strong> Humidity affects size</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">🌍 Projection Errors</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>Mercator:</strong> Distance distortion increases with latitude</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>Flat maps:</strong> All 2D maps distort 3D reality</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>Scale variation:</strong> Changes across large maps</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500">•</span>
                      <span><strong>Great circles:</strong> Appear curved on flat maps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Accuracy Guidelines by Method</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white/70 rounded">
                  <span className="text-sm font-medium text-gray-700">Professional GPS/GIS</span>
                  <span className="text-sm font-bold text-green-600">±0.1-0.5%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/70 rounded">
                  <span className="text-sm font-medium text-gray-700">Digital mapping tools</span>
                  <span className="text-sm font-bold text-green-600">±0.5-1%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/70 rounded">
                  <span className="text-sm font-medium text-gray-700">Paper map with scale</span>
                  <span className="text-sm font-bold text-yellow-600">±2-5%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/70 rounded">
                  <span className="text-sm font-medium text-gray-700">String method</span>
                  <span className="text-sm font-bold text-yellow-600">±3-7%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/70 rounded">
                  <span className="text-sm font-medium text-gray-700">Visual estimation</span>
                  <span className="text-sm font-bold text-red-600">±10-30%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Applications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Applications</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-lg p-6 border border-cyan-100">
                <div className="text-3xl mb-3">🥾</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hiking & Outdoor Activities</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Essential for planning daily distances, estimating travel time, and emergency evacuation routes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Trail distance planning</li>
                  <li>• Water source intervals</li>
                  <li>• Escape route identification</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-100">
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aviation & Navigation</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Critical for flight planning, fuel calculations, and emergency landing site selection.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Flight range planning</li>
                  <li>• Alternate airport selection</li>
                  <li>• Search and rescue operations</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border border-green-100">
                <div className="text-3xl mb-3">🚚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Logistics & Delivery</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Optimizing delivery routes, calculating shipping costs, and estimating delivery times.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Route optimization</li>
                  <li>• Fuel cost estimation</li>
                  <li>• Service area planning</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border border-purple-100">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Engineering & Construction</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Planning infrastructure projects, calculating material transport, and site accessibility.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pipeline routing</li>
                  <li>• Cable laying distances</li>
                  <li>• Material transport planning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips and Best Practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips for Accurate Measurement</h2>
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🎯 For Best Accuracy:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Use the largest scale map available</li>
                    <li>✓ Zoom in as much as possible on digital tools</li>
                    <li>✓ Take multiple measurements and average them</li>
                    <li>✓ Consider elevation changes for hiking</li>
                    <li>✓ Account for map projection distortion</li>
                    <li>✓ Verify with multiple sources when critical</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">⚠️ Common Mistakes to Avoid:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✗ Confusing straight-line with route distance</li>
                    <li>✗ Ignoring scale when switching maps</li>
                    <li>✗ Not accounting for terrain in mountains</li>
                    <li>✗ Using wrong units (km vs miles)</li>
                    <li>✗ Measuring from edge rather than center</li>
                    <li>✗ Forgetting magnetic declination for bearing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Measure?</h2>
              <p className="mb-6">
                Skip the manual calculations and get instant, accurate distance measurements with our 
                professional-grade calculator.
              </p>
              <a 
                href="/"
                className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Use Our Distance Calculator
              </a>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mastering Distance Measurement</h2>
            
            <p className="text-gray-700 mb-4">
              Whether you\'re using cutting-edge digital tools or time-tested paper map techniques, accurate 
              distance measurement is a valuable skill. Each method has its place—digital tools excel in 
              convenience and accuracy, while traditional methods remain reliable when technology fails.
            </p>

            <p className="text-gray-700 mb-4">
              The key is choosing the right tool for your specific needs. For everyday use, digital maps 
              provide unmatched convenience. For outdoor adventures, knowing manual techniques could be 
              essential. For professional work, combining multiple methods ensures accuracy.
            </p>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-6">
              <p className="text-gray-700 italic">
                "In the age of GPS and satellites, the ability to measure distance on a map remains a 
                fundamental skill that connects us to centuries of exploration and discovery."
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "What\'s the most accurate way to measure distance on a map?",
                  a: "Professional GIS software using GPS coordinates provides the highest accuracy (±0.1%). For consumer use, Google Earth Pro or similar digital tools offer excellent accuracy (±0.5-1%) with much greater convenience."
                },
                {
                  q: "Why do different maps show different distances for the same route?",
                  a: "Maps use different projections, scales, and datum points. Additionally, some show straight-line distance while others show actual travel routes. Always check what type of distance is being displayed."
                },
                {
                  q: "Can I measure distance accurately on my phone?",
                  a: "Yes! Modern smartphones with GPS can measure distance very accurately. Apps like Google Maps, Apple Maps, and specialized hiking apps can measure within 1-2% accuracy in most conditions."
                },
                {
                  q: "How did people measure map distances before computers?",
                  a: "Traditional methods included using dividers, opisometers (map wheels), strings, and careful calculation with scales. Maritime navigators were particularly skilled at these techniques."
                },
                {
                  q: "Does altitude affect distance measurements?",
                  a: "Yes, especially for hiking. A trail that climbs 1000m over 5km horizontally actually covers about 5.1km of ground distance. Most flat maps show horizontal distance only."
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
              <Link href="/blog/straight-line-vs-driving-distance" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">Straight Line vs Driving Distance</h3>
                <p className="text-sm text-gray-600">Understand the difference between map measurements and actual travel.</p>
              </Link>
              
              <Link href="/blog/what-does-as-the-crow-flies-mean" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">What Does "As the Crow Flies" Mean?</h3>
                <p className="text-sm text-gray-600">Learn about straight-line distances and their significance.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}