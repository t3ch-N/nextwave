import React from 'react';

const CTASection = ({ 
  title = "Ready to Elevate Your Brand?", 
  description = "Let's discuss how we can help you achieve your communication goals",
  buttonText = "Get Started Today",
  buttonLink = "/contact"
}) => {
  return (
    <section className="relative text-white py-20 overflow-hidden">
      <img src="/images/Frame 4.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">{title}</h2>
        <p className="text-xl mb-8 opacity-90 drop-shadow-lg">{description}</p>
        <a 
          href={buttonLink} 
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
