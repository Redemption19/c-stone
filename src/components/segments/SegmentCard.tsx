import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SegmentCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
  link?: string;
}

const SegmentCard: React.FC<SegmentCardProps> = ({
  title,
  description,
  features,
  icon,
  image,
  link = '/contact',
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-4 left-4 bg-white p-3 rounded-full">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={link}
          className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 group"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
};

export default SegmentCard;