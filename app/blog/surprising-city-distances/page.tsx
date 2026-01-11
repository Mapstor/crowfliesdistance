'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the interactive map component
const InteractiveDistanceMap = dynamic(() => import('@/components/InteractiveDistanceMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading interactive map...</p>
    </div>
  ),
});

export default function SurprisingCityDistancesPost() {
  const [selectedPair, setSelectedPair] = useState(0);
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  const surprisingPairs = [
    {
      city1: "London, UK",
      city2: "Vancouver, Canada",
      distance: 4707,
      surprisingFact: "London is closer to Vancouver than to Lagos, Nigeria (3107 miles)",
      reason: "Great circle route goes over Greenland and the Arctic, making Pacific Northwest surprisingly accessible",
      comparison: "Same distance as New York to Honolulu"
    },
    {
      city1: "Quito, Ecuador",
      city2: "Singapore",
      distance: 12244,
      surprisingFact: "Almost exactly halfway around the world - the antipode route!",
      reason: "These cities are nearly on opposite sides of the Earth, making any route roughly the same distance",
      comparison: "You could fly either east or west and travel almost the same distance"
    },
    {
      city1: "Reykjavik, Iceland",
      city2: "Moscow, Russia",
      distance: 2067,
      surprisingFact: "Reykjavik is closer to Moscow than to Los Angeles (4255 miles)",
      reason: "Iceland's position in the North Atlantic makes it surprisingly close to European Russia",
      comparison: "Shorter than Miami to Seattle"
    },
    {
      city1: "Cairo, Egypt",
      city2: "Cape Town, South Africa",
      distance: 4989,
      surprisingFact: "Africa is so large that this north-south journey equals London to Mumbai",
      reason: "Africa's true size is often underestimated on standard maps due to Mercator projection",
      comparison: "Same as flying across the entire United States twice"
    },
    {
      city1: "Madrid, Spain",
      city2: "Tokyo, Japan",
      distance: 6706,
      surprisingFact: "Madrid is farther from Tokyo than New York is from Tokyo (6740 miles)",
      reason: "The Eurasian landmass is enormous, and no direct polar route is possible",
      comparison: "Requires flying almost 1/4 around the entire planet"
    },
    {
      city1: "Perth, Australia",
      city2: "London, UK",
      distance: 9008,
      surprisingFact: "Perth is closer to Jakarta (1865 miles) than to Sydney (2044 miles)",
      reason: "Perth is one of the most isolated major cities on Earth, closer to SE Asia than Eastern Australia",
      comparison: "One of the longest non-stop flights in the world"
    },
    {
      city1: "Anchorage, Alaska",
      city2: "Frankfurt, Germany",
      distance: 4777,
      surprisingFact: "Anchorage is closer to Frankfurt than Miami is to Frankfurt (4850 miles)",
      reason: "Polar routes make Anchorage surprisingly close to Europe - it was a major refueling stop in the past",
      comparison: "Anchorage is equidistant from Tokyo, New York, and Frankfurt"
    },
    {
      city1: "Buenos Aires, Argentina",
      city2: "Shanghai, China",
      distance: 12201,
      surprisingFact: "One of the longest city pairs - farther than London to Sydney",
      reason: "Requires crossing the entire Pacific at its widest point or going the long way over Europe/Africa",
      comparison: "Nearly halfway around the Earth at this latitude"
    },
    {
      city1: "Helsinki, Finland",
      city2: "Seoul, South Korea",
      distance: 4613,
      surprisingFact: "Helsinki is closer to Seoul than London is to New York (3459 miles)",
      reason: "The Trans-Siberian route is surprisingly direct, following roughly the same latitude",
      comparison: "Shorter than transcontinental US + Atlantic crossing"
    },
    {
      city1: "San Francisco, USA",
      city2: "St. Petersburg, Russia",
      distance: 5773,
      surprisingFact: "The shortest route goes directly over the North Pole!",
      reason: "Polar projection shows San Francisco and St. Petersburg are almost perfectly opposite across the pole",
      comparison: "Similar to New York to Buenos Aires distance"
    }
  ];

  const distanceQuiz = [
    {
      question: "Which two cities are farther apart?",
      optionA: { cities: "London to New York", distance: 3459 },
      optionB: { cities: "Tokyo to Sydney", distance: 4863 },
      answer: "B",
      explanation: "Tokyo to Sydney is 1,404 miles farther! The Pacific Ocean is wider than the Atlantic."
    },
    {
      question: "Which European capital is closest to New York?",
      optionA: { cities: "London", distance: 3459 },
      optionB: { cities: "Reykjavik", distance: 2612 },
      answer: "B",
      explanation: "Reykjavik is 847 miles closer! Iceland acts as a stepping stone across the Atlantic."
    },
    {
      question: "Which is the longer flight?",
      optionA: { cities: "Dubai to Los Angeles", distance: 8321 },
      optionB: { cities: "Singapore to London", distance: 6765 },
      answer: "A",
      explanation: "Dubai to LA is a massive 1,556 miles longer, requiring polar routing over Russia."
    },
    {
      question: "Which city is farther from London?",
      optionA: { cities: "Cape Town", distance: 5990 },
      optionB: { cities: "Los Angeles", distance: 5382 },
      answer: "A",
      explanation: "Cape Town is 608 miles farther. Africa extends much farther south than most people realize."
    },
    {
      question: "Which distance is shorter?",
      optionA: { cities: "Moscow to Vladivostok", distance: 4025 },
      optionB: { cities: "New York to Honolulu", distance: 4969 },
      answer: "A",
      explanation: "Despite Russia\'s vast size, the Trans-Siberian distance is 944 miles shorter than crossing to Hawaii."
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
            <li className="text-gray-900">10 Surprising City Distances</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            10 Surprising City Distances That Will Change Your World View
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2024-01-11">January 11, 2024</time>
            <span>•</span>
            <span>14 min read</span>
            <span>•</span>
            <span>Geography & Travel</span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-8 mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <p className="text-lg text-gray-700 italic">
              "The world is not as you imagine it on a flat map"
            </p>
            <p className="text-sm text-gray-600 mt-2">- Every Geography Teacher</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Our mental maps of the world are often wildly inaccurate. Years of looking at distorted map 
              projections, combined with cultural biases and limited travel experience, create a warped sense 
              of global distances. Prepare to be amazed as we reveal city pairs that are much closer—or much 
              farther—than you\'d ever expect. These revelations will fundamentally change how you see our planet.
            </p>
            
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Our Mental Maps Are Wrong</h3>
              <p className="text-gray-700">
                Most world maps use the Mercator projection, which massively distorts sizes and distances, 
                especially near the poles. Combined with our tendency to think in straight lines rather than 
                great circles, we consistently misjudge global distances by 20-50%.
              </p>
            </div>
          </section>

          {/* Interactive Distance Quiz */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Quiz: Test Your Distance Intuition</h2>
            
            <div className="space-y-4">
              {distanceQuiz.map((quiz, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <p className="font-semibold text-gray-900 mb-4">{quiz.question}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <button
                      onClick={() => setShowAnswer(index)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        showAnswer === index && quiz.answer === "A"
                          ? "border-green-500 bg-green-50"
                          : showAnswer === index && quiz.answer === "B"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-cyan-400"
                      }`}
                    >
                      <p className="font-medium text-gray-900">A) {quiz.optionA.cities}</p>
                      {showAnswer === index && (
                        <p className="text-sm text-gray-600 mt-1">{quiz.optionA.distance.toLocaleString()} miles</p>
                      )}
                    </button>
                    <button
                      onClick={() => setShowAnswer(index)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        showAnswer === index && quiz.answer === "B"
                          ? "border-green-500 bg-green-50"
                          : showAnswer === index && quiz.answer === "A"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-cyan-400"
                      }`}
                    >
                      <p className="font-medium text-gray-900">B) {quiz.optionB.cities}</p>
                      {showAnswer === index && (
                        <p className="text-sm text-gray-600 mt-1">{quiz.optionB.distance.toLocaleString()} miles</p>
                      )}
                    </button>
                  </div>
                  {showAnswer === index && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Answer:</strong> {quiz.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* The 10 Surprising Distances */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The 10 Most Mind-Blowing City Distances</h2>
            
            {/* Distance Selector */}
            <div className="mb-6">
              <div className="flex gap-2 flex-wrap">
                {surprisingPairs.map((pair, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPair(idx)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedPair === idx
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    #{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Distance Details */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {surprisingPairs[selectedPair].city1} ↔ {surprisingPairs[selectedPair].city2}
                </h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {surprisingPairs[selectedPair].distance.toLocaleString()} miles
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">🤯 Surprising Fact:</p>
                  <p className="text-gray-700">{surprisingPairs[selectedPair].surprisingFact}</p>
                </div>

                <div className="bg-white/80 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">📐 Why It\'s Surprising:</p>
                  <p className="text-gray-700">{surprisingPairs[selectedPair].reason}</p>
                </div>

                <div className="bg-white/80 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">📏 For Comparison:</p>
                  <p className="text-gray-700">{surprisingPairs[selectedPair].comparison}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Map Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore These Distances on an Interactive Map</h2>
            <p className="text-gray-700 mb-6">
              Click on any numbered button below to see the actual great circle route between these surprising city pairs. 
              The map shows the shortest distance path and provides comparisons to help you understand the scale.
            </p>
            
            <InteractiveDistanceMap
              cityPairs={surprisingPairs.map(pair => ({
                city1: pair.city1,
                city2: pair.city2,
                coords1: {
                  lat: pair.city1 === "London, UK" ? 51.5074 :
                       pair.city1 === "Quito, Ecuador" ? -0.1807 :
                       pair.city1 === "Reykjavik, Iceland" ? 64.1466 :
                       pair.city1 === "Cairo, Egypt" ? 30.0444 :
                       pair.city1 === "Madrid, Spain" ? 40.4168 :
                       pair.city1 === "Perth, Australia" ? -31.9505 :
                       pair.city1 === "Anchorage, Alaska" ? 61.2181 :
                       pair.city1 === "Buenos Aires, Argentina" ? -34.6037 :
                       pair.city1 === "Helsinki, Finland" ? 60.1699 :
                       pair.city1 === "San Francisco, USA" ? 37.7749 : 0,
                  lon: pair.city1 === "London, UK" ? -0.1278 :
                       pair.city1 === "Quito, Ecuador" ? -78.4678 :
                       pair.city1 === "Reykjavik, Iceland" ? -21.9426 :
                       pair.city1 === "Cairo, Egypt" ? 31.2357 :
                       pair.city1 === "Madrid, Spain" ? -3.7038 :
                       pair.city1 === "Perth, Australia" ? 115.8605 :
                       pair.city1 === "Anchorage, Alaska" ? -149.9003 :
                       pair.city1 === "Buenos Aires, Argentina" ? -58.3816 :
                       pair.city1 === "Helsinki, Finland" ? 24.9384 :
                       pair.city1 === "San Francisco, USA" ? -122.4194 : 0
                },
                coords2: {
                  lat: pair.city2 === "Vancouver, Canada" ? 49.2827 :
                       pair.city2 === "Singapore" ? 1.3521 :
                       pair.city2 === "Moscow, Russia" ? 55.7558 :
                       pair.city2 === "Cape Town, South Africa" ? -33.9249 :
                       pair.city2 === "Tokyo, Japan" ? 35.6762 :
                       pair.city2 === "London, UK" ? 51.5074 :
                       pair.city2 === "Frankfurt, Germany" ? 50.1109 :
                       pair.city2 === "Shanghai, China" ? 31.2304 :
                       pair.city2 === "Seoul, South Korea" ? 37.5665 :
                       pair.city2 === "St. Petersburg, Russia" ? 59.9311 : 0,
                  lon: pair.city2 === "Vancouver, Canada" ? -123.1207 :
                       pair.city2 === "Singapore" ? 103.8198 :
                       pair.city2 === "Moscow, Russia" ? 37.6173 :
                       pair.city2 === "Cape Town, South Africa" ? 18.4241 :
                       pair.city2 === "Tokyo, Japan" ? 139.6503 :
                       pair.city2 === "London, UK" ? -0.1278 :
                       pair.city2 === "Frankfurt, Germany" ? 8.6821 :
                       pair.city2 === "Shanghai, China" ? 121.4737 :
                       pair.city2 === "Seoul, South Korea" ? 126.9780 :
                       pair.city2 === "St. Petersburg, Russia" ? 30.3351 : 0
                },
                distance: pair.distance,
                fact: pair.surprisingFact
              }))}
              selectedIndex={selectedPair}
            />
          </section>

          {/* Detailed Analysis of Each */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Deep Dive: Why These Distances Surprise Us</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. 🇬🇧🇨🇦 London to Vancouver (4,707 miles)
                </h3>
                <p className="text-gray-700 mb-4">
                  This pairing shocks because we think of Vancouver as being on the "other side of the world" 
                  from London. In reality, the great circle route passes over Greenland and the Canadian Arctic, 
                  making this a relatively short polar flight. Meanwhile, London to Lagos—which feels like it 
                  should be much closer given they\'re "just" separated by Europe and the Sahara—is actually 
                  1,600 miles shorter!
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Flight path:</strong> Over Scotland → Iceland → Greenland → Nunavut → British Columbia<br />
                    <strong>Why we get it wrong:</strong> Pacific seems impossibly far from Atlantic perspective
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2. 🇪🇨🇸🇬 Quito to Singapore (12,244 miles)
                </h3>
                <p className="text-gray-700 mb-4">
                  These cities are nearly antipodal—exact opposites on the globe. This means you could fly east 
                  or west and travel almost the same distance! Quito sits on the equator in South America, while 
                  Singapore is just north of the equator in Southeast Asia. They\'re separated by roughly 180° of 
                  longitude, making this one of the longest possible city pairs on Earth.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Fun fact:</strong> If you dug straight through Earth from Quito, you\'d emerge in the 
                    ocean near Singapore<br />
                    <strong>Route options:</strong> Via Los Angeles (12,553 mi) or via Amsterdam (12,447 mi) - 
                    almost identical!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3. 🇮🇸🇷🇺 Reykjavik to Moscow (2,067 miles)
                </h3>
                <p className="text-gray-700 mb-4">
                  Iceland feels incredibly remote and isolated in the North Atlantic, but it\'s actually 
                  surprisingly close to European Russia. Reykjavik is closer to Moscow than it is to Los Angeles, 
                  closer than Miami is to Seattle, and only slightly farther than New York to Denver. This 
                  proximity made Iceland strategically important during the Cold War.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Historical note:</strong> Reagan and Gorbachev met in Reykjavik in 1986 partly 
                    because it\'s equidistant from Washington and Moscow<br />
                    <strong>Climate surprise:</strong> Despite the proximity, Moscow is much colder in winter due 
                    to continental climate
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4. 🇪🇬🇿🇦 Cairo to Cape Town (4,989 miles)
                </h3>
                <p className="text-gray-700 mb-4">
                  This journey spans the entire length of Africa, revealing the continent\'s true immensity. The 
                  distance equals flying from London to Mumbai, or crossing the entire United States twice. Most 
                  world maps significantly shrink Africa—it\'s actually larger than the US, China, India, and all 
                  of Europe combined!
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>The challenge:</strong> No direct flights due to limited demand and aircraft range<br />
                    <strong>By land:</strong> The Cape to Cairo Railway was Cecil Rhodes\' dream, never fully 
                    realized
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  5. 🇦🇺🇬🇧 Perth to London (9,008 miles)
                </h3>
                <p className="text-gray-700 mb-4">
                  Perth holds the distinction of being one of the world\'s most isolated major cities. It\'s so 
                  far from Australia\'s east coast that it\'s actually closer to Jakarta, Singapore, and even 
                  Mumbai than to Sydney! The London route is one of the world\'s longest non-stop flights, 
                  taking 17+ hours.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Isolation index:</strong> Perth is closer to 5 Asian capitals than to Sydney<br />
                    <strong>Time zones:</strong> Perth is 8 hours ahead of London, but only 3 hours behind Sydney
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Map Projection Effects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Maps Lie About Distance</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-700 mb-6">
                The Mercator projection, used by Google Maps and most online mapping services, preserves 
                angles but dramatically distorts areas and distances, especially near the poles.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-lg border border-red-100">
                  <h3 className="font-semibold text-gray-900 mb-3">❌ What Mercator Gets Wrong</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Greenland appears larger than Africa (it\'s 14× smaller)</li>
                    <li>• Alaska looks bigger than Mexico (Mexico is larger)</li>
                    <li>• Europe seems more central than it really is</li>
                    <li>• Polar routes look like massive detours</li>
                    <li>• Antarctica appears infinite</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-gray-900 mb-3">✅ True Surprises</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Africa is absolutely enormous</li>
                    <li>• Russia is smaller than it appears (but still huge)</li>
                    <li>• The Pacific Ocean covers nearly half the planet</li>
                    <li>• South America extends much farther east than North America</li>
                    <li>• Australia is almost as wide as the continental US</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Pro tip:</strong> To better understand true distances, look at a globe or use an 
                  azimuthal equidistant projection centered on your location. These show accurate distances 
                  from a central point.
                </p>
              </div>
            </div>
          </section>

          {/* Closest Major Cities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Surprisingly Close: Cities That Are Neighbors</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-lg p-6 border border-cyan-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🌊 Across Water (But Close!)</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Detroit ↔ Windsor</span>
                    <span className="font-semibold text-cyan-600">0.5 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Copenhagen ↔ Malmö</span>
                    <span className="font-semibold text-cyan-600">16 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Gibraltar ↔ Tangier</span>
                    <span className="font-semibold text-cyan-600">35 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Tallinn ↔ Helsinki</span>
                    <span className="font-semibold text-cyan-600">50 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Miami ↔ Bimini, Bahamas</span>
                    <span className="font-semibold text-cyan-600">50 mi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏔️ Separated by Mountains</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Geneva ↔ Chamonix</span>
                    <span className="font-semibold text-blue-600">51 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Kabul ↔ Islamabad</span>
                    <span className="font-semibold text-blue-600">225 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">La Paz ↔ Cusco</span>
                    <span className="font-semibold text-blue-600">337 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Denver ↔ Aspen</span>
                    <span className="font-semibold text-blue-600">106 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Turin ↔ Nice</span>
                    <span className="font-semibold text-blue-600">113 mi</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Farthest Cities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Ultimate Distances: Earth\'s Most Separated Cities</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
              <p className="text-gray-700 mb-6">
                The maximum possible distance between two points on Earth is 12,451 miles (exact antipodes). 
                Here are some city pairs that come close to this theoretical maximum:
              </p>

              <div className="space-y-4">
                {[
                  { cities: "Málaga, Spain ↔ Auckland, New Zealand", distance: 12420, note: "Nearly perfect antipodes" },
                  { cities: "Buenos Aires ↔ Shanghai", distance: 12201, note: "Requires crossing the Pacific" },
                  { cities: "Lisbon ↔ Wellington", distance: 12224, note: "Classic antipodal pair" },
                  { cities: "Quito ↔ Singapore", distance: 12244, note: "Equatorial opposites" },
                  { cities: "Madrid ↔ Weber, New Zealand", distance: 12451, note: "True antipodes!" }
                ].map((pair, idx) => (
                  <div key={idx} className="bg-white/80 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{pair.cities}</p>
                      <p className="text-sm text-gray-600">{pair.note}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">{pair.distance.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">miles</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Travel Time vs Distance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">When Time Doesn\'t Match Distance</h2>
            
            <p className="text-gray-700 mb-6">
              Sometimes the surprising part isn\'t the distance itself, but how long it takes to travel. 
              These city pairs reveal how geography, infrastructure, and politics affect actual travel time:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">Kinshasa ↔ Brazzaville</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">2.5 miles</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  These capital cities face each other across the Congo River. You can see one from the other, 
                  but traveling between them requires a ferry or flight due to no bridge connection.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Visual distance:</strong> 2.5 miles | <strong>Travel time:</strong> 30-60 minutes
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">Seattle ↔ Vancouver</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">120 miles</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  Despite being close neighbors, the international border can add hours. The cities share 
                  sports rivalries and economic ties but are separated by one of the world\'s longest borders.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Straight distance:</strong> 120 miles | <strong>Driving time:</strong> 3-5 hours with border
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">Tokyo ↔ Sapporo</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">520 miles</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  The Seikan Tunnel and Shinkansen make this journey remarkably fast despite crossing from 
                  Honshu to Hokkaido. It\'s farther than London to Edinburgh but takes similar time.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Distance:</strong> 520 miles | <strong>Shinkansen time:</strong> 4 hours
                </p>
              </div>
            </div>
          </section>

          {/* What This Teaches Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What These Distances Teach Us About Our World</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">🌐 The Pacific Is Incomprehensibly Vast</h3>
                <p className="text-gray-700">
                  The Pacific Ocean covers more area than all land on Earth combined. It\'s so large that all 
                  continents could fit inside it with room to spare. This is why trans-Pacific flights are among 
                  the longest in the world, and why Pacific island nations are so isolated.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">🗺️ Africa Is Bigger Than You Think</h3>
                <p className="text-gray-700">
                  The true size of Africa is mind-boggling. You could fit the USA, China, India, Japan, and all 
                  of Europe inside Africa with room left over. The Sahara Desert alone is larger than the 
                  continental United States.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">❄️ Polar Routes Are Game-Changers</h3>
                <p className="text-gray-700">
                  The shortest path between many Northern Hemisphere cities goes over or near the North Pole. 
                  This is why Anchorage was once a major refueling stop, and why modern long-haul flights 
                  often fly over Siberia or Greenland.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">🌍 Europe Is Surprisingly Small</h3>
                <p className="text-gray-700">
                  Europe (minus Russia) is only slightly larger than the United States, yet contains 44 countries. 
                  This density of nations in a small area explains Europe\'s complex history and why European 
                  integration has been both necessary and challenging.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Discover Your Own Surprising Distances</h2>
              <p className="mb-6">
                What cities have you always wondered about? Use our calculator to find distances that will 
                surprise your friends and challenge your assumptions about world geography.
              </p>
              <a 
                href="/"
                className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Calculate Any Distance
              </a>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A New Perspective on Our Planet</h2>
            
            <p className="text-gray-700 mb-4">
              These surprising distances remind us that our mental maps are deeply flawed, shaped more by 
              cultural connections, map projections, and travel routes than by actual geography. The world 
              is simultaneously larger and smaller than we imagine—vast oceans and continents separate us, 
              yet polar routes and great circles bring unexpected neighbors together.
            </p>

            <p className="text-gray-700 mb-4">
              Understanding true distances helps us appreciate the miracle of modern aviation, the challenges 
              of global commerce, and the remarkable diversity packed into our planet\'s 197 million square 
              miles. Every surprising distance tells a story about geography, history, and the invisible 
              connections that bind our world together.
            </p>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-6">
              <p className="text-gray-700 italic">
                "The world is not in your books and maps, it\'s out there." – Gandalf, The Hobbit. 
                But sometimes, the maps reveal truths about our world that our eyes alone could never see.
              </p>
            </div>
          </section>

          {/* Fun Facts Box */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Quick Distance Facts to Blow Minds</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Rome is farther north than New York City</li>
                <li>• Reno, Nevada is farther west than Los Angeles</li>
                <li>• Maine is the closest US state to Africa</li>
                <li>• Edinburgh is farther west than Bristol</li>
                <li>• Detroit is north of Canada (Windsor, Ontario)</li>
                <li>• Chile is longer than the distance from Norway to Nigeria</li>
                <li>• Brazil is closer to Africa than to Florida</li>
                <li>• Alaska is simultaneously the westernmost and easternmost US state</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "What are antipodes and how do I find mine?",
                  a: "Antipodes are points directly opposite each other on Earth\'s surface. To find yours, change your latitude from north to south (or vice versa) and add/subtract 180° from your longitude. Most of North America\'s antipodes are in the Indian Ocean."
                },
                {
                  q: "Why do flight distances differ from what maps show?",
                  a: "Flights follow great circle routes (shortest distance on a sphere) which appear curved on flat maps. Also, flights must consider airways, weather, and restricted airspace, adding 5-10% to the theoretical minimum distance."
                },
                {
                  q: "What\'s the longest possible distance between two points on Earth?",
                  a: "The maximum is half Earth\'s circumference: 12,451 miles (20,037 km). This only occurs between perfect antipodes. The longest distance between inhabited places is about 12,420 miles."
                },
                {
                  q: "Why does Africa look smaller on most maps?",
                  a: "The Mercator projection preserves angles for navigation but dramatically distorts areas. It makes equatorial regions appear smaller and polar regions larger. Africa, being centered on the equator, gets shrunk while Greenland and Russia get enlarged."
                },
                {
                  q: "Which two capital cities are closest together?",
                  a: "Vatican City and Rome (0 miles - one is inside the other). For separate countries: Kinshasa (DR Congo) and Brazzaville (Republic of Congo) at 2.5 miles apart, facing each other across the Congo River."
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
                <p className="text-sm text-gray-600">Learn about straight-line distances and why we use this phrase.</p>
              </Link>
              
              <Link href="/blog/why-planes-dont-fly-straight" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2">Why Planes Don\'t Fly in Straight Lines</h3>
                <p className="text-sm text-gray-600">Discover why flight paths look curved on maps.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}