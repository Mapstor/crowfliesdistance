'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-cyan-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">Privacy Policy</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: January 11, 2024
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-4">
              At CrowFliesDistance.com ("we", "our", "us"), we respect your privacy and are committed to protecting 
              your personal information. This Privacy Policy explains how we collect, use, and safeguard information 
              when you use our website and distance calculation service.
            </p>
            <p>
              By using CrowFliesDistance.com, you agree to the collection and use of information in accordance with 
              this policy. We encourage you to read this Privacy Policy carefully and contact us if you have any questions.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Information You Provide</h3>
            <p className="mb-4">
              CrowFliesDistance.com is designed to work without requiring personal information. We do not require:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>User registration or accounts</li>
              <li>Email addresses (except when you contact us)</li>
              <li>Names or personal identifiers</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, and navigation paths</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution</li>
              <li><strong>Log Data:</strong> IP address (anonymized), access times, and referring website addresses</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Location Information</h3>
            <p className="mb-4">
              If you choose to use the GPS feature to set your current location:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your browser will ask for explicit permission before accessing your location</li>
              <li>Location data is processed only in your browser</li>
              <li>We do not store or transmit your GPS coordinates to our servers</li>
              <li>You can deny or revoke location permission at any time</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How We Use Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            
            <div className="space-y-4">
              <div className="bg-cyan-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">To Provide Our Service</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Calculate distances between locations you specify</li>
                  <li>• Display maps and geographic information</li>
                  <li>• Provide search functionality for cities</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">To Improve Our Service</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Analyze usage patterns to improve features</li>
                  <li>• Identify and fix technical issues</li>
                  <li>• Understand which features are most valuable</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">To Communicate (When You Contact Us)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Respond to your inquiries and feedback</li>
                  <li>• Provide technical support</li>
                  <li>• Send information you request</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Processing and Storage */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data Processing and Storage</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Client-Side Processing</h3>
            <p className="mb-4">
              Many of our core features work entirely in your browser:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Distance calculations are performed locally using JavaScript</li>
              <li>Map interactions are processed on your device</li>
              <li>GPS location (if used) is accessed only by your browser</li>
              <li>No personal data is transmitted for basic calculations</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics</h3>
            <p className="mb-4">
              We may use privacy-focused analytics tools to understand usage patterns. These tools:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use anonymized or aggregated data</li>
              <li>Do not track individual users across websites</li>
              <li>Help us improve the service without compromising privacy</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies and Similar Technologies</h2>
            <p className="mb-4">
              We use minimal cookies and similar technologies:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
              <p className="text-sm text-gray-700">
                Required for the website to function properly, such as maintaining your session and preferences 
                during your visit.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies (If Implemented)</h3>
              <p className="text-sm text-gray-700">
                Help us understand how visitors interact with our website by collecting anonymized information.
              </p>
            </div>

            <p>
              You can control cookies through your browser settings. Note that disabling cookies may affect the 
              functionality of our website.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data Sharing and Third Parties</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">We Do Not Sell Your Data</h3>
            <p className="mb-4">
              CrowFliesDistance.com does not sell, trade, or rent your personal information to third parties.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h3>
            <p className="mb-4">We may use third-party services for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Map Data:</strong> Mapping services to display interactive maps</li>
              <li><strong>Hosting:</strong> Web hosting and content delivery services</li>
              <li><strong>Analytics:</strong> Privacy-focused analytics services (if implemented)</li>
            </ul>
            <p>
              These services have their own privacy policies and may collect information as described in their 
              respective policies.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h3>
            <p>
              We may disclose information if required by law or in response to valid legal requests by public 
              authorities.
            </p>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Secure HTTPS connections for all data transmission</li>
              <li>Regular security updates and monitoring</li>
              <li>Minimal data collection principle</li>
              <li>Client-side processing where possible</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to protect your 
              information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="mb-4">Depending on your location, you may have certain rights regarding your information:</p>
            
            <div className="bg-cyan-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Your Rights Include:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Access:</strong> Request information about data we have collected</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your information</li>
                <li>• <strong>Opt-Out:</strong> Opt-out of analytics tracking</li>
                <li>• <strong>Do Not Track:</strong> We respect Do Not Track browser settings</li>
              </ul>
            </div>

            <p>
              To exercise these rights, please contact us at contact@crowfliesdistance.com
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="mb-4">
              CrowFliesDistance.com does not knowingly collect personal information from children under 13. Our 
              service is designed to be used without providing personal information, making it suitable for 
              educational use under appropriate supervision.
            </p>
            <p>
              If you believe we have collected information from a child under 13, please contact us immediately 
              and we will take appropriate steps to delete such information.
            </p>
          </section>

          {/* International Users */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">International Users</h2>
            <p className="mb-4">
              CrowFliesDistance.com is accessible globally. By using our service, you acknowledge that your 
              information may be processed in countries with different data protection laws than your own.
            </p>
            <p>
              We take appropriate measures to ensure your information is protected regardless of where it is 
              processed.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes are effective 
              when posted on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-white/80 rounded-lg p-4">
              <p className="font-medium text-gray-900 mb-2">Email:</p>
              <p className="text-cyan-600 mb-4">contact@crowfliesdistance.com</p>
              <p className="font-medium text-gray-900 mb-2">Website:</p>
              <p className="text-cyan-600">www.crowfliesdistance.com</p>
            </div>
          </section>

          {/* Summary Box */}
          <section className="bg-green-50 rounded-lg p-6 border border-green-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Privacy Summary</h2>
            <div className="text-sm text-gray-700 space-y-2">
              <p>✓ No registration or personal information required</p>
              <p>✓ Distance calculations happen in your browser</p>
              <p>✓ GPS location only with your permission</p>
              <p>✓ We don't sell or share your data</p>
              <p>✓ Minimal cookies for essential functionality</p>
              <p>✓ You can use our service anonymously</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}