# CrowFliesDistance.com - Project Brief v2 (Hybrid)

## Core Concept

**One perfect calculator + dynamic pages created on-demand.**

Users search → Results show → URL updates → Page exists forever → Google indexes it.

---

## How It Works

```
1. User visits homepage
2. Searches "London to Paris"
3. Calculator shows results on same page
4. URL changes to /london-to-paris/
5. Page is now cached forever (ISR)
6. Google indexes it
7. Future visitors land directly on /london-to-paris/
8. Repeat for every unique search
```

**Result:** Pages grow organically based on actual demand.

---

## Tech Stack

- **Next.js 14** (App Router)
- **Vercel** (hosting + ISR)
- **Supabase** (PostgreSQL + PostGIS for city search)
- **Leaflet** (map)
- **Nominatim** (address geocoding)
- **Tailwind CSS** (styling)

---

## Site Structure

```
crowfliesdistance.com/
│
├── / (Homepage)
│   └── Calculator with 4 input methods
│   └── Map with animation
│   └── 800 words SEO content
│   └── FAQ section
│
├── /[city-a]-to-[city-b]/ (Dynamic city pair pages)
│   └── Created on first visit
│   └── Cached forever
│   └── Same content as homepage results
│   └── Example: /london-to-paris/
│
├── /coordinates/[coords]/ (Custom coordinate pages)
│   └── For map-clicked points without city names
│   └── Example: /coordinates/51.5,-0.12-to-48.85,2.35/
│
├── /blog/
│   └── 5 SEO articles
│
└── /about, /contact, /privacy, /terms
```

---

## Page Count

| Type | Count | Notes |
|------|-------|-------|
| Homepage | 1 | Main calculator |
| City pairs | ∞ (dynamic) | Created on demand |
| Coordinate pages | ∞ (dynamic) | For custom points |
| Blog | 5 | SEO articles |
| Static | 4 | About, contact, etc. |

---

## Input Methods (4 Ways)

### 1. City Search
- Autocomplete dropdown
- 5 results max
- Format: "London, United Kingdom"
- Powered by Supabase

### 2. Map Click
- Click any point on map
- Marker placed
- Coordinates shown

### 3. GPS Location
- "Use my location" button
- Browser geolocation API

### 4. Address Input
- Type any address
- Geocoded via Nominatim

---

## Calculator UX Flow

### Step 1: User Input
```
┌─────────────────────────────────────────────────┐
│  From: [London________________] 📍 Use GPS      │
│  To:   [Paris_________________]                 │
│                                                 │
│  [Search] [Map] [Address]  ← Input method tabs  │
│                                                 │
│  [Calculate Distance]                           │
└─────────────────────────────────────────────────┘
```

### Step 2: Results (Same Page)
```
┌─────────────────────────────────────────────────┐
│           London → Paris                        │
│                                                 │
│         214 mi / 344 km                         │
│         Direction: 148° (Southeast)             │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │         [MAP WITH ANIMATED LINE]        │   │
│  │              🐦 ─────────→              │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  Share: crowfliesdistance.com/london-to-paris/ │
│  [Copy Link] [Open Page]                        │
└─────────────────────────────────────────────────┘
```

### Step 3: URL Update
- Browser URL changes to `/london-to-paris/`
- No page reload (Next.js router.push)
- Page is now indexable

---

## Homepage Content (800 words)

### Structure
1. **H1**: "Crow Flies Distance Calculator" (50 words intro)
2. **Calculator** (the tool)
3. **What is Straight-Line Distance?** (150 words)
4. **How to Use This Calculator** (150 words)
5. **Why "As the Crow Flies"?** (100 words)
6. **Straight Line vs Driving Distance** (150 words)
7. **Popular Distance Searches** (100 words + internal links)
8. **FAQ** (100 words, 6 questions)

### FAQ Questions
1. What does "as the crow flies" mean?
2. How accurate is this calculator?
3. Why is straight-line distance different from driving?
4. Can I measure distance between any two points?
5. What units are supported?
6. How is the distance calculated?

