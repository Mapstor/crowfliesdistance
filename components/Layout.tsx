import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Header with subtle gradient */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2 group">
                <div className="flex-shrink-0">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    className="transition-transform group-hover:scale-110"
                  >
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#0891b2', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'#2563eb', stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                    <rect width="32" height="32" rx="4" fill="url(#logoGradient)"/>
                    <line x1="8" y1="16" x2="24" y2="16" stroke="white" strokeWidth="1.5" strokeDasharray="2,1" opacity="0.8"/>
                    <circle cx="8" cy="16" r="4" fill="white"/>
                    <text x="8" y="19" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#0891b2">A</text>
                    <circle cx="24" cy="16" r="4" fill="white"/>
                    <text x="24" y="19" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#2563eb">B</text>
                  </svg>
                </div>
                <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  CrowFliesDistance
                </h1>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-cyan-600 text-sm transition-colors">Home</a>
              <a href="/blog" className="text-gray-600 hover:text-cyan-600 text-sm transition-colors">Blog</a>
              <a href="/faq" className="text-gray-600 hover:text-cyan-600 text-sm transition-colors">FAQ</a>
              <a href="/about" className="text-gray-600 hover:text-cyan-600 text-sm transition-colors">About</a>
              <a href="/contact" className="text-gray-600 hover:text-cyan-600 text-sm transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer with gradient accent */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2024 <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">CrowFliesDistance</span>. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-cyan-600 transition-colors">Privacy</a>
              <a href="/terms-of-service" className="text-sm text-gray-500 hover:text-cyan-600 transition-colors">Terms</a>
              <a href="/contact" className="text-sm text-gray-500 hover:text-cyan-600 transition-colors">Contact</a>
              <a href="/about" className="text-sm text-gray-500 hover:text-cyan-600 transition-colors">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}