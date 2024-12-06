import React from 'react';
import MTNLogo from '@assets/images/partners/mtn-ghana.jpg';
import TelecelLogo from '@assets/images/partners/telecel-ghana.jpeg';
import ATLogo from '@assets/images/partners/at.png';
import ADBAgric from '@assets/images/partners/adb.webp';
import RDFImage from '@assets/images/partners/rdf.webp';
import TechBridge from '@assets/images/partners/tech-bridge.jpg';
import LivestockFarming from '@assets/images/partners/livestock-farming.jpg';
import MobileNetwork from '@assets/images/partners/mobile-network.png';
import RuralEducation from '@assets/images/partners/rural-education.jpg';
// import CEOImage from '@assets/images/ceo-image.jpg';
const partners = [
  {
    name: 'MTN Ghana',
    logo: MTNLogo,
    category: 'Telecommunication',
  },
  {
    name: 'Telecel Ghana',
    logo: TelecelLogo,
    category: 'Telecommunication',
  },
  {
    name: 'AT Ghana',
    logo: ATLogo,
    category: 'Telecommunication',
  },
  {
    name: 'Ghana Agricultural Bank',
    logo: ADBAgric,
    category: 'Financial Services',
  },
  {
    name: 'Rural Development Fund',
    logo: RDFImage,
    category: 'Community Development',
  },
  {
    name: 'TechBridge Ghana',
    logo: TechBridge,
    category: 'Technology',
  },
  {
    name: 'Livestock Farmers Association',
    logo: LivestockFarming,
    category: 'Agriculture',
  },
  {
    name: 'Mobile Network Ghana',
    logo: MobileNetwork,
    category: 'Telecommunications',
  },
  {
    name: 'Rural Education Initiative',
    logo: RuralEducation,
    category: 'Education',
  },
  
  

];

const PartnerGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 mx-auto mb-6 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-green-600">{partner.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerGrid;