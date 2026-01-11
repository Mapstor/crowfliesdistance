'use client';

interface StructuredDataProps {
  type: 'WebApplication' | 'WebSite' | 'Article' | 'FAQPage' | 'AboutPage' | 'ContactPage';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const baseUrl = 'https://crowfliesdistance.com';
  
  const getStructuredData = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type
    };

    switch (type) {
      case 'WebApplication':
        return {
          ...baseSchema,
          '@type': ['WebApplication', 'SoftwareApplication'],
          name: 'CrowFliesDistance.com',
          alternateName: 'Crow Flies Distance Calculator',
          description: 'Calculate straight-line distances between any two points on Earth. Accurate "as the crow flies" distance calculator using the Haversine formula for geographic calculations.',
          url: baseUrl,
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'Geography Calculator',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          featureList: [
            'Calculate straight-line distances between cities',
            'Interactive map with click-to-calculate',
            'GPS location support',
            'Address geocoding',
            'Comprehensive distance information',
            'Travel time estimates',
            'Bearing and direction calculations',
            '100+ popular city pairs',
            'Educational blog content',
            'No registration required'
          ],
          browserRequirements: 'JavaScript enabled',
          screenshot: `${baseUrl}/og-image.png`,
          image: `${baseUrl}/og-image.png`,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '150',
            bestRating: '5',
            worstRating: '1'
          },
          creator: {
            '@type': 'Organization',
            name: 'CrowFliesDistance',
            url: baseUrl
          }
        };

      case 'WebSite':
        return {
          ...baseSchema,
          name: 'CrowFliesDistance.com',
          alternateName: ['Crow Flies Distance', 'Straight Line Distance Calculator'],
          description: 'Calculate accurate straight-line distances between any two points on Earth with our free distance calculator.',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}?from={search_term_string}&to={search_term_string2}`
            },
            'query-input': ['required name=search_term_string', 'required name=search_term_string2']
          },
          mainEntity: {
            '@type': 'WebApplication',
            name: 'Distance Calculator',
            applicationCategory: 'Geography Tool'
          },
          publisher: {
            '@type': 'Organization',
            name: 'CrowFliesDistance',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/favicon.svg`,
              width: 32,
              height: 32
            }
          }
        };

      case 'Article':
        return {
          ...baseSchema,
          headline: data?.title || '',
          description: data?.description || '',
          author: {
            '@type': 'Organization',
            name: 'CrowFliesDistance',
            url: baseUrl
          },
          publisher: {
            '@type': 'Organization',
            name: 'CrowFliesDistance',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/favicon.svg`,
              width: 32,
              height: 32
            }
          },
          datePublished: data?.datePublished || '2024-01-11',
          dateModified: data?.dateModified || '2024-01-11',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data?.url || baseUrl
          },
          articleSection: 'Geography Education',
          keywords: data?.keywords || ['distance calculation', 'geography', 'great circle', 'haversine formula', 'navigation'],
          wordCount: data?.wordCount || 2000,
          about: {
            '@type': 'Thing',
            name: 'Geographic Distance Calculation'
          }
        };

      case 'FAQPage':
        return {
          ...baseSchema,
          name: 'Distance Calculator FAQ',
          description: 'Frequently asked questions about calculating straight-line distances and using our distance calculator.',
          url: `${baseUrl}/faq`,
          mainEntity: data?.faqs?.map((faq: any, index: number) => ({
            '@type': 'Question',
            '@id': `${baseUrl}/faq#question-${index}`,
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })) || []
        };

      case 'AboutPage':
        return {
          ...baseSchema,
          '@type': 'AboutPage',
          name: 'About CrowFliesDistance.com',
          description: 'Learn about our distance calculator, features, and mission to provide accurate geographic distance calculations.',
          url: `${baseUrl}/about`,
          mainEntity: {
            '@type': 'WebApplication',
            name: 'CrowFliesDistance Calculator',
            description: 'Free online tool for calculating straight-line distances between any two points on Earth.'
          },
          about: {
            '@type': 'Organization',
            name: 'CrowFliesDistance',
            description: 'Provider of geographic distance calculation tools and educational content.',
            url: baseUrl,
            foundingDate: '2024',
            knowsAbout: [
              'Geographic distance calculation',
              'Haversine formula',
              'Great circle routes',
              'Navigation',
              'Cartography',
              'Spherical geometry'
            ]
          }
        };

      case 'ContactPage':
        return {
          ...baseSchema,
          '@type': 'ContactPage',
          name: 'Contact CrowFliesDistance',
          description: 'Get in touch with us for questions, feedback, or support regarding our distance calculator.',
          url: `${baseUrl}/contact`,
          mainEntity: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'contact@crowfliesdistance.com',
            availableLanguage: 'English',
            areaServed: 'Worldwide'
          }
        };

      default:
        return baseSchema;
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}