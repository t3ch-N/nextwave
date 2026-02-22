import React, { useState } from 'react';

function Team() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teamMembers = [
    { name: "Syindu Musesya (Poshia)", role: "Project Lead / Managing Director", bio: "9+ years in communications, events & project management. Experienced in strategic planning and execution for international clients.", img: "/images/syindu-musesya.jpg" },
    { name: "Lilian Wanjiru", role: "Communications Specialist", bio: "Expert in strategic communications, media relations, and content development with extensive experience in corporate communications.", img: "/images/staff-1.png" },
    { name: "James Kariuki", role: "Creative Director", bio: "Specializes in graphic design, branding, and creative campaigns with a passion for visual storytelling.", img: "/images/staff-2.png" },
    { name: "Mary Njeri", role: "Events Manager", bio: "Experienced in planning and executing high-profile events across East Africa with attention to detail.", img: "/images/staff.png" },
  ];

  return (
    <div className="pt-20">
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} onClick={() => setSelectedTeam(member)} className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition">
                <img src={member.img} alt={member.name} className="w-full h-64 sm:h-80 object-cover" />
                <div className="p-6">
                  <h4 className="font-semibold text-xl">{member.name}</h4>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
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
    </div>
  );
}

export default Team;
