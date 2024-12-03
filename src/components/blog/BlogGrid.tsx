import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    title: 'Understanding Mobile Financial Services',
    excerpt: 'Learn how mobile banking is transforming rural communities and enabling financial inclusion.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Financial Literacy',
    author: 'Kwame Mensah',
    date: 'March 15, 2024',
    slug: 'understanding-mobile-financial-services',
  },
  {
    title: 'Sustainable Livestock Farming Practices',
    excerpt: 'Discover best practices for sustainable poultry and goat farming in rural Ghana.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Agriculture',
    author: 'Abena Osei',
    date: 'March 12, 2024',
    slug: 'sustainable-livestock-farming',
  },
  {
    title: 'Digital Connectivity in Rural Areas',
    excerpt: 'How telecommunications infrastructure is bridging the digital divide in rural communities.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Technology',
    author: 'Kofi Addo',
    date: 'March 10, 2024',
    slug: 'digital-connectivity-rural-areas',
  },
  {
    title: 'Fraud Prevention Tips for Mobile Banking',
    excerpt: 'Essential security practices to protect your mobile financial transactions.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Security',
    author: 'Efua Owusu',
    date: 'March 8, 2024',
    slug: 'fraud-prevention-mobile-banking',
  },
  {
    title: 'Community Success Stories',
    excerpt: 'Real stories of how our services have transformed rural businesses and lives.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Impact',
    author: 'Yaw Mensah',
    date: 'March 5, 2024',
    slug: 'community-success-stories',
  },
  {
    title: 'Financial Planning for Farmers',
    excerpt: 'Guide to managing agricultural income and planning for seasonal variations.',
    image: 'https://images.unsplash.com/photo-1594761051556-eba6902b4d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Financial Literacy',
    author: 'Akua Sarpong',
    date: 'March 1, 2024',
    slug: 'financial-planning-farmers',
  },
];

const BlogGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;