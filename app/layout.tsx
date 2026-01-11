import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crow Flies Distance Calculator - Straight Line Distance Between Cities",
  description: "Calculate the straight-line distance between any two points on Earth. Also known as 'as the crow flies' distance. Accurate calculations using the Haversine formula.",
  keywords: "distance calculator, as the crow flies, straight line distance, haversine formula, city distance, geographic distance, great circle route, navigation, geography calculator, map distance",
  authors: [{ name: "CrowFliesDistance" }],
  category: "Education",
  classification: "Geography Tool",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Crow Flies Distance Calculator",
    description: "Calculate straight-line distances between any two points on Earth",
    url: "https://crowfliesdistance.com",
    siteName: "CrowFliesDistance",
    type: "website",
    images: [
      {
        url: "https://crowfliesdistance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CrowFliesDistance.com - Calculate straight-line distances between any two points on Earth",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crow Flies Distance Calculator",
    description: "Calculate straight-line distances between any two points on Earth",
    site: "@crowfliesdist",
    creator: "@crowfliesdist",
    images: ["https://crowfliesdistance.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification-token",
  },
  other: {
    "application-name": "CrowFliesDistance Calculator",
    "apple-mobile-web-app-title": "Distance Calculator",
    "format-detection": "telephone=no",
    "theme-color": "#0891b2",
    "color-scheme": "light",
    "application-category": "EducationalApplication",
    "application-subcategory": "Geography Calculator",
    "content-language": "en-US",
    "geo.region": "US",
    "geo.placename": "Global",
    "geo.position": "Global Coverage",
    "ICBM": "Global Coverage",
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "7 days",
    "subject": "Geographic Distance Calculator",
    "abstract": "Calculate straight-line distances between any two points on Earth using accurate geographic formulas",
    "topic": "Geography, Mathematics, Navigation, Distance Calculation",
    "summary": "Free online tool for calculating 'as the crow flies' distances between cities and coordinates worldwide",
    "designed-for": "Students, Travelers, Researchers, Educators, General Public",
    "intended-audience": "Education, Travel, Research, General",
    "target-audience": "Global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
