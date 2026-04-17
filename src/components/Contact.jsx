import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Phone, MapPin } from 'lucide-react';

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
    <section id="contact" style={{ padding: 'var(--section-padding)', background: 'white' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '80px' }}>
        
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
            Ready to take your business to the next level? Get in touch today for a free consultation.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ background: 'var(--primary-light)', padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Contact Me</p>
                <p style={{ fontWeight: '600' }}>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ background: 'var(--primary-light)', padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Location</p>
                <p style={{ fontWeight: '600' }}>Remote / Global</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ background: 'var(--primary-light)', padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}>
                <LinkedinIcon />
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Professional Profile</p>
                <p style={{ fontWeight: '600' }}>linkedin.com/in/kimberlykate</p>
              </div>
            </div>
          </div>

          <motion.div 
            style={{ marginTop: '50px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 style={{ marginBottom: '15px' }}>Curriculum Vitae</h4>
            <a 
              href="/cv_placeholder.pdf" 
              download
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px',
                padding: '12px 25px',
                background: 'var(--text-main)',
                color: 'white',
                borderRadius: '12px',
                fontWeight: '600'
              }}
            >
              <Download size={20} /> Download My CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="glass"
           style={{ padding: '50px', borderRadius: '32px' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ padding: '15px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'white' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ padding: '15px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'white' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
              <textarea rows="5" placeholder="How can I help you today?" style={{ padding: '15px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'white', resize: 'none' }}></textarea>
            </div>
            <button 
              type="button" 
              style={{ 
                padding: '18px', 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '12px', 
                fontWeight: '600', 
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
