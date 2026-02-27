import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function AfricaClimateSummit() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/images/Africa-Climate-Summit/230907122010-president-of-kenya-william-ruto-africa-climate-summit-2023.jpg',
    '/images/Africa-Climate-Summit/4OFU2CPS2VJALPTXQD2ZPUVCPI.avif',
    '/images/Africa-Climate-Summit/a1-2023_09_06-acs-photo1-a1.jpg',
    '/images/Africa-Climate-Summit/Africa-Climate-Summit-2025-2.jpg',
    '/images/Africa-Climate-Summit/rao4-1024x576.jpg',
    '/images/Africa-Climate-Summit/whatsapp_image_2025-09-10_at_10.29.50_1.jpeg'
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/Frame 4.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Africa Climate Summit</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">A landmark event addressing climate change across Africa</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img src={images[currentSlide]} alt={`Africa Climate Summit ${currentSlide + 1}`} className="w-full h-[500px] object-cover" />
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition">
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition ${idx === currentSlide ? 'bg-white' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Africa Climate Summit brought together world leaders, policymakers, and climate experts to address the pressing challenges of climate change across the African continent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nextwave Public Relations played a crucial role in managing communications, media relations, and event coordination for this historic summit.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Role</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Strategic communication planning and execution</li>
              <li>Media relations and press conference coordination</li>
              <li>Multi-media production and documentation</li>
              <li>Stakeholder engagement and management</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AfricaClimateSummit;
