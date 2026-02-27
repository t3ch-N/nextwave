import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/How water reaches your taps in Nairobi  NextWave Public Relations LTD posted on the topic  LinkedIn.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <button
          onClick={toggleMute}
          className="absolute top-24 right-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        <div className="relative text-center text-white px-4 sm:px-6 max-w-4xl z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">360° CORPORATE COMMUNICATIONS</h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10">Established 2017 • Nairobi, Kenya • Delivering impact across Africa</p>
          <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition">Let's Create Your Next Big Moment</a>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Documentary</h2>
            <p className="text-lg text-gray-600">Watch our 30-minute documentary showcasing our work and impact</p>
          </div>
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full"
              src="/videos/1st 30min documentary.mp4"
              controls
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
