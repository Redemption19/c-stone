import React from 'react';
import { Shield, BookOpen, CreditCard, Wallet } from 'lucide-react';
import financailService from "@assets/images/mobile-fin.png";

const FinancialServices = () => {
  const services = [
    {
      icon: <CreditCard className="w-12 h-12 text-green-600" />,
      title: 'Secure Transactions',
      description: 'Safe and reliable mobile money transfers, bill payments, and digital wallets.',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-green-600" />,
      title: 'Financial Literacy',
      description: 'Educational programs to help communities understand and manage their finances better.',
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Fraud Mitigation',
      description: 'Advanced security measures to protect transactions and prevent financial fraud.',
    },
    {
      icon: <Wallet className="w-12 h-12 text-green-600" />,
      title: 'Digital Banking',
      description: 'Access to savings accounts, loans, and insurance products through mobile devices.',
    },
  ];

  return (
    <section id="mfs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Financial Services</h2>
          <p className="text-gray-600">
            Empowering rural communities with secure, accessible, and innovative financial solutions
            that promote economic growth and financial inclusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center bg-gray-100 p-10 rounded-lg shadow-lg gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={financailService}
              alt="Financial Services Illustration"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Ready to Transform Your Financial Journey?
            </h3>
            <p className="text-gray-600">
              Discover the convenience of secure, accessible, and innovative financial solutions tailored for you.
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

export default FinancialServices;