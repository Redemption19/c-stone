import React from 'react';
import { Bird, Leaf, LineChart, Users } from 'lucide-react';
import livestockImage from "@assets/images/livestock.png"; // Replace with the correct image path

const LivestockSupply = () => {
  const features = [
    {
      icon: <Bird className="w-12 h-12 text-green-600" />,
      title: 'Quality Poultry',
      description: 'Premium quality chickens and eggs from certified suppliers.',
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: 'Sustainable Practices',
      description: 'Environmentally conscious farming methods and animal welfare.',
    },
    {
      icon: <LineChart className="w-12 h-12 text-green-600" />,
      title: 'Market Access',
      description: 'Direct access to markets and fair pricing for farmers.',
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Community Support',
      description: 'Training and support for local farmers and producers.',
    },
  ];

  return (
    <section id="livestock" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Livestock Supply</h2>
          <p className="text-gray-600">
            Supporting sustainable agriculture through quality livestock supply and farmer empowerment
            programs that promote food security and economic growth.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center bg-white p-10 rounded-lg shadow-lg gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={livestockImage}
              alt="Livestock Supply Illustration"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Ready to Empower Local Farmers?
            </h3>
            <p className="text-gray-600">
              Join us in revolutionizing livestock supply with sustainable practices and community-focused solutions.
            </p>
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-200">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivestockSupply;