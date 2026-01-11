'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-cyan-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">Terms of Service</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: January 11, 2024
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using CrowFliesDistance.com ("the Website", "the Service"), you agree to be bound by 
              these Terms of Service ("Terms"). If you disagree with any part of these terms, you do not have 
              permission to access the Service.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Service. The Service is 
              offered subject to your acceptance without modification of all of the terms and conditions contained 
              herein.
            </p>
          </section>

          {/* Use of Service */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Use of Our Service</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Permitted Use</h3>
            <p className="mb-4">
              CrowFliesDistance.com provides a free distance calculation service for personal, educational, and 
              non-commercial use. You may:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the calculator to find distances between locations</li>
              <li>Access and read our educational blog content</li>
              <li>Share links to our website with others</li>
              <li>Use the information for personal planning and education</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Use</h3>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service for any unlawful purpose or in violation of any laws</li>
              <li>Attempt to interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Use automated systems or software to extract data from the Service without permission</li>
              <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without express written permission</li>
              <li>Misrepresent the source, identity, or content of information transmitted via the Service</li>
            </ul>
          </section>

          {/* Accuracy and Limitations */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Accuracy of Information and Limitations</h2>
            <p className="mb-4">
              While we strive to provide accurate distance calculations and information, CrowFliesDistance.com:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Calculates straight-line ("as the crow flies") distances which do not represent actual travel distances</li>
              <li>Uses approximations based on a spherical Earth model</li>
              <li>May contain errors in city coordinates or data</li>
              <li>Should not be used as the sole source for critical decision-making</li>
            </ul>
            <p>
              The Service is provided for informational and educational purposes only. Actual travel distances, 
              times, and routes will vary significantly from the straight-line calculations provided.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive 
              property of CrowFliesDistance.com. The Service is protected by copyright, trademark, and other laws. 
              Our trademarks and trade dress may not be used in connection with any product or service without our 
              prior written consent.
            </p>
            <p>
              Educational content, blog posts, and other materials on the Website are protected by copyright. You 
              may share links to our content but may not reproduce substantial portions without attribution and 
              permission.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
            <p className="mb-4">By using our Service, you acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You will use the Service only for lawful purposes</li>
              <li>You are responsible for your use of the information provided</li>
              <li>You will not rely solely on our calculations for critical decisions</li>
              <li>You will verify important distance information through additional sources when necessary</li>
              <li>You understand that GPS location access is optional and controlled by you</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>
            <p className="mb-4">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. CROWFLIESDISTANCE.COM MAKES NO 
              WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mb-4">We do not warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from the Service will be accurate or reliable</li>
              <li>The quality of the Service will meet your expectations</li>
              <li>Any errors in the Service will be corrected</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL CROWFLIESDISTANCE.COM, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR 
              AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
              INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, 
              RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
            <p className="mb-4">
              Our Service may contain links to third-party websites or services that are not owned or controlled 
              by CrowFliesDistance.com. We have no control over and assume no responsibility for the content, 
              privacy policies, or practices of any third-party websites or services.
            </p>
            <p>
              The Service uses mapping data and services from third-party providers. These services are subject 
              to their own terms and conditions.
            </p>
          </section>

          {/* Modifications */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Modifications to Service and Terms</h2>
            <p className="mb-4">
              We reserve the right to modify or discontinue the Service at any time without notice. We shall not 
              be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
            </p>
            <p>
              We may revise these Terms at any time. By continuing to use the Service after revisions become 
              effective, you agree to be bound by the revised Terms.
            </p>
          </section>

          {/* Privacy */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Privacy</h2>
            <p>
              Your use of our Service is also governed by our Privacy Policy. Please review our 
              {" "}<Link href="/privacy-policy" className="text-cyan-600 hover:text-cyan-700">Privacy Policy</Link>, 
              which also governs the Website and informs users of our data collection practices.
            </p>
          </section>

          {/* Termination */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which 
              CrowFliesDistance.com operates, without regard to its conflict of law provisions. Your use of the 
              Service may also be subject to other local, state, national, or international laws.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-white/80 rounded-lg p-4">
              <p className="font-medium text-gray-900">Email:</p>
              <p className="text-cyan-600">contact@crowfliesdistance.com</p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="bg-blue-50 rounded-lg p-6 border border-blue-100 text-center">
            <p className="text-gray-700">
              By using CrowFliesDistance.com, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}