import React, { useState, useEffect } from 'react';
import { Award, Users, Briefcase, TrendingUp, Target, Eye, Heart, CheckCircle } from 'lucide-react';

function About() {
  const [counts, setCounts] = useState({ years: 0, clients: 0, projects: 0, team: 0 });
  const [activeValue, setActiveValue] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts(prev => ({
        years: prev.years < 8 ? prev.years + 1 : 8,
        clients: prev.clients < 150 ? prev.clients + 5 : 150,
        projects: prev.projects < 500 ? prev.projects + 15 : 500,
        team: prev.team < 25 ? prev.team + 1 : 25
      }));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const values = [
    { icon: Target, title: "Excellence", desc: "Delivering exceptional results in every project" },
    { icon: Heart, title: "Integrity", desc: "Building trust through honest communication" },
    { icon: Users, title: "Collaboration", desc: "Working together to achieve shared goals" },
    { icon: TrendingUp, title: "Innovation", desc: "Embracing creative solutions and new ideas" }
  ];

  const services = [
    "Strategic Communication", "Media Relations", "Crisis Management",
    "Event Management", "Film Production", "Creative Design",
    "Digital Marketing", "Training & Capacity Building"
  ];

  const timeline = [
    { year: "2017", event: "NEXTWave Founded", desc: "Established as a 360° corporate communications company" },
    { year: "2019", event: "Expansion", desc: "Grew team and client portfolio across East Africa" },
    { year: "2021", event: "Digital Transformation", desc: "Integrated digital marketing and social media services" },
    { year: "2025", event: "Industry Leader", desc: "Recognized as a leading PR agency in Kenya" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        <img src="/images/Frame 4.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">About Nextwave</h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90 drop-shadow-lg">Building, strengthening, and defending reputations through innovative integrated marketing and communications solutions</p>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Award, label: "Years Experience", value: counts.years, suffix: "+" },
            { icon: Users, label: "Happy Clients", value: counts.clients, suffix: "+" },
            { icon: Briefcase, label: "Projects Completed", value: counts.projects, suffix: "+" },
            { icon: TrendingUp, label: "Team Members", value: counts.team, suffix: "+" }
          ].map((stat, i) => (
            <div key={i} className="text-center group hover:scale-110 transition-transform duration-300">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:rotate-12 transition-transform" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}{stat.suffix}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition"></div>
            <img src="/images/aboutus.png" alt="NEXTWave Team" className="relative rounded-2xl shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Founded in <span className="font-bold text-blue-600">2017</span>, Nextwave Public Relations Ltd is a full-fledged, 360-degree corporate communications company that has transformed how organizations communicate in East Africa.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              We specialize in creative design, strategic communication, multidisciplinary training, film production, media relations, events management, and public relations for local and international clients across private, public, and development sectors.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              As an <span className="font-bold text-blue-600">Integrated Marketing and Communications Agency</span>, we build, strengthen, and defend our clients' reputations using innovative solutions that seamlessly integrate traditional media, new media, advertising, and marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-2xl transition-shadow">
              <Eye className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading integrated marketing and communications agency in Africa, recognized for innovative solutions that transform how organizations connect with their audiences.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-2xl transition-shadow">
              <Target className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional communication strategies that build, strengthen, and defend our clients' reputations through creativity, integrity, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveValue(i)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeValue === i ? 'bg-blue-600 scale-105' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <value.icon className="w-12 h-12 mb-4 mx-auto" />
                <h4 className="text-xl font-bold mb-2 text-center">{value.title}</h4>
                <p className="text-sm text-center opacity-90">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What We Do</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <CheckCircle className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {timeline.map((item, i) => (
              <div key={i} className={`flex items-center mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">{item.event}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Trusted by Leading Media</h2>
          <div className="relative">
            <div className="flex animate-scroll">
              {['bbc', 'cnn', 'cnbc', 'nation', 'the-standard', 'ntv', 'ktn', 'k24', 'citizen', 'the-star', 'business-daily', 'the-east-african'].map((media, i) => (
                <img key={i} src={`/images/${media}.png`} alt={media} className="h-12 mx-8 object-contain transition-all flex-shrink-0" />
              ))}
              {['bbc', 'cnn', 'cnbc', 'nation', 'the-standard', 'ntv', 'ktn', 'k24', 'citizen', 'the-star', 'business-daily', 'the-east-african'].map((media, i) => (
                <img key={`dup-${i}`} src={`/images/${media}.png`} alt={media} className="h-12 mx-8 object-contain transition-all flex-shrink-0" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet Our CEO</h2>
          <div className="flex justify-center">
            <div onClick={() => setSelectedTeam({ name: "Syindu Musesya (Poshia)", role: "Project Lead / Managing Director", bio: "9+ years in communications, events & project management. Experienced in strategic planning and execution for international clients.", img: "/images/syindu-musesya.jpg" })} className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition max-w-sm">
              <img src="/images/syindu-musesya.jpg" alt="Syindu Musesya" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h4 className="font-semibold text-xl">Syindu Musesya (Poshia)</h4>
                <p className="text-blue-600">Project Lead / Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedTeam && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6" onClick={() => setSelectedTeam(null)}>
          <div className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 md:p-10" onClick={e => e.stopPropagation()}>
            <img src={selectedTeam.img} alt="" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 sm:mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-center">{selectedTeam.name}</h3>
            <p className="text-blue-600 text-center mb-6 sm:mb-8">{selectedTeam.role}</p>
            <p className="text-base sm:text-lg leading-relaxed">{selectedTeam.bio}</p>
            <button onClick={() => setSelectedTeam(null)} className="mt-10 mx-auto block text-sm uppercase tracking-widest">Close</button>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/Frame 4.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Ready to Transform Your Communication?</h2>
          <p className="text-xl mb-8 opacity-90 drop-shadow-lg">Let's build your brand's reputation together</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
