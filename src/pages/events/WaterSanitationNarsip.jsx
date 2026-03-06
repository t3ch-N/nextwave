import React from 'react';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';
import Breadcrumbs from '../../components/Breadcrumbs';

function WaterSanitationNarsip() {
  return (
    <div className="pt-0">
      <SEO 
        title="Water Sanitation NaRSIP II"
        description="Kenya's water sanitation crisis transformation through NaRSIP II - Nextwave PR's strategic communications support for this landmark infrastructure project."
        image="/images/athi/1758185939343.jpg"
      />
      <Breadcrumbs />
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Kenya's Water Sanitation Crisis</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">NaRSIP II - Transforming Nairobi's Sanitation Infrastructure</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <video className="w-full" controls preload="metadata" aria-label="Kenya's water sanitation crisis documentary">
              <source src="/videos/Kenya39;s water sanitation crisis in NaRSIP II  Poshia Musesya  (MPRSK) M.A. posted on the topic  LinkedIn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Poor sanitation has harmed public health, the environment, and the economy, costing Kenya an estimated 0.9% of its GDP. Only 51% of Nairobi is served by sewers.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-6">The Solution</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              NaRSIP II aims to increase citywide coverage of enhanced sanitation services from 48% to 55%, benefiting over 1.2 million residents.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Achievements</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Construction of 400 km of secondary reticulation sewers</li>
              <li>Installation of 20,000 last-mile household connections</li>
              <li>Rehabilitation of over 25 ablution blocks</li>
              <li>Expansion of Dandora Estate Wastewater Treatment Plant</li>
              <li>Community health education programs</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Nextwave's Role</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nextwave Public Relations provided strategic communications support, media relations, content production, and stakeholder engagement to ensure program visibility and community buy-in.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}

export default WaterSanitationNarsip;
