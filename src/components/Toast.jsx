import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ICONS = {
  success: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.42 0l-3.6-3.6a1 1 0 011.42-1.42l2.89 2.89 6.49-6.49a1 1 0 011.42 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 11-2 0V7zm1 8a1.25 1.25 0 100-2.5A1.25 1.25 0 0010 15z"
        clipRule="evenodd"
      />
    </svg>
  ),
  info: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-11.5a1 1 0 11.001-2.001A1 1 0 0110 6.5zm-1 2.5a1 1 0 012 0v5a1 1 0 11-2 0v-5z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const accent =
    type === 'success'
      ? 'text-emerald-600 dark:text-emerald-400'
      : type === 'error'
      ? 'text-rose-600 dark:text-rose-400'
      : 'text-sky-600 dark:text-sky-400';

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -30, x: '-50%', scale: 0.98 }}
          animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
          exit={{ opacity: 0, y: -30, x: '-50%', scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="fixed top-8 left-1/2 z-50 w-[92vw] max-w-[420px]"
        >
          <div className="glass-panel flex items-start gap-3 rounded-2xl px-5 py-4 shadow-[0_18px_60px_rgba(20,15,10,0.25)]">
            <span className={`mt-0.5 rounded-full bg-white/70 p-2 ${accent}`}>
              {ICONS[type] || ICONS.info}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-[var(--ink)]">{message}</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                <Motion.div
                  className="h-full w-full bg-[color:var(--accent)]"
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ duration: 4, ease: 'linear' }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
              aria-label="Close"
              type="button"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
