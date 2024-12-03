import React from 'react';
import { Handshake } from 'lucide-react';

const PartnersHero = () => {
  return (
    <div className="bg-green-700 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Handshake className="w-16 h-16 text-green-100" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Our Partners & Collaborators
        </h1>
        <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
          Working together with leading organizations to create lasting impact in rural Ghana through
          innovative solutions and sustainable development.
        </p>
      </div>
    </div>
  );
};

export default PartnersHero;