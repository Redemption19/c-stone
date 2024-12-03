import React from 'react';
import { Tag } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Financial Literacy', count: 8 },
    { name: 'Agriculture', count: 6 },
    { name: 'Technology', count: 5 },
    { name: 'Security', count: 4 },
    { name: 'Impact', count: 7 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 flex-wrap">
          <Tag className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-gray-900">Categories:</span>
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;