import React from 'react';

function MagicalKenyaOpen() {
  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/Frame 4.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Magical Kenya Open</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">Africa's Premier Golf Tournament on the DP World Tour</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <img src="/images/magicalkenyaopen.webp" alt="Magical Kenya Open" className="w-full rounded-2xl shadow-2xl mb-12" />
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About the Tournament</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Magical Kenya Open is Kenya's flagship professional golf tournament and a prestigious event on the DP World Tour (formerly European Tour). Held annually at the stunning Muthaiga Golf Club in Nairobi, the tournament attracts world-class golfers from across the globe and serves as a powerful platform to showcase Kenya's tourism potential to an international audience.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Tournament Highlights</h3>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Part of the prestigious DP World Tour calendar</li>
                <li>Hosted at the historic Muthaiga Golf Club, Nairobi</li>
                <li>Attracts top international professional golfers</li>
                <li>Significant prize money and DP World Tour ranking points</li>
                <li>Broadcast to millions of viewers worldwide</li>
                <li>Key platform for promoting Kenya's tourism brand</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Venue</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Muthaiga Golf Club, established in 1913, is one of Africa's most prestigious golf courses. The championship course offers a challenging yet fair test for professional golfers, with its tree-lined fairways, strategic bunkering, and immaculate greens providing the perfect stage for world-class golf.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Tourism & Economic Impact</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Magical Kenya Open serves as more than just a golf tournament—it's a strategic tourism marketing initiative. Through extensive international broadcast coverage and media presence, the event showcases Kenya's natural beauty, wildlife, culture, and hospitality to a global audience of millions, significantly boosting the country's tourism profile and attracting visitors from around the world.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Championship Format</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The tournament follows the standard 72-hole stroke play format over four days, with a cut after 36 holes. The field typically includes DP World Tour members, invited professionals, and top amateur golfers, all competing for the prestigious title and valuable tour ranking points.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Nextwave's Role</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nextwave Public Relations played a crucial role in managing comprehensive communications and media relations for this high-profile sporting event. Our services included:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Strategic event communications and PR planning</li>
              <li>International and local media coordination</li>
              <li>Press conference organization and management</li>
              <li>Professional photography and videography services</li>
              <li>Social media content creation and management</li>
              <li>Stakeholder engagement and VIP hospitality coordination</li>
              <li>Post-event reporting and media analysis</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-xl mt-8">
              <h4 className="text-xl font-bold mb-3 text-gray-900">Learn More</h4>
              <p className="text-gray-700 mb-4">
                For more information about the Magical Kenya Open, including tournament schedules, player profiles, and ticketing information, visit the official website.
              </p>
              <a 
                href="https://magicalkenyaopen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Visit Official Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MagicalKenyaOpen;
