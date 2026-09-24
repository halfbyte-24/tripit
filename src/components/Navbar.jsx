import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/dummy';
import '../styles/components.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <motion.nav
        className="navbar-pill"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="nav-desktop">
          <Link to="/" className="brand-logo" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', flex: '0 0 auto' }}>
            {siteConfig.brandName}
            <motion.img
              src="/images/paper_plane.png"
              alt="paper plane"
              style={{ position: 'absolute', right: '-45px', top: '-25px', width: '45px', pointerEvents: 'none', zIndex: 100 }}
              initial={{ opacity: 0, x: -90, y: 50, rotate: -40 }}
              animate={{ opacity: 1, x: [-70, -20, 0], y: [40, -15, 0], rotate: [-40, 5, 20] }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            />
          </Link>

          <div className="nav-group" style={{ flex: '1', justifyContent: 'center' }}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/tours" className="nav-link">Tours</Link>
            <Link to="/tours" className="nav-link">Upcoming</Link>
          </div>
          
          <div className="nav-group" style={{ flex: '0 0 auto', justifyContent: 'flex-end' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>Enquire Now</Link>
          </div>
        </div>

        <div className="nav-mobile">
          <Link to="/" className="brand-logo" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            {siteConfig.brandName}
            <motion.img
              src="/images/paper_plane.png"
              alt="paper plane"
              style={{ position: 'absolute', right: '-50px', top: '-35px', width: '60px', pointerEvents: 'none', zIndex: 100 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 15 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </Link>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/tours" onClick={() => setIsOpen(false)}>Tours</Link>
            <Link to="/tours" onClick={() => setIsOpen(false)}>Upcoming Trips</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Enquire Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
