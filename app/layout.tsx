import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  keywords: "distance calculator, as the crow flies, straight line distance, haversine formula, city distance, geographic distance",
  authors: [{ name: "CrowFliesDistance" }],
  openGraph: {
    title: "Crow Flies Distance Calculator",
    description: "Calculate straight-line distances between any two points on Earth",
    url: "https://crowfliesdistance.com",
    siteName: "CrowFliesDistance",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Crow Flies Distance Calculator",
    description: "Calculate straight-line distances between any two points on Earth",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
