'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import StructuredData from '@/components/StructuredData';

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      category: "Basic Usage",
      icon: "🧭",
      faqs: [
        {
          question: "What does \"as the crow flies\" mean?",
          answer: "\"As the crow flies\" refers to the straight-line distance between two points on Earth's surface, ignoring any obstacles like mountains, buildings, or bodies of water. It's the shortest possible distance between two locations on our planet, calculated along what's called a \"great circle\" route. The phrase originates from the observation that crows fly directly to their destination, unlike humans who must follow roads and paths."
        },
        {
          question: "How do I calculate the distance between two cities?",
          answer: "You can calculate distances using several methods on our website: (1) Use the search boxes to type city names and select from our autocomplete suggestions, (2) Click directly on the interactive map to set Point A and Point B, (3) Use the GPS button to set your current location as one point, or (4) Choose from our list of 100 popular city pairs. Once you set both points, the distance is calculated instantly using the Haversine formula."
        },
        {
          question: "Can I use my current GPS location?",
          answer: "Yes! Click the GPS button next to either search box to use your current location. Your browser will ask for permission to access your location. This feature works on both desktop and mobile devices. Your location data is processed only in your browser and never transmitted to our servers for privacy protection."
        },
        {
          question: "What cities are included in your database?",
          answer: "Our database includes thousands of cities worldwide, covering major metropolitan areas, regional centers, and significant towns across all continents. We focus on cities with populations over 15,000 people, plus important smaller locations that are frequently searched. The database includes accurate latitude and longitude coordinates for precise calculations."
        }
      ]
    },
    {
      category: "Technical Details",
      icon: "⚙️",
      faqs: [
        {
          question: "How accurate are your distance calculations?",
          answer: "Our calculations use the Haversine formula with Earth's radius of 6,371 kilometers (3,959 miles), providing accuracy within 0.5% for most practical purposes. We assume Earth is a perfect sphere, which is a close approximation. The actual Earth is an oblate spheroid (slightly flattened at the poles), but this difference is negligible for typical city-to-city distances. For surveying or aviation applications requiring higher precision, consider using ellipsoidal calculations."
        },
        {
          question: "What is the Haversine formula and why do you use it?",
          answer: "The Haversine formula calculates great-circle distances between two points on a sphere given their latitude and longitude coordinates. We use it because it accounts for Earth's spherical shape, unlike simple Euclidean distance formulas that work only on flat surfaces. The formula: d = 2r × arcsin(√(sin²(Δφ/2) + cos(φ₁) × cos(φ₂) × sin²(Δλ/2))), where d is distance, r is Earth's radius, φ represents latitudes, and λ represents longitudes."
        },
        {
          question: "Why do my calculations show different results from other websites?",
          answer: "Small differences can occur due to: (1) Different Earth radius values used (we use 6,371 km, some use 6,378 km), (2) Different coordinate precision for cities, (3) Whether the calculation uses spherical vs. ellipsoidal Earth models, (4) Rounding differences in the final result. Most reputable calculators should agree within 1-2% for typical distances."
        },
        {
          question: "Do you calculate driving or flying distances?",
          answer: "No, we calculate only straight-line distances \"as the crow flies.\" These represent the theoretical shortest distance on Earth's surface and are always shorter than actual travel distances. Driving distances follow roads and can be 30-100% longer. Flying distances follow air traffic routes and weather patterns, typically 5-15% longer than straight-line distances. Our comprehensive results do provide estimated travel times for context."
        }
      ]
    },
    {
      category: "Understanding Results",
      icon: "📊",
      faqs: [
        {
          question: "Why is the straight-line distance shorter than actual travel distance?",
          answer: "Straight-line distance represents the theoretical minimum distance on Earth's surface, while actual travel must account for physical constraints: roads follow terrain and avoid obstacles, ships must navigate around landmasses, and planes follow air traffic control routes and avoid restricted airspace. Additionally, our spherical Earth means the shortest path often goes over polar regions, which isn't practical for most transportation."
        },
        {
          question: "What do the bearing and direction information mean?",
          answer: "Bearing is the initial compass direction (0-360 degrees) you would need to travel from the starting point toward the destination along the great circle route. Direction translates this into common compass terms (N, NE, E, SE, S, SW, W, NW). Note that along a great circle route, the bearing changes continuously except when traveling due north, south, or along the equator."
        },
        {
          question: "How do you estimate flight and travel times?",
          answer: "Our estimates are rough approximations: Flight times assume an average commercial aircraft speed of 500 mph, driving times assume 60 mph average including stops and traffic, walking assumes 3 mph, and sailing assumes 10 mph. These are for comparison purposes only. Actual travel times vary significantly based on routes, weather, traffic, connections, and transportation method."
        },
        {
          question: "What are the comparison facts in my results?",
          answer: "We provide contextual comparisons to help you understand the scale of distances, such as \"similar to the distance from New York to Chicago\" or \"equivalent to crossing Texas.\" These comparisons use well-known geographical references and are based on commonly understood distances. They help put abstract numbers into relatable terms."
        }
      ]
    },
    {
      category: "Geography and Maps",
      icon: "🗺️",
      faqs: [
        {
          question: "Why do flight paths look curved on flat maps?",
          answer: "Flight paths appear curved on flat maps due to map projection distortions. The shortest path between two points on a sphere (great circle route) appears as a straight line only on a globe. When this spherical surface is projected onto a flat map, these straight lines become curves. This is why flights from New York to Tokyo go over Alaska rather than straight across the Pacific—it's actually the shorter route on our spherical Earth."
        },
        {
          question: "What is a great circle route?",
          answer: "A great circle is the largest possible circle that can be drawn on a sphere, formed where a plane passing through the sphere's center intersects the surface. The shortest distance between any two points on a sphere lies along the great circle connecting them. Examples include the equator and all meridians (longitude lines), but not latitude lines (except the equator)."
        },
        {
          question: "Why does Greenland look so large on maps?",
          answer: "Most world maps use the Mercator projection, which preserves angles but severely distorts areas near the poles. Greenland appears larger than Africa on Mercator maps, but Africa is actually 14 times larger! This distortion affects our perception of distances and explains why polar routes often seem impossibly indirect when they're actually the shortest paths."
        },
        {
          question: "How do you handle locations near the International Date Line?",
          answer: "The International Date Line creates challenges for longitude calculations since it represents a discontinuity from +180° to -180°. Our calculations account for this by determining whether the shorter path crosses the date line and adjusting the longitude difference accordingly. This ensures accurate distances for trans-Pacific routes."
        }
      ]
    },
    {
      category: "Practical Applications",
      icon: "🎯",
      faqs: [
        {
          question: "When would I need to know straight-line distances?",
          answer: "Straight-line distances are useful for: (1) Radio communication planning (signals travel in straight lines), (2) Aviation fuel planning and initial route estimation, (3) Understanding time zone changes and jet lag, (4) Shipping and logistics cost estimation, (5) Emergency evacuation planning, (6) Understanding geographical relationships, (7) Academic research in geography or mathematics, (8) General curiosity about world geography."
        },
        {
          question: "Can businesses use this for logistics planning?",
          answer: "While our tool provides valuable initial estimates, businesses should use specialized logistics software for actual planning. Our distances help with preliminary analysis, cost estimation, understanding market reach, and geographic analysis. However, actual shipping routes, customs procedures, infrastructure availability, and transportation networks require specialized tools and professional consultation."
        },
        {
          question: "How accurate is this for amateur radio communications?",
          answer: "Very accurate! Radio waves travel along great circle paths, making our calculations directly applicable to amateur radio. The bearing information helps aim directional antennas, and the distance helps estimate signal propagation. Many ham radio operators use great circle maps similar to our calculations for long-distance communication planning."
        },
        {
          question: "Can I use this for educational purposes?",
          answer: "Absolutely! Our tool is perfect for geography lessons, mathematics education, and general learning about world geography. Teachers can use it to demonstrate map projections, spherical geometry, and global distances. Students can explore surprising geographical relationships and understand why the world isn't quite as it appears on flat maps."
        }
      ]
    },
    {
      category: "Website and Privacy",
      icon: "🔒",
      faqs: [
        {
          question: "Do you track or store my searches?",
          answer: "No, we don't track individual searches or store personal data. Distance calculations happen entirely in your browser using JavaScript, so your search queries never leave your device. We may collect anonymized analytics about page views and general usage patterns, but we never track what specific cities or coordinates you search for."
        },
        {
          question: "Do I need to create an account?",
          answer: "No account is required! Our service works completely without registration. You can calculate unlimited distances, access all features, and read our educational content without providing any personal information. This makes our tool accessible to everyone while protecting your privacy."
        },
        {
          question: "Is this service free?",
          answer: "Yes, CrowFliesDistance.com is completely free for personal, educational, and non-commercial use. There are no hidden fees, premium features, or usage limits. We believe geographical education and distance calculation tools should be accessible to everyone."
        },
        {
          question: "Can I link to your website or specific calculations?",
          answer: "Yes! You're welcome to link to our homepage, blog articles, or specific city pair calculations. We encourage sharing links for educational purposes. The URLs are designed to be permanent and shareable. However, please don't reproduce large portions of our content without attribution."
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: "🔧",
      faqs: [
        {
          question: "The map isn't loading or responding to clicks",
          answer: "This usually indicates a JavaScript or connectivity issue. Try: (1) Refreshing the page, (2) Checking your internet connection, (3) Disabling browser extensions that might block scripts, (4) Trying a different browser, (5) Clearing your browser cache. The map requires JavaScript to be enabled to function properly."
        },
        {
          question: "My city doesn't appear in the search results",
          answer: "If your city isn't found, try: (1) Different spellings or abbreviations, (2) Including the country name, (3) Trying the nearest major city, (4) Using the map click feature to select the approximate location manually. Our database focuses on cities with populations over 15,000, so very small towns might not be included."
        },
        {
          question: "The GPS location feature isn't working",
          answer: "GPS issues are usually related to browser permissions or device capabilities. Ensure: (1) You've granted location permission when prompted, (2) Your device has GPS or location services enabled, (3) You're using HTTPS (required for location access), (4) You're not using a VPN that might mask your location. Location accuracy depends on your device and environment."
        },
        {
          question: "I'm getting obviously wrong results",
          answer: "Wrong results usually indicate: (1) You selected the wrong city from autocomplete suggestions (check for cities with the same name in different countries), (2) Coordinate data error in our database, (3) Confusion between different measurement units. Double-check your selected cities and contact us if you believe there's an error in our data."
        }
      ]
    }
  ];

  // Flatten all FAQs for structured data
  const allFAQs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  );

  return (
    <>
      <StructuredData 
        type="FAQPage" 
        data={{ faqs: allFAQs }}
      />
      <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-cyan-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">FAQ</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Everything you need to know about calculating straight-line distances
          </p>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
            <p className="text-gray-700">
              Can't find what you're looking for? <Link href="/contact" className="text-cyan-600 hover:text-cyan-700 font-medium">Contact us</Link> and we'll be happy to help!
            </p>
          </div>
        </header>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  {category.category}
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex; // Unique index across all categories
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            <svg
                              className={`w-6 h-6 text-gray-400 transform transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="mt-4 pr-8">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Quick Links */}
        <section className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 border border-cyan-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/" className="block bg-white/80 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🧭</div>
              <h3 className="font-semibold text-gray-900 mb-1">Distance Calculator</h3>
              <p className="text-sm text-gray-600">Calculate distances between any two points</p>
            </Link>
            
            <Link href="/blog" className="block bg-white/80 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-gray-900 mb-1">Educational Blog</h3>
              <p className="text-sm text-gray-600">Learn about geography and navigation</p>
            </Link>
            
            <Link href="/about" className="block bg-white/80 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">ℹ️</div>
              <h3 className="font-semibold text-gray-900 mb-1">About Us</h3>
              <p className="text-sm text-gray-600">Learn more about our mission and features</p>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6">
              We're here to help! Reach out with any questions about distance calculations, 
              website features, or suggestions for improvement.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </Layout>
    </>
  );
}