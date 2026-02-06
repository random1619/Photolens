import { useEffect } from 'react';

const SEO = ({ 
  title = 'Photo Portfolio | Professional Photography',
  description = 'Professional photography portfolio featuring weddings, portraits, travel, street, and nature photography.',
  image = '/og-image.jpg',
  url = 'https://yourportfolio.com'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('title', title);

    // Open Graph / Facebook
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Additional Meta Tags
    updateMetaTag('keywords', 'photography, portfolio, wedding photography, portrait photography, travel photography, professional photographer');
    updateMetaTag('author', 'Your Name');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, image, url]);

  return null;
};

export default SEO;

