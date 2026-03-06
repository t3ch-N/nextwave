import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "John Kamau",
      role: "CEO, Tech Innovations Kenya",
      text: "Nextwave PR transformed our brand visibility. Their strategic approach to media relations delivered exceptional results.",
      image: "/images/staff-1.png"
    },
    {
      name: "Sarah Wanjiku",
      role: "Director, Green Energy Solutions",
      text: "Professional, responsive, and results-driven. Nextwave helped us navigate a complex crisis with expertise and care.",
      image: "/images/staff-2.png"
    },
    {
      name: "David Omondi",
      role: "Marketing Manager, Retail Corp",
      text: "Their event management skills are unmatched. Our product launch exceeded all expectations thanks to Nextwave.",
      image: "/images/staff.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by leading organizations across Kenya</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
