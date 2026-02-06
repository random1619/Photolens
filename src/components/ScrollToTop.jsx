import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <span className="glass-panel flex items-center gap-2 rounded-full px-4 py-3 shadow-[0_20px_50px_rgba(25,20,15,0.2)] transition-transform duration-300 group-hover:-translate-y-1">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent)] text-white shadow-[0_10px_20px_rgba(199,154,90,0.4)]">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Top
            </span>
          </span>
        </Motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;


