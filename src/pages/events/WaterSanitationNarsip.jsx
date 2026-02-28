import React from 'react';

function WaterSanitationNarsip() {
  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/Frame 4.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Kenya's Water Sanitation Crisis</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">NaRSIP II - Transforming Nairobi's Sanitation Infrastructure</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Video Section */}
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative" style={{paddingBottom: '56.25%', height: 0}}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                title="Kenya's Water Sanitation Crisis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Context Information */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nairobi is Kenya's economic powerhouse, accounting for 9% of the country's 48.5 million population. However, expanding urbanization has outpaced essential service development, resulting in a number of challenges. Poor sanitation has harmed public health, the environment, and the economy, costing the country an estimated 0.9% of its GDP.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Raw sewage discharge into waterways is a serious issue because only 51% of the city is served by sewers. This practice pollutes both surface and ground water, resulting in disease outbreaks, adverse environmental effects and economic losses.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-6">The Solution</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kenya is implementing the Nairobi Rivers Sewerage Improvement Project phase 2 (NaRSIP II) through the Athi Water Works Development Agency (AWWDA), with the objective to increase citywide coverage of enhanced sanitation services from 48% to 55%.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Enhanced Sanitation & Sewerage Infrastructure</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Nairobi Rivers Basin Rehabilitation and Restoration Program Phase II (NaRSIP II) represents a transformative initiative addressing Kenya's water sanitation crisis through comprehensive infrastructure development and community engagement.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Program Overview</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              NaRSIP II is implemented by Athi Water Works Development Agency in collaboration with the Government of Kenya and the African Development Bank, targeting improved sanitation access for over 1.2 million Nairobi residents.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Achievements</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              <li>Increased sanitation access from 48% to 70% in targeted areas</li>
              <li>Construction of 400 km of secondary reticulation sewers</li>
              <li>Installation of 20,000 last-mile household connections</li>
              <li>Rehabilitation of over 25 ablution blocks</li>
              <li>Development of faecal sludge disposal facilities</li>
              <li>Expansion of Dandora Estate Wastewater Treatment Plant</li>
              <li>Community health education and awareness programs</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Impact on Communities</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The program has significantly improved public health outcomes, environmental management, and quality of life for residents in informal settlements including Korogocho, Mathare, Kibera, Mukuru, Kawangware, and Githurai.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Nextwave's Role</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nextwave Public Relations provided strategic communications support, media relations, content production, and stakeholder engagement to ensure the program's visibility and community buy-in. Our comprehensive approach included video documentation, press releases, social media campaigns, and community outreach initiatives.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mt-8">
              <h4 className="text-xl font-bold mb-3 text-gray-900">Learn More</h4>
              <p className="text-gray-700 mb-4">
                For more information about this transformative initiative, visit the LinkedIn post by Poshia Musesya (MPRSK) M.A.
              </p>
              <a 
                href="https://www.linkedin.com/posts/poshia-musesya-mprsk-m-a-5bba4732_enhanced-sanitation-sewerage-activity-7201163469671321602-QkpG?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                View LinkedIn Post
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WaterSanitationNarsip;
