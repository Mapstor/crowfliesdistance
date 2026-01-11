'use client';

import { generateComprehensiveDescription } from '@/lib/distance-descriptions';

interface ComprehensiveResultProps {
  miles: number;
  km: number;
  bearing: number;
  direction: string;
  fromName: string;
  toName: string;
}

export default function ComprehensiveResult({
  miles,
  km,
  bearing,
  direction,
  fromName,
  toName
}: ComprehensiveResultProps) {
  const description = generateComprehensiveDescription({
    miles,
    km,
    fromName,
    toName,
    bearing,
    direction
  });

  return (
    <div className="space-y-8">
      {/* Header with Distance */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl p-8 shadow-lg">
        <div className="text-center">
          <div className="text-sm opacity-90 mb-2">
            {fromName} → {toName}
          </div>
          <div className="text-5xl font-bold mb-2">
            {miles.toLocaleString()} miles
          </div>
          <div className="text-2xl opacity-90 mb-4">
            {km.toLocaleString()} kilometers
          </div>
          <div className="text-base">
            Bearing: {bearing.toFixed(0)}° {direction}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-light bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Distance Overview
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed">{description.overview}</p>
        </div>
      </div>

      {/* Geographical Context */}
      <div className="bg-gradient-to-br from-white to-cyan-50/50 rounded-xl shadow-sm border border-cyan-100 p-6">
        <h2 className="text-2xl font-light text-gray-900 mb-4">
          Geographical Context
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {description.geography}
        </p>
      </div>

      {/* Distance Perspective */}
      <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl shadow-sm border border-blue-100 p-6">
        <h2 className="text-2xl font-light text-gray-900 mb-4">
          Distance Perspective
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {description.perspective}
        </p>
      </div>

      {/* Travel Times */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-light bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Travel Time Estimates
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {description.travelTimes.map((travel, index) => (
            <div key={index} className="border-l-4 border-cyan-500 pl-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{travel.mode}</h3>
                <span className="text-xl font-bold text-cyan-600">{travel.time}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {travel.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Distance Comparisons */}
      <div className="bg-gradient-to-br from-white to-cyan-50/30 rounded-xl shadow-sm border border-cyan-100 p-6">
        <h2 className="text-2xl font-light text-gray-900 mb-6">
          Distance Comparisons
        </h2>
        <div className="space-y-4">
          {description.comparisons.map((comparison, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <p className="text-gray-600 leading-relaxed pt-2">
                {comparison}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-light bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Interesting Facts
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {description.funFacts.map((fact, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-4 border border-cyan-100">
              <p className="text-gray-600 leading-relaxed">
                <span className="text-cyan-600 text-xl mr-2">💡</span>
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reference Stats */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
        <h2 className="text-2xl font-light text-white/90 mb-6 text-center">
          Quick Reference
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-sm opacity-75 uppercase tracking-wide mb-1">Miles</div>
            <div className="text-2xl font-bold">{miles.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-75 uppercase tracking-wide mb-1">Kilometers</div>
            <div className="text-2xl font-bold">{km.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-75 uppercase tracking-wide mb-1">Nautical Miles</div>
            <div className="text-2xl font-bold">{(miles * 0.868976).toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-75 uppercase tracking-wide mb-1">Meters</div>
            <div className="text-2xl font-bold">{(km * 1000).toLocaleString()}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mt-6 pt-6 border-t border-white/20">
          <div>
            <div className="text-sm opacity-75 uppercase tracking-wide mb-1">Feet</div>
            <div className="text-xl font-semibold">{(miles * 5280).toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-75 uppercase tracking-wide mb-1">Yards</div>
            <div className="text-xl font-semibold">{(miles * 1760).toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-75 uppercase tracking-wide mb-1">Bearing</div>
            <div className="text-xl font-semibold">{bearing.toFixed(0)}° {direction}</div>
          </div>
        </div>
      </div>
    </div>
  );
}