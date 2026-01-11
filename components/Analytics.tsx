'use client';

import Script from 'next/script';

// Replace with your actual Google Analytics ID when ready
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-XXXXXXXXXX';

export default function Analytics() {
  // Only load in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Google Search Console Verification */}
      <meta 
        name="google-site-verification" 
        content="verification-token-placeholder" 
      />
    </>
  );
}

// Analytics helper functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackDistanceCalculation = (fromCity: string, toCity: string, distance: number) => {
  trackEvent('calculate_distance', 'distance_calculator', `${fromCity} to ${toCity}`, distance);
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_ID, {
      page_path: url,
    });
  }
};