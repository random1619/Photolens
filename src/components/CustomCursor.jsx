import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device has a mouse/cursor
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (isDesktop) {
      window.addEventListener('mousemove', updateMousePosition);
      document.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      if (isDesktop) {
        window.removeEventListener('mousemove', updateMousePosition);
        document.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <Motion.div
        className="fixed top-0 left-0 z-50 h-3 w-3 rounded-full pointer-events-none mix-blend-difference bg-[color:var(--accent)] shadow-[0_0_18px_rgba(199,154,90,0.7)]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.9 : 1,
        }}
        transition={{ type: 'spring', stiffness: 520, damping: 30 }}
      />
      <Motion.div
        className="fixed top-0 left-0 z-50 h-9 w-9 rounded-full pointer-events-none mix-blend-difference border border-[color:var(--accent)]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.9 : 0.7,
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 16 }}
      />
    </>
  );
};

export default CustomCursor;


