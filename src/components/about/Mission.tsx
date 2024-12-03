import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-green-600" />,
      title: 'Mission',
      description:
        'Empowering rural communities through innovative financial, agricultural, and training solutions.',
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: 'Vision',
      description:
        'To be the leading provider of integrated services that transform the lives of rural communities in Ghana',
    },
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      title: 'Values',
      description:
        'Innovation, Customer Focus, Integrity, Collaboration, Empowerment.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;