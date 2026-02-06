import { useState, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import PropTypes from 'prop-types';

const BeforeAfterSlider = ({ before, after, title = "Before / After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <h3 className="text-2xl font-serif text-center mb-6 text-gray-800 dark:text-gray-200">
        {title}
      </h3>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={after}
            alt="After"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            After
          </div>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={before}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Before
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Slider Handle */}
          <Motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-col-resize"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex space-x-1">
              <div className="w-0.5 h-6 bg-gray-400"></div>
              <div className="w-0.5 h-6 bg-gray-400"></div>
              <div className="flex flex-col space-y-1">
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Motion.div>
        </div>

        {/* Instructions overlay on first interaction */}
        {sliderPosition === 50 && !isDragging && (
          <Motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-xl">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                ← Drag to compare →
              </p>
            </div>
          </Motion.div>
        )}
      </div>
    </Motion.div>
  );
};

BeforeAfterSlider.propTypes = {
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default BeforeAfterSlider;
