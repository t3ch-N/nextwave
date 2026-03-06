import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Download, ZoomIn, ZoomOut, Share2, Filter } from 'lucide-react';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

function CaseStudies() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const caseStudies = [
    { src: '/images/Case Studies/Screenshot 2026-03-06 024753.png', title: 'Strategic Communication Campaign', category: 'Communication', description: 'Comprehensive strategic communication planning and execution' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 025102.png', title: 'Media Relations Success', category: 'Media', description: 'Building strong media partnerships and coverage' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 025239.png', title: 'Event Management Excellence', category: 'Events', description: 'End-to-end event planning and coordination' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 025445.png', title: 'Crisis Management Response', category: 'Crisis', description: 'Rapid response and reputation protection' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 025530.png', title: 'Digital Marketing Campaign', category: 'Digital', description: 'Integrated digital strategy and execution' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 025624.png', title: 'Public Health Initiative', category: 'Health', description: 'Community engagement and awareness campaign' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 025709.png', title: 'Corporate Communications', category: 'Corporate', description: 'Internal and external communications strategy' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 025747.png', title: 'Brand Activation', category: 'Branding', description: 'Brand positioning and market activation' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 025949.png', title: 'Stakeholder Engagement', category: 'Engagement', description: 'Multi-stakeholder communication and coordination' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030029.png', title: 'Film Production Project', category: 'Production', description: 'Documentary and corporate film production' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030107.png', title: 'Training & Capacity Building', category: 'Training', description: 'Professional development and skills enhancement' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030144.png', title: 'Government Relations', category: 'Government', description: 'Public sector communication and liaison' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030225.png', title: 'NGO Partnership', category: 'NGO', description: 'Development sector communications support' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030310.png', title: 'Product Launch', category: 'Events', description: 'Strategic product launch and media coverage' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030417.png', title: 'Social Media Campaign', category: 'Digital', description: 'Viral social media strategy and engagement' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030449.png', title: 'Press Conference Management', category: 'Media', description: 'High-profile press event coordination' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030550.png', title: 'Content Creation', category: 'Content', description: 'Multi-platform content development' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030625.png', title: 'Reputation Management', category: 'Crisis', description: 'Brand reputation recovery and enhancement' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 030655.png', title: 'Annual Report Production', category: 'Corporate', description: 'Comprehensive annual reporting and design' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 031705.png', title: 'Infrastructure Project Communications', category: 'Infrastructure', description: 'Large-scale infrastructure project PR' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 031749.png', title: 'Environmental Campaign', category: 'Environment', description: 'Environmental awareness and advocacy' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 031833.png', title: 'Technology Launch', category: 'Technology', description: 'Tech product launch and positioning' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 031922.png', title: 'Healthcare Communications', category: 'Health', description: 'Healthcare sector strategic communications' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032030.png', title: 'Financial Services PR', category: 'Finance', description: 'Financial sector communications and compliance' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032106.png', title: 'Education Sector Campaign', category: 'Education', description: 'Educational institution communications' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032158.png', title: 'Tourism Promotion', category: 'Tourism', description: 'Destination marketing and tourism PR' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032256.png', title: 'Sports Event Management', category: 'Sports', description: 'Major sporting event communications' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032440.png', title: 'Agriculture Initiative', category: 'Agriculture', description: 'Agricultural sector communications support' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032625.png', title: 'Energy Sector Communications', category: 'Energy', description: 'Energy and utilities sector PR' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032721.png', title: 'Real Estate Marketing', category: 'RealEstate', description: 'Property development and marketing' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032817.png', title: 'Manufacturing PR', category: 'Manufacturing', description: 'Industrial sector communications' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032903.png', title: 'Retail Brand Campaign', category: 'Retail', description: 'Retail sector brand building and promotion' },
    { src: '/images/Case Studies/Screenshot 2026-03-06 032945.png', title: 'Hospitality Communications', category: 'Hospitality', description: 'Hotel and hospitality sector PR' }
  ];

  const categories = ['all', ...new Set(caseStudies.map(cs => cs.category))];
  
  const filteredStudies = caseStudies.filter(cs => {
    const matchesFilter = filter === 'all' || cs.category === filter;
    const matchesSearch = cs.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cs.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      if (window.gtag) {
        window.gtag('event', 'view_case_study', {
          case_study_title: caseStudies.find(cs => cs.src === selectedImage)?.title
        });
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const nextImage = () => {
    const currentIndex = caseStudies.findIndex(cs => cs.src === selectedImage);
    setSelectedImage(caseStudies[(currentIndex + 1) % caseStudies.length].src);
    setZoom(1);
  };

  const prevImage = () => {
    const currentIndex = caseStudies.findIndex(cs => cs.src === selectedImage);
    setSelectedImage(caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length].src);
    setZoom(1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextImage();
    if (touchStartX.current - touchEndX.current < -50) prevImage();
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = caseStudies.find(cs => cs.src === selectedImage)?.title || 'case-study';
    link.click();
  };

  const shareImage = async () => {
    const study = caseStudies.find(cs => cs.src === selectedImage);
    if (navigator.share) {
      try {
        await navigator.share({
          title: study?.title,
          text: study?.description,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  const currentIndex = caseStudies.findIndex(cs => cs.src === selectedImage);
  const currentStudy = caseStudies[currentIndex];

  return (
    <div className="pt-0">
      <SEO 
        title="Case Studies"
        description="Explore Nextwave PR's successful case studies and proven results in corporate communications, media relations, and events management."
      />
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Case Studies</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">Real-world impact and proven results</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 bg-white"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                    filter === cat 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Filter size={16} className="inline mr-2" />
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition group"
                onClick={() => setSelectedImage(study.src)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={study.src} 
                    alt={study.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <div className="text-white">
                      <span className="text-xs bg-blue-600 px-2 py-1 rounded">{study.category}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-600">{study.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No case studies found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Case study viewer"
        >
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <div className="text-white bg-black/50 px-4 py-2 rounded-full">
              <span className="font-bold">{currentIndex + 1}</span> / {caseStudies.length}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(0.5, z - 0.25)); }}
                className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
                aria-label="Zoom out"
              >
                <ZoomOut size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(3, z + 0.25)); }}
                className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
                aria-label="Zoom in"
              >
                <ZoomIn size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); downloadImage(); }}
                className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
                aria-label="Download"
              >
                <Download size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); shareImage(); }}
                className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
                aria-label="Share"
              >
                <Share2 size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-full max-h-full p-4 overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt={currentStudy?.title}
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
              className="max-w-full h-auto"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-center">
            <div className="bg-black/70 text-white px-6 py-3 rounded-lg inline-block">
              <h3 className="font-bold text-lg">{currentStudy?.title}</h3>
              <p className="text-sm opacity-90">{currentStudy?.description}</p>
            </div>
          </div>
        </div>
      )}

      <CTASection 
        title="Ready to Work Together?"
        description="Let's discuss how we can help achieve your goals"
        buttonText="Get in Touch"
      />
    </div>
  );
}

export default CaseStudies;
