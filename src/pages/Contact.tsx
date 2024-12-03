import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { FadeInWhenVisible } from '../components/animations/FadeInWhenVisible';

const Contact = () => {
  return (
    <div className="pt-16">
      <FadeInWhenVisible>
      <ContactHero />
      </FadeInWhenVisible>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeInWhenVisible delay={0.3}>
              <ContactForm />
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <ContactInfo />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;