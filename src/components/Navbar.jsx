import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'Services', 'Experience', 'Contact'];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'experience', 'contact'];
      let current = 'home';
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - window.innerHeight / 3) {
          current = s;
        }
      }
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'contact';
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '16px 0' : '24px 0',
          background: scrolled ? 'rgba(250, 248, 244, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.4s var(--ease)'
        }}
      >
        <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#home" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--text)' }}>
            Kate Longno
          </a>
          
          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-nav">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text)' : 'var(--text-secondary)',
                    position: 'relative',
                    letterSpacing: '0.02em',
                    transition: 'color 0.3s var(--ease)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
                  onMouseLeave={(e) => { if (!isActive) e.target.style.color = 'var(--text-secondary)'; }}
                >
                  {item}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{
                        position: 'absolute',
                        bottom: '-6px',
                        left: '50%',
                        marginLeft: '-3px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--accent)'
                      }}
                    />
                  )}
                </a>
              );
            })}
            <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
              Let's Talk
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 1001
            }}
          >
            <div style={{ width: '24px', display: 'flex', flexDirection: 'column', gap: mobileOpen ? '0' : '6px', transition: 'gap 0.3s' }}>
              <span style={{ width: '100%', height: '2px', background: 'var(--text)', display: 'block', transition: 'transform 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(1px)' : 'none' }} />
              <span style={{ width: '100%', height: '2px', background: 'var(--text)', display: 'block', transition: 'opacity 0.3s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ width: '100%', height: '2px', background: 'var(--text)', display: 'block', transition: 'transform 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-1px)' : 'none' }} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(250, 248, 244, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px'
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: active === item.toLowerCase() ? 'var(--accent)' : 'var(--text)'
                }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </>
  );
};

export default Navbar;
