import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services';
import CaseStudies from './pages/CaseStudies';
import Portfolio from './pages/portfolio';
import Contact from './pages/Contact';
import AfricaClimateSummit from './pages/events/AfricaClimateSummit';
import MagicalKenyaOpen from './pages/events/MagicalKenyaOpen';
import WashCampaign from './pages/events/WashCampaign';
import WaterSanitationNarsip from './pages/events/WaterSanitationNarsip';
import CorporateEvents from './pages/events/CorporateEvents';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center -ml-2">
            <img src="/images/nw-secondary-logo-no-bg.png" alt="Nextwave PR" className="h-8 sm:h-10" />
          </Link>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link to="/case-studies" className="hover:text-blue-600 transition">Case Studies</Link>
            <Link to="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/africa-climate-summit" element={<AfricaClimateSummit />} />
        <Route path="/events/magical-kenya-open" element={<MagicalKenyaOpen />} />
        <Route path="/events/wash-campaign" element={<WashCampaign />} />
        <Route path="/events/water-sanitation-narsip" element={<WaterSanitationNarsip />} />
        <Route path="/events/corporate-events" element={<CorporateEvents />} />
      </Routes>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>© 2025 Nextwave Public Relations Ltd. All rights reserved.</p>
        <p className="text-xs mt-2">Developed from the official 2025 Company Profile</p>
      </footer>
    </div>
  );
}

export default App;
