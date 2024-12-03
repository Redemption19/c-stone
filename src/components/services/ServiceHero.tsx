import React from 'react';
import { Smartphone, Users, Wifi } from 'lucide-react';

const ServiceHero = () => {
  return (
    <div className="bg-green-700 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Our Services
        </h1>
        <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
          Comprehensive solutions designed to empower rural communities through financial inclusion,
          sustainable agriculture, and reliable connectivity.
        </p>
        <div className="flex justify-center space-x-8 mt-12">
          <a href="#mfs" className="text-white hover:text-green-200 flex flex-col items-center">
            <Smartphone className="w-8 h-8 mb-2" />
            <span>Financial Services</span>
          </a>
          <a href="#livestock" className="text-white hover:text-green-200 flex flex-col items-center">
            <Users className="w-8 h-8 mb-2" />
            <span>Livestock Supply</span>
          </a>
          <a href="#telecom" className="text-white hover:text-green-200 flex flex-col items-center">
            <Wifi className="w-8 h-8 mb-2" />
            <span>Telecommunications</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;