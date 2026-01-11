'use client';

import { useState } from 'react';

interface DistanceResultProps {
  miles: number;
  km: number;
  bearing: number;
  direction: string;
  fromName: string;
  toName: string;
  shareUrl?: string;
}

export default function DistanceResult({
  miles,
  km,
  bearing,
  direction,
  fromName,
  toName,
  shareUrl
}: DistanceResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    if (shareUrl) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-cyan-50/30 rounded-xl shadow-sm border border-cyan-100 p-5">
      <div className="text-center">
        <div className="text-xs uppercase tracking-wide text-cyan-600 mb-2">
          {fromName} → {toName}
        </div>
        
        <div className="text-3xl font-light bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">
          {miles.toLocaleString()} mi
        </div>
        <div className="text-lg text-gray-600 mb-3">
          {km.toLocaleString()} km
        </div>
        
        <div className="text-sm text-gray-500">
          <span className="inline-flex items-center gap-1">
            <span className="text-cyan-500">🧭</span> {bearing.toFixed(0)}° {direction}
          </span>
        </div>
      </div>

      {shareUrl && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={handleCopyLink}
            className="w-full px-3 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
          >
            {copied ? '✓ Link Copied' : 'Copy Share Link'}
          </button>
        </div>
      )}
    </div>
  );
}