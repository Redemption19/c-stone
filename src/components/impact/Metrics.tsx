import React from 'react';
import { BarChart3, TrendingUp, Users, ShieldCheck } from 'lucide-react';

const Metrics = () => {
  const metrics = [
    {
      category: 'Financial Services',
      stats: [
        { label: 'Monthly Transactions', value: '50,000+' },
        { label: 'Active Mobile Users', value: '8,000+' },
        { label: 'Average Transaction Size', value: '₵200' },
      ],
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
    },
    {
      category: 'Livestock Supply',
      stats: [
        { label: 'Farmers Supported', value: '1,200+' },
        { label: 'Annual Livestock Sales', value: '₵2M+' },
        { label: 'Training Programs', value: '24/year' },
      ],
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    },
    {
      category: 'Telecommunications',
      stats: [
        { label: 'Active Subscribers', value: '5,000+' },
        { label: 'Network Coverage', value: '95%' },
        { label: 'Customer Support Cases', value: '99% resolved' },
      ],
      icon: <Users className="w-12 h-12 text-green-600" />,
    },
    {
      category: 'Community Impact',
      stats: [
        { label: 'Jobs Created', value: '500+' },
        { label: 'Communities Served', value: '40+' },
        { label: 'Financial Literacy Sessions', value: '120/year' },
      ],
      icon: <ShieldCheck className="w-12 h-12 text-green-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Impact Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center mb-6">{metric.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {metric.category}
              </h3>
              <div className="space-y-4">
                {metric.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;