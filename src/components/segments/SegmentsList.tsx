import React from 'react';
import { Tractor, Store, Users, Building2, Phone } from 'lucide-react';
import SegmentCard from './SegmentCard';
import { motion } from 'framer-motion';
import TelcomUsers from '@assets/images/partners/telcom-user.webp';

const segments = [
  {
    title: 'Farmers & Livestock Producers',
    description: 'Supporting agricultural growth with comprehensive financial and supply chain solutions.',
    features: [
      'Mobile banking for agricultural transactions',
      'Quality livestock supply and support',
      'Financial planning for farm expansion',
      'Market access and fair pricing',
    ],
    icon: <Tractor className="w-8 h-8 text-green-600" />,
    image: 'https://images.pexels.com/photos/7731770/pexels-photo-7731770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/services#livestock',
  },
  {
    title: 'Small-scale Entrepreneurs',
    description: 'Empowering local businesses with the tools they need to grow and succeed.',
    features: [
      'Business-focused mobile banking',
      'Financial literacy training',
      'Digital payment solutions',
      'Business development support',
    ],
    icon: <Store className="w-8 h-8 text-green-600" />,
    image: 'https://images.pexels.com/photos/5922325/pexels-photo-5922325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/services#mfs',
  },
  {
    title: 'Low-income Individuals',
    description: 'Making financial services accessible and affordable for everyone.',
    features: [
      'Basic savings accounts',
      'Micro-loans',
      'Financial education',
      'Affordable mobile services',
    ],
    icon: <Users className="w-8 h-8 text-green-600" />,
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    link: '/services#mfs',
  },
  {
    title: 'Local Businesses',
    description: 'Comprehensive solutions for established local enterprises.',
    features: [
      'Business banking services',
      'Supply chain management',
      'Digital transformation support',
      'Business networking',
    ],
    icon: <Building2 className="w-8 h-8 text-green-600" />,
    image: 'https://images.pexels.com/photos/15424312/pexels-photo-15424312/free-photo-of-boy-sitting-on-sack-on-outdoor-market.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/services#mfs',
  },
  {
    title: 'Telecom Service Users',
    description: 'Connecting communities through reliable telecommunications services.',
    features: [
      'Affordable mobile devices',
      'Data packages',
      'Voice services',
      'Mobile internet solutions',
    ],
    icon: <Phone className="w-8 h-8 text-green-600" />,
    image: TelcomUsers,
    link: '/services#telecom',
  },
];

const SegmentsList = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SegmentCard {...segment} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SegmentsList;