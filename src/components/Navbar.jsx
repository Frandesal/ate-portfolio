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
      transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
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
          padding: '16px 40px',
          gap: '80px',
          pointerEvents: 'auto',
          boxShadow: 'var(--shadow-playful)',
          border: 'var(--border-playful)'
        }}
      >
        <h2 className="font-display" style={{ fontSize: '1.4rem', color: 'var(--color-accent-1)', margin: 0, letterSpacing: '1px' }}>Kate.</h2>
        <ul className="nav-links" style={{ display: 'flex', gap: '32px', margin: 0, padding: 0, listStyle: 'none' }}>
          {['Home', 'Services', 'Experience', 'Contact'].map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <li key={item} style={{ position: 'relative' }}>
                <a 
                  href={`#${id}`}
                  style={{
                    color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                    fontWeight: isActive ? '700' : '600',
                    fontSize: '1rem',
                    textTransform: 'lowercase'
                  }}
                >
                  {item}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: '4px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--color-accent-1)'
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
