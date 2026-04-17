import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023 - Present',
    role: 'Lead Virtual Assistant',
    company: 'Independent Contractor',
    desc: 'Driving operations for fast-growing startups. Handling major projects, complex schedules, and executive tasks seamlessly so founders can focus on scaling.'
  },
  {
    year: '2021 - 2023',
    role: 'Executive Assistant',
    company: 'Creative Agency',
    desc: 'Managed travel, streamlined workflows, and acted as the main point of contact for VIP clients, ensuring white-glove service at all times.'
  },
  {
    year: '2019 - 2021',
    role: 'Project Coordinator',
    company: 'Tech Solutions Inc.',
    desc: 'Orchestrated team communications and tracked milestones to launch over 20 digital products successfully and under budget.'
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: 'var(--section-padding)', background: 'var(--bg-surface-low)' }}>
      <div className="container">
        <h2 className="font-display hero-title" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '80px', color: 'var(--charcoal)' }}>The Journey.</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.2, 0, 0, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.01, x: 5 }}
              style={{ 
                background: 'var(--bg-surface-lowest)',
                padding: '40px',
                borderRadius: '24px',
                display: 'grid',
                gridTemplateColumns: 'minmax(120px, 1fr) 3fr',
                gap: '20px',
                alignItems: 'start',
                boxShadow: 'var(--shadow-ambient)',
                transition: 'all var(--transition)'
              }}
              className="grid-2-mobile"
            >
              <div style={{ 
                color: 'var(--accent-gold)', 
                fontWeight: '600', 
                fontSize: '1rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em'
              }}>
                {exp.year}
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: '1.75rem', marginBottom: '8px', color: 'var(--primary)' }}>{exp.role}</h3>
                <p style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '16px', letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                  {exp.company}
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .grid-2-mobile {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
          }
        }
      `}} />
    </section>
  );
};

export default Experience;
