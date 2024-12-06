import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Thanks to Cornerstone's mobile banking services, I can now easily manage my farm's finances and receive payments from customers directly to my phone.",
    author: "Kwesi Addo",
    role: "Poultry Farmer, Kpong",
    image: "https://images.unsplash.com/photo-1518809595274-1471d16319b7?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "The financial literacy program helped me understand how to better manage my small business. Now I'm able to save and plan for expansion.",
    author: "Ama Serwaa",
    role: "Market Vendor, Somanya",
    image: "https://images.unsplash.com/photo-1559172802-f5de3d1ed91d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Having reliable phone and internet access has transformed how I connect with suppliers and customers. It's made my business more efficient.",
    author: "Yaw Mensah",
    role: "Local Entrepreneur, Akosombo",
    image: "https://images.unsplash.com/photo-1709004915865-38bc70f4cb78?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <Quote className="w-10 h-10 text-green-600 mb-6" />
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
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

export default Testimonials;