import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { Terminal, Code, Cpu } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container section-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mono-text greeting">sys.out.println("Hello, World!");</p>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            I'm <span className="highlight">{cvData.hero.title}</span>.
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {cvData.hero.role}
          </motion.h2>

          <motion.p 
            className="hero-desc glass-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            With <span className="mono-text">{cvData.hero.experience}</span>, I specialize in bridging the gap between cutting-edge research, e-Governance, and scalable technical architectures. Building the digital infrastructure for tomorrow.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <a href="#experience" className="btn-primary glass-panel">Explore My Work</a>
            <a href="#contact" className="btn-secondary mono-text">{'<Contact />'}</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="tech-sphere glass-panel">
            <div className="orbit orbit-1">
               <Terminal className="floating-icon icon-1" color="var(--neon-cyan)" />
            </div>
            <div className="orbit orbit-2">
               <Code className="floating-icon icon-2" color="var(--neon-blue)" />
            </div>
            <div className="orbit orbit-3">
               <Cpu className="floating-icon icon-3" color="var(--neon-emerald)" />
            </div>
            <div className="core pulse"></div>
          </div>
        </motion.div>

      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
