# CrowFliesDistance.com 🌍

A comprehensive distance calculator that computes straight-line "as the crow flies" distances between any two points on Earth.

![CrowFliesDistance](https://crowfliesdistance.com/og-image.png)

## ✨ Features

- **🧭 Multiple Input Methods**: Search cities, use GPS location, or enter addresses
- **🗺️ Interactive Map**: Click-to-calculate with visual route display
- **📊 Comprehensive Results**: Distance, bearing, flight time, and detailed comparisons
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile
- **🔍 SEO Optimized**: Rich structured data for search engines and AI
- **📚 Educational Content**: 6 detailed blog posts about geography and distance
- **⚡ Fast Performance**: Built with Next.js 15 and optimized for speed

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet with OpenStreetMap
- **Database**: JSON data files (cities, countries)
- **Geocoding**: OpenStreetMap Nominatim API
- **Deployment**: Vercel (recommended)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/crowfliesdistance.git
cd crowfliesdistance

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Quick Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Deploy automatically with zero configuration

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions and other hosting options.

## 📊 SEO & Analytics

### Included SEO Features
- ✅ Comprehensive meta tags and Open Graph
- ✅ Structured data (Schema.org) for all page types
- ✅ Dynamic sitemap.xml with 100+ city pairs
- ✅ AI-friendly robots.txt
- ✅ Google Analytics integration ready

### Setup Analytics (Optional)
1. Get Google Analytics GA4 ID from [analytics.google.com](https://analytics.google.com)
2. Replace placeholder in `components/Analytics.tsx`
3. Add to environment variables: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`

## 🎯 API Endpoints

- `/api/cities?q={query}` - Search cities
- `/api/geocode?q={address}` - Geocode addresses  
- `/sitemap.xml` - Dynamic sitemap
- `/robots.txt` - Search engine instructions

## 📁 Project Structure

```
crowfliesdistance/
├── app/                    # Next.js app router pages
│   ├── [cityPair]/        # Dynamic city pair pages
│   ├── blog/              # Blog posts
│   ├── api/               # API endpoints
│   └── ...
├── components/            # React components
├── lib/                   # Utility functions and data
└── public/               # Static assets (favicon, images)
```

## 🗃️ Data Sources

- **Cities**: GeoNames database (15,000+ cities worldwide)
- **Countries**: ISO country codes and names
- **Maps**: OpenStreetMap
- **Geocoding**: Nominatim (OpenStreetMap)

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for geography enthusiasts worldwide**
