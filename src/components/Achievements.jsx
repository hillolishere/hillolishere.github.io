import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { Award } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-text" style={{fontSize:'1.5rem', marginRight:'1rem'}}>05.</span>
        Achievements
      </motion.h2>

      <div className="achievements-list">
        {cvData.achievements.map((achievement, idx) => (
          <motion.div 
            className="achievement-card glass-panel"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Award className="award-icon" color="var(--neon-emerald)" size={24} />
            <p className="achievement-text">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
