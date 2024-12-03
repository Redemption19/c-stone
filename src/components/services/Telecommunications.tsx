import React from 'react';
import { Smartphone, Signal, Wifi, HeadphonesIcon } from 'lucide-react';
import telecomImage from "@assets/images/telecom.png"; // Replace with the correct image path

const Telecommunications = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-green-600" />,
      title: 'Mobile Devices',
      description: 'Affordable smartphones and basic phones for all budgets.',
    },
    {
      icon: <Signal className="w-12 h-12 text-green-600" />,
      title: 'Network Coverage',
      description: 'Reliable network coverage in rural areas.',
    },
    {
      icon: <Wifi className="w-12 h-12 text-green-600" />,
      title: 'Internet Access',
      description: 'Affordable data plans and internet connectivity solutions.',
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-green-600" />,
      title: 'Customer Support',
      description: '24/7 local language support for all services.',
    },
  ];

  return (
    <section id="telecom" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Telecommunications</h2>
          <p className="text-gray-600">
            Connecting rural communities through affordable and reliable telecommunications services,
            bringing the digital world closer to everyone.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center bg-white p-10 rounded-lg shadow-lg gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={telecomImage}
              alt="Telecommunications Illustration"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Stay Connected, Anytime, Anywhere
            </h3>
            <p className="text-gray-600">
              Empowering rural communities with modern telecommunication solutions that bridge the digital divide. 
              Join us in creating a connected future.
            </p>
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-200">
              Buy Data Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Telecommunications;
