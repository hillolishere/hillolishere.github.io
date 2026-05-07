import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { Briefcase, ChevronRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono-text" style={{fontSize:'1.5rem', marginRight:'1rem'}}>04.</span>
        Projects
      </motion.h2>

      <div className="projects-grid">
        {cvData.projects.map((project, idx) => (
          <motion.div 
            className="project-card glass-panel"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="project-header">
              <div className="project-icon-wrapper">
                <Briefcase className="project-icon" size={24} />
              </div>
              <span className="mono-text project-year">{project.year}</span>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            
            {(project.domain || project.type) && (
              <div className="project-meta">
                {project.type && <span className="project-type">{project.type}</span>}
                {project.domain && <span className="project-domain">{project.domain}</span>}
              </div>
            )}
            
            <p className="project-desc">{project.desc}</p>
            
            {project.tech && (
              <div className="project-tech mono-text">
                <ChevronRight size={16} />
                <span>{project.tech}</span>
              </div>
            )}
            {project.organization && (
              <div className="project-org">
                <span>{project.organization}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
