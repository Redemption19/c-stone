import React from 'react';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Collaboration = () => {
  const benefits = [
    {
      icon: <Target className="w-12 h-12 text-green-600" />,
      title: 'Shared Vision',
      description: 'Work together towards rural development and financial inclusion goals.',
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Community Impact',
      description: 'Reach more communities and create lasting positive change.',
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Resource Sharing',
      description: 'Access shared resources, expertise, and networks.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: 'Growth Opportunities',
      description: 'Expand reach and impact through strategic collaboration.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-600 mb-8">
            Join us in our mission to transform rural communities through innovative solutions
            and sustainable development.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Become a Partner
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;