import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AfricaClimateSummit from './pages/events/AfricaClimateSummit';
import MagicalKenyaOpen from './pages/events/MagicalKenyaOpen';
import WashCampaign from './pages/events/WashCampaign';
import WaterSanitationNarsip from './pages/events/WaterSanitationNarsip';
import CorporateEvents from './pages/events/CorporateEvents';
import SkipToContent from './components/SkipToContent';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import Analytics from './components/Analytics';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';
import Search from './components/Search';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <ErrorBoundary>
      <div className="bg-white text-gray-900 transition-colors">
        <SkipToContent />
        <Analytics />
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b" ref={mobileMenuRef} role="navigation" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center -ml-2" aria-label="Nextwave PR Home">
              <img src="/images/nw-secondary-logo-no-bg.png" alt="Nextwave PR Logo" className="h-8 sm:h-10" />
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link to="/about" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1">About</Link>
              <Link to="/services" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1">Services</Link>
              <Link to="/case-studies" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1">Case Studies</Link>
              <Link to="/portfolio" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1">Portfolio</Link>
              <Link to="/blog" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1">Blog</Link>
              <Link to="/contact" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1">Contact</Link>
              <Search />
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-600 rounded p-1"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col gap-4 px-4 py-3 border-t">
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="focus:outline-none focus:text-blue-600">About</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="focus:outline-none focus:text-blue-600">Services</Link>
              <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} className="focus:outline-none focus:text-blue-600">Case Studies</Link>
              <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="focus:outline-none focus:text-blue-600">Portfolio</Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="focus:outline-none focus:text-blue-600">Blog</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="focus:outline-none focus:text-blue-600">Contact</Link>
            </div>
          )}
        </nav>

        <PageTransition>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events/africa-climate-summit" element={<AfricaClimateSummit />} />
              <Route path="/events/magical-kenya-open" element={<MagicalKenyaOpen />} />
              <Route path="/events/wash-campaign" element={<WashCampaign />} />
              <Route path="/events/water-sanitation-narsip" element={<WaterSanitationNarsip />} />
              <Route path="/events/corporate-events" element={<CorporateEvents />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </PageTransition>

        <footer className="bg-gray-900 text-white py-12" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">Nextwave PR</h3>
                <p className="text-sm text-gray-400">360° Corporate Communications</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <Link to="/about" className="text-gray-400 hover:text-white transition">About</Link>
                  <Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link>
                  <Link to="/portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>Riara Corporate Suites</p>
                  <p>Mararo Avenue, Nairobi</p>
                  <p>+254 729 971 313</p>
                  <p>pr@nextwave-pr.co.ke</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Nextwave Public Relations Ltd. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
        
        <BackToTop />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