---

## City Pair Pages (Dynamic)

### URL Format
`/[city-a]-to-[city-b]/`

Alphabetical order: `london-to-paris` not `paris-to-london`
(Both URLs work, non-canonical redirects to canonical)

### Page Content

Same layout as homepage results, but as standalone page:

```
┌─────────────────────────────────────────────────┐
│  London to Paris Distance                       │
│  ═══════════════════════════════════════════   │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │         [MAP WITH ANIMATED LINE]        │   │
│  │         50% viewport height             │   │
│  │         Fullscreen button               │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │      214 mi / 344 km                    │   │
│  │      Direction: 148° (Southeast)        │   │
│  │      Flight time: ~1 hr 15 min          │   │
│  │      Coordinates: 51.5°N → 48.9°N       │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  About London                                   │
│  London is the capital of the United Kingdom..│
│                                                 │
│  About Paris                                    │
│  Paris is the capital of France...             │
│                                                 │
│  💡 Did You Know?                               │
│  The Eurostar train covers this distance in... │
│                                                 │
│  Compare to Driving                             │
│  Driving distance is approximately 280 miles..│
│                                                 │
│  Related Distances                              │
│  • London to New York: 3,459 mi                │
│  • Paris to Rome: 687 mi                       │
│  • London to Dublin: 288 mi                    │
│  (10 links total)                              │
│                                                 │
│  ❓ FAQ                                         │
│  (6 questions with Schema markup)              │
│                                                 │
│  Calculate Another Distance                     │
│  [Calculator widget]                           │
└─────────────────────────────────────────────────┘
```

---

## Map Specifications

### Provider
Leaflet + OpenStreetMap (free, unlimited)

### Display
- Full-width
- 50% viewport height
- Fullscreen button (minimal overlay with distance)

### Animation
1. Map loads, fits both points
2. Line draws from A to B (3 seconds)
3. 🐦 bird emoji follows path
4. Ends with static line + markers

### Interactions
- Click to place markers (on calculator)
- Zoom/pan
- Fullscreen toggle

---

## Database Schema (Supabase)

### Cities Table
```sql
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
  search_rank INTEGER DEFAULT 0
);

CREATE INDEX idx_cities_slug ON cities(slug);
CREATE INDEX idx_cities_name ON cities USING gin(name gin_trgm_ops);
CREATE INDEX idx_cities_search_rank ON cities(search_rank DESC);
```

### Enable Fuzzy Search
```sql
CREATE EXTENSION IF NOT EXISTS pg_trgm;
```

---

## API Endpoints

### 1. City Search
```
GET /api/cities?q=lon&limit=5

Response:
[
  { "name": "London", "country": "United Kingdom", "slug": "london", "lat": 51.5074, "lon": -0.1278 },
  { "name": "Long Beach", "country": "United States", "slug": "long-beach", "lat": 33.77, "lon": -118.19 }
]
```

### 2. Geocode Address
```
GET /api/geocode?q=123+Main+St+London

Response:
{ "lat": 51.5074, "lon": -0.1278, "display": "123 Main St, London, UK" }
```

### 3. Get City Pair Data
```
GET /api/pair/london-to-paris

Response:
{
  "cityA": { "name": "London", "country": "United Kingdom", "lat": 51.5074, "lon": -0.1278, "description": "..." },
  "cityB": { "name": "Paris", "country": "France", "lat": 48.8566, "lon": 2.3522, "description": "..." },
  "distance": { "miles": 214, "km": 344 },
  "bearing": 148,
  "direction": "Southeast",
  "flightTime": 75,
  "didYouKnow": "The Eurostar train covers this distance in just 2 hours 15 minutes.",
  "related": [...]
}
```

---

## SEO Strategy

### Homepage
- Target: "as the crow flies calculator", "crow flies distance", "straight line distance calculator"
- 800 words optimized content
- FAQ with Schema

