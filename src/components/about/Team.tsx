import React from 'react';
import CEOImage from '@assets/images/ceo-image.jpg';

const Team = () => {
  const team = [
    {
      name: 'Samuel Kwabena Kabutey',
      role: 'Founder and CEO',
      image: CEOImage,
      bio: 'Professional Diploma in Education, Diploma in Sales Management and Bachelor of Science (Agriculture).',
    },
    // Add more team members as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leadership Team</h2>
        
        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center w-full md:w-1/2 lg:w-1/4">
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
