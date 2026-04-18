import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import './ExperienceTimeline.css';

const ExperienceTimeline = () => {
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
        Experience & Trainings
      </motion.h2>

      <div className="timeline">
        {cvData.experienceTimeline.map((item, idx) => (
          <motion.div 
            className="timeline-item"
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="mono-text timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
              <span className="type-badge mono-text">{item.type}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
