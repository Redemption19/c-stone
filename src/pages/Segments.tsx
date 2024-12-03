import React from 'react';
import SegmentsHero from '../components/segments/SegmentsHero';
import SegmentsList from '../components/segments/SegmentsList';
import Solutions from '../components/segments/Solutions';
import { FadeInWhenVisible } from '../components/animations/FadeInWhenVisible';

const Segments = () => {
  return (
    <div className="pt-16">
      <FadeInWhenVisible>
      <SegmentsHero />
      </FadeInWhenVisible>
      
      <FadeInWhenVisible delay={0.4}>
      <SegmentsList />
      </FadeInWhenVisible>
      
      <FadeInWhenVisible delay={0.3}>
      <Solutions />
      </FadeInWhenVisible>
     
    </div>
  );
};

export default Segments;