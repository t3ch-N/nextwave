import React, { useState } from 'react';
import SEO from '../components/SEO';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-0">
      <SEO 
        title="Contact Us"
        description="Get in touch with Nextwave PR. Located at Riara Corporate Suites, Mararo Avenue, Nairobi. Call +254 729 971 313 or email pr@nextwave-pr.co.ke"
      />
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Let's Talk</h2>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">1st Floor, Riara Corporate Suites, Mararo Avenue, Nairobi</p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left max-w-lg mx-auto text-sm sm:text-base">
            <div>Email: pr@nextwave-pr.co.ke</div>
            <div>Phone: +254 729 971 313</div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-2xl shadow-xl">
            <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Your Name" className="w-full p-4 rounded-full text-gray-900" required />
            <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Your Email" className="w-full p-4 rounded-full text-gray-900" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="Your Phone (Optional)" className="w-full p-4 rounded-full text-gray-900" />
            <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Your Message" className="w-full p-4 rounded-2xl text-gray-900 h-32" required />
            <button type="submit" disabled={status === 'sending'} className="w-full bg-blue-600 text-white py-4 rounded-full font-medium hover:bg-blue-700 transition disabled:opacity-50">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-center text-green-600">Message sent successfully!</p>}
            {status === 'error' && <p className="text-center text-red-600">Error sending. Please email us directly.</p>}
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Let's Build Something Great</h2>
          <p className="text-xl mb-8 opacity-90 drop-shadow-lg">We're here to help transform your communications</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
