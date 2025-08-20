import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Cross Stitch Pattern Maker</title>
        <meta name="description" content="Our terms of service outline the rules and guidelines for using our cross stitch pattern maker tool." />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Terms Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Last updated: June 24, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Cross Stitch Pattern Maker, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            <p>
              The materials contained in this website are protected by applicable copyright and trademark law.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily use the Cross Stitch Pattern Maker for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Cross Stitch Pattern Maker at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>

            <h2>User Content</h2>
            <p>When you upload images or create patterns using our service:</p>
            <ul>
              <li>You retain all ownership rights to your content</li>
              <li>You grant us a non-exclusive license to use, store, and display your content for the purpose of providing our services</li>
              <li>You are responsible for ensuring you have the necessary rights to upload and use any images</li>
              <li>You agree not to upload content that is illegal, offensive, or violates the rights of others</li>
            </ul>
            <p>
              We reserve the right to remove any content that violates these terms or that we find objectionable for any reason, without prior notice.
            </p>

            <h2>Account Registration</h2>
            <p>
              To access certain features of the Cross Stitch Pattern Maker, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Some features of Cross Stitch Pattern Maker may require payment. By using these features, you agree to pay all fees and charges associated with your account on a timely basis and according to the fees schedule and terms in place at the time of your use.
            </p>
            <p>
              All payments are non-refundable except as expressly set forth in our refund policy or as required by applicable law.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on Cross Stitch Pattern Maker are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, Cross Stitch Pattern Maker does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall Cross Stitch Pattern Maker or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            <p>
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>

            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on Cross Stitch Pattern Maker could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2>Links</h2>
            <p>
              Cross Stitch Pattern Maker has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2>Modifications</h2>
            <p>
              We may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: terms@crossstitchpatternmaker.com</li>
              <li>Address: 123 Stitch Street, Craftville, CR 12345, United States</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
