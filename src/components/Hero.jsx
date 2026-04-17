import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '80px',
      background: 'linear-gradient(135deg, #F4F1FF 0%, #FFFFFF 100%)'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '40px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px' }}>VIRTUAL ASSISTANT</span>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '20px', marginTop: '10px' }}>
            Kimberly Kate E. Longno
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '30px', maxWidth: '500px' }}>
            Elevating your business efficiency with professional administrative support, 
            strategic planning, and seamless coordination.
          </p>
          <motion.div style={{ display: 'flex', gap: '15px' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              style={{ 
                padding: '15px 35px', 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '50px',
                fontWeight: '600',
                boxShadow: '0 10px 20px rgba(126, 91, 226, 0.3)'
              }}
            >
              Let's Talk
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services" 
              style={{ 
                padding: '15px 35px', 
                border: '1px solid var(--primary)', 
                color: 'var(--primary)', 
                borderRadius: '50px',
                fontWeight: '600'
              }}
            >
              My Services
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            width: '450px',
            height: '450px',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            background: 'var(--primary-light)'
          }}>
            <img 
              src={profileImg} 
              alt="Kimberly Kate" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Decorative Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '-20px',
              right: '20px',
              width: '100px',
              height: '100px',
              border: '2px dashed var(--primary)',
              borderRadius: '50%',
              zIndex: -1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
