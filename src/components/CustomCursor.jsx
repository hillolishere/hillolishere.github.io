import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

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
    </>
  );
};

export default CustomCursor;
