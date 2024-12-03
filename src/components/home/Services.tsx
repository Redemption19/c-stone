import React from 'react';
import { Smartphone, Users, Wifi, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Importing images using @assets alias
import LivestockImage from '@assets/images/livestock-goat-chicken.png';
import MobileFinancialImage from '@assets/images/Mobile-financial.png';
import TelecomImage from '@assets/images/telecom-2.png';

const services = [
  {
    icon: <Smartphone className="w-12 h-12 text-green-600" />,
    title: 'Mobile Financial Services',
    description:
      'Secure transactions, financial literacy programs, and fraud mitigation services for rural communities.',
    link: '/services#mfs',
    detailedDescription: 'Powerful tools to streamline your financial operations and ensure convenience for your customers.',
    benefits: [
      'Fast Transactions: Support for real-time money transfers and payments',
      'Secure Platform: Bank-grade encryption to protect all transactions',
      'Wide Accessibility: Accessible across multiple devices for convenience',
    ],
    image: MobileFinancialImage,
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: 'Livestock Supply',
    description:
      'Sustainable poultry and goat farming solutions, supporting local farmers with quality livestock.',
    link: '/services#livestock',
    detailedDescription: 'Comprehensive livestock management solutions that ensure quality and sustainability for farmers.',
    benefits: [
      'Quality Assurance: Premium quality livestock from certified suppliers',
      'Technical Support: Expert guidance and veterinary services',
      'Market Access: Direct connections to buyers and fair pricing',
    ],
    image: LivestockImage,
  },
  {
    icon: <Wifi className="w-12 h-12 text-green-600" />,
    title: 'Telecommunications',
    description:
      'Affordable phones, SIM cards, and airtime sales to keep rural communities connected.',
    link: '/services#telecom',
    detailedDescription: 'Reliable communication infrastructure that keeps rural communities connected and empowered.',
    benefits: [
      'Network Coverage: Extensive coverage in rural areas',
      'Affordable Plans: Cost-effective communication solutions',
      'Digital Inclusion: Bridge the digital divide with modern technology',
    ],
    image: TelecomImage,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to empower rural communities through financial
            inclusion, sustainable agriculture, and reliable telecommunications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {services.map((service, index) => (
          <div key={index} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-lg text-gray-600">{service.detailedDescription}</p>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <svg
                            className="w-5 h-5 text-green-600 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;