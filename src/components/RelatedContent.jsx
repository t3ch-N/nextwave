import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function RelatedContent({ items, title = "Related Projects" }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl font-bold mb-8">{title}</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              )}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedContent;
