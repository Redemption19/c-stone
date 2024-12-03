import React from 'react';
import PartnersHero from '../components/partners/PartnersHero';
import PartnerGrid from '../components/partners/PartnerGrid';
import PartnerTestimonials from '../components/partners/PartnerTestimonials';
import Collaboration from '../components/partners/Collaboration';
import { FadeInWhenVisible } from '../components/animations/FadeInWhenVisible';

const Partners = () => {
  return (
    <div className="pt-16">
      <FadeInWhenVisible>
      <PartnersHero />
      </FadeInWhenVisible>
     
     <FadeInWhenVisible delay={0.4}>
      <PartnerGrid />
     </FadeInWhenVisible>
     
     <FadeInWhenVisible delay={0.3}>
     <PartnerTestimonials />
     </FadeInWhenVisible>
      
      <FadeInWhenVisible delay={0.4}>
      <Collaboration />
      </FadeInWhenVisible>
      
    </div>
  );
};

export default Partners;