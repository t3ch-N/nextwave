import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const searchableContent = [
    { title: 'Home', path: '/', keywords: 'home communications pr nextwave' },
    { title: 'About Us', path: '/about', keywords: 'about company team history mission vision' },
    { title: 'Services', path: '/services', keywords: 'services media relations events management film production digital marketing' },
    { title: 'Case Studies', path: '/case-studies', keywords: 'case studies projects work portfolio' },
    { title: 'Portfolio', path: '/portfolio', keywords: 'portfolio work projects events' },
    { title: 'Contact', path: '/contact', keywords: 'contact email phone address location' },
    { title: 'Africa Climate Summit', path: '/events/africa-climate-summit', keywords: 'africa climate summit event' },
    { title: 'Magical Kenya Open', path: '/events/magical-kenya-open', keywords: 'magical kenya open golf event' },
    { title: 'WASH Campaign', path: '/events/wash-campaign', keywords: 'wash campaign water sanitation hygiene' },
    { title: 'Water Sanitation NaRSIP', path: '/events/water-sanitation-narsip', keywords: 'water sanitation narsip nairobi' },
    { title: 'Corporate Events', path: '/events/corporate-events', keywords: 'corporate events business' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
        aria-label="Search"
      >
        <SearchIcon size={16} />
        <span>Search</span>
        <kbd className="text-xs bg-white px-1.5 py-0.5 rounded">⌘K</kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20" onClick={() => setIsOpen(false)}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4" onClick={e => e.stopPropagation()} ref={searchRef}>
        <div className="flex items-center gap-3 p-4 border-b">
          <SearchIcon size={20} className="text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 outline-none text-lg"
            autoFocus
          />
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto">
            {results.map((result, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(result.path)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition border-b last:border-b-0"
              >
                <div className="font-semibold text-gray-900">{result.title}</div>
                <div className="text-sm text-gray-500">{result.path}</div>
              </button>
            ))}
          </div>
        )}
        {query.length > 1 && results.length === 0 && (
          <div className="p-8 text-center text-gray-500">No results found</div>
        )}
      </div>
    </div>
  );
};

export default Search;
