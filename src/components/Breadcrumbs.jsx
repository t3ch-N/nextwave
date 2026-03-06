import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const formatName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="bg-gray-50 py-3 px-4 sm:px-6" aria-label="Breadcrumb">
      <div className="max-w-6xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 transition">
              <Home size={16} />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={name} className="flex items-center gap-2">
                <ChevronRight size={16} className="text-gray-400" />
                {isLast ? (
                  <span className="text-gray-900 font-medium">{formatName(name)}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-600 hover:text-blue-600 transition">
                    {formatName(name)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
