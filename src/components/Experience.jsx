import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-text" style={{fontSize:'1.5rem', marginRight:'1rem'}}>06.</span>
        Experience
      </motion.h2>

      <div className="experience-timeline">
        <div className="timeline-line"></div>
        {cvData.experience.map((exp, idx) => (
          <motion.div 
            className="timeline-item"
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="timeline-dot">
              <Briefcase size={16} color="var(--bg-color)" />
            </div>
            <div className="timeline-content glass-panel">
              <span className="mono-text timeline-duration">{exp.duration}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-org">{exp.organization}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
