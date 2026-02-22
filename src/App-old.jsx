import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const carouselImages = ['carousel-1.jpg', 'carousel-2.jpg', 'carousel-3.jpg', 'carousel-4.jpg', 'carousel-5.jpg'];

  const testimonials = [
    { quote: "Outstanding PR support for our Africa Climate Summit. Their strategic communication and media relations were instrumental in the event's success.", author: "AGRA", role: "Alliance for a Green Revolution in Africa" },
    { quote: "Professional event management and exceptional attention to detail. Nextwave PR delivered beyond our expectations.", author: "USAID", role: "United States Agency for International Development" },
    { quote: "Their innovative approach to digital communication helped us reach our target audience effectively. Highly recommended!", author: "Microsoft", role: "Technology Partner" },
    { quote: "Nextwave PR's expertise in crisis communication and media liaison proved invaluable during our critical campaigns.", author: "OXFAM", role: "International Development Organization" },
    { quote: "A reliable partner for all our corporate communications needs. Their team consistently delivers quality results.", author: "World Bank", role: "Global Financial Institution" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const teamMembers = [
    { name: "Syindu Musesya (Poshia)", role: "Project Lead / Managing Director", bio: "9+ years in communications, events & project management. Experienced in strategic planning and execution for international clients.", img: "/images/syindu-musesya.png" },
  ];

  const clients = ['agra', 'usaid', 'microsoft', 'oxfam', 'epra', 'ketraco', 'ccak', 'mercy-corps', 'undp', 'world-bank', 'kenya-government', 'act', 'afdb', 'care', 'fao', 'giz', 'ifc', 'unicef', 'wfp', 'who'];

  const partners = ['bbc', 'business-daily', 'citizen', 'cnbc', 'cnn', 'k24', 'kbc', 'ktn', 'nation', 'ntv', 'the-east-african', 'the-standard', 'the-star', 'tv-24'];

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form: Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:pr@nextwave-pr.co.ke?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center -ml-2">
            <img src="/images/logo.png" alt="Nextwave PR" className="h-8 sm:h-10" />
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-red-600 transition">About</a>
            <a href="#services" className="hover:text-red-600 transition">Services</a>
            <a href="#portfolio" className="hover:text-red-600 transition">Portfolio</a>
            <a href="#team" className="hover:text-red-600 transition">Team</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
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
    <a href="#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition">Let's Create Your Next Big Moment</a>
  </div>
</section>

      {/* ABOUT – From your upload */}
      <section id="about" className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <img src="/images/about-team.jpg" alt="Our team" className="rounded-2xl shadow-2xl" />
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">About Nextwave PR</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">We are a full-fledged, 360-degree corporate communications company established in 2017. Over the years, we have undertaken creative design origination, development and execution; strategic communication, multidisciplinary trainings, film productions, coverage, media relations, events management and public relations for local and international clients in the private, public and development sectors.</p>
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">We have positioned ourselves as an Integrated Marketing and Communications Agency that builds, strengthens and defends the reputation of our clients using innovative solutions that integrate the traditional media channels, new media channels, advertising and marketing.</p>
            {/* ... add the rest of the text from your upload */}
          </div>
        </div>
      </section>

      {/* IMAGE CAROUSEL */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              {carouselImages.map((image, i) => (
                <div key={i} className={`${i === currentSlide ? 'block' : 'hidden'} transition-all duration-500`}>
                  <img src={`/images/carousel/${image}`} alt={`Slide ${i + 1}`} className="w-full h-64 sm:h-96 md:h-[500px] object-cover" />
                </div>
              ))}
            </div>
            
            <button onClick={() => setCurrentSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <button onClick={() => setCurrentSlide((currentSlide + 1) % carouselImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${i === currentSlide ? 'bg-white' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS – Pages 10-12 */}
      <section className="py-12 sm:py-16 md:py-24 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">What Our Clients Say</h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 min-h-[300px] sm:min-h-[350px] flex flex-col justify-center">
              {testimonials.map((testimonial, i) => (
                <div key={i} className={`${i === currentTestimonial ? 'block' : 'hidden'} transition-all duration-500`}>
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic text-center mb-8 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="text-center">
                    <p className="font-bold text-xl sm:text-2xl text-red-600">{testimonial.author}</p>
                    <p className="text-gray-600 mt-2">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)} className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <button onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)} className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${i === currentTestimonial ? 'bg-red-600' : 'bg-red-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES – Page 13 */}
      <section id="services" className="py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4">Expertise</h3>
              <p>Deep knowledge in PR, media, and events across Africa.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4">Creative Solutions</h3>
              <p>Innovative strategies for brand reputation management.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4">Attention to Detail</h3>
              <p>Meticulous planning for flawless execution.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4">Client-Centric</h3>
              <p>Tailored approaches to meet unique client needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO – Pages 14, 21-40 */}
      <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">Showcasing excellence in corporate communications across Africa</p>
          </div>
          
          {/* Communications Support */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Communications Support</h3>
                <p className="text-gray-400">Multi-media production, photography & graphic design</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <img src="/images/comms-1.jpg" alt="Multi-media production" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">Multi-media Production</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <img src="/images/comms-2.jpg" alt="Photography" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">Professional Photography</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <img src="/images/comms-3.jpg" alt="Graphic Design" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">Graphic Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Events Management */}
          <div>
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
              <div className="group relative overflow-hidden rounded-xl aspect-video">
                <img src="/images/event-acs.jpg" alt="Africa Climate Summit" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">Africa Climate Summit</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl aspect-video">
                <img src="/images/event-mko.jpg" alt="Magical Kenya Open" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">Magical Kenya Open</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl aspect-video">
                <img src="/images/event-ccw.jpg" alt="Coffee & Chocolate Week" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">Coffee & Chocolate Week</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl aspect-video">
                <img src="/images/event-4.jpg" alt="Corporate Event" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">Corporate Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS CAROUSEL */}
      <section className="py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16">Our Clients</h2>
          <div className="relative">
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, i) => (
                <div key={i} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
                  <img src={`/images/clients/${client}.png`} alt={client} className="h-10 sm:h-12 md:h-16 grayscale hover:grayscale-0 transition opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM – Pages 16-20 */}
      <section id="team" className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">Meet the Team</h2>
          <div className="flex justify-center">
            {teamMembers.map((member, i) => (
              <div key={i} onClick={() => setSelectedTeam(member)} className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition max-w-xs sm:max-w-sm">
                <img src={member.img} alt={member.name} className="w-full h-64 sm:h-80 object-cover" />
                <div className="p-6">
                  <h4 className="font-semibold text-xl">{member.name}</h4>
                  <p className="text-red-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM MODAL */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6" onClick={() => setSelectedTeam(null)}>
          <div className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 md:p-10" onClick={e => e.stopPropagation()}>
            <img src={selectedTeam.img} alt="" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 sm:mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-center">{selectedTeam.name}</h3>
            <p className="text-red-600 text-center mb-6 sm:mb-8">{selectedTeam.role}</p>
            <p className="text-base sm:text-lg leading-relaxed">{selectedTeam.bio}</p>
            <button onClick={() => setSelectedTeam(null)} className="mt-10 mx-auto block text-sm uppercase tracking-widest">Close</button>
          </div>
        </div>
      )}

{/* PARTNERS CAROUSEL */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16">Our Media Partners</h2>
          <div className="relative">
            <div className="flex animate-scroll">
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
                  <img src={`/images/partners/${partner}.png`} alt={partner} className="h-8 sm:h-10 md:h-12 grayscale hover:grayscale-0 transition opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT – Page 49 */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Let's Talk</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12">1st Floor, Riara Corporate Suites, Mararo Avenue, Nairobi</p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left max-w-lg mx-auto text-sm sm:text-base">
            <div>Email: pr@nextwave-pr.co.ke</div>
            <div>Phone: +254 729 971 313</div>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 max-w-lg mx-auto space-y-6">
            <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Your Name" className="w-full p-4 rounded-full text-gray-900" required />
            <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Your Email" className="w-full p-4 rounded-full text-gray-900" required />
            <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Your Message" className="w-full p-4 rounded-2xl text-gray-900 h-32" required />
            <button type="submit" className="w-full bg-white text-red-600 py-4 rounded-full font-medium">Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>© 2025 Nextwave Public Relations Ltd. All rights reserved.</p>
        <p className="text-xs mt-2">Developed from the official 2025 Company Profile</p>
      </footer>
    </div>
  );
}

export default App;