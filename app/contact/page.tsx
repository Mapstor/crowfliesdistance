'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

export default function ContactPage() {
  return (
    <>
      <StructuredData type="ContactPage" />
      <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-cyan-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">Contact</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700">
            We'd love to hear from you
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Contact Information */}
          <section className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Thank you for visiting CrowFliesDistance.com! We value your feedback and are always looking 
                for ways to improve our distance calculator and educational resources.
              </p>

              <p>
                Whether you have suggestions for new features, feedback about your experience, questions about 
                distance calculations, or have discovered an issue that needs attention, we want to hear from you. 
                Your input helps us make this tool better for everyone.
              </p>
            </div>

            <div className="mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contact@crowfliesdistance.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-medium text-gray-900">Website</p>
                    <p className="text-gray-600">www.crowfliesdistance.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What to Contact About */}
          <section className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">We Welcome Your Messages About</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">💡 Suggestions & Ideas</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• New features you'd like to see</li>
                  <li>• Additional cities or locations to include</li>
                  <li>• Educational content topics</li>
                  <li>• User interface improvements</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">📝 Feedback & Reviews</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Your experience using the calculator</li>
                  <li>• How the tool helped you</li>
                  <li>• Accuracy of calculations</li>
                  <li>• Content quality and clarity</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">🐛 Technical Issues</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Bugs or errors you've encountered</li>
                  <li>• Display issues on your device</li>
                  <li>• Missing or incorrect city data</li>
                  <li>• Map functionality problems</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">🤝 Partnerships</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Educational collaborations</li>
                  <li>• API or data partnerships</li>
                  <li>• Content contributions</li>
                  <li>• Business inquiries</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Response Time */}
          <section className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="font-semibold text-gray-900 mb-3">Response Time</h3>
            <p className="text-gray-700">
              We strive to respond to all inquiries within 48-72 hours. While we read every message, please 
              understand that we may not be able to implement every suggestion immediately. However, all 
              feedback is valuable and helps shape the future development of CrowFliesDistance.com.
            </p>
          </section>

          {/* Quick Links */}
          <section className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Before You Contact Us</h2>
            <p className="text-gray-600 mb-6">
              You might find answers to your questions in these resources:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg hover:bg-cyan-200 transition-colors">
                Try the Calculator
              </Link>
              <Link href="/blog" className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg hover:bg-cyan-200 transition-colors">
                Read Our Blog
              </Link>
              <Link href="/about" className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg hover:bg-cyan-200 transition-colors">
                About Us
              </Link>
              <Link href="/#faq" className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg hover:bg-cyan-200 transition-colors">
                FAQ Section
              </Link>
            </div>
          </section>

          {/* Thank You */}
          <section className="text-center py-8">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Thank You for Your Interest</h2>
              <p className="text-cyan-50">
                Your engagement helps make CrowFliesDistance.com a better resource for everyone interested 
                in understanding our world's geography and distances.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
    </>
  );
}