import React from 'react';
import { Users } from 'lucide-react';

const SegmentsHero = () => {
  return (
    <div className="bg-green-700 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Users className="w-16 h-16 text-green-100" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Our Customer Segments
        </h1>
        <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
          Tailored solutions for diverse communities across rural Ghana, meeting unique needs and
          empowering growth.
        </p>
      </div>
    </div>
  );
};

export default SegmentsHero;