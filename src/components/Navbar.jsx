import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' },
  { text: 'Academic Profile', href: '#academic' },
  { text: 'Software Skills', href: '#skills' },
  { text: 'Projects', href: '#projects' },
  { text: 'Publications', href: '#publications' },
  { text: 'Experience', href: '#experience' },
  { text: 'Trainings & Workshops', href: '#trainings' },
  { text: 'Achievements', href: '#achievements' },
  { text: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if(target) {
        // Use a tiny timeout to ensure React state updates don't interrupt the browser's scroll layout engine
        setTimeout(() => {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 50);
      }
    } else {
      window.location.href = href;
    }

    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-content section-container">
        <a href="#home" className="logo mono-text">
          <Terminal className="logo-icon" size={24} /> 
          <span>Er. Hillol Das</span>
        </a>

        <div className="desktop-menu">
          {navLinks.map((link, idx) => (
            <motion.a 
              key={idx} 
              href={link.href} 
              className="nav-link"
              onClick={(e) => handleScroll(e, link.href)}
              whileHover={{ scale: 1.05, color: 'var(--neon-cyan)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.text}
            </motion.a>
          ))}
          <motion.a 
            href="/Hillol_Das_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume glass-panel"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="var(--neon-cyan)"/> : <Menu size={28} color="var(--neon-cyan)"/>}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="mobile-link" 
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.text}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
