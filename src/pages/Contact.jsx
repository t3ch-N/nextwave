import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form: Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:pr@nextwave-pr.co.ke?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20">
      <section className="py-12 sm:py-16 md:py-24 bg-red-600 text-white">
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
    </div>
  );
}

export default Contact;
