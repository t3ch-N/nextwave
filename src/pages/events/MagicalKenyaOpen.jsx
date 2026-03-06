import React from 'react';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';
import Breadcrumbs from '../../components/Breadcrumbs';
import LazyImage from '../../components/LazyImage';

function MagicalKenyaOpen() {
  return (
    <div className="pt-0">
      <SEO 
        title="Magical Kenya Open"
        description="Nextwave PR's communications and media relations for the Magical Kenya Open, Africa's premier golf tournament on the DP World Tour."
        image="/images/magicalkenyaopen.webp"
      />
      <Breadcrumbs />
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Magical Kenya Open</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">Africa's Premier Golf Tournament on the DP World Tour</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <LazyImage src="/images/magicalkenyaopen.webp" alt="Magical Kenya Open" className="w-full rounded-2xl shadow-2xl mb-12" />
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About the Tournament</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Magical Kenya Open is Kenya's flagship professional golf tournament and a prestigious event on the DP World Tour (formerly European Tour). Held annually at the stunning Muthaiga Golf Club in Nairobi, the tournament attracts world-class golfers from across the globe and serves as a powerful platform to showcase Kenya's tourism potential to an international audience.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Tournament Highlights</h3>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Part of the prestigious DP World Tour calendar</li>
                <li>Hosted at the historic Muthaiga Golf Club, Nairobi</li>
                <li>Attracts top international professional golfers</li>
                <li>Significant prize money and DP World Tour ranking points</li>
                <li>Broadcast to millions of viewers worldwide</li>
                <li>Key platform for promoting Kenya's tourism brand</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Nextwave's Role</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Strategic event communications and PR planning</li>
              <li>International and local media coordination</li>
              <li>Press conference organization and management</li>
              <li>Professional photography and videography services</li>
              <li>Social media content creation and management</li>
              <li>Stakeholder engagement and VIP hospitality coordination</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection 
        title="Need Event Communications Support?"
        description="Let's make your event a media success"
        buttonText="Get in Touch"
      />
    </div>
  );
}

export default MagicalKenyaOpen;
