import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles automatic scroll management upon route and hash changes.
 * Supports smooth scrolling to section IDs (e.g. /#services, /#about)
 * or instant reset to top when navigating to root or fresh pages.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Delay slightly to ensure DOM has rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [pathname, hash]);

  return null;
}
