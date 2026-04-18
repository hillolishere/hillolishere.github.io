import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="section-container">
        <motion.div 
          className="contact-terminal glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="mono-text" style={{ marginLeft: '1rem', fontSize: '0.8rem' }}>contact.sh</span>
          </div>
          
          <div className="terminal-body">
            <p className="mono-text"><span className="prompt">root@hilloldas:~$</span> ping contact_info</p>
            
            <div className="contact-grid">
              <div className="contact-item">
                <Mail className="contact-icon" color="var(--neon-cyan)" />
                <div className="contact-details">
                  <a href={`mailto:${cvData.hero.contact.email}`} className="contact-link">{cvData.hero.contact.email}</a>
                  <a href={`mailto:${cvData.hero.contact.altEmail}`} className="contact-link">{cvData.hero.contact.altEmail}</a>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" color="var(--neon-emerald)" />
                <div className="contact-details">
                  <span className="contact-text">{cvData.hero.contact.mobile}</span>
                </div>
              </div>

              <div className="contact-item">
                <MapPin className="contact-icon" color="var(--neon-blue)" />
                <div className="contact-details">
                  <span className="contact-text">Agartala, Tripura, India</span>
                </div>
              </div>
            </div>

            <p className="mono-text" style={{marginTop: '2rem'}}><span className="prompt">root@hilloldas:~$</span> connect_socials</p>
            
            <div className="social-links">
              <a href={cvData.hero.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Globe size={24} />
                <span>LinkedIn</span>
              </a>
              <a href={cvData.hero.contact.facebook} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Globe size={24} />
                <span>Facebook</span>
              </a>
            </div>
            
            <p className="mono-text cursor-blink"><span className="prompt">root@hilloldas:~$</span> _</p>
          </div>
        </motion.div>

        <div className="footer-copyright">
          <p className="mono-text">Designed & Built by Gemini AI | Original Content © Er. Hillol Das</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
