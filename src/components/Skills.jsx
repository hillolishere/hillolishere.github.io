import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import './Skills.css';

const Skills = () => {
  const categories = Object.keys(cvData.skills);
  const allSkills = Object.values(cvData.skills).flat();

  return (
    <section id="skills" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-text" style={{fontSize:'1.5rem', marginRight:'1rem'}}>04.</span>
        Software Skills
      </motion.h2>

      <div className="skills-grid">
        {categories.map((category, idx) => (
          <motion.div 
            className="skill-category glass-panel"
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="category-title mono-text">{category.toUpperCase()}</h3>
            <div className="badge-container">
              {cvData.skills[category].map((skill, sIdx) => (
                <span className="skill-badge" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="skills-marquee-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="skills-marquee">
          {allSkills.concat(allSkills).map((skill, idx) => (
            <span className="marquee-skill-badge" key={idx}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
