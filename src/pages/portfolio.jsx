import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const commImages = [
    { src: '/images/IACCTW - GLEE HOTEL EDITED/DSC_0118.jpg', alt: 'Event Coverage' },
    { src: '/images/IACCTW - GLEE HOTEL EDITED/DSC_0119.jpg', alt: 'Professional Photography' },
    { src: '/images/IACCTW - GLEE HOTEL EDITED/DSC_0120.jpg', alt: 'Event Documentation' },
    { src: '/images/IACCTW - GLEE HOTEL EDITED/DSC_0121.jpg', alt: 'Conference Coverage' },
    { src: '/images/IACCTW - GLEE HOTEL EDITED/DSC_0124.jpg', alt: 'Media Production' },
    { src: '/images/IACCTW - GLEE HOTEL EDITED/DSC_0127.jpg', alt: 'Event Photography' },
    { src: '/images/IACCTW - GLEE HOTEL EDITED/DSC_0132.jpg', alt: 'Professional Coverage' },
    { src: '/images/IACCTW - GLEE HOTEL EDITED/DSC_0136.jpg', alt: 'Event Management' }
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
    <div className="pt-20">
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">Showcasing excellence in corporate communications across Africa</p>
          </div>
          
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
                  <p className="text-white text-sm font-semibold">Africa Climate Summit</p>
                </div>
              </Link>
              <Link to="/events/magical-kenya-open" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/magicalkenyaopen.webp" alt="Magical Kenya Open" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">Magical Kenya Open</p>
                </div>
              </Link>
              <Link to="/events/wash-campaign" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/athi/1758185938701.jpg" alt="WASH Campaign Roadshow" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">WASH Campaign Roadshow</p>
                </div>
              </Link>
              <Link to="/events/water-sanitation-narsip" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/athi/1758185939343.jpg" alt="Water Sanitation NaRSIP II" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">Water Sanitation NaRSIP II</p>
                </div>
              </Link>
              <Link to="/events/corporate-events" className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer">
                <img src="/images/corporateevents.png" alt="Corporate Event" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">Corporate Events</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
