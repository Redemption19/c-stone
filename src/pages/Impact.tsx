import React from 'react';
import ImpactHero from '../components/impact/ImpactHero';
import Metrics from '../components/impact/Metrics';
import Testimonials from '../components/impact/Testimonials';
import { FadeInWhenVisible } from '../components/animations/FadeInWhenVisible';

const Impact = () => {
  return (
    <div className="pt-16">
      <FadeInWhenVisible>
      <ImpactHero />
      </FadeInWhenVisible>
      
      <FadeInWhenVisible delay={0.3}>
      <Metrics />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3}>
      <Testimonials />
      </FadeInWhenVisible>
      
    </div>
  );
};

export default Impact;