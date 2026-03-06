import React, { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';
import Breadcrumbs from '../../components/Breadcrumbs';
import LazyImage from '../../components/LazyImage';

function WashCampaign() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    '/images/athi/1758185938701.jpg',
    '/images/athi/1758185939317.jpg',
    '/images/athi/1758185939343.jpg',
    '/images/athi/1758185939541.jpg',
    '/images/athi/1758185939707.jpg',
    '/images/athi/1758185939728.jpg',
    '/images/athi/1758185939825.jpg',
    '/images/athi/1758185939843.jpg',
    '/images/athi/1758185939859.jpg',
    '/images/athi/1758185939882.jpg',
    '/images/athi/1758185939883.jpg',
    '/images/athi/1758185940066.jpg',
    '/images/athi/1758185942075.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-0">
      <SEO 
        title="WASH Campaign Roadshow"
        description="Nextwave PR's communications support for the Water, Sanitation and Hygiene Campaign Roadshow under NaRSIP II, reaching over 1.2 million Nairobi residents."
        image="/images/athi/1758185938701.jpg"
      />
      <Breadcrumbs />
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">WASH Campaign Roadshow</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">Nairobi Rivers Basin Rehabilitation & Restoration Program</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-video">
                {images.map((img, i) => (
                  <LazyImage
                    key={i}
                    src={img}
                    alt={`WASH Campaign ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      i === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Official Flag-Off of the WASH Campaign Roadshow</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Water, Sanitation and Hygiene (WASH) Campaign Roadshow is a transformative initiative under the Nairobi Rivers Basin Rehabilitation and Restoration Program Phase II (NaRSIP II), reaching over 1.2 million residents.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Achievements</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Construction and rehabilitation of over 25 ablution blocks</li>
              <li>Installation of 10 pilot Fresh Life toilets in Mukuru</li>
              <li>Development of 35km of simplified sewers with 700+ household connections</li>
              <li>Provision of 150 on-plot pour flush toilets</li>
              <li>Hygiene education and sanitation awareness training</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Nextwave's Role</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nextwave Public Relations provided comprehensive communications support including media relations, event coordination, photography, and stakeholder engagement.
            </p>
          </div>
        </div>
      </section>
      <CTASection 
        title="Need Public Health Campaign Support?"
        description="Let's amplify your community impact"
        buttonText="Contact Us"
      />
    </div>
  );
}

export default WashCampaign;
