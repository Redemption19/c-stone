import React from 'react';
import { Users, TrendingUp, Percent, Building2 } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    value: '10,000+',
    label: 'Rural Customers Served',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    value: '₵5M+',
    label: 'Transaction Volume',
  },
  {
    icon: <Percent className="w-8 h-8 text-green-600" />,
    value: '95%',
    label: 'Customer Retention',
  },
  {
    icon: <Building2 className="w-8 h-8 text-green-600" />,
    value: '3',
    label: 'Branch Locations',
  },
];

const Impact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Making a real difference in rural Ghana through sustainable financial solutions and
            community development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;