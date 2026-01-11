'use client';

import { useState } from 'react';
import Calculator from './Calculator';

export default function CityPairCalculator() {
  const [fromLocation, setFromLocation] = useState<{ lat: number; lon: number; name?: string } | null>(null);
  const [toLocation, setToLocation] = useState<{ lat: number; lon: number; name?: string } | null>(null);

  const handleCalculate = (from: { lat: number; lon: number; name?: string }, to: { lat: number; lon: number; name?: string }) => {
    // Navigate to the new city pair page
    if (from.name && to.name) {
      const fromSlug = from.name.split(',')[0].toLowerCase().replace(/\s+/g, '-');
      const toSlug = to.name.split(',')[0].toLowerCase().replace(/\s+/g, '-');
      const newPair = [fromSlug, toSlug].sort().join('-to-');
      window.location.href = `/${newPair}`;
    }
  };

  return (
    <Calculator
      onCalculate={handleCalculate}
      setFromLocation={setFromLocation}
      setToLocation={setToLocation}
      fromLocation={fromLocation}
      toLocation={toLocation}
    />
  );
}