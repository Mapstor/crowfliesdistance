export interface PopularDistance {
  fromCity: string;
  toCity: string;
  fromCoords: { lat: number; lon: number };
  toCoords: { lat: number; lon: number };
}

export const popularDistances: PopularDistance[] = [
  // North America - Europe
  { fromCity: 'New York', toCity: 'London', fromCoords: { lat: 40.7128, lon: -74.0060 }, toCoords: { lat: 51.5074, lon: -0.1278 } },
  { fromCity: 'Los Angeles', toCity: 'Paris', fromCoords: { lat: 34.0522, lon: -118.2437 }, toCoords: { lat: 48.8566, lon: 2.3522 } },
  { fromCity: 'Chicago', toCity: 'Berlin', fromCoords: { lat: 41.8781, lon: -87.6298 }, toCoords: { lat: 52.5200, lon: 13.4050 } },
  { fromCity: 'Toronto', toCity: 'Amsterdam', fromCoords: { lat: 43.6532, lon: -79.3832 }, toCoords: { lat: 52.3676, lon: 4.9041 } },
  { fromCity: 'Miami', toCity: 'Madrid', fromCoords: { lat: 25.7617, lon: -80.1918 }, toCoords: { lat: 40.4168, lon: -3.7038 } },
  { fromCity: 'Boston', toCity: 'Dublin', fromCoords: { lat: 42.3601, lon: -71.0589 }, toCoords: { lat: 53.3498, lon: -6.2603 } },
  { fromCity: 'San Francisco', toCity: 'Rome', fromCoords: { lat: 37.7749, lon: -122.4194 }, toCoords: { lat: 41.9028, lon: 12.4964 } },
  { fromCity: 'Seattle', toCity: 'Stockholm', fromCoords: { lat: 47.6062, lon: -122.3321 }, toCoords: { lat: 59.3293, lon: 18.0686 } },
  { fromCity: 'Washington DC', toCity: 'Brussels', fromCoords: { lat: 38.9072, lon: -77.0369 }, toCoords: { lat: 50.8503, lon: 4.3517 } },
  { fromCity: 'Vancouver', toCity: 'Vienna', fromCoords: { lat: 49.2827, lon: -123.1207 }, toCoords: { lat: 48.2082, lon: 16.3738 } },

  // Europe Internal
  { fromCity: 'London', toCity: 'Paris', fromCoords: { lat: 51.5074, lon: -0.1278 }, toCoords: { lat: 48.8566, lon: 2.3522 } },
  { fromCity: 'Berlin', toCity: 'Moscow', fromCoords: { lat: 52.5200, lon: 13.4050 }, toCoords: { lat: 55.7558, lon: 37.6173 } },
  { fromCity: 'Madrid', toCity: 'Rome', fromCoords: { lat: 40.4168, lon: -3.7038 }, toCoords: { lat: 41.9028, lon: 12.4964 } },
  { fromCity: 'Paris', toCity: 'Barcelona', fromCoords: { lat: 48.8566, lon: 2.3522 }, toCoords: { lat: 41.3851, lon: 2.1734 } },
  { fromCity: 'Amsterdam', toCity: 'Prague', fromCoords: { lat: 52.3676, lon: 4.9041 }, toCoords: { lat: 50.0755, lon: 14.4378 } },
  { fromCity: 'Vienna', toCity: 'Budapest', fromCoords: { lat: 48.2082, lon: 16.3738 }, toCoords: { lat: 47.4979, lon: 19.0402 } },
  { fromCity: 'Athens', toCity: 'Istanbul', fromCoords: { lat: 37.9838, lon: 23.7275 }, toCoords: { lat: 41.0082, lon: 28.9784 } },
  { fromCity: 'Lisbon', toCity: 'Warsaw', fromCoords: { lat: 38.7223, lon: -9.1393 }, toCoords: { lat: 52.2297, lon: 21.0122 } },
  { fromCity: 'Dublin', toCity: 'Edinburgh', fromCoords: { lat: 53.3498, lon: -6.2603 }, toCoords: { lat: 55.9533, lon: -3.1883 } },
  { fromCity: 'Oslo', toCity: 'Copenhagen', fromCoords: { lat: 59.9139, lon: 10.7522 }, toCoords: { lat: 55.6761, lon: 12.5683 } },

  // Asia Pacific
  { fromCity: 'Tokyo', toCity: 'Seoul', fromCoords: { lat: 35.6762, lon: 139.6503 }, toCoords: { lat: 37.5665, lon: 126.9780 } },
  { fromCity: 'Beijing', toCity: 'Shanghai', fromCoords: { lat: 39.9042, lon: 116.4074 }, toCoords: { lat: 31.2304, lon: 121.4737 } },
  { fromCity: 'Singapore', toCity: 'Kuala Lumpur', fromCoords: { lat: 1.3521, lon: 103.8198 }, toCoords: { lat: 3.1390, lon: 101.6869 } },
  { fromCity: 'Sydney', toCity: 'Auckland', fromCoords: { lat: -33.8688, lon: 151.2093 }, toCoords: { lat: -36.8485, lon: 174.7633 } },
  { fromCity: 'Melbourne', toCity: 'Perth', fromCoords: { lat: -37.8136, lon: 144.9631 }, toCoords: { lat: -31.9505, lon: 115.8605 } },
  { fromCity: 'Hong Kong', toCity: 'Taipei', fromCoords: { lat: 22.3193, lon: 114.1694 }, toCoords: { lat: 25.0330, lon: 121.5654 } },
  { fromCity: 'Bangkok', toCity: 'Ho Chi Minh City', fromCoords: { lat: 13.7563, lon: 100.5018 }, toCoords: { lat: 10.8231, lon: 106.6297 } },
  { fromCity: 'Manila', toCity: 'Jakarta', fromCoords: { lat: 14.5995, lon: 120.9842 }, toCoords: { lat: -6.2088, lon: 106.8456 } },
  { fromCity: 'Delhi', toCity: 'Mumbai', fromCoords: { lat: 28.6139, lon: 77.2090 }, toCoords: { lat: 19.0760, lon: 72.8777 } },
  { fromCity: 'Bangalore', toCity: 'Chennai', fromCoords: { lat: 12.9716, lon: 77.5946 }, toCoords: { lat: 13.0827, lon: 80.2707 } },

  // Middle East & Africa
  { fromCity: 'Dubai', toCity: 'Cairo', fromCoords: { lat: 25.2048, lon: 55.2708 }, toCoords: { lat: 30.0444, lon: 31.2357 } },
  { fromCity: 'Tel Aviv', toCity: 'Amman', fromCoords: { lat: 32.0853, lon: 34.7818 }, toCoords: { lat: 31.9539, lon: 35.9106 } },
  { fromCity: 'Riyadh', toCity: 'Kuwait City', fromCoords: { lat: 24.7136, lon: 46.6753 }, toCoords: { lat: 29.3759, lon: 47.9774 } },
  { fromCity: 'Cape Town', toCity: 'Johannesburg', fromCoords: { lat: -33.9249, lon: 18.4241 }, toCoords: { lat: -26.2041, lon: 28.0473 } },
  { fromCity: 'Lagos', toCity: 'Nairobi', fromCoords: { lat: 6.5244, lon: 3.3792 }, toCoords: { lat: -1.2921, lon: 36.8219 } },
  { fromCity: 'Casablanca', toCity: 'Tunis', fromCoords: { lat: 33.5731, lon: -7.5898 }, toCoords: { lat: 36.8065, lon: 10.1815 } },
  { fromCity: 'Addis Ababa', toCity: 'Khartoum', fromCoords: { lat: 9.0320, lon: 38.7469 }, toCoords: { lat: 15.5007, lon: 32.5599 } },
  { fromCity: 'Accra', toCity: 'Dakar', fromCoords: { lat: 5.6037, lon: -0.1870 }, toCoords: { lat: 14.7167, lon: -17.4677 } },
  { fromCity: 'Beirut', toCity: 'Damascus', fromCoords: { lat: 33.8938, lon: 35.5018 }, toCoords: { lat: 33.5138, lon: 36.2765 } },
  { fromCity: 'Doha', toCity: 'Abu Dhabi', fromCoords: { lat: 25.2854, lon: 51.5310 }, toCoords: { lat: 24.4539, lon: 54.3773 } },

  // South America
  { fromCity: 'São Paulo', toCity: 'Buenos Aires', fromCoords: { lat: -23.5505, lon: -46.6333 }, toCoords: { lat: -34.6037, lon: -58.3816 } },
  { fromCity: 'Rio de Janeiro', toCity: 'Lima', fromCoords: { lat: -22.9068, lon: -43.1729 }, toCoords: { lat: -12.0464, lon: -77.0428 } },
  { fromCity: 'Bogotá', toCity: 'Caracas', fromCoords: { lat: 4.7110, lon: -74.0721 }, toCoords: { lat: 10.4806, lon: -66.9036 } },
  { fromCity: 'Santiago', toCity: 'Montevideo', fromCoords: { lat: -33.4489, lon: -70.6693 }, toCoords: { lat: -34.9011, lon: -56.1645 } },
  { fromCity: 'Quito', toCity: 'La Paz', fromCoords: { lat: -0.1807, lon: -78.4678 }, toCoords: { lat: -16.4897, lon: -68.1193 } },
  { fromCity: 'Brasília', toCity: 'Asunción', fromCoords: { lat: -15.7975, lon: -47.8919 }, toCoords: { lat: -25.2637, lon: -57.5759 } },
  { fromCity: 'Medellín', toCity: 'Panama City', fromCoords: { lat: 6.2442, lon: -75.5812 }, toCoords: { lat: 8.9824, lon: -79.5199 } },
  { fromCity: 'Salvador', toCity: 'Recife', fromCoords: { lat: -12.9777, lon: -38.5016 }, toCoords: { lat: -8.0476, lon: -34.8770 } },
  { fromCity: 'Guayaquil', toCity: 'Cali', fromCoords: { lat: -2.1710, lon: -79.9224 }, toCoords: { lat: 3.4516, lon: -76.5320 } },
  { fromCity: 'Porto Alegre', toCity: 'Córdoba', fromCoords: { lat: -30.0346, lon: -51.2177 }, toCoords: { lat: -31.4201, lon: -64.1888 } },

  // Cross-Continental 
  { fromCity: 'London', toCity: 'New York', fromCoords: { lat: 51.5074, lon: -0.1278 }, toCoords: { lat: 40.7128, lon: -74.0060 } },
  { fromCity: 'Paris', toCity: 'Tokyo', fromCoords: { lat: 48.8566, lon: 2.3522 }, toCoords: { lat: 35.6762, lon: 139.6503 } },
  { fromCity: 'Sydney', toCity: 'Los Angeles', fromCoords: { lat: -33.8688, lon: 151.2093 }, toCoords: { lat: 34.0522, lon: -118.2437 } },
  { fromCity: 'Dubai', toCity: 'London', fromCoords: { lat: 25.2048, lon: 55.2708 }, toCoords: { lat: 51.5074, lon: -0.1278 } },
  { fromCity: 'Singapore', toCity: 'San Francisco', fromCoords: { lat: 1.3521, lon: 103.8198 }, toCoords: { lat: 37.7749, lon: -122.4194 } },
  { fromCity: 'Mumbai', toCity: 'New York', fromCoords: { lat: 19.0760, lon: 72.8777 }, toCoords: { lat: 40.7128, lon: -74.0060 } },
  { fromCity: 'Cairo', toCity: 'Cape Town', fromCoords: { lat: 30.0444, lon: 31.2357 }, toCoords: { lat: -33.9249, lon: 18.4241 } },
  { fromCity: 'Moscow', toCity: 'Beijing', fromCoords: { lat: 55.7558, lon: 37.6173 }, toCoords: { lat: 39.9042, lon: 116.4074 } },
  { fromCity: 'Toronto', toCity: 'Sydney', fromCoords: { lat: 43.6532, lon: -79.3832 }, toCoords: { lat: -33.8688, lon: 151.2093 } },
  { fromCity: 'Mexico City', toCity: 'Madrid', fromCoords: { lat: 19.4326, lon: -99.1332 }, toCoords: { lat: 40.4168, lon: -3.7038 } },

  // US Domestic
  { fromCity: 'New York', toCity: 'Los Angeles', fromCoords: { lat: 40.7128, lon: -74.0060 }, toCoords: { lat: 34.0522, lon: -118.2437 } },
  { fromCity: 'Chicago', toCity: 'Houston', fromCoords: { lat: 41.8781, lon: -87.6298 }, toCoords: { lat: 29.7604, lon: -95.3698 } },
  { fromCity: 'Phoenix', toCity: 'Philadelphia', fromCoords: { lat: 33.4484, lon: -112.0740 }, toCoords: { lat: 39.9526, lon: -75.1652 } },
  { fromCity: 'San Antonio', toCity: 'San Diego', fromCoords: { lat: 29.4241, lon: -98.4936 }, toCoords: { lat: 32.7157, lon: -117.1611 } },
  { fromCity: 'Dallas', toCity: 'Denver', fromCoords: { lat: 32.7767, lon: -96.7970 }, toCoords: { lat: 39.7392, lon: -104.9903 } },
  { fromCity: 'Austin', toCity: 'Nashville', fromCoords: { lat: 30.2672, lon: -97.7431 }, toCoords: { lat: 36.1627, lon: -86.7816 } },
  { fromCity: 'Portland', toCity: 'Las Vegas', fromCoords: { lat: 45.5152, lon: -122.6784 }, toCoords: { lat: 36.1699, lon: -115.1398 } },
  { fromCity: 'Atlanta', toCity: 'Miami', fromCoords: { lat: 33.7490, lon: -84.3880 }, toCoords: { lat: 25.7617, lon: -80.1918 } },
  { fromCity: 'Detroit', toCity: 'Minneapolis', fromCoords: { lat: 42.3314, lon: -83.0458 }, toCoords: { lat: 44.9778, lon: -93.2650 } },
  { fromCity: 'Tampa', toCity: 'Charlotte', fromCoords: { lat: 27.9506, lon: -82.4572 }, toCoords: { lat: 35.2271, lon: -80.8431 } },

  // Canada
  { fromCity: 'Montreal', toCity: 'Vancouver', fromCoords: { lat: 45.5017, lon: -73.5673 }, toCoords: { lat: 49.2827, lon: -123.1207 } },
  { fromCity: 'Calgary', toCity: 'Ottawa', fromCoords: { lat: 51.0447, lon: -114.0719 }, toCoords: { lat: 45.4215, lon: -75.6972 } },
  { fromCity: 'Edmonton', toCity: 'Winnipeg', fromCoords: { lat: 53.5461, lon: -113.4938 }, toCoords: { lat: 49.8951, lon: -97.1384 } },
  { fromCity: 'Quebec City', toCity: 'Halifax', fromCoords: { lat: 46.8139, lon: -71.2080 }, toCoords: { lat: 44.6488, lon: -63.5752 } },
  { fromCity: 'Regina', toCity: 'Saskatoon', fromCoords: { lat: 50.4452, lon: -104.6189 }, toCoords: { lat: 52.1332, lon: -106.6700 } },

  // Australia & New Zealand
  { fromCity: 'Brisbane', toCity: 'Adelaide', fromCoords: { lat: -27.4698, lon: 153.0251 }, toCoords: { lat: -34.9285, lon: 138.6007 } },
  { fromCity: 'Darwin', toCity: 'Hobart', fromCoords: { lat: -12.4634, lon: 130.8456 }, toCoords: { lat: -42.8821, lon: 147.3272 } },
  { fromCity: 'Wellington', toCity: 'Christchurch', fromCoords: { lat: -41.2865, lon: 174.7762 }, toCoords: { lat: -43.5321, lon: 172.6362 } },
  { fromCity: 'Canberra', toCity: 'Gold Coast', fromCoords: { lat: -35.2809, lon: 149.1300 }, toCoords: { lat: -28.0167, lon: 153.4000 } },
  { fromCity: 'Newcastle', toCity: 'Cairns', fromCoords: { lat: -32.9283, lon: 151.7817 }, toCoords: { lat: -16.9186, lon: 145.7781 } },

  // India
  { fromCity: 'Kolkata', toCity: 'Hyderabad', fromCoords: { lat: 22.5726, lon: 88.3639 }, toCoords: { lat: 17.3850, lon: 78.4867 } },
  { fromCity: 'Pune', toCity: 'Ahmedabad', fromCoords: { lat: 18.5204, lon: 73.8567 }, toCoords: { lat: 23.0225, lon: 72.5714 } },
  { fromCity: 'Jaipur', toCity: 'Lucknow', fromCoords: { lat: 26.9124, lon: 75.7873 }, toCoords: { lat: 26.8467, lon: 80.9462 } },
  { fromCity: 'Surat', toCity: 'Kochi', fromCoords: { lat: 21.1702, lon: 72.8311 }, toCoords: { lat: 9.9312, lon: 76.2673 } },
  { fromCity: 'Guwahati', toCity: 'Patna', fromCoords: { lat: 26.1445, lon: 91.7362 }, toCoords: { lat: 25.5941, lon: 85.1376 } },

  // China
  { fromCity: 'Guangzhou', toCity: 'Shenzhen', fromCoords: { lat: 23.1291, lon: 113.2644 }, toCoords: { lat: 22.5431, lon: 114.0579 } },
  { fromCity: 'Chengdu', toCity: 'Chongqing', fromCoords: { lat: 30.5728, lon: 104.0668 }, toCoords: { lat: 29.5630, lon: 106.5516 } },
  { fromCity: 'Wuhan', toCity: 'Nanjing', fromCoords: { lat: 30.5928, lon: 114.3055 }, toCoords: { lat: 32.0603, lon: 118.7969 } },
  { fromCity: 'Xi\'an', toCity: 'Hangzhou', fromCoords: { lat: 34.3416, lon: 108.9398 }, toCoords: { lat: 30.2741, lon: 120.1551 } },
  { fromCity: 'Harbin', toCity: 'Dalian', fromCoords: { lat: 45.7567, lon: 126.6424 }, toCoords: { lat: 38.9140, lon: 121.6147 } },

  // Japan
  { fromCity: 'Osaka', toCity: 'Kyoto', fromCoords: { lat: 34.6937, lon: 135.5023 }, toCoords: { lat: 35.0116, lon: 135.7681 } },
  { fromCity: 'Nagoya', toCity: 'Yokohama', fromCoords: { lat: 35.1815, lon: 136.9066 }, toCoords: { lat: 35.4437, lon: 139.6380 } },
  { fromCity: 'Sapporo', toCity: 'Fukuoka', fromCoords: { lat: 43.0618, lon: 141.3545 }, toCoords: { lat: 33.5904, lon: 130.4017 } },
  { fromCity: 'Kobe', toCity: 'Hiroshima', fromCoords: { lat: 34.6901, lon: 135.1955 }, toCoords: { lat: 34.3853, lon: 132.4553 } },
  { fromCity: 'Sendai', toCity: 'Nagasaki', fromCoords: { lat: 38.2682, lon: 140.8694 }, toCoords: { lat: 32.7503, lon: 129.8779 } }
];