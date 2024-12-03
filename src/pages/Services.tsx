import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import FinancialServices from '../components/services/FinancialServices';
import LivestockSupply from '../components/services/LivestockSupply';
import Telecommunications from '../components/services/Telecommunications';
import { FadeInWhenVisible } from '../components/animations/FadeInWhenVisible';

const Services = () => {
  return (
    <div className="pt-16">
      <FadeInWhenVisible>
      <ServiceHero />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3}>
      <FinancialServices />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
      <LivestockSupply />
      </FadeInWhenVisible>
      
      <FadeInWhenVisible delay={0.3}>
      <Telecommunications />
      </FadeInWhenVisible>
    </div>
  );
};

export default Services;