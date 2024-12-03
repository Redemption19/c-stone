import React from 'react';
import { MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="bg-green-700 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <MessageSquare className="w-16 h-16 text-green-100" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Contact Us
        </h1>
        <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
          Get in touch with our team to learn more about our services or discuss how we can help
          your community.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;