import React from 'react';
import SEO from '../components/SEO';

function Terms() {
  return (
    <div className="pt-0">
      <SEO title="Terms of Service" description="Nextwave PR Terms of Service - Terms and conditions for using our website and services." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
          <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
          <p className="mb-4">Permission is granted to temporarily download one copy of the materials on Nextwave PR's website for personal, non-commercial transitory viewing only.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
          <p className="mb-4">The materials on Nextwave PR's website are provided on an 'as is' basis. Nextwave PR makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <p className="mb-4">For questions about these Terms, contact us at pr@nextwave-pr.co.ke</p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
