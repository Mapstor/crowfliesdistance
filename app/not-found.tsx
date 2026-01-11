'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="text-8xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
              404
            </div>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-red-500 rounded-full relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                ?
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! This route doesn't exist
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for seems to have flown off course. 
            Let's help you find your way back!
          </p>

          {/* Quick Actions */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                🏠 Back to Home
              </Link>
              <Link 
                href="/blog" 
                className="px-6 py-3 bg-white border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all duration-300 font-semibold"
              >
                📚 Read Our Blog
              </Link>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Distance Searches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { from: 'London', to: 'Paris', slug: 'london-to-paris' },
                { from: 'New York', to: 'Los Angeles', slug: 'new-york-to-los-angeles' },
                { from: 'Tokyo', to: 'Sydney', slug: 'tokyo-to-sydney' },
                { from: 'Berlin', to: 'Rome', slug: 'berlin-to-rome' },
                { from: 'Dubai', to: 'Singapore', slug: 'dubai-to-singapore' },
                { from: 'Mumbai', to: 'Delhi', slug: 'mumbai-to-delhi' }
              ].map((pair, index) => (
                <Link
                  key={index}
                  href={`/${pair.slug}`}
                  className="text-left p-3 rounded-lg border border-gray-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 group"
                >
                  <div className="text-sm font-medium text-gray-900 group-hover:text-cyan-700">
                    {pair.from} → {pair.to}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-cyan-600">
                    Calculate distance
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Looking for a specific distance calculation? Use our calculator on the{' '}
              <Link href="/" className="text-cyan-600 hover:text-cyan-700 font-medium">
                homepage
              </Link>{' '}
              or browse our{' '}
              <Link href="/faq" className="text-cyan-600 hover:text-cyan-700 font-medium">
                FAQ section
              </Link>{' '}
              for help.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}