'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';

const blogPosts = [
  {
    slug: 'great-circle-routes-navigation',
    title: 'Understanding Great Circle Routes and Navigation',
    excerpt: 'Why the shortest distance on Earth appears curved on maps, and how this shapes modern navigation.',
    date: '2024-01-16'
  },
  {
    slug: 'what-does-as-the-crow-flies-mean',
    title: 'What Does "As the Crow Flies" Mean?',
    excerpt: 'Learn about the origin and meaning of this common phrase used to describe straight-line distances.',
    date: '2024-01-15'
  },
  {
    slug: 'straight-line-vs-driving-distance',
    title: 'Straight Line vs Driving Distance Explained',
    excerpt: 'Understand why straight-line distances differ from actual travel distances and when each measurement matters.',
    date: '2024-01-14'
  },
  {
    slug: 'how-to-measure-distance-on-map',
    title: 'How to Measure Distance on a Map',
    excerpt: 'Different methods and tools for measuring distances on maps, from traditional to digital approaches.',
    date: '2024-01-13'
  },
  {
    slug: 'why-planes-dont-fly-straight',
    title: "Why Planes Don't Fly in Straight Lines",
    excerpt: 'Discover why flight paths curve and how great circle routes actually work in aviation.',
    date: '2024-01-12'
  },
  {
    slug: 'surprising-city-distances',
    title: '10 Surprising City Distances',
    excerpt: 'Fun facts and surprising distances between major cities that might not be what you expect.',
    date: '2024-01-11'
  }
];

export default function BlogIndex() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-medium mb-2">Distance Insights Blog</h1>
          <p className="text-cyan-50 text-sm">
            Learn about distances, maps, and navigation
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3 hover:from-cyan-700 hover:to-blue-700">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-3 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  <span className="text-cyan-600 text-sm font-medium hover:text-cyan-700">
                    Read more →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Ready to Calculate a Distance?
          </h3>
          <p className="text-gray-600 mb-4">
            Use our calculator to find the straight-line distance between any two points on Earth.
          </p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
          >
            Go to Calculator
          </a>
        </div>
      </div>
    </Layout>
  );
}