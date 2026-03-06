import React, { useEffect, useState } from 'react';
import { getEventBySlug } from '../sanityQueries';

// Example: Dynamic Event Page using Sanity CMS
// This shows how to convert your static pages to use Sanity data

function EventPageExample() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await getEventBySlug('water-sanitation-narsip');
      setEvent(data);
      setLoading(false);
    };
    fetchEvent();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found</div>;

  return (
    <div className="pt-20">
      <section className="relative text-white py-20 overflow-hidden">
        <img src={event.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">{event.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">{event.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {event.videoUrl && (
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative" style={{paddingBottom: '56.25%', height: 0}}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={event.videoUrl}
                  title={event.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            {/* Render challenge content from Sanity */}
            <div className="text-lg text-gray-700 leading-relaxed">
              {/* Use a portable text renderer for block content */}
            </div>
          </div>

          {event.achievements && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Achievements</h3>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
                {event.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default EventPageExample;
