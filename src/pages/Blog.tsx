import React from 'react';
import BlogHero from '../components/blog/BlogHero';
import Categories from '../components/blog/Categories';
import BlogGrid from '../components/blog/BlogGrid';

const Blog = () => {
  return (
    <div className="pt-16">
      <BlogHero />
      <Categories />
      <BlogGrid />
    </div>
  );
};

export default Blog;