import { useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useGallery } from '../context/GalleryContext';

const GalleryModal = () => {
  const {
    isModalOpen,
    currentImages,
    currentIndex,
    closeGallery,
    nextImage,
    prevImage,
  } = useGallery();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeGallery();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeGallery, nextImage, prevImage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  if (!isModalOpen || currentImages.length === 0) return null;

  const currentImage = currentImages[currentIndex];

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeGallery}
        >
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-50 p-2 text-white hover:text-accent transition-colors"
            aria-label="Close gallery"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-50 text-white text-sm">
            {currentIndex + 1} / {currentImages.length}
          </div>

          {/* Navigation Buttons */}
          {currentImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Container */}
          <Motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh] mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-semibold mb-1">{currentImage.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{currentImage.location}</p>
              <span className="inline-block px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
                {currentImage.category}
              </span>
            </div>
          </Motion.div>

          {/* Keyboard Hints */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs opacity-50">
            Use ← → arrow keys or swipe to navigate • ESC to close
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;


