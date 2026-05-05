import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('glass-panel') ||
        target.classList.contains('accordion-header')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const ringVariants = {
    default: {
      x: mousePosition.x + 12,
      y: mousePosition.y + 12,
      scale: 1,
      opacity: 0.5,
      color: 'var(--neon-cyan)',
      rotate: 0
    },
    hover: {
      x: mousePosition.x + 12,
      y: mousePosition.y + 12,
      scale: 1.8,
      opacity: 0.8,
      color: 'var(--neon-emerald)',
      rotate: -15
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.05 }}
      >
        <MousePointer2 size={24} fill="var(--bg-color)" color="var(--neon-cyan)" />
      </motion.div>

      <motion.div
        className="custom-cursor-ring"
        variants={ringVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      >
        <MousePointer2 size={24} fill="transparent" strokeWidth={1} />
      </motion.div>
    </>
  );
};

export default CustomCursor;
