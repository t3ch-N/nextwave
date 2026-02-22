import React from 'react';
import { Camera, Video, Megaphone, Users, Briefcase, TrendingUp, Award, Globe } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Megaphone,
      title: "Strategic Communication",
      desc: "Comprehensive communication strategies that align with your business objectives and enhance your brand reputation.",
      details: "We develop tailored communication plans, manage stakeholder engagement, and create compelling narratives that resonate with your target audiences.",
      image: "/images/comm1.png"
    },
    {
      icon: Users,
      title: "Media Relations",
      desc: "Building and maintaining strong relationships with media outlets across traditional and digital platforms.",
      details: "Our extensive media network includes partnerships with BBC, CNN, CNBC, Nation Media, Standard Group, and leading Kenyan broadcasters.",
      image: "/images/media1.png"
    },
    {
      icon: Camera,
      title: "Multi-Media Production",
      desc: "Professional photography, videography, and content creation for all your communication needs.",
      details: "From corporate videos to event coverage, we deliver high-quality visual content that tells your story effectively.",
      image: "/images/comm2.png"
    },
    {
      icon: Briefcase,
      title: "Events Management",
      desc: "End-to-end event planning and execution for conferences, product launches, and corporate gatherings.",
      details: "We've successfully managed high-profile events including Africa Climate Summit, Magical Kenya Open, and Coffee & Chocolate Week.",
      image: "/images/media2.png"
    },
    {
      icon: Video,
      title: "Film Production",
      desc: "Full-service film production including documentaries, commercials, and corporate films.",
      details: "Our production team handles everything from concept development to post-production, delivering broadcast-quality content.",
      image: "/images/comm3.png"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      desc: "Integrated digital strategies including social media management, content marketing, and online campaigns.",
      details: "We leverage digital platforms to amplify your message, engage audiences, and drive measurable results.",
      image: "/images/media3.png"
    },
    {
      icon: Award,
      title: "Crisis Management",
      desc: "Rapid response and strategic guidance to protect your reputation during challenging times.",
      details: "Our crisis communication experts provide 24/7 support, media training, and reputation recovery strategies.",
      image: "/images/comm4.png"
    },
    {
      icon: Globe,
      title: "Training & Capacity Building",
      desc: "Professional development programs in communication, media relations, and public speaking.",
      details: "Customized training workshops for teams and individuals to enhance communication skills and media readiness.",
      image: "/images/media4.png"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">360° Corporate Communications Solutions Tailored to Your Needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {services.map((service, i) => (
            <div key={i} className={`mb-20 grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition"></div>
                  <img src={service.image} alt={service.title} className="relative rounded-2xl shadow-2xl w-full" />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-xl text-gray-700 mb-4 font-semibold">{service.desc}</p>
                <p className="text-lg text-gray-600 leading-relaxed">{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose NEXTWave</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
              <p className="text-gray-700 font-semibold">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-700 font-semibold">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-gray-700 font-semibold">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss how we can help you achieve your communication goals</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
