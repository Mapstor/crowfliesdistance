import { MetadataRoute } from 'next';
import { getTopCityPairs } from '@/lib/cities';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://crowfliesdistance.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-does-as-the-crow-flies-mean`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
  
  // Add top 100 predicted city pairs for discovery
  // These are the most likely to be searched
  const topCityPairs = [
    'london-to-paris',
    'los-angeles-to-new-york',
    'london-to-new-york',
    'singapore-to-tokyo',
    'auckland-to-sydney',
    'dubai-to-london',
    'paris-to-rome',
    'amsterdam-to-london',
    'barcelona-to-madrid',
    'berlin-to-paris',
    'chicago-to-new-york',
    'hong-kong-to-singapore',
    'london-to-madrid',
    'london-to-rome',
    'los-angeles-to-san-francisco',
    'miami-to-new-york',
    'moscow-to-paris',
    'mumbai-to-delhi',
    'new-york-to-washington',
    'paris-to-vienna',
    // Add more as needed
  ];

  const pairPages = topCityPairs.map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  return [...staticPages, ...pairPages];
}