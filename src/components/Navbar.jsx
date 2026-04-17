import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'experience', 'contact'];
      let current = 'home';
      for (let s of sections) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = s;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
      style={{
        position: 'fixed',
        top: '24px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1000,
        pointerEvents: 'none',
        padding: '0 20px'
      }}
    >
      <div 
        className="glass-pill"
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '12px 32px',
          gap: '60px',
          pointerEvents: 'auto',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}
      >
        <h2 className="font-display" style={{ fontSize: '1.2rem', color: 'var(--primary)', margin: 0, letterSpacing: '2px' }}>ACHLYS.</h2>
        <ul className="nav-links">
          {['Home', 'Services', 'Experience', 'Contact'].map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <li key={item} style={{ position: 'relative' }}>
                <a 
                  href={`#${id}`}
                  style={{
                    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                    fontWeight: isActive ? '700' : '500',
                    fontSize: '0.95rem'
                  }}
                >
                  {item}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-gold)'
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