### Dynamic Pages
- Target: "[city] to [city] distance", "how far is [city] from [city]"
- Auto-generated meta titles/descriptions
- FAQ Schema on each page
- Canonical URLs (alphabetical order)

### Sitemap
```
/sitemap.xml
├── Homepage
├── Blog posts
├── Static pages
└── Top 10,000 predicted city pairs (seed for Google)
```

Pre-submit popular pairs even before they're visited:
- London to Paris
- New York to Los Angeles
- etc.

Google discovers them, crawls them, pages get created and cached.

---

## File Structure

```
crowfliesdistance/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── [cityPair]/
│   │   └── page.tsx                # Dynamic city pairs
│   ├── coordinates/
│   │   └── [coords]/
│   │       └── page.tsx            # Custom coordinates
│   ├── api/
│   │   ├── cities/route.ts         # City search
│   │   ├── geocode/route.ts        # Address geocoding
│   │   └── pair/[slug]/route.ts    # City pair data
│   ├── blog/
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   └── terms-of-service/page.tsx
│
├── components/
│   ├── Calculator.tsx
│   ├── CitySearch.tsx
│   ├── Map.tsx
│   ├── MapAnimation.tsx
│   ├── DistanceResult.tsx
│   ├── ShareLink.tsx
│   ├── FAQ.tsx
│   ├── RelatedDistances.tsx
│   ├── Header.tsx
│   └── Footer.tsx
│
├── lib/
│   ├── supabase.ts
│   ├── distance.ts
│   ├── geocode.ts
│   └── utils.ts
│
└── data/
    └── cities-500.json             # Seed data
```

---

## ISR Configuration

### Dynamic City Pair Pages
```typescript
// app/[cityPair]/page.tsx

export const dynamic = 'force-static';
export const revalidate = false; // Cache forever

export async function generateStaticParams() {
  // Return empty - pages created on-demand
  return [];
}
```

### How ISR Works
1. First visitor to `/london-to-paris/` triggers build
2. Page is generated server-side
3. Page is cached at edge (forever)
4. All future visitors get cached version
5. Zero rebuild needed

---

## Blog Posts (5 Articles)

1. **What Does "As the Crow Flies" Mean?**
   - Etymology, history, usage
   - 800 words

2. **Straight Line vs Driving Distance Explained**
   - Why they differ, when each matters
   - 800 words

3. **How to Measure Distance on a Map**
   - Different methods, tools
   - 800 words

4. **Why Planes Don't Fly in Straight Lines**
   - Great circles, jet streams, airspace
   - 800 words

5. **10 Surprising City Distances**
   - Fun facts, comparisons
   - 800 words, lots of internal links

---

## Timeline (6-7 hours)

| Phase | Task | Time |
|-------|------|------|
| 1 | Setup: Next.js + Vercel + Supabase + Git | 30 min |
| 2 | Database: Schema + seed 500 cities | 30 min |
| 3 | API: City search + geocode endpoints | 30 min |
| 4 | Calculator: All 4 input methods | 1 hr |
| 5 | Map: Leaflet + animation | 1 hr |
| 6 | Homepage: Full layout + 800 words | 45 min |
| 7 | City pair template: Dynamic pages | 45 min |
| 8 | Blog: 5 articles | 30 min |
| 9 | SEO: Sitemap + meta + schema | 30 min |
| 10 | Deploy + test | 30 min |

**Total: ~7 hours**

---

## Success Metrics

### Week 1
- Calculator works perfectly
- Homepage indexed
- Blog posts indexed

### Month 1
- 1,000+ dynamic pages created (from real searches)
- First organic traffic
- AdSense application

### Month 3
- 10,000+ pages indexed
- 5,000+ monthly visitors
- Ranking for long-tail keywords

### Month 6
- 50,000+ pages indexed
- 20,000+ monthly visitors
- Top 10 for "crow flies calculator"
