import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { Mail, Phone, Globe, MapPin, Link } from 'lucide-react';
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
            <p className="mono-text"><span className="prompt">root@er.hilloldas:~$</span> echo "Get In Touch"</p>
            <div className="contact-message" style={{ margin: '1.5rem 0', paddingLeft: '1rem', borderLeft: '2px solid var(--neon-cyan)', color: 'var(--text-secondary)' }}>
              <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            </div>

            <p className="mono-text" style={{marginTop: '2rem'}}><span className="prompt">root@er.hilloldas:~$</span> ping contact_info</p>
            
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

            <p className="mono-text" style={{marginTop: '2rem'}}><span className="prompt">root@er.hilloldas:~$</span> connect_socials</p>
            
            <div className="social-links" style={{ flexWrap: 'wrap' }}>
              <a href={cvData.hero.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Globe size={24} />
                <span>LinkedIn</span>
              </a>
              <a href={cvData.hero.contact.facebook} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Globe size={24} />
                <span>Facebook</span>
              </a>
              <a href={cvData.hero.contact.instagram} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Link size={24} />
                <span>Instagram</span>
              </a>
              <a href={cvData.hero.contact.x} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Link size={24} />
                <span>X (Twitter)</span>
              </a>
              <a href={cvData.hero.contact.website} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Globe size={24} />
                <span>Website</span>
              </a>
            </div>
            
            <p className="mono-text cursor-blink"><span className="prompt">root@er.hilloldas:~$</span> _</p>
          </div>
        </motion.div>

        <div className="footer-copyright">
          <p className="mono-text">Designed & Built by Gemini AI | Original Content © Er. Hillol Das</p>
          <p className="mono-text" style={{ marginTop: '0.8rem', color: 'var(--text-primary)', fontSize: '1rem' }}>Made with ❤️ by Er. Hillol Das</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
