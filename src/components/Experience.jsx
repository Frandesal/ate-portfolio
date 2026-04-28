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
    <section id="experience" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="font-display hero-title" style={{ fontSize: '4rem', margin: '0 0 16px 0' }}>The Journey.</h2>
          <div style={{ width: '80px', height: '8px', backgroundColor: 'var(--color-accent-2)', margin: '0 auto', borderRadius: '4px' }} />
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, type: 'spring' }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.02 }}
              style={{ 
                backgroundColor: 'var(--bg-card)',
                padding: '40px',
                borderRadius: 'var(--border-radius-lg)',
                border: 'var(--border-playful)',
                boxShadow: 'var(--shadow-playful)',
                display: 'grid',
                gridTemplateColumns: 'minmax(120px, 1fr) 3fr',
                gap: '24px',
                alignItems: 'start',
                transition: 'transform var(--transition), box-shadow var(--transition)',
                position: 'relative'
              }}
              className="grid-2-mobile"
            >
              <div style={{ 
                backgroundColor: 'var(--color-accent-4)', 
                color: 'var(--text-main)',
                padding: '8px 16px',
                borderRadius: '100px',
                fontWeight: '700', 
                fontSize: '0.9rem',
                border: 'var(--border-playful)',
                display: 'inline-block',
                transform: 'rotate(-3deg)'
              }}>
                {exp.year}
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: '2rem', margin: '0 0 8px 0', color: 'var(--text-main)' }}>{exp.role}</h3>
                <p style={{ fontWeight: '700', color: 'var(--color-accent-1)', margin: '0 0 16px 0', fontSize: '1.1rem' }}>
                  {exp.company}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0, fontWeight: '500' }}>{exp.desc}</p>
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
