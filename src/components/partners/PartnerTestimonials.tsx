import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Cornerstone Innovations has been instrumental in bridging the financial gap in rural Ghana. Their commitment to sustainable development aligns perfectly with our mission.",
    author: "Dr. Kwame Mensah",
    role: "Director, Ghana Agricultural Bank",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "The impact of our partnership with Cornerstone in improving rural telecommunications infrastructure has been remarkable. Together, we're connecting communities.",
    author: "Sarah Owusu",
    role: "CEO, Mobile Network Ghana",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const PartnerTestimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Partner Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <Quote className="w-10 h-10 text-green-600 mb-6" />
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;