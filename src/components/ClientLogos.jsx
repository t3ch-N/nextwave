import React from 'react';

function ClientLogos() {
  const clients = [
    { name: 'BBC', logo: '/images/bbc.png' },
    { name: 'CNN', logo: '/images/cnn.png' },
    { name: 'CNBC', logo: '/images/cnbc.png' },
    { name: 'Nation', logo: '/images/nation.png' },
    { name: 'The Standard', logo: '/images/the-standard.png' },
    { name: 'Business Daily', logo: '/images/business-daily.png' },
    { name: 'KTN', logo: '/images/ktn.png' },
    { name: 'NTV', logo: '/images/ntv.png' },
    { name: 'Citizen', logo: '/images/citizen.png' },
    { name: 'K24', logo: '/images/k24.png' },
    { name: 'KBC', logo: '/images/kbc.png' },
    { name: 'The Star', logo: '/images/the-star.png' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Featured In</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
