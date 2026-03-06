import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function CTA({ title, description, buttonText, buttonLink, variant = 'blue' }) {
  const bgColor = variant === 'blue' ? 'bg-blue-600' : 'bg-red-600';
  
  return (
    <section className={`py-16 ${bgColor} text-white`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
        <p className="text-lg md:text-xl mb-8 opacity-90">{description}</p>
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          {buttonText}
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}

export default CTA;
