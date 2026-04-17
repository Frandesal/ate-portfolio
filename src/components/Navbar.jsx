import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>K. Kate</h2>
        <ul style={{ display: 'flex', gap: '30px', fontWeight: '500' }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
