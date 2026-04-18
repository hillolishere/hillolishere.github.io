import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { GraduationCap } from 'lucide-react';
import './AcademicProfile.css';

const AcademicProfile = () => {
  return (
    <section id="academic" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-text" style={{fontSize:'1.5rem', marginRight:'1rem'}}>02.</span>
        Academic Profile
      </motion.h2>

      <div className="academic-list">
        {cvData.academicProfile.map((item, idx) => (
          <motion.div 
            className="academic-card glass-panel"
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="acad-icon">
              <GraduationCap color="var(--neon-blue)" size={28} />
            </div>
            <div className="acad-content">
              <span className="mono-text acad-year">{item.year}</span>
              <h3 className="acad-degree">{item.degree}</h3>
              <p className="acad-institution">{item.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AcademicProfile;
