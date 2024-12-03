import React from 'react';
import Mission from '../components/about/Mission';
import Story from '../components/about/Story';
import Team from '../components/about/Team';
import Location from '../components/about/Location';
import { FadeInWhenVisible } from '../components/animations/FadeInWhenVisible';

const About = () => {
  return (
    <div className="pt-16">
      <FadeInWhenVisible>
        <div className="bg-green-700 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              About Cornerstone Innovations
            </h1>
            <p className="text-xl text-green-100 text-center mt-4 max-w-3xl mx-auto">
              Building a stronger, more connected Ghana through innovative solutions and community
              empowerment.
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <Mission />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <Story />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.4}>
        <Team />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.5}>
        <Location />
      </FadeInWhenVisible>
    </div>
  );
};

export default About;