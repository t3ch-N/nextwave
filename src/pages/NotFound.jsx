import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <SEO title="404 - Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
