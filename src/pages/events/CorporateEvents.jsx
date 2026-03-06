import React from 'react';
import SEO from '../../components/SEO';
import CTASection from '../../components/CTASection';
import Breadcrumbs from '../../components/Breadcrumbs';
import LazyImage from '../../components/LazyImage';

function CorporateEvents() {
  return (
    <div className="pt-0">
      <SEO 
        title="Corporate Events"
        description="Professional corporate event management services by Nextwave PR - from product launches to AGMs and team building activities."
        image="/images/corporateevents.png"
      />
      <Breadcrumbs />
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Corporate Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">Professional event management for businesses</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <LazyImage src="/images/corporateevents.png" alt="Corporate Events" className="w-full rounded-2xl shadow-2xl mb-12" />
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nextwave specializes in planning and executing corporate events that leave lasting impressions, from product launches to annual general meetings and team building activities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our comprehensive approach ensures every detail is meticulously planned and flawlessly executed.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Services</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Product launches and brand activations</li>
              <li>Corporate conferences and seminars</li>
              <li>Team building and corporate retreats</li>
              <li>Award ceremonies and galas</li>
              <li>Annual general meetings (AGMs)</li>
              <li>Trade shows and exhibitions</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection 
        title="Planning a Corporate Event?"
        description="Let's create an unforgettable experience"
        buttonText="Get Started"
      />
    </div>
  );
}

export default CorporateEvents;
