import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styleCompants/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Responsive padding: smaller on mobile, larger on md+ screens
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4" style={{ background: 'linear-gradient(to bottom, rgba(8,8,6,0.85), transparent)' }}>
      <div className="w-full flex items-center justify-between">
        
        {/* Logo links to home page */}
        <Link to="/" className="flex items-center gap-2 text-white no-underline">
          <img 
            src="relieveLankalogo.png" 
            alt="Relieve Lanka Logo" 
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
          />
          <span className="font-display text-xl tracking-tight uppercase">Relieve Lanka</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/our-story" className="nav-link">Our Story</Link>
        </div>
        
        <button 
          className="md:hidden text-white text-xl" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobileMenu" 
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden mt-4 pb-4 flex-col gap-4 items-center`}
      >
        <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
        <Link to="/our-story" className="nav-link" onClick={closeMobileMenu}>Our Story</Link>
      </div>
    </nav>
  );
};

export default Header;