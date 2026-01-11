'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

export default function AboutPage() {
  return (
    <>
      <StructuredData type="AboutPage" />
      <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-cyan-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">About</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            About CrowFliesDistance.com
          </h1>
          <p className="text-xl text-gray-700">
            Your trusted source for accurate straight-line distance calculations between any two points on Earth.
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                CrowFliesDistance.com is a specialized web application designed to calculate straight-line distances 
                between any two points on Earth. Often referred to as "as the crow flies" distances, these measurements 
                represent the shortest possible distance between two locations on our planet's surface.
              </p>
              <p>
                Our platform combines advanced geographic calculations with an intuitive user interface, making it easy 
                for anyone to discover the true distance between cities, landmarks, or any coordinates worldwide.
              </p>
            </div>
          </section>

          {/* Core Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map Interface</h3>
                <p className="text-gray-600">
                  Click directly on our interactive map to set your points of interest. The map displays the 
                  great circle route between locations with real-time distance calculations in both miles and 
                  kilometers.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart City Search</h3>
                <p className="text-gray-600">
                  Search from our comprehensive database of global cities. Simply type city names to quickly 
                  find and calculate distances. Our search feature includes major cities, towns, and geographic 
                  locations worldwide.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GPS Location Support</h3>
                <p className="text-gray-600">
                  Use your device's current location as a starting or ending point. Perfect for finding distances 
                  from where you are right now to any destination in the world.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Results</h3>
                <p className="text-gray-600">
                  Get detailed distance information including comparisons, travel time estimates, fun facts, and 
                  contextual information that helps you understand the scale of distances.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Calculator Works</h2>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">The Haversine Formula</h3>
              <p className="text-gray-700 mb-4">
                Our distance calculations use the Haversine formula, a mathematical equation that determines the 
                great-circle distance between two points on a sphere given their longitudes and latitudes. This 
                formula accounts for Earth's spherical shape to provide accurate straight-line distances.
              </p>
              <div className="bg-white/80 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Key calculation features:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Earth radius: 6,371 kilometers (3,959 miles)</li>
                  <li>• Accuracy: Within 0.5% for most distances</li>
                  <li>• Instant calculations with no server delay</li>
                  <li>• Support for any coordinate pair on Earth</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Multiple Input Methods */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Multiple Ways to Calculate Distance</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">1. City Search</h3>
                <p className="text-gray-600">
                  Type the names of two cities in our search boxes. Our autocomplete feature helps you find cities 
                  quickly from our global database. Select from the suggestions and get instant results.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">2. Map Clicking</h3>
                <p className="text-gray-600">
                  Click anywhere on the interactive map to set Point A, then click again for Point B. The map 
                  shows the direct path and calculates the distance immediately. Perfect for exploring distances 
                  between any locations, not just cities.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">3. Current Location</h3>
                <p className="text-gray-600">
                  Use the GPS button to set your current location as one of the points. Ideal for finding out 
                  how far you are from various destinations around the world.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">4. Popular Routes</h3>
                <p className="text-gray-600">
                  Choose from our curated list of 100 popular distance queries. These pre-selected city pairs 
                  represent commonly searched routes and interesting geographic comparisons.
                </p>
              </div>
            </div>
          </section>

          {/* Educational Content */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Resources</h2>
            <p className="text-gray-700 mb-6">
              Beyond simple distance calculations, we provide comprehensive educational content to help you 
              understand the geography and mathematics behind distance measurements.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/what-does-as-the-crow-flies-mean" 
                    className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">What "As the Crow Flies" Means</h3>
                <p className="text-sm text-gray-600">
                  Learn about the origin and meaning of this common phrase for straight-line distances.
                </p>
              </Link>

              <Link href="/blog/great-circle-routes-navigation" 
                    className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">Great Circle Routes Explained</h3>
                <p className="text-sm text-gray-600">
                  Understand why the shortest path on Earth appears curved on flat maps.
                </p>
              </Link>

              <Link href="/blog/straight-line-vs-driving-distance" 
                    className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">Straight Line vs Driving Distance</h3>
                <p className="text-sm text-gray-600">
                  Discover why straight-line and actual travel distances differ so much.
                </p>
              </Link>

              <Link href="/blog/how-to-measure-distance-on-map" 
                    className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">Measuring Map Distances</h3>
                <p className="text-sm text-gray-600">
                  Traditional and modern methods for measuring distances on maps.
                </p>
              </Link>
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Uses Our Calculator</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">✈️ Travel Planning</h3>
                  <p className="text-gray-600">
                    Travelers use our tool to understand true distances between destinations, helping with 
                    itinerary planning and understanding the scale of their journeys.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📚 Education</h3>
                  <p className="text-gray-600">
                    Teachers and students use our calculator for geography lessons, helping visualize global 
                    distances and understand map projections.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🏢 Business</h3>
                  <p className="text-gray-600">
                    Businesses calculate distances for logistics planning, market analysis, and understanding 
                    the geographic scope of operations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🎯 General Curiosity</h3>
                  <p className="text-gray-600">
                    Anyone curious about world geography uses our tool to explore distances and learn surprising 
                    facts about our planet's scale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Built with Modern Technology</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Frontend Technologies</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Next.js 14 with App Router</li>
                    <li>• React with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Leaflet for interactive maps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Client-side distance calculations</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Real-time interactive updates</li>
                    <li>• No account or registration required</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data and Accuracy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sources and Accuracy</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">City Database</h3>
                <p className="text-gray-600">
                  Our city database includes thousands of cities worldwide with accurate latitude and longitude 
                  coordinates. The database covers major cities, regional centers, and significant towns across 
                  all continents.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Calculation Accuracy</h3>
                <p className="text-gray-600">
                  Our calculations assume Earth is a perfect sphere with radius 6,371 km. While Earth is actually 
                  an oblate spheroid, this approximation provides accuracy within 0.5% for most practical purposes. 
                  For typical city-to-city distances, the error is negligible.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
                <p className="text-gray-600">
                  Straight-line distances calculated here represent the theoretical minimum distance between two 
                  points. Actual travel distances by road, rail, air, or sea will always be longer due to terrain, 
                  infrastructure, and routing constraints.
                </p>
              </div>
            </div>
          </section>

          {/* What Makes Us Different */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-cyan-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Results</h3>
                    <p className="text-gray-600 text-sm">
                      Not just numbers - we provide context, comparisons, and interesting facts about each distance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Educational Focus</h3>
                    <p className="text-gray-600 text-sm">
                      Our blog articles help users understand the science and geography behind distance calculations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multiple Input Methods</h3>
                    <p className="text-gray-600 text-sm">
                      Search, click on map, use GPS, or choose from popular routes - flexibility for every user.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visual Learning</h3>
                    <p className="text-gray-600 text-sm">
                      Interactive maps show the actual great circle path between locations, not just the distance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Free and Open</h3>
                    <p className="text-gray-600 text-sm">
                      No registration, no fees, no limits - just instant distance calculations whenever you need them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy and Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Usage</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                CrowFliesDistance.com is committed to user privacy and simplicity:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-0.5">•</span>
                  <span>No user accounts or registration required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-0.5">•</span>
                  <span>Distance calculations happen in your browser</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-0.5">•</span>
                  <span>GPS location is only used when you explicitly allow it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-0.5">•</span>
                  <span>No tracking of individual searches or calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-0.5">•</span>
                  <span>Free to use for personal and educational purposes</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Future Plans */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continuous Improvement</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="text-gray-700 mb-4">
                We're constantly working to improve CrowFliesDistance.com with new features and enhancements:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Expanding our city database with more locations</li>
                <li>• Adding more educational content and interactive visualizations</li>
                <li>• Improving calculation accuracy with ellipsoidal Earth models</li>
                <li>• Enhancing mobile experience and performance</li>
                <li>• Adding more contextual information and comparisons</li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Calculate a Distance?</h2>
              <p className="mb-6">
                Start exploring the world's distances with our easy-to-use calculator. 
                No sign-up required - just pick your points and discover the distance!
              </p>
              <Link 
                href="/"
                className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Calculating
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
    </>
  );
}