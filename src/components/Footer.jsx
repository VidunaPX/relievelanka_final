import React from 'react';
import '../styleCompants/Footer.css';

const Footer = ({ backgroundColor = 'linear-gradient(var(--dark-blue), var(--light-blue))' }) => {
  return (
    <footer className="relative z-10 py-12 px-6" style={{ background: backgroundColor, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-leaf" style={{ color: 'var(--accent)' }}></i>
          <span className="font-display text-lg text-white">Relieve Lanka</span>
        </div>
        <p className="text-xs text-center" style={{ color: 'rgba(255, 255, 255, 0.66)' }}>
          Till Children are free to learn, we are not free to rest
        </p>
        <div className="flex gap-4">
          <a 
            href="#" 
            style={{ color: 'rgba(255, 255, 255, 0.66)', transition: 'color 0.3s' }} 
            onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.66)'}
            aria-label="Twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a 
            href="#" 
            style={{ color: 'rgba(255, 255, 255, 0.66)', transition: 'color 0.3s' }} 
            onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.66)'}
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a 
            href="#" 
            style={{ color: 'rgba(255, 255, 255, 0.66)', transition: 'color 0.3s' }} 
            onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.66)'}
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
