import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Impact from '../components/home/Impact';
import FAQ from '../components/home/FAQ';
import { FadeInWhenVisible } from '../components/animations/FadeInWhenVisible';

const Home = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <Services />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <Impact />
      </FadeInWhenVisible>
      <FAQ />
    </div>
  );
};

export default Home;