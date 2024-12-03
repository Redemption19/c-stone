import React from 'react';
import { TrendingUp, Users, Percent, Building2 } from 'lucide-react';

const ImpactHero = () => {
  const metrics = [
    {
      icon: <Users className="w-8 h-8 text-green-100" />,
      value: '10,000+',
      label: 'Rural Customers',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-100" />,
      value: '₵5M+',
      label: 'Transaction Volume',
    },
    {
      icon: <Percent className="w-8 h-8 text-green-100" />,
      value: '95%',
      label: 'Customer Retention',
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-100" />,
      value: '4',
      label: 'Branch Locations',
    },
  ];

  return (
    <div className="bg-green-700 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Our Impact
        </h1>
        <p className="text-xl text-green-100 text-center max-w-3xl mx-auto mb-16">
          Transforming rural communities through sustainable financial solutions, agriculture, and connectivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-green-100">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactHero;