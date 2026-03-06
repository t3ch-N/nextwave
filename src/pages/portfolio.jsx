import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const commImages = [
    { src: '/images/comm/comm1.png', alt: 'Event Coverage' },
    { src: '/images/comm/comm2.png', alt: 'Professional Photography' },
    { src: '/images/comm/comm3.png', alt: 'Event Documentation' },
    { src: '/images/comm/comm4.png', alt: 'Conference Coverage' },
    { src: '/images/media1.png', alt: 'Media Production' },
    { src: '/images/media2.png', alt: 'Event Photography' },
    { src: '/images/media3.png', alt: 'Professional Coverage' },
    { src: '/images/media4.png', alt: 'Event Management' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % commImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [commImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % commImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + commImages.length) % commImages.length);

  return (
    <div className="pt-0">
      <SEO 
        title="Portfolio"
        description="Explore Nextwave PR's portfolio showcasing excellence in corporate communications, events management, and multimedia production across Africa."
      />
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Our Portfolio</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">Showcasing excellence in corporate communications across Africa</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Communications Support</h3>
                <p className="text-gray-400">Multi-media production, photography & graphic design</p>
              </div>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-video">
                  {commImages.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                        i === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Events Management</h3>
                <p className="text-gray-400">World-class events across Africa</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              <Link to="/events/africa-climate-summit" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/Africa-Climate-Summit-2025-2.webp" alt="Africa Climate Summit" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-bold">Africa Climate Summit</p>
                </div>
              </Link>
              <Link to="/events/magical-kenya-open" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/magicalkenyaopen.webp" alt="Magical Kenya Open" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-bold">Magical Kenya Open</p>
                </div>
              </Link>
              <Link to="/events/wash-campaign" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/athi/1758185938701.jpg" alt="WASH Campaign Roadshow" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-bold">WASH Campaign Roadshow</p>
                </div>
              </Link>
              <Link to="/events/water-sanitation-narsip" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/athi/1758185939343.jpg" alt="Water Sanitation NaRSIP II" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-bold">Water Sanitation NaRSIP II</p>
                </div>
              </Link>
              <Link to="/events/corporate-events" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/corporateevents.png" alt="Corporate Event" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-bold">Corporate Events</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Start Your Project?"
        description="Let's create something amazing together"
        buttonText="Get in Touch"
      />
    </div>
  );
}

export default Portfolio;
