import React from 'react';
import { motion } from 'framer-motion';

const LinkedinIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" style={{ padding: 'var(--section-padding)', background: 'var(--bg-surface)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '80px', alignItems: 'center' }}>
        
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
           viewport={{ once: true }}
        >
          <h2 className="font-display" style={{ fontSize: '3.5rem', marginBottom: '32px', color: 'var(--charcoal)' }}>Start the<br/>Conversation.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '64px', fontSize: '1.2rem', maxWidth: '400px' }}>
            Ready to elevate your operational efficiency? Reach out to discuss how we can refine your workflow.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Direct</p>
                <p style={{ fontWeight: '600', fontSize: '1.2rem' }}>+1 (555) 123-4567</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                <LinkedinIcon />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Network</p>
                <p style={{ fontWeight: '600', fontSize: '1.2rem' }}>in/kimberlykate</p>
              </div>
            </div>
          </div>

          <motion.div 
            style={{ marginTop: '80px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="/cv_placeholder.pdf" 
              download
              className="btn-ghost"
              style={{ paddingLeft: 0 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> 
              Download Prospectus (CV)
            </a>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.2, 0, 0, 1] }}
           viewport={{ once: true }}
           style={{ 
             background: 'var(--bg-surface-lowest)', 
             padding: '64px 48px', 
             borderRadius: '24px',
             boxShadow: 'var(--shadow-ambient)'
           }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <input className="input-floating" type="text" placeholder="First Name" />
              </div>
              <div>
                <input className="input-floating" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div>
              <input className="input-floating" type="email" placeholder="Email Address" />
            </div>
            <div>
              <input className="input-floating" type="text" placeholder="Subject" />
            </div>
            <div style={{ marginTop: '16px' }}>
              <button type="button" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Inquiry
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
