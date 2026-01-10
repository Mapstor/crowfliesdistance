# Claude Code Prompt - CrowFliesDistance.com v2 (Hybrid)

## Project Overview

Build a straight-line distance calculator with dynamic page generation. One perfect homepage, pages created on-demand as users search.

**Read PROJECT_BRIEF.md first.**

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL for city search)
- Leaflet + React-Leaflet (map)
- Nominatim (geocoding)
- Vercel (hosting)

## Project Location
`/Users/markovisic/Desktop/crowfliesdistance`

---

## Phase 1: Project Setup (30 min)

### 1.1 Create Next.js Project
```bash
npx create-next-app@latest crowfliesdistance --typescript --tailwind --app --src-dir=false --import-alias="@/*"
cd crowfliesdistance
```

### 1.2 Install Dependencies
```bash
npm install @supabase/supabase-js leaflet react-leaflet @types/leaflet
```

### 1.3 Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 1.4 Initialize Git & Push
```bash
git init
git add .
git commit -m "Initial setup"
git remote add origin https://github.com/Mapstor/crowfliesdistance.git
git push -u origin main
```

**Confirm Phase 1 complete before proceeding.**

---

## Phase 2: Database Setup (30 min)

### 2.1 Create Supabase Project
Go to supabase.com, create project "crowfliesdistance"

### 2.2 Create Cities Table
Run in Supabase SQL editor:

```sql
-- Enable fuzzy search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Cities table
CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  country VARCHAR(100) NOT NULL,
  country_code CHAR(2),
  lat DECIMAL(10, 6) NOT NULL,
  lon DECIMAL(10, 6) NOT NULL,
  population INTEGER,
  description TEXT,
  search_rank INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_cities_slug ON cities(slug);
CREATE INDEX idx_cities_search_rank ON cities(search_rank DESC);
CREATE INDEX idx_cities_name_trgm ON cities USING gin(name gin_trgm_ops);
```

### 2.3 Seed Cities Data
Insert top 500 cities. Here are the top 100 (add 400 more):

