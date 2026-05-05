import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trainingsData } from '../data/trainings';
import './ExperienceTimeline.css';

const ExperienceTimeline = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const toggleYear = (year) => {
    if (expandedYear === year) setExpandedYear(null);
    else setExpandedYear(year);
  };

  const years = Object.keys(trainingsData).sort((a, b) => b - a);

  return (
    <section id="experience" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-text" style={{fontSize:'1.5rem', marginRight:'1rem'}}>03.</span>
        Trainings & Workshops
      </motion.h2>

      <div className="accordion-container">
        {years.map((year, idx) => (
          <motion.div 
            className="accordion-item glass-panel"
            key={year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div 
              className={`accordion-header ${expandedYear === year ? 'active' : ''}`}
              onClick={() => toggleYear(year)}
            >
              <h3 className="mono-text" style={{ fontSize: '1.5rem', margin: 0, color: 'var(--neon-cyan)' }}>{year}</h3>
              <div className="accordion-icon">
                <span className="mono-text">{expandedYear === year ? '−' : '+'}</span>
              </div>
            </div>
            <AnimatePresence>
              {expandedYear === year && (
                <motion.div 
                  className="accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ul className="training-list">
                    {trainingsData[year].map((training, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (i * 0.05) }}
                      >
                        <span className="bullet-point"></span>
                        <p>{training}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
