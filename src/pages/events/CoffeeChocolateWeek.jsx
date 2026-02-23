import React from 'react';

function CoffeeChocolateWeek() {
  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/Frame 4.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Coffee & Chocolate Week</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">Celebrating Kenya's finest coffee and chocolate</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <img src="/images/attachment-coffee-and-chocolate.webp" alt="Coffee & Chocolate Week" className="w-full rounded-2xl shadow-2xl mb-12" />
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Coffee & Chocolate Week is an annual celebration of Kenya's rich coffee and chocolate heritage, bringing together producers, consumers, and enthusiasts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nextwave provided end-to-end event management and communications support for this unique cultural and culinary event.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Role</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Complete event planning and coordination</li>
              <li>Brand partnerships and sponsorship management</li>
              <li>Media coverage and press releases</li>
              <li>Event photography and video production</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoffeeChocolateWeek;
