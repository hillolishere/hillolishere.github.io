import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { Target, Lightbulb } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-text" style={{fontSize:'1.5rem', marginRight:'1rem'}}>01.</span>
        About Me
      </motion.h2>

      <div className="about-grid">
        <motion.div 
          className="about-panel glass-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="panel-header">
            <Target className="panel-icon" color="var(--neon-emerald)" size={32} />
            <h3>Objective</h3>
          </div>
          <p className="about-text">{cvData.objective}</p>
        </motion.div>

        <motion.div 
          className="about-panel glass-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="panel-header">
            <Lightbulb className="panel-icon" color="var(--neon-cyan)" size={32} />
            <h3>Areas of Interest</h3>
          </div>
          <ul className="interest-list">
            {cvData.interests.map((interest, idx) => (
               <li key={idx}>
                 <span className="mono-text" style={{color:'var(--neon-cyan)'}}>{'>'}</span> {interest}
               </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
