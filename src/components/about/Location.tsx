import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  const branches = [
    {
      city: 'Kpong',
      address: '123 Main Street, Kpong',
      phone: '0249594345 / 0277594345 / 0504594345',
      hours: 'Mon-Sat: 7:00 AM - 8:00 PM',
    },
    {
      city: 'Somanya',
      address: '456 Market Road, Somanya',
      phone: '0249594345 / 0277594345 / 0504594345',
      hours: 'Mon-Sat: 7:00 AM - 8:00 PM',
    },
    {
      city: 'Akosombo',
      address: '789 Lake Street, Akosombo',
      phone: '0249594345 / 0277594345 / 0504594345',
      hours: 'Mon-Sat: 7:00 AM - 8:00 PM',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{branch.city}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>{branch.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>{branch.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;