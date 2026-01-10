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
}

function MapClickHandler({ onMapClick }: { onMapClick?: (lat: number, lon: number) => void }) {
  useMapEvents({
    click(e) {
      if (onMapClick) {
        onMapClick(e.latlng.lat, e.latlng.lng);
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
  const animationRef = useRef<number>();

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

export default function MapClient({ from, to, onMapClick, showAnimation }: MapClientProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

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
      <MapContainer
        center={center}
        zoom={5}
        className="h-full w-full"
        style={{ background: '#f0f0f0' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapClickHandler onMapClick={onMapClick} />
        <MapViewController from={from} to={to} />
        
        {from && (
          <Marker position={[from.lat, from.lon]} />
        )}
        
        {to && (
          <Marker position={[to.lat, to.lon]} />
        )}
        
        {from && to && (
          <AnimatedLine from={from} to={to} showAnimation={showAnimation} />
        )}
      </MapContainer>

      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-[1000] bg-white p-2 rounded shadow-lg hover:bg-gray-100 transition-colors"
        title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      >
        {isFullscreen ? '↙' : '↗'}
      </button>
    </div>
  );
}