```sql
INSERT INTO cities (name, slug, country, country_code, lat, lon, population, search_rank, description) VALUES
('London', 'london', 'United Kingdom', 'GB', 51.5074, -0.1278, 9000000, 500, 'London is the capital and largest city of England and the United Kingdom, situated on the River Thames.'),
('New York', 'new-york', 'United States', 'US', 40.7128, -74.0060, 8400000, 499, 'New York City is the most populous city in the United States, located at the southern tip of New York State.'),
('Paris', 'paris', 'France', 'FR', 48.8566, 2.3522, 2200000, 498, 'Paris is the capital of France, known for the Eiffel Tower, Louvre Museum, and its cafe culture.'),
('Los Angeles', 'los-angeles', 'United States', 'US', 34.0522, -118.2437, 4000000, 497, 'Los Angeles is a sprawling Southern California city known for Hollywood and its Mediterranean climate.'),
('Tokyo', 'tokyo', 'Japan', 'JP', 35.6762, 139.6503, 14000000, 496, 'Tokyo is Japan''s capital and the world''s most populous metropolitan area.'),
('Sydney', 'sydney', 'Australia', 'AU', -33.8688, 151.2093, 5300000, 495, 'Sydney is Australia''s largest city, famous for its harbourfront Opera House.'),
('Dubai', 'dubai', 'United Arab Emirates', 'AE', 25.2048, 55.2708, 3400000, 494, 'Dubai is a city in the United Arab Emirates known for luxury shopping and ultramodern architecture.'),
('Singapore', 'singapore', 'Singapore', 'SG', 1.3521, 103.8198, 5700000, 493, 'Singapore is a global financial hub and island city-state in Southeast Asia.'),
('Hong Kong', 'hong-kong', 'China', 'HK', 22.3193, 114.1694, 7500000, 492, 'Hong Kong is a special administrative region of China, known for its skyline and harbor.'),
('Rome', 'rome', 'Italy', 'IT', 41.9028, 12.4964, 2900000, 491, 'Rome is Italy''s capital, a sprawling city with nearly 3,000 years of globally influential art and architecture.'),
('Barcelona', 'barcelona', 'Spain', 'ES', 41.3851, 2.1734, 1600000, 490, 'Barcelona is the capital of Catalonia, known for Gaudí''s architecture and Mediterranean beaches.'),
('Amsterdam', 'amsterdam', 'Netherlands', 'NL', 52.3676, 4.9041, 870000, 489, 'Amsterdam is the Netherlands'' capital, known for its canals, narrow houses, and cycling culture.'),
('Berlin', 'berlin', 'Germany', 'DE', 52.5200, 13.4050, 3600000, 488, 'Berlin is Germany''s capital, known for its history, art scene, and nightlife.'),
('Toronto', 'toronto', 'Canada', 'CA', 43.6532, -79.3832, 2900000, 487, 'Toronto is Canada''s largest city, a dynamic metropolis with a core of soaring skyscrapers.'),
('San Francisco', 'san-francisco', 'United States', 'US', 37.7749, -122.4194, 880000, 486, 'San Francisco is a hilly city in Northern California known for the Golden Gate Bridge and cable cars.'),
('Chicago', 'chicago', 'United States', 'US', 41.8781, -87.6298, 2700000, 485, 'Chicago is a city on Lake Michigan known for bold architecture and deep-dish pizza.'),
('Miami', 'miami', 'United States', 'US', 25.7617, -80.1918, 470000, 484, 'Miami is a coastal city in southeastern Florida known for beaches, Art Deco architecture, and Latin culture.'),
('Las Vegas', 'las-vegas', 'United States', 'US', 36.1699, -115.1398, 640000, 483, 'Las Vegas is a resort city in Nevada known for casinos, entertainment, and nightlife.'),
('Bangkok', 'bangkok', 'Thailand', 'TH', 13.7563, 100.5018, 10500000, 482, 'Bangkok is Thailand''s capital, known for ornate temples, street food, and vibrant nightlife.'),
('Madrid', 'madrid', 'Spain', 'ES', 40.4168, -3.7038, 3200000, 481, 'Madrid is Spain''s central capital, known for elegant boulevards, the Royal Palace, and world-class art museums.'),
('Munich', 'munich', 'Germany', 'DE', 48.1351, 11.5820, 1500000, 480, 'Munich is Bavaria''s capital, known for Oktoberfest, beer halls, and its proximity to the Alps.'),
('Vienna', 'vienna', 'Austria', 'AT', 48.2082, 16.3738, 1900000, 479, 'Vienna is Austria''s capital, known for imperial palaces, classical music heritage, and coffee house culture.'),
('Prague', 'prague', 'Czech Republic', 'CZ', 50.0755, 14.4378, 1300000, 478, 'Prague is the capital of the Czech Republic, known for Old Town Square and Prague Castle.'),
('Dublin', 'dublin', 'Ireland', 'IE', 53.3498, -6.2603, 550000, 477, 'Dublin is Ireland''s capital, known for its literary history, Georgian architecture, and lively pubs.'),
('Lisbon', 'lisbon', 'Portugal', 'PT', 38.7223, -9.1393, 550000, 476, 'Lisbon is Portugal''s hilly coastal capital, known for pastel buildings, historic trams, and pastéis de nata.'),
('Athens', 'athens', 'Greece', 'GR', 37.9838, 23.7275, 660000, 475, 'Athens is the capital of Greece, known for the Acropolis and Parthenon.'),
('Istanbul', 'istanbul', 'Turkey', 'TR', 41.0082, 28.9784, 15500000, 474, 'Istanbul is a major city straddling Europe and Asia, known for the Hagia Sophia and Grand Bazaar.'),
('Moscow', 'moscow', 'Russia', 'RU', 55.7558, 37.6173, 12500000, 473, 'Moscow is Russia''s capital, known for Red Square, the Kremlin, and St. Basil''s Cathedral.'),
('Beijing', 'beijing', 'China', 'CN', 39.9042, 116.4074, 21500000, 472, 'Beijing is China''s capital, known for the Forbidden City and its role as a political center.'),
('Shanghai', 'shanghai', 'China', 'CN', 31.2304, 121.4737, 24200000, 471, 'Shanghai is China''s biggest city, a global financial hub with the Pudong skyline.'),
('Seoul', 'seoul', 'South Korea', 'KR', 37.5665, 126.9780, 9700000, 470, 'Seoul is South Korea''s capital, a vast metropolis blending ancient temples with modern skyscrapers.'),
('Mumbai', 'mumbai', 'India', 'IN', 19.0760, 72.8777, 20400000, 469, 'Mumbai is India''s largest city, the financial capital and home of Bollywood.'),
('Delhi', 'delhi', 'India', 'IN', 28.7041, 77.1025, 16800000, 468, 'Delhi is India''s capital territory, encompassing Old Delhi and New Delhi.'),
('Cairo', 'cairo', 'Egypt', 'EG', 30.0444, 31.2357, 9500000, 467, 'Cairo is Egypt''s capital, home to the Pyramids of Giza on its outskirts.'),
('Cape Town', 'cape-town', 'South Africa', 'ZA', -33.9249, 18.4241, 4600000, 466, 'Cape Town is South Africa''s legislative capital, known for Table Mountain and its harbor.'),
('Melbourne', 'melbourne', 'Australia', 'AU', -37.8136, 144.9631, 5000000, 465, 'Melbourne is Australia''s second-largest city, known for street art, coffee culture, and sports.'),
('Auckland', 'auckland', 'New Zealand', 'NZ', -36.8509, 174.7645, 1500000, 464, 'Auckland is New Zealand''s largest city, built around two harbors.'),
('Vancouver', 'vancouver', 'Canada', 'CA', 49.2827, -123.1207, 2500000, 463, 'Vancouver is a coastal city in western Canada known for mountains, ocean, and outdoor activities.'),
('Montreal', 'montreal', 'Canada', 'CA', 45.5017, -73.5673, 1800000, 462, 'Montreal is Quebec''s largest city, known for French heritage and vibrant cultural scene.'),
('Seattle', 'seattle', 'United States', 'US', 47.6062, -122.3321, 750000, 461, 'Seattle is a city on Puget Sound known for tech industry, coffee culture, and the Space Needle.'),
('Boston', 'boston', 'United States', 'US', 42.3601, -71.0589, 700000, 460, 'Boston is Massachusetts'' capital, one of America''s oldest cities with rich colonial history.'),
('Washington', 'washington', 'United States', 'US', 38.9072, -77.0369, 700000, 459, 'Washington, D.C. is the U.S. capital, home to the White House, Capitol, and national monuments.'),
('Denver', 'denver', 'United States', 'US', 39.7392, -104.9903, 730000, 458, 'Denver is Colorado''s capital, known as the Mile High City for its elevation.'),
('Dallas', 'dallas', 'United States', 'US', 32.7767, -96.7970, 1300000, 457, 'Dallas is a major city in Texas known for its modern architecture and cultural districts.'),
('Houston', 'houston', 'United States', 'US', 29.7604, -95.3698, 2300000, 456, 'Houston is Texas'' largest city, home to NASA''s Space Center.'),
('Atlanta', 'atlanta', 'United States', 'US', 33.7490, -84.3880, 500000, 455, 'Atlanta is Georgia''s capital, a major hub for business, culture, and civil rights history.'),
('Philadelphia', 'philadelphia', 'United States', 'US', 39.9526, -75.1652, 1600000, 454, 'Philadelphia is Pennsylvania''s largest city, known for the Liberty Bell and Independence Hall.'),
('Phoenix', 'phoenix', 'United States', 'US', 33.4484, -112.0740, 1700000, 453, 'Phoenix is Arizona''s capital, located in the Sonoran Desert with year-round sun.'),
('San Diego', 'san-diego', 'United States', 'US', 32.7157, -117.1611, 1400000, 452, 'San Diego is a California city on the Pacific coast known for beaches and the zoo.'),
('Orlando', 'orlando', 'United States', 'US', 28.5383, -81.3792, 290000, 451, 'Orlando is a Florida city known for Walt Disney World and other theme parks.');

-- Continue adding 450 more cities with search_rank from 450 down to 1
-- Include: European cities, Asian cities, South American cities, African cities, etc.
```

