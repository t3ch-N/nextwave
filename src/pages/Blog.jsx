import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Future of PR in Africa',
      excerpt: 'Exploring emerging trends and opportunities in African public relations landscape.',
      date: '2025-01-15',
      category: 'Industry Insights',
      image: '/images/media1.png'
    },
    {
      id: 2,
      title: 'Crisis Communication Best Practices',
      excerpt: 'Essential strategies for managing your brand reputation during challenging times.',
      date: '2025-01-10',
      category: 'Crisis Management',
      image: '/images/media2.png'
    },
    {
      id: 3,
      title: 'Digital PR Strategies for 2025',
      excerpt: 'How to leverage digital platforms for maximum PR impact in the modern age.',
      date: '2025-01-05',
      category: 'Digital Marketing',
      image: '/images/media3.png'
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Blog"
        description="Insights, tips, and industry news from Nextwave PR - your source for corporate communications expertise."
      />
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/images/NEXTWAVE UPDATED LOGOS/NW-BRAND PATTERN.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Blog & Insights</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">Expert perspectives on PR, communications, and media relations</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-bold mb-2">{post.category}</div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                    <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-bold">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">More blog posts coming soon. Stay tuned!</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}

export default Blog;
