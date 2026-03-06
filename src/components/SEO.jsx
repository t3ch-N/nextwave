import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, image, type = 'website' }) => {
  const location = useLocation();
  const baseUrl = 'https://nextwave-pr.co.ke';
  const fullUrl = `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/images/nw-secondary-logo-no-bg.png`;

  useEffect(() => {
    document.title = title ? `${title} | Nextwave PR` : 'Nextwave PR - 360° Corporate Communications';
    
    const metaTags = [
      { name: 'description', content: description || 'Leading 360° corporate communications agency in Kenya. Strategic communication, media relations, events management, and film production since 2017.' },
      { property: 'og:title', content: title || 'Nextwave PR' },
      { property: 'og:description', content: description || 'Leading 360° corporate communications agency in Kenya' },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: type },
      { property: 'og:image', content: image || defaultImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title || 'Nextwave PR' },
      { name: 'twitter:description', content: description || 'Leading 360° corporate communications agency in Kenya' },
      { name: 'twitter:image', content: image || defaultImage }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attr = name ? 'name' : 'property';
      const value = name || property;
      let meta = document.querySelector(`meta[${attr}="${value}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }, [title, description, image, fullUrl, type]);

  return null;
};

export default SEO;
