import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceFeatureProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  link: string;
  imagePosition?: 'left' | 'right';
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  title,
  description,
  benefits,
  image,
  link,
  imagePosition = 'left',
}) => {
  const content = (
    <>
      <div className={`w-full lg:w-1/2 ${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-900">Key Benefits:</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
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
          to={link}
          className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
        >
          <span>Learn More</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">{content}</div>
      </div>
    </div>
  );
};

export default ServiceFeature;