**Confirm Phase 2 complete before proceeding.**

---

## Phase 3: Core Libraries (30 min)

### 3.1 Supabase Client
Create `lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### 3.2 Distance Calculations
Create `lib/distance.ts`:
```typescript
export function haversineDistance(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): { km: number; miles: number } {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const km = Math.round(R * c);
  const miles = Math.round(km * 0.621371);
  
  return { km, miles };
}

export function calculateBearing(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): number {
  const dLon = toRad(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(toRad(lat2));
  const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
            Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

export function bearingToDirection(bearing: number): string {
  const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return dirs[Math.round(bearing / 22.5) % 16];
}

export function estimateFlightTime(km: number): number {
  return Math.round((km / 800) * 60 + 30);
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

function toDeg(rad: number): number {
  return rad * (180 / Math.PI);
}
```

### 3.3 Geocoding
Create `lib/geocode.ts`:
```typescript
export async function geocodeAddress(address: string) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`;
  
  const res = await fetch(url, {
    headers: { 'User-Agent': 'CrowFliesDistance/1.0' }
  });
  
  const data = await res.json();
  if (!data.length) return null;
  
  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon),
    display: data[0].display_name
  };
}
```

### 3.4 City Utilities
Create `lib/cities.ts`:
```typescript
import { supabase } from './supabase';

export async function searchCities(query: string, limit = 5) {
  const { data } = await supabase
    .from('cities')
    .select('id, name, slug, country, lat, lon')
    .ilike('name', `%${query}%`)
    .order('search_rank', { ascending: false })
    .limit(limit);
  
  return data || [];
}

export async function getCityBySlug(slug: string) {
  const { data } = await supabase
    .from('cities')
    .select('*')
    .eq('slug', slug)
    .single();
  
  return data;
}

export function createPairSlug(cityA: string, cityB: string): string {
  return [cityA, cityB].sort().join('-to-');
}

export function parsePairSlug(slug: string): { cityA: string; cityB: string } | null {
  const parts = slug.split('-to-');
  if (parts.length !== 2) return null;
  return { cityA: parts[0], cityB: parts[1] };
}
```

**Confirm Phase 3 complete before proceeding.**

---

## Phase 4: API Endpoints (30 min)

### 4.1 City Search API
Create `app/api/cities/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import { searchCities } from '@/lib/cities';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  
  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }
  
  const cities = await searchCities(q, 5);
  return NextResponse.json(cities);
}
```

### 4.2 Geocode API
Create `app/api/geocode/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import { geocodeAddress } from '@/lib/geocode';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  
  if (!q) {
    return NextResponse.json({ error: 'Query required' }, { status: 400 });
  }
  
  const result = await geocodeAddress(q);
  if (!result) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  
  return NextResponse.json(result);
}
```

**Confirm Phase 4 complete before proceeding.**

---

## Phase 5: Components (2 hours)

### 5.1 Calculator Component
Create `components/Calculator.tsx`:
- 4 tabs: Search, Map, GPS, Address
- Two input sections (From, To)
- Calculate button
- Calls parent callback with coordinates

### 5.2 City Search Component
Create `components/CitySearch.tsx`:
- Input with debounced search (300ms)
- Dropdown with 5 results
- Format: "City, Country"
- Click to select

### 5.3 Map Component
Create `components/Map.tsx`:
- Leaflet map
- Full-width, 50vh height
- Fullscreen button
- Click to place markers
- Show line between points
- Animated line drawing (3 sec)
- 🐦 emoji following path

Important: Map must be client-side only:
```typescript
'use client';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./MapClient'), { ssr: false });
```

### 5.4 Distance Result Component
Create `components/DistanceResult.tsx`:
- Large display: "214 mi / 344 km"
- Direction: "148° (Southeast)"
- Share link with copy button

### 5.5 Related Distances Component
Create `components/RelatedDistances.tsx`:
- 10 links to major cities
- Format: "London to New York: 3,459 mi"

### 5.6 FAQ Component
Create `components/FAQ.tsx`:
- Expandable questions
- 6 default questions
- Schema markup included

**Confirm Phase 5 complete before proceeding.**

---

## Phase 6: Homepage (45 min)

Create `app/page.tsx`:

Structure:
1. Header with logo
2. H1: "Crow Flies Distance Calculator"
3. Intro paragraph (50 words)
4. Calculator component
5. Map component (50vh)
6. Results section (conditionally shown)
7. 800 words SEO content:
   - What is Straight-Line Distance?
   - How to Use This Calculator
   - Why "As the Crow Flies"?
   - Straight Line vs Driving Distance
   - Popular Distance Searches (with links)
8. FAQ section (6 questions)
9. Footer

UX Flow:
1. User enters From/To
2. Clicks Calculate
3. Map animates
4. Results appear
5. URL updates to /london-to-paris/ (router.push, shallow)
6. Share link shown

**Confirm Phase 6 complete before proceeding.**

---

## Phase 7: Dynamic City Pair Pages (45 min)

Create `app/[cityPair]/page.tsx`:

```typescript
import { getCityBySlug, parsePairSlug } from '@/lib/cities';
import { haversineDistance, calculateBearing, bearingToDirection, estimateFlightTime } from '@/lib/distance';
import { notFound } from 'next/navigation';

// ISR: Generate on-demand, cache forever
export const dynamic = 'force-static';
export const revalidate = false;

// No pre-built pages - all generated on-demand
export async function generateStaticParams() {
  return [];
}

export default async function CityPairPage({ params }: { params: { cityPair: string } }) {
  const parsed = parsePairSlug(params.cityPair);
  if (!parsed) notFound();
  
  const [cityA, cityB] = await Promise.all([
    getCityBySlug(parsed.cityA),
    getCityBySlug(parsed.cityB)
  ]);
  
  if (!cityA || !cityB) notFound();
  
  const { miles, km } = haversineDistance(cityA.lat, cityA.lon, cityB.lat, cityB.lon);
  const bearing = calculateBearing(cityA.lat, cityA.lon, cityB.lat, cityB.lon);
  const direction = bearingToDirection(bearing);
  const flightTime = estimateFlightTime(km);
  
  return (
    // Full page content
  );
}

export async function generateMetadata({ params }: { params: { cityPair: string } }) {
  // Dynamic meta tags
}
```

Content on page:
1. H1: "{City A} to {City B} Distance"
2. Map with animated line (animate on load)
3. Distance box: "214 mi / 344 km"
4. Quick facts table
5. About {City A} (description from DB)
6. About {City B}
7. Did You Know fact
8. Compare to Driving
9. Related Distances (10 links)
10. FAQ (6 questions)
11. Calculator (for recalculation)

**Confirm Phase 7 complete before proceeding.**

---

## Phase 8: Blog Posts (30 min)

Create 5 blog posts in `app/blog/[slug]/page.tsx`:

1. `what-does-as-the-crow-flies-mean`
2. `straight-line-vs-driving-distance`
3. `how-to-measure-distance-on-map`
4. `why-planes-dont-fly-straight`
5. `surprising-city-distances`

Each ~800 words with internal links.

**Confirm Phase 8 complete before proceeding.**

---

## Phase 9: SEO & Polish (30 min)

### 9.1 Sitemap
Create `app/sitemap.ts`:
```typescript
export default async function sitemap() {
  const staticPages = [
    { url: 'https://crowfliesdistance.com/', priority: 1.0 },
    { url: 'https://crowfliesdistance.com/about/', priority: 0.5 },
    // ... other static pages
  ];
  
  // Add top 10,000 predicted city pairs for discovery
  const topPairs = await getTopCityPairSlugs(10000);
  const pairPages = topPairs.map(slug => ({
    url: `https://crowfliesdistance.com/${slug}/`,
    priority: 0.8
  }));
  
  return [...staticPages, ...pairPages];
}
```

### 9.2 Robots.txt
Create `app/robots.ts`:
```typescript
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://crowfliesdistance.com/sitemap.xml',
  };
}
```

### 9.3 Metadata
Add proper metadata to all pages with unique titles/descriptions.

### 9.4 Schema Markup
Add FAQPage schema to homepage and city pair pages.

**Confirm Phase 9 complete before proceeding.**

---

## Phase 10: Deploy (30 min)

### 10.1 Final Commit
```bash
git add .
git commit -m "Complete build"
git push
```

### 10.2 Deploy to Vercel
- Connect GitHub repo to Vercel
- Add environment variables
- Deploy

### 10.3 Custom Domain
- Add crowfliesdistance.com in Vercel
- Update DNS

### 10.4 Test Everything
- Calculator all 4 inputs
- Map animation
- City search
- GPS
- Address geocoding
- Dynamic page generation
- Mobile responsiveness

### 10.5 Submit to Google Search Console
- Add property
- Verify
- Submit sitemap

---

## Done! 🎉

The site is now live with:
- Perfect calculator with 4 input methods
- Dynamic pages created on-demand
- SEO-optimized content
- Fast, cached pages via ISR
