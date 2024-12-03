import React from 'react';
import { CheckCircle } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: 'Customized Financial Products',
      description: 'Tailored financial solutions that meet the specific needs of each customer segment.',
    },
    {
      title: 'Dedicated Support Teams',
      description: 'Specialized support teams that understand the unique challenges of each segment.',
    },
    {
      title: 'Integrated Services',
      description: 'Seamlessly integrated financial, agricultural, and telecommunications services.',
    },
    {
      title: 'Community Focus',
      description: 'Solutions developed with deep understanding of local community needs.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Our Approach to Customer Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;