import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogHero = () => {
  return (
    <div className="bg-green-700 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <BookOpen className="w-16 h-16 text-green-100" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Resources & Insights
        </h1>
        <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
          Stay informed with the latest updates on financial literacy, sustainable agriculture,
          and rural development in Ghana.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;