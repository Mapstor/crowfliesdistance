'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Polyline, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

interface MapClientProps {
  from?: { lat: number; lon: number; name?: string };
  to?: { lat: number; lon: number; name?: string };
  onMapClick?: (lat: number, lon: number) => void;
  showAnimation?: boolean;
  distance?: { miles: number; km: number };
}

function MapClickHandler({ onMapClick, setClickCount }: { onMapClick?: (lat: number, lon: number) => void; setClickCount: (fn: (prev: number) => number) => void }) {
  useMapEvents({
    click(e) {
      if (onMapClick) {
        onMapClick(e.latlng.lat, e.latlng.lng);
        setClickCount(prev => prev + 1);
      }
    },
  });
  return null;
}

function MapViewController({ from, to }: { from?: any; to?: any }) {
  const map = useMap();

  useEffect(() => {
    if (from && to) {
      const bounds = L.latLngBounds(
        [from.lat, from.lon],
        [to.lat, to.lon]
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (from) {
      map.setView([from.lat, from.lon], 10);
    } else if (to) {
      map.setView([to.lat, to.lon], 10);
    }
  }, [from, to, map]);

  return null;
}

function AnimatedLine({ from, to, showAnimation }: { from: any; to: any; showAnimation?: boolean }) {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!showAnimation) {
      setProgress(100);
      return;
    }

    const startTime = Date.now();
    const duration = 3000; // 3 seconds

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress < 100) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [from, to, showAnimation]);

  if (progress === 0) return null;

  const fullPath = [[from.lat, from.lon], [to.lat, to.lon]] as L.LatLngExpression[];
  
  if (progress === 100) {
    return <Polyline positions={fullPath} color="blue" weight={3} opacity={0.7} />;
  }

  // Calculate partial path based on progress
  const lat1 = from.lat;
  const lon1 = from.lon;
  const lat2 = to.lat;
  const lon2 = to.lon;
  
  const currentLat = lat1 + (lat2 - lat1) * (progress / 100);
  const currentLon = lon1 + (lon2 - lon1) * (progress / 100);
  
  const partialPath = [[from.lat, from.lon], [currentLat, currentLon]] as L.LatLngExpression[];

  return (
    <>
      <Polyline positions={partialPath} color="blue" weight={3} opacity={0.7} />
      <Marker 
        position={[currentLat, currentLon]}
        icon={L.divIcon({
          html: '<div style="font-size: 24px;">🐦</div>',
          iconSize: [30, 30],
          className: 'bird-marker'
        })}
      />
    </>
  );
}

export default function MapClient({ from, to, onMapClick, showAnimation, distance }: MapClientProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [clickCount, setClickCount] = useState(0);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mapContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const center: L.LatLngExpression = from 
    ? [from.lat, from.lon]
    : to 
    ? [to.lat, to.lon]
    : [51.505, -0.09]; // Default to London

  return (
    <div ref={mapContainerRef} className={`relative ${isFullscreen ? 'h-screen' : 'h-[50vh]'} w-full`}>
      {/* Click Instructions Overlay */}
      {!from && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-cyan-100">
          <p className="text-sm font-medium text-gray-700">
            <span className="text-cyan-600">📍 Click on the map</span> to set Point A
          </p>
        </div>
      )}
      {from && !to && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-cyan-100">
          <p className="text-sm font-medium text-gray-700">
            <span className="text-cyan-600">📍 Click on the map</span> to set Point B
          </p>
        </div>
      )}
      {from && to && distance && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1000] bg-white/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg border border-cyan-100">
          <div className="flex flex-col gap-1 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {distance.miles.toLocaleString()} miles
            </div>
            <div className="text-sm text-gray-600">
              {distance.km.toLocaleString()} km
            </div>
            <div className="text-xs text-gray-500 mt-1 pt-1 border-t border-gray-200">
              Click map to reset
            </div>
          </div>
        </div>
      )}
      <MapContainer
        center={center}
        zoom={5}
        className="h-full w-full"
        style={{ background: '#f0f0f0' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        <MapClickHandler onMapClick={onMapClick} setClickCount={setClickCount} />
        <MapViewController from={from} to={to} />
        
        {from && (
          <Marker 
            position={[from.lat, from.lon]}
            icon={L.divIcon({
              html: '<div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.3); border: 2px solid white;">A</div>',
              iconSize: [32, 32],
              className: 'custom-marker'
            })}
          />
        )}
        
        {to && (
          <Marker 
            position={[to.lat, to.lon]}
            icon={L.divIcon({
              html: '<div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.3); border: 2px solid white;">B</div>',
              iconSize: [32, 32],
              className: 'custom-marker'
            })}
          />
        )}
        
        {from && to && (
          <AnimatedLine from={from} to={to} showAnimation={showAnimation} />
        )}
      </MapContainer>

      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-[1000] bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2.5 rounded-lg shadow-md hover:from-cyan-600 hover:to-blue-700 transition-all hover:shadow-lg"
        title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {isFullscreen ? (
            <>
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
            </>
          ) : (
            <>
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}