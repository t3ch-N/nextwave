import React from 'react';

function Home() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-collage.jpg"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center text-white px-4 sm:px-6 max-w-4xl z-10">
        <img src="/images/logo-white.png" alt="Nextwave" className="mx-auto mb-6 sm:mb-8 h-16 sm:h-20 md:h-24" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">360° CORPORATE COMMUNICATIONS</h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10">Established 2017 • Nairobi, Kenya • Delivering impact across Africa</p>
        <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition">Let's Create Your Next Big Moment</a>
      </div>
    </section>
  );
}

export default Home;
