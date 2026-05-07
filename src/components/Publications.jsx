import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { BookOpen } from 'lucide-react';
import './Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-text" style={{fontSize:'1.5rem', marginRight:'1rem'}}>05.</span>
        Publications
      </motion.h2>

      <div className="publications-list">
        {cvData.publications.map((pub, idx) => (
          <motion.div 
            className="publication-card glass-panel"
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="pub-icon-wrapper">
              <BookOpen className="pub-icon" size={24} />
            </div>
            <div className="pub-content">
              <p>{pub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
