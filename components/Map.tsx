'use client';

import dynamic from 'next/dynamic';

const MapClient = dynamic(() => import('./MapClient'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[50vh] bg-gray-100 flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});

interface MapProps {
  from?: { lat: number; lon: number; name?: string };
  to?: { lat: number; lon: number; name?: string };
  onMapClick?: (lat: number, lon: number) => void;
  showAnimation?: boolean;
}

export default function Map(props: MapProps) {
  return <MapClient {...props} />;
}