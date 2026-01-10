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
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {fromName} → {toName}
        </h2>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {miles.toLocaleString()} mi / {km.toLocaleString()} km
        </div>
        <div className="text-lg text-gray-600">
          Direction: {bearing.toFixed(0)}° ({direction})
        </div>
      </div>

      {shareUrl && (
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 justify-center">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded text-sm"
            />
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              {copied ? '✓ Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}