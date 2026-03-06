import React from 'react';
import SEO from '../components/SEO';

function Privacy() {
  return (
    <div className="pt-0">
      <SEO title="Privacy Policy" description="Nextwave PR Privacy Policy - Learn how we collect, use, and protect your personal information." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, including name, email address, phone number, and any messages you send through our contact form.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to respond to your inquiries, provide our services, and communicate with you about our offerings.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
          <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">If you have questions about this Privacy Policy, please contact us at pr@nextwave-pr.co.ke</p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
