import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  const bootSequence = [
    "INITIALIZING KERNEL...",
    "MOUNTING GLOW-FI MODULES...",
    "ESTABLISHING SECURE CONNECTION...",
    "SYSTEM ONLINE. WELCOME."
  ];

  useEffect(() => {
    // Disable scroll while preloader is active
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400); // Add a new line every 400ms

    // Progress bar animation
    const duration = 2000; // 2 seconds total for progress
    const updateInterval = 20;
    const steps = duration / updateInterval;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);
      
      if (currentStep >= steps) {
        clearInterval(progressTimer);
      }
    }, updateInterval);

    return () => {
      clearInterval(interval);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <motion.div 
      className="preloader-container"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: "-100%", 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      <div className="tech-grid-bg" style={{ zIndex: 0, opacity: 0.3 }}></div>
      <div className="bg-blob blob-1"></div>
      
      <div className="preloader-terminal glass-panel" style={{ zIndex: 1 }}>
        {lines.map((line, index) => (
          <motion.div 
            key={index} 
            className="terminal-line"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {line}
          </motion.div>
        ))}
        {lines.length < bootSequence.length && (
          <div className="terminal-line">
            <span className="terminal-cursor"></span>
          </div>
        )}
        
        <div className="preloader-progress-container">
          <div 
            className="preloader-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
