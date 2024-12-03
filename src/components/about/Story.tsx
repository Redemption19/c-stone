import React from 'react';

const Story = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              Founded in 2020 in Kpong, Ghana, Cornerstone Innovations emerged from a deep understanding 
              of the challenges faced by rural communities in accessing financial services and 
              agricultural resources.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey began with a simple mission: to bridge the gap between rural communities 
              and essential services. We recognized that financial inclusion, sustainable agriculture, 
              and reliable telecommunications were not just services, but fundamental rights that 
              could transform lives.
            </p>
            <p className="text-gray-600">
              Today, we serve thousands of customers across multiple regions, maintaining strong 
              relationships with local communities and continuously innovating to meet their evolving 
              needs. Our presence in strategic locations like Kpong, Somanya, and Akosombo allows us 
              to reach more communities and create lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;